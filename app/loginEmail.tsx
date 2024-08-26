import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from '@/components/text/title';
import { useState } from 'react';
import SocialButton from '@/components/buttons/socialButton';
import Background from '@/components/backgrounds/background';
import Paragraph from '@/components/text/paragraph';
import Divider from '@/components/dividers/divider';
import UnderlinedButton from '@/components/buttons/underlinesButton';
import AppInput from '@/components/inputs/inputField';
import AppButton from '@/components/buttons/blueContinueButton';

export default function LoginEmail() {
  const [userName, setUserName] = useState<string>('Name');
  const [userPassword, setUserPassword] = useState<string>('');

  const handleContinue = () => {
    console.log('Continue button pressed');
  };

  return (
    <Background position={"down"} hasIcon hasWaterMark>

      <View style={styles.title}>
        <View style={styles.wrapTitle}>
          <Title>
            Hola{"\n"}{userName}
          </Title>
        </View>

        <Paragraph>
          ¡Te estábamos extrañando! Para continuar ingresa tu contraseña
        </Paragraph>
      </View>

      <AppInput
        title={'Ingresa tu contraseña *'}
        placeholder="•••••••••••••••••••••"
        value={userPassword}
        onChangeText={(text) => setUserPassword(text)}
        secureTextEntry
      />

      <AppButton title="Ingresar" onPress={handleContinue} />

      <Divider />

      <UnderlinedButton text={'< No reconozco esta cuenta'} onPress={function (): void {
        throw new Error('Function not implemented.');
      }} />
    </Background>
  );
}

const styles = StyleSheet.create({
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: 15,
    alignItems: 'center',
  },
  title: {
    gap: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 5,
  },
  wrapTitle: {
    marginBottom: -10,
  }
});