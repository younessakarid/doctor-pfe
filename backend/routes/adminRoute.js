import express from 'express'
import upload from '../middlewares/multer.js'
import { addDoctor,allDoctors,loginAdmin } from '../controllers/adminController.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailablity } from '../controllers/doctorController.js'

const adminRouter = express.Router()



adminRouter.post('/add-doctor',authAdmin,upload.single('image'), addDoctor)
adminRouter.post('/login',loginAdmin)
adminRouter.post('/all-doctors',authAdmin,allDoctors)
adminRouter.post('/change-availability',authAdmin,changeAvailablity)

export default adminRouter






// import express from 'express'
// import multer from 'multer'
// import { addDoctor } from '../controllers/adminController.js'

// const router = express.Router()

// const upload = multer({ dest: 'uploads/' })

// // ⛳️ This middleware handles the image
// router.post('/add-doctor', upload.single('img'), addDoctor)

// export default router
