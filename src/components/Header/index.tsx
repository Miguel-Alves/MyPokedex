import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import HeaderLeft from '../HeaderLeft';
import HeaderRight from '../HeaderRight';

import {Container, Title} from './styles';

interface HeaderProps extends TouchableOpacityProps {
  children?: string;
  title: string;
  numberOrdered: boolean;
  pokemonNumber?: number;
  pokemonName?: string;
  leftButtonDisabled?: boolean;
  leftButtonBehaviour: Function;
  rightButtonDisabled?: boolean;
  rightButtonBehaviour: Function;
}

const Header: React.FC<HeaderProps> = ({
  title,
  numberOrdered,
  pokemonNumber,
  pokemonName,
  leftButtonDisabled,
  leftButtonBehaviour,
  rightButtonDisabled,
  rightButtonBehaviour,
  ...rest
}) => (
  <Container>
    <HeaderLeft
      title={title}
      disabled={leftButtonDisabled}
      onPress={leftButtonBehaviour}
    />
    {title === 'HomeScreen' ? (
      <Title>Pokédex</Title>
    ) : (
      <Title style={{color: '#ffffff'}}>{pokemonName}</Title>
    )}
    <HeaderRight
      title={title}
      disabled={rightButtonDisabled}
      pokemonNumber={pokemonNumber}
      onPress={rightButtonBehaviour}
      numberOrdered={numberOrdered}
    />
  </Container>
);

export default Header;
