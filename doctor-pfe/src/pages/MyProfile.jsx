import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets.js';

const MyProfile = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [image, setImage] = useState(false);
    const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext);

    const updateUserProfileData = async () => {
        try {
            const formData = new FormData();
            formData.append('name', userData.name);
            formData.append('phone', userData.phone);
            formData.append('address', JSON.stringify(userData.address));
            formData.append('gender', userData.gender);
            formData.append('dob', userData.dob);
            if (image) formData.append('image', image);

            const { data } = await axios.post(`${backendUrl}/api/user/update-profile`, formData, { headers: { token } });

            if (data.success) {
                toast.success(data.message);
                await loadUserProfileData();
                setIsEdit(false);
                setImage(false);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return userData ? (
        <div className="max-w-2xl mx-auto mt-10 bg-white p-8 shadow-2xl rounded-3xl border border-gray-100 b-10 mb-10">
    <div className="flex flex-col items-center gap-5">
        <label htmlFor="image" className="relative group cursor-pointer">
            <img
                className="w-36 h-36 rounded-full object-cover border-2 border-[#0e384c] shadow-md transition duration-300 group-hover:scale-105"
                src={image ? URL.createObjectURL(image) : userData.image}
                alt="Profile"
            />
            {isEdit && (
                <>
                    <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center group-hover:bg-black/60 transition">
                        <p className="text-white text-sm font-medium">Change</p>
                    </div>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
                </>
            )}
        </label>

        {isEdit ? (
            <input
                className="text-xl font-semibold text-center border-b border-gray-300 focus:outline-none focus:border-indigo-500 transition"
                type="text"
                value={userData.name}
                onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
            />
        ) : (
            <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
        )}
    </div>

    <hr className="my-8 border-t border-gray-200" />

    <div className="grid gap-8">
        <section>
            <h3 className="text-xs uppercase font-semibold text-gray-500 mb-3 tracking-wider">Contact Information</h3>
            <div className="grid grid-cols-3 items-start text-sm gap-y-4">
                <p className="font-medium text-gray-700">Email:</p>
                <p className="col-span-2 text-[#0e384c]">{userData.email}</p>

                <p className="font-medium text-gray-700">Phone:</p>
                {isEdit ? (
                    <input
                        type="text"
                        className="col-span-2 w-full bg-white border text-[#0e384c] border-gray-300 p-2 rounded-lg focus:outline-none focus:border-indigo-500"
                        value={userData.phone}
                        onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                ) : (
                    <p className="col-span-2 text-[#0e384c]">{userData.phone}</p>
                )}

                <p className="font-medium text-gray-700">Address:</p>
                {isEdit ? (
                    <div className="col-span-2 space-y-2">
                        <input
                            type="text"
                            className="w-full bg-white border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-indigo-500"
                            value={userData.address.line1}
                            onChange={(e) =>
                                setUserData(prev => ({
                                    ...prev,
                                    address: { ...prev.address, line1: e.target.value },
                                }))
                            }
                        />
                        <input
                            type="text"
                            className="w-full bg-white border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-indigo-500"
                            value={userData.address.line2}
                            onChange={(e) =>
                                setUserData(prev => ({
                                    ...prev,
                                    address: { ...prev.address, line2: e.target.value },
                                }))
                            }
                        />
                    </div>
                ) : (
                    <p className="col-span-2 text-gray-700">{userData.address.line1}<br />{userData.address.line2}</p>
                )}
            </div>
        </section>

        <section>
            <h3 className="text-xs uppercase font-semibold text-gray-500 mb-3 tracking-wider">Basic Information</h3>
            <div className="grid grid-cols-3 items-center text-sm gap-y-4">
                <p className="font-medium text-gray-700">Gender:</p>
                {isEdit ? (
                    <select
                        className="col-span-2 bg-white border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-indigo-500"
                        value={userData.gender}
                        onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                    >
                        <option value="Not Selected">Not Selected</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                ) : (
                    <p className="col-span-2 text-gray-700">{userData.gender}</p>
                )}

                <p className="font-medium text-gray-700">Date of Birth:</p>
                {isEdit ? (
                    <input
                        type="date"
                        className="col-span-2 bg-white border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-indigo-500"
                        value={userData.dob}
                        onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                    />
                ) : (
                    <p className="col-span-2 text-gray-700">{userData.dob}</p>
                )}
            </div>
        </section>
    </div>

    <div className="flex justify-center mt-10">
        {isEdit ? (
            <button
                onClick={updateUserProfileData}
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition font-medium shadow-sm"
            >
                Save
            </button>
        ) : (
            <button
                onClick={() => setIsEdit(true)}
                className="border border-[#0e384c] text-[#0e384c] px-6 py-2 rounded-full hover:bg-indigo-600 hover:text-white transition font-medium shadow-sm"
            >
                Edit
            </button>
        )}
    </div>
</div>


    ) : null;
};

export default MyProfile;




























// import React, { useContext, useState } from 'react'
// import { AppContext } from '../context/AppContext'

// function MyProfile() {

//   const {userdata, setUserData} = useContext(AppContext)

//   const [isEdit, setIsEdit] = useState(false)

//   return userdata && (
//     <div className='p-10 max-w-3xl mx-auto bg-white shadow-xl rounded-3xl md:my-6'>
//       <div className='flex flex-col items-center gap-4'> 
//         <img className='w-40 h-40 rounded-full object-cover shadow-md' src={userdata.image} alt="" />
//         {
//           isEdit
//             ? <input
//                 type='text'
//                 value={userdata.name}
//                 onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
//                 className='text-xl font-semibold text-center border-b border-gray-300 focus:outline-none focus:border-blue-500'
//               />
//             : <p className='text-2xl font-bold'>{userdata.name}</p>
//         }
//       </div>

//       <hr className='my-6 border-gray-300' />

//       <div className='space-y-6'>
//         <div>
//           <h5 className='text-lg font-semibold text-gray-700 underline mb-2'>Contact Information</h5>
//           <div className='flex gap-2'>
//             <p className='font-medium'>Email:</p>
//             <p className='text-gray-600'>{userdata.email}</p>
//           </div>

//           <div className='flex gap-2 items-center mt-2'>
//             <p className='font-medium'>Phone:</p>
//             {
//               isEdit
//                 ? <input
//                     type="text"
//                     value={userdata.phone}
//                     onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
//                     className='border px-2 py-1 rounded-md w-full max-w-xs'
//                   />
//                 : <p className='text-gray-600'>{userdata.phone}</p>
//             }
//           </div>

//           <div className='flex gap-2 items-start mt-2'>
//             <p className='font-medium'>Address:</p>
//             {
//               isEdit
//                 ? <div className='space-y-1'>
//                     <input
//                       type="text"
//                       value={userdata.adresse.line1}
//                       onChange={e => setUserData(prev => ({
//                         ...prev,
//                         adresse: { ...prev.adresse, line1: e.target.value }
//                       }))}
//                       className='border px-2 py-1 rounded-md w-full'
//                     />
//                     <input
//                       type="text"
//                       value={userdata.adresse.line2}
//                       onChange={e => setUserData(prev => ({
//                         ...prev,
//                         adresse: { ...prev.adresse, line2: e.target.value }
//                       }))}
//                       className='border px-2 py-1 rounded-md w-full'
//                     />
//                   </div>
//                 : <p className='text-gray-600'>
//                     {userdata.adresse.line1} <br />
//                     {userdata.adresse.line2}
//                   </p>
//             }
//           </div>
//         </div>

//         <div>
//           <h5 className='text-lg font-semibold text-gray-700 underline mb-2'>Basic Information</h5>

//           <div className='flex gap-2 items-center'>
//             <p className='font-medium'>Gender:</p>
//             {
//               isEdit
//                 ? <select
//                     name="gender"
//                     id="gender"
//                     value={userdata.gender}
//                     onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
//                     className='border px-2 py-1 rounded-md'
//                   >
//                     <option value="Male">Homme</option>
//                     <option value="Female">Femme</option>
//                   </select>
//                 : <p className='text-gray-600'>{userdata.gender}</p>
//             }
//           </div>

//           <div className='flex gap-2 items-center mt-2'>
//             <p className='font-medium'>Birthday:</p>
//             {
//               isEdit
//                 ? <input
//                     type="date"
//                     value={userdata.dob}
//                     onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
//                     className='border px-2 py-1 rounded-md'
//                   />
//                 : <p className='text-gray-600'>{userdata.dob}</p>
//             }
//           </div>
//         </div>
//       </div>

//       <div className='flex justify-center mt-8'>
//         {
//           isEdit
//             ? <button
//                 className='bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition'
//                 onClick={() => setIsEdit(false)}
//               >
//                 Save Information
//               </button>
//             : <button
//                 className='bg-gray-200 text-gray-800 px-6 py-2 rounded-xl hover:bg-gray-300 transition'
//                 onClick={() => setIsEdit(true)}
//               >
//                 Edit
//               </button>
//         }
//       </div>
//     </div>
//   )
// }

// export default MyProfile







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