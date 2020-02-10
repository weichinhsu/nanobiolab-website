import React, { Component } from 'react';
// import { Route, Switch, routerRedux, withRouter, Redirect } from 'dva/router';
import { HashRouter, Route, withRouter, Switch, Redirect, BrowserRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import _ from 'lodash';

import HomeLayout from './layouts/HomeLayout';

import News from './routes/News';
import Research from './routes/Research';
import Professor from './routes/Professor';
import Member from './routes/Member';
import Publication from './routes/Publication';
import Course from './routes/Course';

// const { ConnectedRouter } = routerRedux;

class Root extends Component {
    static propTypes = {
        app: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    }
    render() {
        const { children } = this.props;
        return children;
    }
}

const route = [{
    name: '最新消息',
    path: '/news',
    component: News,
},
{
    name: '指導教授',
    path: '/professor',
    component: Professor,
},
{
    name: '研究方向',
    path: '/research',
    component: Research,
},
{
    name: '研究室成員',
    path: '/member',
    component: Member,
},
{
    name: '發表成果',
    path: '/publication',
    component: Publication,
},
{
    name: '開授課程',
    path: '/course',
    component: Course,
},
];

const RouterRoot = withRouter(_.flow()(Root));

export default (props) => {
    return (
        <HashRouter basename='/'>
            <RouterRoot {...props} >
                <Switch >
                    <Route path="/" exact render={() => (< Redirect to='/news' />)} />
                    <HomeLayout route={route} >
                        <Switch >
                            {
                                _.map(route, item => (<Route key={item.path} path={item.path} exact component={item.component} />))
                            }
                            <Route component={News} />)}/>
                        </Switch>
                    </HomeLayout>
                </Switch>
            </RouterRoot>
        </HashRouter>
    )
}

// export default (props) => {
//     return (
//         <ConnectedRouter history={props.history}>
//             <RouterRoot {...props} >
//                 <Switch >
//                 <Route path="/" exact render={ () => (< Redirect to='/news' />)}/> 
//                     <HomeLayout route={route} >
//                         <Switch >
//                             {
//                                 _.map(route, item => (<Route key={item.path} path={item.path} exact component={item.component} />))
//                             }
//                             <Route  component={News}/>)}/> 
//                         </Switch>
//                     </HomeLayout>
//                 </Switch>
//             </RouterRoot>
//         </ConnectedRouter>
//     )
// }