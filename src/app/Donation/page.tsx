'use client';

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { donationService } from '../(service)/donatoin-service';
import { UserNavbar } from '@/components/component/UserNavbar'

const donation = () => {

  const donationSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as unknown as any;
    const data = {
      type: target.type.value,
      amount: target.amount.value
    }
    await donationService(data);
  };

  return (
    <div>
      <UserNavbar />
    
    <div className="flex items-center justify-center h-screen bg-whitesmoke">
      <div className="border-2 bg-white p-10 rounded-lg shadow-lg w-96 h-128 text-center">
        <div className="border-2 shadow-lg p-8 mb-10 flex justify-center">
          <h2 className=" text-center text-gray-800">Donation Form</h2>
        </div>
        <form onSubmit={donationSubmit} className="flex flex-col">
          <label htmlFor="type" className="text-left mb-2 font-bold">Donation Type:</label>
          <input type="text" id="type" name="type" required className="p-2 mb-8 border-2 border-gray-300 rounded w-full" />
          <label htmlFor="amount" className="text-left mb-2 font-bold">Donation Amount:</label>
          <input type="text" id="amount" name="amount" required className="p-2 mb-8 border-2 border-gray-300 rounded w-full" />
          <input type="submit" value="Submit" className="border-2 p-2 bg-darkcyan text-black rounded cursor-pointer text-lg w-1/2 mx-auto hover:bg-slateblue"/>
        </form>
        <div className="mt-5">
        <Link href = "/UserHomePage">
            <button className="border-2 hover:from-gray-600 hover:to-purple-600 text-black font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                Back to Home
            </button>
        </Link>
        </div>
        <p className="mt-5 text-sm p-2 bg-gray-100 border-2 border-blue-500 rounded text-gray-800">Donation Number: 01*********</p>
      </div>
    </div>
    </div>
  )
}

export default donation