import React, { Component } from 'react'
import work1 from '../images/work/work1.jpg'
import work2 from '../images/work/work2.jpg'
import work3 from '../images/work/work3.jpg'
import work4 from '../images/work/work4.jpg'
import work5 from '../images/work/work5.jpg'
import work6 from '../images/work/work6.jpg'
import work7 from '../images/work/work7.jpg'
import work8 from '../images/work/work8.jpg'
import work9 from '../images/work/work9.jpg'

export class CompletedWork extends Component {
    render() {
        return (
            <div class="services">
            <div class="servicesHead">
                <h1>100% Customer Satisfaction EVERY TIME!</h1>
                <h5>Below are a small handful of examples of the work completed over the years, all with lasting finishes and 100% customer satisfaction!</h5>
                    <p className="underline"> </p>
                </div>
                <div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-4">
      <img className="workImage" src={work1} alt="A pile of debris for the preperation work for the job"/>
    </div>
    <div class="col-sm-12 col-md-4">
      <img className="workImage" src={work2} alt="A pile of debris for the preperation work for the job"/>
    </div>
    <div class="col-sm-12 col-md-4">
      <img className="workImage" src={work3} alt="A pile of debris for the preperation work for the job"/>
    </div>
                    </div>
                    <div class="row">
    <div class="col-sm-12 col-md-4">
      <img className="workImage" src={work4} alt="A pile of debris for the preperation work for the job"/>
    </div>
    <div class="col-sm-12 col-md-4">
      <img className="workImage" src={work5} alt="A pile of debris for the preperation work for the job"/>
    </div>
    <div class="col-sm-12 col-md-4">
      <img className="workImage" src={work6} alt="A pile of debris for the preperation work for the job"/>
    </div>
                    </div>
                    <div class="row">
    <div class="col-sm-12 col-md-4">
      <img className="workImage" src={work7} alt="A pile of debris for the preperation work for the job"/>
    </div>
    <div class="col-sm-12 col-md-4">
      <img className="workImage" src={work8} alt="A pile of debris for the preperation work for the job"/>
    </div>
    <div class="col-sm-12 col-md-4">
      <img className="workImage" src={work9} alt="A pile of debris for the preperation work for the job"/>
    </div>
  </div>
            </div>
            <div>
              <p id="equipment"></p>
            </div>
          </div>
          
        )
    }
}

export default CompletedWork
