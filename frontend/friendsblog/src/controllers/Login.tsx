
import axios from 'axios';

async function HandleLogin( email: string, password: string) {
    
    const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
    })
    // console.log(response.data)
    if (response.status === 200) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        return true;
    }

}

export default HandleLogin;