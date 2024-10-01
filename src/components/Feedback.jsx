import React from "react";

const Feedback = ({ feedback, positivePercentage }) => {
    return (
        <div>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </div>
    );
};

export default Feedback;
