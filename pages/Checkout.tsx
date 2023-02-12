import React, { useContext, useState } from 'react'
import { storeVault } from '../Components/storeContext'
import { usePaystackPayment } from 'react-paystack';
import Modal from '../Components/Modal';
import { useForm } from 'react-hook-form';


export default function Checkout() {
    let { register, reset, handleSubmit } = useForm()
    let { setTotal, total, setCart } = useContext(storeVault)
    let [display, setDisplay] = useState(false);
    let totalToNaira = total * 100;
    const paystackPublicKey = process.env.PAYSTACK;
    const [form, setForm] = useState<any>(null)
    const [activate, setActivate] = useState(true)

    const onSubmit = (data: any) => {
        setForm(data)
        setActivate(false)
        reset()
    }
   
    const config: any = {
        reference: (new Date()).getTime().toString(),
        email: form?.email,
        amount: totalToNaira,
        publicKey: paystackPublicKey
    }

    const onSuccess = (reference: any): any => {
        if (reference.status === 'success') {
            setTotal(0)
            setDisplay(true)
            setCart([])
        }
    }

    const onClose = () => {
        console.log('closed')
    }

    const initializePayment: any = usePaystackPayment(config)

    const handler = () => {
        if (total == 0) {
            return;
        } else if (total > 0) {
            initializePayment(onSuccess, onClose);
        }
    };

    return (
        <section className='flex relative flex-col lg:my-8 w-11/12 lg:w-full max-w-[1200px] mx-auto'>
            <div className="flex flex-col justify-between lg:flex-row wrapper">
                <div className='flex flex-col lg:w-3/6  mx-auto'>
                    <h2 className=' mb-6 font-bold text-xl'>Shipping Address</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between form">
                        <div className="name flex mb-5">
                            <input type="text" className='p-3 outline-black border rounded w-1/2 border-slate-600 mr-6' {...register('firstname')} placeholder='First name' id="" />
                            <input type="text" className='p-3 outline-black border rounded w-1/2 border-slate-600' {...register('lastname')} placeholder='Last name' />
                        </div>
                        <div className='flex mb-5'>
                            <input type='email' className='p-3 outline-black border rounded w-full border-slate-600' {...register('email')} placeholder='Email address' id="" />
                        </div>
                        <div className='flex mb-5'>
                            <textarea className='p-3 resize-none border rounded border-slate-600 w-full outline-black' {...register('street')} placeholder='street address' id="" rows={5}></textarea>
                        </div>
                        <div className="flex  mb-5">
                            <input type="text" className='p-3 outline-black border rounded w-1/2 border-slate-600 mr-6' {...register('region')} placeholder='select your region' id="" />
                            <input type="text" className='p-3 outline-black border rounded w-1/2 border-slate-600' {...register('city')} placeholder='city' id="" />
                        </div>
                        <div className='flex  mb-5'>
                            <input type="text" className='p-3 outline-black border rounded w-1/2 border-slate-600 mr-6' {...register('zip')} placeholder='zip code' />
                            <input type='tel' className='p-3 outline-black border rounded w-1/2 border-slate-600' {...register('phone')} placeholder='phone number' />
                        </div>
                        <div className='flex justify-center mb-5'>
                            <button className='bg-green-400 px-16 py-3 w-full rounded-lg text-white font-bold '>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="payment flex mx-auto justify-between lg:justify-evenly  lg:h-4/6 w-4/6 lg:w-2/6 my-5 flex-col">
                    <h2 className='text-lg font-bold mb-5'>Cart total</h2>
                    <div className='flex justify-between mb-3'><p>Subtotal</p><p>₦ {new Intl.NumberFormat().format(total)}</p></div>
                    <div className='flex justify-between mb-3'><p>Shipping</p><p>0.00</p></div>
                    <div className='flex justify-between mb-3'><p>VAT</p><p>0.00</p></div>
                    <div className='flex justify-between mb-3'><p>Grand Total</p> <p>₦ {new Intl.NumberFormat().format(total)}</p></div>
                    <div className='w-full flex flex-col'><button onClick={handler} disabled={activate} className={`px-8 py-3 items-center rounded font-bold text-lg ${activate ? 'bg-green-200' : 'bg-green-400'} text-white`}>Pay {new Intl.NumberFormat().format(total)}</button></div>
                </div>
            </div>
            <Modal display={display} />
        </section>
    )
}
