import React, { useState, useEffect } from 'react'
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import Litige from './Litige';
import Pagination from './Pagination';
import Search from './Search';
import Header from './Header';
import Footerr from './Footerr';

const User = () => {
    const [mediations, setMediations] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "_id", dir: "asc" });
    const { field, dir } = sorting;
    const ITEMS_PER_PAGE = 5;

  

    const headers = [
        { name: "Part A", field: "nomsoc", sortable: true },
        { name: "Part B", field: "nomsoc1", sortable: true },
        { name: "Status", field: "status", sortable: false },
        { name: "Date", field: "time", sortable: true },
        { name: "Update", field: "update", sortable: false },
        { name: "Delete", field: "delete", sortable: false },
        { name: "Result", field: "result", sortable: false },
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
   
    return (
        <div>
            <Header/>
            <br></br>
            <div className="container-xl mt-5">
                <div className="page-header d-print-none">
                    <div className="row align-items-center">

                       
                    </div>
                </div>
            </div>
            
            
            <>
            <div className="container">
                <div>
                <div className="d-flex pull-right">
                            <div className="btn-list">

                                <Link to="/mediations/create"  className="btn btn-primary d-none d-sm-inline-block text-decoration-none" >
                                    Create New Dispute</Link>
                                
                            </div>
                        </div> 
                </div>
                <div className="card-title mb-5">
                    <h3 className="card-label">List of disputes files</h3>
                    <span className="d-block text-muted pt-2 font-size-sm">
                        Consult and edit my dispute files</span>
                </div>
               
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
                                    setData={media}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Footerr/>
                </div> 
            </>
           
           
            
        </div>
    )
}

export default User;
