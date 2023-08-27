'use client'

import React from 'react'
import Button from '../buttonComponents/Button'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const LoginForm = () => {

  

  return (
    <form className='bg-primary50 m-8 p-4 rounded w-4/5 tablet:w-3/5 desktop:w-1/2 max-w-xl'>
        <h1 className='text-[32px] font-bold font-sans text-secondary500 text-center'>Welcome Back</h1>
        <p className='text-base text-normal text-secondary500 text-center font-sans'>Please log in to continue</p>
        <div className='my-2'>
            <label className=''>Email Address</label>
            <input className='w-full'></input>
        </div>
        <div className='my-2'>
            <label className=''>Password</label>
            <div className=''>
                <input className='w-full'></input>
                <div className=''>
                    {}
                </div>
            </div>
        </div>
        <div className='flex justify-between my-2'>
            <div className='flex gap-2'>
                <input className='' type='checkbox'></input>
                <label className=''>Remember me</label>
            </div>
            <Button
                className=''
            >
                Forgot Password?
            </Button>
        </div>
        <Button                          
            className='w-full bg-primary500 text-primary100 py-2 font-sans'
        >
            Log In
        </Button>
        <div id='divider' className='w-full border border-secondary300 my-4'></div>
        <p className='text-base font-normal text-secondary500 text-center m-2 font-sans'>Or log in with:</p>
        <div className='flex flex-col gap-2 tablet:flex-row justify-evenly'>
            <Button
                className='border-2 border-primary500 text-primary500 text-base font-sans font-medium flex-grow'
            >
                Google
            </Button>
            <Button
                className='border-2 border-primary500 text-primary500 text-base font-sans font-medium flex-grow'
            >
                Facebook
            </Button>
            <Button
                className='border-2 border-primary500 text-primary500 text-base font-sans font-medium flex-grow'
            >
                Twitter
            </Button>
        </div>
        <div id='divider2' className='w-full border border-secondary300 my-4'></div>
        <div className='flex justify-center'>
            <p className='text-[14px] text-secondary500 font-normal font-sans'>No account yet?</p>
            <Button
                className='text-[14px] font-sans font-normal text-secondary500'
            >
                Sign Up
            </Button>
        </div>
    </form>
  )
}

export default LoginForm