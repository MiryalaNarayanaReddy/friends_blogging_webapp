
import axios from 'axios';
import { SignupType } from '@friendsblog/common';

async function HandleSignup(username: string, email: string, password: string, firstName: string, lastName: string) {
    try {
        const base_url:string = import.meta.env.VITE_API_URL;
        const response = await axios.post(`${base_url}/auth/signup`, 
        {
            username,
            email,
            password,
            firstName,
            lastName
        } as SignupType)




        if (response.data.success) {
            alert('Signup successful');
            window.location.href = '/login';
        }

    } catch (error: any) {
        console.error(error)

        // alert(error.response.data.issues[0].message)
        // show zod error

        alert(error.response.data.issues[0].message)

    }
}

export default HandleSignup;
