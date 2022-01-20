import React from 'react';
import { useParams } from 'react-router-dom';

const OneInput = (props) => {

    const {input} = useParams();

    // return (
    //     <fieldset>
    //         <legend>OneInput.jsx</legend>
    //         <h3>#####</h3>
    //         <p>Number: {input} </p>
    //     </fieldset>
    // );

    if (isNaN(input)===false) {
        return (
            <fieldset>
                <legend>OneInput.jsx</legend>
                <h3> #### </h3>
                <p>
                    Number: {input}
                </p>
            </fieldset>
        )
    }else {
        return (
            <fieldset>
                <legend>OneInput.jsx</legend>
                <h3> Wordswordswords </h3>
                <p>
                    Word: {input}
                </p>
            </fieldset>
        )
    }

};

export default OneInput;
