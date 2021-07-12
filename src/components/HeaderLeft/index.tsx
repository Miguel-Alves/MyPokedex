import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import pokeballImg from '../../assets/Pokeball.png';
import leftArrow from '../../assets/Left.png';

import {Container, PokeballImage, BackButton, BackButtonImage} from './styles';

interface HeaderLeftProps extends TouchableOpacityProps {
  title: string;
  children?: string;
}
const HeaderLeft: React.FC<HeaderLeftProps> = ({title, ...rest}) => (
  <Container {...rest}>
    {title === 'HomeScreen' ? (
      <PokeballImage source={pokeballImg} />
    ) : (
      <BackButtonImage source={leftArrow} />
    )}
  </Container>
);

export default HeaderLeft;
