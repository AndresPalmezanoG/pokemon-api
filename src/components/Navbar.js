import React from "react";

const { useContext } = React;

const Navbar = () => {
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

return (
    <nav>
        <div/>
            <div>
                <img src={imgUrl} alt="pokemon-logo" className="navbar-image" />
            </div>
        <div/>
    </nav>
    );
};

export default Navbar;