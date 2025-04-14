import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor:'black'
  },
  logo: {
    marginTop: 44,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: 32,
    textAlign: 'center',
  },
  description: {
    color: '#9C9C9C',
    marginTop: 16,
    fontWeight: 400,
    fontSize: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  walletContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 32,
  },
  wallet: {},
  textField: {
    marginTop: 32,
  },
  bottomContainer: {
    gap: 16,
    flex: 1,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 42,
  },
  alreadyContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  alreadyAccount: {
    color: '#6A6A6A',
    fontWeight: 400,
    fontSize: 14,
  },
  orContinueWith: {
    marginTop: 40,
    color: '#FFFFFF',
    fontWeight: 400,
    fontSize: 12,
    textAlign: 'center',
  },
  socialBtnContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  formContainer: {
    flex: 2,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
