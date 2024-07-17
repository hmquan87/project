import Image from "next/image"
import img1 from '@/public/img/image9.png'
import img2 from '@/public/img/image8.png'
import img3 from '@/public/img/image6.png'
import img4 from '@/public/img/image5.png'
import { IoMdCheckmark } from "react-icons/io";


export const Body2 = () => {
    return (
        <div className="grid gap-y-20 pt-[35vh]">
            <div className="flex flex-wrap items-center justify-center max-w-[80rem] lg:mx-auto lg:gap-x-16 xl:gap-16 sm:flex-nowrap sm:gap-5 ">
                <div>
                    <Image
                        width={900}
                        src={img1}
                        alt=""
                        className="hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                </div>
                <div className="">
                    <span className="w-full text-[39px] text-[#001E4D] font-medium items-center">Lập mục tiêu theo chu kì năm, <br /> quý, tháng, tuần</span>
                    <span className="flex gap-6 mt-3">
                        <IoMdCheckmark className="mt-2 text-[20px] text-[#247cff]" />
                        <span className="w-[65%] text-[18px] text-[#495460] font-normal ">Lập mục tiêu chi tiết theo năm, quý, tháng, tuần</span>
                    </span>
                    <span className="flex gap-6 my-3">
                        <IoMdCheckmark className="mt-2 text-[20px] text-[#247cff]" />
                        <span className="w-[65%] text-[18px] text-[#495460] font-normal">Tổ chức các hạng mục công việc, phân bổ nhân lực liên nhóm để thực hiện mục tiêu và quản lý tiến độ trên một nền tảng hợp nhất</span>
                    </span>
                    <span className="flex gap-6 mb-3">
                        <IoMdCheckmark className="mt-2 text-[20px] text-[#247cff]" />
                        <span className="w-[70%] text-[18px] text-[#495460] font-normal">Tổ chức công việc theo dự án, báo cáo độc lập, theo dõi đầu việc đa chiều, cảnh báo tiến độ thông minh</span>
                    </span>

                </div>
            </div>

            <div className="flex flex-wrap justify-center items-center max-w-[80rem] lg:mx-auto sm:flex-nowrap lg:gap-x-10 xl:gap-5 sm:gap-5">
                <div className="">
                    <span className="w-full text-[39px] text-[#001E4D] font-medium items-center">Quản lý mục tiêu theo cấp bậc <br /> công ty, nhóm, nhân viên</span>
                    <span className="flex gap-6 mt-3">
                        <IoMdCheckmark className="mt-2 text-[20px] text-[#247cff]" />
                        <span className="w-[75%] text-[18px] text-[#495460] font-normal ">Chia nhỏ mục tiêu theo cấp bậc từ công ty, nhóm đến từng nhân viên</span>
                    </span>
                    <span className="flex gap-6 my-3">
                        <IoMdCheckmark className="mt-2 text-[20px] text-[#247cff]" />
                        <span className="w-[75%] text-[18px] text-[#495460] font-normal">Giám sát tiến độ thực hiện mục tiêu, đánh giá hiệu quả, giúp cấp trên đưa ra quyết định chính xác và nhanh chóng</span>
                    </span>
                    <span className="flex gap-6 mb-3">
                        <IoMdCheckmark className="mt-2 text-[20px] text-[#247cff]" />
                        <span className="w-[75%] text-[18px] text-[#495460] font-normal">Giao tiếp và trao đổi nội bộ trên từng công việc. Thông tin đồng bộ, kịp thời và dễ dàng phối hợp</span>
                    </span>
                    <span className="flex gap-6 mb-3">
                        <IoMdCheckmark className="mt-2 text-[20px] text-[#247cff]" />
                        <span className="w-[75%] text-[18px] text-[#495460] font-normal">Quản lý mục tiêu, tiến độ hoàn thành của nhân viên cấp dưới trên một bảng chung</span>
                    </span>
                </div>
                <div>
                    <Image
                        width={900}
                        src={img2}
                        alt=""
                        className="hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center max-w-[80rem] lg:mx-auto lg:gap-x-16 xl:gap-16 sm:flex-nowrap sm:gap-5 ">
                <div>
                    <Image
                        width={700}
                        src={img3}
                        alt=""
                        className="hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                </div>
                <div className="">
                    <span className="w-full text-[39px] text-[#001E4D] font-medium items-center">Kế hoạch công việc hàng ngày</span>
                    <span className="flex gap-6 mt-3">
                        <IoMdCheckmark className="mt-2 text-[20px] text-[#247cff]" />
                        <span className="w-[80%] text-[18px] text-[#495460] font-normal ">Chia nhỏ mục tiêu thành các công việc hàng ngày</span>
                    </span>
                    <span className="flex gap-6 my-3">
                        <IoMdCheckmark className="mt-2 text-[20px] text-[#247cff]" />
                        <span className="w-[80%] text-[18px] text-[#495460] font-normal">Cho phép lên kế hoạch công việc một cách chi tiết và rõ ràng hơn</span>
                    </span>
                    <span className="flex gap-6 mb-3">
                        <IoMdCheckmark className="mt-2 text-[20px] text-[#247cff]" />
                        <span className="w-[80%] text-[18px] text-[#495460] font-normal">Định hướng mục tiêu của mỗi công việc đang được thực hiện hàng ngày</span>
                    </span>

                </div>
            </div>

            <div className="flex flex-wrap justify-center items-center max-w-[80rem] lg:mx-auto sm:flex-nowrap lg:gap-x-10 xl:gap-5 sm:gap-5">
                <div className="">
                    <span className="w-full text-[39px] text-[#001E4D] font-medium items-center">Checkin tiến độ công việc, mục tiêu</span>
                    <span className="flex gap-6 mt-3">
                        <IoMdCheckmark className="mt-2 text-[20px] text-[#247cff]" />
                        <span className="w-[80%] text-[18px] text-[#495460] font-normal ">Checkin tiến độ công việc định kỳ để giúp quản lý đưa ra quyết định chính xác</span>
                    </span>
                    <span className="flex gap-6 my-3">
                        <IoMdCheckmark className="mt-2 text-[20px] text-[#247cff]" />
                        <span className="w-[75%] text-[18px] text-[#495460] font-normal">Hệ thống tự động nhắc tiến độ công việc đến những người liên quan</span>
                    </span>
                    <span className="flex gap-6 mb-3">
                        <IoMdCheckmark className="mt-2 text-[20px] text-[#247cff]" />
                        <span className="w-[75%] text-[18px] text-[#495460] font-normal">Hệ thống tự động cảnh báo công việc sắp đến hạn, quá hạn</span>
                    </span>

                </div>
                <div>
                    <Image
                        width={900}
                        src={img4}
                        alt=""
                        className="hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                </div>
            </div>

        </div>
    )
}