import React, { Component } from 'react';
import { withTranslation } from 'react-i18next'

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
        const { data, t } = this.props;
        return (<div>
            <div className="professor-card card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={process.env.PUBLIC_URL + "/img/professor/professor.png"} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body professor-card-body">
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
                <h4 className="mb-3">{t('professor-education')}</h4>
                {data.education.map(row => this.renderRow(row))}
            </div>
            <div className="member-item">
                <h4 className="mb-3">{t('professor-research')}</h4>
                {data.research.map(row => this.renderRow(row))}
            </div>
            <div className="member-item">
                <h4 className="mb-3">{t('professor-experience')}</h4>
                {data.experience.map(row => this.renderExp(row))}
            </div>
        </div>
        );
    }
}

export default withTranslation("translation")(About);
