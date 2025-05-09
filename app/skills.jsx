import styles from '@/assets/styles/skills.js';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {

  const { width } = Dimensions.get('window');

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


  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <LinearGradient colors={['#50A793', '#35384A', '#35384A', '#1B202B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.mainContainer}>
        <Text style={styles.skillsTitle}>ACQUIRED SKILLS</Text>

        <LinearGradient colors={['#434B5E', '#6E7482', '#434B5E']} style={styles.skillCard}>
          <Text style={styles.skill}>Full-Stack{"\n"}Development</Text>
          <Text style={styles.skillDesc}>I often get the role of both front-end and back-end developer in group projects. I enjoy coding things from scratch, building seamless user experiences, and crafting ideas to life.</Text>
        </LinearGradient>

        <LinearGradient colors={['#434B5E', '#6E7482', '#434B5E']} style={styles.skillCard}>
          <Text style={styles.skill}>UI Design</Text>
          <Text style={styles.skillDesc}>Art is one thing I have been fond of doing since I was a kid. I love playing with colors and making simple yet appealing designs.</Text>
        </LinearGradient>

      </LinearGradient>
    </ScrollView>
  );
}