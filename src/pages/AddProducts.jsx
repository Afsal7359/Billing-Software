import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';
function AddProducts() {
  const tableRef = useRef(null);

  useEffect(() => {
    $(tableRef.current).DataTable();
  }, []);
  return (
    
    <>
    <div className='container mt-5 w-75' style={{ alignItems: "center", justifyContent: "center" }}>
    <form className="text-center">
      <h4>Add Products </h4>
      <div className="col-12 col-md-6 col-xl-6 mx-auto">
        <div className="form-group local-forms">
          <input
            type="text"
            className={`form-control`}
            placeholder="Product Name"
          />
        </div>
      </div>
  
      <div className="col-12 col-md-6 col-xl-6 mx-auto">
        <div className="form-group local-forms">
          <input
            type="number"
            className={`form-control`}
            placeholder="Unit Rate"
          />
        </div>
      </div>
  
      <div className="col-12 col-md-6 col-xl-6 mx-auto">
          <div className="form-group local-forms">
            <select
              className={`form-control select`}
            >
              <option value="">Select Unit of measurement</option>
              <option value="option1">kg</option>
              <option value="option2">L</option>
              <option value="option3">G</option>
            </select>
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
          <th scope="col">Product Name</th>
          <th scope="col">Unit Price</th>
          <th scope="col">UOM</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Tomato</td>
          <td>10</td>
          <td>kg</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Oil</td>
          <td>195</td>
          <td>L</td>
        </tr>
       
      </tbody>
    </table>
  </div>
</div>
  </>
      
  )
}

export default AddProducts