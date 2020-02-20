import React, { Component } from 'react';
import { connect } from 'dva';
import { withTranslation } from 'react-i18next'
import data from '../data/research'

class Research extends Component {
  renderReseach = (res) => {
    return <div class="col mb-4">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">{res.research}</h5>
          <p class="card-text">{res.discribe}</p>
        </div>
      </div>
    </div>
  }
  render() {
    const { t, i18n } = this.props;
    return (
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div className="w-100">
        <h3 className="mb-3">{t('research')}</h3>
          <section className="highlight-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h4 className="section-subheading text-muted">{data.title}</h4>
                  <hr className="objective_divider my-4"></hr>
                  <h5 className="section-heading">
                    {data.content}
                  </h5>
                </div>
              </div>
            </div>
          </section>
          <div class="row row-cols-1 row-cols-md-3">
            {data.list.map(res => this.renderReseach(res))}

          </div>
        </div>

      </section>
    );
  }
}

export default withTranslation("translation")(connect()(Research));
