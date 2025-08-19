import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {login as storeLogin} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import {useDispatch} from 'react-redux'
import authService from "../appwrite/auth"
import {useForm} from 'react-hook-form'


function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const SignUpMethod = async(data) => {
        setError("")
        try {
            const session = await authService.createAccount(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(storeLogin(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div
        className='flex items-center justify-center w-full'
        >
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Create a new account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        SignIn
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(SignUpMethod)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                    label = "Full Name:"
                    placeholder = "Enter your full Name"
                    type = "text"
                    {...register("name", {
                        required: true,
                    })}
                    />
                    <Input
                    label = "Email:"
                    type="email"
                    placeholder='enter your mail'
                    {...register("email", {
                        required : true,
                        validate: {
                            matchPatern: (value) => /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/.test(value) || "NOt a valid Email address bomon-e-saur"
                        }
                    })}
                    />
                    <Input
                    label = "Password:"
                    type="password"
                    placeholder='Enter password'
                    {...register("password",{
                        required: true,
                        validate: {
                            matchPatern: (value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value) || "at least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number. Can contain special characters"
                        }
                    })}
                    />
                    <Button
                    children = "SignUp"
                    type = "submit"
                    className = "w-full"
                    />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
