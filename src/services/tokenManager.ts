import AsyncStorage from '@react-native-async-storage/async-storage';
import { setIsLoggedIn } from '../store/slices/authSlice';
import { useAppDispatch } from '../hooks/useAppDispatch';

let token = '';

export const setToken = async (newToken: string) => {
  token = newToken;
  try {
    await AsyncStorage.setItem('authToken', newToken);
  } catch (e) {
    console.error('Failed to save token to AsyncStorage', e);
  }
};

export const getToken = () => token;

export const loadToken = async () => {
  try {
    const storedToken = await AsyncStorage.getItem('authToken');
    token = storedToken || '';
  } catch (e) {
    console.error('Failed to load token from AsyncStorage', e);
  }
};

export const clearToken = async () => {
  try {
    await AsyncStorage.removeItem('authToken');
    token = '';
  } catch (e) {
    console.error('Failed to clear token from AsyncStorage', e);
  }
};

export const logout = async () => {
  try {
    await clearToken();
    // Dispatch actions like logging out the user
    // const dispatch = useAppDispatch(); // Uncomment if needed
    // dispatch(setIsLoggedIn(false));
    // dispatch(clearUser()); // Add your specific logout-related actions here
  } catch (e) {
    console.error('Failed to log out', e);
  }
};
