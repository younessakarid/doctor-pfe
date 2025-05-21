// backend/routes/userRoute.js

import express from 'express';
import { registerUser, loginUser, getProfile , updateProfile } from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';
import upload from '../middlewares/multer.js';

// Créer une instance de Router
const userRouter = express.Router();

// Définir la route
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

userRouter.get('/get-profile',authUser,getProfile)
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)

// Exporter le router
export default userRouter;
