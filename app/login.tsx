import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import DolphinIcon from '@/components/icons/dolphinIcon'; 
import globalStyles from '@/styles/stylesGlobal'; 
import Background from '@/components/backgrounds/background'; 
import Title from '@/components/text/title'; 
import Subtitle from '@/components/text/subtitle';
import AppInput from '@/components/inputs/inputField';
import { useState } from 'react';
import AppButton from '@/components/buttons/blueContinueButton';
import SocialButton from '@/components/buttons/socialButton';



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
      <Background>
        <View>
          <DolphinIcon style={{ top: 40, left: 20 }} />

          <Title style={{ marginTop: 200, marginLeft: 20, position: 'absolute' }}>
            Bienvenido a QuickFins
            </Title>

          <Subtitle style={{ marginTop: 320, marginLeft: 20, marginRight: 20 }}>
          Ingresa o crea una nueva cuenta y comienza a mejorar tus finanzas personales
            </Subtitle>

          <AppInput
          placeholder="example@mail.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
           />

          <AppButton title="Continuar" onPress={handleContinue}  />

          <Text style={[globalStyles.Paragraph, { marginTop: 30, textAlign: 'center' }]}>
          O continúa con
            </Text>

          <View style={styles.socialButtonsContainer}>
          <SocialButton
              icon={require('@/assets/images/facebook_icon.png')} 
              onPress={function (): void {
                throw new Error('Function not implemented.');
              } }
          />
          <SocialButton
            icon={require('@/assets/images/google_icon.png')} 
            onPress={function (): void {
              throw new Error('Function not implemented.');
            } }
          />
        </View>

        </View>
      </Background>
    );
  }

  const styles = {
    socialButtonsContainer: {
      flexDirection: 'row', 
      justifyContent: 'center', 
      marginTop: 20,
    } as ViewStyle,
  };