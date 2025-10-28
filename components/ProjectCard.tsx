import React, { useState } from 'react';
import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import { ExternalLink, Github } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
  onPress: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPress }) => {
  const { colors } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: colors.card,
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 20,
        opacity: pressed ? 0.9 : 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 6,
      })}
    >
      <Image
        source={{ uri: project.image }}
        style={{ width: '100%', height: 200 }}
        resizeMode="cover"
      />
      
      {project.featured && (
        <View
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            backgroundColor: colors.accent,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: '700' }}>
            Featured
          </Text>
        </View>
      )}
      
      <View style={{ padding: 20 }}>
        <View
          style={{
            backgroundColor: colors.surface,
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 8,
            alignSelf: 'flex-start',
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              fontSize: 12,
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
            fontSize: 18,
            fontWeight: '700',
            color: colors.text,
            marginBottom: 8,
          }}
        >
          {project.title}
        </Text>
        
        <Text
          style={{
            fontSize: 14,
            color: colors.textSecondary,
            lineHeight: 20,
            marginBottom: 16,
          }}
        >
          {project.description}
        </Text>
        
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
          {project.technologies.slice(0, 3).map((tech) => (
            <View
              key={tech}
              style={{
                backgroundColor: colors.surface,
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 12, color: colors.text }}>
                {tech}
              </Text>
            </View>
          ))}
          {project.technologies.length > 3 && (
            <View
              style={{
                backgroundColor: colors.surface,
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 12, color: colors.textSecondary }}>
                +{project.technologies.length - 3}
              </Text>
            </View>
          )}
        </View>
        
        <View style={{ flexDirection: 'row', gap: 12 }}>
          {project.demoUrl && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <ExternalLink size={16} color={colors.primary} />
              <Text style={{ fontSize: 14, color: colors.primary, fontWeight: '600' }}>
                Demo
              </Text>
            </View>
          )}
          {project.sourceUrl && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <Github size={16} color={colors.primary} />
              <Text style={{ fontSize: 14, color: colors.primary, fontWeight: '600' }}>
                Source
              </Text>
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
};
