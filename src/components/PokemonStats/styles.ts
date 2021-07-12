import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 0.9;
  width: 90%;
  align-items: center;
  justify-content: space-around;
  background-color: #e0e0e0;
`;

export const AtributeLineContainer = styled.View`
  height: 17%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AtributeNameContainer = styled.View`
  height: 100%;
  width: 15%;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

export const AtributeName = styled.Text`
  font-family: Poppins-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
`;

export const AtributeValuesContainer = styled.View`
  height: 100%;
  width: 84.5%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
`;

export const AtributeValue = styled.Text`
  font-family: Poppins-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  margin-left: 5px;
`;

export const AtributeBar = styled.View`
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
`;

export const AtributeBarMax = styled.View`
  height: 5%;
  width: 85%;
  background-color: #e0e0e0;
`;
