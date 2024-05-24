import React from 'react'
import { useState } from 'react'
import { AuthCard, InputCard, SubmitCard } from '../../components/AuthComponents'
import { HandleLoginwithEmail } from '../../controllers/Login';
import { HandleLoginwithUsername } from '../../controllers/Login';
import { useNavigate } from 'react-router-dom';

function Login(): React.ReactNode {

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [selectEmail, setSelectEmail] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    function emailLogin(email: string, password: string): void {
        HandleLoginwithEmail(email, password).then((b: Boolean) => {
            if (b) {
                navigate('/blogs/public')
            }
        })
    }

    function usernameLogin(username: string, password: string): void {
        HandleLoginwithUsername(username, password).then((b: Boolean) => {
            if (b) {
                navigate('/blogs/public')
            }
        })
    }

    return (
        <AuthCard>
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <div className='flex flex-row justify-center'>
                <div >Don't have an account? Create one.  </div>
                {/* <a href="/login" className="text-blue-500 text-center block pl-2">Login</a> */}
                <a href="/signup" className="text-blue-500 text-center block pl-2">Signup</a>
            </div>

            <div className="flex flex-row justify-left ml-4">

                <div className="pr-2">Login with Email </div>
                <input type="checkbox" value={selectEmail ? "checked" : ""} onChange={() => setSelectEmail(!selectEmail)} />
            </div>

            <form className="mt-4">

                {
                    selectEmail ?
                        <InputCard label="Email" name="email" type="email" value={email} setValue={setEmail} />
                        :
                        <InputCard label="Username" name="username" type="text" value={username} setValue={setUsername} />
                }

                <InputCard label="Password" name="password" type="password" value={password} setValue={setPassword} />
                <SubmitCard title="Login" onClick={() => selectEmail ? emailLogin(email, password) : usernameLogin(username, password)} />

            </form>
        </AuthCard>
    )

}

export default Login;