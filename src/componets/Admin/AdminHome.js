import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png";
import "../CSS/donor.css";

class AdminHome extends Component {
  render() {
    return (
      <Fragment>
        {/* {/* End of Navbar */}

        {/* <section id="sectionF1">
          <div className="row container-fluid m-5 ">
            <div className="col-md-3">
              <div className="card p-3">
                <div class="card text-center">
                  <img class="card-img-top" src={logo} alt="" /> 
                  <i className="fa fa-book fa-5x "></i>
                  <div class="card-body">
                    <h4 class="card-title">Products</h4>
                    <p class="card-text">lists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  */}
 <section id="section2">
<div className="container itmtop">
        <div className="">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className="" id="login-second">
            <div class="page-wrapper p-t-50 p-b-50">
              <div class="wrapper wrapper--w900 ">
                <div class="card cardH card-6 ">
                  <div class="card-heading m-4">
                    <h2 class="title text-dark">Add Complaints</h2>
                  </div>
                  <div class="card-body">
                    <form method="POST">
                      <div class="form-row frow">
                        <div class="name">Complaints Title:</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="iname"
                          />
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Complaints Description:</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="iname"
                          />
                        </div>
                      </div>
                      
                      <div class="form-row frow">
                        <div class="name">Department</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="text"
                              name="desc"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                  
                      <div class="form-row frow">
                        <div class="name">Upload Image:</div>
                        <div class="value">
                          <div class="input-group js-input-file">
                            <input
                              class="input-file"
                              type="file"
                              name="file_doc"
                              id="file"
                            />
                            <label class="label--file" for="file">
                              Choose file
                            </label>
                            <span class="input-file__info">No file chosen</span>
                          </div>
                          <div class="label--desc">
                            Upload your Document/Id proff or any other relevant
                            file. Max file size 50 MB
                          </div>
                        </div>
                      </div>
                    
                  
                      <div class="form-row frow">
                        <div class="name">Complaints name</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Ward Number</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Contact</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Email</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Address</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row frow">
                        <div class="name">Facing Issue Form</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="date"
                              name="email"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      
                    </form>
                  </div>
                  <div class="card-footer">
                    <button class="btn btn--radius-2 btn-gray" type="submit">
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      </Fragment>
    );
  }
}

export default AdminHome;
