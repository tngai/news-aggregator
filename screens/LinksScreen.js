import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Card from '../components/card';
import { connect } from 'react-redux';
import { getNewsArticles } from '../actions';
import _ from 'underscore';

class LinksScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Links',
  };

  _formatNewsResponse ({ payload }) {
    const { articles } = payload;

    console.warn('what was passed through ', articles);
  }

  componentWillMount () {
    return _.isEmpty(this.props.articles) && this.props.getNewsArticles('techcrunch');
  }

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
            data={this.props.articles}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />
        </View>
    );
  }
}
const mapStateToProps = (state={}) => {
  console.warn('prop state ', state);
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps, { getNewsArticles })(LinksScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollList: {
    height: 800
  }
});
