'use client';


import type { CSSProperties } from 'react';
import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import styles from '@/styles/body6.module.scss'
import Image from 'next/image';
import bg10 from '@/public/img/icon-bg-ten.89fbfafa.svg'

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
    {
        key: '1',
        label:
            <div className='py-2 text-[#0E1133] text-[16px] font-bold pl-5'>
                MYS có dễ dàng sử dụng không?
            </div>
        ,
        children:
            <div className='px-5'>
                Ứng dụng hoàn toàn thân thiện với người dùng, các tính năng được bố trí rõ ràng, logic giúp người dùng dễ dàng tương tác. Đội ngũ hỗ trợ 24/7 sẵn sàng giải đáp mọi thắc mắc của người dùng.
            </div>
        ,
        style: panelStyle,
    },
    {
        key: '2',
        label:
            <div className='py-2 text-[#0E1133] text-[16px] font-bold pl-5'>
                MYS có trên những nền tảng nào?
            </div>
        ,
        children:
            <div className='px-5'>
                MYS đã sẵn sàng được sử dụng trên web và có mặt tại ứng dụng Android & IOS.
            </div>
        ,
        style: panelStyle,
    },
];
const getItems1: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
    {
        key: '1',
        label:
            <div className='py-2 text-[#0E1133] text-[16px] font-bold pl-5'>
                Tính năng chính của MYS?
            </div>
        ,
        children:
            <div className='px-5'>
                Xác lập, quản lý mục tiêu, người tham gia và dễ dàng theo dõi tiến độ, nhận thông báo mỗi khi có cập nhật, can thiệp kịp thời.
            </div>
        ,
        style: panelStyle,
    },
    {
        key: '2',
        label:
            <div className='py-2 text-[#0E1133] text-[16px] font-bold pl-5'>
                Những ưu điểm của MYS?
            </div>
        ,
        children:
            <div className='px-5'>
                Dễ sử dụng và tiện lợi, hỗ trợ trên mọi nền tảng, chi phí thấp, hiệu quả sử dụng cao và được hỗ trợ công nghệ AI
            </div>
        ,
        style: panelStyle,
    },
];

export const Body6 = () => {

    const panelStyle: React.CSSProperties = {
        marginBottom: 24,
        border: 'none',
    };
    return (
        <div className='bg-slate-100'>
            <div className='text-[#0E1133] text-[39px] font-black text-center pt-24 pb-16'>
                Những câu hỏi về MYS
            </div>
            <div className='flex flex-row gap-x-10 px-40 py-5'>
                <div className='basis-1/2'>
                    <Collapse
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={
                            ({ isActive }) =>
                                < RightOutlined
                                    rotate={isActive ? 90 : 0}
                                    style={{
                                        fontSize: '19px',
                                        background: isActive ? '#2A6DF5' : '#EEF4FE',
                                        borderRadius: '99px',
                                        padding: '10px',
                                        color: isActive ? '#EEF4FE' : '#2A6DF5'
                                    }}
                                />
                        }
                        items={getItems(panelStyle)}
                        expandIconPosition='end'
                        className={styles.custom}
                    />
                </div>
                <div className='basis-1/2'>
                    <Collapse
                        bordered={false}
                        defaultActiveKey={['2']}
                        expandIcon={
                            ({ isActive }) =>
                                < RightOutlined
                                    rotate={isActive ? 90 : 0}
                                    style={{
                                        fontSize: '19px',
                                        background: isActive ? '#2A6DF5' : '#EEF4FE',
                                        borderRadius: '99px',
                                        padding: '10px',
                                        color: isActive ? '#EEF4FE' : '#2A6DF5'
                                    }}
                                />
                        }
                        items={getItems1(panelStyle)}
                        expandIconPosition='end'
                        className={styles.custom}
                    />
                </div>

            </div>
            <div className='text-center'>
                Chưa thể giải đáp những thắc mắc? <span className='text-[#007BFF]'>Liên hệ với chúng tôi</span>
            </div>
            <div className='flex justify-end mr-24'>
                <Image
                    src={bg10}
                    alt=''
                />
            </div>
        </div>
    );
};

