import React, {useEffect} from "react";
import {ActivityIndicator, Button, Text, View} from "react-native";
import {useSelector} from "react-redux";
import styles from "./styles";
import {useForm} from "react-hook-form";
import {TextField} from "@/components/TextField";
import {RootState} from "@/store";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {useLoginMutation} from "@/services/auth.api";
import { setIsLoggedIn } from "@/store/slices/authSlice";
import { setToken } from "@/services/tokenManager";

const LoginScreen = (props: any) => {
  const {navigate} = props.navigation;
  const dispatch = useAppDispatch();
  const {user} = useSelector((state: RootState) => state.auth);
  const [loginApi, {isLoading, error}] = useLoginMutation();

  const {control, handleSubmit, setValue, getValues} = useForm({
    mode: "all",
    defaultValues: {
      email: "hungvuong9002@gmail.com",
      password: "",
    },
  });
  useEffect(() => {
    setValue("email", "hungvuong9002@gmail.com");
    setValue("password", "StrongPass123!");
  }, [setValue]);
  const onSubmit = async (data: any) => {
    try {
      const res = await loginApi(data).unwrap();
      dispatch(setIsLoggedIn(true)); 
      setToken(res.data.token);
    } catch (err) {
      console.log("Login failed:", err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* <Logo style={styles.logo} width={160} height={122} /> */}
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.center}>
          <Text style={styles.description}>
            Welcome back. Input your details to pickup where you left off.
          </Text>
        </View>
        <TextField
          control={control}
          name="email"
          title="Email"
          placeholder="Enter your email"
          style={styles.textField}
        />
        <TextField
          control={control}
          title="Password"
          name="password"
          placeholder="Enter your password"
          style={styles.textField}
          secureTextEntry
        />
      </View>
      {isLoading && <ActivityIndicator />}
      <View style={styles.bottomContainer}>
        <Button title="Sign in" onPress={handleSubmit(onSubmit)} />
        <View style={styles.alreadyContainer}>
          <Text style={styles.alreadyAccount}>Don’t have account?</Text>
          <Button
            title="Sign up"
            onPress={() => {
              // navigate(routeNames.createAccount);
            }}
          />
        </View>
      </View>
    
    </View>
  );
};

export default LoginScreen;
