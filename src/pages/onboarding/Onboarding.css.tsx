import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  slide: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    height: '100%',
  },
  paginationDotStyle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.92)',
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
    marginHorizontal: 2,
  },
  inactiveDotStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  containerItem: {
    backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  words: {
    color: 'white',
    textAlign: 'center',
    marginTop: 8,
  },
  bigwords: {
    color: 'yellow',
    textAlign: 'center',
    marginTop: 8,
    fontSize: 30,
  },
  containerLogoAndTitle: {
    marginTop: 40,
  },
  containerOnboardingText: {
    paddingHorizontal: 50,
  },
  onboardingText: {
    textAlign: 'center',
    flexGrow: 1,
    marginTop: 110,
  },
  contaimerImageSliderImage: {
    height: 290,
    width: 290,
    flexGrow: 1,
  },
  topButtonsContainer: {
    marginBottom: 8,
  },
  startWord: {
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: '600',
    fontSize: 34,
    color: '#2C3131',
    marginBottom: 10,
  },
  contentWord: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: '#2C3131',
  },
  buttonPrimary: {
    backgroundColor: '#6652DE',
    paddingVertical: 12,
    borderRadius: 18,
  },
  buttonSecondary: {
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 18,
  },
  textCenter: {
    textAlign: 'center',
  },
  primaryText: {
    color: '#fff',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  secondaryText: {
    color: '#000',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
});
