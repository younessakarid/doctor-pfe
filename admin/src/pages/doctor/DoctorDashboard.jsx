import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'

function DoctorDashboard() {

  const { dToken, dashData, getDashData } = useContext(DoctorContext)

  useEffect(() => {

    if (dToken) {
      getDashData()
    }

  }, [dToken])


  return dashData &&  (
    <div>
      
      

    </div>
  )
}

export default DoctorDashboard