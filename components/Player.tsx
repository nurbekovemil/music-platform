import React, { memo, useEffect } from 'react'
import TrackProgress from './TrackProgress'
import { PlayIcon, PauseIcon, SpeakerWaveIcon, ForwardIcon, BackwardIcon } from '@heroicons/react/24/outline'
import {
  useAppDispatch,
  useAppSelector,
} from '../hooks/hooks';
import {
  playTrack, pauseTrack, setDuration, setCurrentTime, setVolume
} from '../store/slices/player';

let audio: any;
const Player = memo(() => {
  const dispatch = useAppDispatch()
  const { track, volume, currentTime, duration, pause } = useAppSelector(state => state.player)
  useEffect(() => {
    if (!audio) {
      audio = new Audio()
    } else {
      setAudio()
    }
  }, [track])

  const setAudio = () => {
    if (track) {
      audio.src = 'http://localhost:3001/' + track.audio
      audio.volume = volume / 100
      audio.onloadedmetadata = () => {
        dispatch(setDuration(Math.ceil(audio.duration)))
      }
      audio.ontimeupdate = () => {
        dispatch(setCurrentTime(Math.ceil(audio.currentTime)))
      }
      if (!pause) {
        playAudio()

      }
    }
  }
  const playAudio = () => {
    dispatch(playTrack())
    audio.play()
  }
  const pauseAudio = () => {
    dispatch(pauseTrack())
    audio.pause()
  }
  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100
    dispatch(setVolume(Number(e.target.value)))
  }

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value)
    dispatch(setCurrentTime(Number(e.target.value)))
  }

  if (!track) {
    return null
  }

  return (
    <>
      <div className="flex items-center justify-between py-2">

        <div className="flex items-center flex-initial w-128">
          <button
            type="button"
            className="inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-700"
          >
            <BackwardIcon className="w-5 text-gray-500" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={pause ? playAudio : pauseAudio}
            className="inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-700"
          >
            {
              pause ? <PlayIcon className="w-5 text-gray-500" aria-hidden="true" /> : <PauseIcon className="w-5 text-gray-500" aria-hidden="true" />
            }
          </button>
          <button
            type="button"
            className="inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-700"
          >
            <ForwardIcon className="w-5 text-gray-500" aria-hidden="true" />
          </button>
          <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} height={2} />

        </div>
        <div className="flex items-center flex-initial w-32 ...">
          <button
            type="button"
            className="inline-flex items-center bg-white px-4 py-2 text-sm font-medium text-gray-700"
          >
            <SpeakerWaveIcon className="w-5 text-gray-500" aria-hidden="true" />
          </button>

          <TrackProgress left={volume} right={100} onChange={changeVolume} height={1} />

        </div>


      </div>
    </>
  )
})

export default Player