import React from "react";
import { NavLink } from "react-router-dom";
import { Home, PiggyBank, User } from "lucide-react";
export const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <div className="min-h-screen bg-indigo-50">
      <main className="pb-16">{children}</main>
      <nav className="fixed bottom-0 w-full bg-white border-t border-indigo-100">
        <div className="flex justify-around items-center h-16">
          <NavLink to="/" className={({
          isActive
        }) => `flex flex-col items-center justify-center w-full h-full ${isActive ? "text-indigo-600" : "text-gray-600"}`}>
            <Home size={24} />
            <span className="text-xs mt-1">Discover</span>
          </NavLink>
          <NavLink to="/saved" className={({
          isActive
        }) => `flex flex-col items-center justify-center w-full h-full ${isActive ? "text-indigo-600" : "text-gray-600"}`}>
            <div size={24} />
            <span className="text-xs mt-1">Saved</span>
          </NavLink>
          <NavLink to="/invested" className={({
          isActive
        }) => `flex flex-col items-center justify-center w-full h-full ${isActive ? "text-indigo-600" : "text-gray-600"}`}>
            <PiggyBank size={24} />
            <span className="text-xs mt-1">Invested</span>
          </NavLink>
          <NavLink to="/profile" className={({
          isActive
        }) => `flex flex-col items-center justify-center w-full h-full ${isActive ? "text-indigo-600" : "text-gray-600"}`}>
            <User size={24} />
            <span className="text-xs mt-1">Profile</span>
          </NavLink>
        </div>
      </nav>
    </div>;
};