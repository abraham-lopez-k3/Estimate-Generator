'use client'

import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { customerFormProps } from '../../types/formTypes'
import { Button } from '../ui/button'
import { CustomerForm } from '@/types/customers'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/navigation'
import { addCustomer } from '@/actions/customerActions'
import { generatePassword } from '@/utils/generateRandom'

const CustomerForm = (data: CustomerForm) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<customerFormProps>()

  const router = useRouter()

  const onSubmit: SubmitHandler<customerFormProps> = async (formData) => {
    if(data.data != null) {
        const res = await fetch(`${process.env["NEXT_PUBLIC_CUSTOMERS_EDIT_URL"]}/${data.data.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        router.push(`${process.env["NEXT_PUBLIC_CUSTOMERS_URL"]}`)
        router.refresh()
    } else {
        
        router.push(`${process.env["NEXT_PUBLIC_CUSTOMERS_URL"]}`)
        router.refresh()
    }
  }

  useEffect(() =>{
      if(data.data != null) {
        setValue('name', data.data.name as string)
        setValue('address', data.data.address as string)
        setValue('email', data.data.email as string)
        setValue('phone', data.data.phone as string)
      }
  }, [])


  return (
    <form
        className=''
        onSubmit={handleSubmit(onSubmit)}
    >
        <div>
            <label>name</label>
            <input
                {...register("name")}
            ></input>
        </div>
        <div>
            <label>address</label>
            <input
                {...register("address")}
            ></input>
        </div>
        <div>
            <label>email</label>
            <input
                {...register("email")}
            ></input>
        </div>
        <div>
            <label>phone</label>
            <input
                {...register("phone")}
            ></input>
        </div>
        <Button
             className=''
        >
            Submit
        </Button>
    </form>
  )
}

export default CustomerForm