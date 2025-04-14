import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: 16,
  },
  gradient: {
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
  },
  rounderButton: {
    width: 84,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 16,
  },
  rounderBtntitle: {
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: 12,
  },
  defaultTitleIconBtn: {
    color: '#9C9C9C',
    fontWeight: 400,
    fontSize: 14,
  },
  defaultTitleTextBtn: {
    color: '#6552FE',
    fontWeight: 600,
    fontSize: 14,
  },
  badget: {
    position: 'absolute',
    top: 0,
    left: 9,
    padding: 4,
    backgroundColor: '#FF8266',
    color: '#FFFFFF',
    fontWeight: 400,
    fontSize: 12,
    borderRadius: 12,
    minWidth: 22,
    lineHeight: 14,
    textAlign: 'center',
  },
});
