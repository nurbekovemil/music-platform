
import React, { useRef } from 'react'

interface FileUploadProps {
  setFile: Function;
  accept: string;
  title: string
}

const FileUpload: React.FC<FileUploadProps> = ({ setFile, accept, title }) => {

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(e.target.files[0])
  }
  return (
    <>
      <div className="col-span-6 sm:col-span-3 lg:col-span-3">
        <label className="block text-sm font-medium text-gray-700">{title}</label>
        <div className="mt-1 flex justify-center rounded-md border-1 border border-gray-300 px-6 pt-5 pb-6">
          <div className="space-y-1 text-center">
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload</span>
                <input id="file-upload" onChange={fileHandler} name="file-upload" type="file" className="sr-only" />
              </label>
            </div>
            <p className="text-xs text-gray-500">{accept}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FileUpload