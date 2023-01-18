import React, { useState } from "react";

function NewPet(props)
{
    const [showForm, setShowForm] = useState (false);
    const [imie, setImie] = useState('');
  const [gatunek, setGatunek] = useState('');
  const [plec, setPlec] = useState('');
  const [wielkosc, setWielkosc] = useState('');
  const [wiek, setWiek] = useState('');
  const [miasto, setMiasto] = useState('');
  const [stan, setStan] = useState('');
 const changeImieHandler = event => {const value = event.target.value;setImie(value);}
const changeWiekHandler = event => {const value = event.target.value; setWiek(value);}
const changeWielkoscHandler = event => {const value = event.target.value; setWielkosc(value);};
 const changePlecHandler = event => {const value = event.target.value; setPlec(value);};
const changeMiastoHandler = event => {const value = event.target.value; setMiasto(value);}
const changeStanHandler = event => {const value = event.target.value;setStan(value);}
const changeGatunekHandler = event => {const value = event.target.value;setGatunek(value);}

const addPet =() => {
const pet = {
    imie: imie,
    gatunek:gatunek,
    plec: plec,
    wiek: wiek,
    miasto: miasto,
    stan: stan,
    wielkosc: wielkosc
};
props.onAdd(pet);
setImie('');
setGatunek('');
setMiasto('');
setPlec('');
setStan('');
setWielkosc('');
setWiek('');
setShowForm(false);


}
    return(
        showForm?(
        <div className="pet" class="form-group">
            <label>Imie:</label>
            <input type="text" class="form-control" value={imie} 
            onChange={changeImieHandler} />
            <label>Gatunek:</label>
            <input type="text" class="form-control" value={gatunek} 
            onChange={changeGatunekHandler} />
            <label>Wiek:</label>
            <input type="text" class="form-control" value={wiek} 
            onChange={changeWiekHandler}/>
            <label>Opis:</label>
            <input type="text" class="form-control" value={wielkosc} 
            onChange={changeWielkoscHandler}/>
            <label>plec:</label>
            <input type="text" class="form-control" value={plec} 
             onChange={changePlecHandler}/>
            <label>miasto:</label>
            <input type="text" class="form-control" value={miasto} 
            onChange={changeMiastoHandler}/>
            <label>stan:</label>
            <input type="text" class="form-control" value={stan} 
            onChange={changeStanHandler}/><br/>
            <button class="btn btn-success" onClick={()=> addPet()}>Dodaj</button>
        </div>
        ):(<button class="btn btn-success" onClick={()=> setShowForm(true)}>Nowe zwierze</button>)
    );
}
export default NewPet;