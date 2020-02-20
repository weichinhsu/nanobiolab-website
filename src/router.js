import React, { Component } from 'react';
// import { Route, Switch, routerRedux, withRouter, Redirect } from 'dva/router';
import { HashRouter, Route, withRouter, Switch, Redirect, BrowserRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import _ from 'lodash';
import { I18nextProvider } from 'react-i18next'
import i18n from './translation'

import HomeLayout from './layouts/HomeLayout';

import News from './routes/News';
import Research from './routes/Research';
import Professor from './routes/Professor';
import Member from './routes/Member';
import Publication from './routes/Publication';
import Course from './routes/Course';
import Activity from './routes/Activity';
import ActivityDetail from './routes/ActivityDetail';

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
    name: 'news',
    path: '/news',
    component: News,
},
{
    name: 'professor',
    path: '/professor',
    component: Professor,
},
{
    name: 'research',
    path: '/research',
    component: Research,
},
{
    name: 'member',
    path: '/member',
    component: Member,
},
{
    name: 'publication',
    path: '/publication',
    component: Publication,
},
{
    name: 'course',
    path: '/course',
    component: Course,
},
{
    name: 'activity',
    path: '/activity',
    component: Activity,
},
]

const RouterRoot = withRouter(_.flow()(Root));

export default (props) => {
    return (
        <I18nextProvider i18n={i18n}>
            <HashRouter basename='/'>
                <RouterRoot {...props} >
                    <Switch >
                        <Route path="/" exact render={() => (< Redirect to='/news' />)} />
                        <HomeLayout route={route} >
                            <Switch >
                                {
                                    _.map(route, item => (<Route key={item.path} path={item.path} exact component={item.component} />))
                                }
                                <Route path="/activity/:id" component={ActivityDetail} />
                                <Route component={News} />
                            </Switch>
                        </HomeLayout>
                    </Switch>
                </RouterRoot>
            </HashRouter>
        </I18nextProvider>
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