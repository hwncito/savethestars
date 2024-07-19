'use client';
import Image from 'next/image';
import pollutionImage from '../../../public/light-pollution.webp';
import './ProblemSection.css';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

export default function ProblemSection() {
  const elementsRef = useIntersectionObserver({ threshold: 0.2 });
  return (
    <div className="container mx-auto text-center my-20 px-4" id='problem-section'>
      <h2
        className="text-3xl font-bold my-8 fade-in"
        ref={(el) => elementsRef.current.push(el)}
      >
        The Problem with <span className="gradient-text">Light Pollution</span>
      </h2>
      <div className="text-left max-w-4xl mx-auto">
        <p className="mb-6 fade-in" ref={(el) => elementsRef.current.push(el)}>
          Light pollution is the excessive or misdirected artificial light that
          brightens the night sky, disrupting the natural darkness.
        </p>

        <Image
          src={pollutionImage}
          alt="light pollution before and after image"
          quality={100}
          priority
          className="rounded-md fade-in"
          ref={(el) => elementsRef.current.push(el)}
        />

        <div
          className="flex mt-1 fade-in"
          ref={(el) => elementsRef.current.push(el)}
        >
          <p className="text-center text-lg font-medium w-full text-red-900">
            With
          </p>
          <p className="text-center text-lg font-medium w-full text-green-900">
            Without
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 fade-in"
          ref={(el) => elementsRef.current.push(el)}
        >
          <div>
            <h3 className="text-xl font-semibold">Causes of Light Pollution</h3>
            <p className="text-gray-700 mt-2">
              Streetlights, building lights, billboards, and outdoor lighting
              are major contributors to light pollution. Improperly directed or
              excessive lighting can scatter light in unwanted directions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Effects on the Environment
            </h3>
            <p className="text-gray-700 mt-2">
              Light pollution disrupts ecosystems, confuses wildlife, and alters
              natural behaviors. For example, it can interfere with the
              navigation of nocturnal animals and the migration patterns of
              birds.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url('/hero-image.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="p-6 rounded-lg shadow-md text-white fade-in"
          ref={(el) => elementsRef.current.push(el)}
        >
          <h3 className="text-2xl font-bold mb-4">Did You Know?</h3>
          <ul className="space-y-2 list-inside text-white ">
            <li className="flex gap-5 items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
              More than 80% of the world&apos;s population lives under light-polluted
              skies.
            </li>
            <li className="flex gap-5 items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
              Light pollution contributes to the loss of over 30% of global
              energy consumption.
            </li>
            <li className="flex gap-5 items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
              Exposure to artificial light at night can disrupt human sleep
              patterns and negatively affect health.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
