import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  canvas: {
    backgroundColor: '#FAFAFA',
    flex: 1
  },
  header: {
    backgroundColor: '#F5F5F5',
    elevation: 4,
    height: 56,
    justifyContent: 'center',
    paddingHorizontal: 16,
    position: 'relative',
  },
  headerText: {
    // fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: 'rgba(0,0,0,0.87)',
    letterSpacing: 0,
    lineHeight: 28,
    marginLeft: 56,
  },
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  assetHeader: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  assetHeaderText: {
    fontSize: 18
  },
  thumbnail: {
    width: 50,
    height: 50
  },
  thumbnailView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    height: 300,
    flex: 1,
    width: null
  },
  sheet: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 2,
    paddingHorizontal: 16,
  },
  input: {
    // fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: 'rgba(0,0,0,0.38)',
    paddingBottom: 8,
    lineHeight: 23,
    flex: 2
  },
  inputFocus: {
    color: 'rgba(0,0,0,0.87)',
  },
  inputLabel: {
    fontSize: 12,
    paddingTop: 16,
    paddingBottom: 8,
    flex: 1
  },
  inputContainer: {
    height: 72,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
});
