import React, { Component } from 'react';

class Other extends Component {
    renderRow = (row) => {
        return <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-2">
            <div className="resume-content">
                <i className="fa fa-chevron-circle-right"></i> {row}
            </div>
        </div>
    }
    renderOther = (pat) => {
        return <div  className="member-item">
            <h4 className="mb-3">{pat.name}</h4>
            {pat.data.map(row => this.renderRow(row))}
        </div>
    }
    render() {
        const { data } = this.props;
        return (
            <div>
                {data.map(patant => this.renderOther(patant))}
            </div>
        );
    }
}

export default Other
