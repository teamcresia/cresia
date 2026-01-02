import { Router } from 'express'
import { submitContact } from '../controllers/contact.controller.js'
import { validate } from '../middleware/validate.js'
import { contactValidator } from '../validators/contact.validator.js'

const router = Router()

router.post('/', validate(contactValidator), submitContact)

export default router
