import React, { useState } from "react";
import MySidenav from "./HeaderDesc/MySidenav";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import Modal from "./Modal";
import renderTextField from "./../Form/TextField";
import validate from "../Form/validate";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import './style.css';
function Header(props) {
  const [style, setStyle] = useState(false);
  const { handleSubmit, dispatchSubmit } = props;
  const [showT, setshowT] = useState(false)
  const showMenu = () => {
    setshowT(!showT)
  };
  const showmenu_ = (showT) => {
    return <MySidenav showsT={showT} setshowTs={setshowT} ></MySidenav>
  }
  const submit = (validate) => {
    if (validate) {
      const { username, password } = validate;
      dispatchSubmit(username, password)
    }
  };
  const onFocus = () => {
    setStyle(true);
  };
  const onBlur = () => {
    setStyle(false);
  };
  return (
    <div>
      <div className="container-fluid header">
        <div className="row rowHeader">
          <div className="col-lg-2 menu">
            <div className="menu_">
              <div onClick={() => showMenu()} className="icon_">
                <MenuIcon className="fa fa-bars"></MenuIcon>
                <span>menu</span>
              </div>
            </div>
          </div>
          <div className="col-lg-8 logo">
            <Link to="/"><img className="img-fluid logo" src="img/logo.png" alt="logo" /></Link>
          </div>
          <div className="col-lg-2 iconWeb">
            <div className="item">
              <div className="name_LB_">
                <Link to="/Login" className="name_LB">LB</Link>
              </div>
              <div className={`list__wrapper ${style === true ? "list_wrapper" : ""}`}>
                <div className="contai_item">
                  <div className="list__item">
                    <div className="row_">
                      <div className="col-lg-6">
                        <div className="form_login">
                          <div>
                            <h2 className="account-block-title" style={{ fontSize: "16px" }}>
                              <strong data-bind="i18n: 'I have an account'">I have an account</strong>
                            </h2>
                          </div><br />
                          <div>
                            <form onSubmit={handleSubmit(submit)} className="form form-login">
                              <div className="field email required">
                                <div className="control">
                                  <Field
                                    className="formLogin"
                                    id="text"
                                    name="username"
                                    type="text"
                                    component={renderTextField}
                                    label="Email Address *"
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    variant="outlined" />
                                </div>
                              </div><br />
                              <div className="field password required">
                                <div className="control">
                                  <Field
                                    className="formLogin formLoginPass"
                                    id="password"
                                    name="password"
                                    type="password"
                                    component={renderTextField}
                                    label="Password *"
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    variant="outlined" />
                                </div>
                              </div><br />
                              <div className="btn-password">
                                {/* <a href="" > */}
                                  <span>Forgot Your Password?</span>
                                {/* </a> */}
                              </div><br />
                              <div>
                                <button type="submit" className="bt btv">login</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div>
                          <h2 className="account-block-title" style={{ fontSize: "16px" }}>
                            <strong data-bind="i18n: 'I have an account'">I don"t have an account</strong>
                          </h2>
                        </div>
                        <div>
                          <span className="ttv" style={{ textAlign: "center" }}></span>
                          <div>
                            <p>Create account to benefit from our exclusive services and keep up to date with our latest publications.<br />Thank"s.<br />Hi</p>
                          </div>
                          <br />
                        </div>
                        <div className="Sign">
                          <Link to="/Sign"><button className="bt btv">Sign Up</button></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-item ">
              <Link to="/Cart"><ShoppingCartIcon></ShoppingCartIcon></Link>
            </div>
            <div className="nav-item ">
              <SearchIcon className="fa fa-search" data-toggle="modal" data-target="#myModal"></SearchIcon>
            </div>
          </div>
        </div>
      </div>
      {showmenu_(showT)}
      <Modal></Modal>
    </div >
  );
}
const ContactForm = reduxForm({
  form: "fieldLevelValidation",
  validate,
});
export default compose(ContactForm)(React.memo(Header));
