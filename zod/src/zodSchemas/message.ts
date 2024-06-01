import {z} from 'zod'

export const messageValidation=z.object({
    content:z.string().min(10,"content must be at least of 10 chars").max(300)
 })