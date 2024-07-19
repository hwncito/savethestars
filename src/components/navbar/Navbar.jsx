'use server';
import { auth } from '@/auth';
import UserDropdown from '../userDropdown/UserDropdown';
import './Navbar.css';
import LogoutButton from '../logoutButton/LogoutButton';

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="px-10 py-4 flex justify-between fixed w-full z-10">
      <svg
        width="40"
        height="40"
        className="animateLogo"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1113_5135)">
          <path
            d="M3.35168e-06 8.37315e-07C-0.00685864 26.518 10.5231 51.9526 29.2735 70.7091C48.0239 89.4656 73.459 100.008 99.9838 100.016V8.37315e-07H3.35168e-06ZM99.9838 100.016H200V8.37315e-07C186.863 -0.00169886 173.854 2.58433 161.717 7.61033C149.581 12.6363 138.553 20.0038 129.265 29.2918C119.977 38.5799 112.61 49.6065 107.586 61.7416C102.562 73.8767 99.9787 86.8826 99.9838 100.016ZM99.9838 100.016V200H200C200.001 186.869 197.414 173.867 192.388 161.735C187.362 149.604 179.995 138.581 170.707 129.297C161.42 120.012 150.394 112.647 138.259 107.623C126.124 102.599 113.118 100.014 99.9838 100.016ZM99.9838 100.016H3.35168e-06V200C26.5203 199.995 51.9525 189.458 70.7027 170.708C89.453 151.958 99.9855 126.53 99.9838 100.016Z"
            fill="url(#paint0_linear_1113_5135)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1113_5135"
            x1="-27"
            y1="185"
            x2="227"
            y2="15"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DD37E0" />
            <stop offset="1" stopColor="#0BA7FF" />
          </linearGradient>
          <clipPath id="clip0_1113_5135">
            <rect
              width="200"
              height="200"
              fill="white"
              transform="translate(200) rotate(90)"
            />
          </clipPath>
        </defs>
      </svg>

      <UserDropdown session={session}>
        <LogoutButton />
      </UserDropdown>
    </nav>
  );
}