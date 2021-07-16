import React from 'react';

const COUNTRY = (props) => {
    const {name,population,flag}=props.country;
    const flagStyel = {height:'80px'};
    const handleAddCountry= props.handleAddCountry;
    const countryStyle = {border :'1px solid blue',margin:'10px',padding:'10px'}

    return (
        <div style={countryStyle }>
            <h4>This is {name} Country</h4>
            <h5>Population :{population}</h5>
            <img style={flagStyel} src={flag} alt="" srcset="" />
            <br />
            <button onClick={()=>handleAddCountry(props.country)}>Add country</button>
        </div>
    );
};

export default COUNTRY;