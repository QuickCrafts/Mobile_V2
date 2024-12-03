import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Title from '@/components/text/title';
import { useState } from 'react';
import SocialButton from '@/components/buttons/socialButton';
import Background from '@/components/backgrounds/background';
import Paragraph from '@/components/text/paragraph';
import Divider from '@/components/dividers/divider';
import UnderlinedButton from '@/components/buttons/underlinesButton';
import AppInput from '@/components/inputs/inputField';
import AppButton from '@/components/buttons/blueContinueButton';
import { colors } from '@/styles/stylesGlobal';

export default function Register() {
  const [userPassword, setUserPassword] = useState<string>('');

  const handleContinue = () => {
    console.log('Continue button pressed');
  };

  return (
    <Background position={"down"} hasIcon hasWaterMark>

      <View style={styles.title}>
        <View style={styles.wrapTitle}>
          <Title>
            ¡Qué{"\n"}maravilla!
          </Title>
        </View>

        <Paragraph>
          Crea una contraseña para formar parte de QuickFins en segundos
        </Paragraph>
      </View>

      <AppInput
        title={'Contraseña *'}
        placeholder="nueva contraseña"
        value={userPassword}
        onChangeText={(text) => setUserPassword(text)}
        secureTextEntry
      />

      <AppButton title="Crear Cuenta" onPress={handleContinue} />

      <Divider />

      <View style={styles.terms}>
        <Text style={styles.privacy}>Al crear una cuenta en QuickFins, aceptas los</Text>
        <TouchableOpacity onPress={function (): void {
          throw new Error('Function not implemented.');
        }}>
          <Text style={styles.underlined}>Términos de Servicio</Text>
        </TouchableOpacity>
        <Text style={styles.privacy}>y</Text>
        <TouchableOpacity onPress={function (): void {
          throw new Error('Function not implemented.');
        }}>
          <Text style={styles.underlined}>Políticas de Privacidad</Text>
        </TouchableOpacity>
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
  },
  underlined: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'BalooBhai2_400Regular',
    color: colors.primaryMain,
    textDecorationLine: 'underline'
  },
  privacy: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'BalooBhai2_400Regular',
    color: colors.gray0,
  },
  terms:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }
});