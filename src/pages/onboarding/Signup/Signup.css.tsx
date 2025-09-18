import { StyleSheet } from 'react-native';
import g from '../../../../src/assets/globalStyle';

export default StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bigwords: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 34,
    fontWeight: '400',
    color: 'black',
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 15
    
  },
  containerLogoAndTitle: {
    marginTop: (60), 
    alignItems: 'center' 
  },
  space: {
    width: 20,
    height: 20,
  },
  contentContainer: {
    paddingHorizontal: (60),
  },
  buttonsContainer: {
    marginTop: (30),
    marginBottom: (50),
    paddingVertical: 15,
    backgroundColor: '#6652DE',
    marginHorizontal: 20,
    borderRadius: 100
  },
  importButton: {
    marginTop: (16),
  },
  words: {
    fontFamily:'OpenSans-Regular',
    fontSize: 12,
    color: "#000",
    marginHorizontal: 20,
  },
  input: {
    backgroundColor: "transparent",
    height: (38),
    color: g.colors.black,
  },
  leftBoldText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    fontWeight: '600',
    color: g.colors.black,
    alignSelf: 'flex-start',
    marginHorizontal: 15,

  }, 
  spacing: {
    marginVertical: 5,
  },
  spacingPassword: {
    marginVertical: 5,
  },
  smallboldwords: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  passwordMatch: {
    paddingVertical: 5,
    marginHorizontal: 5,
    color: 'green'
  },
  passwordNoMatch: {
    paddingVertical: 5,
    marginHorizontal: 5,
    color: 'red'
  },
});
