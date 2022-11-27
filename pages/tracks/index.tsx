import React, { useEffect } from 'react'
import MainLayout from '../../layouts/MainLayout'
import TrackList from '../../components/TrackList'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { selectTrack, getTrackList } from '../../store/slices/track'
const index = () => {
  const dispatch = useAppDispatch()
  const { tracks, pending, error } = useAppSelector(state => state.track)
  useEffect(() => {
    dispatch(getTrackList())
  }, [])
  return (
    <MainLayout>
      <div className="mt-8">
        <div className="flow-root">

          {pending && <p>Loading...</p>}
          {error && <p>Oops, something went wrong</p>}
          <TrackList tracks={tracks} />
        </div>
      </div>
    </MainLayout>
  )
}

export default index
