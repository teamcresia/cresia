import { z } from 'zod'

export const contactValidator = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  stage: z.string().min(1),
})
