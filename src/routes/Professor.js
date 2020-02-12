import React, { Component } from 'react';
import { connect } from 'dva';
import SubHeader from '../components/SubHeader'
import About from '../components/About'
import ProfessorConetent from '../components/ProfessorConetent'
import Patant from '../components/Patant'
import Other from '../components/Other'
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
    renderContent = () => {
        const { type, pro } = this.state
        switch (type) {
            case '關於':
                return <About data={pro} />
            case '審稿經驗':
                return <Other data={pro} />
            case '協同活動':
                return <Other data={pro} />
            case '獲獎紀錄':
                return <Other data={pro} />
        }
    }
    render() {
        const { type, pro } = this.state
        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="education">
                <div className="w-100">
                    <SubHeader data={data} title="指導教授" onSubHeaderClick={this.professerType} isActive={type} />
                    {this.renderContent()}
                </div>
            </section>
        );
    }
}

export default connect()(Professor);
