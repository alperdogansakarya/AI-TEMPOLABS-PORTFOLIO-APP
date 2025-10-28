import React from 'react';
import { View, Text, ScrollView, Pressable, SafeAreaView, StatusBar, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Mail, Github, Linkedin, MapPin } from 'lucide-react-native';
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';
import { ThemeToggle } from '@/components/ThemeToggle';
import { profile } from '@/data/portfolioData';

function AboutContent() {
  const { colors, theme } = useTheme();
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ padding: 20, paddingBottom: 0 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Pressable onPress={() => router.back()}>
                <ArrowLeft size={24} color={colors.text} />
              </Pressable>
              <Text style={{ fontSize: 28, fontWeight: '800', color: colors.text }}>
                Hakkımda
              </Text>
            </View>
            <ThemeToggle />
          </View>
        </View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: 20, paddingTop: 0, paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              backgroundColor: colors.card,
              borderRadius: 24,
              padding: 24,
              alignItems: 'center',
              marginBottom: 24,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 6 },
              shadowOpacity: 0.15,
              shadowRadius: 12,
              elevation: 8,
            }}
          >
            <View
              style={{
                width: 140,
                height: 140,
                borderRadius: 70,
                backgroundColor: colors.surface,
                marginBottom: 20,
                overflow: 'hidden',
                borderWidth: 5,
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
                fontSize: 32,
                fontWeight: '800',
                color: colors.text,
                marginBottom: 8,
              }}
            >
              {profile.name}
            </Text>

            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: colors.primary,
                marginBottom: 20,
              }}
            >
              {profile.title}
            </Text>

            <Text
              style={{
                fontSize: 16,
                color: colors.textSecondary,
                textAlign: 'center',
                lineHeight: 24,
              }}
            >
              {profile.bio}
            </Text>
          </View>

          <View
            style={{
              backgroundColor: colors.card,
              borderRadius: 20,
              padding: 24,
              gap: 20,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 12,
              elevation: 6,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: colors.text,
                marginBottom: 4,
              }}
            >
              İletişim
            </Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
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
                <Mail size={24} color={colors.primary} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 12, color: colors.textSecondary, marginBottom: 4 }}>
                  E-posta
                </Text>
                <Text style={{ fontSize: 14, fontWeight: '600', color: colors.text }}>
                  {profile.email}
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
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
                <Github size={24} color={colors.primary} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 12, color: colors.textSecondary, marginBottom: 4 }}>
                  GitHub
                </Text>
                <Text style={{ fontSize: 14, fontWeight: '600', color: colors.text }}>
                  {profile.github}
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
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
                <Linkedin size={24} color={colors.primary} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 12, color: colors.textSecondary, marginBottom: 4 }}>
                  LinkedIn
                </Text>
                <Text style={{ fontSize: 14, fontWeight: '600', color: colors.text }}>
                  {profile.linkedin}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default function AboutScreen() {
  return (
    <ThemeProvider>
      <AboutContent />
    </ThemeProvider>
  );
}