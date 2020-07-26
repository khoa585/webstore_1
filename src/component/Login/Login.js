import React from 'react';
import validate from "../Form/validate";
import { Field, reduxForm } from 'redux-form';
import renderField from "../Form/TextField/index";
import './style.css'
function Login() {
    return (
        <div>
            <div className="container bg_">
                <h4 className="Victorinox">Victorinox</h4><br />
                <div className="row">
                    <div className="col-lg-6 heightLogin_">
                        <div>
                            <h2 className="account_">
                                <strong data-bind="i18n: 'I have an account'">I have an account</strong>
                            </h2>
                        </div>
                        <div>
                            <form className="form form-login" method="true">
                                <div className="field email required">
                                    <div className="control">
                                        <Field
                                            id="Email"
                                            name="Email"
                                            type="Email"
                                            component={renderField}
                                            label="Email Address *"
                                            variant="outlined" />
                                    </div>
                                </div>
                                <br></br>
                                <div className="field password required">
                                    <div className="control">
                                        <Field
                                            id="Password"
                                            name="Password"
                                            type="Password"
                                            component={renderField}
                                            label="Password *"
                                            variant="outlined" />
                                    </div>
                                </div>
                                <br></br>
                                <div>
                                    <a href=" " className="btn-password_">
                                        <span >Forgot Your Password?</span>
                                    </a>
                                </div>
                                <br></br>
                                <button className="bt2 bt btv heightLogin">login</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 heightLogin_">
                        <h2 className="account">
                            <strong data-bind="i18n: 'I have an account'">I don't have an account</strong>
                        </h2>
                        <div className="love">
                            <span style={{ textAlign: 'center' }}>.</span>
                            <p>Create account to benefit from<br />our exclusive services and keep<br /> up to date with our latest<br /> publications.<br />Thank's.<br />Hi</p>
                        </div>
                        <br />
                        <div className="Sign">
                            <button className="bt__ bt btv heightLogin">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const ContactForm = reduxForm({
    form: "fieldLevelValidation",
    validate,
});
export default (ContactForm)(Login);