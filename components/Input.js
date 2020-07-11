import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
	return (
		<TextInput {...props} style={{ ...styles.input, ...props.style }} />
	);
};

const styles = StyleSheet.create({
	input: {
		height: 30,
		marginVertical: 10,
		borderBottomColor: 'gray',
		borderBottomWidth: 1
	}
});

export default Input;