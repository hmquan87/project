'use client';

import { useState } from "react";
import Contents from "./components/contents/contenLocalt";
import Headers from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import { ProfileAccount } from "./components/contents/profile-account";


const HomeLocal: React.FC = () => {

    const [selectComponent, setSelectComponent] = useState<string>('local');

    return (
        <div className='h-screen flex flex-col'>
            <div className='h-[60px] w-ful border-b border-gray-300' >
                <Headers setSelectComponent={setSelectComponent} />
            </div>
            <div className='flex flex-grow  w-full '>
                <div className=' relative'>
                    <Sidebar />
                </div>
                <div className='relative w-full flex justify-center max-h-[94vh] overflow-y-auto'>
                    {selectComponent === 'local' &&
                        <Contents />
                    }
                    {selectComponent === 'profile-account' &&
                        <ProfileAccount />
                    }
                </div>
            </div>
        </div>

    );
}

export default HomeLocal;
