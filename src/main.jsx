import React from 'react'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css';
//import App from './App'
import Content from  "./Components/Layout/Content"
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Test from './Components/Layout/test'
import App from '../src/App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <App />  */}
     <Router>
    {/* <Content /> */}
    <Routes>
      <Route exact path='/' element={<Content/>}></Route>
      <Route exact path='/product' element={<Test/>}></Route>
      <Route exact path='/features' element={<App/>}></Route>
      <Route exact path='/techdetails' element={<Test/>}></Route>
      <Route exact path='/support' element={<Test/>}></Route>
    </Routes>
    </Router>
  </React.StrictMode>,
)
