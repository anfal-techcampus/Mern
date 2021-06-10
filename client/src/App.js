import './App.css';
import {Router} from '@reach/router';
import {Container} from 'react-bootstrap';
import Pet from './components/Pet';
import CreatePet from './components/CreatePet';
import UpdatePet from './components/UpdatePet';
import PetDetails from './components/PetDetails';


function App() {
  return (
    <Container>
        <Router>
          <Pet path ="/" />
          <CreatePet path ="/pets/new" />
          <UpdatePet path ="/pets/:id/edit" />
          <PetDetails path ="/pets/:id" />
        </Router> 
    </Container>
  );
}

export default App;