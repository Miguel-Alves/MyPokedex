import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const PokeballBackground = styled.Image`
  position: absolute;
  width: 60%;
  height: 30%;
  right: 5%;
  top: 8px;
`;

export const PokemonInfoCard = styled.View`
  flex-direction: column;
  align-items: center;

  position: absolute;
  width: 98%;
  height: 65%;
  left: 1%;
  bottom: 1%;
  background: #ffffff;
  border-radius: 8px;
`;

export const PokemonImage = styled.Image`
  position: absolute;
  width: 70%;
  height: 55%;
  top: -40%;
`;

export const TypeView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
  width: 100%;
  height: 20px;
`;

export const TypeCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 8px;
  border-radius: 8px;
  margin-left: 12px;
  margin-right: 12px;
`;

export const TypeCardText = styled.Text`
  font-family: Poppins-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
`;

export const AboutView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  height: 22px;
`;

export const AboutText = styled.Text`
  font-family: Poppins-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
`;

export const SwitchRightPokemon = styled.TouchableOpacity`
  position: absolute;
  right: 5%;
  top: 30%;
`;

export const SwitchLeftPokemon = styled.TouchableOpacity`
  position: absolute;
  left: 5%;
  top: 30%;
`;
