'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Form, Input, message } from 'antd';
import type { FormProps } from 'antd';
import { loginAction, clearSuccess } from '../../redux/slices/loginSlice';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';




interface typeLogin {
    username: string;
    password: string;
}

const Login: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { success, error } = useSelector((state: RootState) => state.login);
    const [form] = Form.useForm<typeLogin>();
    const router = useRouter();

    useEffect(() => {
        if (success) {
            console.log(success, error);   
            message.success('Success')
            dispatch(clearSuccess());
        }
        if (error) {
            console.log(success, error);
            message.error(error);
        }
    }, [success, error, dispatch, router]);

    const onFinish: FormProps<typeLogin>['onFinish'] = async (values) => {
        await dispatch(loginAction(values));
    };

    const onFinishFailed: FormProps<typeLogin>['onFinishFailed'] = () => {
        message.error('Submit Error!');
    };

    return (
        <div className='px-[200px] mt-[100px]'>
            <Form
                name='login'
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={form}
            >
                <Form.Item<typeLogin>
                    name='username'
                    label='Username'
                    rules={[{ required: true, message: 'Username rỗng' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<typeLogin>
                    name='password'
                    label='Password'
                    rules={[{ required: true, message: 'Password rỗng' }]}
                >
                    <Input type='password' />
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
};

export default Login;
