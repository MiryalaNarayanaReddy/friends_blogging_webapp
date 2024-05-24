import React from 'react'
import { useState } from 'react'
import { AuthCard, InputCard, SubmitCard } from '../../components/AuthComponents'
import HandleSignup from '../../controllers/Signup'
import { useNavigate } from 'react-router-dom';


function Signup(): React.ReactNode {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const navigate = useNavigate();

    function signup(username: string, email: string, password: string, firstName: string, lastName: string): void {
        HandleSignup(username, email, password, firstName, lastName).then((b: Boolean) => {
            if (b) {
                navigate('/')
            }
        })
    }


    return (

        <AuthCard>

            <h1 className="text-2xl font-bold text-center">Signup</h1>

            {/* already  have account go to login */}



            <div className='flex flex-row justify-center'>
                <div >Already have an account?</div>
                <a href="/login" className="text-blue-500 text-center block pl-2">Login</a>
            </div>

            {/* form */}

            <form className="mt-4">
                <InputCard label="Username" name="username" type="text" value={username} setValue={setUsername} />
                <InputCard label="Email" name="email" type="email" value={email} setValue={setEmail} />
                <InputCard label="First Name" name="firstName" type="text" value={firstName} setValue={setFirstName} />
                <InputCard label="Last Name" name="lastName" type="text" value={lastName} setValue={setLastName} />
                <InputCard label="Password" name="password" type="password" value={password} setValue={setPassword} />
                <SubmitCard title="Signup" onClick={() => signup(username, email, password, firstName, lastName)} />
            </form>

        </AuthCard>

    )
}

export default Signup;