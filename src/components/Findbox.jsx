import React from 'react'

function Findbox({imgSrc,title,description,buttonText}) {
    return (
        <div className="find-box">
            <img
                src={imgSrc}
                alt={title}
            />
            <h4 className="find-box__title">{title}</h4>
            <div className="find-box__description text">
                {description}
            </div>
            <button className="find-box__button">{buttonText}</button>
        </div>
    )
}

export default Findbox
