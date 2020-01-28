import React, { Component } from 'react'
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import Sidebar from '../components/Sidebar'

class HomeLayout extends Component {

  render() {
    const { children, route } = this.props
    return (
      <div>
        <Sidebar
          menu={route}/>
        <div className="container-fluid p-0">
          {children}
        </div>
      </div>
    )
  }å
}

export default connect()(HomeLayout)