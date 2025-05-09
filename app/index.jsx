import styles from '@/assets/styles/homescreen.js';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef, useState } from 'react';
import { ActivityIndicator, Dimensions, Image, ScrollView, Text, View } from 'react-native';

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

        <LinearGradient colors={['#434B5E', '#6E7482', '#434B5E']} style={styles.card}>
          <LinearGradient colors={['rgba(54, 128, 110, 0.1)', 'rgb(79, 136, 123)', 'rgb(69, 110, 100)']} style={styles.imageWrapper}>
            <Image source={mypic} style={styles.image} />
          </LinearGradient>

          <Text style={styles.intro}>
            say <Text style={styles.bold}>hello</Text> to my <Text style={styles.bold}>world</Text>! I’m
          </Text>

          <Text style={styles.name}>GERLYN TAN</Text>

          <View style={styles.divider} />

          <Text style={styles.description}>
            A passionate student dedicated to building appealing, creative, and user-friendly projects. Let’s craft your ideas into reality!
          </Text>
        </LinearGradient>


        <LinearGradient colors={['#87AD93', '#176E31']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.schoolContainer}>
          <View style={styles.cvsulogo_container}>
            <Image source={cvsuLogo} style={styles.cvsuLogoImg} />
          </View>          
          <View style={styles.yearAtcvsu}>
            <Text style={styles.cvsuLogoText}>3rd year Computer Science at Cavite State University - Bacoor Campus</Text>
          </View>          
        </LinearGradient>

        <View style={styles.famSection}>
          <Text style={styles.famSection_title}>MY ROOTS</Text>
          <Text style={styles.famSection_desc}>
            I came from a supportive and close-knit family. I am the <Text style={styles.famSection_emphasis}>eldest child</Text> of Roger and Emalyn Tan, and I have a sister who is 12 years younger. Our family is more sports-inclined but I think I am the first in my family, including our extended family, to pursue a <Text style={styles.famSection_emphasis}>computer-related degree</Text>.
          </Text>
        </View>

        <View style={styles.artsSection}>
          <Text style={styles.artsIntro1}>OUTSIDE TECH, I...</Text>
          <Text style={styles.artsIntro2}>enjoy various forms of art. I was able to earn money through my portraits.</Text>


          <View style={styles.igContainer}>
            <View style={styles.igTop}>
              <Image style={styles.igPFP} source={mypic} />
              <Text style={styles.igUName}>mehehehe__</Text>
            </View>

            <View style={styles.igBottom}>
              <View style={styles.numberContainer}>
                <Text style={styles.currNumber}>
                  {activeIndex + 1}/{IGCarouselData.length}
                </Text>
              </View>

              <ScrollView
                style={styles.imgSlides}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                scrollEventThrottle={16}
                ref={scrollRef}
              >
                {IGCarouselData.map((item) => (
                  <Image key={item.id} source={item.src} style={styles.igImg} />
                ))}
              </ScrollView>
            </View>

            <View style={styles.dotsContainer}>
              {IGCarouselData.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    index === activeIndex ? styles.activeDot : null,
                  ]}
                />
              ))}
            </View>

            <View style={styles.postActions}>
              <View style={styles.postActionsLeft}>
                <View>
                  {liked ? (
                    <AntDesign name="heart" size={30} color="red" onPress={() => setLiked(false)} />
                  ) : (
                    <AntDesign name="hearto" size={30} onPress={() => setLiked(true)}  />
                  )} 
                </View>                               
                <View>
                  <Feather name="message-circle" size={30} color="black" />
                </View>                
                <View>                  
                  <Octicons name="paper-airplane" size={25} style={{ transform: [{ rotate: '-15deg' }] }} color="black" />
                </View>
                
              </View>

              <View style={styles.postActionsRight}>
                <Feather name="bookmark" size={24} color="black" />
              </View>
            </View>

            <View style={styles.postDetails}>
              <Text style={styles.igName}>mehehehe__</Text>
              <Text style={styles.caption}>by me.</Text>
            </View>
          </View>

          <View style={styles.artsOutroContainer1}>
            <Text style={styles.artsOutro1}>Computer Science wasn’t even my first choice. Driven by financial struggles, I let go of my dream to become an architect. </Text>
          </View>

          <LinearGradient style={styles.artsOutroContainer2} colors={['rgb(47, 141, 119)', '#35384A']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <Text style={styles.artsOutro2}>But who knows? Maybe this is my calling—</Text>
            <Text style={styles.artsOutroEmphasis}>to be a woman in tech</Text>
          </LinearGradient>
        </View>

      </LinearGradient>
    </ScrollView>
  );
}