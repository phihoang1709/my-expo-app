
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export const IconButton = (props: any) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...styles.container, ...props.style }}
      disabled={props.disabled}>
      {props.icon}
      {props.title ? (
        <Text style={{ ...styles.defaultTitleIconBtn, ...props.titleStyle }}>
          {props.title}
        </Text>
      ) : null}
      {props.badget ? (
        <Text style={{ ...styles.badget, ...props.badgetStyle }}>
          {props.badget}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};