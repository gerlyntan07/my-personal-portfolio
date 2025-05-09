import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.9;
const LIGHT_TEXT = 'rgb(231, 231, 231)';
const DARK_TEXT = 'rgb(65, 65, 65)';
const MINT_TEXT = '#43f6e0';
const CARD_SHADOW = '0 5px 10px rgba(0, 0, 0, 0.2)';
//section title size = 22
//section desc size = 16
const baseSectionTitleStyle = {
  fontFamily: 'Noto-Italic',
  fontSize: 22,
  color: MINT_TEXT,
  textAlign: 'center',
}

const baseDescriptionStyle = {
  fontFamily: 'Poppins-Reg',
  color: LIGHT_TEXT,
  fontSize: 16,
  textAlign: 'center',
  marginTop: 3,
  lineHeight: 22,
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80,
        paddingBottom: 50
    },
    skillsTitle: {
        fontFamily: 'Noto-Italic',
        fontSize: 28,
        color: MINT_TEXT,
        textAlign: 'center',
    },
    skillCard: {
        width: CARD_WIDTH,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: CARD_SHADOW,
        marginTop: 50,
    },
    skill: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: 'white',
        backgroundColor: '#39BAA1',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 50,
        borderWidth: 7,
        borderColor: '#35384A',
        marginTop: '-10%',
        textAlign: 'center',        
    },
    skillDesc: {
        fontFamily: 'Poppins-Reg',
        color: LIGHT_TEXT,
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 22,
        width: '80%',
        paddingBottom: 50,
        marginTop: 20,
    }
})

export default styles;