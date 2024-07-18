
import React from 'react';
import { NavLink } from 'react-router-dom';

function CardAdd({ path }){
    return(
        <NavLink to={`${path}/cards/new`}><button>Add Cards</button>
        </NavLink>
    );
};

export default CardAdd;