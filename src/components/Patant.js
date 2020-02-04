import React, { Component } from 'react';

class Patant extends Component {
    renderRow = (row) => {
        return <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-2">
            <div className="resume-content">
                <div className="content-sub-title mb-1">{row.title}</div>
                <p>{row.author}</p>
            </div>
            <div className="resume-date text-md-right">
                <span className="text-primary">{row.period}</span>
            </div>
        </div>
    }
    renderPatant = (pat) => {
        return <div>
            <h4>{pat.name}</h4>
            {pat.data.map(row => this.renderRow(row))}
        </div>
    }
    render() {
        const { data } = this.props;
        return (
            <div>
                {data.map(patant => this.renderPatant(patant))}
            </div>
        );
    }
}

export default Patant
