import React, { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      resumeData: {}
    };
  }

  getResumeData(){
    fetch(process.env.PUBLIC_URL + '/resumeData.json')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          resumeData: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log(error);
        this.setState({
          resumeData: null
        });
      }
    );
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
