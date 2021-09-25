import React from "react";

const AnimalCard = (props) => {
    const { name,
        scienticName,
        size,
        diet,
        additional,
        showAdditonal} = props
    return (
        <div>
            <h2>{name}</h2>
            <h3>{scienticName}</h3>
            <h4>{size}</h4>
            <div>{diet.join(', ')}.</div>
            {additional && (
                <button 
                    onClick={() => showAdditonal(additional)}
                >
                    More info
                </button>
            )}
        </div>
    )
};

export default AnimalCard;