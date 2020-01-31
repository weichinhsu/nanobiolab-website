import React, { Component } from 'react';
import { connect } from 'dva';
import SubHeader from '../components/SubHeader'
import MemberProfile from '../components/MemberProfile'
import data from '../data/member'

class Member extends Component {
    state = {
        type: '博士後',
        member: data[0].group,
        isActive: '博士後'
    }
    memberType = (type) => {
        let member = []
        data.forEach((row) => {
            if (row.subject == type)
                member = row.group
        })
        this.setState({ type, member })
    }

    render() {
        const { type, isActive } = this.state
        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                <div className="w-100">
                    <SubHeader data={data} title="研究室成員" onSubHeaderClick={this.memberType} isActive={type} />
                    <MemberProfile data={this.state.member} />

                </div>
            </section>
        );
    }
}

export default connect()(Member);
