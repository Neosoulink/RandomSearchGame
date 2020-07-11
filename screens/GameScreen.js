import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

import SelectedNumberContainer from '../components/SelectedNumberContainer';
import Card from '../components/Card';
import Color from '../constants/Color';

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rndNum = Math.floor(Math.random() * (max - min)) + min;
	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}


const GameScreen = props => {
	
	const { userChoice, onGameOver } = props;
	const [rounds, setRounds] = useState(0);
	const [fails, setFails] = useState(0);

	const [currentGuess, setCurrentGuess] = useState(
		generateRandomBetween(1, 100, userChoice)
	);
	
	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	const nexGuessHandler = direction => {
		if (
			(direction === 'lower' && currentGuess < userChoice) ||
			(direction === 'greater' && currentGuess > userChoice)
		) {
			Alert.alert("don't lie", 'You know that this is wrong...', [{ text: 'Sorry', style: 'cancel' }]);
			setFails(fails + 1);
			return;
		}
		if (direction === 'lower') {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess;
		}
		const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
		setCurrentGuess(nextNumber);
		setRounds(rounds + 1);
	}

	useEffect(() => {
		if (currentGuess === userChoice) {
			onGameOver({rounds, fails});
		}
	}, [currentGuess, userChoice, onGameOver]);

	return (
		<View style={styles.screen}>
			<Text>Opponent's Guess</Text>
			<SelectedNumberContainer>{currentGuess}</SelectedNumberContainer>
			<Card style={styles.btnContainer}>
				<View style={styles.btnCard}><Button title="LOWER" onPress={nexGuessHandler.bind(this, 'lower')} color={Color.accent} /></View>
				<View style={styles.btnCard}><Button title="GREATER" onPress={nexGuessHandler.bind(this, 'greater')} color={Color.primary} /></View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	btnContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
		width: 300,
		maxWidth: '80%',
	},
	btnCard: {
		width: '40%'
	},
});

export default GameScreen;