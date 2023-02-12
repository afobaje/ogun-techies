import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { storeVault } from './storeContext'


export default function CartItems({ del, img, id, productName, productPrice, quantity }: any) {
    let { cart, setCart } = useContext(storeVault);
    let [disabled, setDisabled] = useState(false)


    let addHandler = () => {
        setDisabled(false)
        let newQty = quantity + 1
        let newCart = cart.map((key: any) => {
            if (key.id == id) {
                return {
                    ...key,
                    qty: newQty
                }
            } else {
                return key
            }
        })
        setCart(newCart)
    }

    let subHandler = () => {
        let newQty: number = quantity - 1;
        if (newQty < 2) {
            setDisabled(true)
        }
        let newCart = cart.map((key: any) => {
            if (key.id == id) {
                return {
                    ...key,
                    qty: newQty
                }
            } else {
                return key
            }
        })
        setCart(newCart)
    }





    return (
        <div className="flex items my-5 p-5 md:w-full shadow">
            <div className='w-1/2 md:w-1/3 mr-4'>
                <Image src={img} alt='cart items' className='cart w-full h-full object-cover object-center items' />
            </div>
            <div className='w-1/2 md:w-2/3 px-5'>
                <div className='md:flex md:justify-between'>
                    <p className='font-semibold mb-3'>{productName}</p>
                    <div className='md:flex md:items-center'>
                        <p className='font-medium mb-3 md:mb-0'>₦ {new Intl.NumberFormat().format(productPrice || 0)}</p>
                        <button onClick={() => del(id)} className='hidden md:block md:ml-4'>
                            <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.28571 3.42857H11.5714C11.5714 2.86025 11.3457 2.31521 10.9438 1.91334C10.5419 1.51148 9.99689 1.28571 9.42857 1.28571C8.86025 1.28571 8.31521 1.51148 7.91334 1.91334C7.51148 2.31521 7.28571 2.86025 7.28571 3.42857ZM6 3.42857C6 2.51926 6.36122 1.64719 7.00421 1.00421C7.64719 0.361224 8.51926 0 9.42857 0C10.3379 0 11.21 0.361224 11.8529 1.00421C12.4959 1.64719 12.8571 2.51926 12.8571 3.42857H18.2143C18.3848 3.42857 18.5483 3.4963 18.6689 3.61686C18.7894 3.73742 18.8571 3.90093 18.8571 4.07143C18.8571 4.24192 18.7894 4.40544 18.6689 4.526C18.5483 4.64656 18.3848 4.71429 18.2143 4.71429H17.0914L16.0483 17.2311C15.9724 18.1417 15.5571 18.9905 14.8847 19.6092C14.2123 20.2279 13.332 20.5714 12.4183 20.5714H6.43886C5.52514 20.5714 4.6448 20.2279 3.97243 19.6092C3.30006 18.9905 2.88475 18.1417 2.80886 17.2311L1.76571 4.71429H0.642857C0.472361 4.71429 0.308848 4.64656 0.188288 4.526C0.0677293 4.40544 0 4.24192 0 4.07143C0 3.90093 0.0677293 3.73742 0.188288 3.61686C0.308848 3.4963 0.472361 3.42857 0.642857 3.42857H6ZM4.09029 17.124C4.13931 17.7132 4.40796 18.2625 4.84298 18.6629C5.278 19.0633 5.84761 19.2856 6.43886 19.2857H12.4183C13.0095 19.2856 13.5791 19.0633 14.0142 18.6629C14.4492 18.2625 14.7178 17.7132 14.7669 17.124L15.8023 4.71429H3.05571L4.09029 17.124ZM7.5 7.71429C7.6705 7.71429 7.83401 7.78202 7.95457 7.90257C8.07513 8.02313 8.14286 8.18665 8.14286 8.35714V15.6429C8.14286 15.8134 8.07513 15.9769 7.95457 16.0974C7.83401 16.218 7.6705 16.2857 7.5 16.2857C7.3295 16.2857 7.16599 16.218 7.04543 16.0974C6.92487 15.9769 6.85714 15.8134 6.85714 15.6429V8.35714C6.85714 8.18665 6.92487 8.02313 7.04543 7.90257C7.16599 7.78202 7.3295 7.71429 7.5 7.71429ZM12 8.35714C12 8.18665 11.9323 8.02313 11.8117 7.90257C11.6912 7.78202 11.5276 7.71429 11.3571 7.71429C11.1866 7.71429 11.0231 7.78202 10.9026 7.90257C10.782 8.02313 10.7143 8.18665 10.7143 8.35714V15.6429C10.7143 15.8134 10.782 15.9769 10.9026 16.0974C11.0231 16.218 11.1866 16.2857 11.3571 16.2857C11.5276 16.2857 11.6912 16.218 11.8117 16.0974C11.9323 15.9769 12 15.8134 12 15.6429V8.35714Z" fill="#212429" />
                            </svg>
                        </button>
                    </div>
                </div>
                <span className='mb-3 flex'><p className='font-semibold mr-4'>Color:</p><p>Green</p></span>
                <span className='mb-3 flex'><p className='font-semibold mr-4'>Size:</p><p>XS</p></span>
                <span className='mb-3 flex'><p className='font-semibold mr-4'>Quantity:</p><p>{quantity}</p></span>
                <div className='flex justify-between'>
                    <div className="buttongroup w-3/6 justify-between p-2 flex border border-solid border-green-300 rounded-lg">
                        <button disabled={disabled} onClick={subHandler} className='text-green-300'>-</button>
                        <p className='text-green-300'>{quantity}</p>
                        <button onClick={addHandler} className='text-green-300'>+</button>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={() => del(id)}>
                            <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.28571 3.42857H11.5714C11.5714 2.86025 11.3457 2.31521 10.9438 1.91334C10.5419 1.51148 9.99689 1.28571 9.42857 1.28571C8.86025 1.28571 8.31521 1.51148 7.91334 1.91334C7.51148 2.31521 7.28571 2.86025 7.28571 3.42857ZM6 3.42857C6 2.51926 6.36122 1.64719 7.00421 1.00421C7.64719 0.361224 8.51926 0 9.42857 0C10.3379 0 11.21 0.361224 11.8529 1.00421C12.4959 1.64719 12.8571 2.51926 12.8571 3.42857H18.2143C18.3848 3.42857 18.5483 3.4963 18.6689 3.61686C18.7894 3.73742 18.8571 3.90093 18.8571 4.07143C18.8571 4.24192 18.7894 4.40544 18.6689 4.526C18.5483 4.64656 18.3848 4.71429 18.2143 4.71429H17.0914L16.0483 17.2311C15.9724 18.1417 15.5571 18.9905 14.8847 19.6092C14.2123 20.2279 13.332 20.5714 12.4183 20.5714H6.43886C5.52514 20.5714 4.6448 20.2279 3.97243 19.6092C3.30006 18.9905 2.88475 18.1417 2.80886 17.2311L1.76571 4.71429H0.642857C0.472361 4.71429 0.308848 4.64656 0.188288 4.526C0.0677293 4.40544 0 4.24192 0 4.07143C0 3.90093 0.0677293 3.73742 0.188288 3.61686C0.308848 3.4963 0.472361 3.42857 0.642857 3.42857H6ZM4.09029 17.124C4.13931 17.7132 4.40796 18.2625 4.84298 18.6629C5.278 19.0633 5.84761 19.2856 6.43886 19.2857H12.4183C13.0095 19.2856 13.5791 19.0633 14.0142 18.6629C14.4492 18.2625 14.7178 17.7132 14.7669 17.124L15.8023 4.71429H3.05571L4.09029 17.124ZM7.5 7.71429C7.6705 7.71429 7.83401 7.78202 7.95457 7.90257C8.07513 8.02313 8.14286 8.18665 8.14286 8.35714V15.6429C8.14286 15.8134 8.07513 15.9769 7.95457 16.0974C7.83401 16.218 7.6705 16.2857 7.5 16.2857C7.3295 16.2857 7.16599 16.218 7.04543 16.0974C6.92487 15.9769 6.85714 15.8134 6.85714 15.6429V8.35714C6.85714 8.18665 6.92487 8.02313 7.04543 7.90257C7.16599 7.78202 7.3295 7.71429 7.5 7.71429ZM12 8.35714C12 8.18665 11.9323 8.02313 11.8117 7.90257C11.6912 7.78202 11.5276 7.71429 11.3571 7.71429C11.1866 7.71429 11.0231 7.78202 10.9026 7.90257C10.782 8.02313 10.7143 8.18665 10.7143 8.35714V15.6429C10.7143 15.8134 10.782 15.9769 10.9026 16.0974C11.0231 16.218 11.1866 16.2857 11.3571 16.2857C11.5276 16.2857 11.6912 16.218 11.8117 16.0974C11.9323 15.9769 12 15.8134 12 15.6429V8.35714Z" fill="#212429" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}