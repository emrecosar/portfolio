import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import { Waypoint } from 'react-waypoint';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      resumeData: {}
    };
  }

  getResumeData(){
    $.ajax({
      url: process.env.PUBLIC_URL + '/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  setWaypoint = (section, previousPosition, currentPosition) => {
    console.log(section, previousPosition, currentPosition);
    $("#nav-wrap a").parent().removeClass("current");
    var active_link = $('#nav-wrap a[href="#' + section + '"]');
    active_link.parent().addClass("current");
  }

  setWaypointLeave = (section, previousPosition, currentPosition) => {
    console.log("L ", section, previousPosition, currentPosition);
    if(currentPosition === 'below') {
      this.setWaypoint("home");
    } else {
      this.setWaypoint("resume");
    }
  }

  render() {
    return (
      <div className="App">
        <Waypoint 
          onEnter={({previousPosition, currentPosition}) => this.setWaypoint("home", previousPosition, currentPosition)} 
          onLeave={({previousPosition, currentPosition}) => this.setWaypointLeave("about", previousPosition, currentPosition)} 
          >
            <HeaderWithRef data={this.state.resumeData.main}/>
        </Waypoint>
        <Waypoint 
          onEnter={({previousPosition, currentPosition}) => this.setWaypoint("about", previousPosition, currentPosition)} 
          onLeave={({previousPosition, currentPosition}) => this.setWaypointLeave("about", previousPosition, currentPosition)} 
          topOffset={"60%"} 
          bottomOffset={"-10%"}>
            <AboutWithRef data={this.state.resumeData.main}/>
        </Waypoint>
        <Waypoint 
          onEnter={({previousPosition, currentPosition}) => this.setWaypoint("resume", previousPosition, currentPosition)} 
          onLeave={({previousPosition, currentPosition}) => this.setWaypoint("about", previousPosition, currentPosition)} 
          topOffset={"50%"}>
            <ResumeWithRef data={this.state.resumeData.resume}/>
        </Waypoint>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

const HeaderWithRef = React.forwardRef((props, ref) => {
  return <Header innerRef={ref} {...props}/>
})

const AboutWithRef = React.forwardRef((props, ref) => {
  return <About innerRef={ref} {...props}/>
})

const ResumeWithRef = React.forwardRef((props, ref) => {
  return <Resume innerRef={ref} {...props}/>
})

export default App;
