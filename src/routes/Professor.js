import React, { Component } from 'react';
import { connect } from 'dva';

class Professor extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="education">
                <div className="w-100">
                    <h2 className="mb-5">Professor</h2>
                </div>
            </section>
        );
    }
}

export default connect()(Professor);
