import React from "react";

const Emojis = (props) => {
    const { emoji, action } = props;
    const displayEmojiName = (e) => {
        action && action(e);
    }
    return(
        <li>
        <button onClick={(e) => displayEmojiName(e)}>
            <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.value}</span>
        </button>
        </li>
    )
}

export default Emojis;