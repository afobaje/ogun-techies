import React from 'react'
import { useForm,SubmitHandler } from 'react-hook-form'

type Inputs={
    example:string,
    exampleRequired:string;
    Email:string,
    firstname:string,
    lastname:string,
    phone:number,
    birthday:number,
    location:string,
    reason:string,
    skill:string,
    instagram:string
}
export default function Member() {

    const {register,handleSubmit,reset,formState:{errors}}=useForm<Inputs>({
        defaultValues:{}
    });

    const onSubmit:SubmitHandler<Inputs>=(data:any)=>{
        console.log(data)
        reset()
    }


    

    
    return (
        <section className='max-w-[900px] mx-auto'>
            <div className="flex flex-col items-center">
                <div className="intro mb-6 mx-auto items-center flex flex-col">
                    <h2 className='text-xl mb-3 font-bold'>Welcome to OgunTechies</h2>
                    <p>Please fill in every detail</p>
                </div>
                <form  className="flex w-10/12 flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex mb-4 justify-between w-10/12 flex-wrap md:flex-nowrap '><label htmlFor="fname" className='text-lg font-medium mr-5 mb-3 md:mb-0'>First Name</label><input type="text" className='p-3 rounded-lg border border-slate-400 border-solid w-full md:w-8/12'  id='fname' placeholder='First Name' {...register('firstname')} required /></div>
                    <div className='flex mb-4 justify-between w-10/12 flex-wrap md:flex-nowrap'><label htmlFor="lname" className='text-lg font-medium mr-5 mb-3 md:mb-0'>Last Name</label><input type="text" className='p-3 rounded-lg border border-slate-400 border-solid w-full md:w-8/12' placeholder='Last Name'  {...register('lastname')} id='lname' required /></div>
                    <div className='flex mb-4 justify-between w-10/12 flex-wrap md:flex-nowrap'><label htmlFor="Email" className='text-lg font-medium mr-5 mb-3 md:mb-0'>Email Address</label><input type="text" className='p-3 rounded-lg border border-slate-400 border-solid w-full md:w-8/12' placeholder='Email Address' {...register('Email')} required id='Email' name='Email' /></div>
                    <div className='flex mb-4 justify-between w-10/12 flex-wrap md:flex-nowrap'><label htmlFor="phone" className='text-lg font-medium mr-5 mb-3 md:mb-0'>Phone Number</label><input type="tel" className='p-3 rounded-lg border border-slate-400 border-solid w-full md:w-8/12' id='phone' placeholder='Phone number' {...register('phone')} required /></div>
                    <div className='flex mb-4 justify-between w-10/12 flex-wrap md:flex-nowrap'><label htmlFor="birthday" className='text-lg font-medium mr-5 mb-3 md:mb-0'>Birthday</label><input type="date" className='p-3 rounded-lg border border-slate-400 border-solid w-full md:w-8/12' placeholder='DOB'  {...register('birthday')} id='birthday' required /></div>
                    <div className='flex mb-4 justify-between w-10/12 flex-wrap md:flex-nowrap'><label htmlFor="location" className='text-lg font-medium mr-5 mb-3 md:mb-0'>Location in Ogun state</label><input type="text" className='p-3 rounded-lg border border-slate-400 border-solid w-full md:w-8/12' placeholder='e.g sango, lafenwa, abeokuta e.t.c'  {...register('location')} id='location' required /></div>
                    <div className='flex mb-4 justify-between w-10/12 flex-wrap md:flex-nowrap'><label htmlFor="reason" className='text-lg font-medium mr-5 mb-3 md:mb-0'>Why are you joining OgunTechies?</label><input type="text" className='p-3 rounded-lg border border-slate-400 border-solid w-full md:w-8/12'  {...register('reason')} id='reason' required /></div>
                    <div className='flex mb-4 justify-between w-10/12 flex-wrap md:flex-nowrap'><label htmlFor="skill" className='text-lg font-medium mr-5 mb-3 md:mb-0'>What tech skill do you have or would like to gain?</label><input type="text" className='p-3 rounded-lg border border-slate-400 w-full md:w-8/12 border-solid'  {...(register('skill'))} id='skill' required /></div>
                    <div className='flex mb-4 justify-between w-10/12 flex-wrap md:flex-nowrap'><label htmlFor="instagram" className='text-lg font-medium mr-5 mb-3 md:mb-0'>What's your Instagram handle?</label><input type="text" className='p-3 rounded-lg border border-slate-400 border-solid w-full md:w-8/12'  {...register('instagram')} id='instagram' required /></div>
                    <div className='flex mb-4 flex-col items-center'><button className='px-6 py-3 bg-green-400 text-white font-medium rounded-lg'>Become a member</button></div>
                </form>
            </div>
        </section>
       
       )
}