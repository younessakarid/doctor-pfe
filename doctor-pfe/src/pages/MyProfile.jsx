import React, { useState } from 'react'
import { assets } from '../assets/assets'

function MyProfile() {

  const [userdata, setUserData] = useState({
    name: "Youness AKARID",
    image: assets.profile_pic,
    email: 'akarid2004@gmail.com',
    phone: '+33 1 42 68 53 00',
    adresse: {
      line1: '12 Rue de la Paix,',
      line2: '75002 Paris, France'
    },
    gender: 'Male',
    dob: '2004-05-09'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='p-10 max-w-3xl mx-auto bg-white shadow-xl rounded-3xl md:my-6'>
      <div className='flex flex-col items-center gap-4'> 
        <img className='w-40 h-40 rounded-full object-cover shadow-md' src={userdata.image} alt="" />
        {
          isEdit
            ? <input
                type='text'
                value={userdata.name}
                onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
                className='text-xl font-semibold text-center border-b border-gray-300 focus:outline-none focus:border-blue-500'
              />
            : <p className='text-2xl font-bold'>{userdata.name}</p>
        }
      </div>

      <hr className='my-6 border-gray-300' />

      <div className='space-y-6'>
        <div>
          <h5 className='text-lg font-semibold text-gray-700 underline mb-2'>Contact Information</h5>
          <div className='flex gap-2'>
            <p className='font-medium'>Email:</p>
            <p className='text-gray-600'>{userdata.email}</p>
          </div>

          <div className='flex gap-2 items-center mt-2'>
            <p className='font-medium'>Phone:</p>
            {
              isEdit
                ? <input
                    type="text"
                    value={userdata.phone}
                    onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                    className='border px-2 py-1 rounded-md w-full max-w-xs'
                  />
                : <p className='text-gray-600'>{userdata.phone}</p>
            }
          </div>

          <div className='flex gap-2 items-start mt-2'>
            <p className='font-medium'>Address:</p>
            {
              isEdit
                ? <div className='space-y-1'>
                    <input
                      type="text"
                      value={userdata.adresse.line1}
                      onChange={e => setUserData(prev => ({
                        ...prev,
                        adresse: { ...prev.adresse, line1: e.target.value }
                      }))}
                      className='border px-2 py-1 rounded-md w-full'
                    />
                    <input
                      type="text"
                      value={userdata.adresse.line2}
                      onChange={e => setUserData(prev => ({
                        ...prev,
                        adresse: { ...prev.adresse, line2: e.target.value }
                      }))}
                      className='border px-2 py-1 rounded-md w-full'
                    />
                  </div>
                : <p className='text-gray-600'>
                    {userdata.adresse.line1} <br />
                    {userdata.adresse.line2}
                  </p>
            }
          </div>
        </div>

        <div>
          <h5 className='text-lg font-semibold text-gray-700 underline mb-2'>Basic Information</h5>

          <div className='flex gap-2 items-center'>
            <p className='font-medium'>Gender:</p>
            {
              isEdit
                ? <select
                    name="gender"
                    id="gender"
                    value={userdata.gender}
                    onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                    className='border px-2 py-1 rounded-md'
                  >
                    <option value="Male">Homme</option>
                    <option value="Female">Femme</option>
                  </select>
                : <p className='text-gray-600'>{userdata.gender}</p>
            }
          </div>

          <div className='flex gap-2 items-center mt-2'>
            <p className='font-medium'>Birthday:</p>
            {
              isEdit
                ? <input
                    type="date"
                    value={userdata.dob}
                    onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                    className='border px-2 py-1 rounded-md'
                  />
                : <p className='text-gray-600'>{userdata.dob}</p>
            }
          </div>
        </div>
      </div>

      <div className='flex justify-center mt-8'>
        {
          isEdit
            ? <button
                className='bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition'
                onClick={() => setIsEdit(false)}
              >
                Save Information
              </button>
            : <button
                className='bg-gray-200 text-gray-800 px-6 py-2 rounded-xl hover:bg-gray-300 transition'
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
        }
      </div>
    </div>
  )
}

export default MyProfile







// import React, { useState } from 'react'
// import { assets } from '../assets/assets'


// function MyProfile() {

//   const [userdata,setUserData] = useState({
//     name: "Youness AKARID",
//     image: assets.profile_pic,
//     email:'akarid2004@gmail.com',
//     phone:'+33 1 42 68 53 00',
//     adresse: {
//       line1:'12 Rue de la Paix,',
//       line2:'75002 Paris, France'
//     },
//     gender:'Male',
//     dob:'2004-05-09'
//   })

//   const [isEdit,setIsEdit] = useState(false)

//   return (
//     <div className='p-10'>

//         <img className='w-60 rounded-4xl' src={userdata.image} alt="" /><br />
        
//         {
//           isEdit 
//           ? <input type='text' value={userdata.name} onChange={e => setUserData(prev => ({...prev,name:e.target.value}))} />
//           :<p>{userdata.name}</p>
//         } 

//         <br />
//         <hr className='w-[30%]' />
//         <br />

//         <div>
//           <h5 className='underline'>CONTACT INFORMATION :</h5><br />
//           <div className='flex gap-4'>
//             <p>Email id : </p>
//             <p> {userdata.email}</p>
//           </div>

//           <br />

//           <div className='flex gap-4'>
//           <p>Phone: </p>
//            {
//            isEdit 
//            ?<input type="text"  value={userdata.phone} onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))} />
//            :<p>{userdata.phone}</p>
//            }
//           </div>

//           <br />

//           <div className='flex gap-4 items-center'>
//            <p>Address :</p>
//            {
//             isEdit
//             ? <p>
//               <input type="text" value={userdata.adresse.line1} onChange={e => setUserData(prev => ({...prev.adresse,line1:e.target.value}))} />
//               <br />
//               <input type="text" value={userdata.adresse.line2} onChange={e => setUserData(prev => ({...prev.adresse,line2:e.target.value}))} />
//             </p>
//             : <p>
//               {userdata.adresse.line1} <br />
//               {userdata.adresse.line2}
//             </p>
//            }
//           </div>

//           <br />
//           <h5 className='underline'>BASIC INFORMATION :</h5><br />

//           <div className='flex gap-4'>
//             <p>Gender :</p>
//             <div>
//               {
//                 isEdit
//                 ?<select name="gender" id="gender" value={userdata.gender} onChange={e => setUserData(prev => ({...prev,gender:e.target.value}))}>
//                 <option value="homme">Homme</option>
//                 <option value="femme">Femme</option>
//               </select>
//               : <p>{userdata.gender}</p>
//               }
//             </div>
//           </div>

//           <br />

//           <div className='flex gap-4'>
//             <p>Birthday :</p> <br />
//            {
//             isEdit
//             ? <input type="date" value={userdata.dob} onChange={e=> setUserData(prev => ({...prev,dob:e.target.value}))} />
           
//            : <p>{userdata.dob}</p>
//           } 
//           </div>
          
//         </div>
//         <br />

//         <div className='flex gap-5'>
//           {
//             isEdit
//             ? <button className='border border-gray-400 px-5 py-2 rounded-2xl' onClick={() => setIsEdit(false)}>Save Information</button>
//              : <button className='border border-gray-400 px-5 py-2 rounded-2xl' onClick={() => setIsEdit(true)}>Edit</button>
//           }
          
//         </div>
        
         

//     </div>
//   )
// }

// export default MyProfile