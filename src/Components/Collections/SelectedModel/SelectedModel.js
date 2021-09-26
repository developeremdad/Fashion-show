import React from 'react';
import './SelectedModel.css';

const SelectedModel = (props) => {
    const { person, hire } = props.SelectModel;
    // console.log(props.SelectModel);
    return (
        <div>
            <h1>{person}</h1>
            <p>{hire}</p>
        </div>
    );
};

export default SelectedModel;