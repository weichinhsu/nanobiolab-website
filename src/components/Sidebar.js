import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next'


class Sidebar extends Component {
    state = {
        key: null,
        lang: 'en',
        isIE: false
    }
    componentDidMount() {
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        console.log(document.documentMode)
        this.setState({ isIE })
    }
    changeLang = (lang) => {
        this.setState({ lang })
    }

    render() {
        const { menu, t, i18n } = this.props
        const { lang } = this.state
        return (
            <nav className="navbar navbar-expand-lg navbar-dark" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" >
                    <span className="d-block d-lg-none">NanoBioLab</span>
                    <span className="d-none d-lg-block">
                        <div className="img-fluid img-profile mx-auto mb-3" id="logo"></div>

                        <p className={`sidebar-p ${this.state.isIE ? '' : 'sidebar-p-animation'}`}>{t('sidebar-name')}<br />{t('sidebar-name2')}</p>
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
                                    <Link className="nav-link js-scroll-trigger" to={item.path}>{t(item.name)}</Link>
                                </li>
                            ))
                        }
                        <li className="lang">
                            <a className={lang === 'en' ? 'lang-active' : null}
                                onClick={() => { i18n.changeLanguage('en'); this.changeLang('en') }}>{t('en')}</a> ｜
                            <a className={lang === 'tw' ? 'lang-active' : null}
                                onClick={() => { i18n.changeLanguage('tw'); this.changeLang('tw') }}>{t('tw')}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withTranslation("translation")(Sidebar);
