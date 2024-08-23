import React from 'react';
import { View } from 'react-native';
import DolphinIcon from '@/components/icons/dolphinIcon'; 
import globalStyles from '@/styles/stylesGlobal'; 
import Background from '@/components/backgrounds/background'; 
import Title from '@/components/text/title'; 
import Subtitle from '@/components/text/subtitle';
import AppInput from '@/components/inputs/inputField';
import { useState } from 'react';



export default function Login() {
  const [email, setEmail] = useState('');
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

        </View>
      </Background>
    );
  }