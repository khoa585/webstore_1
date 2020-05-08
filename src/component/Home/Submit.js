import React, { Component } from 'react';
class Submit extends Component {
    render() {
        return (
            <div className="container">
                <div className="titl"> 
                <div className="container">
                    <div className="row k-center">
                    <div className="col-xs-6 col-centered">
                        <h4 className="new">VICTORINOX NEWSLETTER</h4>
                        <span className="sub">Subscribe to our newsletter</span><br /><br />
                        <form name="form" action="">
                        <fieldset className="field newsletter">
                            <div className="control">
                            <input name="email" type="email" id="newsletter" className="inputtexts empty" data-validate="{required:true, 'validate-email':true}" />
                            <label className="placeholdertextss" htmlFor="newsletter"><span className="bg">Enter your email address</span></label>
                            </div>
                            <button className="action subscribe red" title="Subscribe" type="submit">
                            <span>SUBMIT</span>
                            </button>	
                        </fieldset>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
export default Submit;