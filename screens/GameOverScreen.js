import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Color from '../constants/Color';
const GameOverScreen = props => {

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Game Over !</Text>
			<View style={styles.summaryContainer}>
				<Text>You've {props.rounds} rounds !</Text>
				<Text>You've {props.fails} fails !</Text>
				<Text>Selected number is : {props.userNumber} !</Text>
			</View>
			<View style={styles.btn}>
				<Button title="Restart Game" onPress={props.onRestart} color={Color.primary} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	summaryContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
		marginBottom: 20,
	},
	title: {
		fontSize: 20,
		marginVertical: 10
	},
	btn: {
		width: '100%'
	},

});

export default GameOverScreen;