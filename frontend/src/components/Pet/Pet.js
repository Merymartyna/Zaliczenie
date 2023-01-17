import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

function Pet(props){
   
    const [showDesc, setShowDesc] =useState(false);

    const toggleDesc = () =>
    {
        setShowDesc(!showDesc);
    }
    const editHandler =()=>{
        props.onEdit({
        imie:props.imie,
        wiek: props.wiek,
        wielkosc: props.wielkosc, 
        miasto: props.miasto, 
        plec: props.plec,
        gatunek:props.gatunek,
        _id: props.id,
        stan: props.stan });
    }
    return(
        <div className="pet">
             <div className="card-header bg-info-subtle">
                
           
            <h2 onClick={toggleDesc}>{props.imie}</h2>
            </div>
            {showDesc && (<p>{props.wielkosc}</p>)}
            <div class="container">
  <div class="row">
    <div class="col">
      Gatunek: 
    </div>
    <div class="col text-start">
    <div className='gatunek'>{props.gatunek}</div>
    </div>
    
  </div>
  <div class="row">
    <div class="col">
      Płeć: 
    </div>
    <div class="col text-start">
    <div className='plec'>{props.plec}</div>
    </div>
    
  </div>
  <div class="row">
    <div class="col">
      Wiek: 
    </div>
    <div class="col text-start">
    <div className='wiek'>{props.wiek}</div>
    </div>
    
  </div>
  <div class="row">
    <div class="col">
      Miejsce pobytu:  
    </div>
    <div class="col text-start">
    <div className='miasto'>{props.miasto}</div>
    </div>
    
  </div>
  <div class="row">
    <div class="col">
      Opis: 
    </div>
    <div class="col text-start">
    <div className='wielkosc'>{props.wielkosc}</div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      Stan: 
    </div>
    <div class="col text-start">
    <div className='stan'>{props.stan}</div>
    </div> 
  </div>
</div>
            <div class="d-grid gap-2 col-6 mx-auto">
            <Button variant="success" onClick={editHandler}>edytuj</Button>
            <Button className='delete' variant="danger" onClick={()=>props.onDelete(props.id)}>Usuń</Button>
            </div>
            </div>
    );
}
export default Pet;