'use client';


import { Form, message, Input, Button } from "antd";
import type { FormProps } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from '../../redux/store';
import { registerAction, clearSuccess } from '../../redux/slices/registerSlice';


interface Register {
    fullName: string
    email: string
    username: string
    password: string
    againPW: string
}

interface otp {
    otp: string;
}

const Register: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const isVerify = useSelector((state: RootState) => state.register.isVerify);


    const [form] = Form.useForm<Register>();
    const [value, setValue] = useState<string>();

    console.log(isVerify);
    useEffect(() => {
        if (isVerify) {
            message.success('OK')
            // dispatch(clearSuccess());
        } else if (isVerify !== null) message.error('Error')

        console.log(isVerify);

    }, [dispatch, isVerify])

    const onFinish: FormProps<Register>['onFinish'] = async (values: Register) => {
        dispatch(registerAction(values))
    }

    console.log(value);

    const onFinishFailed: FormProps<Register>['onFinishFailed'] = () => {
        message.error('Error!')
    }
    // const handleClick = async () => {
    //     try {
    //         const res = await axios.post('https://dev.mys.tinasoft.com.vn/api/v1/auth/send-otp', {
    //             email: value,
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

    // const onFinish1: FormProps<otp>['onFinish'] = async (values: otp) => {
    //     try {
    //         const res = await axios.post('https://dev.mys.tinasoft.com.vn/api/v1/auth/verify-otp', {
    //             otp: values.otp,
    //             email: value
    //         })
    //         console.log(res.data);

    //     } catch (error) {
    //         console.log('Error');

    //     }
    // }
    return (
        <div className="px-[200px] mt-[400px]">
            <Form
                form={form}
                name='register'
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item<Register>
                    label='Họ và tên'
                    name='fullName'
                    rules={[{
                        required: true,
                        message: 'Họ tên trống'
                    }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<Register>
                    label='Tên tài khoản'
                    name='username'
                    rules={[{
                        required: true,
                        message: 'Tên tài khoản trống'
                    }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<Register>
                    label='Email'
                    name='email'
                    rules={[{
                        required: true,
                        message: 'Email trống'
                    }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<Register>
                    label='Mật khẩu'
                    name='password'
                    rules={[{
                        required: true,
                        message: 'Mật khẩu trống'
                    }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<Register>
                    label='Nhập lại mật khẩu'
                    name='againPW'
                    rules={[{
                        required: true,
                        message: 'Mật khẩu nhập lại trống'
                    }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>



        </div>
    )
}

export default Register;


