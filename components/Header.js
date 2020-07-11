import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Color from '../constants/Color';

const Header = props => {
	return (
	<View style={ Style.header }>
			<Text style={Style.headerTitle} > {props.title} </Text>
	</View>
	);
}

const Style = StyleSheet.create({
	header: {
		width: "100%",
		height: 90,
		paddingTop: 36,
		backgroundColor: Color.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle:{
		color: 'white',
		fontSize: 18,
	}
});

export default Header;