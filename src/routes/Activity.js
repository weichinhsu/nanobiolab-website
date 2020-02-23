import React, { Component } from 'react';
import { withTranslation } from 'react-i18next'
import { Link } from "react-router-dom";
import { connect } from 'dva';
import data from '../data/activity'

class Activity extends Component {
    renderRow = (row) => {
        return <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-2">
            <div className="resume-content">
                <div className="content-sub-title mb-1">{row.title}</div>

                <p>{row.semester}</p>
            </div>
        </div>
    }
    renderActivity = (activity) => {
        return <div className="col mb-4">
            <div className="card h-100">
                <img src={process.env.PUBLIC_URL + "/img/activity/" + activity.image[0]} className="card-img-top img-activity" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{activity.title}</h5>
                    <p className="card-text">{activity.description}</p>

                </div>
                <div className="card-footer text-muted">
                    <Link className="card-link" to={{
                        pathname: "activity/" + activity.id,
                        state: activity
                    }}>More</Link>
                </div>
            </div>
        </div>
    }
    render() {
        const { t, i18n } = this.props;
        return (<div className="content">
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="education">
                <div className="w-100">
                    <h3 className="mb-3">{t('activity')}</h3>
                    <div className="row row-cols-1 row-cols-md-4">
                        {data.map(activity => this.renderActivity(activity))}
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default withTranslation("translation")(connect()(Activity));
