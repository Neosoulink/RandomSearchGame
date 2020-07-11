import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Color from '../constants/Color';

const SelectedNumberContainer = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.selectedNumber}> {props.children} </Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: Color.accent,
		borderWidth: 2,
		borderRadius: 5,
		marginVertical: 10,
		padding: 3,
	},
	selectedNumber: {
		color: Color.accent,
		fontSize: 20,
	},

});

export default SelectedNumberContainer;