import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import Header from './components/Header/Index'

import Product from './assets/images/Product.jpg'
import Image from './assets/iconly/Image.svg'
import Notification from './assets/iconly/Notification.svg'
import Trolly from './assets/iconly/Trolly.svg'
import Wallet from './assets/iconly/Wallet.svg'
import TrollySec from './assets/own-icons/TrollySec.svg'
import Chat from './assets/iconly/Chat.svg'
import Send from './assets/iconly/Send.svg'
import ChatSec from './assets/own-icons/Chat.svg'
import Search from './assets/iconly/Search.svg'
import Love from './assets/own-icons/Love.svg'
import LoveUnchecked from './assets/own-icons/LoveUnchecked.svg'
import Star from './assets/own-icons/Star.svg'
import List from './assets/own-icons/List.svg'

const OnMobile = ({ children }) => {
  const mobile = useMediaQuery({ maxWidth: 640 })
  return mobile ? children : null
}
const OnTablet = ({ children }) => {
  const tablet = useMediaQuery({ minWidth: 641, maxWidth: 768 })
  return tablet ? children : null
}

const OnMaxNotebook = ({ children }) => {
  const tablet = useMediaQuery({ maxWidth: 1024 })
  return tablet ? children : null
}

const OnNotebook = ({ children }) => {
  const notebook = useMediaQuery({ minWidth: 641, maxWidth: 1024 })
  return notebook ? children : null
}

const OnAtLeastNotebook = ({ children }) => {
  const notebook = useMediaQuery({ minWidth: 641 })
  return notebook ? children : null
}

const OnDesktop = ({ children }) => {
  const desktop = useMediaQuery({ minWidth: 1024 })
  return desktop ? children : null
}


