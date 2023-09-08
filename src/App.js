import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

export default class App extends Component {
  //c= ' hunny';
  pageSize=10;


state={
progress :0
}
 setProgress = (progress)=>{
this.setState({progress:progress})
}





  render() {
    return (
      <div>
        {/*Hello my first name is {this.c}*/}
        <Router>
          <NavBar />  
          <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
    
      />
  
          <Routes>
          <Route exect  path="/business" element={<News setProgress={this.setProgress}key="business" pageSize={this.pageSize} country={"in"} category={"business"} mine={"warning"} GGG={"SUBHAN"}/> }/>
          <Route exect  path="/entertainment" element={<News setProgress={this.setProgress}key="entertainment" pageSize={this.pageSize} country={"in"} category={"entertainment"} mine={"danger"} />}/>
          <Route exect  path="/general" element={<News setProgress={this.setProgress}key="general" pageSize={this.pageSize} country={"in"} category={"general"} mine={"success"} />}/>
          <Route exect  path="/health" element={<News setProgress={this.setProgress}key="health" pageSize={this.pageSize} country={"in"} category={"health"} mine={"primary"} />}/>
          <Route exect  path="/science" element={<News setProgress={this.setProgress}key="science" pageSize={this.pageSize} country={"in"} category={"science"} mine={"info"} />}/>
          <Route exect  path="/sports" element={<News setProgress={this.setProgress}key="sports" pageSize={this.pageSize} country={"in"} category={"sports"} mine={"dark"} />}/>
          <Route exect  path="/technology" element={<News setProgress={this.setProgress}key="technology" pageSize={this.pageSize} country={"in"} category={"technology"} mine={"secondary"} />}/>
        </Routes>
        </Router>
      </div>
    );
  }
}
