import React, { Component } from 'react';
import { connect } from 'dva';
import SubHeader from '../components/SubHeader'
import { withTranslation } from 'react-i18next'
import MemberProfile from '../components/MemberProfile'
import MemberWithCollapse from '../components/MemberWithCollapse'
import data from '../data/member'

class Member extends Component {
    state = {
        type: 'member-phd',
        member: data[0].group,
    }
    memberType = (type) => {
        let member = []
        data.forEach((row) => {
            if (row.subject == type)
                member = row.group
        })
        this.setState({ type, member })
    }
    renderContent = () => {
        const { type, member } = this.state
        switch (type) {
            case 'member-phd':
                return <MemberProfile data={member} />
            case 'member-collaboration':
                return <MemberProfile data={member} />
            case 'member-assitant':
                return <MemberWithCollapse data={member} />
            case 'member-ms':
                return <MemberWithCollapse data={member} />
            case 'member-undergraduate':
                return <MemberWithCollapse data={member} />
        }
    }
    render() {
        const { type } = this.state
        const { t, i18n } = this.props;
        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                <div className="w-100">
                    <SubHeader data={data} title={t('member')} onSubHeaderClick={this.memberType} isActive={type} />
                    {this.renderContent()}
                </div>
            </section>
        );
    }
}

export default withTranslation("translation")(connect()(Member));
