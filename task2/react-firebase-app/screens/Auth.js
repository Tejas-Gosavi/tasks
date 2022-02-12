import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { auth, firebase_codes } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const Auth = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigation = useNavigation();

	useEffect(() => {
		// after mounting component get current user state
		const unsub = auth.onAuthStateChanged(user => {
			// if user is logged in then
			if (user) {
				// display Home screen
				navigation.replace('Home');
			}
		});
		
		return unsub;
	}, []);

	
	const userLogIn = () => {
		// log in with current email, password
		auth.signInWithEmailAndPassword(email, password)
			.then(() => {
				// if log in is successfully done then display msg with success toast
				Toast.show({
					type: 'success',
						text1: 'User successfully logged in!!!'
					});
			})
			.catch(error => {
				// if any error occurs then display error with error toast
				Toast.show({
					type: firebase_codes[error.code]['type'],
					text1: firebase_codes[error.code]['text'],
				});
			});
	};
		
	const userSignUp = () => {
		// sign up with current email, password
		auth.createUserWithEmailAndPassword(email, password)
			.then(() => {
				// if sign up is successfully done then display msg with success toast
				Toast.show({
					type: 'success',
					text1: 'User successfully created!!!'
				});
			})
			.catch(error => {
				// if any error occurs then display error with error toast
				Toast.show({
					type: firebase_codes[error.code]['type'],
					text1: firebase_codes[error.code]['text'],
				});
			});
	};

	return (
		<KeyboardAvoidingView style={styles.container} behavior='padding'>
			<Toast></Toast>
			<View style={styles.inputContainer}>
				<TextInput placeholder='Email' style={styles.inputField} value={email} onChangeText={text => setEmail(text)} />
				<TextInput placeholder='Password' style={styles.inputField} secureTextEntry value={password} onChangeText={text => setPassword(text)} />
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={[styles.button, styles.logInButton]} onPress={userLogIn}>
					<Text style={[styles.buttonText, styles.logInButtonText]}>Log In</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.button, styles.signUpButton]} onPress={userSignUp}>
					<Text style={[styles.buttonText, styles.signUpButtonText]}>Sign Up</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	)
};

export default Auth;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputContainer: {
		width: '80%',
	},
	inputField: {
		marginBottom: 10,
		paddingHorizontal: 15,
		paddingVertical: 18,
		backgroundColor: 'white',
		borderRadius: 3,
	},
	buttonContainer: {
		width: '80%',
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		width: '100%',
		padding: 15,
		borderRadius: 3,
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 16,
		fontWeight: '700',
	},
	logInButton: {
		marginBottom: 10,
		backgroundColor: 'dodgerblue',
	},
	logInButtonText: {
		color: 'white',
	},
	signUpButton: {
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: 'dodgerblue',
	},
	signUpButtonText: {
		color: 'dodgerblue',
	}
});