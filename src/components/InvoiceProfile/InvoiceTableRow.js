import React, {Component} from 'react';
import {FaFileInvoiceDollar} from 'react-icons/fa'


// Notes:
//Group "new Invoice" opacity change for text as well
//Add "Unpaid" And "Over Due" warning texts inline table
//Last Child Border bottom


class InvoiceTableRow extends Component {

    render() {


        return (
        
        <tr  className="border-t-2 w-full">
        <td className=" font-thin text-xs px-1 py-4">1901</td>
        <td className=" font-thin text-xs text-gray-600 px-1  py-4">
            <h3>March 5th 2021</h3>
            {/* <span className="font-hairline">Over Due</span> */}
        </td>

        <td className=" font-base  text-yellow-500 px-1  py-4">$1,250.00</td>
        <td className=" px-1  py-4">

        <div class="w-3/4 ">
        <div class="relative">
        <select class="block appearance-none w-full  font-thin border-b border-gray-400 text-gray-600 py-1  pr-8  leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="paymentMethod">
        <option>TBD</option>
        <option>Credit</option>
        <option>Debit</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        </div>
        </div>
    
        </td>


        <td className=" px-1  py-4"></td>
        <td className=" px-1  py-4">
        <FaFileInvoiceDollar className="text-xl ml-auto cursor-pointer hover:text-gray-600 text-gray-400 mx-1"/>
        </td>
    </tr>
            

        );
    }
}

export default InvoiceTableRow;