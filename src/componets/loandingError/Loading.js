import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import FadeLoader from "react-spinners/FadeLoader"
const Loading = (props) => {
    return (
        <div>
            <FadeLoader
                color="hsla(168, 67%, 53%, 1)"
                height={0}
                loading={props.loading}
            />
        </div>
    );
};

export default Loading;