import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';


export const TabTransition = ({ selectedTab, children }) => {
    const opacity = useSharedValue(0); // Controla la opacidad
    const translateY = useSharedValue(20); // Controla el desplazamiento vertical
  
    // Animación de entrada
    opacity.value = withTiming(1, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
    translateY.value = withTiming(0, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
  
    // Estilo animado
    const animatedStyle = useAnimatedStyle(() => {
      return {
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }],
      };
    });
  
    return <Animated.View style={animatedStyle}>{children}</Animated.View>;
  };