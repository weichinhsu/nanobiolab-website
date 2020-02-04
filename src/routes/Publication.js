import React, { Component } from 'react';
import { connect } from 'dva';
import SubHeader from '../components/SubHeader'
import ProfessorConetent from '../components/ProfessorConetent'
import Patant from '../components/Patant'
import data from '../data/publication'

class Publication extends Component {
    state = {
        type: '期刊論文',
        pro: data[0].group,
    }
    publicationType = (type) => {
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
            case '期刊論文':
                return <ProfessorConetent data={pro} />
            case '國際會議':
                return <ProfessorConetent data={pro} />
            case '研討會':
                return <ProfessorConetent data={pro} />
            case '專利申請':
                return <Patant data={pro} />
        }
    }
    render() {
        const { type, pro } = this.state
        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="education">
                <div className="w-100">
                    <SubHeader data={data} title="發表成果" onSubHeaderClick={this.publicationType} isActive={type} />
                    {this.renderContent()}
                </div>
            </section>
        );
    }
}

export default connect()(Publication);
