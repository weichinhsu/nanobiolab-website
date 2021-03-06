import React, { Component } from 'react';

class ProfessorContent1 extends Component {
  renderPublication = (pub) => {
    return <div className="member-item resume-item d-flex flex-column flex-md-row justify-content-between">
      <div className="resume-content">
        <p>{pub.author}, {pub.title}, {pub.institution ? pub.institution : ''}, {pub.period}</p>
      </div>
    </div>
  }
  // renderPublication = (pub) => {
  //   return <div className="member-item resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
  //     <div className="resume-content">
  //       <h4 className="mb-0">{pub.title}</h4>
  //       <div className="subheading mb-1">{pub.author}</div>
  //       <p>{pub.institution ? pub.institution : ''}</p>        
  //     </div>
  //     <div className="resume-date text-md-right">
  //       <span className="text-primary">{pub.period}</span>
  //     </div>
  //   </div>
  // }
  render() {
    const { data } = this.props;
    return (
        <div>
          {data.map(publication => this.renderPublication(publication))}
        </div>
    );
  }
}

export default ProfessorContent1;