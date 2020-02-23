import React, { Component } from 'react';
import { connect } from 'dva';
import SubHeader from '../components/SubHeader'
import { withTranslation } from 'react-i18next'
import About from '../components/About'
import Other from '../components/Other'
import data from '../data/professor'

class Professor extends Component {
    state = {
        type: 'professor-about',
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
            case 'professor-about':
                return <About data={pro} />
            case 'professor-reviewer':
                return <Other data={pro} />
            case 'professor-synergistic':
                return <Other data={pro} />
            case 'professor-award':
                return <Other data={pro} />
        }
    }
    render() {
        const { type } = this.state
        const { t, i18n } = this.props;
        return (<div className="content">
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="education">
                <div className="w-100">
                    <SubHeader data={data} title={t('professor')} onSubHeaderClick={this.professerType} isActive={type} />
                    {this.renderContent()}
                </div>
            </section>
        </div>
        );
    }
}

export default withTranslation("translation")(connect()(Professor));
