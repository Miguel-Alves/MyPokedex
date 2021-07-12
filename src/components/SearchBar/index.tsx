import React from 'react';
import {TextInputProps} from 'react-native';
import {Container, SearchBarInput} from './styles';

interface SearchBarProps extends TextInputProps {
  onChangeText: Function;
  value: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onChangeText,
  value,
  ...rest
}) => (
  <Container>
    <SearchBarInput
      onChangeText={onChangeText}
      value={value}
      textAlign="center"
      placeholder="Procurar"
      placeholderTextColor={'#666666'}
    />
  </Container>
);

export default SearchBar;
