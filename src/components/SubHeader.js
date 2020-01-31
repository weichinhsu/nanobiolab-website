import React, { Component } from 'react';
import _ from 'lodash';
import nthu from '../assets/images/nthu.png'
import { Link } from 'dva/router';

class SubHeader extends Component {
    state = {
        key: null,
    }
    renderHeader = (subject) => {
        console.log(this.props.isActive , subject)
        return <li className={this.props.isActive == subject ? 'item-active' : 'item-inactive'}
            onClick={() => this.props.onSubHeaderClick(subject)}>
            <a className="sub-title">{subject}</a>
        </li>
    }
    render() {
        const { data, title } = this.props;

        return (
            <div>
                <h3>{title}</h3>
                <nav className="navbar-expand-lg navbar-dark sub-header" id="mainNav">
                    <button className="navbar-toggler navbar-toggler-right" type="button"
                        data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase">
                            {data.map(title => this.renderHeader(title.subject))}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default SubHeader;
