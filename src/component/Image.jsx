import React from 'react';

const Image = ({ src, alt }) => {
    return (
        <img 
            className="thumbnail h-72 w-96 mx-auto"
            src={src}
            alt={alt}
        />
    );
};

export default Image;