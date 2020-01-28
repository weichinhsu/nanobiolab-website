import React, { Component } from 'react';
import { connect } from 'dva';

class Member extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                <div className="w-100">
                    <h2 className="mb-5">Member</h2>
                </div>
            </section>
        );
    }
}

export default connect()(Member);
