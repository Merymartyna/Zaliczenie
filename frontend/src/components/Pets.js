import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pet from './Pet/Pet';
import NewPet from './NewPet/NewPet';
import  Modal  from 'react-modal';
import EditPet from './EditPet/EditPet';
import axios from 'axios';
import{NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';



class Pets extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            pets : [],
            showEditModal:false,
            editPet: {}
        };
    }
    componentDidMount() {
        this.fetchPets();
    }
    async fetchPets()
    {
       const res = await axios.get('http://localhost:3001/api/pets');
       const pets = res.data;
     //  this.setState({ pets : res.data})
     this.setState({ pets })
    }

    async deletePet(id)
    {
        const pets = [...this.state.pets].filter(pet=>pet._id !== id);

        await axios.delete('http://localhost:3001/api/pets/'+ id);

        this.setState({pets});
    }

   async addPet(pet) {
        const pets= [...this.state.pets];
        try{
            const res= await axios.post('http://localhost:3001/api/pets', pet);
            const newPet = res.data;
            pets.push(newPet);
            this.setState({ pets });
        }catch(err){
            NotificationManager.error(err.response.data.message);
        }



    }

    async editPet(pet)
    {
        await axios.put('http://localhost:3001/api/pets/'+ pet._id, pet)


        const pets= [...this.state.pets];
        const index = pets.findIndex(x => x._id === pet._id)
        if(index >=0)
        {
            pets[index]= pet;
            this.setState({pets});
        }
        this.toggleModal();
    }

toggleModal()
{
this.setState({
    showEditModal:!this.state.showEditModal});
}

editPetHandler(pet) {
    this.toggleModal();
    this.setState({ editPet: pet });
  

}
    render()
    {
        return (
        <div className="container">
 
            <NotificationContainer />
        
            <NewPet onAdd={(pet)=> this.addPet(pet)}/>
            <Modal 
            isOpen={this.state.showEditModal}
            contentLabel="Edytuj"> 

            <EditPet  
            imie={this.state.editPet.imie}
            wiek={this.state.editPet.wiek}
            wielkosc={this.state.editPet.wielkosc}
            miasto={this.state.editPet.miasto}
            gatunek={this.state.editPet.gatunek}
            stan={this.state.editPet.stan}
            plec={this.state.editPet.plec}
            id={this.state.editPet._id}
            onEdit ={pet => this.editPet(pet)} />
             <div class="div d-grid gap-2 col-6 mx-auto" >
            <button class="btn btn-secondary" onClick={()=> this.toggleModal()}>Anuluj</button>
            </div>
            </Modal> 

           {this.state.pets.map(pet => (
            <div className="card text-center mt-3">
           <Pet 
            key={pet._id}
            imie={pet.imie}
            wiek={pet.wiek}
            id={pet._id}
            wielkosc={pet.wielkosc}
            miasto={pet.miasto}
            gatunek={pet.gatunek}
            stan={pet.stan}
            plec={pet.plec}
            onEdit={(pet)=>this.editPetHandler(pet)}
            onDelete={(id)=> this.deletePet(id)}
             />
            </div>
           
           ))} 
        </div>
        );
    }
}

export default Pets;