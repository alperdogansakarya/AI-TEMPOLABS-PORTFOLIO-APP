import React from 'react';
import { ScrollView, View, Text, SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ProfileCard } from '@/components/ProfileCard';
import { SkillsVisualization } from '@/components/SkillsVisualization';
import { QuickNavigation } from '@/components/QuickNavigation';

function HomeContent() {
  const { colors, theme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <Text style={{ fontSize: 32, fontWeight: '800', color: colors.text }}>
              TempoLabs Portfolio
            </Text>
            <ThemeToggle />
          </View>

          <ProfileCard />
          
          <View style={{ height: 32 }} />
          
          <QuickNavigation />
          
          <View style={{ height: 32 }} />
          
          <SkillsVisualization />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}