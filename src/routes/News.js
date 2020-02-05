import React, { Component } from 'react';
import { connect } from 'dva';
import animateScrollTo from 'animated-scroll-to';
import data from '../data/news'

class News extends Component {
    renderModal = (row) => {
        return <div className="modal fade" id={row.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalScrollableTitle">{row.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="col-md-4" >
                            <img src={"/img/news/" + row.image[0]}
                                className="card-img img-news"
                                alt="..." />
                        </div>
                        <br />
                        {row.content.map(cont => <p>{cont}<br /><br /></p>)}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    }
    renderNews = (news) => {
        return <div className="card mb-3" data-toggle="modal" data-target={'#' + news.modal.id}>
            <div className="row no-gutters" >
                <div className="col-md-4" >
                    <img src={"/img/news/" + news.image}
                        className="card-img img-news"
                        alt="..." />
                </div>
                <div className="col-md-8" >
                    <div className="card-body" >
                        <h5 className="card-title" > {news.title} </h5>
                        {news.content}
                        {/* <a href="https://udn.com/news/story/7266/4236122" target="_blank">聯合新聞網</a><br />
                    <a href="https://news.ltn.com.tw/news/life/breakingnews/3014002" target="_blank">自由時報</a><br />
                    <a href="https://money.udn.com/money/story/12524/4236122" target="_blank">經濟日報</a> */}
                        <p className="card-text" > < small className="text-muted" > {news.period} </small></p >
                    </div>
                </div>
            </div>
            {this.renderModal(news.modal)}
        </div>
    }
    render() {
        return (<div >
            <header className="masthead" id="home" >
                <div className="container" >
                    <div className="intro-text" >
                        <div className="intro-lead-in" > 國立清華大學動力機械工程學系 </div>
                        { /* <div className="intro-lead-in">Welcome To NanoBioLab!</div> */}
                        <div className="intro-heading text-uppercase" > 生醫奈米與微系統晶片實驗室 </div>
                        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                            onClick={() => animateScrollTo(document.querySelector('#news'))}>Read More</a>
                    </div>
                </div>
            </header>
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="news" >
                <div className="w-100" >
                    <h2 > 最新消息 </h2>
                    {data.map(news => this.renderNews(news))}
                </div>

            </section>
        </div>
        );
    }
}

export default connect()(News);