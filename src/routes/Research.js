import React, { Component } from 'react';
import { connect } from 'dva';

class Research extends Component {
  renderReseach = (res) => {
    return <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">{res.title}</h3>
        <div className="subheading mb-1">{res.subtitle}</div>
        <p>{res.content1 ? res.content1 : ''}</p>
        <p>{res.content2 ? res.content2 : ''}</p>
        {res.reference ? <a href={res.reference}>Reference</a> : null}
      </div>
      <div className="resume-date text-md-right">
        <span className="text-primary">{res.period}</span>
      </div>
    </div>
  }
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div className="w-100">
          <h2 className="mb-5">研究方向</h2>
          <section className="highlight-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h3 className="section-subheading text-muted">BioMEMS & NanoBio System</h3>
                  <hr className="objective_divider my-4"></hr>
                  <h5 className="section-heading">
                  本實驗室主要是進行生醫感測器(血液檢測與呼氣檢測)、食品安全檢測晶片、奈米線、仿生電子抗體、次世代DNA定序研發與系統整合,
                  以及相關所衍生奈米科技、生醫 電子、智慧型高分子之基礎科學現象探討
                  </h5>
                </div>
              </div>
            </div>
          </section>
          <div class="row row-cols-1 row-cols-md-3">
            <div class="col mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">生醫感測器及微系統整合</h5>
                  <p class="card-text">生醫電子感測器、光電奈米線感測器、 壓電聲波微發送器、
                    非侵入式呼氣疾病檢測系統、 多通道生醫感測系統、Android人機介面、
                    定點照護(point-of-care)之可攜式(portable)或手持式(handheld)嵌入式感測平台</p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">仿生高分子技術與微流體技術</h5>
                  <p class="card-text">仿生真空吸引模組、仿生分子拓印電子抗體、微流體液滴操控、
                    乳化液滴高分子製程、多通道微流體操控 、高效能全血血漿分離元件</p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">奈米科技與生醫奈米</h5>
                  <p class="card-text">噴印與滾印製程、尖端奈米元件與製程、奈米生物電子元件、混成奈米線、
                    DNA生物電子定序元件、混成高分子奈米發電元件</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default connect()(Research);
