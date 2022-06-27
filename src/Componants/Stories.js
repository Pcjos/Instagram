import { stringToByteArray } from '@firebase/util'
import React from 'react'

const Stories = () => {

    const [state,setState]=React.useState([
        {id:1, image:'/images/chan.jpg',name:'MattPerry514' },
        {id:2, image:'/images/deepu.jpg',name:'DPadukone2876' },
        {id:7, image:'/images/gogreen.jpg',name:'GreenUser9009' },
        {id:8, image:'/images/chan-story.jpg',name:'MsGreen1995' },
        {id:3, image:'/images/tier5.png',name:'Tier5' },
        {id:4, image:'/images/deeou.jpg',name:'DP_fan_clun' },
        {id:5, image:'/images/image4.jfif',name:'saveEarth001' }
    ])
  return (

    <div className='stories'>
            {state.map (story => (
          
          <div className='stories_info' key={story.id}>
            <div className='stories_img'>
                <span>
                    <img src={story.image} alt="story"></img>
                </span>
            </div>
            <div className="stories_name">{story.name}</div>
        </div>
            ))}
            

        
    </div>
  )
}

export default Stories