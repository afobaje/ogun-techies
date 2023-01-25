import React, { useContext } from 'react'
import { storeVault } from '../Components/storeContext'
import { usePaystackPayment } from 'react-paystack';
import Modal from '../Components/Modal';






export default function Checkout() {
    let { setTotal, total, setCart } = useContext(storeVault)
    let totalToNaira = total * 100;
    const paystackPublicKey=process.env.PAYSTACK
    // const paystackPublicKey = `pk_test_a3644451a29f162a0a8935c07dbe376382a99be1`;

    
    console.log('wtf',paystackPublicKey)
    const config:any = {
        reference: (new Date()).getTime().toString(),
        email: 'afobajedavid@gmail.com',
        amount: totalToNaira,
        publicKey: paystackPublicKey
    }

    const onSuccess = (reference: any): any => {
        console.log('success')
        if (reference.status === 'success') {
            setTotal(0)
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
            console.log(total);
        }
    };

    return (
        <section className='flex relative flex-col max-w-[900px] mx-auto'>
            <div className="flex flex-col wrapper">
                <div className='flex flex-col mx-auto'>
                    <h2 className=' mb-6 font-bold text-xl'>Shipping Address</h2>
                    <form className="flex flex-col justify-between form">
                        <div className="name flex mb-5">
                            <input type="text" className='p-3 border rounded border-slate-600 mr-6' name="" placeholder='first name' id="" />
                            <input type="text" className='p-3 border rounded border-slate-600' placeholder='last name' />
                        </div>
                        <div className='flex mb-5'>
                            <input type='email' className='p-3 border rounded w-5/12 border-slate-600' placeholder='Email address' name="" id="" />
                        </div>
                        <div className='flex mb-5'>
                            <input type="text" className='p-3 border rounded border-slate-600' placeholder='street address' name="" id="" />
                        </div>
                        <div className="flex mb-5">
                            <input type="text" className='p-3 border rounded border-slate-600 mr-6' placeholder='selct your region' name="" id="" />
                            <input type="text" className='p-3 border rounded border-slate-600' placeholder='city' name="" id="" />
                        </div>
                        <div className='flex mb-5'>
                            <input type="text" className='p-3 border rounded border-slate-600 mr-6' placeholder='zip code' name="" id="" />
                            <input type='tel' className='p-3 border rounded border-slate-600' placeholder='phone number' name="" id="" />
                        </div>
                    </form>
                    {/* <div className="payment-method p-4 flex flex-col mx-auto border border-solid border-green-400 ">
                        <h2>Payment Method</h2>
                        <form>
                            <div className='flex justify-between'>
                                <div>
                                    <input type='radio' name='card' id='card' />
                                    <label htmlFor="card">Pay with Card</label>
                                </div>
                                <div>paystack</div>
                            </div>
                            <div className='mb-5'>
                                <input placeholder='1234 5678 9010' className='p-3 rounded border-slate-600 border' type='' name='cardnumber' />
                            </div>
                            <div >
                                <input type="text" className='p-3 rounded border-slate-600 border mr-6' placeholder='Expiration date' name="expire" id="" />
                                <input type="text" className='p-3 rounded border-slate-600 border' name="cvv" placeholder='CVV' id="" />
                            </div>
                        </form>
                    </div> */}
                </div>
                <div className="payment flex mx-auto justify-between w-2/5 my-5 flex-col">
                    <h2 className='text-lg font-bold mb-5'>Cart total</h2>
                    <div className='flex justify-between mb-3'><p>Subtotal</p><p>₦ {new Intl.NumberFormat().format(total)}</p></div>
                    <div className='flex justify-between mb-3'><p>Shipping</p><p>320</p></div>
                    <div className='flex justify-between mb-3'><p>VAT</p><p>323</p></div>
                    <div className='flex justify-between mb-3'><p>Grand Total</p> <p>₦ {new Intl.NumberFormat().format(total)}</p></div>
                    <div className='w-full flex flex-col'><button onClick={handler} className='px-8 py-3 items-center rounded font-bold text-lg  bg-green-400 text-white'>Pay {new Intl.NumberFormat().format(total)}</button></div>
                </div>
            </div>
           {/* <Modal/> */}
        </section>
    )
}
