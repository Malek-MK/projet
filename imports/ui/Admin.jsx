import React, { useState, useEffect } from 'react'
import { Meteor } from 'meteor/meteor';
import Button from "react-bootstrap/Button";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Mediation from './Mediation';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Litige from '../ui/Litige';
import Pagination from '../ui/Pagination';
import Search from '../ui/Search';
const User = () => {
    const history = useHistory();
    const onLogout = () => {
        Meteor.logout();
        history.replace('/');
    }
    const [show, setShow] = useState(false);
    const [mediations, setMediations] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "_id", dir: "asc" });
    const { field, dir } = sorting;
    const ITEMS_PER_PAGE = 5;

    useEffect(() => {
        renderMediations();
    }, [search, currentPage, sorting]);

    const headers = [
        { name: "PartieA", field: "nomsoc", sortable: true },
        { name: "PartieB", field: "nomsoc1", sortable: true },
        { name: "Status", field: "status", sortable: false },
        { name: "Date", field: "time", sortable: true },
        { name: "Update", field: "update", sortable: false },
        { name: "Delete", field: "delete", sortable: false },
    ];
    const renderMediations = () => {
        Meteor.call('showMediations', { currentPage, ITEMS_PER_PAGE, search, sortBy: field, sortOrder: dir },
            (err, { items, totalCount }) => {
                setMediations(items);
                setTotalItems(totalCount);
            });
    }
    useEffect(() => {
        renderMediations();
    }, []);

    const handleSort = (field, dir) => {
        setSorting({
            field,
            dir,
        });
    }; 
    return (
        <div>
            <header className="navbar navbar-expand-md navbar-light d-print-none">
     
            <div class="container-xl">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                      <a className="nav-link decoration-none">
                        Dashboard
                      </a>
                    </h1>
                   
                      
                     
                    
                    <div class="collapse navbar-collapse" id="navbar-menu">
                      <div class="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
                        <ul class="navbar-nav">
                        <li className="nav-item active ">
                                    <Link to="/" className="nav-link decoration-none">
                                        
                                       Home
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <NavDropdown title="Médiation" >
                                        <NavDropdown.Item onClick={() => setShow(false)}>Mes Médiations</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Mes Litiges</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => setShow(true)}>Ajouter une médiation</NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                                <li className="nav-item">
                                    <NavDropdown title="Arbitrage" >
                                        <NavDropdown.Item href="#action/3.1">Arbitrages</NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                                
                        </ul>
                        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link decoration-none" >Hello, <b className="text-dark">{Meteor.user().username}</b></a>
        </li>
        <li class="nav-item">
        <Button variant="outline-danger" onClick={onLogout} className="btn rounded-circle mt-1 ml-5 ">
                                <i className="fa fa-power-off" aria-hidden="true"></i>
                            </Button>
        </li>
      </ul>
    </div>
                      </div>
                    </div>
                  </div>
            </header>
                    <div className="container-xl mt-5">
                        <div className="page-header d-print-none">
                            <div className="row align-items-center">
                                
                                {!show ? <div className="col-auto ms-auto d-print-none">
                                    <div className="btn-list">

                                        <a onClick={() => setShow(true)} className="btn btn-primary d-none d-sm-inline-block" >
                                            Create new Mediation
          </a>
                                        <a href="#" className="btn btn-primary d-sm-none btn-icon" aria-label="Create new report">
                                        </a>
                                    </div>
                                </div> : null}
                            </div>
                        </div>
                    </div>

             
            
            {show ? <Mediation setShow={setShow} /> : null}
            {!show ? <div className="container">
                <div className="col mb-3 col-12 text-center">
                    <div className="row">
                        <div className="col-md-6">
                            <Pagination
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                        <div className="col-md-6 d-flex flex-row-reverse mb-3">
                            <Search onSearch={(value) => {
                                setSearch(value);
                                setCurrentPage(1);
                            }}
                            />
                        </div>
                    </div>
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                {headers.map(({ name, sortable, field }) => (
                                    <th
                                        key={name}
                                        onClick={() =>
                                            handleSort(
                                                field,
                                                sorting.field === field
                                                    ? sorting.dir == "asc"
                                                        ? "desc"
                                                        : "asc"
                                                    : "asc"
                                            )
                                        }
                                    >
                                        {sorting.field === field ? (
                                            sorting.dir === "asc" ? (
                                                <i className="fa fa-arrow-up" ></i>
                                            ) : (
                                                <i className="fa fa-arrow-down" ></i>
                                            )
                                        ) : null}{" "}
                                        {name}
                                    </th>
                                ))}

                            </tr>
                        </thead>
                        <tbody>
                            {mediations.map((media) => {
                                return (
                                    <Litige
                                        key={media._id}
                                        media={media}
                                        fetch={renderMediations}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div></div> : null}
        </div>
    )
}

export default User;
