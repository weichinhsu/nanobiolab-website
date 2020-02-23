import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next'
import data from '../data/research'

class Welcome extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="welcome">
                <div className>
                    {/* <div className="nthu"></div>
                    <div className="nthu-title">National Tsing Hua University</div> */}
                    <div className="wel-title"> {t('sidebar-name')} </div>
                    <div className="wel-title mb-4"> {t('sidebar-name2')} </div>
                    <div className="wel-btn-div">
                    <Link className="wel-btn" to='/news'>Enter Website <i className="fa fa-angle-double-right wel-icon"></i></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation("translation")(connect()(Welcome));
