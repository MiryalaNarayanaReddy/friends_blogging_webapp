import React from 'react'
import { useState } from 'react'
import { AuthCard, InputCard, SubmitCard } from '../../components/AuthComponents'
import HandleLogin from '../../controllers/Login';


function Login(): React.ReactNode {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (

        <AuthCard>
            <h1 className="text-2xl font-bold text-center">Login</h1>

            <div className='flex flex-row justify-center'>
                <div >Don't have an account? Create one.  </div>
                {/* <a href="/login" className="text-blue-500 text-center block pl-2">Login</a> */}
                <a href="/signup" className="text-blue-500 text-center block pl-2">Signup</a>
            </div>

            <form className="mt-4">
                <InputCard label="Email" name="email" type="email" value={email} setValue={setEmail} />
                <InputCard label="Password" name="password" type="password" value={password} setValue={setPassword} />
                <SubmitCard title="Login" onClick={() => HandleLogin(email, password)} />
            </form>
        </AuthCard>
    )
}

export default Login;