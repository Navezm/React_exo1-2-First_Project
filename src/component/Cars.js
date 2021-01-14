import React from 'react';

let Car = ({children, color}) => {

    // console.log(props);

    return(
        <div className="text-center">
            <p>Marque: {children}</p>
            <p>Couleur: {color}</p>
        </div>
    );
};

export default Car;