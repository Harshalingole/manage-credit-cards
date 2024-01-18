import { FC } from 'react'

const Heading:FC<{text: string}> = ({text}) => {
  return (
    <h1 className="text-white font-extrabold text-4xl">{text}</h1>
  )
}

export default Heading