import React from 'react';
import RegistrationActionCreator from '../actions/RegistrationActionCreator';
import ProvincesStore from '../stores/ProvincesStore';

function getProvincesList() {
    return {
        provinces: ProvincesStore.getProvincesList()
    }
}

let Registration = {
    getDefaultProps: function() {
        RegistrationActionCreator.getProvinces();
    },
    componentDidMount: function() {
        ProvincesStore.addChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState(getProvincesList());
        console.log("_onChange(): ", getProvincesList());
    },
	render: function() {
		return (<div className="container">
				<div className="row">
            <div className="col-sm-6">
                <h4 className="page_title">Register</h4>
                <hr />
                <h5>Company Details</h5> <hr />
                <p>Fill out the form completely to use the services.</p>
                
                <div className="alert alert-danger" role="alert">
                  <p>
                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span className="sr-only">Error:</span>
                    <span id="errorMessage"></span>
                  </p>                  
                </div>

                <form className="form-horizontal" id="form" method="post" action="#">
                    <div className="form-group registerSubGroup">
                        <label className="col-sm-3 control-label" htmlFor="company">Company name</label>
                        <div className="col-sm-9">
                            <input className="form-control" type="text" id="company" name="company" placeholder="Company name" />
                        </div>
                    </div>

                    <div className="form-group registerSubGroup">
                        <label className="col-sm-3 control-label" htmlFor="province">Province</label>
                        <div className="col-sm-9">
                            <select className="form-control" id="province" name="province">
                                <option value="0">-- select --</option>
                                    <option value=""></option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group registerSubGroup">
                        <label className="col-sm-3 control-label" htmlFor="city">City</label>
                        <div className="col-sm-9">
                            <select className="form-control" id="city" name="city">
                                <option value="0">-- select --</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group registerSubGroup">
                        <label className="col-sm-3 control-label" htmlFor="address">Address</label>
                        <div className="col-sm-9">
                            <input className="form-control" type="text" id="address" name="address" placeholder="Address" />
                        </div>
                    </div>

                    <div className="form-group registerSubGroup">
                        <label className="col-sm-3 control-label" htmlFor="phoneNo">Phone number</label>
                        <div className="col-sm-9">
                            <input className="form-control" type="text" id="phoneNo" name="phoneNo" placeholder="Phone number" />
                        </div>
                    </div>

                    <div className="form-group registerSubGroup">
                        <label className="col-sm-3 control-label" htmlFor="companyWebsite">Company website</label>
                        <div className="col-sm-9">
                            <input className="form-control" type="text" id="companyEmail" name="companyWebsite" placeholder="Company website" />
                        </div>
                    </div>

                    <div className="form-group registerSubGroup">
                        <label className="col-sm-3 control-label" htmlFor="tin">TIN</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="tin" name="tin" placeholder="Company TIN" />
                        </div>
                    </div>
                    <hr />
                    <h5>Administrator</h5> <hr />
                    <div className="form-group registerSubGroup">
                        <label className="col-sm-2 control-label" htmlFor="fName">First name</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="fName" name="fName" placeholder="First name" />
                        </div>
                        <label className="col-sm-2 control-label" htmlFor="lName">Last name</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="lName" name="lName" placeholder="Last name" />
                        </div>
                    </div>
                    
                    <div className="form-group registerSubGroup">
                        <label className="col-sm-3 control-label" htmlFor="userEmail">Email</label>
                        <div className="col-sm-9">
                            <input type="email" className="form-control" id="userEmail" name="userEmail" placeholder="User email" />
                        </div>
                    </div>

                    <div className="form-group registerSubGroup">
                        <label className="col-sm-3 control-label" htmlFor="gender">Gender</label>
                        <div className="col-sm-9">
                            <select className="form-control" id="gender" name="gender">
                                <option value="0">-- select --</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group registerSubGroup">
                        <label className="col-sm-3 control-label" htmlFor="password">Password</label>
                        <div className="col-sm-9">
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group registerSubGroup">
                        <label className="col-sm-3 control-label" htmlFor="confirmPassword">Confirm Password</label>
                        <div className="col-sm-9">
                            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                        </div>
                    </div>

                    <h5>Captcha</h5> <hr />

                    <div className="form-group">
                        <div className="col-md-4">
                            <h2>Captcha here</h2>
                        </div>
                        <div className="col-md-4">
                            <input id="captcha" name="captcha" type="text" className="form-control" autoComplete="off" placeholder="Enter captcha here" />
                        </div>
                    </div>

                    <div className="form-group">
                        <hr />
                        <div className="pull-right">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="button" className="btn btn-default" onclick="#">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="col-sm-6">
            </div>
        </div>
			</div>
			);
	}
};

export default React.createClass(Registration);