import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { useController } from 'react-hook-form';
import styles from './styles';
// import { IconButton } from '..';
// import { Eye, EyeSlash } from 'iconsax-react-native';

export const TextField = (props: any) => {
  const {
    field,
    // formState: { errors },
  } = useController({
    name: props.name,
    control: props.control,
    rules: props.rules,
  });

  // const [isFocus, setFocus] = useState(false);
  const [hideText, setHideText] = useState(props.secureTextEntry);

  // const handleFocus = () => setFocus(true);
  // const handleBlur = () => {
  //   setFocus(false);
  //   field.onBlur?.();
  // };

  const handleHideText = () => setHideText(!hideText);

  const paddingRight = props.secureTextEntry ? 32 : 0;

  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text style={{ ...styles.title, ...props.titleStyle }}>
        {props.title}
      </Text>
      <TextInput
        {...props}
        secureTextEntry={hideText}
        placeholder={props.placeholder}
        placeholderTextColor={'#9C9C9C'}
        style={{
          ...styles.textInput,
          paddingRight: paddingRight,
        }}
        onBlur={() => {
          // handleBlur();
          props.onBlur?.();
        }}
        onFocus={() => {
          // handleFocus();
          props.onFocus?.();
        }}

        onChangeText={(value: any) => {
          field.onChange(value);
          if (props.onChangeText) {
            props.onChangeText(value);
          }
        }}
        value={field.value}
      />

      {props.secureTextEntry &&
        (hideText ? (
          <View style={styles.suffixIcon}>
            {/* <IconButton
              icon={<Eye color="#FFFFFF" size={24} variant="Linear" />}
              onPress={handleHideText}
            /> */}
          </View>
        ) : (
          <View style={styles.suffixIcon}>
            {/* <IconButton
              icon={<EyeSlash color="#FFFFFF" size={24} variant="Linear" />}
              onPress={handleHideText}
            /> */}
          </View>
        ))}
      {/* <LinearGradient
        colors={['#9C9C9C', '#363636']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.line}
      /> */}
    </View>
  );
};
