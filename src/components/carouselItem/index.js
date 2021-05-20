import React from 'react';

const CarouselItem = (props) => {

  return (
    <div className="carousel-item active">
      <img src={ props.imgSrc } className="d-block w-100" alt={ props.label }/>
      <div className="carousel-caption d-none d-md-block">
        <h5>{ props.label }</h5>
        <p>{ props.caption }</p>
      </div>
    </div>
  );
};

export default CarouselItem;