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
    {  text : 'eieieieieieieieieieiei' , color : 'red' },
    {  text : '????????????????' , color : 'black' },
    {  text : '<><><><><><><>' , color : 'blue' },
    {  text : 'HOOOOOOO0000' , color : 'green' },
    {  text : '_______________' , color : 'brown' },
    {  text : '...............................' , color : 'grey' },
]


ReactDOM.render(
<Provider store={store}>
    <App data={data}/>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
