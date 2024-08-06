

import { Avatar, Button, Form, Input, Select, Tag } from "antd";
import type { FormProps, SelectProps } from "antd";



type TagRender = SelectProps['tagRender'];

interface ProfileProps {
    fullName: string,
    username: string,
    email: string,
    phone: number,
    group: Array<string>,
    position: Array<string>
}


const options: SelectProps['options'] = [
    { value: 'gold' },
    { value: 'lime' },
    { value: 'green' },
    { value: 'cyan' },
];

const tagRender: TagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };
    return (
        <Tag
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{ marginInlineEnd: 4 }}
        >
            {label}
        </Tag>
    );
};


export const ProfileAccount = () => {

    const [form] = Form.useForm<ProfileProps>();

    const onFinish: FormProps<ProfileProps>['onFinish'] = async (value: ProfileProps) => {
        console.log(value);

    }
    const onFinishFailed: FormProps<ProfileProps>['onFinishFailed'] = () => {
        console.log('Error');

    }

    return (

        <div className="mt-[5%] pb-10">
            <p className="text-[28px] font-medium pb-[3%]">Thông tin tài khoản</p>
            <div className="border w-[769px] rounded-2xl">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-[10rem] rounded-t-2xl">
                    <Avatar
                        className="bg-gradient-to-r from-purple-800 to-fuchsia-600 relative top-[60px] left-10 !text-[100px]"
                        size={200}
                    >
                        11
                    </Avatar>
                </div>
                <Form
                    layout="vertical"
                    name="profile"
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    className="mt-[9rem] px-8"
                >

                    <Form.Item<ProfileProps>
                        name='fullName'
                        label={<div className="text-[16px] text-[#242424] font-semibold">Họ và tên</div>}
                    >
                        <Input defaultValue={'fullName'} className="h-[42px]" />
                    </Form.Item>
                    <Form.Item<ProfileProps>
                        name='username'
                        label={<div className="text-[16px] text-[#242424] font-semibold">Tên tài khoản</div>}
                    >
                        <Input defaultValue={'usename'} className="h-[42px]" disabled />
                    </Form.Item>
                    <Form.Item<ProfileProps>
                        name='email'
                        label={<div className="text-[16px] text-[#242424] font-semibold">Email</div>}
                    >
                        <Input defaultValue={'Email'} disabled className="h-[42px]" />
                    </Form.Item>
                    <Form.Item<ProfileProps>
                        name='phone'
                        label={<div className="text-[16px] text-[#242424] font-semibold">Số điện thoại</div>}
                    >
                        <Input placeholder="Số điện thoại" className="h-[42px]" />
                    </Form.Item>
                    <Form.Item<ProfileProps>
                        name='group'
                        label={<div className="text-[16px] text-[#242424] font-semibold">Nhóm</div>}
                    >
                        <Select
                            mode="multiple"
                            tagRender={tagRender}
                            defaultValue={['Chưa có nhóm']}
                            style={{ width: '100%' }}
                            options={options}
                            disabled
                            className="h-[42px]"
                        />
                    </Form.Item>
                    <Form.Item<ProfileProps>
                        name='position'
                        label={<div className="text-[16px] text-[#242424] font-semibold">Chức vụ</div>}
                    >
                        <Select
                            mode="multiple"
                            tagRender={tagRender}
                            defaultValue={['Chưa có chức vụ']}
                            style={{ width: '100%' }}
                            options={options}
                            disabled
                            className="h-[42px]"
                        />
                    </Form.Item>
                    <Form.Item
                        className="flex justify-end"

                    >
                        <Button
                            type='primary'
                            htmlType="submit"
                            className="h-[50px]"
                        >
                            Lưu chỉnh sửa
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}