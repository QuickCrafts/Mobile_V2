import React from 'react';
import { View } from 'react-native';
import DolphinIcon from '@/components/icons/dolphinIcon'; 
import globalStyles from '@/styles/stylesGlobal'; 
import Background from '@/components/backgrounds/background'; 
import Title from '@/components/text/title'; 
import Subtitle from '@/components/text/subtitle';



export default function Login() {
    return (
      <Background>
        <View>
          <DolphinIcon style={{ top: 40, left: 20 }} />

          <Title style={{ top: 400, left: 20, position: 'absolute' }}>
            Bienvenido a QuickFins
            </Title>

          <Subtitle style={{ marginTop: 520, marginLeft: 20, marginRight: 20 }}>
          Ingresa o crea una nueva cuenta y comienza a mejorar tus finanzas personales
            </Subtitle>
          {/* Other components will go here */}
        </View>
      </Background>
    );
  }