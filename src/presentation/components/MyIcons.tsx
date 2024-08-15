import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  color?: string;
  white?: boolean;
}

export const MyIcon = ({name, color, white = false}: Props) => {
  return <Icon style={styles.icon} color={color} name={name} size={30}/>;
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
