import React from 'react';

const ReviewPage = ({ params }) => {
    const { slug } = params;

    return (
        <div>
            <h1>Review: {slug}</h1>
            <p>This is a dynamic review page component for {slug}.</p>
        </div>
    );
};

export default ReviewPage;