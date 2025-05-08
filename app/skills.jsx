import React, { useRef, useState } from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '@/assets/styles/homescreen.js';
import { useFonts } from 'expo-font';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';

import mypic from '@/assets/images/1x1-grad pic.jpg';
import cvsuLogo from '@/assets/images/cvsu-logo.png';


export default function HomeScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const scrollRef = useRef(null);

  const { width } = Dimensions.get('window');
  const sliderWidth = (width * 0.9) - 40;

  const onScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / sliderWidth);
    setActiveIndex(index);
  };

  const [fontsLoaded] = useFonts({
    'Poppins-Reg': require('@/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('@/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.ttf'),
    'NotoSerif': require('@/assets/fonts/NotoSerif-VariableFont_wdth,wght.ttf'),
    'Noto-Italic': require('@/assets/fonts/NotoSerif-Italic-VariableFont_wdth,wght.ttf'),
    'Noto-Italic-Bold': require('@/assets/fonts/noto-serif.bold-italic.ttf'),
    'SpaceMono': require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#43f6e0" />
      </View>
    );
  }

  const IGCarouselData = [
    { id: 1, src: require('@/assets/images/1.jpg') },
    { id: 2, src: require('@/assets/images/2.jpg') },
    { id: 3, src: require('@/assets/images/paint-on-tote.jpg') },
    { id: 4, src: require('@/assets/images/4.jpg') },
    { id: 5, src: require('@/assets/images/5.jpg') },
    { id: 6, src: require('@/assets/images/roxe.jpg') },
    { id: 7, src: require('@/assets/images/knitting.jpg') },
    { id: 8, src: require('@/assets/images/knitted-shoulder-bag.jpg') },
  ]

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <LinearGradient colors={['#50A793', '#35384A', '#35384A', '#1B202B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.mainContainer}>


        <LinearGradient colors={['#87AD93', '#176E31']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.schoolContainer}>
          <Image source={cvsuLogo} style={styles.cvsuLogoImg} />
          <Text style={styles.cvsuLogoText}>3rd year Computer Science at Cavite State University - Bacoor Campus</Text>
        </LinearGradient>


      </LinearGradient>
    </ScrollView>
  );
}