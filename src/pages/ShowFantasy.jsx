import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../context';
import { CustomButton, DisplayCampaigns } from '../components';
import { logo, menu, search, thirdweb } from '../assets';
import { navlinks } from '../constants';

const ShowFantasy = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { connect, address, contract, getCampaigns } = useStateContext();
  
  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <>
    <div className="bg-[#1c1c24] flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
        <input type="text" placeholder="Search for campaigns" className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" />
        
        <div className="w-[72px] h-full rounded-[20px] bg-gray-900 flex justify-center items-center cursor-pointer">
          <img src={search} alt="search" className="w-[15px] h-[15px] object-contain"/>
        </div>
      </div>

      <div className="flex-row justify-end hidden gap-4 sm:flex">
        <CustomButton 
          btnType="button"
          title={address ? 'Create Fantasy' : 'Connect'}
          styles={address ? 'bg-[#1c1c24]' : 'bg-[#1e1e44]'}
          handleClick={() => {
            if(address) navigate('/createfantasy')
            else connect()
          }}
        />

        <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img src="https://imageio.forbes.com/specials-images/imageserve/5fb7797a6d1bbd7fea2f0890/0x0.jpg?format=jpg&width=1200" alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
        </Link>
      </div>
    </div>
    <div>
        <DisplayCampaigns 
      title="All Fantasies"
      isLoading={isLoading}
      campaigns={campaigns}
      />
    </div>
    </>
  )
}

export default ShowFantasy