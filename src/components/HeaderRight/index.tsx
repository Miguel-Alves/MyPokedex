import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {
  Container,
  OrderButton,
  Hashtag,
  OrderArrow,
  AZText,
  PokemonHash,
} from './styles';

import arrowDown from '../../assets/Vector.png';

interface HeaderRightProps extends TouchableOpacityProps {
  children?: string;
  title: string;
  numberOrdered?: boolean;
  pokemonNumber?: number;
}
const HeaderRight: React.FC<HeaderRightProps> = ({
  children,
  numberOrdered,
  pokemonNumber,
  title,
  ...rest
}) => (
  <Container>
    {title === 'HomeScreen' ? (
      <OrderButton {...rest}>
        {numberOrdered ? <Hashtag>#</Hashtag> : <AZText>{'A\nZ'}</AZText>}
        <OrderArrow source={arrowDown} />
      </OrderButton>
    ) : (
      <PokemonHash>#{pokemonNumber}</PokemonHash>
    )}
  </Container>
);

export default HeaderRight;
