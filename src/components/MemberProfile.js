import React, { Component } from 'react';
import _ from 'lodash';
import nthu from '../assets/images/nthu.png'
import { Link } from 'dva/router';

class MemberProfile extends Component {
    renderData = (data) => {
        return <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-4 member-item">
        <div className="resume-content">
            <h4>{data.name}</h4>
            <h6>{data.title}</h6>
            {data.research ? <p>[研究]{data.research}</p> : null}
            {data.cv ? <a href={data.cv}>Reference</a> : null}
            {data.plan.map(row => {return <div>[計畫]{row}</div>})}
            {data.honor.map(row => {return <div>[榮譽]{row}</div>})}
            {data.patent.map(row => {return <div>[專利]{row}</div>})}
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
