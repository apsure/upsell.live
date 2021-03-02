import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

export default function Screenshot (props) {
  const { src, alt = '', caption, alignright, ...propsRest } = props

  const imgclasses = `screenshot${alignright && !caption ? ' float-right' : ''}`

  const img = <img className={imgclasses} alt={alt} src={useBaseUrl(`screenshots/${src}`)} {...propsRest} />

  if (caption) {
    return (
      <figure className={`figure${alignright ? ' float-right' : ''}`}>
        {img}
        <figcaption className="figure-caption">{caption}</figcaption>
      </figure>
    )
  } else {
    return img
  }
};
