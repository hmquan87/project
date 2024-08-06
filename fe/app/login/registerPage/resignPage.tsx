'use client';


import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { Form, message, Input, Button } from "antd";
import type { FormProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '@/redux/store';
import { registerAction, clearSuccess } from '@/redux/slices/registerSlice';
import { GoArrowLeft } from "react-icons/go";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import { log } from 'console';

interface TypeResign {
    fullName: string;
    username: string;
    password: string;
    email: string;
    confirmPass: string;
}
interface OTP {
    otp: number;
}

interface ResignPageProps {
    setCheckKey: Dispatch<SetStateAction<string>>;
}

const ResignPage: React.FC<ResignPageProps> = ({ setCheckKey }) => {

    const dispatch = useDispatch<AppDispatch>();
    const isVerify = useSelector((state: RootState) => state.register.isVerify);


    const [form] = Form.useForm<TypeResign>();
    const [formOTP] = Form.useForm<OTP>();
    const [email, setEmail] = useState<string>('');

    useEffect(() => {
        if (isVerify) {
            message.success('OK')
            // dispatch(clearSuccess());
        } else if (isVerify !== null) message.error('Error')

    }, [dispatch, isVerify])

    const onFinish: FormProps<TypeResign>['onFinish'] = async (value) => {
        console.log(value);
        setEmail(value.email)
        try {
            const res = await axios.post('https://dev.mys.tinasoft.com.vn/api/v1/auth/send-otp', {
                email: email,
                prefix: "https://tinamys.com/confirm-otp"
            }, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            console.log('datares: ', res.data);
            await dispatch(registerAction(value))
        } catch (error) {

        }
       

        setSubOTP(true)


    }

    const onFinishFailed: FormProps<TypeResign>['onFinishFailed'] = () => {
        message.error('Error!')
    }

    const onFinishOTP: FormProps<OTP>['onFinish'] = async (values) => {
        try {
            const res = await axios.post('https://dev.mys.tinasoft.com.vn/api/v1/auth/verify-otp', {
                otp: values.otp,
                email: email
            })
            console.log(res.data);

        } catch (error) {
            console.log('Error');

        }
        console.log('ok');

    }
    const onFinishFailedOTP: FormProps<OTP>['onFinishFailed'] = () => {
        console.log('false');

    }
    // const handleClick = async () => {
    //     try {
    //         const res = await axios.post('https://dev.mys.tinasoft.com.vn/api/v1/auth/send-otp', {
    //             email: email,
    //             prefix: "https://tinamys.com/confirm-otp"
    //         }, {
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         console.log('datares: ', res.data);

    //     } catch (error) {

    //     }
    // }

    // const onFinish1: FormProps<OTP>['onFinish'] = async (values) => {
    //     try {
    //         const res = await axios.post('https://dev.mys.tinasoft.com.vn/api/v1/auth/verify-otp', {
    //             otp: values.otp,
    //             email: email
    //         })
    //         console.log(res.data);

    //     } catch (error) {
    //         console.log('Error');

    //     }
    // }
    const [subOTP, setSubOTP] = useState<boolean>(false);
    const [capVal, setCapVal] = useState<string | null>(null);

    return (
        <div>
            <div className='absolute top-[5%] left-[3%]'>
                <div
                    className='flex justify-center items-center border rounded-full h-[60px] w-[60px] text-[30px] bg-white'
                    onClick={() => setCheckKey('login')}
                >
                    <GoArrowLeft />
                </div>
            </div>
            {!subOTP &&
                <Form
                    layout="vertical"
                    name='resign'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    form={form}
                >
                    <div className='text-center'>
                        <p className='text-[48px] font-medium text-[#000] '>ĐĂNG KÝ</p>
                        <p className='text-[18px] text-[#2B2B2B80] font-medium mb-10'>Hoàn thành các thông tin chi tiết dưới đây</p>
                    </div>
                    <Form.Item<TypeResign>
                        name='fullName'
                        label={<span className='text-[#242424] font-semibold text-[16px]'>Họ và tên</span>}
                        rules={[{ required: true, message: 'Email hoặc tên tài khoản không được để trống' }]}
                    >
                        <Input className='h-[48px]' placeholder='Họ và tên' />
                    </Form.Item>
                    <Form.Item<TypeResign>
                        name='username'
                        label={<span className='text-[#242424] font-semibold text-[16px]'>Tên tài khoản</span>}
                    >
                        <Input className='h-[48px]' placeholder='Tên tài khoản' />
                    </Form.Item>
                    <Form.Item<TypeResign>
                        name='email'
                        label={<span className='text-[#242424] font-semibold text-[16px]'>Email</span>}
                        rules={[{ required: true, message: 'Email hoặc tên tài khoản không được để trống' }]}
                    >
                        <Input className='h-[48px]' placeholder='Email' />
                    </Form.Item>
                    <Form.Item<TypeResign>
                        name='password'
                        label={<span className='text-[#242424] font-semibold text-[16px]'>Mật khẩu</span>}
                        rules={[{ required: true, message: 'Email hoặc tên tài khoản không được để trống' }]}
                    >
                        <Input.Password className='h-[48px]' placeholder='Mật khẩu' />
                    </Form.Item>
                    <Form.Item<TypeResign>
                        name='confirmPass'
                        label={<span className='text-[#242424] font-semibold text-[16px]'>Nhập lại mật khẩu</span>}
                        rules={[{ required: true, message: 'Email hoặc tên tài khoản không được để trống' }]}
                    >
                        <Input.Password className='h-[48px]' placeholder='Nhập lại mật khẩu' />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            className='w-[100%] h-[52px] text-[16px] font-semibold'
                            type='primary'
                            htmlType='submit'

                        >
                            Đăng ký
                        </Button>
                    </Form.Item>

                    <div className='flex justify-center text-[14px] text-[#2B2B2B]'>
                        Bạn đã có tài khoản?
                        <span
                            className='ml-1 text-[#0B3A82] font-semibold'
                            onClick={() => setCheckKey('login')}
                        >
                            Đăng nhập ngay
                        </span>
                    </div>

                </Form>
            }
            {subOTP &&
                <Form
                    layout='vertical'
                    name='otp'
                    form={formOTP}
                    onFinish={onFinishOTP}
                    onFinishFailed={onFinishFailedOTP}
                >
                    <div className=''>
                        <p className=' text-center text-[48px] font-medium text-[#000] '>Nhập mã OTP</p>
                        <p className=' text-[18px] text-[#2B2B2B80] font-medium mb-10'>Chúng tôi vừa gửi mã xác minh gồm 4 chữ số <br /> đến email: {email}</p>
                    </div>
                    <Form.Item<OTP>
                        name='otp'
                        label={<span className='text-[#242424] font-semibold text-[16px]'>Nhập lại OTP</span>}
                        rules={[{ required: true, message: 'Email hoặc tên tài khoản không được để trống' }]}
                    >
                        <Input className='h-[48px]' placeholder='Nhập mã OTP' />
                    </Form.Item>
                    <div className='flex justify-end mb-6'>
                        <ReCAPTCHA
                            sitekey="6Le9pYUpAAAAAMvcugPnE59Kxj5wnzZf3mNw4bfH"
                            onChange={(val) => setCapVal(val)}
                        />
                    </div>
                    <Form.Item>
                        <Button
                            className='w-[100%] h-[52px] text-[16px] font-semibold'
                            type='primary'
                            htmlType='submit'

                        >
                            Tiếp tục
                        </Button>
                    </Form.Item>
                </Form>
            }
        </div>
    )
}

export default ResignPage;


