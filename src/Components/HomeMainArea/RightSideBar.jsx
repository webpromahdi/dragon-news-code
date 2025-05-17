import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram } from 'react-icons/fa';
import playgroundImg from '../../assets/playground.png';
import classImg from '../../assets/class.png';
import swimmingImg from '../../assets/swimming.png';

const RightSideBar = () => {
    return (
        <div className='flex flex-col gap-y-10'>
            {/* login section */}
            <div>
                <h2 className="font-semibold">Login With</h2> 
                <div className='mt-2 flex flex-col gap-2'>
                    <button className='w-full border-black hover:border-primary border rounded-md inline-flex items-center justify-center py-2 text-center text-base font-medium hover:text-primary hover:bg-gray-100'>
                      <span className='mr-[10px]'>
                        <FaGoogle className='hover:text-primary' />
                      </span>
                      Login With Google
                    </button>
                    <button className='w-full border-black hover:border-primary border rounded-md inline-flex items-center justify-center py-2 text-center text-base font-medium hover:text-primary hover:bg-gray-100'>
                      <span className='mr-[10px]'>
                        <FaGithub className='hover:text-primary' />
                      </span>
                      Login With Github
                    </button>
                </div>
            </div>

            {/* Find Us On    */}
            <div>
                <h2 className="font-semibold">Find Us On</h2>
                  <div className="flex flex-col  dark:border-dark-3">
                    <button className="flex items-center gap-2 rounded-md border border-stroke border-b-transparent px-4 py-3 hover:bg-gray-100">
                      <span>
                        <FaFacebook />
                      </span>
                      Facebook
                    </button>
                    <button className="flex items-center gap-2 rounded-md border border-stroke border-b-transparent px-4 py-3 hover:bg-gray-100">
                      <span>
                        <AiFillTwitterCircle />
                      </span>
                      Twitter
                    </button>
                    <button className="flex items-center gap-2 rounded-md border border-stroke px-4 py-3 hover:bg-gray-100">
                      <span>
                        <FaInstagram />
                      </span>
                      Instagram
                    </button>
                  </div>
            </div>
            {/* Q-Zone */}
            <div className='bg-[#F3F3F3] rounded-md py-4 px-2'>
                <h2 className="font-semibold ml-2">Q-Zone</h2>
                <div>
                    <img className='w-full' src={swimmingImg} alt="" />
                    <img className='w-full' src={classImg} alt="" />
                    <img className='w-full' src={playgroundImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;