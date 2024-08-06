
import { Avatar, Modal, Form, Input, Button, Select } from "antd"
import styles from './AddSpaceModal.module.scss'
import bannerAdd from '@/public/img/bannerModalAddNew.svg'
import Image from "next/image"
import { FaCamera } from "react-icons/fa";
import type { FormProps } from 'antd';



interface PropsModal {
    onOpenModal: boolean,
    onCloseModal: () => void
}

interface PropsForm {
    nameJob: string,
    website: string,
    typeJob: string,
    numberPhone: number,
    email: string,
    scaleCompany: string
}

interface PropsOptionSelect {
    value: string,
    label: string
}



const AddSpaceModal: React.FC<PropsModal> = ({ onOpenModal, onCloseModal }) => {

    const [form] = Form.useForm();

    const   onFinish: FormProps<PropsForm>['onFinish'] = async (value) => {
        console.log(value);

    }

    const onFinishFailed: FormProps<PropsForm>['onFinishFailed'] = () => {
        console.log('error');

    }

    const option: PropsOptionSelect[] = [
        {
            value: '1',
            label: 'Công ty'
        },
        {
            value: '2',
            label: 'Tổ chức'
        }
    ]

    const option1: PropsOptionSelect[] = [
        {
            value: '1',
            label: 'Nhỏ hơn 50 nhân sự'
        },
        {
            value: '2',
            label: 'Từ 50 đến 100 nhân sự'
        },
        {
            value: '3',
            label: 'Lớn hơn 100 nhân sự'
        }
    ]

    return (
        <Modal
            open={onOpenModal}
            footer={null}
            onCancel={onCloseModal}
            centered
            className={`${styles.customModal} !w-[792px]`}
            closable={false}
        >
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-[172px] rounded-t-lg">
                <Avatar
                    icon={<Image src={bannerAdd} alt="" />}
                    size={200}
                    className="border-white relative bottom-[-40%] left-[5%]"
                >

                </Avatar>
                <div className="absolute left-[24%] top-[225px] p-2 bg-slate-300 rounded-full">
                    <FaCamera size={25} className="" />
                </div>
            </div>
            <Form
                form={form}
                layout="vertical"
                name="addNew"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="mt-[15%] px-11 pb-2"
            >
                <div>
                    <p className="text-[32px] font-semibold">
                        Hãy xây dựng một không gian làm việc mới
                    </p>
                    <p className="text-[16px] font-normal mb-3">
                        Tăng năng suất công việc một cách tối đa nhất giúp mọi người dễ dàng truy cập cùng nhau.
                    </p>
                </div>
                <div className="flex gap-x-4">
                    <div className="w-full">
                        <Form.Item<PropsForm>
                            name='nameJob'
                            label={<div className="text-[16px] text-[#242424] font-semibold">Tên không gian làm việc</div>}
                            rules={[{ required: true, message: 'Tên không gian làm việc không thể trống' }]}
                        >
                            <Input className="h-[48px]" />
                        </Form.Item>
                        <Form.Item<PropsForm>
                            name='typeJob'
                            label={<div className="text-[16px] text-[#242424] font-semibold">Loại hình không gian làm việc</div>}
                            rules={[{ required: true, message: 'Loại hình không gian làm việc không thể trống' }]}
                        >
                            <Select
                                className="h-[48px]"
                                showSearch
                                optionFilterProp="label"
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={option}
                                defaultValue={{ value: '1', label: 'Công ty' }}
                            />
                        </Form.Item>
                        <Form.Item<PropsForm>
                            name='numberPhone'
                            label={<div className="text-[16px] text-[#242424] font-semibold">Số điện thoại</div>}
                            rules={[{ required: true, message: 'Số điện thoại không thể trống' }]}
                        >
                            <Input className="h-[48px]" />
                        </Form.Item>
                    </div>
                    <div className="w-full">
                        <Form.Item<PropsForm>
                            name='website'
                            label={<div className="text-[16px] text-[#242424] font-semibold">Website</div>}
                        >
                            <Input className="h-[48px]" />
                        </Form.Item>
                        <Form.Item<PropsForm>
                            name='email'
                            label={<div className="text-[16px] text-[#242424] font-semibold">Email</div>}
                        >
                            <Input className="h-[48px]" />
                        </Form.Item> <Form.Item<PropsForm>
                            name='scaleCompany'
                            label={<div className="text-[16px] text-[#242424] font-semibold">Quy mô nhân sự</div>}
                            rules={[{ required: true, message: 'Quy mô nhân sự không thể trống' }]}
                        >
                            <Select
                                className="h-[48px]"
                                allowClear
                                options={option1}
                                defaultValue={{ value: '1', label: 'Nhỏ hơn 50 nhân sự' }}
                            />
                        </Form.Item>
                    </div>

                </div>
                <Form.Item
                    className="flex justify-end"
                >
                    <Button
                        type="primary"
                        danger
                        className="text-[16px] font-semibold h-[48px]"
                    >
                        Hủy
                    </Button>
                    <Button
                        type="primary"
                        className="text-[16px] font-semibold h-[48px] ml-3"
                        htmlType="submit"
                    >
                        Tạo không gian làm việc
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}


export default AddSpaceModal;