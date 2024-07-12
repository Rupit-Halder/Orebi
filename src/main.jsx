import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContextApi } from './Components/ContextApi.jsx';
import store from './Store.js'
import { Provider } from 'react-redux'
import firebaseConfig from './firebaseConfig.js';

ReactDOM.createRoot(document.getElementById('root')).render(

  <ContextApi>
    <Provider store={store}>
    <App />
    </Provider>
    
  </ContextApi>
)
