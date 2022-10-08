import React from 'react';
import img from './img1j.svg';
import './App.css'


const Cancelled = () => {
  return (
    <>
       
      <div class="col-md-7 btsk ">
        <div class="h-100 py-4 text-dark  rounded-3 my-2">
        <div class="container">
        <div class="row">
            <div class="col sm-2 md-2 lg-1" >
            <img src={img} class="rounded float-start " width="150px" height="250px" alt="..." ></img>
            </div>
            <div class="col sm-5 md-5 float-start mt-4">
              {/* <p className='fw-semibold'>Delivered 06 JUN 2022</p> */}
              Product Name 
          
              <div class="d-flex">
              <div class="p-2 flex-fill">
              <i class="fa fa-star text-warning" aria-hidden="true"></i> 
              <i class="fa fa-star text-warning" aria-hidden="true"></i> 
              <i class="fa fa-star text-warning" aria-hidden="true"></i> 
              <i class="fa fa-star text-warning" aria-hidden="true"></i> 
              <i class="fa fa-star text-secondary" aria-hidden="true"></i> 
               
                </div>
              <div class="p-2 flex-fill mt-1">
              <p className='p' >(1 customer review)</p>
                </div>

          </div>


          <div class="d-flex">
              <div class=" flex-fill ">
              <p  className='fw-bolder'>36.99 USD   <div className='usd'>48.56 USD</div></p>
            

               
                </div>
              <div class=" flex-fill ">

              
            <div class="d-flex rounded">
            <div class=" flex-fill border bgsg rounded">
                  1
            
              </div>
            <div class=" flex-fill ">
            <select name="qty" id="qty" className='bgsg rounded'>
                          <option value="volvo">Qty</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        <option value="3">3</option>
                          </select>

            
                    </div>

                  </div>
            
                  </div>
                </div>

                <div>
                <button type="button" class="btn btn-dark mt-2 btns">Buy it again</button>
                </div>

            </div>
            <div class="col sm-5 md-5">
            <button type="button" class=" my-5  btns bg-white rounded p-1 w-100">Refund Status</button>
            <button type="button" class=" my-3 btns bg-white p-1 rounded  w-100">Product Details</button>
            {/* <button type="button" class=" my-3 btns bg-white p-1 w-100">Delivery Details</button> */}
            </div>
          </div>
        </div>
        </div>
      </div>






      <div class="col-md-7 btsk mt-5">
        <div class="h-100 py-4 text-dark  rounded-3 my-2">
        <div class="container">
        <div class="row">
            <div class="col sm-2 md-2 lg-1" >
            <img src={img} class="rounded float-start " width="150px" height="250px" alt="..." ></img>
            </div>
            <div class="col sm-5 md-5 float-start mt-4">
              {/* <p className='fw-semibold'>Delivered 06 JUN 2022</p> */}
              Product Name 
          
              <div class="d-flex">
              <div class="p-2 flex-fill">
              <i class="fa fa-star text-warning" aria-hidden="true"></i> 
              <i class="fa fa-star text-warning" aria-hidden="true"></i> 
              <i class="fa fa-star text-warning" aria-hidden="true"></i> 
              <i class="fa fa-star text-warning" aria-hidden="true"></i> 
              <i class="fa fa-star text-secondary" aria-hidden="true"></i> 
               
                </div>
              <div class="p-2 flex-fill mt-1">
              <p className='p' >(1 customer review)</p>
                </div>

          </div>


          <div class="d-flex">
              <div class=" flex-fill ">
              <p  className='fw-bolder'>36.99 USD   <div className='usd'>48.56 USD</div></p>
            

               
                </div>
              <div class=" flex-fill ">

              
            <div class="d-flex rounded">
            <div class=" flex-fill border bgsg rounded">
                  1
            
              </div>
            <div class=" flex-fill ">
            <select name="qty" id="qty" className='bgsg rounded'>
                          <option value="volvo">Qty</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        <option value="3">3</option>
                          </select>

            
                    </div>

                  </div>
            
                  </div>
                </div>

                <div>
                <button type="button" class="btn btn-dark mt-2 btns">Buy it again</button>
                </div>

            </div>
            <div class="col sm-5 md-5">
            <button type="button" class=" my-5  btns bg-white rounded p-1 w-100">Refund Status</button>
            <button type="button" class=" my-3 btns bg-white p-1 rounded w-100">Product Details</button>
            {/* <button type="button" class=" my-3 btns bg-white p-1 w-100">Delivery Details</button> */}
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Cancelled;