import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { Intro, Studio, Help, navegador } from "./pages"
import { Toast } from "./components/form"

import "./global.sass"

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router basename="/subtitle-editor">
          <Routes>
            <Route path="/" element={<Intro />}></Route>
            <Route path="/studio" element={<Studio />}></Route>
            <Route path="/help" element={<Help />}></Route>
            <Route path="/nav" element={<navegador />}></Route>
          </Routes>
        </Router>
        <Toast />
      </>
    )
  }
}
