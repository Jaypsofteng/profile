import React from 'react';
import './App.css';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Tools from './components/Tools';
import Project from './components/Project';
import Animation from './components/Animation';
import data from './static/application-text.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = data;
  }

  render() {
    return (
      <div>
        <Animation />
        <div className="App">
          <Header headerData={this.state.header} profileData={this.state.profile} />
          <Education educationData={this.state.education} />
          <body className="App-body">
            <Experience experienceData={this.state.experience} />
            <Tools toolsData={this.state.tools} />
            <Project projectData={this.state.projects} />
          </body>
        </div>
      </div>
    );

  }
}

export default App;
