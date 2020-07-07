import { Router } from 'express';
const router = Router();

import { addEmployee } from '../controllers/employee'

router
  .route('/employee')
  .post(addEmployee)


export default router;
