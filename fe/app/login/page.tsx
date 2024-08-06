'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Form, Input, message, notification } from 'antd';
import type { FormProps } from 'antd';
import { loginAction, clearSuccess } from '../../redux/slices/loginSlice';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import styles from '@/styles/login.module.scss'
import Image from 'next/image';
import gg from '@/public/img/google.png'
import face from '@/public/img/face.png'
import logo from '@/public/img/header/logo.svg'
import ResignPage from './registerPage/resignPage'

interface typeLogin {
    emailOrUsername: string;
    password: string;
}



const Login: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const success = useSelector((state: RootState) => state.login.success);
    const error = useSelector((state: RootState) => state.login.error);
    const accessToken = useSelector((state: RootState) => state.login.accessToken)
    const [form] = Form.useForm<typeLogin>();
    const router = useRouter();

    const [checkKey, setCheckKey] = useState<string>('login')

    console.log('test: ', accessToken);
    

    const onFinish: FormProps<typeLogin>['onFinish'] = async (values) => {
        await dispatch(loginAction(values));
         if (success) {
            message.success('Success');
            dispatch(clearSuccess());
            router.push('/homeLocal')
        } else if (error) {
            message.error(error);
        }
    };

    const onFinishFailed: FormProps<typeLogin>['onFinishFailed'] = () => {
        message.error('Submit Error!');
    };

    return (

        <div className={styles.customBg}>
            <div className='absolute right-4 top-3'>
                <Image width={100} src={logo} alt='' />
            </div>
            <div className='flex justify-center'>
                <div className=' w-[75%] flex items-center h-screen'>
                    <div className='flex justify-evenly  gap-x-32'>
                        <div className='bg-white px-10 py-10 rounded-xl shadow-sm'>
                            {checkKey === 'login' &&
                                <Form
                                    layout="vertical"
                                    name='login'
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    form={form}
                                >
                                    <div className='text-center'>
                                        <p className='text-[48px] font-medium text-[#000] '>Đăng nhập</p>
                                        <p className='text-[18px] text-[#2B2B2B80] font-medium mb-10'>Hoàn thành các thông tin chi tiết dưới đây</p>
                                    </div>
                                    <Form.Item<typeLogin>
                                        name='emailOrUsername'
                                        label={<span className='text-[#242424] font-semibold text-[16px]'>Email hoặc tên tài khoản</span>}
                                        rules={[{ required: true, message: 'Email hoặc tên tài khoản không được để trống' }]}
                                    >
                                        <Input className='h-[48px]' placeholder='Email hoặc tên tài khoản' />
                                    </Form.Item>
                                    <Form.Item<typeLogin>
                                        name='password'
                                        label={<span className='text-[#242424] font-semibold text-[16px]'>Mật khẩu</span>}
                                        rules={[{ required: true, message: 'Mật khẩu không được để trống' }]}
                                    >
                                        <Input.Password className='h-[48px]' placeholder='Mật khẩu' />
                                    </Form.Item>
                                    <span className='flex justify-end mt-[-2%] mb-[5%] text-[14px] text-[#2B2B2B] font-semibold'>
                                        Quên mật khẩu?
                                    </span>
                                    <Form.Item>
                                        <Button className='w-[100%] h-[52px] text-[16px] font-semibold' type='primary' htmlType='submit'>
                                            Đăng nhập
                                        </Button>
                                    </Form.Item>
                                    <div className='grid space-y-4'>
                                        <div className='flex w-[100%] h-[52px] justify-center items-center border border-gray-300 rounded-lg text-[16px] text-[#2B2B2B] font-semibold'>
                                            <Image width={20} src={gg} alt='' /> <span className='ml-2'>Đăng nhập với Google</span>
                                        </div>
                                        <div className='flex w-[100%] h-[52px] justify-center items-center border border-gray-300 rounded-lg text-[16px] text-[#2B2B2B] font-semibold'>
                                            <Image width={20} src={face} alt='' /> <span className='ml-2'>Đăng nhập với Facebook</span>
                                        </div>
                                        <div className='flex justify-center text-[14px] text-[#2B2B2B]'>
                                            Bạn chưa có tài khoản?
                                            <span
                                                className='ml-1 text-[#0B3A82] font-semibold'
                                                onClick={() => setCheckKey('resign')}
                                            >
                                                Đăng ký ngay
                                            </span>
                                        </div>
                                    </div>
                                </Form>
                            }
                            {checkKey === 'resign' &&
                                <ResignPage setCheckKey={setCheckKey} />

                            }
                        </div>
                        <div className='h-[100%] 2xl:text-[110px] md:text-[78px] text-[#1b3185cc] font-bold'>
                            Mapping Your <br />
                            Success
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;
