import validator from 'validator'
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import _default from "validator"
import jwt from 'jsonwebtoken'
import appointmentModel from '../models/appointmentModel.js'


// API for adding doctor
const addDoctor = async (req,res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const imageFile = req.file

        

        // console.log({ name, email, password, speciality, degree, experience, about, fees, address } ,imageFile)
        
        // // checking for all data to add doctor
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({success:false,message:"Détails manquants"})
        }
        // // validating email format
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Merci de saisir une adresse e-mail valide"})
        }

        // // validating password strong
        if (password.length < 8) {
             return res.json({success:false,message:"Veuillez entrer un mot de passe fort."})
        }

        // // hashing doctor password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)


        // // // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageUrl = imageUpload.secure_url


       

        const doctorData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }

            const newDoctor = new doctorModel(doctorData)
            await newDoctor.save()

            res.json({success:true,message:"Docteur ajouté"})



    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}


// api for admin login 
const loginAdmin = async (req,res) => {
    try {

        const {email,password} = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

                const token = jwt.sign(email+password,process.env.JWT_SECRET)
                res.json({success:true,token})

            
        }else {
            res.json({success:false,message:"Identifiants invalides"})
        }
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}




// API to get all doctors list for admin panel
const allDoctors = async (req, res) => {
    try {

        const doctors = await doctorModel.find({}).select('-password')
        res.json({ success: true, doctors })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


// api to get all appointements list :
const appointmentsAdmin = async (req,res) => {
    try {
        const appointments = await appointmentModel.find({})
        res.json({success:true,appointments})
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


// API for appointment cancellation
const appointmentCancel = async (req, res) => {
    try {

        const { appointmentId } = req.body
        await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })

        res.json({ success: true, message: 'Rendez-vous annulé' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

export {addDoctor,loginAdmin,allDoctors,appointmentsAdmin,appointmentCancel}