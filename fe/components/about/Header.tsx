import logo from '../../public/img/header/logo.svg'
import Image from "next/image"
import { FiPhoneCall } from "react-icons/fi";
import appStore from '../../public/img/header/App-Store.svg'
import chPlay from '../../public/img/header/Play-Store.svg'
import vn from '../../public/img/header/image3.png'
import type { MenuProps } from 'antd'
import { Button, Dropdown } from 'antd'

const items: MenuProps['items'] = [
    {
        key: 1,
        label:
            <div className="flex items-center">
                <div >
                    <Image
                        width={40}
                        src={vn}
                        alt="" />
                </div>
                <div className="ml-4">
                    Việt Nam
                </div>
            </div>
    },
    {
        key: 2,
        label:
            <div className="flex items-center">
                <div >
                    <Image
                        width={40}
                        src={vn}
                        alt="" />
                </div>
                <div className="ml-4">
                    Việt Nam
                </div>
            </div>
    },
    {
        key: 3,
        label:
            <div className="flex items-center">
                <div >
                    <Image
                        width={40}
                        src={vn}
                        alt="" />
                </div>
                <div className="ml-4">
                    Việt Nam
                </div>
            </div>
    },
]


export const Headers = () => {
    return (
        <div className="w-full h-[65px] fixed top-0 bg-white z-99 shadow">
            <div className='flex justify-between px-72 items-center h-full'>
                <div className="items-center">
                    <Image
                        width={80}
                        src={logo}
                        alt=""
                    />
                </div>
                <div className='flex items-center gap-4'>
                    <div>
                        <Image
                            width={100}
                            src={appStore}
                            alt=""
                        />
                    </div>
                    <div>
                        <Image
                            width={100}
                            src={chPlay}
                            alt=""
                        />
                    </div>
                    <div>
                        <Button
                            type='primary'
                            className='text-[14px] font-semibold'
                        >
                            Trải nghiệm
                        </Button>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                            <FiPhoneCall />
                        </div>
                        <div className='flex justify-center text-[13px] font-semibold'>
                            Liên hệ với chúng tôi
                            <br />
                            +(84) 246 329 5589
                        </div>
                    </div>
                    <div>
                        <Dropdown
                            menu={{ items }}
                            placement="bottomRight"
                            arrow
                        >
                            <Image
                                width={40}
                                src={vn}
                                alt=''
                            />
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    )
}