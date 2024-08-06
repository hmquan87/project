'use client';


import img from '@/public/img/image2.png'
import { Button } from 'antd';
import Image from 'next/image';
import { IoMdCheckmark } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import appStore from '@/public/img/header/App-Store.svg'
import chPlay from '@/public/img/header/Play-Store.svg'
import img4 from '@/public/img/image4.png';
import img5 from '@/public/img/image.png'
import { FaStar } from "react-icons/fa";

interface RefType {
    refBody4: React.RefObject<HTMLDivElement>
}

export const Body4: React.FC<RefType> = ({refBody4}) => {
    return (
        <div className=''>
            <div className='flex gap-x-20 px-40' >
                <div className=''>
                    <p className='mb-10 text-[40px] font-bold text-[#001E4D]'>Chính sách về quyền riêng tư</p>
                    <p className='mb-7 text-[#0070FF] text-[20px] font-medium'>Quyền riêng tư của bạn rất quan trọng đối với chúng tôi !</p>
                    <span className='mb-7 text-[#495460] text-[20px] font-medium flex gap-4 items-center'>
                        <IoMdCheckmark className='text-[#0070FF]' />
                        Những thông tin nào được thu thập
                    </span>
                    <span className='mb-7 text-[#495460] text-[20px] font-medium flex gap-4 items-center'>
                        <IoMdCheckmark className='text-[#0070FF]' />
                        Các thông tin đã thu thập được sử dụng
                    </span>
                    <span className='mb-7 text-[#495460] text-[20px] font-medium flex gap-4 items-center'>
                        <IoMdCheckmark className='text-[#0070FF]' />
                        Thông tin được cung cấp ra bên ngoài như thế nào
                    </span>
                    <span className='mb-14 text-[#495460] text-[20px] font-medium flex gap-4 items-center'>
                        <IoMdCheckmark className='text-[#0070FF]' />
                        Các thông tin khác về quyền riêng tư
                    </span>

                    <Button
                        type='primary'
                        className='h-[60px] rounded-full text-[16px]'
                    >
                        <p className='px-5 flex items-center font-semibold'>Xem chi tiết <MdKeyboardArrowRight className='ml-2' /></p>
                    </Button>

                </div>
                <div >
                    <Image
                        width={750}
                        src={img}
                        alt=''
                    />
                </div>
            </div >
            <div ref={refBody4}>

            </div>
            <div className='pt-[10%] pb-[15%]' ref={ refBody4}>
                <div className='bg-[length:140vh_55vh] bg-no-repeat bg-center h-[55vh] flex flex-row justify-center px-[5%]' style={{ backgroundImage: "url('/img/background-seven.eaa79340.png')" }}>
                    <div className='basis-2/3 flex justify-center'>
                        <div className='flex flex-col w-[75%] pt-[10%] text-white ml-[-5%]'>
                            <div className='pb-10'>
                                <p className='text-[48px] font-bold leading-none pb-7'>
                                    Trải nghiệm ứng dụng quản lý
                                    công việc TinaMYS
                                </p>
                                <p className='text-[18px] font-medium w-[80%]'>
                                    Khám phá sức mạnh đột phá với TinaMYS - giải pháp quản trị mục tiêu, công việc cho doanh nghiệp: Đa chiều - thông minh - linh hoạt - hiệu quả
                                </p>
                            </div>
                            <div className='flex'>
                                <Image
                                    src={appStore}
                                    alt=''
                                    className='mr-[6%]'
                                />
                                <Image
                                    src={chPlay}
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/3 ml-[-11%]'>
                        <Image
                            width={900}
                            src={img4}
                            alt=''
                            className='mr-[5%] pt-[20%] hover:scale-105 transition-transform duration-300 ease-in-out'
                        />
                    </div>
                </div>
            </div>

            <div className='flex flex-row bg-slate-100'>
                <div className='basis-1/2 flex justify-center'>
                    <Image
                        width={600}
                        src={img5}
                        alt=''
                        className='py-6'
                    />
                </div>
                <div className='basis-1/2 my-auto'>
                    <p className='text-[45px] font-bold w-[45%] leading-tight'>
                        Những phản hồi từ khách hàng
                    </p>
                    <span className='flex gap-2 text-yellow-300 py-6 text-[20px]'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                    <p className='text-[20px] text-[#495460] leading-normal w-[85%] '>
                        “Một ứng dụng thú vị, nơi tôi có thể chia sẻ với bạn bè và những người xung quanh.
                        Mong mô hình của app sẽ được nhân rộng và nhiều người biết đến”
                    </p>
                </div>
            </div>
        </div>
    )
}