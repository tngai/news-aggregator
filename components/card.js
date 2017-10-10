import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import Layout from '../constants/Layout';
import { MonoText } from './StyledText';

export default class Card extends Component {
	formatDate (date = '') {
		const dateObj = new Date(date);
		return dateObj.toDateString();
	}

	handlePress(e) {
		return Alert.alert('e ', e);
	}

	render() {
		const { imageUri, author, date, title, description } = this.props;
		const dateTime = this.formatDate(date);
		return (
			<TouchableHighlight onPress={this.handlePress}>
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
			</TouchableHighlight>
		);
	}
}
const styles = StyleSheet.create({
	cardContainer: {
		height: 350,
		borderWidth: 3,
		borderColor: 'green',
		paddingBottom: 10,
	},
	cardImage: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0)',
	},
	titleText: {
		textAlign: 'justify',
		marginTop: 10,
    fontSize: 18,
    color: '#0d0d0d',
	},
	metaContainer: {
		marginTop: 10,
		flexDirection:'row',
	},
	author: {
		flex: 1,
		fontSize: 10,
		justifyContent: 'flex-start',
	},
	date: {
		flex: 1,
		fontSize: 10,
		textAlign: 'right',
	},
	description: {
		marginTop: 16,
		textAlign: 'justify'
	}
});
