import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

const TrackPage = () => {
  const track = {
    id: "1",
    name: 'Throwback Hip Bag',
    artist: 'Salmon',
    text: 'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    listens: 45,
    picture: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    audio: '',
    comments: []
  }
  return (
    <>
      <MainLayout>
        <div className="flex w-full items-center overflow-hidden bg-white py-6 ">
          <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">

            <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg rounded-md border border-gray-200 bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img src={track.picture} className="object-cover object-center" />
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{track.name}</h2>

              <section aria-labelledby="information-heading" className="mt-2">
                <p className="text-2xl text-gray-900">{track.artist}</p>

                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">Text song</h2>

                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{track.text}</p>
                  </div>
                </div>
              </section>
            </div>
            <div className="mt-5 sm:col-span-12 lg:col-span-12 md:mt-0">
              <form action="#" method="POST">
                <div>
                  <div className="space-y-6 bg-white py-5">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Username
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className='col-span-6 sm:col-span-3'>
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                          Comment
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="comment"
                            name="comment"
                            rows={3}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter your comment"
                            defaultValue={''}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </form>
            </div>

          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default TrackPage