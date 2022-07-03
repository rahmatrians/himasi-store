import React from 'react'
import Star from '../../assets/own-icons/Star.svg'
import Love from '../../assets/own-icons/Love.svg'

function Card() {
    return (
        <>
            <div className="inline-block card p-4 pb-6 rounded-[30px] w-[300px] bg-base-100 shadow-xl shadow-blue-100">
                <figure className="">
                    <img src="https://placeimg.com/400/400/arch" alt="Shoes" className="rounded-2xl" />
                    <div className="absolute flex justify-between right-8 top-8">
                        <span className='bg-white rounded-full shadow-md  p-3'><img src={Love} width='24' /></span>
                    </div>
                </figure>
                <div className="mt-6 grid gap-y-2">
                    <p className="md-paragraph1 text-secColor">Blackmores Multivitamins + Minerals</p>
                    <span>
                        <p className="md-subTitle1 text-secColor">Rp17.000</p>
                        <span className='flex gap-x-2'>
                            <p className="md-label1 text-secColor opacity-[.55]"><s>Rp34.000</s></p>
                            <p className="px-2 py-1 rounded-md bg-[#FFDBE2] md-label2 text-[#F94D6B]">50%</p>
                        </span>
                    </span>
                    <span className='flex gap-x-2'>
                        <span className='flex gap-x-1'>
                            <img src={Star} width='14' />
                            <p className="md-label1 text-secColor opacity-[.55]">4.8</p>
                        </span>
                        <p className="md-label1 text-secColor opacity-[.55]">|</p>
                        <p className="lg:md-label1 text-secColor md:text-[10px] text-[6px] opacity-[.55]">Terjual 680 kali</p>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Card