import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next'

class Welcome extends Component {
    state = {
        show: false
    }
    componentDidMount() {
        this.setState({ show: true })
    }
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="welcome">
                {this.state.show ? <div>
                    <div id="wel-show">
                        <div className="nthu-div">
                            <div id="nthu"></div>
                        </div>
                        <div id="nthu-title"><span id="nthu-title-span">National Tsing Hua University</span></div>
                    </div>
                    <div id="wel-enter">
                        <div className="wel-title"> {t('sidebar-name')} </div>
                        <div className="wel-title mb-4"> {t('sidebar-name2')} </div>
                        <div className="wel-btn-div">
                            <Link className="wel-btn" to='/news'>Enter Website <i className="fa fa-angle-double-right wel-icon"></i></Link>
                        </div>
                    </div>
                </div> : null}
            </div>
        );
    }
}

export default withTranslation("translation")(connect()(Welcome));