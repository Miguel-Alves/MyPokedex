import React, {useState, useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';
import AppContext from '../../contexts/AppContext';
import pokeballBackgroundImage from '../../assets/PokeballBackground.png';

import {
  AboutText,
  AboutView,
  Container,
  PokeballBackground,
  PokemonImage,
  PokemonInfoCard,
  TypeCard,
  TypeCardText,
  TypeView,
} from './styles';
import PokemonInfo from '../../components/PokemonInfo';

const PokemonScreen: React.FC = () => {
  const [color, setColor] = useState('#000000');
  const {pokemon, setPokemon} = useContext(AppContext);
  const navigation = useNavigation();

  useEffect(() => {
    let cardColor = colorSelector(pokemon.types[0]);
    setColor(cardColor);
    console.log(pokemon);
  }, []);

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  const handleRightButtonPress = () => {
    //does nothing cause, in this screen, it's only pokemon hash number
    return false;
  };

  const colorSelector = pokemonType => {
    let pokemonColor: string;

    switch (pokemonType.type.name) {
      case 'normal':
        pokemonColor = '#AAA67F';
        break;
      case 'fighting':
        pokemonColor = '#C12239';
        break;
      case 'flying':
        pokemonColor = '#A891EC';
        break;
      case 'poison':
        pokemonColor = '#A43E9E';
        break;
      case 'ground':
        pokemonColor = '#DEC16B';
        break;
      case 'rock':
        pokemonColor = '#B69E31';
        break;
      case 'bug':
        pokemonColor = '#A7B723';
        break;
      case 'ghost':
        pokemonColor = '#70559B';
        break;
      case 'steel':
        pokemonColor = '#B7B9D0';
        break;
      case 'fire':
        pokemonColor = '#F57D31';
        break;
      case 'water':
        pokemonColor = '#6493EB';
        break;
      case 'grass':
        pokemonColor = '#74CB48';
        break;
      case 'electric':
        pokemonColor = '#F9CF30';
        break;
      case 'psychic':
        pokemonColor = '#FB5584';
        break;
      case 'ice':
        pokemonColor = '#9AD6DF';
        break;
      case 'dragon':
        pokemonColor = '#7037FF';
        break;
      case 'dark':
        pokemonColor = '#75574C';
        break;
      case 'fairy':
        pokemonColor = '#E69EAC';
        break;
      default:
        pokemonColor = '#272727';
    }
    return pokemonColor;
  };

  return (
    <Container style={{backgroundColor: color}}>
      <PokeballBackground resizeMode="cover" source={pokeballBackgroundImage} />
      <Header
        title={'PokemonScreen'}
        numberOrdered={false}
        pokemonNumber={pokemon.id}
        pokemonName={pokemon.name}
        leftButtonDisabled={false}
        leftButtonBehaviour={() => handleBackButtonPress()}
        rightButtonDisabled={true}
        rightButtonBehaviour={() => handleRightButtonPress()}
      />
      <PokemonInfoCard>
        <PokemonImage source={{uri: `${pokemon.image}`}} />
        <TypeView>
          {pokemon.types.map((type, i) => {
            let typeCardColor = colorSelector(type);
            return (
              <TypeCard style={{backgroundColor: typeCardColor}}>
                <TypeCardText>{type.type.name}</TypeCardText>
              </TypeCard>
            );
          })}
        </TypeView>
        <AboutView>
          <AboutText style={{color: color}}>Sobre</AboutText>
        </AboutView>
        <PokemonInfo
          weight={pokemon.weight}
          height={pokemon.height}
          abilities={pokemon.abilities}
        />
        <AboutView>
          <AboutText style={{color: color}}>Status Base</AboutText>
        </AboutView>
      </PokemonInfoCard>
    </Container>
  );
};

export default PokemonScreen;
