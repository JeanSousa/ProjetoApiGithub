import React from 'react';

import { Container, Header, Avatar, Login, Name } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/38965322?v=4" />
      <Login>JeanSousa</Login>
      <Name>Jean Sousa</Name>
    </Header>
  </Container>
)


export default Profile
