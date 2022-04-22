import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components'
import PlayerForm from './PlayerForm';
import TeamMaker from './TeamMaker';

function NavBar() {
  return (
      <div>
        <ul>
          <NavBarText>
            <Link to='/'>
              Compose Team
            </Link>
          </NavBarText>
          <NavBarText>
            <Link to='/TeamMaker'>
              First Quarter
            </Link>
          </NavBarText>
        </ul>
      
      </div>
  )
}

const NavBarText = styled.span`
  font-size: 10px;
`;

export default NavBar
