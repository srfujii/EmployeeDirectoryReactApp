import React from "react";

function ResultList(props) {
    console.log("Props in Result List: ", props.results);

    const htmlProps = props.results.map(employee => (
        <div key={employee.phone} className="row row-cols-5">
            <div className="col"><img src={employee.picture.thumbnail} /></div>
            <div className="col">{employee.name.first + employee.name.last}</div>
            <div className="col">{employee.phone}</div>
            <div className="col">{employee.email}</div>
            <div className="col">{employee.dob.date}</div>
        </div>
    ));

    console.log("HTML Props: ", htmlProps);

    return (
        <>
        <div className="container">
            <div className="row row-cols-5">
                <div className="col">Image</div>
                <div className="col">Name</div>
                <div className="col">Phone</div>
                <div className="col">Email</div>
                <div className="col">DOB</div>
            </div>
        </div>
        {htmlProps}
        </>


        //    <ul className="list-group">
        //         <li> I'm a fucking list item</li>
        //             {props.results.map(employee => (
        //                 <li className="list-group-item" key={employee.phone}>
        //                 <img alt={employee.name} className="img-fluid" src={employee.picture.thumbnail} />
        //                 {/* {employee.name} {employee.phone} {employee.email} {employee.dob} */}
        //                 </li>
        //             ))}
        //     </ul>
    );
}

export default ResultList;
