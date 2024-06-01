import {z} from 'zod'

export const signInValidation=z.object({
    identifier:z.string(), //basically identifier is nothing its simly you can say username or email, but in production at signin time we call it identifier we can simply set it to username or email no problem.
    password:z.string()
})