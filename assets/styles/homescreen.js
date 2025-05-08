import { StyleSheet, Dimensions } from 'react-native';

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
  card: {
    width: CARD_WIDTH,
    borderRadius: 20,
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',    
    boxShadow: CARD_SHADOW,
    marginTop: 100,
  },
  imageWrapper: {
    backgroundColor: 'rgba(38, 77, 68, 0.6)',
    padding: 7,
    borderRadius: 100,
    marginTop: '-25%'
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  intro: {
    fontSize: 17,
    color: LIGHT_TEXT,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Poppins-Reg',
  },
  bold: {
    fontWeight: 'bold',
    color: '#fff',
  },
  name: {
    fontSize: 30,
    color: MINT_TEXT,
    fontFamily: 'Noto-Italic-Bold',
  },
  divider: {
    width: '60%',
    height: 1,
    backgroundColor: '#43f6e0',
  },
  description: {
    fontSize: 16,
    color: LIGHT_TEXT,
    textAlign: 'center',
    marginHorizontal: 30,
    marginTop: 25,
    marginBottom: 50,
    lineHeight: 25,
    fontFamily: 'Poppins-Reg',
  },
  schoolContainer: {
    width: CARD_WIDTH,
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
    borderRadius: 20,
    paddingVertical: 20,
    boxShadow: CARD_SHADOW,
  },
  cvsuLogoImg: {
    width: 90,
    height: 80,
  },
  cvsuLogoText: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'left',
    fontFamily: 'Poppins-Reg',
    width: '55%',
  },
  artsSection: {
    width: CARD_WIDTH,
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  artsIntro1: {
    ...baseSectionTitleStyle
  },
  artsIntro2: {
    fontFamily: 'Poppins-Reg',
    color: LIGHT_TEXT,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 3,
    lineHeight: 22,
    marginHorizontal: 30,
  },
  igContainer: {
    width: CARD_WIDTH - 10,
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  igPFP: {
    width: 35,
    height: 35,
    borderRadius: 100,
  },
  igTop: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginLeft: 40
  },
  igUName: {
    fontFamily: 'Poppins-SemiBold',
    color: DARK_TEXT,
    fontSize: 15,
    marginLeft: 5,
  },
  igBottom: {
    width: CARD_WIDTH - 40,
    height: CARD_WIDTH - 40,
    marginTop: 10,
    position: 'relative',
    alignItems: 'center',
  },
  imgSlides: {
    width: CARD_WIDTH - 40,
    height: CARD_WIDTH - 40,
  },
  igImg: {
    width: CARD_WIDTH - 40,
    height: CARD_WIDTH - 40,
    resizeMode: 'cover',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: 'rgb(58, 201, 189)',
    width: 8,
    height: 8,
  },
  numberContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 50,
    zIndex: 1,
  }, 
  currNumber: {
    color: LIGHT_TEXT,
    fontSize: 12,
    fontFamily: 'Poppins-Reg',
  },
  postActions: {
    width: CARD_WIDTH - 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  postActionsLeft: {
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postActionsRight: {
    width: '10%',
    justifyContent: 'end',
    alignItems: 'center',
  },
  postDetails: {
    width: CARD_WIDTH - 50,
    justifyContent: 'start',
    flexDirection: 'row',
    marginTop: 10,
  },
  igName: {
    fontFamily: 'Poppins-SemiBold',
    color: DARK_TEXT,
    fontSize: 15,
    marginRight: 5
  },
  caption: {
    fontFamily: 'Poppins-Reg',
    color: DARK_TEXT,
    fontSize: 15,
  },
  artsOutroContainer1:{
    width: CARD_WIDTH - 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  artsOutroContainer2:{
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingVertical: 50,
  },
  artsOutro1: {
    fontFamily: 'Poppins-Reg',
    fontSize: 17,
    color: LIGHT_TEXT,
    textAlign: 'center',
  },
  artsOutro2: {
    fontFamily: 'Noto-Italic',
    fontSize: 17,
    color: LIGHT_TEXT,
    textAlign: 'center',
    width: '85%',
  }, 
  artsOutroEmphasis: {
    fontFamily: 'Noto-Italic-Bold',
    fontSize: 17,
    color: LIGHT_TEXT,
    textAlign: 'center',
    width: '85%',
  }, 
  famSection: {
    width: CARD_WIDTH - 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  famSection_title: {
    ...baseSectionTitleStyle
  },
  famSection_desc: {
    ...baseDescriptionStyle
  },
  famSection_emphasis: {
    fontFamily: 'Poppins-Bold',
  }
});

export default styles;