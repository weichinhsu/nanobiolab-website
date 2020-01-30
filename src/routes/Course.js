import React, { Component } from 'react';
import { connect } from 'dva';
import data from '../data/course'

class Course extends Component {
  renderRow = (row) => {
    return <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-2">
        <div className="resume-content">
            <div className="subheading mb-1">{row.title}</div>
            <p>{row.semester}</p>
        </div>

    </div>
}
renderCourse = (course) => {
    return <div>
        <h3 className="mb-3">{course.subject}</h3>
        {course.group.map(row => this.renderRow(row))}
    </div>
}
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">開授課程</h2>
          {data.map(course => this.renderCourse(course))}
        </div>
      </section>
    );
  }
}

export default connect()(Course);
