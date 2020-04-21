import React, { Component } from 'react';
import { withTranslation } from 'react-i18next'

class MemberProfile extends Component {
    renderData = (data) => {
        return <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-4 member-item">
            <div className="resume-content">
                <h4>{data.name}</h4>
                <h6>{data.title}</h6>
                {data.research !== "" ? <h6 className="mt-3"><i className="fa fa-chevron-circle-right"></i> &nbsp;研究</h6> : null}
                {data.research ? <p>{data.research}</p> : null}
                {data.plan.length !== 0 ? <h6 className="mt-3"><i className="fa fa-chevron-circle-right"></i> &nbsp;計畫</h6> : null}
                {data.plan.map(row => { return <div>{row}</div> })}
                {data.publication.length !== 0 ? <h6 className="mt-3"><i className="fa fa-chevron-circle-right"></i> &nbsp;發表</h6> : null}
                {data.publication.map(row => { return <div>{row}</div> })}
                {data.honor.length !== 0 ? <h6 className="mt-3"><i className="fa fa-chevron-circle-right"></i> &nbsp;榮譽</h6> : null}
                {data.honor.map(row => { return <div>{row}</div> })}
                {data.patent.length !== 0 ? <h6 className="mt-3"><i className="fa fa-chevron-circle-right"></i> &nbsp;專利</h6> : null}
                {data.patent.map(row => { return <div>{row}</div> })}
                {data.cv ? <a href={data.cv} target="_blank">Reference</a> : null}
            </div>
            <div className="resume-date text-md-right">
                <span className="text-primary">{data.period}</span>
            </div>
        </div>
    }
    renderGroup = (pat) => {
        return <div className="card member-card">
            <div className="card-header member-card-header" id="headingOne">
                    <button className="btn btn-link member-card-btn" type="button" data-toggle="collapse" data-target={"#"+pat.title} aria-expanded="true" aria-controls="collapseOne">
                        {this.props.t(pat.title)}
                    </button>
            </div>

            <div id={pat.title} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                    {pat.data ? pat.data.map(row => this.renderData(row)) : null}

                </div>
            </div>
        </div>
    }
    render() {
        const { data } = this.props;
        return (<div>
            <div className="accordion" id="accordionExample">
            {data.map(row => this.renderGroup(row))}
            </div>
        </div>
        );
    }
}

export default withTranslation("translation")(MemberProfile);
