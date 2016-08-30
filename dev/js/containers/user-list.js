"use strict";


import React, {component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class UserList extends Component {
    render() {
        return (
            <ul>
                <li>One</li>
                <li>two</li>
                <li>three</li>
            </ul>
        );
  }

export default UserList;
