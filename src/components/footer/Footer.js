import React from 'react';

export default React.createClass({
    render: function() {
        return (<div id="footer">
                    <div className="container">
                    	<div className="row">
			                <div className="col-sm-2">
			                    <h6>Copyright &copy; 2015</h6>
			                </div>
			                <div className="col-sm-2">
			                    <h6>Navigation</h6>
			                    <ul className="list-unstyled">
			                        <li><a href="#"><span className="glyphicon glyphicon-home"></span> Home</a></li>
			                        <li><a href="#"><span className="glyphicon glyphicon-wrench"></span> Services</a></li>
			                        <li><a href="http://yourspa.com/index.php/aboutus/view"><span className="glyphicon glyphicon-grain"></span> About Us</a></li>
			                    </ul>
			                </div>
			                <div className="col-sm-8"></div>
			            </div>
                    </div>
                </div>);
    }
});