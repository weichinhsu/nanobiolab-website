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
                    <h2 > 最新消息 </h2> <div class="card mb-3" >
                        <div class="row no-gutters" >
                            <div class="col-md-4" >
                                <img src={news01}
                                    class="card-img img-news"
                                    alt="..." />
                            </div>
                            <div class="col-md-8" >
                                <div class="card-body" >
                                    <h5 class="card-title" > 科技部醫材創新計劃舉辦記者會 </h5>
                                    <a href="https://udn.com/news/story/7266/4236122" target="_blank">聯合新聞網</a><br/>
                                    <a href="https://news.ltn.com.tw/news/life/breakingnews/3014002" target="_blank">自由時報</a><br/>
                                    <a href="https://money.udn.com/money/story/12524/4236122" target="_blank">經濟日報</a>
                                    <p class="card-text" > < small class="text-muted" > 2019.12.19 </small></p >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3" >
                        <div class="row no-gutters" >
                            <div class="col-md-4" >
                                <img src={news02}
                                    class="card-img img-news"
                                    alt="..." />
                            </div>
                            <div class="col-md-8" >
                                <div class="card-body" >
                                    <h5 class="card-title" > 本團隊榮獲科技部2019未來科技突破獎 </h5>
                                    <p class="card-text" > This is a wider card with supporting text below as a natural lead - in to additional content.This content is a little bit longer. </p>
                                    <p class="card-text" > < small class="text-muted" > 2019.12.05~08 </small></p >
                                </div>
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