function Detail() {
  const [count, setCount] = useState(1);
  const [check, setCheck] = useState(0);
  const [showDesc, setShowDesc] = useState(1);

  let x = [5, 5, 5, 5];
  let y = [2, 2, 2, 2, 2, 2, 2, 2, 2];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const CalcPrice = val => {
    setCount(val);
  }


  return (
    <>
      {/* navigation */}
      <Header />
      {/* end of navigation */}

      <section className='md:mt-[150px] mt-32 md:mx-14 mx-4'>
        <div className='container mx-auto grid grid-cols-12 gap-x-6'>
          <div className='lg:col-span-3 md:col-span-4 col-span-12'>
            <div className="card rounded-[30px] shadow-none">
              <img src={Product} alt="Shoes" className="rounded-2xl" />
              <div className="absolute md:right-8 md:top-8 right-7 top-7">
                <span onClick={() => setCheck(check + 1)} className='btn !p-0 hover:bg-white bg-white rounded-full shadow-md grid place-content-center w-12'><img src={check % 2 != 0 ? Love : LoveUnchecked} className='w-6' /></span>
              </div>
            </div>
            <hr className='my-6'></hr>
            <div className='grid grid-cols-5 lg:gap-x-4 md:gap-x-2 items-center hidden md:flex'>
              <a href='' className='rounded-full w-fit h-fit overflow-hidden'>
                <img src="https://placeimg.com/50/50/arch" alt="Shoes" />
              </a>
              <div className='col-span-4'>
                <a href='' className='md:md-paragraph3 sm-paragraph3 text-secColor'>Press Play</a>
                <p className='md:md-label1 sm-label1 opacity-[.55] text-secColor'>Kota Jakarta Utara</p>
              </div>
            </div>
          </div>
          <div className='lg:col-span-6 md:col-span-8 col-span-12'>
            <p className='lg:lg-header1 md:md-header1 sm-header1 md:mb-3 text-secColor'>Gundam Unicorn Japanese PBT DYe Sub Keycaps Keycap Set</p>
            <span className='flex md:gap-x-2 gap-x-1 mr-4 items-center'>
              <img src={Star} className='w-3 lg:w-4' />
              <p className="lg:lg-label1 md:md-label1 sm-label1 !font-bold text-secColor">4.8</p>
              <p className="lg:lg-label1 md:md-label1 sm-label1 opacity-[.55] text-secColor">(264 Ulasan)</p>
              <p className="sm-label1 text-secColor opacity-[.55]">|</p>
              <p className="lg:lg-label1 md:md-label1 sm-label1 !font-bold text-secColor">275</p>
              <p className="lg:lg-label1 md:md-label1 sm-label1 text-secColor opacity-[.55]"> Kali Terjual</p>
            </span>
            <div className='my-4'>
              <span className='bg-clip-text text-transparent bg-gradient lg:lg-header1 md:md-header1 sm-header1 !font-extrabold'>Rp369.000</span>
              <span className='flex gap-x-2'>
                <p className="md:lg-label1 sm-label1 md:py-0 py-1 text-secColor opacity-[.55]"><s>Rp738.000</s></p>
                <p className="px-2 py-1 rounded-md bg-[#FFDBE2] lg-label2 text-[#F94D6B]">50%</p>
              </span>
            </div>
            <div className='my-8'>
              <p className='md:md-paragraph1 sm-paragraph1 md:mb-2 !font-bold text-secColor '>Deskripsi</p>
              <div className={showDesc % 2 != 0 ? 'h-[200px] overflow-auto mt-4' : ''}>
                <p className='md:md-paragraph3 sm-paragraph3 md:mb-2 !font-medium text-justify opacity-[.55] text-secColor'>Mobile Suit Gundam Unicorn PBT Dye Sub Keycap Set. 108 keys total.
                  <br /><br />
                  PERHATIAN: Pembeli diharapkan tanggung jawab sendiri untuk mencari tahu tentang layout dan fit keyboard masing-masing.
                  <br /><br />
                  Kami akan memberi rekomendasi dan masukan sebisa kami, namun jika layout atau stem tidak cocok kami tidak bisa terima refund atau ganti unit. Melakukan check out berarti sudah mengerti dan menyetujui syarat ini.
                  <br /><br />
                  Spec:
                  <br />- PBT dye sub material. tidak akan pudar atau berminyak
                  <br />- Injection molding method, warna keycap uniform seluruh keycap nya
                  <br />- 129 keys total.
                  <br />- SUDAH BERIKUT 1.75u shift, 1u ctrl alt fn.
                  <br />- Cherry Profile
                  <br /><br />
                  Jadwal Pengiriman:
                  <br />
                  Senin - Sabtu : Pesanan sebelum Jam 12 siang akan dikirim di hari yang sama
                  Minggu & Hari Libur: Tutup (tidak ada pengiriman)
                  Lihat Lebih Sedikit Pesanan yang sudah di proses (pesanan diterima) tidak bisa di batalkan lagi.
                </p>
              </div>
              <button onClick={() => setShowDesc(showDesc + 1)}><span className='bg-clip-text text-transparent bg-gradient lg:lg-paragraph3 md:md-paragraph3 sm-paragraph3 !font-bold'>{showDesc % 2 != 0 ? 'Tampilkan semua' : 'Tampilkan sedikit'}</span></button>
            </div>
          </div>
          <div className='lg:col-span-3 relative hidden lg:flex'>
            <div className="card fixed w-[290px] z-[99] p-4 rounded-[30px] bg-base-100 shadow-xl shadow-blue-100">
              <div className="">
                <p className='md:md-paragraph3 sm-paragraph3 text-secColor'>Atur Jumlah</p>
                <div className='grid grid-cols-12 gap-x-2 mt-4 justify-items-center'>
                  <button onClick={() => CalcPrice(count - 1)} className='btn col-span-3 hover:bg-[#e6edf1] hover:border-[#D9E8FF] w-full rounded-full bg-white border-2 border-[#D9E8FF]'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="7.2002" width="18" height="3.6" rx="1.8" fill="#39586A" />
                    </svg>
                  </button>
                  <div className='col-span-6'>
                    <input type="text" disabled value={count} className="border-2 !bg-white !border-[#D9E8FF] input font-semibold md-paragraph2 rounded-full w-full text-center input-bordered" />
                    <p className='text-center mt-1 text-xs opacity-[.55] font-medium text-[#385768]'>Stok tersisa 52</p>
                  </div>
                  <button onClick={() => CalcPrice(count + 1)} className='col-span-3 hover:bg-[#e6edf1] w-full btn rounded-full bg-white border-2 border-[#D9E8FF] hover:border-[#D9E8FF]'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="7.2002" y="18" width="18" height="3.6" rx="1.8" transform="rotate(-90 7.2002 18)" fill="#39586A" />
                      <rect y="7.2002" width="18" height="3.6" rx="1.8" fill="#39586A" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <p className='md:md-paragraph3 sm-paragraph3text-secColor'>Subtotal</p>
                <div className='mt-2'>
                  <p className="md:lg-label1 sm-label1 md:py-0 py-1 text-secColor opacity-[.55]"><s>Rp34.000</s></p>
                  <span className='bg-clip-text flex text-transparent bg-gradient'><p className="md:md-subTitle1 sm-subTitle1">Rp{(369000 * count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p></span>
                </div>
                <div className='grid gap-y-2 mt-6 md:static absolute right-4'>
                  <button className="btn w-full lg:gap-x-4 md:gap-x-4 gap-x-4 lg:pb-[55px] md:pb-[35px] lg:pt-[30px] md:pt-[20px] lg:rounded-[30px] md:rounded-[20px] rounded-2xl bg-gradient-to-r border-none lg:from-[#FF3A75] lg:to-[#FF6E5A]"><p className='lg:text-[16px] text-[12px] font-semibold text-white capitalize'>Beli Sekarang</p><img src={Wallet} className='lg:w-6 md:w-4 w-2 hidden lg:flex' /></button>

                  <button className="btn w-full h-fit lg:rounded-[30px] md:rounded-[20px] hover:!bg-white hover:!border-[#FF3A75] rounded-2xl bg-gradient-to-r border-2 bg-white border-[#FF3A75]">
                    <span className='bg-clip-text flex lg:gap-x-4 md:gap-x-4 gap-x-4 items-center text-transparent bg-gradient lg:text-[16px] text-[12px] font-semibold capitalize'><p>Taruh ke Troli</p><img src={TrollySec} className='lg:w-6 md:w-4 w-2 hidden lg:flex' /> </span>
                  </button>
                  <div className='grid grid-cols-2 gap-x-1'>
                    <a href='' className='p-2 border-2 rounded-[10px] hover:bg-hover hover:border-none place-content-center mt-4 flex md:gap-x-2 gap-x-1 items-center'>
                      <img src={Chat} className='w-3 lg:w-4' />
                      <p className="lg:lg-label2 md:md-label2 sm-label2 !font-bold text-secColor">Chat Penjual</p>
                    </a>
                    <a href='' className='p-2 border-2 rounded-[10px] hover:bg-hover hover:border-none place-content-center mt-4 flex md:gap-x-2 gap-x-1 items-center'>
                      <img src={Send} className='w-3 lg:w-4' />
                      <p className="lg:lg-label2 md:md-label2 sm-label2 !font-bold text-secColor">Bagikan</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='z-50 fixed bottom-0 right-0 left-0 h-fit py-3 px-4 bg-white lg:hidden flex'>
            <div className='container flex gap-x-2 mx-auto place-content-center'>
              <button className="btn w-fit md:gap-x-6 gap-x-3 md:pb-[45px] md:pt-[26px] md:px-[30px]  hover:!bg-white hover:!border-[#FF3A75] lg:rounded-[40px] md:rounded-[20px] rounded-2xl bg-gradient-to-r border-2 bg-transparent border-[#FF3A75]"><p className='lg:lg-title1 md:md-title1 sm-title1 md:flex hidden font-semibold text-secColor capitalize bg-clip-text text-transparent bg-gradient'>Chat</p><img src={ChatSec} className='lg:w-8 md:w-6 w-4' /></button>
              <button className="btn w-fit md:gap-x-6 gap-x-3 md:pb-[45px] md:pt-[26px] md:px-[30px]  hover:!bg-white hover:!border-[#FF3A75] lg:rounded-[40px] md:rounded-[20px] rounded-2xl bg-gradient-to-r border-2 bg-transparent border-[#FF3A75]"><p className='lg:lg-title1 md:md-title1 sm-title1 bg-clip-text text-transparent bg-gradient font-semibold text-secColor capitalize'><span className='md:hidden flex'>Masuk Troli</span><span className='md:flex hidden'>Taruh ke Troli</span></p><img src={TrollySec} className='lg:w-8 md:w-6 w-4' /></button>
              <button className="btn w-fit lg:gap-x-8 md:gap-x-6 gap-x-3 lg:pb-[85px] md:pb-[46px] lg:pt-[60px] md:pt-[28px] lg:px-[70px] md:px-[30px] px-5 lg:rounded-[40px] md:rounded-[20px] rounded-2xl bg-gradient-to-r border-none from-[#FF3A75] to-[#FF6E5A]"><p className='lg:lg-title1 md:md-title1 sm-title1 font-semibold text-white capitalize'>Beli Sekarang</p><img src={Wallet} className='lg:w-8 md:w-6 w-4' /></button>
            </div>
          </div>
        </div>
      </section>

      <section className='md:mt-20 mt-10 bg-[#f5f5f5]'>
        <div className='container grid md:grid-cols-12 md:py-[100px] py-4 pt-12 md:px-0 px-4 mx-auto'>
          <div className='lg:col-span-9 col-span-12 md:grid-cols-none'>
            <div className='col-span-12'>
              <p className='lg:lg-header1 md:md-header1 sm-header1 md:mb-8 text-secColor'>Ulasan</p>
              <div className='flex mt-3 md:mt-0'>
                <span className='flex w-fit md:gap-x-2 gap-x-1 mr-4 items-center border-2 border-[#d9e8ff] rounded-[20px] md:px-8 px-6 md:py-6 py-4'>
                  <img src={Star} className='w-5 lg:w-8 mr-1' />
                  <p className="lg:lg-header1 md:md-header1 sm-header1 !font-bold text-secColor">4.8</p>
                  <p className="lg:lg-paragraph1 md:md-paragraph1 sm-paragraph1 opacity-[.55] text-secColor">/5.0</p>
                </span>
                {/* <span className='flex gap-x-4'>
                  <a href='' className='md:rounded-[20px] w-fit h-fit overflow-hidden'>
                    <img src="https://placeimg.com/100/100/arch" alt="Shoes" />
                  </a>
                  <a href='' className='md:rounded-[20px] w-fit h-fit overflow-hidden'>
                    <img src="https://placeimg.com/100/100/arch" alt="Shoes" />
                  </a>
                  <a href='' className='md:rounded-[20px] w-fit h-fit overflow-hidden'>
                    <img src="https://placeimg.com/100/100/arch" alt="Shoes" />
                  </a>
                  <a href='' className='md:rounded-[20px] w-fit h-fit overflow-hidden'>
                    <img src="https://placeimg.com/100/100/arch" alt="Shoes" />
                  </a>
                </span> */}
              </div>
              <div className='mt-12 grid gap-y-4'>
                <div className='grid grid-cols-12 border-2 p-8 rounded-[20px]'>
                  <div className='grid grid-cols-5 md:col-span-3 col-span-12 gap-x-4 items-center flex'>
                    <a href='' className='rounded-full w-fit h-fit overflow-hidden'>
                      <img src="https://placeimg.com/50/50/arch" alt="Shoes" />
                    </a>
                    <div className='col-span-4'>
                      <a href='' className='md:md-paragraph3 sm-paragraph3 text-secColor'>Rahmat Rians</a>
                      <p className='md:md-label1 sm-label1 opacity-[.55] text-secColor'>2 hari lalu</p>
                    </div>
                  </div>
                  <div className='md:col-span-9 col-span-12 lg:gap-x-4 md:gap-x-2'>
                    <span className='w-fit gap-x-1 flex md:my-4 mt-6 mb-2'>
                      <img src={Star} className='w-3 lg:w-5 mr-1' />
                      <img src={Star} className='w-3 lg:w-5 mr-1' />
                      <img src={Star} className='w-3 lg:w-5 mr-1' />
                      <img src={Star} className='w-3 lg:w-5 mr-1' />
                    </span>
                    <p className="lg:lg-paragraph1 md:md-paragraph1 sm-paragraph1 opacity-[.55] text-secColor">sipp mantap barang diterima dngn baik utuh ga cacat.. sempat panik kok ga nyala ternyata colok chargernya kurang dalam.. maklum karna masih baru terlalu halus colokinnya</p>
                  </div>
                </div>
                <div className='grid grid-cols-12 border-2 p-8 rounded-[20px]'>
                  <div className='grid grid-cols-5 md:col-span-3 col-span-12 gap-x-4 items-center flex'>
                    <a href='' className='rounded-full w-fit h-fit overflow-hidden'>
                      <img src="https://placeimg.com/50/50/arch" alt="Shoes" />
                    </a>
                    <div className='col-span-4'>
                      <a href='' className='md:md-paragraph3 sm-paragraph3 text-secColor'>Rahmat Rians</a>
                      <p className='md:md-label1 sm-label1 opacity-[.55] text-secColor'>2 hari lalu</p>
                    </div>
                  </div>
                  <div className='md:col-span-9 col-span-12 lg:gap-x-4 md:gap-x-2'>
                    <span className='w-fit gap-x-1 flex md:my-4 mt-6 mb-2'>
                      <img src={Star} className='w-3 lg:w-5 mr-1' />
                      <img src={Star} className='w-3 lg:w-5 mr-1' />
                      <img src={Star} className='w-3 lg:w-5 mr-1' />
                      <img src={Star} className='w-3 lg:w-5 mr-1' />
                      <img src={Star} className='w-3 lg:w-5 mr-1' />
                    </span>
                    <p className="lg:lg-paragraph1 md:md-paragraph1 sm-paragraph1 opacity-[.55] text-secColor">sipp mantap barang diterima dngn baik utuh ga cacat.. sempat panik kok ga nyala ternyata colok chargernya kurang dalam.. maklum karna masih baru terlalu halus colokinnya</p>
                  </div>
                </div>
                <div className='grid grid-cols-12 border-2 p-8 rounded-[20px]'>
                  <div className='grid grid-cols-5 md:col-span-3 col-span-12 gap-x-4 items-center flex'>
                    <a href='' className='rounded-full w-fit h-fit overflow-hidden'>
                      <img src="https://placeimg.com/50/50/arch" alt="Shoes" />
                    </a>
                    <div className='col-span-4'>
                      <a href='' className='md:md-paragraph3 sm-paragraph3 text-secColor'>Rahmat Rians</a>
                      <p className='md:md-label1 sm-label1 opacity-[.55] text-secColor'>2 hari lalu</p>
                    </div>
                  </div>
                  <div className='md:col-span-9 col-span-12 lg:gap-x-4 md:gap-x-2'>
                    <span className='w-fit gap-x-1 flex md:my-4 mt-6 mb-2'>
                      <img src={Star} className='w-3 lg:w-5 mr-1' />
                      <img src={Star} className='w-3 lg:w-5 mr-1' />
                      <img src={Star} className='w-3 lg:w-5 mr-1' />
                      <img src={Star} className='w-3 lg:w-5 mr-1' />
                      <img src={Star} className='w-3 lg:w-5 mr-1' />
                    </span>
                    <p className="lg:lg-paragraph1 md:md-paragraph1 sm-paragraph1 opacity-[.55] text-secColor">sipp mantap barang diterima dngn baik utuh ga cacat.. sempat panik kok ga nyala ternyata colok chargernya kurang dalam.. maklum karna masih baru terlalu halus colokinnya</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='my-16 mx-6'>
              <p className='md:md-paragraph1 sm-paragraph1 md:mb-2 !font-bold text-secColor'>Filter</p>
              <div className='w-[60%] md:w-fit'>
                <div className='flex overflow-x-scroll whitespace-nowrap gap-x-3'>
                  <span className='flex w-fit md:gap-x-2 gap-x-1 mx-3 items-center hover:bg-hover hover:rounded-full border-2 border-[#d9e8ff] rounded-full md:px-8 px-6 md:py-3 py-1'>
                    <p className="lg:lg-paragraph1 md:md-paragraph1 sm-paragraph1 !font-bold text-secColor">Semua</p>
                  </span>
                  <span className='flex w-fit md:gap-x-2 gap-x-1 mx-3 items-center hover:bg-hover hover:rounded-full border-2 border-[#d9e8ff] rounded-full md:px-8 px-6 md:py-3 py-1'>
                    <p className="lg:lg-paragraph1 md:md-paragraph1 sm-paragraph1 !font-bold text-secColor">Dengan Media</p>
                  </span>
                  <span className='flex w-fit md:gap-x-2 gap-x-1 mx-3 items-center hover:bg-hover hover:rounded-full border-2 border-[#d9e8ff] rounded-full md:px-8 px-6 md:py-3 py-1'>
                    <img src={Star} className='w-3 lg:w-5' />
                    <p className="lg:lg-paragraph1 md:md-paragraph1 sm-paragraph1 !font-bold text-secColor">5</p>
                  </span>
                  <span className='flex w-fit md:gap-x-2 gap-x-1 mx-3 items-center hover:bg-hover hover:rounded-full border-2 border-[#d9e8ff] rounded-full md:px-8 px-6 md:py-3 py-1'>
                    <img src={Star} className='w-3 lg:w-5' />
                    <p className="lg:lg-paragraph1 md:md-paragraph1 sm-paragraph1 !font-bold text-secColor">4</p>
                  </span>
                  <span className='flex w-fit md:gap-x-2 gap-x-1 mx-3 items-center hover:bg-hover hover:rounded-full border-2 border-[#d9e8ff] rounded-full md:px-8 px-3 md:py-3 py-1'>
                    <img src={Star} className='w-3 lg:w-5' />
                    <p className="lg:lg-paragraph1 md:md-paragraph1 sm-paragraph1 !font-bold text-secColor">3</p>
                  </span>
                  <span className='flex w-fit md:gap-x-2 gap-x-1 mx-3 items-center hover:bg-hover hover:rounded-full border-2 border-[#d9e8ff] rounded-full md:px-8 px-3 md:py-3 py-1'>
                    <img src={Star} className='w-3 lg:w-5' />
                    <p className="lg:lg-paragraph1 md:md-paragraph1 sm-paragraph1 !font-bold text-secColor">2</p>
                  </span>
                  <span className='flex w-fit md:gap-x-2 gap-x-1 mx-3 items-center hover:bg-hover hover:rounded-full border-2 border-[#d9e8ff] rounded-full md:px-8 px-3 md:py-3 py-1'>
                    <img src={Star} className='w-3 lg:w-5' />
                    <p className="lg:lg-paragraph1 md:md-paragraph1 sm-paragraph1 !font-bold text-secColor">1</p>
                  </span>
                </div>
              </div>
            </div> */}
            <div className='my-12 container md:hidden mx-auto'>
              <center>
                <button className="btn w-fit lg:gap-x-8 md:gap-x-6 gap-x-4 lg:pb-[85px] md:pb-[45px] lg:pt-[60px] md:pt-[30px] lg:px-[70px] md:px-[30px] px-5 lg:rounded-[40px] md:rounded-[20px] rounded-2xl bg-gradient-to-r border-none from-[#FF3A75] to-[#FF6E5A]"><p className='lg:lg-title1 md:md-title1 sm-title1 font-semibold text-white capitalize'>Lihat Semua Ulasan</p><img src={List} className='lg:w-8 md:w-6 w-4' /></button>
              </center>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <section className='mt-20 md:py-[150px] py-12 md:px0 p-4 bg-[#f5f5f5]'>
        <div className='container mx-auto'>
          <div className='grid lg:grid-cols-3 lg:gap-x-24 lg:gap-y-0 gap-y-12 bg-[#1d1441] md:rounded-[40px] rounded-[25px] md:p-[80px] p-12'>
            <div className=''>
              <span className='bg-clip-text text-transparent bg-gradient lg:lg-header1 md:md-header1 sm-header1'>Himasi Store</span>
              <p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] text-justify md:mt-6 mt-3'>Situs Marketplace aman dan terpercaya milik anak bangsa hadir untuk memberikan pelayanan yang terbaik kepada masyarakat Indonesia.</p>
            </div>
            <OnDesktop>
              <div className='md:grid md:grid-cols-3 col-span-2'>
                <span className='md:justify-self-end'>
                  <h3 className='md:md-header1 font-bold text-white md:mb-12'>Himasi Store</h3>
                  <ul>
                    <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Tentang Himasi Store</a></li>
                    <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Karir</a></li>
                    <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Blog</a></li>
                    <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Kebijakan Privasi</a></li>
                  </ul>
                </span>
                <span className='md:justify-self-end '>
                  <h3 className='md:md-header1 font-bold text-white md:mb-12'>Pembeli</h3>
                  <ul>
                    <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Cara Belanja</a></li>
                    <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Himasi COD</a></li>
                    <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Jaminan Aman</a></li>
                    <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>FAQ</a></li>
                  </ul>
                </span>
                <span className='md:justify-self-end '>
                  <h3 className='md:md-header1 font-bold text-white md:mb-12'>Penjual</h3>
                  <ul>
                    <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Cara Berjualan</a></li>
                    <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Daftar Official Store</a></li>
                    <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Mitra Himasi</a></li>
                  </ul>
                </span>
              </div>
            </OnDesktop>
            <OnMaxNotebook>
              <div className='grid gap-y-3'>
                <div tabIndex="0" className=" collapse collapse-arrow bg-[#241854] rounded-box">
                  <div className="collapse-title md:md-header1 font-bold text-white opacity-[.45]">
                    Himasi Store
                  </div>
                  <div className="collapse-content">
                    <ul>
                      <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Tentang Himasi Store</a></li>
                      <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Karir</a></li>
                      <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Blog</a></li>
                      <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Kebijakan Privasi</a></li>
                    </ul>
                  </div>
                </div>
                <div tabIndex="0" className=" collapse collapse-arrow bg-[#241854] rounded-box">
                  <div className="collapse-title md:md-header1 font-bold text-white opacity-[.45]">
                    Pembeli
                  </div>
                  <div className="collapse-content">
                    <ul>
                      <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Cara Belanja</a></li>
                      <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Himasi COD</a></li>
                      <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Jaminan Aman</a></li>
                      <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>FAQ</a></li>
                    </ul>
                  </div>
                </div>
                <div tabIndex="0" className=" collapse collapse-arrow bg-[#241854] rounded-box">
                  <div className="collapse-title md:md-header1 font-bold text-white opacity-[.45]">
                    Penjual
                  </div>
                  <div className="collapse-content">
                    <ul>
                      <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Cara Berjualan</a></li>
                      <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Daftar Official Store</a></li>
                      <li className='my-3'><a href='' className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Mitra Himasi</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </OnMaxNotebook>
          </div>
        </div>
      </section >
      {/* end of footer */}

    </>
  )
}

export default Detail