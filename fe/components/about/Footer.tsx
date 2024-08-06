'use client';

import { useRef } from 'react';
import style from '@/styles/Footer.module.scss';
import circle from '@/public/img/footer/circle.svg'
import Image from 'next/image';
import shape1 from '@/public/img/footer/footer-shape-1.90833e24.svg';
import shape2 from '@/public/img/footer/footer-shape-2.7000b5e2.svg';
import shape3 from '@/public/img/footer/footer-shape-3.c07b7ca6.svg';
import logo from '@/public/img/header/logo.svg'
import { Button, ConfigProvider } from 'antd';
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

interface FooterProps {
    scrollToBody: (ref: React.RefObject<HTMLDivElement>) => void;
    refBtn1: React.RefObject<HTMLDivElement>;
    refBody4: React.RefObject<HTMLDivElement>
}

export const Footers: React.FC<FooterProps> = ({ scrollToBody, refBtn1, refBody4 }) => {
    const theme = {
        token: {
            colorPrimary: '#222943',
            colorText: '#FFFFFF',
        },
        components: {
            Button: {
                colorPrimaryHover: '#1677FF',
            },
        },
    };
    return (
        <div className=''>
            <div className={style.customFooter} >
                <div className='absolute top-[-50%] left-[-5%]'>
                    <Image
                        width={450}
                        src={circle}
                        alt=''
                    />
                </div>
                <div className='absolute bottom-28 left-[21.5rem]'>
                    <Image
                        width={65}
                        src={shape1}
                        alt=''
                    />
                </div>
                <div className='absolute bottom-[16.5rem] right-[20rem]'>
                    <Image
                        width={120}
                        src={shape2}
                        alt=''
                    />
                </div>
                <div className='absolute bottom-[7rem] right-[18rem]'>
                    <Image
                        width={100}
                        src={shape3}
                        alt=''
                    />
                </div>
                <div className='pt-[7%] px-[10%] flex justify-center space-x-32'>
                    <div className=''>
                        <div className='pb-6'>
                            <Image
                                width={150}
                                src={logo}
                                alt=''
                            />
                        </div>
                        <div className='text-[#FFFFFFD9] text-[14px]'>
                            <p
                                className='cursor-pointer hover:text-[#1677FF]'
                            >
                                Email: contact@tinasoft.vn
                            </p>
                            <p
                                className='cursor-pointer hover:text-[#1677FF]'
                            >
                                Số điện thoại: +(84) 246 329 5589
                            </p>
                            <p>
                                Địa chỉ văn phòng: Tầng 4, Tòa nhà Ellipse Tower, <br /> 110 Trần Phú, Hà Đông, Hà Nội
                            </p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='py-7 text-[25px] font-bold text-white'>
                            About MYS
                        </div>
                        <div className='text-[#FFFFFFD9] text-[14px]'>
                            <p
                                className='mb-2 cursor-pointer hover:text-white'

                            >
                                Giới thiệu
                            </p>
                            <p
                                className='cursor-pointer hover:text-white'
                                onClick={() => scrollToBody(refBtn1)}
                            >
                                Tính năng
                            </p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='py-7 text-[25px] font-bold text-white'>
                            Solution
                        </div>
                        <div className='text-[#FFFFFFD9] text-[14px]'>
                            <p
                                className='cursor-pointer hover:text-white'
                                onClick={() => scrollToBody(refBody4)}
                            >
                                Đăng ký dùng thử
                            </p>
                            <p className='my-2 cursor-pointer hover:text-white'>
                                Faqs
                            </p>
                            <p
                                className='cursor-pointer hover:text-white'
                            >
                                Help Center
                            </p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='py-7 text-[25px] font-bold text-white'>
                            Trải nghiệm ứng dụng
                        </div>
                        <div className=''>
                            <ConfigProvider theme={theme}>
                                <div className='flex flex-col space-y-5'>
                                    <Button
                                        type='primary'
                                        className='h-[62px] w-[172px]'
                                    >
                                        <FaApple /> App Store
                                    </Button>
                                    <Button
                                        type='primary'
                                        className='h-[62px] w-[172px]'
                                    >
                                        <FaGooglePlay /> Play Store
                                    </Button>
                                </div>
                            </ConfigProvider>
                        </div>
                    </div>
                </div>
                <div className='text-[#FFFFFFD9] text-[14px] pt-[3.3rem] flex justify-center'>
                    <div className='flex justify-between w-[62%] py-7 border-t border-[#ffffff1c]' >
                        <div className='cursor-pointer hover:text-[#1677FF]'>
                            © 2024 TINASOFT VIỆT NAM
                        </div>
                        <div className='flex items-center space-x-8'>
                            <div>
                                Privacy Policy
                            </div>
                            <div className='text-[#373ae0] text-[6px]'>
                                <FaCircle />
                            </div>
                            <div>
                                Refund Policy
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}