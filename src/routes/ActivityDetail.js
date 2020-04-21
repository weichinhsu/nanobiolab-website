import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { withTranslation } from 'react-i18next'
import { connect } from 'dva';
import data from '../data/activity'

class ActivityDetail extends Component {
    renderModal = (image, index) => {
        return <div className="modal fade" id={"img" + index} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header act-modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img src={process.env.PUBLIC_URL + "/img/activity/" + image} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>

    }
    renderImage = (image, index) => {
        return <div><div className="col mb-4" data-toggle="modal" data-keyboard="false" data-target={"#img" + index}>
            <div className="card h-100" >
                <img src={process.env.PUBLIC_URL + "/img/activity/" + image} className="card-img-top img-activity" alt="..." />
            </div>
        </div>
            {this.renderModal(image, index)}
        </div>
    }

    render() {
        const { t, i18n, location, history } = this.props;
        if (location.state === undefined) {
            return <Redirect to="/activity" push />
        }
        return (<div className="content">
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="education">
                <div className="w-100">
                    {/* <a className="mb-4" onClick={() => history.goBack()}>{location.state.title}</a> */}
                    <button className="btn activity-card-btn" type="button" onClick={() => history.goBack()}>
                        <i class="fa fa-angle-left"></i> {t('activity-return')}
                    </button>
                    <div className="row row-cols-1 row-cols-md-4">
                        {location.state.image.map((image, index) => this.renderImage(image, index))}
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

export default withTranslation("translation")(connect()(ActivityDetail));
