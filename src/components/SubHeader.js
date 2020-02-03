import React, { Component } from 'react';

class SubHeader extends Component {
    renderHeader = (subject) => {
        console.log(subject)
        return <li className={this.props.isActive == subject ? 'item-active' : 'item-inactive'} 
        onClick={() => this.props.onSubHeaderClick(subject)}>
            <a className="sub-title">{subject}</a>
        </li>
    }
    render() {
        const { data, title } = this.props;
        return (
            <div>
                <h3>{title}</h3>
                <nav className="navbar-expand-lg navbar-dark sub-header" id="mainNav">
                    <button className="navbar-toggler navbar-toggler-right" type="button"
                        data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"
                        style={{color: "black"}}>
                        List
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase">
                            {data.map(title => this.renderHeader(title.subject))}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default SubHeader;
