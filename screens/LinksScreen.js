import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Card from '../components/card';
import

const data = [
  {
    imageUri: 'https://tctechcrunch2011.files.wordpress.com/2016/05/tcdisrupt_ny16-5302.jpg',
    title: 'Honest Company may be raising a down round',
    author: 'Connie Loizos',
    date: '2017-10-05T22:46:12Z',
    description: 'The Honest Company, the five-year-old natural body and home care products company cofounded by the actress Jessica Alba, looks to be raising $75 million in..',
    articleUrl: 'https://techcrunch.com/2017/10/05/honest-company-may-be-raising-a-down-round/'
  },
  {
    imageUri: 'https://tctechcrunch2011.files.wordpress.com/2015/04/shutterstock_245957161.jpg',
    title: 'Nokia pulls out of OZO VR hardware, lays off 310, steps up in health and patents',
    author: 'Connie Loizos',
    date: '2017-10-10T07:18:44Z',
    description: 'Nokia, the once-mighty phone maker that eventually retreated to a business based around networking equipment and targeted verticals like health and imaging,..',
    articleUrl: 'https://techcrunch.com/2017/10/10/nokia-pulls-out-of-ozo-vr-hardware-lays-off-310-steps-up-in-health-and-patents/'
  }
];

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  _renderItem = (item) => {
    return (
      <Card {...item} />
    );
  };

  _keyExtractor = (item, index) => {
    return `${index}-${item.date}`;
  };

  render() {
    return (
        <View style={styles.container}>
        <FlatList style={styles.scrollList}
          data={data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollList: {
    height: 800
  }
});
