import React, { PropsWithChildren, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { ArrowUpTrayIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import Player from '../components/Player'



const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {
          router.route != '/' &&
          <div className="flex items-baseline justify-center py-2 mb-2">
            {/* <div >
              <button
                type="button"
                onClick={() => router.back()}
                className=" inline-flex items-center rounded-md border border-b border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <ArrowLeftIcon className="mr-5 h-5 w-5 text-gray-500" aria-hidden="true" />
                Back
              </button>
            </div> */}
            <Player />
            {/* <div className="flex-initial w-34">
              <button
                type="button"
                disabled={router.route == '/tracks/create'}
                onClick={() => router.push('/tracks/create')}
                className="inline-flex items-center focus:outline-none rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <ArrowUpTrayIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                Upload track
              </button>

            </div> */}
          </div>
        }
        {children}
      </div>

    </>
  )
}

export default MainLayout