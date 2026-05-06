import React from 'react'


const Images = ({src,alt,srcset,className}) => {
  return (
        <img src={src} alt={alt} srcset={srcset} className={className}/>
  )
}

export default Images