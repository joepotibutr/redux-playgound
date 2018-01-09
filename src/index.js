import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import todos from './reducer'
import { Provider } from 'react-redux'


const middleware = [ thunk ];
    middleware.push(createLogger());

const store = createStore(
    todos,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
  )

const data = [
    {  text : 'eieieieieieieieieieiei' },
    {  text : '????????????????' },
    {  text : '<><><><><><><>' },
    {  text : 'HOOOOOOO0000' },
    {  text : '_______________' },
    {  text : '...............................' },
]


ReactDOM.render(
<Provider store={store}>
    <App data={data}/>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
