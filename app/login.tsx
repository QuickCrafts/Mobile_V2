import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DolphinIcon from '@/components/icons/dolphinIcon';
import globalStyles from '@/styles/stylesGlobal';
import Title from '@/components/text/title';
import Subtitle from '@/components/text/subtitle';
import AppInput from '@/components/inputs/inputField';
import { useState } from 'react';
import AppButton from '@/components/buttons/blueContinueButton';
import SocialButton from '@/components/buttons/socialButton';
import Background from '@/components/backgrounds/background';
import Paragraph from '@/components/text/paragraph';
import Divider from '@/components/dividers/divider';

export default function Login() {
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    console.log('Continue button pressed');

    const handleGoogleSignIn = () => {
      console.log('Google sign-in pressed');
    };

    const handleFacebookSignIn = () => {
      console.log('Facebook sign-in pressed');
    };


  };
  return (
    <Background position={"down"} hasIcon hasWaterMark>

      <View style={styles.title}>
        <View style={styles.wrapTitle}>
          <Title>
            Bienvenido{"\n"}a QuickFins
          </Title>
        </View>

        <Paragraph>
          Ingresa o crea una nueva cuenta y comienza a mejorar tus finanzas personales
        </Paragraph>
      </View>

      <AppInput
        title={'Ingresa tu email *'}
        placeholder="example@mail.com"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <AppButton title="Continuar" onPress={handleContinue} />
      <Divider />

      <View style={styles.socialButtonsContainer}>
        <Paragraph>O continúa con</Paragraph>
        <SocialButton
          type="face"
          onPress={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <SocialButton
          type="google"
          onPress={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </View>
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