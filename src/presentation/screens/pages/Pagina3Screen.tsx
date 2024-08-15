import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParams} from '../../navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams> {}

export const Pagina3Screen = ({navigation}: Props) => {
  // const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pagina 3</Text>
      <Pressable style={styles.button} onPress={() => navigation.pop()}>
        <Text style={styles.buttonText}>Regresar</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.popToTop()}>
        <Text style={styles.buttonText}>Al inicio</Text>
      </Pressable>
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
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
