import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './store/questionSlice';
import { Provider } from 'react-redux';
import './index.css'

const store = configureStore({
  reducer: {
    questions: questionReducer ,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <App />
  </Provider>
     

)
