import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParams} from '../../navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams> {}

export const Pagina2Screen = ({navigation}: Props) => {
  // const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pagina 2</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Pagina3Screen')}>
        <Text style={styles.buttonText}>Ir a la Pagina 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
