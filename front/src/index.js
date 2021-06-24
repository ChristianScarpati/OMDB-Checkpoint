import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './state/store'
import {BrowserRouter, Route} from 'react-router-dom'

                                                         //Toda la CFG
                                                                                                                                           
document.body.style = "background: black"


ReactDOM.render(

    <BrowserRouter>                 
    <Provider store={store}> 
    <Route path='/' component={App} />    {/* cuando ingrese a / me va a renderizar el compoennte app */}
    

    </Provider>
    </BrowserRouter>,


  document.getElementById('root')
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

