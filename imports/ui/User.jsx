import React, { useState, useEffect } from 'react'
import { Meteor } from 'meteor/meteor';

import Mediation from './Mediation';
import { Link } from 'react-router-dom';
import Litige from './Litige';
import Pagination from './Pagination';
import Search from './Search';
import Header from './Header';
const User = () => {
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
            <Header/>
            <div className="container-xl mt-5">
                <div className="page-header d-print-none">
                    <div className="row align-items-center">

                       
                    </div>
                </div>
            </div>
            
            {!show1? 
            <>
            {show ? <Mediation setShow1={setShow1} /> : null}
            {!show ? <div className="container">
                <div>
                <div className="d-flex pull-right">
                            <div className="btn-list">

                                <Link to="/mediations/create" onClick={onclick1} className="btn btn-primary d-none d-sm-inline-block text-decoration-none" >
                                    Create new Mediation</Link>
                                
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
                                        setData={media}
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
