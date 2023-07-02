import { useState } from 'react'

import './App.css'

function LikeButton() {

  return (
    <>
      <img src="" alt="" />
    </>
  )

}

function Course(props) {
  function redirect() {
    window.open("https://www.google.com/")
  }
  let imagePath = '/images/courses/' + props.name + '.jpeg';

  return (
    <>
      <img src={imagePath} alt="course Image" onClick={redirect} />
      <div>
        <span>Course Name: {props.name}</span>
        <br />
        <span>Price:${props.price}</span>
      </div >
    </>

  )

}

function App() {

  let courses = [
    {
      name: "nodejs", price: 50
    }, {
      name: "react", price: 100
    }, {
      name: "angular", price: 150
    }];



  return (
    <>
      <h1>My Courses</h1>
      <Course name="nodejs" > </ Course>
      <Course name="react"> </Course>
      <Course name="angular"> </Course>





    </>
  )
}

export default App
