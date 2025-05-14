import express from 'express'
import upload from '../middlewares/multer.js'
import { addDoctor } from '../controllers/adminController.js'

const adminRouter = express.Router()



adminRouter.post('/add-doctor',upload.single('image'), addDoctor)

export default adminRouter


// import express from 'express'
// import multer from 'multer'
// import { addDoctor } from '../controllers/adminController.js'

// const router = express.Router()

// const upload = multer({ dest: 'uploads/' })

// // ⛳️ This middleware handles the image
// router.post('/add-doctor', upload.single('img'), addDoctor)

// export default router
