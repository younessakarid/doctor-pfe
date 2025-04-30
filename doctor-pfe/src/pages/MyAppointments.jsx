import React, { useContext } from 'react'
import AppContextProvider, { AppContext } from '../context/AppContext'

function MyAppointments() {
   const { doctors } = useContext(AppContext)

  return (
    <div>

      <p>Mes rendez-vous</p><br />
       <hr /> <br />

       <div>
        {
          doctors.slice(0, 2).map((item, index) => (
             <div key={index}>
              <div>
                <img src={doctors.img} alt="" />
                <div>
                 
                </div>
              </div>
              
             </div>
          ))
        }
       </div>


    </div>
  )
}

export default MyAppointments