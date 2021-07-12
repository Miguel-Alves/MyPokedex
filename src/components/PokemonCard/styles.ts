import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 31%;
  height: 112px;
  border: 1px solid;
  border-radius: 8px;
  margin: 1%;
`;

export const UpperPart = styled.View`
  height: 16px;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: #ffffff;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-radius: 8px;
`;

export const PokemonNumber = styled.Text`
  font-family: Poppins-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  margin-right: 10px;
`;

export const MiddlePart = styled.View`
  height: 72px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const PokemonImage = styled.Image`
  width: 72px;
  height: 72px;
`;

export const LowerPart = styled.View`
  height: 24px;
  justify-content: center;
  align-items: center;
`;
export const PokemonName = styled.Text`
  font-family: Poppins-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
`;
