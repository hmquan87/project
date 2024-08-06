
import { Modal, Input, Button, ConfigProvider, Rate } from 'antd'
import { useState } from 'react'


interface PropsEvaluateModal {
    onOpenModal: boolean,
    onCloseModal: () => void
}


interface PropsSelect {
    key: number,
    text: string,
    type: boolean
}


const EvaluateModal: React.FC<PropsEvaluateModal> = ({onOpenModal, onCloseModal}) => {

    const theme = {
        token: {
            colorPrimary: '#D1D5DB',
            colorText: '#000000',
        },
        components: {
            Button: {
                colorPrimaryHover: '#D1D5DB',
            },
        },
    }

    const theme1 = {
        components: {
            Button: {
                colorPrimaryHover: undefined,
            }
        }
    }



    const [value, setValue] = useState<number>(5)
    const handleChange = (value: number) => {
        setValue(value);
    };

    const [propsSelect, setPropsSelect] = useState<PropsSelect[]>([
        { key: 1, text: 'Tốt', type: false },
        { key: 2, text: 'Rất hài lòng', type: false },
        { key: 3, text: 'Sử dụng tốt', type: false },
        { key: 4, text: 'Hiệu quả', type: false },
        { key: 5, text: 'Giá thành hợp lý', type: false }
    ])

    const handleSelected = (key: number) => {
        setPropsSelect((keys) => 
            keys.map((item) => item.key === key ? { ...item, type: !item.type } : item)
        )
    }

    const onChange1 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e);
    };


return (
    <Modal
        title={
            <div className='flex justify-center border-b border-gray-200 pb-3'>
                Đánh giá
            </div>
        }
        centered
        open={onOpenModal}
        onCancel={onCloseModal}
        footer={null}
        className='!w-[650px]'
    >
        <div className='grid  gap-y-4'>
            <span className='flex justify-center text-[14px] text-[#000000D9]'>
                Bạn có hài lòng với TinaMYS không?
            </span>
            <div className=' flex justify-center'>
                <Rate
                    value={value}
                    onChange={handleChange}
                    allowHalf={true}
                    className='text-[30px] flex gap-x-3'
                />
            </div>
            <div className='flex gap-x-2'>
                <ConfigProvider
                    theme={theme1}
                >
                    {propsSelect.map((item) =>

                        <Button
                            key={item.key}
                            type='primary'
                            className={`rounded-2xl ${item.type ? '' : 'bg-[#D1D5DB]'}`}
                            onClick={() => handleSelected(item.key)}
                        >
                            {item.text}
                        </Button>
                    )}
                </ConfigProvider>

            </div>
            <div>
                <p className='text-[16px] text-[#242424] font-semibold pl-1'>Đánh giá</p>
                <Input.TextArea
                    placeholder='Nội dung'
                    allowClear
                    onChange={onChange1}
                    className='mt-2 !h-[80px] !border-black'
                />

            </div>
            <div className='flex gap-x-4 w-full mt-4'>
                <ConfigProvider theme={theme}>
                    <Button className='w-full h-[42px]' type='primary' >Hủy</Button>
                </ConfigProvider>
                <Button className='w-full h-[42px]' type='primary'>Đánh giá</Button>
            </div>
        </div>
    </Modal >
)}




export default EvaluateModal;