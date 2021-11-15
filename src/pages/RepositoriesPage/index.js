import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';
import { getLangsFrom } from '../../services/api';

const RepositoriesPage = () => {
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
      name: "API_Rest_Laravel",
      description: 'Descricao',
      html_url: "https://github.com/JeanSousa/API_Rest_Laravel",
      language: "PHP"
    },
    {
      name: "CarCrmReact",
      description: 'Descricao',
      html_url: "https://github.com/JeanSousa/CarCrmReact",
      language: "Javascript"
    },
    {
      name: "fisioSystem",
      description: 'Descricao',
      html_url: "https://github.com/JeanSousa/fisioSystem",
      language: "PHP"
    },
    {
      name: "Todo Ruby",
      description: 'Descricao',
      html_url: "https://github.com/JeanSousa/fisioSystem",
      language: "Ruby"
    },
    {
      name: "Schedule",
      description: 'Descricao',
      html_url: "https://github.com/JeanSousa/fisioSystem",
      language: "Java"
    },
    {
      name: "Todo",
      description: 'Descricao',
      html_url: "https://github.com/JeanSousa/fisioSystem",
      language: "Typescript"
    },
    {
      name: "Todo",
      description: 'Descricao',
      html_url: "https://github.com/JeanSousa/fisioSystem",
      language: null
    },
  ];

  const languages = getLangsFrom(repositories);


  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  )
};

export default RepositoriesPage;
