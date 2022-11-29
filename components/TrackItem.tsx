import React, { useEffect, useState } from 'react'
import { ITrack } from '../types/track'
import { PlayIcon, PauseIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import {
  useAppDispatch,
  useAppSelector,
} from '../hooks/hooks';
import {
  playTrack, setTrack, pauseTrack
} from '../store/slices/player';

interface ITrackItemProps {
  track: ITrack
  isActive?: boolean
}


const TrackItem: React.FC<ITrackItemProps> = ({ track, isActive = false }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [isTrack, setIsTrack] = useState(false)
  const { track: currentTrack, pause } = useAppSelector(state => state.player)
  const playAudio = () => {
    dispatch(setTrack(track))
    dispatch(playTrack())
  }
  const pauseAudio = () => {
    dispatch(pauseTrack())
  }
  useEffect(() => {
    if (track?._id == currentTrack?._id) {
      setIsTrack(true)
    }
    if (track?._id == currentTrack?._id && pause) {
      setIsTrack(false)
    }
    if (track?._id != currentTrack?._id) {
      setIsTrack(false)
    }
  }, [currentTrack, pause])

  return (

    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={'http://localhost:3001/' + track.picture}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">

            <h3 className='cursor-pointer' onClick={() => router.push('/tracks/' + track._id)}>
              {track.name}
            </h3>

            <div className="mt-5 flex lg:mt-0 lg:ml-4">
              <button
                type="button"
                onClick={playAudio}
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {
                  isTrack ? <PauseIcon className=" h-5 w-5 text-gray-500" aria-hidden="true" /> : <PlayIcon className=" h-5 w-5 text-gray-500" aria-hidden="true" />
                }

              </button>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-500">{track.artist}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Listened {track.listens}</p>
          <p className="text-gray-500">Comments 0</p>

          {/* <div class="flex">
              <button
                type="button"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Remove
              </button>
            </div> */}
        </div>
      </div>
    </li>

  )
}

export default TrackItem