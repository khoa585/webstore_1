import React, { Component } from 'react';

class ProductItem extends Component {
    ShowSale = (e) => {
        if (e === true) {
            return <span className="onsale">SALE</span>;
        }
    }
    ShowStar = (star) => {
        if (star === '3') {
            return <div><i className="star fas fa-star" /><i className="star fas fa-star" /><i className="star fas fa-star" /></div>;
        } else {
            if (star === '4') {
                return <div><i className="star fas fa-star" /><i className="star fas fa-star" /><i className="star fas fa-star" /><i className="star fas fa-star" /></div>;
            } else {
                return <div><i className="star fas fa-star" /><i className="star fas fa-star" /><i className="star fas fa-star" /><i className="star fas fa-star" /><i className="star fas fa-star" /></div>;
            }
        }
    }
    formatNumber = (num) => {
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(num);
    }
    render() {
        return (
            <div className="col-lg-4 col-md-6">
                <div className="thumb">
                    <div className="hover-effect custom-spacing cbr-gallery style-1">
                        <div className="gallery-item">
                            <img className="response img-responsive" src="img/img15.png" alt="img15" />
                            <div className="products__sale">
                                {this.ShowSale(this.props.sale)}
                            </div>
                            <div className="products_group_button">
                                <div className="add__cart flasfood products_group_item">
                                    <i className="fas fa-shopping-cart" />
                                    <span className="add">Add to cart</span>
                                </div>
                                <div className="quick__view flasfood1 products_group_item">
                                    <i className="fas fa-search" />
                                    <span className="Quick">Quick View</span>
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
                                <span>{this.props.name}</span>
                                <div className="rating">
                                    <span>
                                        {this.ShowStar(this.props.star)}
                                    </span>
                                </div>
                                <span className="old__price" >$ {this.formatNumber(this.props.price)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;