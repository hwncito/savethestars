import './CardsOurWork.css';

export default function CardsOurWork() {
  return (
    <div className="flex flex-wrap justify-center py-20 md:pt-20 md:pb-40 bg-[#F0F4FB]">
      <div className="max-w-sm h-[180px] rounded shadow-lg m-4 sm:mt-20 lg:mt-4 text-gray-400 hover:text-white transition-all hover:extend-card relative">
        <div
          className="background-image"
          style={{
            backgroundImage: "url('/hero-image.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex items-center justify-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M7 18v-1a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v1M1 18v-1a3 3 0 0 1 3-3v0m19 4v-1a3 3 0 0 0-3-3v0m-8-2a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-8 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m16 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
              />
            </svg>
          </div>
          <div className="px-2 py-4">
            <div className="font-bold text-xl text-center">
              Community Outreach
            </div>
            <div className="flex items-center justify-center arrow-container mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <p className="text-base hidden-text">
              We educate communities about the impact of light pollution through
              workshops and events.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-sm h-[180px] rounded shadow-lg m-4 mt-20 lg:mt-4 text-gray-400 hover:text-white transition-all hover:extend-card relative">
        <div
          className="background-image"
          style={{
            backgroundImage: "url('/hero-image.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex items-center justify-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.75 2.75V4.5h1.975c.351 0 .694.106.984.303l1.697 1.154q.063.042.14.043h4.102a.75.75 0 0 1 0 1.5H20.07l3.366 7.68a.75.75 0 0 1-.23.896q-.15.111-.31.206a6 6 0 0 1-.79.399a7.35 7.35 0 0 1-2.856.569a7.3 7.3 0 0 1-2.855-.568a6 6 0 0 1-.79-.4a3 3 0 0 1-.307-.202l-.005-.004a.75.75 0 0 1-.23-.896l3.368-7.68h-.886c-.351 0-.694-.106-.984-.303l-1.697-1.154a.25.25 0 0 0-.14-.043H12.75v14.5h4.487a.75.75 0 0 1 0 1.5H6.763a.75.75 0 0 1 0-1.5h4.487V6H9.275a.25.25 0 0 0-.14.043L7.439 7.197c-.29.197-.633.303-.984.303h-.886l3.368 7.68a.75.75 0 0 1-.209.878c-.08.065-.16.126-.31.223a6 6 0 0 1-.792.433a6.9 6.9 0 0 1-2.876.62a6.9 6.9 0 0 1-2.876-.62a6 6 0 0 1-.792-.433a4 4 0 0 1-.309-.221a.76.76 0 0 1-.21-.88L3.93 7.5H2.353a.75.75 0 0 1 0-1.5h4.102q.076 0 .141-.043l1.695-1.154c.29-.198.634-.303.985-.303h1.974V2.75a.75.75 0 0 1 1.5 0M2.193 15.198a5.4 5.4 0 0 0 2.557.635a5.4 5.4 0 0 0 2.557-.635L4.75 9.368Zm14.51-.024q.123.06.275.126c.53.223 1.305.45 2.272.45a5.85 5.85 0 0 0 2.547-.576L19.25 9.367Z"
              />
            </svg>
          </div>
          <div className="px-2 py-4">
            <div className="font-bold text-xl text-center">Policy Advocacy</div>
            <div className="flex items-center justify-center arrow-container mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <p className="text-base hidden-text">
              We work with local governments to implement policies that reduce
              light pollution.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-sm h-[180px] rounded shadow-lg m-4 mt-20 xl:mt-4 text-gray-400 hover:text-white transition-all hover:extend-card relative">
        <div
          className="background-image"
          style={{
            backgroundImage: "url('/hero-image.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex items-center justify-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
              />
            </svg>
          </div>
          <div className="px-2 py-4">
            <div className="font-bold text-xl text-center">
              Research and Innovation
            </div>
            <div className="flex items-center justify-center arrow-container mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <p className="text-base hidden-text">
              We support research on light pollution and develop innovative
              solutions to minimize its effects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
