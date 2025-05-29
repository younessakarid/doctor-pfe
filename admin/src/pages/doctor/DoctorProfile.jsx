import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const DoctorProfile = () => {

    const { dToken, profileData, setProfileData, getProfileData } = useContext(DoctorContext)
    const { currency, backendUrl } = useContext(AppContext)
    const [isEdit, setIsEdit] = useState(false)

    const updateProfile = async () => {

        try {

            const updateData = {
                address: profileData.address,
                fees: profileData.fees,
                about: profileData.about,
                available: profileData.available
            }

            const { data } = await axios.post(backendUrl + '/api/doctor/update-profile', updateData, { headers: { dToken } })

            if (data.success) {
                toast.success(data.message)
                setIsEdit(false)
                getProfileData()
            } else {
                toast.error(data.message)
            }

            setIsEdit(false)

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }

    }

    useEffect(() => {
        if (dToken) {
            getProfileData()
        }
    }, [dToken])

   
    return profileData && (
        <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">

            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Doctor Profile</h1>
                    <p className="text-gray-600">Manage your professional information and availability</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex flex-col md:flex-row gap-8 mb-8">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <img 
                                className='bg-[#1e84b5] w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg' 
                                src={profileData.image} 
                                alt="Doctor Profile" 
                            />
                            <div className="mt-3 text-center w-full">
                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                                    profileData.available 
                                        ? 'bg-green-100 text-green-800' 
                                        : 'bg-red-100 text-red-800'
                                }`}>
                                    <div className={`w-2 h-2 rounded-full ${
                                        profileData.available ? 'bg-green-500' : 'bg-red-500'
                                    }`}></div>
                                    {profileData.available ? 'Available' : 'Unavailable'}
                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-gray-800 mb-3">{profileData.name}</h2>
                            <div className="flex flex-wrap items-center gap-2 mb-4">
                                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                    {profileData.degree}
                                </span>
                                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                                    {profileData.speciality}
                                </span>
                                <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                                    {profileData.experience}
                                </span>
                            </div>

                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100 mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-500 p-2 rounded-full">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 text-sm">Consultation Fee</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl font-bold text-gray-800">{currency}</span>
                                            {isEdit ? (
                                                <input 
                                                    type='number' 
                                                    onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))} 
                                                    value={profileData.fees}
                                                    className="text-xl font-bold bg-white border border-gray-200 rounded-lg px-3 py-1 w-20 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                                />
                                            ) : (
                                                <span className="text-xl font-bold text-gray-800">{profileData.fees}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <input 
                                    type="checkbox" 
                                    onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))} 
                                    checked={profileData.available}
                                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label className="text-sm font-medium text-gray-700">Available for appointments</label>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <div className="w-1 h-6 bg-blue-500 rounded"></div>
                            About
                        </h3>
                        <div className="bg-gray-50 rounded-xl p-4">
                            {
                                isEdit
                                    ? <textarea 
                                        onChange={(e) => setProfileData(prev => ({ ...prev, about: e.target.value }))} 
                                        className='w-full bg-white border border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none' 
                                        rows={6} 
                                        value={profileData.about}
                                        placeholder="Tell patients about yourself, your experience, and your approach to healthcare..."
                                    />
                                    : <p className='text-gray-700 leading-relaxed'>{profileData.about}</p>
                            }
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <div className="w-1 h-6 bg-[#1e84b5]-500 rounded"></div>
                            Clinic Address
                        </h3>
                        <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                            <div className="flex items-start gap-3">
                                <div className="bg-purple-500 p-3 rounded-full">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="space-y-3">
                                        {isEdit ? (
                                            <>
                                                <input 
                                                    type='text' 
                                                    onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} 
                                                    value={profileData.address.line1}
                                                    placeholder="Address Line 1"
                                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                                                />
                                                <input 
                                                    type='text' 
                                                    onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} 
                                                    value={profileData.address.line2}
                                                    placeholder="Address Line 2"
                                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                                                />
                                            </>
                                        ) : (
                                            <div className="text-gray-700">
                                                <p className="font-medium">{profileData.address.line1}</p>
                                                <p>{profileData.address.line2}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-6 border-t border-gray-100">
                        {
                            isEdit ? (
                                <>
                                    <button 
                                        onClick={updateProfile} 
                                        className='flex-1 bg-[#1e84b5]  from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Save Changes
                                    </button>
                                    <button 
                                        onClick={() => setIsEdit(false)} 
                                        className='px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200'
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <button 
                                    onClick={() => setIsEdit(true)} 
                                    className='flex-1 bg-[#1e84b5]  from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Edit Profile
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorProfile
