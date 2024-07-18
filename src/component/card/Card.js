 import React from "react";
 import { NavLink, useLocation } from "react-router-dom";


 function Card({ card, handleDelete }){
    const { path } = useLocation();

    return(
        <div>
            <table>
                <tbody>
                    <td>
                        <tr>{card.front}</tr>
                        <tr>{card.back}</tr>
                    </td>
                </tbody>
            </table>
            <div>
                <NavLink to={`${path}/cards/${card.id}/edit`}>
                    <button>Edit</button>
                </NavLink>
                <button type="button" onClick={() => handleDelete(card.id)}>Delete</button>
            </div>
        </div>
    );
 };

 export default Card;