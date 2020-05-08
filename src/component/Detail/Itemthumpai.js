import React from "react";
import styles from "./style";
import { withStyles } from "@material-ui/core/styles";
const Itemthumpai = props => {
  const formatNumber = num => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };
  const { item, classes } = props;
  return (
    <div className={classes.contai}>
      <div className={classes.containter}>
        <div className={classes.img_thump}>
          <img
            className="img-responsive"
            src={"https://apiproductjs.herokuapp.com/" + item.productImage[0]}
            alt="anh"
          ></img>
        </div>
        <div className={classes.rating}>
          <p className={classes.description}>{item.description}</p>
        </div>
      </div>
      <div className={classes.stote_}>
        <div className={classes.profileProduct}>
          <h3 className={classes.nameProduct}>{item.name}</h3>
          <p className={classes.priceProduct}>$ {formatNumber(item.price)}</p>
        </div>
        <div className={classes.addCart}>
          <button className="buttonAdd buttonAdd_" type="button">
            add cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Itemthumpai);
