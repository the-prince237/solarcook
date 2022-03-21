import React from 'react'
import {Feature} from '../../components'
import './features.css'

const featuresData = [
  {
    title: 'Improving and distrusts instantly',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus adipisci placeat facere cumque, ab suscipit eum cupiditate totam officiis temporibus quis consequatur laudantium possimus magnam at quisquam culpa nostrum.'
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus adipisci placeat facere cumque, ab suscipit eum cupiditate totam officiis temporibus quis consequatur laudantium possimus magnam at quisquam culpa nostrum.'
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus adipisci placeat facere cumque, ab suscipit eum cupiditate totam officiis temporibus quis consequatur laudantium possimus magnam at quisquam culpa nostrum.'
  },
  {
    title: 'Really boy low county',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus adipisci placeat facere cumque, ab suscipit eum cupiditate totam officiis temporibus quis consequatur laudantium possimus magnam at quisquam culpa nostrum.'
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen</h1>
        <p>Request Early Access to Get Started</p>  
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) =>
          <Feature title={item.title} text={item.text} key={item.title+item.index}/>
        )}
      </div>
    </div>
  )
}

export default Features
