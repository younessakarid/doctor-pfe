import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [image, setImage] = useState(false);
    const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext);

    const updateUserProfileData = async () => {
        const phone = userData.phone?.trim();
        const line1 = userData.address?.line1?.trim();
        const line2 = userData.address?.line2?.trim();

        if (!phone || phone === 'Non spécifié') {
            toast.error("Veuillez saisir un numéro de téléphone valide.");
            return;
        }
        if (!line1 || !line2) {
            toast.error("Veuillez remplir les deux lignes de l'adresse.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append('name', userData.name);
            formData.append('phone', phone);
            formData.append('address', JSON.stringify({ line1, line2 }));
            formData.append('gender', userData.gender);
            formData.append('dob', userData.dob);
            if (image) formData.append('image', image);

            const { data } = await axios.post(`${backendUrl}/api/user/update-profile`, formData, {
                headers: { token },
            });

            if (data.success) {
                toast.success("Profil mis à jour avec succès !");
                await loadUserProfileData();
                setIsEdit(false);
                setImage(false);
            } else {
                toast.error("Erreur : " + data.message);
            }
        } catch (error) {
            toast.error("Erreur : " + error.message);
        }
    };

    return userData ? (
        <div className="max-w-2xl mx-auto mt-10 bg-white p-8 shadow-2xl rounded-3xl border border-gray-100 mb-10">
            <div className="flex flex-col items-center gap-5">
                <label htmlFor="image" className="relative group cursor-pointer">
                    <img
                        className="w-36 h-36 rounded-full object-cover border-2 border-[#0e384c] shadow-md transition duration-300 group-hover:scale-105"
                        src={image ? URL.createObjectURL(image) : userData.image}
                        alt="Profil"
                    />
                    {isEdit && (
                        <>
                            <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center group-hover:bg-black/60 transition">
                                <p className="text-white text-sm font-medium">Changer</p>
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
                    <h3 className="text-xs uppercase font-semibold text-gray-500 mb-3 tracking-wider">Informations de contact</h3>
                    <div className="grid grid-cols-3 items-start text-sm gap-y-4">
                        <p className="font-medium text-gray-700">Email :</p>
                        <p className="col-span-2 text-[#0e384c]">{userData.email}</p>

                        <p className="font-medium text-gray-700">Téléphone :</p>
                        {isEdit ? (
                            <input
                                type="text"
                                className="col-span-2 w-full bg-white border text-[#0e384c] border-gray-300 p-2 rounded-lg focus:outline-none focus:border-indigo-500"
                                value={userData.phone}
                                placeholder="Ex: +33 712345678"
                                onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                            />
                        ) : (
                            <p className="col-span-2 text-[#0e384c]">
                                {userData.phone?.trim()
                                    ? userData.phone
                                    : <span className="text-gray-400 italic">Entrez votre numéro</span>}
                            </p>
                        )}

                        <p className="font-medium text-gray-700">Adresse :</p>
                        {isEdit ? (
                            <div className="col-span-2 space-y-2">
                                <input
                                    type="text"
                                    className="w-full bg-white border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-indigo-500"
                                    value={userData.address.line1}
                                    placeholder="Adresse Ligne 1"
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
                                    placeholder="Adresse Ligne 2"
                                    onChange={(e) =>
                                        setUserData(prev => ({
                                            ...prev,
                                            address: { ...prev.address, line2: e.target.value },
                                        }))
                                    }
                                />
                            </div>
                        ) : (
                            <p className="col-span-2 text-gray-700">
                                {userData.address?.line1?.trim() || userData.address?.line2?.trim() ? (
                                    <>
                                        {userData.address.line1}<br />
                                        {userData.address.line2}
                                    </>
                                ) : (
                                    <span className="text-gray-400 italic">Entrez votre adresse</span>
                                )}
                            </p>
                        )}
                    </div>
                </section>

                <section>
                    <h3 className="text-xs uppercase font-semibold text-gray-500 mb-3 tracking-wider">Informations de base</h3>
                    <div className="grid grid-cols-3 items-center text-sm gap-y-4">
                        <p className="font-medium text-gray-700">Genre :</p>
                        {isEdit ? (
                            <select
                                className="col-span-2 bg-white border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-indigo-500"
                                value={userData.gender}
                                onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                            >
                                <option value="Non spécifié">Non spécifié</option>
                                <option value="Male">Homme</option>
                                <option value="Female">Femme</option>
                            </select>
                        ) : (
                            <p className="col-span-2 text-gray-700">
                                {userData.gender === "Male" ? "Homme" : userData.gender === "Female" ? "Femme" : "Non spécifié"}
                            </p>
                        )}

                        <p className="font-medium text-gray-700">Date de naissance :</p>
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
                        Sauvegarder
                    </button>
                ) : (
                    <button
                        onClick={() => setIsEdit(true)}
                        className="border border-[#0e384c] text-[#0e384c] px-6 py-2 rounded-full hover:bg-indigo-600 hover:text-white transition font-medium shadow-sm"
                    >
                        Modifier
                    </button>
                )}
            </div>
        </div>
    ) : null;
};

export default MyProfile;
