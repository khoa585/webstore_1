import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import img from './../assets/images/loader.gif';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import styles from './style';
import * as uiActions from './../actions/index';
class Loading extends Component {
    loading = (showloading, classes) => {
        let xhtml = null;
        if (showloading) {
            xhtml = (
                <div className={classes.backdrop}>
                    <img className={classes.iconLoading} src={img} alt='showloading' />
                </div >
            );
        };
        return xhtml;
    }
    render() {
        const { classes } = this.props;
        const { showloading } = this.props;
        return (
            <>
                {this.loading(showloading, classes)}
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        showloading: state.ui.showloading
    };
};
const mapDispatchToProps = dispatch => {
    return {
        uiActions: bindActionCreators(uiActions, dispatch)
    };
};
const withconnect = connect(
    mapStateToProps,
    mapDispatchToProps
);
export default compose(
    withStyles(styles),
    withconnect
)(Loading);
