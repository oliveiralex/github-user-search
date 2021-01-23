import React, { useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs'
import Button from '../../core/components/Button';
import { UserResponse } from '../../core/types/User';
import ImageLoader from './Loaders/ImageLoader';
import InfoLoader from './Loaders/InfoLoader';
import './styles.scss';

const Search = () => {
    const [user, setUser] = useState('');
    const [userResponse, setUserResponse] = useState<UserResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setShowInfo(true);
        setIsLoading(true);
        axios(`https://api.github.com/users/${user}`)
        .then(response => setUserResponse(response.data))
        .finally(() => {
            setIsLoading(false);
        })
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
            { showInfo && 
            <div className="data-container">
                <div className="profile-data">
                    <div className="profile-photo">
                        {isLoading ? <ImageLoader /> : (
                            <>
                                <img 
                                    src={userResponse?.avatar_url} 
                                    alt={userResponse?.name} 
                                    className="profile-photo-style" 
                                />
                            </>
                        )}
                    </div>
                    <div className="profile-info">
                        {isLoading ? <InfoLoader /> : (
                            <>
                                <div className="repo-info">
                                    <div className="repo-info-style">
                                        <span className="repo-text">
                                            Repositórios públicos: {userResponse?.public_repos}
                                        </span>  
                                    </div>
                                    <div className="repo-info-style">
                                        <span className="repo-text">
                                            Seguidores: {userResponse?.followers}
                                        </span>  
                                    </div>
                                    <div className="repo-info-style">
                                        <span className="repo-text">
                                            Seguindo: {userResponse?.following}
                                        </span>  
                                    </div>
                                </div>
                                <div className="personal-info">
                                    <h1 className="info-text">Informações</h1>
                                    <div className="info-container">
                                        <span className="info-row">
                                            <span className="row-label">Empresa:&nbsp;</span> 
                                            {userResponse?.company}
                                        </span>
                                    </div>
                                    <div className="info-container">
                                        <span className="info-row">
                                            <span className="row-label">Website/Blog:&nbsp;</span> 
                                            {userResponse?.blog}
                                        </span>
                                    </div>
                                    <div className="info-container">
                                        <span className="info-row">
                                            <span className="row-label">Localidade:&nbsp;</span> 
                                            {userResponse?.location}
                                        </span>
                                    </div>
                                    <div className="info-container">
                                        <span className="info-row">
                                            <span className="row-label">Membro desde:&nbsp;</span> 
                                            {userResponse?.created_at}
                                        </span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="profile-git">
                    <a 
                        href={`https://github.com/${userResponse?.login}`} 
                        target="_blank" 
                        className="text-link"
                    >
                        <Button text="Ver perfil" />
                    </a>
                </div>
            </div>
            }
        </div>
    );
}

export default Search;