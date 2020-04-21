import React, { Component } from 'react';

class MemberProfile extends Component {
    renderData = (data) => {
        return <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-4 member-item">
        <div className="resume-content">
            <h4>{data.name}</h4>
            <h6>{data.title}</h6>
            {data.research !== "" ? <h6 className="mt-3"><i className="fa fa-chevron-circle-right"></i> &nbsp;研究</h6> : null}
            {data.research ? <p>{data.research}</p> : null}
            {data.plan.length !== 0 ? <h6 className="mt-3"><i className="fa fa-chevron-circle-right"></i> &nbsp;計畫</h6> : null}
            {data.plan.map(row => {return <div>{row}</div>})}
            {data.publication.length !== 0 ? <h6 className="mt-3"><i className="fa fa-chevron-circle-right"></i> &nbsp;發表</h6> : null}
            {data.publication.map(row => { return <div>{row}</div> })}
            {data.honor.length !== 0 ? <h6 className="mt-3"><i className="fa fa-chevron-circle-right"></i> &nbsp;榮譽</h6> : null}
            {data.honor.map(row => {return <div>{row}</div>})}
            {data.patent.length !== 0 ? <h6 className="mt-3"><i className="fa fa-chevron-circle-right"></i> &nbsp;專利</h6> : null}
            {data.patent.map(row => {return <div>{row}</div>})}
            {data.cv ? <a href={data.cv} target="_blank">Reference</a> : null}
        </div>
        <div className="resume-date text-md-right">
            <span className="text-primary">{data.period}</span>
        </div>
    </div>
    }
    render() {
        const { data } = this.props;
        return (<div>
            {data ? data.map(row => this.renderData(row)) : null}
        </div>
        );
    }
}

export default MemberProfile;
