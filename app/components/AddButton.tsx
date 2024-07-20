import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'

type AddButtonProps = {
    handleAddClick: () => void
    }

const AddButton = ({ handleAddClick }: AddButtonProps) => {
  return (
    <button
    onClick={handleAddClick}
    className="btn btn-primary btn-circle h-48 w-48"
  >
    <PlusIcon height={80} width={80} />
  </button>
  )
}

export default AddButton