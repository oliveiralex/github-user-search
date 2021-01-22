import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../../core/components/Button';
import './styles.scss';

const Search = () => {
    const [user, setUser] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        // Request API
        axios(`https://api.github.com/users/${user}`)
        .then(response => console.log(response));
    }

    return (
        <div className="search-container">
            <div className="search-profile">
                <h1 className="search-title">
                    Encontre um perfil Github
                </h1>
                <form onSubmit={handleSubmit}>
                    <input
                        value={user}
                        name="user" 
                        type="text" 
                        className="search-form"
                        onChange={handleChange}
                        placeholder="Usuário Github"
                    />
                    <Button text="Encontrar" />
                </form>
            </div>
            <div className="data-container">
                <div className="profile-data">
                    <div className="profile-photo">
                        <img 
                            src="https://avatars.githubusercontent.com/u/2441741?v=4" 
                            alt="Image example" 
                            className="profile-photo-style" 
                        />
                    </div>
                    <div className="profile-info">
                        <div className="repo-info">
                            <div className="repo-info-style">
                                <span className="repo-text">Repositórios públicos: 62</span>  
                            </div>
                            <div className="repo-info-style">
                                <span className="repo-text">Seguidores: 127</span>  
                            </div>
                            <div className="repo-info-style">
                                <span className="repo-text">Seguindo: 416</span>  
                            </div>
                        </div>
                        <div className="personal-info">
                            <h1 className="info-text">Informações</h1>
                            <div className="info-container">
                                <span className="info-row">
                                    <span className="row-label">Empresa:&nbsp;</span> 
                                    IFTM
                                </span>
                            </div>
                            <div className="info-container">
                                <span className="info-row">
                                    <span className="row-label">Website/Blog:&nbsp;</span> 
                                    asdf@gmail.com
                                </span>
                            </div>
                            <div className="info-container">
                                <span className="info-row">
                                    <span className="row-label">Localidade:&nbsp;</span> 
                                    Uberlândia
                                </span>
                            </div>
                            <div className="info-container">
                                <span className="info-row">
                                    <span className="row-label">Membro desde:&nbsp;</span> 
                                    asdf@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-git">
                    <Button text="Ver perfil" />
                </div>
            </div>
        </div>
    );
}

export default Search;