import React from "react";
const {useState} = React;

const Searchbar = () => {
    const [search, setSearch] = useState('');

    const onChange = (e) => {
        console.log(e.target.value);
        search = e.terget.value;
    }

    return (
        <div>
            <div>
                <input
                    placeholder="Buscar pokemon"
                    onChange={onChange} />
            </div>
            <div>
                {search}
            </div>
        </div>
    );
};

export default Searchbar;