import React from 'react'

interface TrackProgressProps {
  left: number;
  right: number;
  height: number;
  onChange: (e: any) => void
}

const TrackProgress: React.FC<TrackProgressProps> = ({ left, right, onChange, height }) => {
  return (
    <div className="w-full flex items-center">
      <input
        id="default-range"
        type="range"
        className={`w-full h-${height} bg-gray-200 accent-indigo-600  rounded-lg appearance-none  cursor-pointer ${height == 2 && 'range-lg'}`}
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
    </div>


  )
}

export default TrackProgress