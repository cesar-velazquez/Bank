import express  from 'express';
import {router as userRoute} from '../modules/users/users.routes.js';
import {router as TransferRouter} from '../modules/transfers/transfers.routes.js'
export const router = express.Router();

router.use('/users', userRoute)
router.use('/transfers', TransferRouter)