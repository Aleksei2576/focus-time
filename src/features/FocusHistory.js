import { View, Text, StyleSheet, FlatList } from 'react-native';

export const FocusHistory = ({ history }) => {
  if(!history || !history.length) return null;

  const renderItem = ({item}) => <Text style={styles.item}>-{item}</Text>
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Things we've focused on:</Text>
      <FlatList data = {history} renderItem = {renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  text: {
    paddingTop: 5,
    paddingBottom: 10,
    color: 'white',
    fontWeight: 'bold'
  },
  item: {
    color: 'white'
  }
})