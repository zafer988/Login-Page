import { useState } from 'react';
import { Button } from 'antd'
import { useNavigate } from 'react-router'
const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState()




    const registerNavigate = useNavigate()


    const handleLoginClick = () => {
        registerNavigate('/')
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email);
    }



    return (
        <>
            <div className='auth-form-container'>
                <h2 className='register'>Sign Up</h2>


                <form onSubmit={handleSubmit} className='register-form'>
                    <div>
                        <label htmlFor="">Full Name</label>
                        <input type="text" value={name} name='name' id='id' placeholder='Full Name' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">E-mail</label>
                        <input type="email" id='email' name='email' placeholder='Your E-mail.com' onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" id='password' name='password' placeholder='*******' onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>

                    <div>
                        <button type='submit' className='login-btn'>Login In</button>
                    </div>


                </form>


                <div>
                    <Button type='primary' onClick={handleLoginClick} className='login-btn-ant'>
                        Already have an account? Login here.
                    </Button>
                </div>
            </div>
        </>


    )
}

export default Register