import React from 'react';
import { useState } from 'react';

const Tour = ({ image, id, name, price, info, removeTour }) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-name">
                    <h4>{name}</h4>
                    <h4 className="tour-price">$ {price}</h4>
                </div>

                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button className="read-more" onClick={() => {
                        setReadMore(!readMore);
                    }}>{readMore ? "Show less" : "Read more"}</button>
                </p>
                <button className="delete-btn" onClick={() =>
                    removeTour(id)
                }>Not interested</button>
            </footer>
        </article>
    )
}

export default Tour