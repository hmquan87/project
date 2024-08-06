import robot from '@/public/img/robot-mys.png'
import Image from 'next/image';



const Contents: React.FC = () => {
    return (
            <div className='border border-gray-200 rounded-xl shadow-sm flex flex-row w-[650px] h-[230px] mt-[9%]'>
                <div className='basis-1/3 items-center flex justify-center'>
                    <Image src={robot} width={170} alt='' />
                </div>
                <div className='basis-2/3 pl-3 pr-8 flex justify-center items-center'>
                <div className='flex flex-col'>
                    <span className='text-[24px] text-[#000000D9] font-medium leading-7 mt-5'>
                        Trang chủ của bạn đang được theo dõi và cập nhật
                    </span>
                    <span className='text-[16px] text-[#000000D9] font-light leading-[18px] mt-3 '>
                        Khi các thành viên ở các không gian làm việc để lại bình luận hay thả cảm xúc vào bảng công việc,
                        tiến độ dự án hay các hoạt động quan trọng trọng khác sẽ được hiện thị ở đây.
                    </span>
                </div>
                </div>
            </div>
    )
}

export default Contents;