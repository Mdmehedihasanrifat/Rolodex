import React from 'react'
import './card-list.css'
import Card from "../card/card";
const CardList=(props)=>{
  const Monsters= props.props;

    return( <div>
      {
        <Card props={Monsters}></Card>
    }
</div>)

}

export default CardList;