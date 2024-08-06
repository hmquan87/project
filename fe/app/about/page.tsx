'use client';

import { useState, useEffect, useRef } from 'react';
import { Footers } from "@/components/about/Footer";
import { Headers } from "@/components/about/Header";
import { Body1 } from "@/components/about/body1";
import { Body2 } from "@/components/about/body2";
import { Body3 } from "@/components/about/body3";
import { Body4 } from "@/components/about/body4";
import { Body5 } from "@/components/about/body5";
import { Body6 } from "@/components/about/body6";
import { Body7 } from "@/components/about/body7";
import { IoIosStarOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { IoMdArrowUp } from "react-icons/io";
import { Button, ConfigProvider } from 'antd';
import React from 'react';

const About: React.FC = () => {
    const refBtn1 = useRef<HTMLDivElement>(null);
    const refBtn2 = useRef<HTMLDivElement>(null);
    const refBtn3 = useRef<HTMLDivElement>(null);
    const refBody4 = useRef<HTMLDivElement>(null);

    const scrollToBody = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [showCard, setshowCard] = useState(false);

    const theme = {

        components: {
            Button: {
                colorPrimaryHover: '#167FF9',
                primaryColor: '#000000'
            },
        },
    };

    useEffect(() => {


        [refBtn1, refBtn2, refBtn3, refBody4].forEach(ref => {
            if (ref.current) {
                ref.current.focus();
            }
        });


        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > window.innerHeight) {
                setshowCard(true);
            } else {
                setshowCard(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return (
        <div className="">
            <div className="">
                <Headers />
            </div>

            <div className="px-[3px] grid gap-y-10">
                <div className=" h-[100vh] " ref={refBtn3}>
                    <Body1 />
                </div>
                <div className="">
                    <Body2 />
                </div>
                <div ref={refBtn1}>
                    <Body3 />
                </div>
                <div >
                    <Body4 refBody4={refBody4} />
                </div>
                {/* <div>
                    <Body5 />
                </div> */}
                <div>
                    <Body6 />
                </div>
                <div ref={refBtn2} className='h-[5rem]'>

                </div>
                <div >
                    <Body7 />
                </div>
            </div>

            <div className="px-[30px]">
                <Footers scrollToBody={scrollToBody} refBtn1={refBtn1} refBody4={refBody4} />
            </div>
            <div className="fixed top-[70%] right-0">
                <div className={`group w-[3rem] text-[20px] rounded-tl-2xl rounded-bl-2xl bg-[#dde6ed] flex flex-col transition-width duration-300 ease-in-out hover:w-[8rem]`}>
                    <ConfigProvider theme={theme}>
                        <Button
                            type='primary'
                            className='bg-[#dde6ed] border-none shadow-none rounded-tl-2xl rounded-b-none rounded-tr-none h-[40px] flex justify-start'
                            onClick={() => scrollToBody(refBtn1)}
                        >
                            <div className='flex justify-start text-[20px]  items-center '>
                                <span className="hidden group-hover:block text-[13px]"> ƯU ĐIỂM </span>
                                <IoIosStarOutline className='fixed right-3' />
                            </div>
                        </Button>

                        <Button
                            type='primary'
                            className={`bg-[#dde6ed] border-none shadow-none h-[40px] rounded-b-none rounded-t-none ${!showCard ? 'rounded-bl-2xl' : ''} flex justify-start`}
                            onClick={() => scrollToBody(refBtn2)}
                        >
                            <div className='flex text-[20px]  items-center '>
                                <span className="hidden group-hover:block text-[13px]"> LIÊN HỆ </span>
                                <CiMail className='fixed right-3' />
                            </div>
                        </Button>

                        {showCard && (
                            <Button
                                type='primary'
                                className='bg-[#dde6ed] border-none shadow-none rounded-bl-2xl rounded-t-none rounded-br-none h-[40px] flex justify-start'
                                onClick={() => scrollToBody(refBtn3)}
                            >
                                <div className='flex text-[20px]  items-center '>
                                    <span className="hidden group-hover:block text-[13px] justify-start"> ĐẦU TRANG </span>
                                    <IoMdArrowUp className='fixed right-3' />
                                </div>
                            </Button>
                        )}
                    </ConfigProvider>

                </div>
            </div>
        </div>
    );
}

export default About;
