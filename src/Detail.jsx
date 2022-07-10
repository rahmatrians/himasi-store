import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import Card from './components/Card/Index'

import Image from './assets/iconly/Image.svg'
import Notification from './assets/iconly/Notification.svg'
import Trolly from './assets/iconly/Trolly.svg'
import Search from './assets/iconly/Search.svg'
import Love from './assets/own-icons/Love.svg'
import Star from './assets/own-icons/Star.svg'
import LongArrowRight from './assets/own-icons/Long-Arrow-Right.svg'
import List from './assets/own-icons/List.svg'

const OnMobile = ({ children }) => {
  const mobile = useMediaQuery({ maxWidth: 640 })
  return mobile ? children : null
}
const OnTablet = ({ children }) => {
  const tablet = useMediaQuery({ minWidth: 641, maxWidth: 768 })
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
  const [count, setCount] = useState(0);
  let x = [5, 5, 5, 5];
  let y = [2, 2, 2, 2, 2, 2, 2, 2, 2];


  return (
    <>
      {/* navigation */}
      <nav className="relative z-50 fixed top-0 left-0 right-0 h-[85px] flex items-center bg-base-100 shadow-xl shadow-blue-50">
        <div className='container mx-auto'>
          <div className='navbar'>
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex="0" className="lg:hidden">
                  <label for="my-modal-2" class="btn btn-ghost btn-circle">
                    <img src={Search} width='24' />
                  </label>
                </label>

                {/* modal of searching for mobile respnsive */}
                <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                <div class="modal">
                  <label for="my-modal-2" className='w-full h-screen absolute bg-black opacity-60'></label>
                  <div class="modal-box relative">
                    {/* <label for="my-modal-2" class="col-span-6 btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
                    <div class="grid grid-cols-6 gap-x-2">
                      <input type="text" placeholder="Mau cari apa hari ini?" className="col-span-5 input rounded-full text-center input-bordered w-full" />
                      <a href="#" class="btn btn-circle "><img src={Search} width='24' /></a>
                    </div>
                  </div>
                </div>
                {/* end of modal of searching for mobile respnsive  */}

              </div >
              <a className="btn btn-ghost normal-case text-xl" > HIMASIX STORE</a >
            </div >
            <div className="navbar-center hidden lg:flex" >
              <input type="text" placeholder="Mau cari apa hari ini?" className="input rounded-full text-center input-bordered w-[40rem]" />
            </div >
            <div className="navbar-end" >
              <button className="btn btn-ghost btn-circle" >
                <img src={Trolly} width='24' />
              </button >
              <button className="btn btn-ghost btn-circle" >
                <img src={Notification} width='24' />
              </button >
              <button className="btn btn-ghost btn-circle" >
                <img src={Image} width='24' />
              </button >
            </div >
          </div >
        </div >
      </nav >
      {/* end of navigation */}

      <section className='md:mt-20 mt-10 md:mx-14'>
        <div className='container mx-auto grid grid-cols-12 gap-x-6'>
          <div className='col-span-3 bg-red-100'>
            <div className="card rounded-[30px] shadow-none">
              <img src="https://placeimg.com/400/400/arch" alt="Shoes" className="rounded-2xl" />
              <div className="absolute md:right-6 md:top-6 right-7 top-7">
                <span className='bg-white rounded-full shadow-md grid place-content-center w-7 md:w-12 h-7 md:h-12'><img src={Love} className='w-4 md:w-6' /></span>
              </div>
            </div>
            <hr className='my-6'></hr>
            <div className='grid grid-cols-5 lg:gap-x-4 md:gap-x-2 items-center'>
              <a href='' className='rounded-full w-fit h-fit overflow-hidden'>
                <img src="https://placeimg.com/50/50/arch" alt="Shoes" />
              </a>
              <div className='col-span-4'>
                <a href='' className='md:md-paragraph3 sm-paragraph3 text-secColor'>Press Play</a>
                <p className='md:md-label1 sm-label1 opacity-[.55] text-secColor'>Kota Jakarta Utara</p>
              </div>
            </div>
          </div>
          <div className='col-span-6 bg-gray-200'>
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
                <p className="md:lg-label1 sm-label1 md:py-0 py-1 text-secColor opacity-[.55]"><s>Rp34.000</s></p>
                <p className="px-2 py-1 rounded-md bg-[#FFDBE2] lg-label2 text-[#F94D6B]">50%</p>
              </span>
            </div>
            <div className='my-8'>
              <p className='md:md-paragraph1 sm-paragraph1 md:mb-2 !font-bold text-secColor'>Deskripsi</p>
              <div className='h-[200px] overflow-auto'>
                <p className='md:md-paragraph3 sm-paragraph3 md:mb-2 !font-medium text-justify opacity-[.55] text-secColor'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen booking and typesetting industry.
                  <br /><br />
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like...</p>
              </div>
              <a href=''><span className='bg-clip-text text-transparent bg-gradient lg:lg-paragraph3 md:md-paragraph3 sm-paragraph3 !font-bold'>Tampilkan semua</span></a>
            </div>
          </div>
          <div className='col-span-3 bg-red-0'>
            <div className="card p-4 pb-6 rounded-[30px] bg-base-100 shadow-xl shadow-blue-100">
              <div className="mt-6">
                <p className='md:md-paragraph3 sm-paragraph3 text-secColor'>Atur Jumlah</p>
                <div className='grid grid-cols-5 mt-4 justify-items-center'>
                  <div className='col-span-1 justify-self-start'>
                    <button className='btn rounded-full bg-white border-2 border-[#D9E8FF]'><p className=''>-</p></button>
                  </div>
                  <div className='col-span-3'>
                    <input type="text" value="1" className="border-2 border-[#D9E8FF] input rounded-full w-full text-center input-bordered" />
                    <p className='text-center mt-1 text-xs opacity-[.55] font-medium text-[#385768]'>Stok tersisa 52</p>
                  </div>
                  <div className='col-span-1 justify-self-end'>
                    <button className='btn rounded-full bg-white border-2 border-[#D9E8FF]'><p className=''>+</p></button>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className='md:md-paragraph3 sm-paragraph3text-secColor'>Subtotal</p>
                <div className='mt-2'>
                  <p className="md:lg-label1 sm-label1 md:py-0 py-1 text-secColor opacity-[.55]"><s>Rp34.000</s></p>
                  <p className="md:md-subTitle1 sm-subTitle1 text-secColor">Rp17.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='md:mt-20 mt-10 bg-[#f5f5f5]'>
        <div className='container grid md:grid-cols-6 md:py-[180px] py-4 pt-12 mx-auto'>
          <div className='md:col-span-3 mx-4 grid grid-cols-6 md:grid-cols-none content-between'>
            <div className='col-span-3'>
              <p className='lg:lg-header1 md:md-header1 sm-header1 md:mb-8 animate-bounce text-secColor'>Flash Deal</p>
              <p className='md:md-title1 sm-title1 md:mb-2 opacity-[.55] text-secColor'>Berakhir Dalam</p>
              <p className='lg:lg-header1 md:md-header1 sm-header1 text-secColor'>01 : 44 : 07</p>
            </div>
            <div className='col-span-3 md:pb-12 md:static absolute right-4'>
              <button className="btn w-fit lg:gap-x-6 md:gap-x-6 gap-x-4 lg:pb-[70px] md:pb-[45px] lg:pt-[42px] md:pt-[30px] lg:px-[60px] md:px-[30px] px-5 lg:rounded-[40px] md:rounded-[20px] rounded-2xl bg-gradient-to-r border-none from-[#FF3A75] to-[#FF6E5A]"><p className='md:md-title1 sm-title1 font-semibold text-white capitalize'>Lihat Semua</p><img src={LongArrowRight} className='lg:w-12 md:w-8 w-6' /></button>
            </div>
          </div>
          <div className='md:col-span-3 mx-4 md:px-4 px-2 overflow-x-scroll md:pt-0 pt-12 pb-12 scrollbar'>
            <div className='flex md:flex-none gap-x-6'>
              {x.map((val, idx) => (
                <Card key={idx} />
              )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* recommended products */}
      <section className='md:mt-20 mt-10'>
        <div className='container md:mt-40 mt-14 bg-red-9900 mx-auto'>
          <div className='mx-4 md:mx-0'>
            <p className='lg:lg-header1 md:md-header1 sm-header1 md:mb-[115px] mb-10 text-secColor'>Rekomendasi Buat Kamu</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-x-6 gap-x-4 md:gap-y-12 gap-y-8'>
              {y.map((val, idx) => (
                <Card key={idx} />
              )
              )}
            </div>
            <div className='md:my-44 my-24 container mx-auto'>
              <center>
                <button className="btn w-fit lg:gap-x-8 md:gap-x-6 gap-x-4 lg:pb-[85px] md:pb-[45px] lg:pt-[60px] md:pt-[30px] lg:px-[70px] md:px-[30px] px-5 lg:rounded-[40px] md:rounded-[20px] rounded-2xl bg-gradient-to-r border-none from-[#FF3A75] to-[#FF6E5A]"><p className='lg:lg-title1 md:md-title1 sm-title1 font-semibold text-white capitalize'>Tampilkan lebih banyak</p><img src={List} className='lg:w-8 md:w-6 w-4' /></button>
              </center>
            </div>
          </div>
        </div>
      </section>
      {/* end of recommended products */}

      {/* footer */}
      <section className='mt-20 md:py-[150px] py-12 md:px0 p-4 bg-[#f5f5f5]'>
        <div className='container mx-auto'>
          <div className='grid md:grid-cols-2 md:gap-x-24 md:gap-y-0 gap-y-12 bg-[#1d1441] md:rounded-[40px] rounded-[25px] md:p-[80px] p-12'>
            <div className=''>
              <span className='bg-clip-text text-transparent bg-gradient lg:lg-header1 md:md-header1 sm-header1'>Himasi Store</span>
              <p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] text-justify md:mt-6 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis mrhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
            </div>
            <OnAtLeastNotebook>
              <div className='md:grid md:grid-cols-3'>
                <span className='md:justify-self-end'>
                  <h3 className='md:md-header1 font-bold text-white md:mb-12'>Title</h3>
                  <ul>
                    <li><p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Sub Title</p></li>
                    <li><p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Sub Title</p></li>
                    <li><p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Sub Title</p></li>
                  </ul>
                </span>
                <span className='md:justify-self-end '>
                  <h3 className='md:md-header1 font-bold text-white md:mb-12'>Title</h3>
                  <ul>
                    <li><p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Sub Title</p></li>
                    <li><p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Sub Title</p></li>
                    <li><p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Sub Title</p></li>
                  </ul>
                </span>
                <span className='md:justify-self-end '>
                  <h3 className='md:md-header1 font-bold text-white md:mb-12'>Title</h3>
                  <ul>
                    <li><p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Sub Title</p></li>
                    <li><p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Sub Title</p></li>
                    <li><p className='md:md-paragraph2 sm-paragraph2 text-white opacity-[.45] my-3'>Sub Title</p></li>
                  </ul>
                </span>
              </div>
            </OnAtLeastNotebook>
            <OnMobile>
              <div className='grid gap-y-3'>
                <div tabIndex="0" className=" collapse collapse-arrow bg-[#241854] rounded-box">
                  <div className="collapse-title md:md-header1 font-bold text-white opacity-[.45]">
                    Title
                  </div>
                  <div className="collapse-content">
                    <ul>
                      <li><p className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Sub Title</p></li>
                      <li><p className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Sub Title</p></li>
                      <li><p className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Sub Title</p></li>
                    </ul>
                  </div>
                </div>
                <div tabIndex="0" className=" collapse collapse-arrow bg-[#241854] rounded-box">
                  <div className="collapse-title md:md-header1 font-bold text-white opacity-[.45]">
                    Title
                  </div>
                  <div className="collapse-content">
                    <ul>
                      <li><p className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Sub Title</p></li>
                      <li><p className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Sub Title</p></li>
                      <li><p className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Sub Title</p></li>
                    </ul>
                  </div>
                </div>
                <div tabIndex="0" className=" collapse collapse-arrow bg-[#241854] rounded-box">
                  <div className="collapse-title md:md-header1 font-bold text-white opacity-[.45]">
                    Title
                  </div>
                  <div className="collapse-content">
                    <ul>
                      <li><p className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Sub Title</p></li>
                      <li><p className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Sub Title</p></li>
                      <li><p className='md:md-paragraph2 sm-paragraph2 my-3 text-white opacity-[.45]'>Sub Title</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </OnMobile>
          </div>
        </div>
      </section >
      {/* end of footer */}

    </>
  )
}

export default Detail