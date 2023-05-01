import React from 'react'
import Navbar from './components/Navbar'
import Mainnews from './components/Mainnews'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  const pageSize = 10
  const apiKey = process.env.REACT_APP_NEWS_API

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/general' element={
            <Mainnews key={"home"} pageSize={pageSize} country={"us"} apiKey={apiKey} category="general" />
          } />
          <Route exact path='/' element={
            <Mainnews key={"general"} pageSize={pageSize} country={"us"} apiKey={apiKey} category="general" />
          } />
          <Route exact path='/sports' element={
            <Mainnews key={"sports"} pageSize={pageSize} country={"us"} apiKey={apiKey} category="sports" />
          } />
          <Route exact path='/health' element={
            <Mainnews key={"health"} pageSize={pageSize} country={"us"} apiKey={apiKey} category="health" />
          } />
          <Route exact path='/science' element={
            <Mainnews key={"science"} pageSize={pageSize} country={"us"} apiKey={apiKey} category="science" />
          } />
          <Route exact path='/technology' element={
            <Mainnews key={"technology"} pageSize={pageSize} country={"us"} apiKey={apiKey} category="technology" />
          } />
          <Route exact path='/entertainment' element={
            <Mainnews key={"entertainment"} pageSize={pageSize} country={"us"} apiKey={apiKey} category="entertainment" />
          } />
          <Route exact path='/business' element={
            <Mainnews key={"business"} pageSize={pageSize} country={"us"} apiKey={apiKey} category="business" />
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
