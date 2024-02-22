import React from 'react'

function Billing() {
  return (
       <div className="card">
  <div className="card-body">
    <div className="container mb-5 mt-3">
      <div className="row d-flex align-items-baseline">
        <div className="col-xl-9">
          <h1>Billing</h1>
        </div>
        <div className="col-xl-3 float-end">
          <a
            className="btn btn-light text-capitalize border-0"
            data-mdb-ripple-color="dark"
          >
            <i className="fas fa-print text-primary" /> Print
          </a>
          <a
            className="btn btn-light text-capitalize"
            data-mdb-ripple-color="dark"
          >
            <i className="far fa-file-pdf text-danger" /> Export
          </a>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          {/* <div className="col-xl-4">
            <p className="text-left">Invoice</p>
            <ul className="list-unstyled">
              <li className="text-muted">
                <i className="fas fa-circle" style={{ color: "#84B0CA" }} />{" "}
                <span className="fw-bold">ID:</span>#123-456
              </li>
              <li className="text-muted">
                <i className="fas fa-circle" style={{ color: "#84B0CA" }} />{" "}
                <span className="fw-bold">Creation Date: </span>Jun 23,2021
              </li>
              <li className="text-muted">
                <i className="fas fa-circle" style={{ color: "#84B0CA" }} />{" "}
                <span className="me-1 fw-bold">Status:</span>
                <span className="badge bg-warning text-black fw-bold">
                  Unpaid
                </span>
              </li>
            </ul>
          </div> */}
          <div style={{textAlign:"left" , marginBottom:"55px"}}>
            <p>Date : 12/10/2023</p>
            <p>Invoice N.o : FHB9875214</p>
            <p>select Ledger   <span style={{fontWeight:"900" ,fontSize:"25px"}}>  + </span></p>
          </div>
        </div>
        <div cla ssName="row my-2 mx-1 justify-content-center">
          <table className="table table-striped table-borderless">
            <thead
              style={{ backgroundColor: "#84B0CA" }}
              className="text-white"
            >
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product</th>
                <th scope="col">Qty</th>
                <th scope="col">UOM</th>
                <th scope="col">Unit rate</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <th><input className='form-control w-50 mx-auto'/> </th>
                <th><input className='form-control w-25 mx-auto'/> </th>
                <th><input className='form-control w-25 mx-auto'/> </th>
                <th><input className='form-control w-25 mx-auto'/> </th>
                <th>5200</th>
              </tr>
              <tr>
                <th scope="row">1</th>
                <th><input className='form-control w-50 mx-auto'/> </th>
                <th><input className='form-control w-25 mx-auto'/> </th>
                <th><input className='form-control w-25 mx-auto'/> </th>
                <th><input className='form-control w-25 mx-auto'/> </th>
                <th>5200</th>
              </tr>
              <tr>
                <th scope="row">1</th>
                <th><input className='form-control w-50 mx-auto'/> </th>
                <th><input className='form-control w-25 mx-auto'/> </th>
                <th><input className='form-control w-25 mx-auto'/> </th>
                <th><input className='form-control w-25 mx-auto'/> </th>
                <th>5200</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col-xl-8">
            <p className="ms-3">Add additional notes and payment information</p>
          </div>
          <div className="col-xl-3">
            <ul className="list-unstyled">
              <li className="text-muted ms-3">
                <span className="text-black me-4">SubTotal</span>$1110
              </li>
              <li className="text-muted ms-3 mt-2">
                <span className="text-black me-4">Tax(15%)</span>$111
              </li>
            </ul>
            <p className="text-black float-start">
              <span className="text-black me-3"> Total Amount</span>
              <span style={{ fontSize: 25 }}>$1221</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-xl-10">
            <p>Thank you for your purchase</p>
          </div>
          <div className="col-xl-2">
            <button
              type="button"
              className="btn btn-primary text-capitalize"
              style={{ backgroundColor: "#60bdf3" }}
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
  )
}

export default Billing