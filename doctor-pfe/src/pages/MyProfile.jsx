import React, { useState } from 'react'
import { assets } from '../assets/assets'
import profile_pic from '../assets/profile_pic.png'

function MyProfile() {

  const [userdata,setUserData] = useState({
    name: "Youness AKARID",
    image: {profile_pic},
    email:'akarid2004@gmail.com',
    phone:'+33 1 42 68 53 00',
    adresse: {
      line1:'12 Rue de la Paix,',
      line2:'75002 Paris, France'
    },
    gender:'Male',
    dob:'2004-05-09'
  })

  const [isEdit,setIsEdit] = useState(true)

  return (
    <div>

        <img src={userdata.image} alt="" />
        {
          isEdit 
          ? <input type='text'  />
          :<p>{userdata.name}</p>
        }



    </div>
  )
}

export default MyProfile