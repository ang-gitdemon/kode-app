import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import {AuthOperationName, useAuth, useEmailPasswordAuth} from '@realm/react';

export const LoginScreen = () => {

	const {result, logInWithEmailPassword} = useAuth();
	const {register} = useEmailPasswordAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// Automatically log in after registration
	useEffect(() => {
		if (result.success && result.operation === AuthOperationName.Register) {
			logInWithEmailPassword({email, password});
		}
	}, [result, logInWithEmailPassword, email, password]);

	return (
		<View className='flex flex-row justify-center items-center h-full'>
			<View>
				<View>
					<TextInput
						className='border py-1 px-3'
						value={email}
						onChangeText={setEmail}
						autoComplete="email"
						textContentType="emailAddress"
						autoCapitalize="none"
						autoCorrect={false}
						placeholder="Email"
					/>
				</View>
				<View>
					<TextInput
						className='border py-1 px-3'
						value={password}
						onChangeText={setPassword}
						secureTextEntry
						autoComplete="password"
						textContentType="password"
						placeholder="Password"
					/>
				</View>

				{result?.error?.operation === AuthOperationName.LogInWithEmailPassword && (
					<Text>
						There was an error logging in, please try again{' '}
					</Text>
				)}

				{result?.error?.operation === AuthOperationName.Register && (
					<Text>
						There was an error registering, please try again
					</Text>
				)}

				<View className='flex flex-row'>
					<Pressable
						onPress={() => logInWithEmailPassword({email, password})}
						className='bg-primaryDarker p-2'
						// style={[styles.button, result.pending && styles.buttonDisabled]}
						disabled={result.pending}>
						<Text className='text-white'>Login</Text>
					</Pressable>

					<Pressable
						onPress={() => register({email, password})}
						className='bg-primaryDarker p-2'
						// style={[
						// 	styles.button,
						// 	result.pending && styles.buttonDisabled,
						// 	styles.registerButton,
						// ]}
						disabled={result.pending}>
						<Text className='text-white'>Register</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};
