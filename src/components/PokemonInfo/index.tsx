import React from 'react';
import {ViewProps} from 'react-native';

import weightIcon from '../../assets/WeightIcon.png';
import heightIcon from '../../assets/HeightIcon.png';

import {
  Container,
  InfoCard,
  WeightIcon,
  HeightIcon,
  AboutText,
  UpperPart,
  AbilitiesUpperPart,
} from './styles';

interface PokemonInfoProps extends ViewProps {
  weight: string;
  height: string;
  abilities: {}[];
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({
  weight,
  height,
  abilities,
  ...rest
}) => (
  <Container>
    <InfoCard>
      <UpperPart>
        <WeightIcon source={weightIcon} />
        <AboutText>{weight} Kg</AboutText>
      </UpperPart>
      <AboutText>Peso</AboutText>
    </InfoCard>
    <InfoCard>
      <UpperPart>
        <HeightIcon source={heightIcon} />
        <AboutText>{height} m</AboutText>
      </UpperPart>
      <AboutText>Altura</AboutText>
    </InfoCard>
    <InfoCard>
      <AbilitiesUpperPart
        persistentScrollbar={true}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {abilities.map((ability, i) => {
          return <AboutText>{ability.ability.name}</AboutText>;
        })}
      </AbilitiesUpperPart>
      <AboutText>Habilidades</AboutText>
    </InfoCard>
  </Container>
);

export default PokemonInfo;
