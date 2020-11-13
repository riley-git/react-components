import React, {Component} from 'react';
import {AiOutlineClockCircle} from 'react-icons/ai'
import Tooltip from "./Tooltip";
import UnitBubble from "./UnitBubble";

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

                <h1 className=" text-2xl font-bold my-1">Corporate</h1>
                <table className="table-auto w-full">
                    <thead>
                        <tr className="text-left text-gray-500 ">
                            <th className="py-2 font-thin ">Full Name</th>
                            <th className="py-2 font-thin ">Email </th>
                            <th className="py-2 font-thin ">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t-2">
                            <td className=" font-bold px-1 py-4">Riley Densmore</td>
                            <td className=" font-thin text-sm text-gray-600 px-1  py-4">rileydensmore@gmail.com</td>
                            <td className=" px-1  py-4">(647) 880-9203</td>
                        </tr>
      
                    </tbody>
                </table>

            </div>

        );
    }
}

export default ContactProfileCard;