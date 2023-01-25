import Link from 'next/link';
import React, { useContext } from 'react'
import CartItems from '../Components/CartItems';
import { storeVault } from '../Components/storeContext';


export default function Cart() {
    let { cart, setCart, total, setTotal } = useContext(storeVault)

    function Delete(id: any) {
        setCart(cart.filter((val: any) => val.id != id))
    }
    let add: any = [];

    cart.map(({ price, qty }: any) => {
        add.push(Number(price * qty))
    })

    setTotal(add.reduce((a: any, b: any) => a + b, 0));





    return (
        <section className="flex max-w-[900px] md:max-w-full flex-col mx-auto">
            <div className="flex cart-wrapper md:flex-row md:w-11/12 md:mx-auto items-center md:justify-between md:items-start flex-col">
                <div className="flex flex-col md:w-6/12 ">
                    {
                        cart.map(({ ProductName, price, shirt, qty, id }: any, i: any) => <CartItems key={i} del={Delete} id={id} productName={ProductName} quantity={qty} img={shirt} productPrice={price} />)
                    }
                </div>
                <div className="total flex flex-col">
                    <h2 className='font-semibold text-lg mb-5 '>Cart total</h2>
                    <div >
                        <div className='flex justify-between mb-3'><p className='font-semibold'>Subtotal</p><p>₦ {new Intl.NumberFormat().format(total)}</p></div>
                        <div className='mb-3'><input type="checkbox" name="shipping" id="" className='mr-2' /><label htmlFor="shipping">Shipping & taxes are calculated at checkout</label></div>
                        <div className='mb-3'>
                            <div className='flex justify-between mb-3'><p className='font-bold'>Grand Total</p> <p className='font-bold'>₦ {new Intl.NumberFormat().format(total)}</p></div>
                            <div className='md:w-full'>
                                <Link href='/Checkout' className='bg-green-400 w-full mt-3 items-center flex-col flex px-10 py-3 rounded-lg text-white text-center'>
                                    Proceed to Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
