import React, { useState } from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';
import { getLangsFrom } from '../../services/api';

const RepositoriesPage = () => {

  const [currentLanguage, setCurrentLanguage] = useState()

  const user = {
    login: "JeanSousa",
    name: "Jean Sousa",
    avatar_url: "https://avatars.githubusercontent.com/u/38965322?v=4",
    followers: 0,
    following: 0,
    company: null,
    blog: "https://devsamurai.com.br",
    location: "Franca - SP",
  };

  const repositories = [
    {
      id: '1',
      name: "API_Rest_Laravel",
      description: 'Descricao',
      html_url: "https://github.com/JeanSousa/API_Rest_Laravel",
      language: "PHP"
    },
    {
      id: '2',
      name: "CarCrmReact",
      description: 'Descricao',
      html_url: "https://github.com/JeanSousa/CarCrmReact",
      language: "Javascript"
    },
    {
      id: '3',
      name: "fisioSystem",
      description: 'Descricao',
      html_url: "https://github.com/JeanSousa/fisioSystem",
      language: "PHP"
    },
    {
      id: '4',
      name: "Todo Ruby",
      description: 'Descricao',
      html_url: "https://github.com/JeanSousa/fisioSystem",
      language: "Ruby"
    },
    {
      id: '5',
      name: "Schedule",
      description: 'Descricao',
      html_url: "https://github.com/JeanSousa/fisioSystem",
      language: "Java"
    },
    {
      id: '6',
      name: "Todo",
      description: 'Descricao',
      html_url: "https://github.com/JeanSousa/fisioSystem",
      language: "Typescript"
    },
    {
      id: '7',
      name: "Todo",
      description: 'Descricao',
      html_url: "https://github.com/JeanSousa/fisioSystem",
      language: null
    },
  ];

  const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  }


  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages}
        currentLanguage={currentLanguage}
        onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
        repositories={repositories}
        currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  )
};

export default RepositoriesPage;
