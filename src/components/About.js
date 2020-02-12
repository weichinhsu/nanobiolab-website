import React, { Component } from 'react';
import nthu from '../assets/images/nthu.png'

class About extends Component {

    renderRow = (row) => {
        return <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-2">
            <div className="resume-content">
                <i className="fa fa-chevron-circle-right"></i> {row}
            </div>
        </div>
    }
    renderExp = (row) => {
        return <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-2">
            <div className="resume-content">
                <i className="fa fa-chevron-circle-right"></i> {row[0]}
                <p>{row[1]}</p>
            </div>
        </div>
    }
    render() {
        const { data } = this.props;
        return (<div>
            <div class="professor-card card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={process.env.PUBLIC_URL + "/img/professor/professor.png"} className="card-img" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body professor-card-body">
                            <h4 className="mb-3">{data.name}</h4>
                            <p className="card-text">{data.occupation}</p>
                            <p className="card-text">{data.email}</p>
                            <p className="card-text">{data.phone}</p>
                            <p className="card-text">{data.address}</p>
                            {data.homepage ? <a href={data.homepage} target="_blank">Homepage</a> : null}
                        </div>
                    </div>
                </div>
            </div>

            <div className="member-item">
                <h4 className="mb-3">學歷</h4>
                {data.education.map(row => this.renderRow(row))}
            </div>
            <div className="member-item">
                <h4 className="mb-3">研究</h4>
                {data.research.map(row => this.renderRow(row))}
            </div>
            <div className="member-item">
                <h4 className="mb-3">經驗</h4>
                {data.experience.map(row => this.renderExp(row))}
            </div>
        </div>
        );
    }
}

export default About;
