import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Layout from '../constants/Layout';
import { WebBrowser } from 'expo';

export default class Card extends Component {
	formatDate (date = '') {
		const dateObj = new Date(date);
		return dateObj.toDateString();
	}

	handlePress() {
		WebBrowser.openBrowserAsync('https://expo.io');
	}

	render() {
		const { imageUri, author, date, title, description } = this.props.item;
		const dateTime = this.formatDate(date);
		return (
			<TouchableOpacity onPress={this.handlePress}>
				<View style={styles.cardContainer}>
						<Image
		        	source={{ uri: imageUri }}
		        	style={styles.cardImage}
		        	resizeMode="cover"
		        />
				    <Text style={styles.titleText}>{ title }</Text>
				    <View style={styles.metaContainer}>
				    	<Text style={styles.author}>{ author }</Text>
				    	<Text style={styles.date}>{ dateTime }</Text>
				    </View>
				    <Text style={styles.description}>{ description }</Text>
				</View>
			</TouchableOpacity>
		);
	}
}
const styles = StyleSheet.create({
	cardContainer: {
		height: 'auto',
		paddingBottom: 10
	},
	cardImage: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: 250,
		backgroundColor: 'rgba(0, 0, 0, 0)',
	},
	titleText: {
		textAlign: 'justify',
		marginTop: 10,
    fontSize: 18,
    color: '#0d0d0d',
    marginLeft: 5
	},
	metaContainer: {
		margin: 5,
		flexDirection:'row',
	},
	author: {
		flex: 1,
		fontSize: 12,
		justifyContent: 'flex-start',
	},
	date: {
		flex: 1,
		fontSize: 12,
		textAlign: 'right',
	},
	description: {
		padding: 10,
		textAlign: 'justify'
	}
});
