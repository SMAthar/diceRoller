import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';

import diceOne from './assets/dice1.png';
import diceTwo from './assets/dice2.png';
import diceThree from './assets/dice3.png';
import diceFour from './assets/dice4.png';
import diceFive from './assets/dice5.png';
import diceSix from './assets/dice6.png';

const App = () => {
  const [uri, setUri] = React.useState(diceOne);
  const [uri2, setUri2] = React.useState(diceOne);

  const playButtonTapped = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setUri(diceOne);
        break;
      case 2:
        setUri(diceTwo);
        break;
      case 3:
        setUri(diceThree);
        break;
      case 4:
        setUri(diceFour);
        break;
      case 5:
        setUri(diceFive);
        break;
      case 6:
        setUri(diceSix);
        break;
      default:
        setUri(diceOne);
        break;
    }

    switch (randomNumber2) {
      case 1:
        setUri2(diceOne);
        break;
      case 2:
        setUri2(diceTwo);
        break;
      case 3:
        setUri2(diceThree);
        break;
      case 4:
        setUri2(diceFour);
        break;
      case 5:
        setUri2(diceFive);
        break;
      case 6:
        setUri2(diceSix);
        break;
      default:
        setUri2(diceOne);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Image source={uri} style={styles.image} />
      <Image source={uri2} style={styles.image} />
      <TouchableOpacity onPress={playButtonTapped}>
        <Text style={styles.gamePlayButton}>Play Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  gamePlayButton: {
    fontSize: 20,
    marginTop: 30,
    color: '#F2A365',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#30475E',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold',
  },
});

export default App;
