import React from "react"

const Button = ({ title, colorClass, textColor, onClick, marginClass }) => {
  return (
    <button
      onClick={onClick}
      className={`mt-5 transition-all duration-500ms ease-in-out hover:ease-in-out w-auto flex items-center justify-center px-8 py-3 border border-yellow text-base font-medium rounded-md text-white hover:text-black bg-transparent hover:bg-yellow md:py-3 md:text-lg md:px-10`}
    >
      {title}
    </button>
  )
}

export default Button
