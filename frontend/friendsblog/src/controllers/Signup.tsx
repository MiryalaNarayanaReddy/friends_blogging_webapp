
import axios from 'axios';

async function HandleSignup ( email: string, password: string, firstName: string, lastName: string) {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/signup', {
            email,
            password,
            firstName,
            lastName
        })

        if (response.status === 200) {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user', JSON.stringify(response.data.user))
            return true;
        }
    } catch (error) {
        console.error(error)
    }
}

export default HandleSignup;