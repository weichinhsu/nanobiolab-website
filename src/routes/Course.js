import React, { Component } from 'react';
import { withTranslation } from 'react-i18next'
import { connect } from 'dva';
import data from '../data/course'

class Course extends Component {
  renderRow = (row) => {
    return <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-2">
      <div className="resume-content">
        <div className="content-sub-title mb-1">{row.title}</div>

        <p>{row.semester}</p>
      </div>
    </div>
  }
  renderCourse = (course) => {
    return <div>
      <h4 className="mb-3">{this.props.t(course.subject)}</h4>
      {course.group.map(row => this.renderRow(row))}
    </div>
  }
  render() {
    const { t, i18n } = this.props;
    return (<div className="content">
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="education">
        <div className="w-100">
          <h3 className="mb-3">{t('course')}</h3>
          {data.map(course => this.renderCourse(course))}
        </div>
      </section>
    </div>
    );
  }
}

export default withTranslation("translation")(connect()(Course));
