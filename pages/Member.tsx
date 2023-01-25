import React from 'react'

export default function Member() {
    return (
        <section className='max-w-[900px] mx-auto'>
            <div className="flex flex-col items-center">
                <div className="intro mb-6 mx-auto items-center flex flex-col">
                    <h2 className='text-xl mb-3 font-bold'>Welcome to OgunTechies</h2>
                    <p>Please fill in every detail</p>
                </div>
                <form action="" className="flex w-10/12 flex-col">
                    <div className='flex mb-4 justify-between w-10/12 '><label htmlFor="Email" className='text-lg font-medium mr-5'>Email Address</label><input type="text" className='p-3 rounded-lg border border-slate-400 border-solid w-8/12' required id='Email' name='Email' /></div>
                    <div className='flex mb-4 justify-between w-10/12 '><label htmlFor="fname" className='text-lg font-medium mr-5'>First Name</label><input type="text" className='p-3 rounded-lg border border-slate-400 border-solid w-8/12' name='fname' id='fname' required /></div>
                    <div className='flex mb-4 justify-between w-10/12 '><label htmlFor="lname" className='text-lg font-medium mr-5'>Last Name</label><input type="text" className='p-3 rounded-lg border border-slate-400 border-solid w-8/12' name='lname' id='lname' required /></div>
                    <div className='flex mb-4 justify-between w-10/12 '><label htmlFor="phone" className='text-lg font-medium mr-5'>Phone Number</label><input type="tel" className='p-3 rounded-lg border border-slate-400 border-solid w-8/12' name='phone' id='phone' required /></div>
                    <div className='flex mb-4 justify-between w-10/12 '><label htmlFor="birthday" className='text-lg font-medium mr-5'>Birthday</label><input type="text" className='p-3 rounded-lg border border-slate-400 border-solid w-8/12' name='birthday' id='birthday' required /></div>
                    <div className='flex mb-4 justify-between w-10/12 '><label htmlFor="location" className='text-lg font-medium mr-5'>Location in Ogun state</label><input type="text" className='p-3 rounded-lg border border-slate-400 border-solid w-8/12' name='location' id='location' required /></div>
                    <div className='flex mb-4 justify-between w-10/12 '><label htmlFor="reason" className='text-lg font-medium mr-5'>Why are you joining OgunTechies?</label><input type="text" className='p-3 rounded-lg border border-slate-400 border-solid w-8/12' name='reason' id='reason' required /></div>
                    <div className='flex mb-4 justify-between w-10/12 '><label htmlFor="skill" className='text-lg font-medium mr-5'>What tech skill do you have or would like to gain?</label><input type="text" className='p-3 rounded-lg border border-slate-400 w-8/12 border-solid' name='skill' id='skill' required /></div>
                    <div className='flex mb-4 justify-between w-10/12 '><label htmlFor="instagram" className='text-lg font-medium mr-5'>What's your Instagram handle?</label><input type="text" className='p-3 rounded-lg border border-slate-400 border-solid w-8/12' name='instagram' id='instagram' required /></div>
                    <div className='flex mb-4 flex-col items-center'><button className='px-6 py-3 bg-green-300 text-white font-medium rounded-lg'>Become a member</button></div>
                </form>
            </div>
        </section>
    )
}
