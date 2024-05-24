
import axios from 'axios';
import { SignupType } from '@friendsblog/common';
import dotenv from 'dotenv';

dotenv.config();

async function HandleSignup(username: string, email: string, password: string, firstName: string, lastName: string) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
            username,
            email,
            password,
            firstName,
            lastName
        } as SignupType
        )




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