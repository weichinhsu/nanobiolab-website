import React, { Component } from 'react';
import { withTranslation } from 'react-i18next'

class Patent extends Component {
    renderRow = (row) => {
        return <div className="member-item resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
                <p>{row.author}, {row.title}, {this.props.t('patent-date')}: {row.period}, {this.props.t('patent-no')} {row.id}</p>
            </div>
        </div>
    }
    // renderRow = (row) => {
    //     return <div className="member-item resume-item d-flex flex-column flex-md-row justify-content-between mb-2">
    //         <div className="resume-content">
    //             <div className="content-sub-title mb-1">{row.title}</div>
    //             <p>{row.author}</p>
    //         </div>
    //         <div className="resume-date text-md-right">
    //             <span className="text-primary">{row.period}</span>
    //         </div>
    //     </div>
    // }
    renderPatent = (pat) => {
        return <div>
            <h4 className="mb-3">{this.props.t(pat.name)}</h4>
            {pat.data.map(row => this.renderRow(row))}
        </div>
    }
    render() {
        const { data } = this.props;
        return (
            <div>
                {data.map(patent => this.renderPatent(patent))}
            </div>
        );
    }
}

export default withTranslation("translation")(Patent)
