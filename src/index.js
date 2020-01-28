import dva from 'dva';
import { createBrowserHistory as createHistory } from 'history';

// 1. Initialize
const app = dva({ history: createHistory({ basename: '/nanobiolab-website' }) });

// 2. Plugins
// app.use({});

// 3. Model

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
