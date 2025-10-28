import React, { useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Moon, Sun } from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme, colors } = useTheme();
  const rotation = useSharedValue(0);
  const scale = useSharedValue(1);

  useEffect(() => {
    rotation.value = withSpring(theme === 'dark' ? 180 : 0);
  }, [theme]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { rotate: `${rotation.value}deg` },
      { scale: scale.value },
    ],
  }));

  const handlePress = () => {
    scale.value = withSpring(0.8, {}, () => {
      scale.value = withSpring(1);
    });
    toggleTheme();
  };

  return (
    <Pressable onPress={handlePress}>
      <Animated.View
        style={[
          animatedStyle,
          {
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: colors.surface,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4,
          },
        ]}
      >
        {theme === 'light' ? (
          <Sun size={24} color={colors.primary} />
        ) : (
          <Moon size={24} color={colors.primary} />
        )}
      </Animated.View>
    </Pressable>
  );
};
