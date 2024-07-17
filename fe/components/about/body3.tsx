import Image from "next/image"
import img1 from '@/public/img/iconSlice/s1.svg'
import img2 from '@/public/img/iconSlice/s2.svg'
import img3 from '@/public/img/iconSlice/s3.svg'
import img4 from '@/public/img/iconSlice/s4.svg'
import img5 from '@/public/img/iconSlice/s5.svg'


export const Body3 = () => {
    return (
        <div className="grid grid-cols-3 gap-x-7 gap-y-7 py-[20vh] px-[22vh]">
            <div className="">
                <span className="text-[48px] font-bold ">Ưu điểm nổi trội của MYS</span>
                <br />
                <p className="text-[18px] text-[#323232] pr-12 pb-7">Với những ưu điểm và tính năng vượt trội của MYS, công nghệ và giải pháp của chúng tôi sẽ giúp bạn đạt được mục tiêu, tối ưu hoá năng suất của doanh nghiệp.</p>
            </div>
            <div className="px-12 py-6 grid gap-y-5 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
                <div>
                    <Image
                        width={50}
                        src={img1}
                        alt=""
                    />
                </div>
                <div className="grid gap-y-3">
                    <p className="text-[24px] font-medium">Dễ sử dụng và tiện lợi và tiết kiệm thời gian</p>
                    <p className="text-[#8f8e8e] font-medium text-[1rem]">Giao diện đơn giản và thân thiện, giúp người dùng dễ dàng sử dụng và tiết kiệm thời gian</p>
                </div>
            </div>


            <div className="px-12 py-6 grid gap-y-5 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
                <div>
                    <Image
                        width={50}
                        src={img2}
                        alt=""
                    />
                </div>
                <div className="grid gap-y-3">
                    <p className="text-[24px] font-medium">Hỗ trợ đa nền tảng</p>
                    <p className="text-[#8f8e8e] font-medium text-[1rem]">Ứng dụng hiện có mặt trên iOS, Android và Website</p>
                </div>
            </div>

            <div className="px-12 py-6 grid gap-y-5 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
                <div>
                    <Image
                        width={50}
                        src={img3}
                        alt=""
                    />
                </div>
                <div className="grid gap-y-3">
                    <p className="text-[24px] font-medium">Chi phí thấp</p>
                    <p className="text-[#8f8e8e] font-medium text-[1rem]">Cho phép người dùng sử dụng miễn phí các tính năng cơ bản</p>
                </div>
            </div>
            <div className="px-12 py-6 grid gap-y-5 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
                <div>
                    <Image
                        width={50}
                        src={img4}
                        alt=""
                    />
                </div>
                <div className="grid gap-y-3">
                    <p className="text-[24px] font-medium">Hiệu quả</p>
                    <p className="text-[#8f8e8e] font-medium text-[1rem]">Giúp tăng hiệu suất công việc và đưa ra quyết định chính xác</p>
                </div>
            </div>
            <div className="px-12 py-6 grid gap-y-5 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
                <div>
                    <Image
                        width={50}
                        src={img5}
                        alt=""
                    />
                </div>
                <div className="grid gap-y-3">
                    <p className="text-[24px] font-medium">Hỗ trợ công nghệ AI</p>
                    <p className="text-[#8f8e8e] font-medium text-[1rem]">Người dùng sử dụng ứng dụng được hỗ trợ bởi công nghệ thông minh AI</p>
                </div>
            </div>
        </div>
    )
}