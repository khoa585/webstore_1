import React from "react";
import { Link } from "react-router-dom";
function Products(props) {
    let ShowSale = (e) => {
        if (e === true) {
            return <span className="onsale">SALE</span>;
        }
    }
    let formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    let ShowStar = (star) => {
        if (star === "3") {
            return <div><i className="star fas fa-star" /><i className="star fas fa-star" /><i className="star fas fa-star" /></div>;
        } else {
            if (star === "4") {
                return <div><i className="star fas fa-star" /><i className="star fas fa-star" /><i className="star fas fa-star" /><i className="star fas fa-star" /></div>;
            } else {
                return <div><i className="star fas fa-star" /><i className="star fas fa-star" /><i className="star fas fa-star" /><i className="star fas fa-star" /><i className="star fas fa-star" /></div>;
            }
        }
    }
    let to_slug = (str) => {
        str = str.toLowerCase();
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
        str = str.replace(/(đ)/g, "d");
        str = str.replace(/([^0-9a-z-\s])/g, "");
        str = str.replace(/(\s+)/g, "-");
        str = str.replace(/^-+/g, "");
        str = str.replace(/-+$/g, "");
        return str;
    }
    let { img ,onClick} = props;
    return (
        <div className="col-xl-4  col-lg-4 col-md-6 padding-right-9 padding-top-18">
            <div className="thumb">
                <div className="hover-effect custom-spacing cbr-gallery style-1">
                    <div className="gallery-item">
                        <img className="response img-responsive img-fluid" src={img[0]} alt="img15" />
                        <div className="products__sale">
                            {ShowSale(props.sale)}
                        </div>
                        <div className="products_group_button">
                            <div className="add__cart flasfood products_group_item">
                                <i  onClick={onClick} className="fas fa-shopping-cart" />
                                <span className="add">Add to cart</span>
                            </div>
                            <div className="quick__view flasfood1 products_group_item">
                                <Link to={"chi-tiet/" + props.pid + "/" + to_slug(props.name) + ".html"}><i className="fas fa-search" />
                                    <span className="Quick">Quick View</span></Link>
                            </div>
                            <div className="compare flasfood2 products_group_item">
                                <i className="fas fa-sync-alt" />
                                <span className="Compare">Compare</span>
                            </div>
                            <div className="wishlist flasfood3 products_group_item">
                                <i className="fas fa-heart" />
                                <span className="Wishlist">Wishlist</span>
                            </div>
                        </div>
                    </div>
                    <div className="products__info">
                        <div className="containe">
                            <span>{props.name}</span>
                            <div className="rating">
                                <span>
                                    {ShowStar(props.star)}
                                </span>
                            </div>
                            <span className="old__price" >$ {formatNumber(props.price)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;