
import React, { useRef } from 'react'

interface TextareaProps {
  label: string
  field: string;
  register: any;
  errors: any
}

const Textarea: React.FC<TextareaProps> = ({ field, label, register, errors }) => {
  return (
    <>
      <div className="col-span-6 sm:col-span-6 lg:col-span-6">
        <label htmlFor={field} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <textarea
          id={field}
          {...register}
          rows={4}
          className={`mt-1 block w-full rounded-md ${errors[field] ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'} shadow-sm  sm:text-sm`}
          placeholder={`Enter ${label.toLowerCase()}`}
        />
        {
          errors[field] && <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {errors[field]?.message}
          </span>
        }
      </div>
    </>
  )
}

export default Textarea