import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { WebBrowser } from 'expo';

export default class Link extends Component {
	render() {
		return (
			<TouchableOpacity
	          onPress={() => WebBrowser.openBrowserAsync(this.props.url)}
	        >
	          <Text style={styles.link}>Powered by NewsAPI.org</Text>
	        </TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	link: {
	    color: 'blue',
	    textAlign: 'center',
	    paddingBottom: 10,
	}
});
