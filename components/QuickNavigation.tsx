import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Briefcase, FolderGit2, Mail, User } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';

export const QuickNavigation = () => {
  const { colors } = useTheme();
  const router = useRouter();

  const navItems = [
    { icon: FolderGit2, label: 'Projects', route: '/projects' },
    { icon: Briefcase, label: 'Experience', route: '/experience' },
    { icon: User, label: 'About', route: '/about' },
    { icon: Mail, label: 'Contact', route: '/contact' },
  ];

  return (
    <View style={{ gap: 12 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '700',
          color: colors.text,
          marginBottom: 4,
        }}
      >
        Quick Navigation
      </Text>
      
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
        {navItems.map((item) => (
          <Pressable
            key={item.label}
            onPress={() => router.push(item.route as any)}
            style={({ pressed }) => ({
              flex: 1,
              minWidth: '45%',
              backgroundColor: colors.card,
              borderRadius: 16,
              padding: 20,
              alignItems: 'center',
              gap: 8,
              opacity: pressed ? 0.7 : 1,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 4,
            })}
          >
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: colors.surface,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <item.icon size={24} color={colors.primary} />
            </View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: colors.text,
              }}
            >
              {item.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};
