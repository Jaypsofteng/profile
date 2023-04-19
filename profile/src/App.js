import React from 'react';
import './App.css';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Tools from './components/Tools';
import Project from './components/Project';
/* import Animation from './components/Animation';*/
import data from './static/application-text.json';
import Typography from '@mui/material/Typography';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = data;
  }

  render() {
    return (
      <div>
        {/*<Animation />*/}
        <Typography className="App">
          <Header headerData={this.state.header} profileData={this.state.profile} />
          <Education educationData={this.state.education} />
          <body className="App-body">
            <Experience experienceData={this.state.experience} />
            <Tools toolsData={this.state.tools} skillsData={this.state.skills} />
            <Project projectData={this.state.projects} />
          </body>
        </Typography>
      </div>
    );

  }
}

export default App;
