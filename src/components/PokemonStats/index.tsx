import React from 'react';
import {TextProps} from 'react-native';
import {
  Container,
  AtributeLineContainer,
  AtributeName,
  AtributeValuesContainer,
  AtributeValue,
  AtributeBarMax,
  AtributeNameContainer,
  AtributeBar,
} from './styles';

interface PokemonStatsProps extends TextProps {
  hpValue: number;
  atkValue: number;
  defValue: number;
  satkValue: number;
  sdefValue: number;
  spdValue: number;
  color: string;
}

const PokemonStats: React.FC<PokemonStatsProps> = ({
  hpValue,
  atkValue,
  defValue,
  satkValue,
  sdefValue,
  spdValue,
  color,
  ...rest
}) => (
  <Container>
    <AtributeLineContainer>
      <AtributeNameContainer>
        <AtributeName style={{color: color}}>HP</AtributeName>
      </AtributeNameContainer>
      <AtributeValuesContainer>
        <AtributeValue>{hpValue}</AtributeValue>
        <AtributeBarMax>
          <AtributeBar style={{width: hpValue, backgroundColor: color}} />
        </AtributeBarMax>
      </AtributeValuesContainer>
    </AtributeLineContainer>
    <AtributeLineContainer>
      <AtributeNameContainer>
        <AtributeName style={{color: color}}>ATK</AtributeName>
      </AtributeNameContainer>
      <AtributeValuesContainer>
        <AtributeValue>{atkValue}</AtributeValue>
        <AtributeBarMax>
          <AtributeBar style={{width: atkValue, backgroundColor: color}} />
        </AtributeBarMax>
      </AtributeValuesContainer>
    </AtributeLineContainer>
    <AtributeLineContainer>
      <AtributeNameContainer>
        <AtributeName style={{color: color}}>DEF</AtributeName>
      </AtributeNameContainer>
      <AtributeValuesContainer>
        <AtributeValue>{defValue}</AtributeValue>
        <AtributeBarMax>
          <AtributeBar style={{width: defValue, backgroundColor: color}} />
        </AtributeBarMax>
      </AtributeValuesContainer>
    </AtributeLineContainer>
    <AtributeLineContainer>
      <AtributeNameContainer>
        <AtributeName style={{color: color}}>SATK</AtributeName>
      </AtributeNameContainer>
      <AtributeValuesContainer>
        <AtributeValue>{satkValue}</AtributeValue>
        <AtributeBarMax>
          <AtributeBar style={{width: satkValue, backgroundColor: color}} />
        </AtributeBarMax>
      </AtributeValuesContainer>
    </AtributeLineContainer>
    <AtributeLineContainer>
      <AtributeNameContainer>
        <AtributeName style={{color: color}}>SDEF</AtributeName>
      </AtributeNameContainer>
      <AtributeValuesContainer>
        <AtributeValue>{sdefValue}</AtributeValue>
        <AtributeBarMax>
          <AtributeBar style={{width: sdefValue, backgroundColor: color}} />
        </AtributeBarMax>
      </AtributeValuesContainer>
    </AtributeLineContainer>
    <AtributeLineContainer>
      <AtributeNameContainer>
        <AtributeName style={{color: color}}>SPD</AtributeName>
      </AtributeNameContainer>
      <AtributeValuesContainer>
        <AtributeValue>{spdValue}</AtributeValue>
        <AtributeBarMax>
          <AtributeBar style={{width: spdValue, backgroundColor: color}} />
        </AtributeBarMax>
      </AtributeValuesContainer>
    </AtributeLineContainer>
  </Container>
);

export default PokemonStats;
