import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawer from '@/components/CustomDrawer';
import { LinearGradient } from 'expo-linear-gradient';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    'Poppins-SemiBold': require('@/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Reg': require('@/assets/fonts/Poppins-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>        
        <Drawer drawerContent={CustomDrawer} screenOptions={{
          headerTransparent: true,          
          headerBackground: () => (
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.85)', 'rgba(0, 0, 0, 0.64)', 'rgba(0, 0, 0, 0.41)', 'rgba(0, 0, 0, 0.00)']}
              style={{ flex: 1 }}              
            />
          ),
          drawerStyle: {
            backgroundColor: 'rgba(87, 122, 119, 0.87)',
            width: '80%',
          },      
          headerTintColor: 'rgba(255, 255, 255, 0.93)',
          headerTitleStyle: {
            fontFamily: 'Poppins-Reg',
            fontSize: 18,
          },
          drawerLabelStyle: {
            fontFamily: 'Poppins-Reg',
            fontSize: 16,
          }
        }}>
          <Drawer.Screen 
            name="index" 
            options={{ 
              title: "About Me",              
              drawerInactiveTintColor: 'white',
              drawerActiveBackgroundColor: 'rgba(53, 56, 74, 0.7)',
              drawerActiveTintColor: 'white',
              drawerIcon: ({size, color}) => (
                <Ionicons name="person-outline" size={20} color='white' />
              ),               
            }} 
          />
          <Drawer.Screen 
            name="skills" 
            options={{               
              title: "Skills, Trainings & Certificates",
              drawerInactiveTintColor: 'white',
              drawerActiveBackgroundColor: 'rgba(53, 56, 74, 0.7)',
              drawerActiveTintColor: 'white',
              drawerIcon: ({size, color}) => (
                <Ionicons name="person-outline" size={20} color='white' />
              ),               
            }} 
          />
        </Drawer>
        <StatusBar style="light" />
      </GestureHandlerRootView>      
  );
}
