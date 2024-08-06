'use client';

import logo from '@/public/img/header/logo.svg'
import { Avatar, Input, Dropdown, Tabs, Modal, Rate, Button, ConfigProvider } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import icon1 from '@/public/img/header/icon1.svg';
import icon2 from '@/public/img/header/icon2.svg';
import icon3 from '@/public/img/header/icon3.svg';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps, TabsProps } from 'antd';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import styles from './header.module.scss';
import { IoPersonCircleSharp } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { HiShoppingBag } from "react-icons/hi2";
import { useRouter } from 'next/navigation';
import EvaluateModal from './Modal/EvaluateModal';
import axios from 'axios';


interface TypeProps {
    setSelectComponent: React.Dispatch<React.SetStateAction<string>>;
}

const Headers: React.FC<TypeProps> = ({ setSelectComponent }) => {

    const router = useRouter();

    const onChange = (key: string) => {
        console.log(key);
    };

    const itemsTab: TabsProps['items'] = [
        {
            key: '1',
            label: 'Tất cả',
            // children: 'Content of Tab Pane 1',
        },
        {
            key: '2',
            label: 'Cá nhân',
        },
        {
            key: '3',
            label: 'Nhóm',
        },
        {
            key: '4',
            label: 'Công ty',
        },
        {
            key: '5',
            label: 'Hệ thống',
        },
    ];

    const items: MenuProps['items'] = [
        {
            label:
                <div className='flex gap-x-4 items-center border-b border-gray-300 px-4 py-4 !w-full text-[#565756]'>
                    <div>
                        <Avatar
                            size={50}
                            icon={<UserOutlined />}
                        />
                    </div>
                    <div>
                        abcxyz@gmail.com
                    </div>
                </div>
            ,
            key: '0',

        },
        {
            label: <div className='text-[16px] text-[#555555] pb-2'>Giới thiệu</div>,
            key: '1',
        },
        {
            label: <div className='text-[16px] text-[#555555] pb-2'>Thông tin tài khoản</div>,
            key: '2',
            onClick: () => setSelectComponent('profile-account')
        },
        {
            label: <div className='text-[16px] text-[#555555] pb-2'>Đánh giá</div>,
            key: '3',
            onClick: () => setModalEvaluate(true)

        },
        {
            label: <div className='text-[16px] text-[#555555] border-b border-gray-300 pb-3'>Chính sách quyền riêng tư</div>,
            key: '4',
        },
        {
            label: <div className='text-[16px] text-[#555555] pb-2'>Language</div>,
            key: '5',
        },
        {
            label: <div className='text-[16px] text-[#555555] pb-2'>Đổi mật khẩu</div>,
            key: '6',
        },
        {
            label: <div className='text-[16px] text-[#555555] pb-2'>Mã QR của tôi</div>,
            key: '7',
        },
        {
            label: <div className='text-[16px] text-[#555555] border-b border-gray-300 pb-3'>Danh sách liên hệ của tôi</div>,
            key: '8',
        },
        {
            label: <div className='text-[16px] text-[#555555] py-1'>Đăng xuất</div>,
            key: '9',
        },
    ];

    const items1: MenuProps['items'] = [
        {
            label:
                <div className='flex items-center justify-between border-b border-gray-300 py-2 !w-[400px]'>
                    <div className='text-[16px] text-[#555555]'>
                        Thông báo
                    </div>
                    <div className='flex items-center text-[#0070FF]'>
                        Đánh giấu tất cả đã đọc <IoIosCheckmarkCircleOutline size={17} className='ml-1' />
                    </div>
                </div>
            ,
            key: '0',
        },
        {
            label:
                <div className='text-[16px] text-[#555555] pb-2'>
                    <Tabs
                        defaultActiveKey="1"
                        items={itemsTab}
                        onChange={onChange}
                        className={styles.customTabs}
                    />
                </div>,
            key: '1',
        },
    ];

    const items2: MenuProps['items'] = [
        {
            label:
                <div className='flex items-center justify-center border-b border-gray-300 py-2 !w-[400px] text-[16px] text-[#555555]'>
                    Liên hệ trợ giúp
                </div>
            ,
            key: '0',
        },
        {
            label:
                <div className='flex items-center gap-x-3 px-5 py-6 bg-[#5a90ee1c]'>
                    <div>
                        <IoPersonCircleSharp size={25} className='text-[#0070FF]' />
                    </div>
                    <div>
                        Số điện thoại hỗ trợ
                    </div>
                </div>,
            key: '1',
        },
        {
            label:
                <div className='flex items-center gap-x-3 px-5 py-6 bg-[#5a90ee1c]'>
                    <div>
                        <SiMinutemailer size={25} className='text-[#0070FF]' />
                    </div>
                    <div>
                        Email
                    </div>
                </div>,
            key: '2',
        },
        {
            label:
                <div className='flex items-center gap-x-3 px-5 py-6 bg-[#5a90ee1c]'>
                    <div>
                        <HiShoppingBag size={25} className='text-[#0070FF]' />
                    </div>
                    <div>
                        Địa chỉ hỗ trợ
                    </div>
                </div>,
            key: '3',
        },
    ];

    const [click, setClick] = useState<boolean>(false)

    const [modalEvaluate, setModalEvaluate] = useState<boolean>(false);

    const handleClick = () => {
        setClick(!click)
    }

    const handleFetch = async () => {

        try {
            const res = await axios.get('https://dev.mys.tinasoft.com.vn/api/v1/users/me')
            console.log(res.data);

        } catch (error) {

        }

    }

    useEffect(() => {
        handleFetch();
    }, [])

    return (
        <div className="flex justify-between items-center h-full px-4">
            <div className='flex items-center'>
                <Image src={logo} alt='' />
            </div>
            <div className='flex justify-center items-center gap-x-3'>
                <div className='mr-1'>
                    <Input
                        prefix={<IoSearchSharp size={20} onClick={handleClick} />}
                        className={`${click ? 'w-[500px]' : 'w-0 transition-w duration-300 ease-in-out border-none'} `}
                        onBlur={() => setClick(false)}
                    />
                </div>
                <div>
                    <Image src={icon1} alt='' />
                </div>
                <div>
                    <Dropdown
                        trigger={['click']}
                        menu={{ items: items1 }}
                    >
                        <Image src={icon2} alt='' />
                    </Dropdown>
                </div>
                <div>
                    <Dropdown
                        trigger={['click']}
                        menu={{ items: items2 }}
                    >
                        <Image src={icon3} alt='' />
                    </Dropdown>
                </div>
                <div>
                    <Dropdown
                        menu={{ items }}
                        trigger={['click']}
                    >
                        <Avatar
                            size={30}
                            icon={<UserOutlined />}
                        />
                    </Dropdown>
                </div>
            </div>
            {/* Modal EvaluateModal */}
            <EvaluateModal onOpenModal={modalEvaluate} onCloseModal={() => setModalEvaluate(false)} />

        </div >
    )
}

export default Headers;
