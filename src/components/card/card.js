import React from "react";
import './card.css';

const Card=(props)=>{

      const{name,id,email}=props.props;
      console.log(name)
    return(

        <div className="card-container">
            <img src={`https://robohash.org/${id}?set=set3&size=180x180`}/>
               <h4>{name}</h4>
            <p>{email}</p>
        </div>
    )

}

export default  Card;