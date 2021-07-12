import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 0.1;
  align-items: center;
  justify-content: center;
`;

export const OrderButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Hashtag = styled.Text`
  font-family: Poppins-Regular;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

export const AZText = styled.Text`
  flex-direction: column;
  font-family: Poppins-Bold;
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 10px;
`;

export const OrderArrow = styled.Image`
  margin-left: 5px;
`;

export const PokemonHash = styled.Text`
  font-family: Poppins-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 32px;
  color: #ffffff;
`;
