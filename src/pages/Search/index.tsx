import React from 'react';
import Button from '../../core/components/Button';
import './styles.scss';

const Search = () => (
    <div className="search-container">
        <div className="search-profile">
            <h1 className="search-title">
                Encontre um perfil Github
            </h1>
            <input
                /*value={}*/
                name="user" 
                type="text" 
                className="search-form"
                /*onChange={}*/
                placeholder="Usuário Github"
            />
            <Button text="Encontrar"/>
        </div>
    </div>
);

export default Search;