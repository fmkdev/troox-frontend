import React from 'react'


const actionButton = ({className, name, onClick}) => {
  
  return (
    <button onClick={onClick} type="button" className={` ${className} py-2  text-sm text-white border-none rounded`}>
        {name}
    </button>
  )
}

export default actionButton
