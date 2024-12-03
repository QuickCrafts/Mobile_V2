import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from '@/components/text/title';
import { useState } from 'react';
import SocialButton from '@/components/buttons/socialButton';
import Background from '@/components/backgrounds/background';
import Paragraph from '@/components/text/paragraph';
import Divider from '@/components/dividers/divider';
import UnderlinedButton from '@/components/buttons/underlinesButton';

export default function LoginOther() {
  const [userName, setUserName] = useState<string>('Name');
  const [userLoginApp, setUserLoginApp] = useState<'face' | 'google'>('face');

  return (
    <Background position={"down"} hasIcon hasWaterMark>

      <View style={styles.title}>
        <View style={styles.wrapTitle}>
          <Title>
            Hola{"\n"}{userName}
          </Title>
        </View>

        <Paragraph>
          ¡Te estábamos extrañando! Para continuar da click en el siguiente botón
        </Paragraph>
      </View>

      {userLoginApp === 'face' ? (
        <SocialButton
          type="face"
          onPress={function (): void {
            throw new Error('Function not implemented.');
          }}
          withText
        />
      ) : (
        <SocialButton
          type="google"
          onPress={function (): void {
            throw new Error('Function not implemented.');
          }}
          withText
        />
      )}

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