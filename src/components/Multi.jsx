import React from 'react';
import { useParams } from 'react-router-dom';

const Multi = (props) => {
    const {input} = useParams();
    const {textColor} = useParams();
    const {backgroundColor} = useParams();

    return (
        <fieldset>
            <legend>Multi.jsx</legend>
            <h3> 🌈</h3>
            <p style={{
                background: backgroundColor,
                color: textColor
            }}>
                Your input: {input}
            </p>
        </fieldset>

    );
};

export default Multi;
