import React from 'react';

import { Provider } from 'react-redux';

// import App from './app.jsx';

const Root = ({ store }) => (
    <Provider store={store}>
        <h1>Testing Twing Store</h1>
    </Provider>
)

export default Root;