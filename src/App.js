import './App.css';
import Body from './components/Body';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

    const onAdd = () => {
      console.log("PRODUCTOS AGREGADOS");
}

  return (
    <div>
      <NavBar />
      <Body />
      <ItemListContainer grettings="Hola"/>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </div>
  );
}

export default App;
