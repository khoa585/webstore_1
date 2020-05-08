import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "redux";
import styles from "./style";
import DetailCart from "../../component/Cart/DetailCart/DetailCart";
import { date, Month } from "../../constants/number";
import { shadows } from "../../actions/func";
import { Field, reduxForm } from "redux-form";
import validate from "../Form/validate";
import renderTextField from "../Form/TextField/index"
function Cart(props) {
    const { classes, listCart } = props;
    const showListCart = (listCarts) => {
        if (listCarts.length) {
            const result = listCarts.map((task, index) => {
                return <DetailCart key={index} tasks={task}></DetailCart>
            })
            return result;
        }
    }
    const showtotal = () => {
        if (listCart.length) {
            let Total = 0;
            listCart.forEach((task, index) => {
                return Total +=task.price
            })
            return Total;
        }
    }
    return (
        <React.Fragment>
            <div className={classes.distant}></div>
            <div className="container bg_">
                <div className="row">
                    <div className={classes.distantH + " col-lg-8"}>
                        <div className={classes.distant}></div>
                        <div className={classes.col_container}>
                            <div className={classes.shop_Cart}>Shopping Cart</div>
                            <div className={classes.distant}></div>
                            <div className={classes.Cart__ + " titleCart"}>
                                <h5>Product</h5>
                                <h5>Size</h5>
                                <h5>Quantity</h5>
                                <h5>Total Price</h5>
                                <h5>Sale</h5>
                                <h5>X</h5>
                            </div>
                        </div>
                        {
                            showListCart(listCart)
                        }
                        <div className={classes.distant}></div>
                        <div>
                            <div className={classes.detailC}>
                                <div className={classes.detailC_}>
                                    <span>suptotal:</span>
                                </div>
                                <div className={classes.detailC__}>
                                    <span>20000</span>
                                </div>
                            </div>
                            <div className={classes.detailC}>
                                <div className={classes.detailC_}>
                                    <span>Expressage: </span>
                                </div>
                                <div className={classes.detailC__}>
                                    <span>20000</span>
                                </div>
                            </div>
                            <div className={classes.distant}></div>
                            <div className={classes.sum_C}>
                                <div className={classes.sum_C_}>
                                    <div className={classes.sum_C__}>
                                        <button className="button_"><span>Continue Shopping </span></button>
                                    </div>
                                </div>
                                <div className={classes.Total_}>
                                    <div className={classes.sum_C___}>
                                        <span>Total: </span>
                                    </div>
                                    <div>
                                        <span>{showtotal()}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.distant}></div>
                        </div>
                    </div>
                    <div className={classes.distantH + " col-lg-4"}>
                        <div className={classes.infoPlayment}>
                            <div className={classes.infoPlayment_}>
                                <div className={classes.infoPlayment__S}>
                                    <h3 className={classes.infoPlayment__}>infoPlayment info</h3>
                                </div>
                                <div className={classes.infoPlayment_method}>
                                    <h5 className={classes.method_}>infoPlayment method</h5>
                                    <div className={classes.infoPlayment_method_}>
                                        <div className={classes.infoPlayment___ + " CheckHover_"}><span>Credit Cart</span></div>
                                        <div className={classes.infoPlayment___ + " CheckHover_"}><span>Momo</span></div>
                                    </div>
                                </div>
                                <div className={classes.CartNumber + " name_"}>
                                    <h5 className={classes.method_}>Card Number: </h5>
                                    <Field
                                        name="Number"
                                        component={renderTextField}
                                        label="Number"
                                    />
                                </div>
                                <div className={classes.Date}>
                                    <h5 className={classes.method_}>Exporation Date </h5>
                                    <div className={classes.option_}>
                                        <div className={classes.DMD}>
                                            <select className={classes.date_}>
                                                {shadows(date)}
                                            </select>
                                        </div>
                                        <div className={classes.DMD}>
                                            <select className={classes.date_}>
                                                {shadows(Month)}
                                            </select>
                                        </div>
                                        <div className="name_">
                                            <Field
                                                name="CVV"
                                                component={renderTextField}
                                                label="CVV"
                                                className={classes.Number_}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.checkout}>
                                    <button type="submit" className={classes.Check + " CheckHover"}>Check Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
const ContactForm = reduxForm({
    form: "fieldLevelValidation",
    validate,
});
export default compose(ContactForm, withStyles(styles))(Cart);