import React from 'react';
import styles from "./../style";
import { withStyles } from "@material-ui/core/styles";
const DetailCart = (props) => {
    const { classes, tasks } = props;
    return (
        <div className={classes.detai_Cart}>
            <div className={classes.product_ + " mar__"}>
                <div className={classes.img_Name}>
                    <img className={classes.heightImg} src="http://www.thephoblographer.com/wp-content/uploads/2013/03/Chris-Gampat-The-Phoblographer-Fujifilm-X100s-street-photography-images-1-of-12ISO-4001-320-sec-at-f-5.61.jpg" alt="" />
                    <span className={classes.name_}>{tasks.nameProduct}</span>
                </div>
            </div>
            <div className={classes.size_ + " mar_"}>
                <div className={classes.size__ + " box"}>
                    <select className={classes.cars + " select__"}>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </div>
            <div className={classes.quantity_ + " mar_"}>
                <div className={classes.quantity__}>
                    <button className={classes.plush + " plush_"} type="button" name="button">
                        +
                 </button>
                    <input className={classes.input_} type="text" name="name"></input>
                    <button className={classes.minus + " minus_"} type="button" name="button">
                        -
                </button>
                </div>
            </div>
            <div className={classes.price_ + " mar_"}>
                <div className={classes.price__}>
                    {tasks.price}
                </div>
            </div>
            <div className={classes.sale_ + " mar_"}>
                <div className={classes.sale__}>{tasks.sale}</div>
            </div>
            <div className={classes.delete_P + " mar_"}>
                <div className={classes.delete_P_}>s</div>
            </div>
        </div>
    );
}


export default withStyles(styles)(DetailCart);