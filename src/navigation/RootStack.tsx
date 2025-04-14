import React, {useEffect} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainTabs from "./MainTabs";
import AuthStack from "./AuthStack";
import {loadToken, getToken} from "../services/tokenManager";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {setIsLoggedIn, setMe} from "../store/slices/authSlice";
import {useAppSelector} from "../hooks/useAppSelector";
import {RootState} from "../store";
import SettingStack from "./SettingStack";
import { useLazyGetMeQuery } from "../services/auth.api";
const Stack = createNativeStackNavigator();

export default function RootStack() {
  const {isLoggedIn} = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const [getMe] =useLazyGetMeQuery();
  useEffect(() => {
    const init = async () => {
      await loadToken();
      const token = getToken();
      // console.log("token==", token);
      const me = await getMe({})
      dispatch(setMe(me.data?.data))
      if (token) {
        dispatch(setIsLoggedIn(true));
      }
    };
    init();
  }, [dispatch, getMe]);
 
  return (
    <Stack.Navigator
      key={isLoggedIn ? "app" : "auth"}
      screenOptions={{headerShown: false, animation: "none"}}>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="SettingStack" component={SettingStack} />
        </>
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
}
