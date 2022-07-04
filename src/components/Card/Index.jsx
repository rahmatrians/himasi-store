import React from 'react'
import Star from '../../assets/own-icons/Star.svg'
import Love from '../../assets/own-icons/Love.svg'

function Card() {
    return (
        <>
            <a href='#' className='inline-block'>
                <div className="card p-4 pb-6 rounded-[30px]  bg-base-100 shadow-xl shadow-blue-100">
                    <figure className="">
                        <img src="https://placeimg.com/400/400/arch" alt="Shoes" className="rounded-2xl" />
                        <div className="absolute md:right-8 md:top-8 right-7 top-7">
                            <span className='bg-white rounded-full shadow-md grid place-content-center w-7 md:w-12 h-7 md:h-12'><img src={Love} className='w-4 md:w-6' /></span>
                        </div>
                    </figure>
                    <div className="mt-6 grid gap-y-2">
                        <p className="md:md-paragraph1 sm-paragraph1 text-secColor">Blackmores Multivitamins + Minerals</p>
                        <span>
                            <p className="md:md-subTitle1 sm-subTitle1 text-secColor">Rp17.000</p>
                            <span className='flex gap-x-2'>
                                <p className="md:lg-label1 sm-label1 md:py-0 py-1 text-secColor opacity-[.55]"><s>Rp34.000</s></p>
                                <p className="px-2 py-1 rounded-md bg-[#FFDBE2] lg-label2 text-[#F94D6B]">50%</p>
                            </span>
                        </span>
                        <span className='flex md:gap-x-2 gap-x-1'>
                            <span className='flex gap-x-1'>
                                <img src={Star} className='w-3 lg:w-4' />
                                <p className="lg:lg-label1 md:md-label1 sm-label1 text-secColor opacity-[.55]">4.8</p>
                            </span>
                            <p className="lg:lg-label1 md:md-label1 sm-label1 text-secColor opacity-[.55]">|</p>
                            <p className="lg:lg-label1 md:md-label1 sm-label1 text-secColor opacity-[.55]">Terjual 680 kali</p>
                        </span>
                    </div>
                </div>
            </a>
        </>
    )
}

export default Card