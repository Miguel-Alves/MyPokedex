import React, {useState, useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';

import Header from '../../components/Header';
import AppContext from '../../contexts/AppContext';
import pokeballBackgroundImage from '../../assets/PokeballBackground.png';

import PokemonInfo from '../../components/PokemonInfo';
import PokemonStats from '../../components/PokemonStats';
import arrowLeft from '../../assets/ArrowLeft.png';
import arrowRight from '../../assets/ArrowRight.png';

import {
  AboutText,
  AboutView,
  Container,
  PokeballBackground,
  PokemonImage,
  PokemonInfoCard,
  SwitchLeftPokemon,
  SwitchRightPokemon,
  TypeCard,
  TypeCardText,
  TypeView,
} from './styles';

const PokemonScreen: React.FC = () => {
  const navigation = useNavigation();
  const [color, setColor] = useState('#000000');
  const {pokemon, setPokemon, pokemonList, setPokemonList} =
    useContext(AppContext);

  useEffect(() => {
    let cardColor = colorSelector(pokemon.types[0]);
    setColor(cardColor);
  }, []);

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  const handleRightButtonPress = () => {
    //does nothing cause, in this screen, it's only pokemon hash number
    return false;
  };

  const switchLeftPokemon = () => {
    if (pokemon.id !== 1) {
      return (
        <SwitchLeftPokemon onPress={() => handlePreviousPokemon()}>
          <Image source={arrowLeft} style={{height: 20, width: 14}} />
        </SwitchLeftPokemon>
      );
    }
    return;
  };

  const switchRightPokemon = () => {
    if (pokemon.id !== 151) {
      return (
        <SwitchRightPokemon onPress={() => handleNextPokemon()}>
          <Image source={arrowRight} style={{height: 20, width: 14}} />
        </SwitchRightPokemon>
      );
    }
    return;
  };

  async function handleNextPokemon() {
    let nextPokemon = pokemonList.filter(function (otherPokemon) {
      return otherPokemon.id === pokemon.id + 1;
    });

    console.log(nextPokemon);
    //navigation.dispatch(StackActions.replace('PokemonScreen'));
    //setPokemon(nextPokemon);
  }

  const handlePreviousPokemon = () => {
    let previousPokemon = pokemonList.filter(function (otherPokemon) {
      return otherPokemon.id === pokemon.id - 1;
    });
    console.log(previousPokemon);
    //setPokemon(previousPokemon);
    //setLoading(false);
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
      {switchLeftPokemon()}
      {switchRightPokemon()}
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
          weight={pokemon.weight / 10}
          height={pokemon.height / 10}
          abilities={pokemon.abilities}
        />
        <AboutView>
          <AboutText style={{color: color}}>Status Base</AboutText>
        </AboutView>
        <PokemonStats
          color={color}
          hpValue={pokemon.stats[0].base_stat}
          atkValue={pokemon.stats[1].base_stat}
          defValue={pokemon.stats[2].base_stat}
          satkValue={pokemon.stats[3].base_stat}
          sdefValue={pokemon.stats[4].base_stat}
          spdValue={pokemon.stats[5].base_stat}
        />
      </PokemonInfoCard>
    </Container>
  );
};

export default PokemonScreen;
