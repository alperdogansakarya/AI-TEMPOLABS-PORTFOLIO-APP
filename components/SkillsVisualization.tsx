import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withDelay } from 'react-native-reanimated';
import { useTheme } from '@/contexts/ThemeContext';
import { skills } from '@/data/portfolioData';

export const SkillsVisualization = () => {
  const { colors } = useTheme();

  return (
    <View style={{ gap: 16 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '700',
          color: colors.text,
          marginBottom: 8,
        }}
      >
        Yetenekler & Uzmanlık
      </Text>
      
      {skills.map((skill, index) => (
        <SkillBar key={skill.name} skill={skill} index={index} />
      ))}
    </View>
  );
};

const SkillBar: React.FC<{ skill: typeof skills[0]; index: number }> = ({ skill, index }) => {
  const { colors } = useTheme();
  const width = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    width.value = withDelay(index * 100, withSpring(skill.level, { damping: 15 }));
    opacity.value = withDelay(index * 100, withSpring(1));
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${width.value}%`,
    opacity: opacity.value,
  }));

  const getCategoryColor = () => {
    switch (skill.category) {
      case 'frontend': return colors.primary;
      case 'backend': return colors.secondary;
      case 'mobile': return colors.accent;
      case 'tools': return colors.success;
      default: return colors.primary;
    }
  };

  return (
    <View style={{ marginBottom: 12 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: '600', color: colors.text }}>
          {skill.name}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: '600', color: colors.textSecondary }}>
          {skill.level}%
        </Text>
      </View>
      
      <View
        style={{
          height: 8,
          backgroundColor: colors.surface,
          borderRadius: 4,
          overflow: 'hidden',
        }}
      >
        <Animated.View
          style={[
            animatedStyle,
            {
              height: '100%',
              backgroundColor: getCategoryColor(),
              borderRadius: 4,
            },
          ]}
        />
      </View>
    </View>
  );
};