import moment from 'moment';
import logo from '../../assets/logo.png'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const TopHeader = () => {
    return (
        <div className='py-8 sm:py-10'>
            <div className="container flex flex-col justify-center items-center gap-y-3">
                {/* logo */}
                <div>
                    <Link to="/"><img className='w-[200px] h-[30px] sm:w-[400px] sm:h-[60px]' src={logo} alt="logo" /></Link>
                </div>
                {/* text */}
                <div className='flex flex-col items-center gap-y-3'>
                    <h4 className='text-[#706F6F] text-sm'>Journalism Without Fear or Favour</h4>
                    <p>{moment().format("dddd")}, <span className='text-[#706F6F]'>{moment().format("MMMM M, YYYY")}</span></p>
                </div>
                {/* Latest News */}
                <div className='w-full'>
                    <div className='bg-[#f3f3f3] flex items-center py-2 sm:py-3 px-2 sm:px-4 gap-3'>
                        <button className="bg-[#D72050] px-4 py-2 text-white last-of-type:border-r-0 ">
                            Latest
                        </button>
                        <Marquee pauseOnHover={true} speed={130} className='text-sm sm:text-base'>
                            <Link>Match Highlights: Germany vs Spain — as it happened   !</Link>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;