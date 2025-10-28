import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, SafeAreaView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/portfolioData';

function ProjectsContent() {
  const { colors, theme } = useTheme();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'mobile', 'web', 'backend', 'ai'];
  
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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
                Projects
              </Text>
            </View>
            <ThemeToggle />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 20 }}
            contentContainerStyle={{ gap: 12 }}
          >
            {categories.map((category) => (
              <Pressable
                key={category}
                onPress={() => setSelectedCategory(category)}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 20,
                  backgroundColor: selectedCategory === category ? colors.primary : colors.surface,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: selectedCategory === category ? '#FFFFFF' : colors.text,
                    textTransform: 'capitalize',
                  }}
                >
                  {category}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: 20, paddingTop: 0 }}
          showsVerticalScrollIndicator={false}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPress={() => router.push(`/project/${project.id}` as any)}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default function ProjectsScreen() {
  return (
    <ThemeProvider>
      <ProjectsContent />
    </ThemeProvider>
  );
}
