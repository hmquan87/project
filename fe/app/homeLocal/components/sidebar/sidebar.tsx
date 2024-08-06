'use client';



import React, { useState } from 'react';
import { Button, Menu, Modal, Tooltip } from 'antd';
import { SlArrowLeft } from "react-icons/sl";
import styles from './sidebar.module.scss';
import iconHome from '@/public/img/sidebar/iconHome.svg'
import companyGoal from '@/public/img/sidebar/iconMuctieu.svg'
import personGoal from '@/public/img/sidebar/iconMuctieu1.svg'
import calendar from '@/public/img/sidebar/iconLich.svg'
import addBanner from '@/public/img/sidebar/addBanner.svg'
import Image from 'next/image';
import { MdOutlineAddBox } from "react-icons/md";
import AddSpaceModal from './Modal/AddSpaceModal';



const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const [keySelect, setKeySelect] = useState<string>('1')
    const handleKey = (e: any) => {
        setKeySelect(e.key)
    }
    console.log(keySelect);

    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <div className="relative h-full flex flex-col">
            <div className="grow">

                <Menu
                    mode="inline"
                    inlineCollapsed={false}
                    className={`h-full !border-r !border-gray-300 transition-all duration-300  ${collapsed ? 'w-16' : 'w-60'} ${styles.custom}`}
                    style={{ overflow: 'hidden' }}
                    expandIcon={null}
                    selectable={true}
                    onClick={(e) => handleKey(e)}
                >
                    {/* <SubMenu
                        key={'sub'}
                        icon={<div> he </div>}
                        title='sub'
                        className={`${styles.customSub}`}
                    >
                        
                        <Menu.Item
                            key={'1'}
                            icon={<AppstoreOutlined />}
                        >
                            helo
                        </Menu.Item>
                    </SubMenu> */}
                    {collapsed ?
                        <Tooltip placement="right" title={'Trang chủ'} >
                            <Menu.Item
                                key={'1'}
                                icon={<Image width={23} src={iconHome} alt='' />}
                                className={`${keySelect === '1' ? 'border-r-2 border-blue-600 !bg-gray-100' : null} !rounded-none !text-black !w-[98%]`}

                            >

                                Trang chủ
                            </Menu.Item>
                        </Tooltip>
                        :
                        <Menu.Item
                            key={'1'}
                            icon={<Image width={23} src={iconHome} alt='' />}
                            className={`${keySelect === '1' ? 'border-r-2 border-blue-600 !bg-gray-100' : null} !rounded-none !text-black !w-[98%]`}

                        >

                            Trang chủ
                        </Menu.Item>
                    }
                    {collapsed ?
                        <Tooltip placement="right" title={'Mục tiêu công ty'} >
                            <Menu.Item
                                key={'2'}
                                icon={<Image width={23} src={companyGoal} alt='' />}
                                className={`${keySelect === '2' ? 'border-r-2 border-blue-600 !bg-gray-100' : null} !rounded-none !text-black !w-[98%]`}
                            >
                                Mục tiêu công ty
                            </Menu.Item>
                        </Tooltip>
                        :
                        <Menu.Item
                            key={'2'}
                            icon={<Image width={23} src={companyGoal} alt='' />}
                            className={`${keySelect === '2' ? 'border-r-2 border-blue-600 !bg-gray-100' : null} !rounded-none !text-black !w-[98%]`}
                        >
                            Mục tiêu công ty
                        </Menu.Item>
                    }
                    {collapsed ?
                        <Tooltip placement="right" title={'Mục tiêu cá nhân'} >
                            <Menu.Item
                                key={'3'}
                                icon={<Image width={23} src={personGoal} alt='' />}
                                className={`${keySelect === '3' ? 'border-r-2 border-blue-600 !bg-gray-100' : null} !rounded-none !text-black !w-[98%]`}
                            >
                                Mục tiêu cá nhân
                            </Menu.Item>
                        </Tooltip>
                        :
                        <Menu.Item
                            key={'3'}
                            icon={<Image width={23} src={personGoal} alt='' />}
                            className={`${keySelect === '3' ? 'border-r-2 border-blue-600 !bg-gray-100' : null} !rounded-none !text-black !w-[98%]`}
                        >
                            Mục tiêu cá nhân
                        </Menu.Item>
                    }
                    {collapsed ?
                        <Tooltip placement="right" title={'Lịch'} >
                            <Menu.Item
                                key={'4'}
                                icon={<Image width={23} src={calendar} alt='' />}
                                className={`${keySelect === '4' ? 'border-r-2 border-blue-600 !bg-gray-100' : null} !rounded-none !text-black !w-[98%]`}
                            >
                                Lịch làm việc
                            </Menu.Item>
                        </Tooltip>
                        :
                        <Menu.Item
                            key={'4'}
                            icon={<Image width={23} src={calendar} alt='' />}
                            className={`${keySelect === '4' ? 'border-r-2 border-blue-600 !bg-gray-100' : null} !rounded-none !text-black !w-[98%]`}
                        >
                            Lịch làm việc
                        </Menu.Item>
                    }

                    {collapsed ?
                        <Tooltip placement="right" title={`Tạo không gian làm việc`}  >
                            <Menu.Item
                                key={'add'}
                                icon={collapsed ? <MdOutlineAddBox onClick={() => setOpenModal(true)} className='!text-[25px] !text-[#0070FF]' /> : null}
                                className={`!absolute !bottom-3  
                            ${collapsed ?
                                        null :
                                        '!h-[250px] !w-[89%] !ml-3 border border-blue-400'
                                    }`}
                            >
                                <div className='flex flex-col justify-center text-center'>
                                    <div className='flex justify-center'>
                                        <Image src={addBanner} alt='' />
                                    </div>
                                    <div className='leading-none pt-2 pb-4'>
                                        Bạn chưa có không gian làm <br /> việc
                                    </div>
                                    <div>
                                        <Button
                                            type='primary'
                                            onClick={() => setOpenModal(true)}
                                        >
                                            Tạo ngay nào
                                        </Button>
                                    </div>
                                </div>
                            </Menu.Item>
                        </Tooltip>
                        :
                        <Menu.Item
                            key={'add'}
                            icon={collapsed ? <MdOutlineAddBox onClick={() => setOpenModal(true)} className='!text-[25px] !text-[#0070FF]' /> : null}
                            className={`!absolute !bottom-3  
                            ${collapsed ?
                                    null :
                                    '!h-[250px] !w-[89%] !ml-3 border border-blue-400'
                                }`}
                        >
                            <div className='flex flex-col justify-center text-center'>
                                <div className='flex justify-center'>
                                    <Image src={addBanner} alt='' />
                                </div>
                                <div className='leading-none pt-2 pb-4'>
                                    Bạn chưa có không gian làm <br /> việc
                                </div>
                                <div>
                                    <Button
                                        type='primary'
                                        onClick={() => setOpenModal(true)}
                                    >
                                        Tạo ngay nào
                                    </Button>
                                </div>
                            </div>
                        </Menu.Item>
                    }

                </Menu>
            </div>
            <button
                onClick={toggleCollapsed}
                className='absolute top-28 right-[-23px] z-50 bg-white w-[45px] h-[45px] border rounded-full flex justify-center text-[20px] items-center'
            >
                <SlArrowLeft className={`transition-transform ${collapsed ? 'rotate-180' : ''} duration-300 ease-in-out`} />
            </button>
            <AddSpaceModal onOpenModal={openModal} onCloseModal={() => setOpenModal(false)} />
        </div>
    );
}

export default Sidebar;