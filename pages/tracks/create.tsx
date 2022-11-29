
import React, { useState } from 'react'
import FileUpload from '../../components/FileUpload'
import MainLayout from '../../layouts/MainLayout'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ICreateTrack } from '../../types/track'
import TextInput from '../../components/TextInput'
import Textarea from '../../components/Textarea'
import { useAppDispatch } from '../../hooks/hooks'
import { createTrack } from '../../store/actions/track'

const IMAGE_SIZE = 327680;
const AUDIO_SIZE = 10000000;
const SUPPORTED_PICTURE_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/png"
];
const SUPPORTED_AUDIO_FORMATS = [
  "audio/mpeg",
];
const createTrackSchema = yup.object({
  name: yup.string().required('Name is required'),
  artist: yup.string().required('Artist is required'),
  text: yup.string().required('Lyrics required'),
  picture: yup
    .mixed()
    .required("A file is required")
    .test("Check for emptiness", "Picture is required", value => {
      if (!value.length) return false
      return value
    })
    .test(
      "fileSize",
      "File too large",
      value => value && value[0]?.size <= IMAGE_SIZE

    )
    .test(
      "fileFormat",
      "Unsupported Format",
      value => value && SUPPORTED_PICTURE_FORMATS.includes(value[0]?.type)
    ),
  audio: yup
    .mixed()
    .required('You need to select an audio')
    .test("Check for emptiness", "Audio is required", value => {
      if (!value.length) return false
      return value
    })
    .test(
      "fileSize",
      "File too large",
      value => value && value[0]?.size <= AUDIO_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      value => value && SUPPORTED_AUDIO_FORMATS.includes(value[0]?.type)
    ),
}).required()

const create = () => {
  const dispatch = useAppDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm<ICreateTrack>({
    resolver: yupResolver(createTrackSchema)
  })
  const createTrackHandler: SubmitHandler<ICreateTrack> = async data => {
    let formData = new FormData()
    console.log(data)
    for (const [key, value] of Object.entries(data)) {
      if (key == 'audio' || key == 'picture') {
        formData.append(key, value[0])
      } else {
        formData.append(key, value)

      }
    }
    await dispatch(createTrack(formData))
  }
  return (
    <>
      <MainLayout >
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={handleSubmit(createTrackHandler)}>
            <div className="overflow-hidden sm:rounded-md">
              <div className="bg-white py-5">
                <div className="grid grid-cols-6 gap-6">
                  <TextInput label='Track title' field='name' register={{ ...register('name') }} errors={errors} />
                  <TextInput label='Track artist' field='artist' register={{ ...register('artist') }} errors={errors} />
                  <Textarea label='Track text' field='text' register={{ ...register('text') }} errors={errors} />
                  <FileUpload field='picture' accept="image/*" title='Select image' register={{ ...register('picture') }} errors={errors} />
                  <FileUpload field='audio' accept="audio/*" title='Select audio' register={{ ...register('audio') }} errors={errors} />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Upload track
                </button>
              </div>
            </div>
          </form>
        </div>

      </MainLayout>
    </>
  )
}

export default create