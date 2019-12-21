import React from 'react';
import './App.css';
import image from './img/slider/1.jpg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {activeSlide:0} 
  }

  setSlide = (index)=> {
    
  }

  nextSlide = ()=> {
    this.setState((state, props)=>{
      let slide;
      if(state.activeSlide < 5) {
        slide = state.activeSlide + 1
      } else {
        slide = 0;
      }
      return {activeSlide: slide}
    })
  }

  prevSlide = ()=> {
    this.setState((state, props)=>{
      let slide;
      if (state.activeSlide > 0) {
        slide = state.activeSlide - 1;
      } else {
        slide = 5;
      }
      return {activeSlide: slide}
  })
  }

  render() {
    return (
      <div className="slider">
        <Cube activeSlide ={this.state.activeSlide}>
        </Cube>
        <Btn setSlide={this.prevSlide}>Предыдущий слайд</Btn>
        <Btn setSlide={this.nextSlide}>Следующий слайд</Btn>
      </div>
    );
  }
}


class Cube extends React.Component {
  constructor(props) {
    super(props);
    this.slideList = ["rotate3d(0,0,0,0)","rotate3d(0,-1,0,90deg)","rotate3d(0,-1,0,180deg)","rotate3d(0,-1,0,270deg)","rotate3d(-1,0,0,90deg)","rotate3d(1,0,0,90deg)"]
  }

  render() {
    let style = {
      transform: this.slideList[this.props.activeSlide]
    }
    return (
      <div style={style} className="slider__cube">
        <Side slideIndex="0" classPosition="slider__side-back"></Side>
        <Side classPosition="slider__side-top"></Side>
        <Side classPosition="slider__side-bottom"></Side>
        <Side classPosition="slider__side-left"></Side>
        <Side classPosition="slider__side-right"></Side>
        <Side classPosition="slider__side-front"></Side>
      </div>
    )
  }
}

class Side extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"slider__cube-side " + this.props.classPosition}>
        <img className="slider__cube-img" src={image} alt="Слайд" />
      </div>
    )
  }
}

class Btn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <button onClick = {this.props.setSlide} >{this.props.children}</button>
    );    
  }
}

export default App;
