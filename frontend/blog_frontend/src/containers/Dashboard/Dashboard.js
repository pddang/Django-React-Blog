import React, { Component } from "react";
import { connect } from "react-redux";

import cssClass from "./Dashboard.css";
import { Redirect } from "react-router-dom";
import Aux from "../../hoc/Aux/Aux";
import * as actions from "../../store/actions/index";

class Dashboard extends Component {
    onLogoutClickHandler = () => {
        this.props.onClickLogout();
        this.props.history.go("/");
    }

    render() {
        return (
            <Aux>
                {!this.props.isAuth ? <Redirect to="/" /> : null}
                <div className={cssClass.OuterWrapper}>
                    {" "}
                    <div className={cssClass.InnerWrapper}>
                        <div className={cssClass.Container}>
                            View Your Profile
                        </div>
                        <div className={cssClass.Container}>
                            Edit Your Profile
                        </div>
                    </div>
                    <div className={cssClass.InnerWrapper}>
                        <div className={cssClass.Container}>Create A Post</div>
                        <div className={cssClass.Container}>Your Posts</div>
                    </div>
                    <div className={cssClass.InnerWrapper}>
                        <div className={cssClass.Container}>Admin Panel</div>
                        <div
                            className={cssClass.Container}
                            onClick={this.onLogoutClickHandler}
                        >
                            Logout
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClickLogout: () => dispatch(actions.logout())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);