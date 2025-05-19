// backend/routes/userRoute.js

import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';

// Créer une instance de Router
const userRouter = express.Router();

// Définir la route
userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

// Exporter le router
export default userRouter;
