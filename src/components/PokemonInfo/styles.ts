import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 83%;
  height: 50px;
  margin-top: 10px;
  background-color: #e0e0e0;
`;

export const InfoCard = styled.View`
  align-items: center;
  justify-content: center;

  width: 33%;
  height: 100%;
  background-color: #ffffff;
`;

export const UpperPart = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
`;

export const WeightIcon = styled.Image`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const HeightIcon = styled.Image`
  width: 8px;
  height: 16px;
  margin-right: 8px;
`;

export const AboutText = styled.Text`
  font-family: Poppins-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
`;

export const AbilitiesUpperPart = styled.ScrollView`
  width: 100%;
  height: 80%;
`;
