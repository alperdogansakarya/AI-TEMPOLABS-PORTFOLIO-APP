import React from 'react';
import { View, Text, ScrollView, Pressable, SafeAreaView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, CheckCircle } from 'lucide-react-native';
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';
import { ThemeToggle } from '@/components/ThemeToggle';
import { experience } from '@/data/portfolioData';

function ExperienceContent() {
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
                Deneyim
              </Text>
            </View>
            <ThemeToggle />
          </View>
        </View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: 20, paddingTop: 0 }}
          showsVerticalScrollIndicator={false}
        >
          {experience.map((exp, index) => (
            <View
              key={exp.id}
              style={{
                backgroundColor: colors.card,
                borderRadius: 20,
                padding: 24,
                marginBottom: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 12,
                elevation: 6,
              }}
            >
              <View
                style={{
                  backgroundColor: colors.primary,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 12,
                  alignSelf: 'flex-start',
                  marginBottom: 12,
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: '700', color: '#FFFFFF' }}>
                  {exp.period}
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '700',
                  color: colors.text,
                  marginBottom: 4,
                }}
              >
                {exp.position}
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: colors.primary,
                  marginBottom: 16,
                }}
              >
                {exp.company}
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  color: colors.textSecondary,
                  lineHeight: 20,
                  marginBottom: 16,
                }}
              >
                {exp.description}
              </Text>

              <View style={{ gap: 12 }}>
                {exp.achievements.map((achievement, idx) => (
                  <View
                    key={idx}
                    style={{
                      flexDirection: 'row',
                      gap: 12,
                      alignItems: 'flex-start',
                    }}
                  >
                    <CheckCircle size={20} color={colors.success} style={{ marginTop: 2 }} />
                    <Text
                      style={{
                        flex: 1,
                        fontSize: 14,
                        color: colors.text,
                        lineHeight: 20,
                      }}
                    >
                      {achievement}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default function ExperienceScreen() {
  return (
    <ThemeProvider>
      <ExperienceContent />
    </ThemeProvider>
  );
}