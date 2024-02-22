import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';
function Ledger() {
  const tableRef = useRef(null);

  useEffect(() => {
    $(tableRef.current).DataTable();
  }, []);
  return (
    <>
    <div className='container mt-5 w-75' style={{ alignItems: "center", justifyContent: "center" }}>
    <form className="text-center">
      <h4>Create Ledger</h4>
      <div className="col-12 col-md-6 col-xl-6 mx-auto">
        <div className="form-group local-forms">
          <input
            type="text"
            className={`form-control`}
            placeholder="Ledger Name"
          />
        </div>
      </div>
  
      <div className="col-12 col-md-6 col-xl-6 mx-auto">
        <div className="form-group local-forms">
          <input
            type="number"
            className={`form-control`}
            placeholder="Opening Balance"
          />
        </div>
      </div>
  
      <div className="col-12 col-md-6 col-xl-6 mx-auto">
        <div className="form-group local-forms">
          <input
            type="number"
            className={`form-control`}
            placeholder="Closing Balance"
          />
        </div>
      </div>
  
      <div className="col-12 col-md-6 col-xl-6 mx-auto">
        <div className="form-group local-forms">
          <button type="submit" className="btn btn-primary col-10">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
  <div class="container mt-5" >
  <div class="table-responsive">
  <table ref={tableRef} className="table table-striped">
      <thead>
        <tr>
          <th scope="col">N.O</th>
          <th scope="col">Ledger Name</th>
          <th scope="col">Opening Price</th>
          <th scope="col">Closing Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Afsal</td>
          <td>500.cr</td>
          <td>1000 . dr</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jane</td>
          <td>1000 .cr</td>
          <td>400 .dr</td>
        </tr>
       
      </tbody>
    </table>
  </div>
</div>
  </>
  )
}

export default Ledger