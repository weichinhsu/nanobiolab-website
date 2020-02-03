import React, { Component } from 'react';
import { connect } from 'dva';
import SubHeader from '../components/SubHeader'
import data from '../data/professor'

class Professor extends Component {
    state = {
        type: '關於',
        pro: data[0].group,
    }
    professerType = (type) => {
        let pro = []
        data.forEach((row) => {
            if (row.subject == type)
                pro = row.group
        })
        this.setState({ type, pro })
    }
    render() {
        const { type } = this.state
        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="education">
                <div className="w-100">
                    <SubHeader data={data} title="指導教授" onSubHeaderClick={this.professerType} isActive={type} />

                </div>
            </section>
        );
    }
}

export default connect()(Professor);
