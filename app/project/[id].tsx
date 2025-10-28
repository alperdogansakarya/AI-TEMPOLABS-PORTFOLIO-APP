import React from 'react';
import { View, Text, ScrollView, Image, Pressable, SafeAreaView, StatusBar, Linking } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react-native';
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';
import { ThemeToggle } from '@/components/ThemeToggle';
import { projects } from '@/data/portfolioData';

function ProjectDetailContent() {
  const { colors, theme } = useTheme();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: colors.text }}>Project not found</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Pressable onPress={() => router.back()}>
            <ArrowLeft size={24} color={colors.text} />
          </Pressable>
          <ThemeToggle />
        </View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={{ uri: project.image }}
            style={{ width: '100%', height: 300 }}
            resizeMode="cover"
          />

          <View style={{ padding: 20 }}>
            <View
              style={{
                backgroundColor: colors.surface,
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 12,
                alignSelf: 'flex-start',
                marginBottom: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: colors.primary,
                  textTransform: 'capitalize',
                }}
              >
                {project.category}
              </Text>
            </View>

            <Text
              style={{
                fontSize: 32,
                fontWeight: '800',
                color: colors.text,
                marginBottom: 16,
              }}
            >
              {project.title}
            </Text>

            <Text
              style={{
                fontSize: 16,
                color: colors.textSecondary,
                lineHeight: 24,
                marginBottom: 24,
              }}
            >
              {project.description}
            </Text>

            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: colors.text,
                marginBottom: 12,
              }}
            >
              Technologies
            </Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 32 }}>
              {project.technologies.map((tech) => (
                <View
                  key={tech}
                  style={{
                    backgroundColor: colors.surface,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    borderRadius: 12,
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: '600', color: colors.text }}>
                    {tech}
                  </Text>
                </View>
              ))}
            </View>

            <View style={{ gap: 12 }}>
              {project.demoUrl && (
                <Pressable
                  onPress={() => Linking.openURL(project.demoUrl!)}
                  style={{
                    backgroundColor: colors.primary,
                    paddingVertical: 16,
                    paddingHorizontal: 24,
                    borderRadius: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                  }}
                >
                  <ExternalLink size={20} color="#FFFFFF" />
                  <Text style={{ fontSize: 16, fontWeight: '700', color: '#FFFFFF' }}>
                    View Demo
                  </Text>
                </Pressable>
              )}

              {project.sourceUrl && (
                <Pressable
                  onPress={() => Linking.openURL(project.sourceUrl!)}
                  style={{
                    backgroundColor: colors.surface,
                    paddingVertical: 16,
                    paddingHorizontal: 24,
                    borderRadius: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                  }}
                >
                  <Github size={20} color={colors.text} />
                  <Text style={{ fontSize: 16, fontWeight: '700', color: colors.text }}>
                    View Source Code
                  </Text>
                </Pressable>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default function ProjectDetailScreen() {
  return (
    <ThemeProvider>
      <ProjectDetailContent />
    </ThemeProvider>
  );
}
