import React, {useState} from "react";

 export default function EditPet(props){

    const [imie, setImie] = useState(props.imie);
    const [gatunek, setGatunek] = useState(props.gatunek);
    const [plec, setPlec] = useState(props.plec);
    const [wielkosc, setWielkosc] = useState(props.wielkosc);
    const [wiek, setWiek] = useState(props.wiek);
    const [miasto, setMiasto] = useState(props.miasto);
    const [stan, setStan] = useState(props.stan);

    const changeImieHandler = event => {const value = event.target.value;setImie(value);}
    const changeWiekHandler = event => {const value = event.target.value; setWiek(value);}
    const changeWielkoscHandler = event => {const value = event.target.value; setWielkosc(value);};
    const changePlecHandler = event => {const value = event.target.value; setPlec(value);};
    const changeMiastoHandler = event => {const value = event.target.value; setMiasto(value);}
    const changeStanHandler = event => {const value = event.target.value;setStan(value);}
    const changeGatunekHandler = event => {const value = event.target.value;setGatunek(value);}

    const editPet = () => {
        const pet = {
            imie: imie,
            wiek: wiek,
            _id: props.id,
            gatunek: gatunek,
            miasto: miasto,
            plec:plec,
            stan:stan,
            wielkosc:wielkosc
          };
          props.onEdit(pet);
    
    }
    return(
        <div class="container text-center">
            <div class="row text-center">
                <h2>Edytuj dane zwierzaka o imieniu: {imie}</h2>
                </div> 
  <div class="row ">
    <label>Imie:</label>
            <input type="text" class="form-control" value={imie} 
            onChange={changeImieHandler} />
    <div class="row">
    <label>Gatunek:</label>
            <input type="text" class="form-control" value={gatunek} 
            onChange={changeGatunekHandler} />
    </div>
  </div>
  <div className="pet">
  <div class="row">
    <label>Wiek:</label>
            <input type="text" class="form-control" value={wiek} 
            onChange={changeWiekHandler}/>
            </div>
    <div class="row">
    <label>Opis:</label>
            <input type="text" class="form-control" value={wielkosc} 
            onChange={changeWielkoscHandler}/>
    </div>
    <div class="row">
    <label>plec:</label>
            <input type="text" class="form-control" value={plec} 
             onChange={changePlecHandler}/>
    </div>
    

    <div class="row">
    <label>miasto:</label>
            <input type="text" class="form-control" value={miasto} 
            onChange={changeMiastoHandler}/>
    </div>
    <div class="row">
    <label>stan:</label>
            <input type="text" class="form-control" value={stan} 
            onChange={changeStanHandler}/>
    </div>
    <br/>
    <div class="div d-grid gap-2 col-6 mx-auto">
    <button class="btn btn-success" onClick={() => editPet()}>Zapisz</button><br/>
</div>
  
        
            </div>
            </div>

    );
 }
