import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import ComponentTemplate from './components/ComponentTemplate';

function App() {
    return (
        <Provider store={store}>
            <ComponentTemplate />
        </Provider>
    );
}

export default App;
