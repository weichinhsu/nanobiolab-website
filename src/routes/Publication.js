import React, { Component } from 'react';
import { connect } from 'dva';
import SubHeader from '../components/SubHeader'
import ProfessorConetent from '../components/ProfessorConetent'
import { withTranslation } from 'react-i18next'
import Patant from '../components/Patant'
import data from '../data/publication'

class Publication extends Component {
    state = {
        type: 'publication-papers',
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
            case 'publication-papers':
                return <ProfessorConetent data={pro} />
            case 'publication-conference':
                return <ProfessorConetent data={pro} />
            case 'publication-symposium':
                return <ProfessorConetent data={pro} />
            case 'publication-patent':
                return <Patant data={pro} />
        }
    }
    render() {
        const { type } = this.state
        const { t, i18n } = this.props;
        return (<div className="content">
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="education">
                <div className="w-100">
                    <SubHeader data={data} title={t('publication')} onSubHeaderClick={this.publicationType} isActive={type} />
                    {this.renderContent()}
                </div>
            </section>
        </div>
        );
    }
}

export default withTranslation("translation")(connect()(Publication));
