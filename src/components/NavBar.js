import CartWidget from './CartWidet';
import './NavBar.css';

function NavBar(){
    return(
        <div>
            <header className='navbar'>
                <button>Home</button>
                <p>Nosotros</p>
                <button><CartWidget /></button>
            </header>
        </div>
    )

}

export default NavBar;


