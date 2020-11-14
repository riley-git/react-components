import React, {Component} from 'react';
import {MdSearch} from 'react-icons/md'
import InvoiceTableRow from './InvoiceTableRow'

// Notes:
//Group "new Invoice" opacity change for text as well
//Add "Unpaid" And "Over Due" warning texts inline table
//Last Child Border bottom


class InvoiceProfileCard extends Component {


    render() {
        var rows = [];
        for (var i = 0; i < 6; i++) {
    rows.push(<InvoiceTableRow/>)
        }

        return (
            <div className=" font-display border px-8 py-4">
                
                <div className="flex flex-row w-full">
                {/* Left Side */}
                <div className="flex flex-col w-1/2">
                <h1 className=" text-base font-base my-2">Invoices:</h1>
                <div className="flex flex-row justify-start items-center">
                <button className="bg-green-500 hover:bg-green-400  rounded-sm text-white text-xs py-2 px-4 ">First Rent Invoice</button>
                <div className="group ">
                <button className="bg-green-500 group-hover:bg-green-400 rounded-full text-white text-lg shadow-md py-1 px-3 ml-4 mr-2">+</button>
                <span className="text-xs text-gray-500 group-hover:text-gray-600">New Invoice</span>
                </div>
                </div>
                {/* Search Bar */}
                <div className="flex flex-row border rounded-sm w-3/4 my-6 py-1">
                    <MdSearch className="text-xl text-gray-400 mx-1"/>
                    <input className="text-sm focus:border-0 focus:outline-none " placeholder="Search..."></input>
                </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col w-1/2 ">
                <h1 className=" text-xs text-gray-500 font-base mt-2 ml-auto">Outstanding Overpayment:</h1>
                <span className="text-xs text-yellow-700 ml-auto">$1,400.00</span>
           
                </div>
                </div>



                {/* Invoice Table */}
                <table className="table-auto w-full mb-8">
                    <thead>
                        <tr className="text-left text-gray-500 ">
                            <th className="py-2 font-thin ">ID</th>
                            <th className="py-2 w-32 font-thin ">Due</th>
                            <th className="py-2 font-thin ">Cost</th>
                            <th className="py-2 font-thin ">Payment Method</th>
                            <th className="py-2 font-thin ">Receipt</th>
                            <th className="py-2 font-thin "> </th>

                        </tr>
                    </thead>

                    <tbody>
                        {rows}
      
                    </tbody>
                </table>

                

            </div>

        );
    }
}

export default InvoiceProfileCard;