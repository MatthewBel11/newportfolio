import React from 'react';
import Image from './img1.png';

function Titlecard() {
    return (
        <div className="bg-white rounded-md shadow-md flex flex-wrap w-11/12 mx-auto mt-6 p-4">
            <img src={Image} className="w-36 h-36 rounded-full mx-6 my-auto" alt="Profile" />
            <div className="flex flex-col flex-wrap">
                <h1 className="text-3xl font-bold mt-2">Matthew Bell</h1>
                <h2 className="text-xl text-gray-600 font-medium mt-1">Junior Software Engineer & 3rd Year Comp Sci Student</h2>
                <h3 className="text-sm text-gray-500 mt-1">Newcastle Upon Tyne, United Kingdom</h3>
                <div className="mt-2">
                    <a href="" className="text-blue-500 hover:underline">Email</a> |
                    <a href="" className="text-blue-500 hover:underline"> LinkedIn</a> |
                    <a href="" className="text-blue-500 hover:underline"> GitHub</a> |
                    <a href="" className="text-blue-500 hover:underline"> LeetCode</a>
                </div>
            </div>
        </div>
    );
}

export default Titlecard;
