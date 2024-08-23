import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import globalStyles from '@/styles/stylesGlobal';
import { colors } from '@/styles/stylesGlobal';

interface AppInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function AppInput({ placeholder, value, onChangeText }: AppInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingresa tu email *</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={globalStyles.PlaceholderText.color}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
  },
  label: {
    ...globalStyles.TitleInput,
    marginBottom: 10,
    marginHorizontal: '5%',
  },
  input: {
    width: '90%',
    marginHorizontal: '5%',
    height: 50,
    backgroundColor: colors.background1,
    borderRadius: 5,
    paddingHorizontal: 15,
    color: globalStyles.PlaceholderText.color,
    fontSize: 16,
  },
});
