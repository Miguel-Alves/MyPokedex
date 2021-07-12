import React from 'react';
import {
  Container,
  UpperPart,
  PokemonNumber,
  MiddlePart,
  PokemonImage,
  LowerPart,
  PokemonName,
} from './styles';

import {TouchableOpacityProps} from 'react-native';

interface PokemonCardProps extends TouchableOpacityProps {
  children?: string;
  name: string;
  id: number;
  image: string;
  color: string;
  borderColor: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  id,
  image,
  color,
  borderColor,
  ...rest
}) => (
  <Container
    {...rest}
    style={{backgroundColor: color, borderColor: borderColor}}>
    <UpperPart>
      <PokemonNumber style={{color: color}}>#{id}</PokemonNumber>
    </UpperPart>
    <MiddlePart>
      <PokemonImage source={{uri: `${image}`}} />
    </MiddlePart>
    <LowerPart>
      <PokemonName style={{color: '#f7f7f7'}}>{name}</PokemonName>
    </LowerPart>
  </Container>
);

export default PokemonCard;
