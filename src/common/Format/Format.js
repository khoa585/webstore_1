import React from "react";
export const FormatPrice = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};
export const FormatStar = (star) => {
    if (star === "3") {
        return <div><i className="star fas fa-star" /><i className="star fas fa-star" /><i className="star fas fa-star" /></div>;
    } else {
        if (star === "4") {
            return <div><i className="star fas fa-star" /><i className="star fas fa-star" /><i className="star fas fa-star" /><i className="star fas fa-star" /></div>;
        } else {
            return <div><i className="star fas fa-star" /><i className="star fas fa-star" /><i className="star fas fa-star" /><i className="star fas fa-star" /><i className="star fas fa-star" /></div>;
        }
    }
};