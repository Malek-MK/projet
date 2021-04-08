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
import NavCheck from '../ui/NavCheck';
const User = () => {
    const history = useHistory();
    const onLogout = () => {
        Meteor.logout();
        history.replace('/');
    }
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [mediations, setMediations] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "_id", dir: "asc" });
    const { field, dir } = sorting;
    const ITEMS_PER_PAGE = 5;

  

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
    }, [search, currentPage, sorting]);
    
    useEffect(() => {
        renderMediations();
    }, []);

    const handleSort = (field, dir) => {
        setSorting({
            field,
            dir,
        });
    };
    const onclick1=()=>{
        setShow(true)
        setShow1(false)
    }
    const onclick2=()=>{
        setShow(false)
        setShow1(false)
    }
    const onclick3=()=>{
        setShow(true)
        setShow1(false)
    }
    return (
        <div>
            <header className="navbar navbar-expand-md navbar-light d-print-none">

                <div className="container-xl">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                        <a className="nav-link decoration-none">
                            <h3><i className="fa fa-home"></i>Dashboard</h3>
                        </a>
                    </h1>




                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
                            <ul className="navbar-nav">
                                <li className="nav-item active ">
                                    <Link to="/" className="nav-link decoration-none">

                                        Go_Home
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <NavDropdown title="Médiation" >
                                        <NavDropdown.Item onClick={onclick2}>Mes Médiations</NavDropdown.Item>
                                        <NavDropdown.Item >Mes Litiges</NavDropdown.Item>
                                        <NavDropdown.Item onClick={onclick3}>Ajouter une médiation</NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                                <li className="nav-item">
                                    <NavDropdown title="Arbitrage" >
                                        <NavDropdown.Item >Arbitrages</NavDropdown.Item>
                                    </NavDropdown>
                                </li>

                            </ul>
                            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a className="nav-link decoration-none" >Hello, <b className="text-dark">{Meteor.user().username}</b></a>
                                    </li>
                                    <li className="nav-item">
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

                       
                    </div>
                </div>
            </div>
            {show1?<NavCheck/>:null}
            {!show1? 
            <>
            {show ? <Mediation setShow1={setShow1} /> : null}
            {!show ? <div className="container">
                <div>
                <div className="d-flex pull-right">
                            <div className="btn-list">

                                <a onClick={onclick1} className="btn btn-primary d-none d-sm-inline-block" >
                                    Create new Mediation
          </a>
                                <a href="#" className="btn btn-primary d-sm-none btn-icon" aria-label="Create new report">
                                </a>
                            </div>
                        </div> 
                </div>
                <div className="card-title mb-5"><h3 className="card-label">
                List of mediation files
                        </h3><span className="d-block text-muted pt-2 font-size-sm">Consult and edit my mediation files</span></div>
                <div className="col mb-3 col-12 text-center">
                    <div className="row ">
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
                                        setShow1={setShow1}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div></div> : null}
            </>
            :null}
            
        </div>
    )
}

export default User;
