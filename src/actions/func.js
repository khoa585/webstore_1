import React from "react";
export const shadows = (data) =>{
    const result = data.map((item, key) => {
        return <option key={key}>{item}</option>
    })
    return result
}