import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withDelay, withSequence } from 'react-native-reanimated';
import { Mail, Github, Linkedin } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { profile } from '@/data/portfolioData';

export const ProfileCard = () => {
  const { colors } = useTheme();
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);

  useEffect(() => {
    scale.value = withDelay(200, withSpring(1, { damping: 15 }));
    opacity.value = withDelay(200, withSpring(1));
    translateY.value = withDelay(200, withSpring(0, { damping: 20 }));
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { translateY: translateY.value }],
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          backgroundColor: colors.card,
          borderRadius: 24,
          padding: 24,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.15,
          shadowRadius: 16,
          elevation: 8,
        },
      ]}
    >
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <View
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            backgroundColor: colors.surface,
            marginBottom: 16,
            overflow: 'hidden',
            borderWidth: 4,
            borderColor: colors.primary,
          }}
        >
          <Image
            source={{ uri: profile.avatar }}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </View>
        
        <Text
          style={{
            fontSize: 28,
            fontWeight: '700',
            color: colors.text,
            marginBottom: 4,
          }}
        >
          {profile.name}
        </Text>
        
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: colors.primary,
            marginBottom: 12,
          }}
        >
          {profile.title}
        </Text>
        
        <Text
          style={{
            fontSize: 14,
            color: colors.textSecondary,
            textAlign: 'center',
            lineHeight: 20,
          }}
        >
          {profile.bio}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 16,
          paddingTop: 16,
          borderTopWidth: 1,
          borderTopColor: colors.border,
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: colors.surface,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Mail size={20} color={colors.primary} />
          </View>
        </View>
        
        <View style={{ alignItems: 'center' }}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: colors.surface,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Github size={20} color={colors.primary} />
          </View>
        </View>
        
        <View style={{ alignItems: 'center' }}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: colors.surface,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Linkedin size={20} color={colors.primary} />
          </View>
        </View>
      </View>
    </Animated.View>
  );
};
