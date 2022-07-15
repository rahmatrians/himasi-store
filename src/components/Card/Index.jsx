import React, { useState } from 'react'
import Star from '../../assets/own-icons/Star.svg'
import Love from '../../assets/own-icons/Love.svg'
import LoveUnchecked from '../../assets/own-icons/LoveUnchecked.svg'

import Product from '../../assets/images/Product.jpg'
import Detail from '../../Detail'
import { Link } from "react-router-dom";

function Card() {
    const [check, setCheck] = useState(0);

    return (
        <>

            < div className='inline-block'>
                <div className="card p-4 pb-6 rounded-[30px]  bg-base-100 shadow-xl shadow-blue-100">
                    <figure className="">
                        <Link to={'/Detail'}>
                            <img src={Product} alt="Shoes" className="rounded-2xl" />
                        </Link>
                        <div className="absolute md:right-8 md:top-8 right-7 top-7">
                            <span onClick={() => setCheck(check + 1)} className='btn !p-0 hover:bg-white bg-white rounded-full shadow-md grid place-content-center w-12'><img src={check % 2 != 0 ? Love : LoveUnchecked} className='w-6' /></span>
                        </div>
                    </figure>
                    <Link to={'/Detail'}>
                        <div className="mt-6 grid gap-y-2">
                            <p className="md:md-paragraph1 sm-paragraph1 text-secColor">NOIR Mechanical Keyboard 60% Special Ediition</p>
                            <span className='whitespace-nowrap'>
                                <p className="md:md-subTitle1 sm-subTitle1 text-secColor">Rp17.000</p>
                                <span className='flex gap-x-2'>
                                    <p className="md:lg-label1 sm-label1 md:py-0 py-1 text-secColor opacity-[.55]"><s>Rp34.000</s></p>
                                    <p className="px-2 py-1 rounded-md bg-[#FFDBE2] lg-label2 text-[#F94D6B]">50%</p>
                                </span>
                            </span>
                            <span className='flex md:gap-x-2 gap-x-1 mr-4 whitespace-nowrap'>
                                <img src={Star} className='w-3 lg:w-4' />
                                <p className="lg:lg-label1 md:md-label1 sm-label1 text-secColor opacity-[.55]">4.8</p>
                                <p className="lg:lg-label1 sm-label1 text-secColor opacity-[.55]">|</p>
                                <p className="lg:lg-label1 md:md-label1 sm-label1 text-secColor opacity-[.55]">Terjual 680 kali</p>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Card