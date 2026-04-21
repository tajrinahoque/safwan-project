import React from 'react'


const Images = ({src,alt,srcset,className}) => {
  return (
    <div>
        <img src={src} alt={alt} srcset={srcset} className={className}/>
    </div>
  )
}

export default Images