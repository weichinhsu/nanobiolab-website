import React, { Component } from 'react';
import { connect } from 'dva';
import animateScrollTo from 'animated-scroll-to';

import news01 from '../assets/images/news/news01.JPG'
import news02 from '../assets/images/news/news02.jpg'

class News extends Component {
    renderEducation = (education) => {
        return <div > {education} </div>
    }
    render() {
        return (<div >
            {
                /* <div>
                          <img className="img-fluid mx-auto mb-2" src={background} alt="" />
                        </div> */
            }
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
                    <div className="card mb-3" data-toggle="modal" data-target="#exampleModalScrollable">
                        <div className="row no-gutters" >
                            <div className="col-md-4" >
                                <img src={news01}
                                    className="card-img img-news"
                                    alt="..." />
                            </div>
                            <div className="col-md-8" >
                                <div className="card-body" >
                                    <h5 className="card-title" > 科技部醫材創新計劃舉辦記者會 </h5>
                                    <a href="https://udn.com/news/story/7266/4236122" target="_blank">聯合新聞網</a><br />
                                    <a href="https://news.ltn.com.tw/news/life/breakingnews/3014002" target="_blank">自由時報</a><br />
                                    <a href="https://money.udn.com/money/story/12524/4236122" target="_blank">經濟日報</a>
                                    <p className="card-text" > < small className="text-muted" > 2019.12.19 </small></p >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" >
                        <div className="row no-gutters" >
                            <div className="col-md-4" >
                                <img src={news02}
                                    className="card-img img-news"
                                    alt="..." />
                            </div>
                            <div className="col-md-8" >
                                <div className="card-body" >
                                    <h5 className="card-title" > 本團隊榮獲科技部2019未來科技突破獎 </h5>
                                    <p className="card-text" > This is a wider card with supporting text below as a natural lead - in to additional content.This content is a little bit longer. </p>
                                    <p className="card-text" > < small className="text-muted" > 2019.12.05~08 </small></p >
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalScrollableTitle">靈感來自章魚腳 清交大團隊研發助腎臟病患者掌握黃金治療時間</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <div className="col-md-4" >
                                <img src={news01}
                                    className="card-img img-news"
                                    alt="..." />
                            </div>
                            <br/>

                            台灣學界開發出多項全球首創技術，創新醫材造福腎臟病患者，清大教授洪健中團隊取自章魚腳靈感，研發出1滴血、10分鐘完成檢測的血液過濾器，有助患者提早48小時掌握治療時間；交大教授冉曉雯團隊則開發出呼氣就能馬上快篩腎臟病高危險群和洗腎成效的醫材。
                            <br/>
                            <br/>
                            科技部從2017年5月起推動為期4年的創新醫療器材專案計畫，科技部表示，計畫透過政府和產學研合作體系，導引醫療器材研發的跨領與整合，至今專利申請達56件、核准32件；技術移轉11件，共成立10家新創公司，促進廠商投資9.9億元。
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default connect()(News);