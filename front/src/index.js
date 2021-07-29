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



