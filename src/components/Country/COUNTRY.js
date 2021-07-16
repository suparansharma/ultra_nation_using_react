import React from 'react';

const COUNTRY = (props) => {
    const {name,population,flag}=props.country;
    const flagStyel = {height:'50px'}
    return (
        <div>
            <h4>This is {name} Country</h4>
            <h5>Population :{population}</h5>
            <img style={flagStyel} src={flag} alt="" srcset="" />
        </div>
    );
};

export default COUNTRY;