import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useSelector } from "react-redux";
import Itemthumpai from "./Itemthumpai";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import { CSSTransition, TransitionGroup, } from "react-transition-group";
import { FormatPrice, FormatStar } from "../../common/Format/Format";
import * as type from "../../constants/swiper";
const Detailitem = props => {
  const [state, setstate] = useState({ menua: false });
  const [activeC, setActiveC] = useState({ color: "#c1c1ce", bgImgage: "0" });
  const { classes, task } = props;
  let colors = ["#c1c1ce", "#b9a536", "#a22616"];
  const tasks = useSelector(state => state.task);
  const handclickDrag = (sta, open) => {
    setstate({
      ...state,
      [sta]: !open
    });
  };
  const showcolor = (color) => {
    return {
      backgroundColor: color
    };
  };
  const active_color = (color, key) => {
    setActiveC({ color: color, bgImgage: key });
  };
  const showBG = (bg) => {
    return {
      backgroundImage: `url(https://apiproductjs.herokuapp.com/${bg})`
    };
  };
  const showP = () => {
    task.productImage.filter((tast,key) => parseInt(activeC.bgImgage, 10) === key )
    .map((index, key) => {
        return <div key={key} className="product-pic">
          <img className="img-responsive slideCart" src={`https://apiproductjs.herokuapp.com/${index}`} alt=""></img>
          </div>;
    })
  }
  return (
    <div className="container-fluid">
      <div className="row shopping__card__wrapper">
        <div className="col-lg-1 menucart">
          <div className="DragHandleIcon" onClick={() => handclickDrag("menua", state.menua)}>
            <div className={`hamburger ${state.menua === true ? "activeIcon" : ""}`}></div>
          </div>
        </div>
        <div className="col-lg-7 shop__layout">
          <div className="title_">
            <h2 className={classes.title}>
              <span className={classes.titleF}>discover </span>the best
            </h2>
            <div className={classes.thumbnail}>
              <Swiper {...type.Param_}>
                {tasks.list.map((item, index) => {
                  return (
                    <div className="swiper-slide" key={index}>
                      <Itemthumpai key={index} item={item}></Itemthumpai>;
                    </div>
                  );
                })}
                <div className="swiper-scrollbar"></div>
              </Swiper>
              <div className={classes.icon_}>
                <span className="icon_InFa">
                  <InstagramIcon className="InstagramIcon_"></InstagramIcon>
                  <FacebookIcon className="FacebookIcon_"></FacebookIcon>
                </span>
              </div>
            </div>
          </div>
          <div
            className={`togglemenucart ${
              state.menua === true ? "showcart" : "closeShowcart"
              }`}
          >
            <div className="swiper-wrapper">
              <Swiper {...type.Paramc}>
                {
                  task.productImage.map((index, key) => {
                    return <div key={key} className="swiper-slide">
                      <div style={showBG(index)} className={classes.contaiC}>
                        <div className={classes.note}>
                          <span className={classes.titleC_}>Winter?</span>
                        </div>
                      </div>
                    </div>;
                  })
                }
              </Swiper>
              <div style={showBG(task.productImage[0])} className={classes.New}>
                <h3 className={classes.titleC}>
                  <span className={classes.titlecart}>New</span> Collection
                </h3>
              </div>
              <div className={classes.back}>
                <KeyboardArrowLeftIcon onClick={() => handclickDrag("menua", state.menua)}
                  className={classes.KeyboardArrowLeftIcon}
                ></KeyboardArrowLeftIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 shop__product">
          <div className={classes.highP}></div>
          <div className={classes.context_P}>
            <div className="product-card">
              <TransitionGroup>
                <CSSTransition
                  key={activeC.bgImgage}
                  timeout={500}
                  classNames="item"
                >
                  <div>
                    {
                      showP()
                    }
                  </div>
                </CSSTransition>
              </TransitionGroup>
              <div className="product-colors">
                {
                  colors.map((c, key) => {
                    return <><span
                      style={showcolor(c)}
                      className={activeC.color === c ? "active" : ""}
                      onClick={() => active_color(c, key)}
                      key={key}
                    ></span><br></br></>;
                  })
                }
              </div>
            </div>
            <div className="infP">
              <h3>{task.name}</h3>
              <div className={classes.format}>
                <span className={classes.price}>$ {FormatPrice(task.price)}</span>
                <span> {FormatStar(task.star)}</span>
              </div><br />
              <span className={classes.descriptions}>{task.description}</span><br /><br /><br />
              <div className={classes.quantity_}>
                <div className={classes.quantity}><span>Quantity</span></div>
                <div className="quantity">
                  <button className="plus-btn" type="button" name="button">
                    +
                </button>
                  <input type="text" name="name" value="1"></input>
                  <button className="minus-btn" type="button" name="button">
                    -
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(React.memo(Detailitem));

