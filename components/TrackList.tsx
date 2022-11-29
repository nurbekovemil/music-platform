import React from 'react'
import { ITrack } from '../types/track'
import TrackItem from './TrackItem'

interface ITrackListProps {
  tracks: ITrack[]
}

const TrackList: React.FC<ITrackListProps> = ({ tracks }) => {
  return (
    <>
      <ul role="list" className="-my-6 divide-y divide-gray-200">
        {tracks.map((track) => (

          <TrackItem key={track._id} track={track} />
        ))}
      </ul>
    </>
  )
}

export default TrackList