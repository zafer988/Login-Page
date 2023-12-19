import { useEffect, useState } from 'react';
import { Button, Spin } from 'antd';
import { useNavigate } from 'react-router';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 250)
    }, [])

    const loginNavigate = useNavigate();

    const handleRegisterClick = () => {
        loginNavigate('/register/');
    };
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <Spin tip='Loading...' spinning={loading} className='spin-btn'>
                <div className='auth-form-container'>

                    <h2 className='login'>Login</h2>
                    <form onSubmit={handleSubmit} className='login-form'>
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
                        <Button type='primary' onClick={handleRegisterClick} className='register-btn-ant'>
                            Don't have an account? Register here.
                        </Button>
                    </div>
                </div>
            </Spin >
        </>
    );
};
export default Login;
