import React from "react";
import { Settings, LogOut } from "lucide-react";
export const ProfilePage = () => {
  return <div className="p-4 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Profile</h1>
        <button className="text-gray-600 hover:text-gray-800">
          <Settings size={24} />
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center mb-6">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" className="w-20 h-20 rounded-full mr-4" />
          <div>
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Total Invested</p>
            <p className="text-xl font-bold">$25,000</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Current Value</p>
            <p className="text-xl font-bold">$26,700</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Total Return</p>
            <p className="text-xl font-bold text-green-500">+6.8%</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Active Since</p>
            <p className="text-xl font-bold">Jan 2023</p>
          </div>
        </div>
        <button className="flex items-center text-red-500 hover:text-red-600">
          <LogOut size={20} className="mr-2" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>;
};