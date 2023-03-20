import React from 'react'
import PropsTypes from "prop-types";

import './cards.css'

function Card({title, imageSource, text, url}) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">

      <div className="overflow">
        <img src={imageSource} alt="" className='card-img-top' />
        
        </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
            {
                text ? text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate laboriosam eum adipisci beatae cupiditate molestiae! Non magni delectus corporis suscipit iusto magnam vitae distinctio nobis, deserunt, deleniti quis numquam pariatur?'
            }
        </p>
        <a href={url} className="btn btn-outline-secondary" target="_blank">
          Leer más...
        </a>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropsTypes.string.isRequired,
  url: PropsTypes.string,
  imageSource: PropsTypes.string,
  text: PropsTypes.string
}

export default Card