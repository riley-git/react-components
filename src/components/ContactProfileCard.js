import React, {Component} from 'react';
import {AiOutlineClockCircle} from 'react-icons/ai'
import Tooltip from "./Tooltip";
import UnitBubble from "./UnitBubble";

// Notes:
// Tailwind has "last Child" class which alows the item in an array of children to have different styles
// Need to implement population loop which includes last child border bottom.
// Might have to switch to div format for tables, seems like tailwind has two different methods of styling tables
// One which is <table> tags and another with <div>. might need to experiment with this.

class ContactProfileCard extends Component {



    render() {

        return (
            <div className=" font-display  px-2 py-4">
                <h1 className=" text-2xl font-bold my-1">Tenants</h1>
                <table className="table-auto w-full mb-8 ">
                    <thead>
                        <tr className="text-left text-gray-500 ">
                            <th className="py-2 font-thin ">Full Name</th>
                            <th className="py-2 font-thin ">Email </th>
                            <th className="py-2 font-thin ">Phone</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="border-t-2  ">
                            <td className=" font-bold px-1 py-4">Riley Densmore</td>
                            <td className=" font-thin text-sm text-gray-600 px-1  py-4">rileydensmore@gmail.com</td>
                            <td className=" px-1  py-4">(647) 880-9203</td>
                        </tr>
      
                    </tbody>
                </table>

                <h1 className=" text-2xl text-indigo-900 font-bold my-1">Corporate</h1>
                <table className="table-auto w-full">
                    <thead>
                        <tr className="text-left text-gray-500 ">
                            <th className="py-2 font-thin ">Name</th>
                            <th className="py-2 font-thin ">Admin Contacts</th>
                            <th className="py-2 font-thin ">Cleaning Contacts</th>
                            <th className="py-2 font-thin ">Finance Contacts</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t-2 border-b-2">
                            <td className=" font-bold px-1 py-4">Sky View Suites</td>
                            <td className=" font-thin text-sm text-gray-600 px-1  py-4">matt@skyviewsuites.com</td>
                            <td className=" font-thin text-sm text-gray-600 px-1  py-4">isabel@skyviewsuites.com</td>
                            <td className=" font-thin text-sm text-gray-600 px-1  py-4">steve@skyviewsuites.com</td>
                          
                        </tr>

                        {/* mini stats - Last child */}
                        <tr className="">
                            <td className=" font-thin text-xs text-gray-500 px-1  py-2">Deposit Policy: True</td>
                            <td className=" font-thin text-xs text-gray-500 px-1  py-2">Credit Fee: False</td>
                            <td className=" font-thin text-xs text-gray-500 px-1  py-2">Payment Type: TBD</td>
                            <td className=" font-thin text-xs text-gray-500 px-1  py-2">Payment Terms: 8</td>
                          
                        </tr>
      
                    </tbody>
                </table>

            </div>

        );
    }
}

export default ContactProfileCard;