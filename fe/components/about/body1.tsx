
import { Button, ConfigProvider } from "antd";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import Image from 'next/image'
import img from '@/public/img/image-section-one.png'

export const Body1 = () => {
    return (
        <div className="bg-cover bg-center h-[90vh] mt-[66px] " style={{ backgroundImage: "url('/img/backgroundPage1_2.png')" }}>
            <div className="pt-[70px] text-[#001E4D]">
                <span className="flex justify-center text-[45px]">Thay đổi cách quản lý công việc</span>
                <span className="flex justify-center font-bold text-[55px]">Mapping Your Success</span>
            </div>
            <div className="flex justify-center ">
                <div className="grid gap-y-4 text-[#6B6B6B] font-semibold">
                    <span className="flex items-center text-[16px] font-medium gap-x-2 ">
                        <IoCheckmarkCircleSharp className="text-[#0070FF] text-[28px]" />
                        Quản lý mục tiêu của công ty, nhóm, nhân sự một cách dễ dàng và tiện lợi
                    </span>
                    <span className="flex items-center text-[16px] font-medium gap-2">
                        <IoCheckmarkCircleSharp className="text-[#0070FF] text-[28px]" />
                        Cho phép lập mục tiêu theo chu kì năm, quý, tháng, tuần
                    </span>
                    <span className="flex items-center text-[16px] font-medium gap-2">
                        <IoCheckmarkCircleSharp className="text-[#0070FF] text-[28px]" />
                        Quản lý checkin tiến độ mục tiêu, dự án của công ty, nhóm
                    </span>
                    <span className="flex items-center text-[16px] font-medium gap-2">
                        <IoCheckmarkCircleSharp className="text-[#0070FF] text-[28px]" />
                        Tự động nhắc việc và thông báo đến những người liên quan
                    </span>
                </div>
            </div>
            <div className=" items-center gap-3 text-center mt-8">
                <span>
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: `#FF6C44`,
                                    colorPrimaryHover: `#FF6C44`,
                                    colorPrimaryActive: `#FF6C44`,
                                    lineWidth: 0,
                                },
                            },
                        }}
                    >
                        <Button
                            type="primary"
                            className="rounded-full mr-2 h-[42px]"
                        >
                            <IoEyeOutline className="" />
                            Xem Profile
                        </Button>
                    </ConfigProvider>
                </span>
                <span>
                    <Button
                        type="primary"
                        className="rounded-full h-[42px]"
                    >
                        Trải nghiệm ngay!
                    </Button>
                </span>
            </div>
            <div className="flex justify-center">
                <Image
                    width={1400}
                    src={img}
                    alt=""
                // className="hover:scale-105 transition-transform duration-300 ease-in-out"
                />
            </div>
        </div>
    );
};