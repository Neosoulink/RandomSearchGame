import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Color from '../constants/Color';
import Input from '../components/Input';
import SelectedNumberContainer from '../components/SelectedNumberContainer';

const StartGameScreen = props => {

	const [enteredValue, setEnteredValue] = useState('');
	const numberInputHandler = inputText => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ''));
	};
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState();

	const resetInputHandler = () => {
		setConfirmed(false);
		setEnteredValue('');
	}

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredValue);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				'Bad value',
				'You must chose some numbers between 1 and 99',
				[{
					text: 'Okay',
					style: 'destructive',
					onPress: () => resetInputHandler()
				}]
			);
			return;
		}
		setConfirmed(true);
		setSelectedNumber(chosenNumber);
		setEnteredValue('');
		Keyboard.dismiss();
	}

	let confirmedOutput

	if (confirmed) {
		confirmedOutput = (
			<Card style={styles.summaryContainer}>
				<Text>You are chosen :</Text>
				<SelectedNumberContainer>{selectedNumber}</SelectedNumberContainer>
				<View><Button title="START GAME" color={Color.primary} onPress={() => props.onStartGame(selectedNumber)} /></View>
			</Card>
		);
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.screen}>
				<Text style={styles.title}>Start new game</Text>
				{confirmedOutput}
				<Card style={styles.summaryContainer}>
					<Text>Select a number</Text>
					<Input
						style={styles.input}
						blurOnSubmit
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType="number-pad"
						maxLength={2}
						onChangeText={numberInputHandler}
						value={enteredValue}
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.btnCard}><Button title="Reset" onPress={resetInputHandler} color={Color.accent} /></View>
						<View style={styles.btnCard}><Button title="Confirm" onPress={confirmInputHandler} color={Color.primary} /></View>
					</View>
				</Card>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		marginVertical: 10
	},
	summaryContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
		marginBottom: 20,
	},
	input: {
		width: 50,
		textAlign: 'center'
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	btnCard: {
		width: '40%'
	},

});

export default StartGameScreen;