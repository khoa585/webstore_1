import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from "redux";
import validate from "../Form/validate";
import renderField from "../Form/TextField/index";
import { date, Month, Year } from "../../constants/number";
import { shadows } from "../../actions/func";
import './style.css';
function SignUp() {
    return (
        <div className="container bg_">
            <h4 className="Victorinox">sign up</h4><br />
            <div className="control1">
                <div className="field-name-prefix-item">
                    <input id="prefix-option-mr" name="prefix" className="required-entry" type="radio" defaultValue="Mr" defaultChecked="checked" />
                    <label className="labeld" htmlFor="prefix-option-mr">Mr </label>
                </div>
                <div className="field-name-prefix-item">
                    <input id="prefix-option-mrs" name="prefix" className="required-entry" type="radio" defaultValue="Mrs" />
                    <label className="labeld" htmlFor="prefix-option-mrs">Mrs</label>
                </div>
            </div>
            <form className="form " method="">
                <div className="Firstname_">
                    <Field
                        id="Firstname"
                        name="First_name"
                        type="text"
                        component={renderField}
                        label="First name"
                        variant="outlined"
                    />
                </div>
                <div className="Lastname_">
                    <Field
                        id="Lastname"
                        name="Lastname"
                        type="text"
                        component={renderField}
                        label="Last Name"
                        variant="outlined"
                    />
                </div>
                <div className="Email_">
                    <Field
                        id="Email"
                        name="Email"
                        type="Email"
                        component={renderField}
                        label="Email Address *"
                        variant="outlined" />
                </div>
                <div className="Password_">
                    <Field
                        id="Password"
                        name="Password"
                        type="Password"
                        component={renderField}
                        label="Password *"
                        variant="outlined" />
                </div>
                <div className="ConfirmPassword_">
                    <Field
                        id="ConfirmPassword"
                        name="ConfirmPassword"
                        type="Password"
                        component={renderField}
                        label="Confirm Password *"
                        variant="outlined" />
                </div>
                <div>
                    <div >
                        <span style={{ color: '#9b9f9f' }}>Date of Birth</span>
                    </div><br></br>
                    <div className="day_">
                        <div className="date_">
                            <select className="date__" >
                                {shadows(date)}
                            </select>
                        </div>
                        <div className="date_ dateD_">
                            <select className="date__">
                                {shadows(Month)}
                            </select>
                        </div>
                        <div className="date_ dateD__">
                            <select className="date__">
                                {shadows(Year)}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="submit_D">
                    <button type="submit" className="submit_btn submit_btn_1">Submit</button>
                </div>
            </form>
        </div>
    );
}
const ContactForm = reduxForm({
    form: "fieldLevelValidation",
    validate,
});
export default compose(ContactForm)(SignUp);