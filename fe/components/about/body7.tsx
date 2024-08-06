'use client';

import React from 'react';
import contact from '@/public/img/contact.png'
import { Form, Button, Input, message } from 'antd';
import type { FormProps } from 'antd'
import Image from 'next/image'

const { TextArea } = Input;

interface TypeForm {
    name: string;
    numberPhone: number;
    email: string;
    message: string;
}

export const Body7 = () => {

    const [form] = Form.useForm();


    const onFinish: FormProps<TypeForm>['onFinish'] = (values) => {
        console.log(values);
    }

    const onFinishFailed: FormProps<TypeForm>['onFinishFailed'] = () => {
        console.log('error');

    }

    return (
        <div className='flex flex-row justify-center'>
            <div className='items-center ml-[10%]'>
                <Image
                    width={550}
                    src={contact}
                    alt=''
                />
            </div>
            <div className=''>
                <p className='text-[48px] font-bold pb-[5%]'>Liên hệ với chúng tôi</p>
                <Form
                    form={form}
                    name='contact'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ minWidth: 600 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <div className='flex gap-6'>
                        <Form.Item<TypeForm>
                            name='name'
                        >
                            <Input
                                className='h-[56px] min-w-[185px]'
                                placeholder='Họ và Tên*'
                            />
                        </Form.Item>
                        <Form.Item<TypeForm>
                            name='numberPhone'
                        >
                            <Input
                                className='h-[56px] min-w-[185px]'
                                placeholder='Số điện thoại*'
                            />
                        </Form.Item>
                    </div>
                    <Form.Item<TypeForm>
                        name='email'
                    >
                        <Input
                            className='h-[56px] w-[60vh]'
                            placeholder='Email*'
                        />
                    </Form.Item>
                    <Form.Item<TypeForm>
                        name='message'
                    >
                        <Input.TextArea
                            autoSize={{ minRows: 5, maxRows: 5 }}
                            placeholder='Lời nhắn*'
                            // className='w-[60vh]'
                            style={{ width: '90vh' }}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type='primary'
                            htmlType='submit'
                            className='h-[55px] px-[9%] font-semibold rounded-2xl'
                        >
                            Gửi tin nhắn
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}