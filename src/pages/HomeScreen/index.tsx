/* eslint-disable space-infix-ops */
import React, {useState, useEffect, useContext} from 'react';
import {Alert, KeyboardAvoidingView, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';
import SearchBar from '../../components/SearchBar';
import AppContext from '../../contexts/AppContext';
import api from '../../services/api';

import {Container, PokemonList, ActivityIndicator} from './styles';

const HomeScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [numberOrdered, setNumberOrdered] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedList, setSelectedList] = useState(pokemonList);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const {pokemon, setPokemon} = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    getPokemons();
  }, []);

  async function getPokemons() {
    let pokemons: Array<{}> = [];

    for (let i = 1; i <= 151; i++) {
      await api
        .get(`pokemon/${i}`)
        .then(response => {
          let myPokemon = {
            id: response.data.id,
            name: response.data.name,
            height: response.data.height,
            abilities: response.data.abilities,
            image:
              response.data.sprites.other['official-artwork'].front_default,
            stats: response.data.stats,
            weight: response.data.weight,
            types: response.data.types,
          };

          pokemons.push(myPokemon);
        })
        .catch(error => {
          if (error.response) {
            Alert.alert(
              'Desculpe! Verifique sua conexão com a internet e tente novamente',
            );
          } else {
            Alert.alert(
              'Desculpe! Estamos passando por problemas. Tente novamente mais tarde.',
            );
          }
        });
    }

    setPokemonList(pokemons);
    setSelectedList(pokemons);
    setLoading(false);
  }

  const handleLeftButtonPress = () => {
    //do nothing cause, in this screen, its only the pokedex
    return false;
  };

  const handleRightButtonPress = () => {
    if (numberOrdered) {
      //if true, means the user wants to order by name
      const orderedList = pokemonList.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      setSelectedList(orderedList);
    } else {
      //name
      const orderedList = pokemonList.sort((a, b) => {
        return a.id - b.id;
      });

      setSelectedList(orderedList);
    }
    setNumberOrdered(!numberOrdered);
  };

  const handleChoosePokemon = item => {
    setPokemon(item);
    console.log(pokemon);
    navigation.navigate('PokemonScreen');
  };

  const formatData = () => {
    if (search === '') {
      return selectedList;
    } else {
      const searchPokemon = pokemonList.filter(function (el) {
        return el.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });

      return searchPokemon;
    }
  };

  const renderItem = ({item}) => {
    let color: string;

    switch (item.types[0].type.name) {
      case 'normal':
        color = '#AAA67F';
        break;
      case 'fighting':
        color = '#C12239';
        break;
      case 'flying':
        color = '#A891EC';
        break;
      case 'poison':
        color = '#A43E9E';
        break;
      case 'ground':
        color = '#DEC16B';
        break;
      case 'rock':
        color = '#B69E31';
        break;
      case 'bug':
        color = '#A7B723';
        break;
      case 'ghost':
        color = '#70559B';
        break;
      case 'steel':
        color = '#B7B9D0';
        break;
      case 'fire':
        color = '#F57D31';
        break;
      case 'water':
        color = '#6493EB';
        break;
      case 'grass':
        color = '#74CB48';
        break;
      case 'electric':
        color = '#F9CF30';
        break;
      case 'psychic':
        color = '#FB5584';
        break;
      case 'ice':
        color = '#9AD6DF';
        break;
      case 'dragon':
        color = '#7037FF';
        break;
      case 'dark':
        color = '#75574C';
        break;
      case 'fairy':
        color = '#E69EAC';
        break;
      default:
        color = '#272727';
    }

    return (
      <PokemonCard
        id={item.id}
        name={item.name}
        image={item.image}
        color={color}
        borderColor={color}
        onPress={() => handleChoosePokemon(item)}
      />
    );
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <Container>
        <Header
          title={'HomeScreen'}
          numberOrdered={numberOrdered}
          leftButtonDisabled={true}
          leftButtonBehaviour={() => handleLeftButtonPress()}
          rightButtonBehaviour={() => handleRightButtonPress()}
        />
        <SearchBar value={search} onChangeText={setSearch} />
        {loading ? (
          <ActivityIndicator size="large" color="#F57D31" />
        ) : (
          <PokemonList
            data={formatData()}
            numColumns={3}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </Container>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
