import React, { useState, useContext } from 'react';
// Note: This component requires toast from 'react-toastify' and axios for API calls
// These would need to be available in your actual implementation

import { AdminContext } from '../../context/AdminContext';
import { AppContext } from '../../context/AppContext';
import { MdCloudUpload, MdPerson, MdEmail, MdLock, MdWork, MdAttachMoney, MdSchool, MdLocationOn, MdDescription, MdPersonAdd } from 'react-icons/md';

function AddDoctor() {
    const [docImg, setDocImg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [experience, setExperience] = useState('1 Year')
    const [fees, setFees] = useState('')
    const [about, setAbout] = useState('')
    const [speciality, setSpeciality] = useState('Esthétique prothèse')
    const [degree, setDegree] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')

    const { backendUrl } = useContext(AppContext)
    const { aToken } = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            if (!docImg) {
                // return toast.error('Image Non sélectionné')
                alert('Image Non sélectionné');
                return;
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

            // Note: Replace with your actual API call
            // const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } })
            
            // Simulated API response for demo
            const simulatedResponse = { success: true, message: 'Médecin ajouté avec succès' };
            
            if (simulatedResponse.success) {
                // toast.success('Doctor ajouter', simulatedResponse.message)
                alert('Médecin ajouté avec succès!');
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
                // toast.error(simulatedResponse.message)
                alert('Erreur lors de l\'ajout');
            }

        } catch (error) {
            // toast.error(error.message)
            alert('Erreur: ' + error.message);
            console.log(error)
        }
    }

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setDocImg(e.target.files[0]);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg">
                            <MdPersonAdd className="text-white text-2xl" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Ajouter un Médecin</h1>
                            <p className="text-gray-600">Créez un nouveau profil médecin dans le système</p>
                        </div>
                    </div>
                </div>

                <div onSubmit={onSubmitHandler} className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                        <h2 className="text-xl font-semibold text-white">Informations du Médecin</h2>
                        <p className="text-blue-100 text-sm mt-1">Remplissez tous les champs requis pour ajouter un nouveau médecin</p>
                    </div>

                    <div className="p-8">
                        {/* Image Upload Section */}
                        <div className="mb-8">
                            <label htmlFor="doc-img" className="block">
                                <div className="relative group cursor-pointer">
                                    <div className="flex items-center gap-6 p-6 border-2 border-dashed border-gray-300 rounded-2xl hover:border-blue-400 transition-all duration-300 hover:bg-blue-50">
                                        <div className="relative">
                                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center overflow-hidden border-2 border-gray-200">
                                                {docImg ? (
                                                    <img 
                                                        src={URL.createObjectURL(docImg)} 
                                                        alt="Preview" 
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <MdCloudUpload className="text-gray-400 text-3xl" />
                                                )}
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                                                <MdCloudUpload className="text-white text-sm" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Photo du Médecin</h3>
                                            <p className="text-sm text-gray-600 mb-2">Cliquez pour télécharger une image</p>
                                            <p className="text-xs text-gray-500">PNG, JPG ou JPEG (max. 5MB)</p>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <input 
                                onChange={handleFileChange} 
                                type="file" 
                                id="doc-img" 
                                hidden 
                                accept="image/*"
                            />
                        </div>

                        {/* Form Fields */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div className="space-y-6">
                                {/* Name Field */}
                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        <MdPerson className="inline mr-2 text-blue-600" />
                                        Nom du Médecin
                                    </label>
                                    <input
                                        onChange={e => setName(e.target.value)}
                                        value={name}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                                        type="text"
                                        placeholder="Entrez le nom complet"
                                        required
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        <MdEmail className="inline mr-2 text-blue-600" />
                                        Adresse Email
                                    </label>
                                    <input
                                        onChange={e => setEmail(e.target.value)}
                                        value={email}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                                        type="email"
                                        placeholder="exemple@email.com"
                                        required
                                    />
                                </div>

                                {/* Password Field */}
                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        <MdLock className="inline mr-2 text-blue-600" />
                                        Mot de Passe
                                    </label>
                                    <input
                                        onChange={e => setPassword(e.target.value)}
                                        value={password}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                                        type="password"
                                        placeholder="Créer un mot de passe sécurisé"
                                        required
                                    />
                                </div>

                                {/* Experience Field */}
                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        <MdWork className="inline mr-2 text-blue-600" />
                                        Années d'Expérience
                                    </label>
                                    <select
                                        onChange={e => setExperience(e.target.value)}
                                        value={experience}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400 bg-white"
                                    >
                                        {Array.from({ length: 25 }, (_, i) => i + 1).map(year => (
                                            <option key={year} value={`${year} Year`}>
                                                {year} {year === 1 ? 'An' : 'Ans'}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Fees Field */}
                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        <MdAttachMoney className="inline mr-2 text-blue-600" />
                                        Honoraires (€)
                                    </label>
                                    <input
                                        onChange={e => setFees(e.target.value)}
                                        value={fees}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                                        type="number"
                                        placeholder="0"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6">
                                {/* Speciality Field */}
                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        <MdSchool className="inline mr-2 text-blue-600" />
                                        Spécialité Médicale
                                    </label>
                                    <select
                                        onChange={e => setSpeciality(e.target.value)}
                                        value={speciality}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400 bg-white"
                                    >
                                        <option value="Esthétique prothèse">Esthétique prothèse</option>
                                        <option value="Implantologie esthétique prothèse">Implantologie esthétique prothèse</option>
                                        <option value="Parodontologie exclusive">Parodontologie exclusive</option>
                                        <option value="chirurgie dentaire">Chirurgie dentaire</option>
                                        <option value="Dentisterie adhésive et esthétique">Dentisterie adhésive et esthétique</option>
                                    </select>
                                </div>

                                {/* Degree Field */}
                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        <MdSchool className="inline mr-2 text-blue-600" />
                                        Diplôme
                                    </label>
                                    <input
                                        onChange={e => setDegree(e.target.value)}
                                        value={degree}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                                        type="text"
                                        placeholder="Titre du diplôme"
                                        required
                                    />
                                </div>

                                {/* Address Fields */}
                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        <MdLocationOn className="inline mr-2 text-blue-600" />
                                        Adresse du Cabinet
                                    </label>
                                    <div className="space-y-3">
                                        <input
                                            onChange={e => setAddress1(e.target.value)}
                                            value={address1}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                                            type="text"
                                            placeholder="Ligne d'adresse 1"
                                            required
                                        />
                                        <input
                                            onChange={e => setAddress2(e.target.value)}
                                            value={address2}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                                            type="text"
                                            placeholder="Ligne d'adresse 2"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Section */}
                        <div className="mt-8">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                <MdDescription className="inline mr-2 text-blue-600" />
                                À Propos du Médecin
                            </label>
                            <textarea
                                onChange={e => setAbout(e.target.value)}
                                value={about}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400 resize-none"
                                rows={4}
                                placeholder="Décrivez l'expérience, les compétences et la philosophie du médecin..."
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                            >
                                <span className="flex items-center gap-2">
                                    <MdPersonAdd className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                                    Ajouter le Médecin
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDoctor