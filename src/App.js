import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

export default class App extends Component {
  //c= ' hunny';
  pageSize=10;
  render() {
    return (
      <div>
        {/*Hello my first name is {this.c}*/}
        <Router>
          <NavBar />    
          <Routes>
          <Route exect  path="/business" element={<News key="business" pageSize={this.pageSize} country={"in"} category={"business"} mine={"warning"} GGG={"SUBHAN"}/> }/>
          <Route exect  path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country={"in"} category={"entertainment"} mine={"danger"} />}/>
          <Route exect  path="/general" element={<News key="general" pageSize={this.pageSize} country={"in"} category={"general"} mine={"success"} />}/>
          <Route exect  path="/health" element={<News key="health" pageSize={this.pageSize} country={"in"} category={"health"} mine={"primary"} />}/>
          <Route exect  path="/science" element={<News key="science" pageSize={this.pageSize} country={"in"} category={"science"} mine={"info"} />}/>
          <Route exect  path="/sports" element={<News key="sports" pageSize={this.pageSize} country={"in"} category={"sports"} mine={"dark"} />}/>
          <Route exect  path="/technology" element={<News key="technology" pageSize={this.pageSize} country={"in"} category={"technology"} mine={"secondary"} />}/>
        </Routes>
        </Router>
      </div>
    );
  }
}
