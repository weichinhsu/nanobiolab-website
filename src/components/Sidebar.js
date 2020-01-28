import React, { Component } from 'react';
import _ from 'lodash';
import nthu from '../assets/images/nthu.png'
import { Link } from 'dva/router';


class Sidebar extends Component {
    state = {
        key: null,
    }

    render() {
        const { menu } = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" >
                    <span className="d-block d-lg-none">NanoBioLab</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={nthu} alt="" />
                        <p className="sidebar-p">生醫奈米與<br/>微系統晶片實驗室</p>
                        <p className="sidebar-p"></p>
                    </span>
                </a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {
                            _.map(menu, item => (
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to={item.path}>{item.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Sidebar;
