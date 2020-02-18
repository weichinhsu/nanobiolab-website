import React, { Component } from 'react';
import { connect } from 'dva';
import animateScrollTo from 'animated-scroll-to';
import { withTranslation } from 'react-i18next'

import data from '../data/news'

class News extends Component {
    renderModal = (row) => {
        return <div className="modal fade" id={row.id} tabIndex="-1" data-backdrop="static" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalScrollableTitle">{row.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row justify-content-center" >
                            <div className="col-8">
                                <img src={process.env.PUBLIC_URL + "/img/news/" + row.image[0]}
                                    className="card-img img-news"
                                    alt="..." />
                            </div>
                        </div>
                        <br />
                        <p>【截自 {row.reference}】<br /></p>
                        {row.content.map(cont => <p>{cont}<br /></p>)}

                        <p>【其他資訊】</p>
                        {row.references.map(ref => <a href={ref[1]} target="_blank">{ref[0]}<br /></a>)}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    }
    renderNews = (news) => {
        return <div className="card mb-3" data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target={'#' + news.modal.id}>
            <div className="row no-gutters" >
                <div className="col-md-4" >
                    <img src={process.env.PUBLIC_URL + "/img/news/" + news.image}
                        className="card-img img-news"
                        alt="..." />
                </div>
                <div className="col-md-8" >
                    <div className="card-body" >
                        <h5 className="card-title" > {news.title} </h5>
                        {news.content}
                        <p className="card-text" > < small className="text-muted" > {news.period} </small></p >
                    </div>
                </div>
            </div>
            {news.modal ? this.renderModal(news.modal) : null}
        </div>
    }
    render() {
        const { t, i18n } = this.props;
        return (<div >
            <header className="masthead" id="home" >
                <div className="container" >
                    <div className="intro-text" >
                        <div className="intro-lead-in" > {t('news-department')} </div>
                        { /* <div className="intro-lead-in">Welcome To NanoBioLab!</div> */}
                        <div className="intro-heading text-uppercase" > {t('news-labname')} </div>
                        <a className="btn btn-xl text-uppercase js-scroll-trigger read-more"
                            onClick={() => animateScrollTo(document.querySelector('#news'))}>Read More</a>
                    </div>
                </div>
            </header>
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="news" >
                <div className="w-100" >
                    {i18n.language === 'en' ? <h3 className="en-font">{t('news')}</h3> : <h3 className="mb-3">{t('news')}</h3>}
                    {data.map(news => this.renderNews(news))}
                </div>
            </section>
        </div>
        );
    }
}

export default withTranslation("translation")(connect()(News));