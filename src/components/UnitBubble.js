import React, { Component } from 'react';


class UnitBubbles extends Component {


    render() {
    
  
        return (
         <div>
             <h1 className="font-dispay font-regular text-gray-600 text-sm py-1">February Empty Suites: <span className="font-bold text-purple-900">12</span></h1>
             <h1 className="font-dispay font-regular text-gray-600 text-sm py-1">Suite Number: <span className="font-bold text-purple-900">1345</span></h1>
             <h1 className="font-dispay font-regular text-gray-600 text-sm py-1">Black Out: <span className="font-bold text-purple-900">No Black Out</span></h1>
             <div id="FirstRent" className=" flex flex-col justify-center whitespace-no-wrap h-6 mt-2 pt-0 text-center bg-red-300 text-red-800 font-medium text-xs rounded-full   mx-auto my-auto text-center px-2"> Heat Building </div>
         </div>
        );
      }
    }

export default UnitBubbles;