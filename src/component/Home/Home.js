import React, { Component } from 'react';
import Stream from './Stream';
import Discount from './Discount';
import Manhattan from './Manhattan';
import Swipered from './Swipered';
import Bg from './Bg';
import Authenticity from './Authenticity';
import Background from './Bg/Background';
import Submit from './Submit';
import ProductItem from '../../container/ProductItem/ProductItem';
class Home extends Component {
    render() {
        return (
            <div>
                <Background></Background>
                <Stream></Stream>
                <Discount></Discount>
                <ProductItem></ProductItem>
                <Discount></Discount>
                <Bg></Bg>
                <Discount></Discount>
                <Authenticity></Authenticity>
                <Discount></Discount>
                <Manhattan></Manhattan>
                <Discount></Discount>
                <Swipered></Swipered>
                <Discount></Discount>
                <Submit></Submit>
            </div>
        );
    }
}
export default Home;