import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

import { AdminContext } from '../../context/AdminContext';
import { AppContext } from '../../context/AppContext';
import upload_area from '../../assets/upload_area.svg';

function AddDoctor() {
    const [docImg, setDocImg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [experience, setExperience] = useState('1 Year')
    const [fees, setFees] = useState('')
    const [about, setAbout] = useState('')
    const [speciality, setSpeciality] = useState('General physician')
    const [degree, setDegree] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')

    const { backendUrl } = useContext(AppContext)
    const { aToken } = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {

            if (!docImg) {
                return toast.error('Image Not Selected')
            }

            const formData = new FormData();

            formData.append('image', docImg)
            formData.append('name', name)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('experience', experience)
            formData.append('fees', Number(fees))
            formData.append('about', about)
            formData.append('speciality', speciality)
            formData.append('degree', degree)
            formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

                    
            formData.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });

            const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } })
            if (data.success) {
                toast.success('khdem',data.message)
                setDocImg(false)
                setName('')
                setPassword('')
                setEmail('')
                setAddress1('')
                setAddress2('')
                setDegree('')
                setAbout('')
                setFees('')
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setDocImg(e.target.files[0]);
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className=' m-5 w-full'>
        
            <h3 className='text-[#1a3c5d] text-xl font-bold mb-3'>Ajouter un médecin</h3>
        
           <div className='bg-white px-8 py-8 border border border-gray-300 rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>

                <div className='flex items-center gap-4 mb-8 text-gray-500'>
                    <label htmlFor="doc-img">
                        <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={docImg ? URL.createObjectURL(docImg) : upload_area} alt="" />
                    </label>
                    <input onChange={handleFileChange} type="file" name="" id="doc-img" hidden />
                    <p>Télécharger la photo <br /> du médecin</p>
                </div>
        
                <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
        
                    <div className='w-full lg:flex-1 flex flex-col gap-4'>
        
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Votre nom</p>
                            <input onChange={e => setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder='Nom' required />
                        </div>
        
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Email du médecin</p>
                            <input onChange={e => setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type="email" placeholder='Email' required />
                        </div>
        
        
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Définir le mot de passe</p>
                            <input onChange={e => setPassword(e.target.value)} value={password} className='border rounded px-3 py-2' type="password" placeholder='Mot de passe' required />
                        </div>
        
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Expérience</p>
                            <select onChange={e => setExperience(e.target.value)} value={experience} className='border rounded px-2 py-2' >
                                <option value="1 Year">1 An</option>
                                <option value="2 Year">2 Ans</option>
                                <option value="3 Year">3 Ans</option>
                                <option value="4 Year">4 Ans</option>
                                <option value="5 Year">5 Ans</option>
                                <option value="6 Year">6 Ans</option>
                                <option value="8 Year">8 Ans</option>
                                <option value="9 Year">9 Ans</option>
                                <option value="10 Year">10 Ans</option>
                            </select>
                        </div>
        
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Fees</p>
                            <input onChange={e => setFees(e.target.value)} value={fees} className='border rounded px-3 py-2' type="number" placeholder='Honoraires du médecin' required />
                        </div>
        
                    </div>
        
                    <div className='w-full lg:flex-1 flex flex-col gap-4'>
        
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Spécialité</p>
                            <select onChange={e => setSpeciality(e.target.value)} value={speciality} className='border rounded px-2 py-2'>
                                <option value="General physician">Esthétique prothèse</option>
                                <option value="Gynecologist">Implantologie esthétique prothèse</option>
                                <option value="Dermatologist">Parodontologie exclusive</option>
                                <option value="Pediatricians">chirurgie dentaire</option>
                                <option value="Neurologist">Dentisterie adhésive et esthétique</option>
                            </select>
                        </div>
        
        
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Diplôme</p>
                            <input onChange={e => setDegree(e.target.value)} value={degree} className='border rounded px-3 py-2' type="text" placeholder='Diplôme' required />
                        </div>
        
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Adresse</p>
                            <input onChange={e => setAddress1(e.target.value)} value={address1} className='border rounded px-3 py-2' type="text" placeholder='Adresse 1' required />
                            <input onChange={e => setAddress2(e.target.value)} value={address2} className='border rounded px-3 py-2' type="text" placeholder='Adresse 2' required />
                        </div>
        
                    </div>
        
                </div>
        
                <div>
                    <p className='mt-4 mb-2'>À propos du médecin</p>
                    <textarea onChange={e => setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded' rows={5} placeholder='Écrivez à propos du médecin'></textarea>
                </div>
        
                <button type='submit' className='bg-[#1e84b5] text-white  font-medium py-2 px-4 rounded-full transition-all duration-300   hover:bg-[#0e384c]  hover:scale-105 mt-4'>Ajouter le médecin</button>
        
            </div>
        
        
        </form>
    )
}

export default AddDoctor