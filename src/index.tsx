import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';

import App from 'components/App';
import configureStore from 'store';
import client from 'graphqlClient';

import * as serviceWorker from 'serviceWorker';

const store = configureStore();

const Root = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
);

render(<Root />, document.getElementById('root'));

serviceWorker.register();
