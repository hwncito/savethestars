'use client';
import { useEffect, useRef, useState } from 'react';
import './UserDropdown.css';
import logitoImage from '../../../public/light-pollution.webp';

export default function UserDropdown({ session, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative inline-block animateUserDropdown opacity-0"
      ref={dropdownRef}
    >
      <button
        id="dropdownDividerButton"
        onClick={toggleDropdown}
        className="flex items-center text-gray-300"
        type="button"
      >
        {/* <img
          src={logitoImage}
          // src={session?.user?.image}
          alt="user logo"
          className="rounded-full w-10"
        /> */}
        <svg
          className={`w-2.5 h-2.5 ms-3 ${
            isOpen ? '' : 'rotate-180'
          } transition-all `}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownDivider"
        className={`absolute right-0 z-10 ${
          isOpen ? 'block' : 'hidden'
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2`}
      >
        <ul
          className="py-2 text-sm text-gray-700 select-none"
          aria-labelledby="dropdownDividerButton"
        >
          <li>
            <p className="block px-4 py-2 hover:bg-gray-100 text-right font-medium">
              {/* {session?.user?.name} */}Juan
            </p>
          </li>
          <li>
            <p className="block px-4 py-2 hover:bg-gray-100 text-xs text-right">
              {/* {session?.user?.email} */}juan@g.com
            </p>
          </li>
        </ul>
        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-xl">
          {children}
        </div>
      </div>
    </div>
  );
}
