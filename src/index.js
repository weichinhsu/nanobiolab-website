import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import dva from 'dva';
import { createBrowserHistory as createHistory } from 'history';
import './translation'

// 1. Initialize
const app = dva({ history: createHistory( ) });

// 2. Plugins
// app.use({});

// 3. Model

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
