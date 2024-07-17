import style from '@/styles/Footer.module.scss';
import circle from '@/public/img/footer/circle.svg'
import Image from 'next/image';
import shape1 from '@/public/img/footer/footer-shape-1.90833e24.svg';
import shape2 from '@/public/img/footer/footer-shape-2.7000b5e2.svg';
import shape3 from '@/public/img/footer/footer-shape-3.c07b7ca6.svg';
import logo from '@/public/img/header/logo.svg'
import { Button, ConfigProvider } from 'antd';
import type { ButtonProps } from 'antd';


const CustomButton: React.FC<ButtonProps> = (props) => {
    return <Button {...props} />;
};

export const Footers = () => {

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
                {/* <div className='absolute top-[-50%] left-[-5%]'>
                    <Image
                        width={450}
                        src={shape1}
                        alt=''
                    />
                </div>
                <div className='absolute top-[-50%] left-[-5%]'>
                    <Image
                        width={450}
                        src={shape2}
                        alt=''
                    />
                </div>
                <div className='absolute'>
                    <Image
                        width={450}
                        src={shape3}
                        alt=''
                    />
                </div> */}
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
                            <p>
                                Email: contact@tinasoft.vn
                            </p>
                            <p>
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
                            <p className='mb-2'>
                                Giới thiệu
                            </p>
                            <p>
                                Tính năng
                            </p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='py-7 text-[25px] font-bold text-white'>
                            Solution
                        </div>
                        <div className='text-[#FFFFFFD9] text-[14px]'>
                            <p >
                                Đăng ký
                            </p>
                            <p className='my-2'>
                                Faqs
                            </p>
                            <p>
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
                                <Button type="primary">Custom Button</Button>
                            </ConfigProvider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}