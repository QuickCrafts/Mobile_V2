import React from 'react';
import { View } from 'react-native';
import DolphinIcon from '@/components/icons/dolphinIcon'; 
import globalStyles from '@/styles/stylesGlobal'; 
import Background from '@/components/backgrounds/background'; 


export default function Login() {
    return (
      <Background>
        <View>
          <DolphinIcon style={{ top: 40, left: 20 }} />
          {/* Other components will go here */}
        </View>
      </Background>
    );
  }