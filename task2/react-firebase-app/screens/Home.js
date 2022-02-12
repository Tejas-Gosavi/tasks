import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { auth, firebase_codes } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const Home = () => {

	const navigation = useNavigation();

	const userSignOut = () => {
		// sign out current logged in user
		auth.signOut()
		.then(() => {
				// if user is successfully signed out then display Log in/sign up screen
				navigation.replace('Auth');
				// display msg with success toast
				Toast.show({
					type: 'success',
					text1: 'User successfully signed out!!!'
				});

			})
			.catch(error => {
				// if any error occurs then display error with error toast
				Toast.show({
					type: firebase_codes[error.code]['type'],
					text1: firebase_codes[error.code]['text'],
				});
			})
	};


	return (
		<View style={styles.container}>
			<Toast></Toast>
			<Text>Hello, </Text>
			<Text style={styles.title}>{ auth.currentUser?.email }</Text>
			<TouchableOpacity style={[styles.button, styles.signOutButton]} onPress={userSignOut}>
				<Text style={[styles.buttonText, styles.signOutButtonText]}>Sign out</Text>
			</TouchableOpacity>
		</View>
	)
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		marginBottom: 40,
	},
	button: {
		width: '80%',
		padding: 15,
		borderRadius: 3,
	},
	signOutButton: {
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: 'red',
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 16,
		fontWeight: '700',
	},
	signOutButtonText: {
		color: 'red',
	},
});