import React from 'react';
import ReactDOM from 'react-dom';
import WebFontLoader from 'webfontloader';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App';
import 'styles/index.scss';
import * as serviceWorker from './serviceWorker';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons']
  }
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // React.createElement(App),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
