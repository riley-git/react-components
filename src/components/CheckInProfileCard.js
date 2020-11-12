import React, { Component } from 'react';
import {AiOutlineClockCircle} from 'react-icons/ai'
import Tooltip from "./Tooltip";
import UnitBubble from "./UnitBubble";


class CheckInProfileCard extends Component {
  
    render() {
    

      return (
          <div className=" font-display  border px-3 py-4">
            <div className="flex-wrap flex justify-start  items-center flex-row">
            {/* CheckIn Info */}
            <h2 className=" mr-4 pt-1 inline-block align-middle font-regular text-base">Check In <span className="text-gray-400">|</span> <span className="font-bold">February 20th 2020</span> </h2>
            
            {/* Tag divs */}
            <Tooltip content={<UnitBubble/>}>
            <div id="bookingConfirmed" className="  cursor-default h-6 mr-2 bg-gray-500 text-white font-medium text-xs rounded-full py-1 w-auto  flex items-center text-center px-4"> Confirmed </div>
            </Tooltip>
            <div id="parkingRequired" className=" whitespace-no-wrap h-6 mr-2 bg-yellow-300 text-yellow-700 font-medium text-xs rounded-full py-1 w-auto flex items-center justify-center  text-center px-4"> Parking Required </div>
            <div id="FirstRent" className=" whitespace-no-wrap h-6 mr-2 bg-red-300 text-red-800  font-medium text-xs rounded-full py-1 w-auto flex items-center align-center text-center px-4"> First Rent Required </div>
            
            {/* Unit Info */}
            <div style={{marginLeft: "auto"}} className=" w-auto flex-col  ">
            <h3  className="text-gray-500 text-sm font-semibold w-auto  justify-end ">University Plaza F</h3>
            <h3  className="text-gray-500 text-xs font-thin w-auto text-right justify-end ">Suite #1454</h3>
            </div>
            </div>



            <div className="flex-wrap flex justify-between mt-2 flex-row">

            <div className="w-auto flex flex-col">
            <h2 className=" text-gray-500 mr-4 pt-1 inline-block align-middle font-hairline text-sm">Notes:</h2>
            <p className=" max-w-sm text-gray-700 mr-4 pt-1 inline-block align-middle font-regular text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div className="w-auto  flex flex-col justify-end ">
            <button className=" transition-all duration-200 ease-in-out hover:bg-gray-200  flex flex-row justify-between rounded-sm py-2 px-4 whitespace-no-wrap text-gray-800 border mr-0 pt-2 flex flex-row items-center  text-xs" >
              
              <AiOutlineClockCircle className="text-lg " />
                <span className="ml-2">Check In Time Change</span></button>
            </div>

            </div>



          </div>
      
      );
    }
  }
  
  export default CheckInProfileCard;