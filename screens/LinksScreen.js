import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Card from '../components/card';

const data = [
  {
    imageUri: 'https://tctechcrunch2011.files.wordpress.com/2016/05/tcdisrupt_ny16-5302.jpg',
    title: 'Honest Company may be raising a down round',
    author: 'Connie Loizos',
    date: '2017-10-05T22:46:12Z',
    description: "The Honest Company, the five-year-old natural body and home care products company cofounded by the actress Jessica Alba, looks to be raising $75 million in..",
  }
];

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <View style={styles.container}>
        <Card {...data[0]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'blue',
  },
});
