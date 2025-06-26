"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Database,
  Shield,
  Smartphone,
  Brain,
  ImageIcon,
  MessageSquare,
  CheckCircle,
  Star,
  Code,
  Cpu,
  Globe,
  Lock,
  Layers,
  Users,
  Settings,
  Cloud,
  Award,
  Lightbulb,
  Rocket,
  Monitor,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const slides = [
  {
    id: 1,
    title: "AI Assistant",
    subtitle: "An Intelligent Conversational and Image-Generating Application",
    type: "title",
    description:
      "Welcome to our final year project presentation. Today we'll showcase our AI Assistant mobile application that combines conversational AI with image generation capabilities, developed by our team of six computer science students.",
    content: {
      team: [
        "Samsoor Samander",
        "Hussain Hamim",
        "Haroonullah Nikzad",
        "Noor Mohammad",
        "Mohammad Bilal",
        "Ashiqullah",
      ],
      university: "Shaikh Zayed University",
      department: "Computer Science Faculty - Information System Department",
      year: "2025",
    },
  },
  {
    id: 2,
    title: "Project Overview",
    subtitle: "Revolutionizing Mobile AI Interaction",
    type: "overview",
    description:
      "Our project addresses the growing need for unified AI experiences on mobile platforms. We've achieved remarkable performance metrics including sub-500ms response times and 4.6/5 user satisfaction rating across both iOS and Android platforms.",
    content: {
      stats: [
        { label: "Response Time", value: "<500ms", icon: Zap },
        { label: "User Satisfaction", value: "4.6/5", icon: Star },
        { label: "Platform Support", value: "iOS & Android", icon: Smartphone },
        { label: "AI Models", value: "3 Integrated", icon: Brain },
      ],
    },
  },
  {
    id: 3,
    title: "Background & Motivation",
    subtitle: "The AI Revolution in Mobile Computing",
    type: "background",
    description:
      "The artificial intelligence revolution has transformed human-computer interaction. With generative AI adoption growing 400% since 2020 and the global chatbot market projected to reach $10.5 billion by 2026, we identified a significant opportunity in mobile AI applications.",
    content: {
      trends: [
        {
          title: "Conversational AI Growth",
          value: "400%",
          period: "Since 2020",
        },
        { title: "Global Chatbot Market", value: "$10.5B", period: "By 2026" },
        {
          title: "Mobile AI Processing",
          value: "15-30 TOPS",
          period: "Current Smartphones",
        },
        {
          title: "User Adoption Rate",
          value: "78%",
          period: "Multi-app Usage",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Problem Statement",
    subtitle: "Current AI Applications Limitations",
    type: "problem",
    description:
      "Through our research, we identified three critical limitations in current AI applications: fragmented user experiences, poor mobile optimization, and inadequate data persistence. These issues create friction in user workflows and limit the potential of AI technology.",
    content: {
      problems: [
        {
          title: "Fragmented Experiences",
          description:
            "78% of users switch between 3+ apps for different AI functions",
          impact: "Poor user experience and workflow disruption",
        },
        {
          title: "Mobile Optimization Challenges",
          description:
            "Only 12% of AI web applications have responsive mobile interfaces",
          impact: "High latency (800-1200ms) and poor performance",
        },
        {
          title: "Data Persistence Issues",
          description: "63% of chat applications lose history after 24 hours",
          impact: "No cross-device synchronization and data loss",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Project Objectives",
    subtitle: "Quantified Goals and Success Metrics",
    type: "objectives",
    description:
      "We established clear, measurable objectives across functional, technical, and user experience domains. These objectives guided our development process and provided benchmarks for success evaluation.",
    content: {
      objectives: [
        {
          category: "Functional Objectives",
          goals: [
            "Achieve <500ms response time for text generation",
            "Maintain <4MB model footprint for mobile deployment",
            "Support 1,000+ concurrent user sessions",
          ],
        },
        {
          category: "Technical Objectives",
          goals: [
            "Implement OAuth with Clerk authentication",
            "Ensure 99.5% uptime for core services",
            "Cross-platform compatibility (iOS 18+/Android 15+)",
          ],
        },
        {
          category: "User Experience Objectives",
          goals: [
            "Score >4.5/5 in usability testing",
            "Achieve <15 second first-time setup",
            "Support 10+ languages by default",
          ],
        },
      ],
    },
  },
  {
    id: 6,
    title: "Literature Review",
    subtitle: "AI Technologies and Existing Solutions",
    type: "literature",
    description:
      "Our literature review examined current AI technologies, generative models, and existing mobile AI applications. We analyzed GPT-4, Gemini, and other leading models to understand their capabilities and limitations in mobile contexts.",
    content: {
      areas: [
        {
          title: "Artificial Intelligence Overview",
          description:
            "Foundation of modern smart applications enabling machine learning and decision making",
          keyPoints: [
            "Natural language processing",
            "Machine learning algorithms",
            "Human-computer interaction",
          ],
        },
        {
          title: "Generative AI Technologies",
          description:
            "Advanced models for text and image generation with human-like capabilities",
          keyPoints: [
            "GPT-4 language model",
            "DALL-E image generation",
            "Multimodal AI systems",
          ],
        },
        {
          title: "Mobile AI Integration",
          description:
            "Challenges and opportunities in mobile AI application development",
          keyPoints: [
            "API integration patterns",
            "Mobile optimization",
            "Offline capabilities",
          ],
        },
      ],
    },
  },
  {
    id: 7,
    title: "Technology Stack",
    subtitle: "Modern Technologies for Optimal Performance",
    type: "tech",
    description:
      "We carefully selected our technology stack to ensure cross-platform compatibility, optimal performance, and scalability. Each technology was chosen based on specific criteria including community support, documentation quality, and integration capabilities.",
    content: {
      technologies: [
        {
          name: "React Native + Expo",
          category: "Frontend",
          icon: Smartphone,
          description:
            "Cross-platform mobile development with native performance",
          benefits: [
            "Single codebase",
            "Fast development",
            "Native UI components",
          ],
        },
        {
          name: "Clerk",
          category: "Authentication",
          icon: Shield,
          description: "Secure user management with social login support",
          benefits: [
            "OAuth integration",
            "Multi-factor auth",
            "Session management",
          ],
        },
        {
          name: "OpenAI, Gemini, Stability",
          category: "AI APIs",
          icon: Brain,
          description: "Advanced AI capabilities for text and image generation",
          benefits: [
            "Natural language processing",
            "Image generation",
            "Multimodal support",
          ],
        },
        {
          name: "SQLite",
          category: "Database",
          icon: Database,
          description: "Lightweight local storage for offline functionality",
          benefits: ["Zero configuration", "Offline access", "Fast queries"],
        },
      ],
    },
  },
  {
    id: 8,
    title: "System Architecture Overview",
    subtitle: "High-Level System Design",
    type: "architecture-overview",
    description:
      "Our system follows a modular architecture with clear separation of concerns. The design ensures scalability, maintainability, and optimal performance across different mobile platforms while providing seamless integration with multiple AI services.",
    content: {
      layers: [
        {
          name: "Presentation Layer",
          description: "React Native UI components and navigation",
          icon: Monitor,
        },
        {
          name: "Business Logic Layer",
          description: "Application logic and state management",
          icon: Settings,
        },
        {
          name: "Integration Layer",
          description: "AI API communication and data processing",
          icon: Cloud,
        },
        {
          name: "Data Layer",
          description: "Local SQLite storage and caching",
          icon: Database,
        },
      ],
    },
  },
  {
    id: 9,
    title: "System Architecture Components",
    subtitle: "Detailed Component Interaction",
    type: "architecture",
    description:
      "Each component in our architecture serves a specific purpose and communicates through well-defined interfaces. This modular approach allows for easy maintenance, testing, and future enhancements while ensuring optimal performance.",
    content: {
      components: [
        {
          name: "User Interface",
          description: "React Native with Expo framework",
          icon: Layers,
        },
        {
          name: "Authentication Module",
          description: "Clerk SDK integration for security",
          icon: Lock,
        },
        {
          name: "AI Integration Layer",
          description: "Multiple AI API providers management",
          icon: Cpu,
        },
        {
          name: "Local Storage",
          description: "SQLite database for offline access",
          icon: Database,
        },
      ],
    },
  },
  {
    id: 10,
    title: "Data Flow Design",
    subtitle: "Information Processing Pipeline",
    type: "dataflow",
    description:
      "Our data flow design ensures efficient processing of user requests through authentication, AI processing, and local storage. The pipeline is optimized for low latency and high reliability with proper error handling at each stage.",
    content: {
      steps: [
        {
          step: 1,
          title: "User Input",
          description: "Text or image prompt submission",
          icon: Users,
        },
        {
          step: 2,
          title: "Authentication",
          description: "Clerk security validation",
          icon: Shield,
        },
        {
          step: 3,
          title: "AI Processing",
          description: "API call to selected AI provider",
          icon: Brain,
        },
        {
          step: 4,
          title: "Response Handling",
          description: "Process and format AI response",
          icon: Settings,
        },
        {
          step: 5,
          title: "Local Storage",
          description: "Save to SQLite for offline access",
          icon: Database,
        },
        {
          step: 6,
          title: "UI Update",
          description: "Display response to user",
          icon: Monitor,
        },
      ],
    },
  },
  {
    id: 11,
    title: "UI/UX Design Principles",
    subtitle: "User-Centered Design Approach",
    type: "design",
    description:
      "Our design philosophy prioritizes user experience with intuitive navigation, consistent visual elements, and accessibility. We followed Material Design and iOS Human Interface Guidelines to ensure native feel across platforms.",
    content: {
      principles: [
        {
          title: "Simplicity",
          description: "Clean, uncluttered interface design",
          icon: Palette,
        },
        {
          title: "Consistency",
          description: "Uniform design patterns throughout",
          icon: Layers,
        },
        {
          title: "Accessibility",
          description: "Support for users with disabilities",
          icon: Users,
        },
        {
          title: "Performance",
          description: "Smooth animations and fast responses",
          icon: Zap,
        },
        {
          title: "Responsiveness",
          description: "Adaptive design for all screen sizes",
          icon: Smartphone,
        },
        {
          title: "Feedback",
          description: "Clear visual and haptic feedback",
          icon: MessageSquare,
        },
      ],
    },
  },
  {
    id: 12,
    title: "Research Methodology",
    subtitle: "Systematic Approach to AI Model Analysis",
    type: "methodology",
    description:
      "We employed a structured methodology to analyze existing AI models, combining quantitative benchmarking with qualitative evaluation. Our approach ensured comprehensive understanding of model capabilities, limitations, and optimal integration strategies.",
    content: {
      phases: [
        {
          name: "Model Selection",
          description:
            "Identified leading AI models based on market share, capabilities, and documentation quality",
          activities: [
            "Evaluated 12 major AI providers",
            "Selected top 3 models (GPT-4, Gemini, Stable Diffusion)",
            "Criteria: Accuracy, Speed, Cost, Mobile Support",
          ],
          icon: Database,
        },
        {
          name: "Benchmark Testing",
          description:
            "Quantitative performance measurement across key metrics",
          activities: [
            "Designed 100+ test prompts across categories",
            "Measured response times and accuracy",
            "Evaluated multilingual capabilities",
          ],
          icon: Cpu,
        },
        {
          name: "API Analysis",
          description: "Technical evaluation of integration requirements",
          activities: [
            "Documentation quality assessment",
            "Authentication methods",
            "Rate limiting and error handling",
          ],
          icon: Code,
        },
        {
          name: "User Testing",
          description: "Qualitative assessment of real-world performance",
          activities: [
            "Gathered feedback from 20 test users",
            "Compared output quality",
            "Evaluated response relevance",
          ],
          icon: Users,
        },
        {
          name: "Integration Planning",
          description: "Developed unified interface strategy",
          activities: [
            "Designed abstraction layer",
            "Implemented fallback mechanisms",
            "Optimized for mobile performance",
          ],
          icon: Settings,
        },
      ],
      outcomes: [
        "Identified optimal model for each use case",
        "Developed performance benchmarks",
        "Created integration best practices",
        "Established fallback strategies",
      ],
    },
  },
  {
    id: 13,
    title: "AI Model Integration",
    subtitle: "Multiple AI Provider Implementation",
    type: "ai-integration",
    description:
      "Our application integrates three major AI providers to offer diverse capabilities. We implemented a unified interface that allows seamless switching between providers based on user needs and service availability.",
    content: {
      providers: [
        {
          name: "OpenAI GPT-4",
          capabilities: [
            "Natural language processing",
            "Code generation",
            "Creative writing",
          ],
          use_case: "General conversational AI and text generation",
        },
        {
          name: "Google Gemini",
          capabilities: [
            "Multimodal understanding",
            "Image analysis",
            "Context awareness",
          ],
          use_case: "Complex reasoning and multimodal interactions",
        },
        {
          name: "Stability AI",
          capabilities: [
            "Image generation",
            "Style transfer",
            "Creative imagery",
          ],
          use_case: "High-quality image creation from text prompts",
        },
      ],
    },
  },
  {
    id: 14,
    title: "Code Implementation - AI Integration",
    subtitle: "Core AI Service Implementation",
    type: "code-ai",
    description:
      "This code demonstrates our AI service integration with error handling, response caching, and database storage. The implementation ensures reliable communication with AI providers while maintaining optimal performance.",
    content: {
      snippet: {
        title: "AI Service Integration",
        language: "javascript",
        code: `// AI Service Integration with Error Handling
const generateResponse = async (prompt, model = 'gemini') => {
  try {
    // Show loading state
    setLoading(true);
    
    // Make API call to selected AI provider
    const response = await fetch(\`/api/\${model}\`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${apiKey}\`
      },
      body: JSON.stringify({ 
        prompt,
        max_tokens: 1000,
        temperature: 0.7
      })
    });
    
    if (!response.ok) {
      throw new Error(\`API Error: \${response.status}\`);
    }
    
    const data = await response.json();
    
    // Save response to local database
    await saveToDatabase({
      prompt,
      response: data.text,
      model,
      timestamp: new Date().toISOString()
    });
    
    return data;
  } catch (error) {
    console.error('AI API Error:', error);
    // Fallback to cached response if available
    return await getCachedResponse(prompt);
  } finally {
    setLoading(false);
  }
};`,
      },
    },
  },
  {
    id: 15,
    title: "Code Implementation - Database",
    subtitle: "SQLite Database Configuration",
    type: "code-db",
    description:
      "Our database implementation provides efficient local storage with proper schema design. This ensures fast queries, data integrity, and offline functionality for user conversations and generated content.",
    content: {
      snippet: {
        title: "SQLite Database Setup",
        language: "javascript",
        code: `// SQLite Database Configuration
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('aiassistant.db');

// Initialize database with proper schema
const initDatabase = () => {
  db.transaction(tx => {
    // Conversations table
    tx.executeSql(
      \`CREATE TABLE IF NOT EXISTS conversations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id TEXT NOT NULL,
        message TEXT NOT NULL,
        response TEXT NOT NULL,
        model TEXT DEFAULT 'gemini',
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (id)
      );\`
    );
    
    // Generated images table
    tx.executeSql(
      \`CREATE TABLE IF NOT EXISTS generated_images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id TEXT NOT NULL,
        prompt TEXT NOT NULL,
        image_url TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );\`
    );
    
    // User preferences table
    tx.executeSql(
      \`CREATE TABLE IF NOT EXISTS user_preferences (
        user_id TEXT PRIMARY KEY,
        preferred_model TEXT DEFAULT 'gemini',
        theme TEXT DEFAULT 'light',
        language TEXT DEFAULT 'en'
      );\`
    );
  });
};

// Save conversation to database
const saveConversation = (userId, message, response, model) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO conversations (user_id, message, response, model) VALUES (?, ?, ?, ?)',
        [userId, message, response, model],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};`,
      },
    },
  },
  {
    id: 16,
    title: "Code Implementation - Authentication",
    subtitle: "Clerk Authentication Setup",
    type: "code-auth",
    description:
      "This implementation shows our Clerk authentication integration with React Native. The code handles user sign-in, session management, and secure API calls with proper error handling and user feedback.",
    content: {
      snippet: {
        title: "Authentication Implementation",
        language: "javascript",
        code: `// Clerk Authentication Integration
import { useAuth, useUser } from '@clerk/clerk-expo';
import { useEffect, useState } from 'react';

const AuthenticatedApp = () => {
  const { isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, [isSignedIn]);

  const checkAuthStatus = async () => {
    try {
      if (isSignedIn) {
        // Initialize user preferences
        await initializeUserData(user.id);
        // Setup database for user
        await setupUserDatabase(user.id);
      }
    } catch (error) {
      console.error('Auth setup error:', error);
    } finally {
      setLoading(false);
    }
  };

  const makeAuthenticatedRequest = async (endpoint, data) => {
    try {
      const token = await getToken();
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Authorization': \`Bearer \${token}\`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Request failed');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Authenticated request error:', error);
      throw error;
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return isSignedIn ? <MainApp /> : <SignInScreen />;
};`,
      },
    },
  },
  {
    id: 17,
    title: "Testing Methodology",
    subtitle: "Comprehensive Quality Assurance",
    type: "testing-method",
    description:
      "We implemented a comprehensive testing strategy including unit tests, integration tests, and user acceptance testing. Our test-driven development approach ensured high code quality and reliable functionality across all features.",
    content: {
      testTypes: [
        {
          type: "Unit Testing",
          description: "Individual component and function testing",
          tools: ["Jest", "React Native Testing Library"],
          coverage: "85%",
        },
        {
          type: "Integration Testing",
          description: "API integration and data flow testing",
          tools: ["Detox", "Postman"],
          coverage: "78%",
        },
        {
          type: "User Acceptance Testing",
          description: "Real user testing with 20 participants",
          tools: ["Manual testing", "User feedback forms"],
          coverage: "100%",
        },
        {
          type: "Performance Testing",
          description: "Response time and memory usage testing",
          tools: ["React Native Performance", "Flipper"],
          coverage: "90%",
        },
      ],
    },
  },
  {
    id: 18,
    title: "Functional Testing Results",
    subtitle: "Core Feature Validation",
    type: "testing-functional",
    description:
      "All core functionalities passed our rigorous testing process. We validated authentication, AI integration, data storage, error handling, and cross-platform compatibility across multiple devices and operating system versions.",
    content: {
      testResults: [
        {
          component: "Authentication",
          testCase: "Sign up, login, and logout using Clerk",
          status: "✅ Passed",
          details: "100% success rate across all test scenarios",
        },
        {
          component: "Text Generation",
          testCase: "Accept user input and send to AI APIs",
          status: "✅ Passed",
          details: "Average response time: 420ms",
        },
        {
          component: "Image Generation",
          testCase: "Generate and display images from text prompts",
          status: "✅ Passed",
          details: "Average generation time: 2.1s",
        },
        {
          component: "Data Storage",
          testCase: "Store responses in SQLite and retrieve chat history",
          status: "✅ Passed",
          details: "100% data integrity maintained",
        },
        {
          component: "Error Handling",
          testCase: "Handle API failures and network loss",
          status: "✅ Passed",
          details: "Graceful degradation implemented",
        },
        {
          component: "Multilingual Input",
          testCase: "Process prompts in multiple languages",
          status: "✅ Passed",
          details: "10+ languages supported",
        },
      ],
    },
  },
  {
    id: 19,
    title: "Performance Benchmarking",
    subtitle: "Exceeding Target Metrics",
    type: "performance",
    description:
      "Our performance testing exceeded initial targets across all key metrics. We achieved sub-500ms response times, maintained low memory usage, and ensured smooth user experience even under high load conditions.",
    content: {
      metrics: [
        {
          label: "Text Response Time",
          target: "<500ms",
          achieved: "420ms",
          percentage: 84,
          improvement: "16% better than target",
        },
        {
          label: "Image Generation",
          target: "<3s",
          achieved: "2.1s",
          percentage: 70,
          improvement: "30% better than target",
        },
        {
          label: "App Launch Time",
          target: "<2s",
          achieved: "1.3s",
          percentage: 65,
          improvement: "35% better than target",
        },
        {
          label: "Memory Usage",
          target: "<100MB",
          achieved: "78MB",
          percentage: 78,
          improvement: "22% better than target",
        },
        {
          label: "Battery Efficiency",
          target: "8hrs",
          achieved: "9.2hrs",
          percentage: 87,
          improvement: "15% better than target",
        },
        {
          label: "System Uptime",
          target: "99.5%",
          achieved: "99.7%",
          percentage: 99,
          improvement: "0.2% better than target",
        },
      ],
    },
  },
  {
    id: 20,
    title: "User Experience Evaluation",
    subtitle: "20 Participant User Study Results",
    type: "ux-evaluation",
    description:
      "We conducted comprehensive user testing with 20 participants including students, developers, and casual users. The evaluation focused on usability, visual appeal, response accuracy, and overall satisfaction with detailed feedback collection.",
    content: {
      ratings: [
        {
          category: "UI/UX Design",
          rating: 4.7,
          maxRating: 5,
          feedback: "Clean, intuitive interface",
        },
        {
          category: "Ease of Login",
          rating: 4.6,
          maxRating: 5,
          feedback: "Quick and secure authentication",
        },
        {
          category: "Response Relevance",
          rating: 4.5,
          maxRating: 5,
          feedback: "Accurate and helpful responses",
        },
        {
          category: "Image Quality",
          rating: 4.3,
          maxRating: 5,
          feedback: "High-quality generated images",
        },
        {
          category: "App Performance",
          rating: 4.8,
          maxRating: 5,
          feedback: "Fast and responsive",
        },
        {
          category: "Overall Satisfaction",
          rating: 4.6,
          maxRating: 5,
          feedback: "Would recommend to others",
        },
      ],
      demographics: {
        students: "40%",
        developers: "35%",
        casualUsers: "25%",
      },
    },
  },
  {
    id: 21,
    title: "Key Features Deep Dive",
    subtitle: "Comprehensive AI Assistant Capabilities",
    type: "features",
    description:
      "Our AI Assistant offers six core features designed to provide a comprehensive AI experience. Each feature is optimized for mobile use with careful attention to performance, usability, and reliability.",
    content: {
      features: [
        {
          title: "Natural Language Processing",
          description:
            "Advanced conversational AI with context awareness and multi-turn dialogue support",
          icon: MessageSquare,
          details: [
            "Context retention",
            "Multi-language support",
            "Conversation history",
          ],
        },
        {
          title: "Image Generation",
          description:
            "Create high-quality images from text prompts using Stability AI technology",
          icon: ImageIcon,
          details: [
            "Multiple art styles",
            "High resolution output",
            "Prompt optimization",
          ],
        },
        {
          title: "Cross-Platform Support",
          description:
            "Native performance on both iOS and Android with consistent user experience",
          icon: Globe,
          details: [
            "iOS 18+ support",
            "Android 15+ support",
            "Responsive design",
          ],
        },
        {
          title: "Offline Access",
          description:
            "Local storage for chat history and generated content with SQLite database",
          icon: Database,
          details: ["Chat history", "Image caching", "Offline browsing"],
        },
        {
          title: "Secure Authentication",
          description:
            "Multi-factor authentication with Clerk providing enterprise-grade security",
          icon: Shield,
          details: ["OAuth integration", "Social logins", "Session management"],
        },
        {
          title: "Real-time Responses",
          description:
            "Sub-500ms response times for optimal user experience and engagement",
          icon: Zap,
          details: ["Optimized APIs", "Efficient caching", "Smart preloading"],
        },
      ],
    },
  },
  {
    id: 22,
    title: "Challenges and Solutions",
    subtitle: "Overcoming Development Obstacles",
    type: "challenges",
    description:
      "During development, we encountered several technical challenges that required innovative solutions. Our problem-solving approach demonstrates our technical expertise and adaptability in complex software development.",
    content: {
      challenges: [
        {
          challenge: "API Rate Limiting",
          description: "Managing multiple AI provider rate limits and costs",
          solution:
            "Implemented intelligent request queuing and caching system",
          impact: "Reduced API calls by 40% while maintaining performance",
        },
        {
          challenge: "Cross-Platform Consistency",
          description:
            "Ensuring identical user experience across iOS and Android",
          solution:
            "Developed custom component library with platform-specific adaptations",
          impact: "Achieved 98% UI consistency across platforms",
        },
        {
          challenge: "Offline Functionality",
          description:
            "Providing meaningful functionality without internet connection",
          solution:
            "Implemented comprehensive local caching and SQLite storage",
          impact: "Users can access 100% of chat history offline",
        },
        {
          challenge: "Performance Optimization",
          description:
            "Maintaining fast response times with multiple AI integrations",
          solution: "Developed smart routing and fallback mechanisms",
          impact: "Achieved sub-500ms response times consistently",
        },
      ],
    },
  },
  {
    id: 23,
    title: "Comparison with Existing Solutions",
    subtitle: "Competitive Analysis and Advantages",
    type: "comparison",
    description:
      "Our solution addresses key limitations found in existing AI applications. We compared our app with popular alternatives like ChatGPT mobile, Google Bard, and other AI assistants to highlight our unique value proposition.",
    content: {
      comparisons: [
        {
          feature: "Multi-AI Integration",
          ourApp: "✅ 3 AI providers",
          competitors: "❌ Single provider",
          advantage: "Flexibility and redundancy",
        },
        {
          feature: "Offline Access",
          ourApp: "✅ Full chat history",
          competitors: "❌ Online only",
          advantage: "Always accessible",
        },
        {
          feature: "Image Generation",
          ourApp: "✅ Integrated seamlessly",
          competitors: "⚠️ Separate apps",
          advantage: "Unified experience",
        },
        {
          feature: "Response Time",
          ourApp: "✅ <500ms",
          competitors: "⚠️ 800-1200ms",
          advantage: "Superior performance",
        },
        {
          feature: "Mobile Optimization",
          ourApp: "✅ Native mobile app",
          competitors: "⚠️ Web-based",
          advantage: "Better UX",
        },
        {
          feature: "Data Privacy",
          ourApp: "✅ Local storage",
          competitors: "⚠️ Cloud dependent",
          advantage: "Enhanced privacy",
        },
      ],
    },
  },
  {
    id: 24,
    title: "System Scalability",
    subtitle: "Architecture for Growth",
    type: "scalability",
    description:
      "Our system is designed with scalability in mind, supporting future growth in user base and feature expansion. The modular architecture allows for easy integration of new AI providers and capabilities.",
    content: {
      aspects: [
        {
          title: "User Scalability",
          current: "1,000 concurrent users",
          target: "10,000+ users",
          approach: "Horizontal scaling with load balancing",
        },
        {
          title: "Feature Scalability",
          current: "Text & Image AI",
          target: "Voice, Video, Code generation",
          approach: "Modular plugin architecture",
        },
        {
          title: "Data Scalability",
          current: "Local SQLite storage",
          target: "Cloud sync with local caching",
          approach: "Hybrid storage strategy",
        },
        {
          title: "Geographic Scalability",
          current: "Single region deployment",
          target: "Multi-region with CDN",
          approach: "Edge computing integration",
        },
      ],
    },
  },
  {
    id: 25,
    title: "Future Enhancements",
    subtitle: "Roadmap for Continued Innovation",
    type: "future",
    description:
      "Our development roadmap includes exciting enhancements that will further improve user experience and expand capabilities. These features are prioritized based on user feedback and technological feasibility.",
    content: {
      enhancements: [
        {
          title: "Voice Interface",
          description:
            "Speech-to-text and text-to-speech capabilities for hands-free interaction",
          priority: "High",
          timeline: "Q2 2025",
          impact: "Accessibility and convenience",
        },
        {
          title: "Cloud Synchronization",
          description:
            "Cross-device chat history and preferences synchronization",
          priority: "High",
          timeline: "Q3 2025",
          impact: "Seamless multi-device experience",
        },
        {
          title: "Advanced Multilingual Support",
          description: "Support for 25+ languages with real-time translation",
          priority: "Medium",
          timeline: "Q4 2025",
          impact: "Global accessibility",
        },
        {
          title: "On-device AI Processing",
          description:
            "Local model inference for enhanced privacy and offline capabilities",
          priority: "Medium",
          timeline: "Q1 2026",
          impact: "Privacy and performance",
        },
        {
          title: "Collaborative Features",
          description: "Shared conversations and team workspaces",
          priority: "Low",
          timeline: "Q2 2026",
          impact: "Team productivity",
        },
      ],
    },
  },
  {
    id: 26,
    title: "Team Contributions",
    subtitle: "Individual Member Achievements",
    type: "team",
    description:
      "Each team member brought unique skills and made significant contributions to the project's success. Our collaborative approach ensured comprehensive coverage of all technical and design aspects.",
    content: {
      members: [
        {
          name: "Samsoor Samander",
          role: "Project Lead & Backend Developer",
          contributions: [
            "System architecture design",
            "AI API integration",
            "Database schema design",
          ],
        },
        {
          name: "Hussain Hamim",
          role: "Frontend Developer",
          contributions: [
            "React Native UI development",
            "User experience design",
            "Cross-platform optimization",
          ],
        },
        {
          name: "Haroonullah Nikzad",
          role: "AI Integration Specialist",
          contributions: [
            "AI model integration",
            "Performance optimization",
            "API management",
          ],
        },
        {
          name: "Noor Mohammad",
          role: "Mobile Developer",
          contributions: [
            "Native functionality",
            "Device integration",
            "Performance testing",
          ],
        },
        {
          name: "Mohammad Bilal",
          role: "Security & Authentication",
          contributions: [
            "Clerk integration",
            "Security implementation",
            "User management",
          ],
        },
        {
          name: "Ashiqullah",
          role: "Quality Assurance & Testing",
          contributions: [
            "Testing strategy",
            "Bug tracking",
            "User acceptance testing",
          ],
        },
      ],
    },
  },
  {
    id: 27,
    title: "Project Impact",
    subtitle: "Achievements and Recognition",
    type: "impact",
    description:
      "Our project has demonstrated significant impact in terms of technical innovation, user satisfaction, and potential for real-world application. The results validate our approach and design decisions.",
    content: {
      achievements: [
        {
          category: "Technical Excellence",
          items: [
            "Successfully integrated 3 major AI providers",
            "Achieved sub-500ms response times consistently",
            "Implemented secure, scalable authentication system",
            "Created efficient offline functionality",
          ],
        },
        {
          category: "User Impact",
          items: [
            "4.6/5 average user satisfaction rating",
            "100% of users would recommend the app",
            "85% reduction in task completion time",
            "Positive feedback on interface design",
          ],
        },
        {
          category: "Innovation",
          items: [
            "Novel multi-AI integration approach",
            "Optimized mobile AI interaction patterns",
            "Efficient offline-first architecture",
            "Seamless cross-platform experience",
          ],
        },
      ],
    },
  },
  {
    id: 28,
    title: "Lessons Learned",
    subtitle: "Key Insights from Development",
    type: "lessons",
    description:
      "Throughout the development process, we gained valuable insights about mobile AI development, team collaboration, and project management. These lessons will guide our future development efforts.",
    content: {
      lessons: [
        {
          category: "Technical Lessons",
          insights: [
            "API integration requires robust error handling and fallback mechanisms",
            "Mobile performance optimization is crucial for AI applications",
            "Local storage strategy significantly impacts user experience",
            "Cross-platform development requires careful attention to platform differences",
          ],
        },
        {
          category: "Project Management",
          insights: [
            "Regular testing throughout development prevents major issues",
            "User feedback early in development guides better design decisions",
            "Clear communication channels are essential for team coordination",
            "Agile methodology works well for AI application development",
          ],
        },
        {
          category: "User Experience",
          insights: [
            "Response time is more important than feature richness",
            "Offline functionality is highly valued by users",
            "Simple, intuitive interfaces perform better than complex ones",
            "Consistent behavior across platforms builds user trust",
          ],
        },
      ],
    },
  },
  {
    id: 29,
    title: "Conclusion",
    subtitle: "Project Success and Impact",
    type: "conclusion",
    description:
      "Our AI Assistant project successfully achieved all primary objectives while exceeding performance targets. We created a unified, efficient, and user-friendly mobile AI application that addresses real-world problems and provides significant value to users.",
    content: {
      achievements: [
        "Successfully integrated multiple AI APIs for unified user experience",
        "Achieved sub-500ms response times exceeding performance targets by 16%",
        "Implemented secure, scalable authentication system with 99.7% uptime",
        "Delivered cross-platform mobile application with 4.6/5 user satisfaction",
        "Created modular architecture supporting future enhancements and scalability",
        "Demonstrated technical innovation in mobile AI application development",
        "Established foundation for continued development and feature expansion",
      ],
      impact:
        "This project contributes a practical, efficient, and user-friendly AI assistant prototype that effectively bridges conversational AI and generative media within a mobile environment, reflecting current technological advancements and user expectations.",
    },
  },
  {
    id: 30,
    title: "Thank You",
    subtitle: "Questions & Discussion",
    type: "thanks",
    description:
      "Thank you for your attention during our presentation. We're now ready to answer any questions about our AI Assistant project, technical implementation, or future development plans. We appreciate your feedback and suggestions.",
    content: {
      contact: {
        university: "Shaikh Zayed University",
        department: "Computer Science Faculty",
        supervisor: "Naqib Naveed",
        year: "2025",
      },
      acknowledgments: [
        "Our supervisor Naqib Naveed for guidance and support",
        "Shaikh Zayed University for providing resources and facilities",
        "The open-source community for excellent tools and libraries",
        "Our families and friends for their continuous encouragement",
      ],
    },
  },
];

export default function AIAssistantPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case "title":
        return (
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {slide.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap justify-center gap-3">
                {slide.content.team.map((member: string, index: number) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-lg px-4 py-2"
                  >
                    {member}
                  </Badge>
                ))}
              </div>

              <div className="text-lg text-gray-700 space-y-1">
                <p className="font-semibold">{slide.content.university}</p>
                <p>{slide.content.department}</p>
                <p className="text-blue-600 font-bold">{slide.content.year}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 p-4 bg-blue-50 rounded-lg"
            >
              <p className="text-base text-gray-700 italic">
                {slide.description}
              </p>
            </motion.div>
          </div>
        );

      case "overview":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              {slide.content.stats.map((stat: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300">
                    <CardContent className="text-center space-y-4">
                      <stat.icon className="w-12 h-12 mx-auto text-blue-600" />
                      <div>
                        <p className="text-3xl font-bold text-gray-800">
                          {stat.value}
                        </p>
                        <p className="text-lg text-gray-600 mt-1">
                          {stat.label}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "background":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {slide.content.trends.map((trend: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300">
                    <CardContent className="text-center space-y-3">
                      <h3 className="text-lg font-bold text-gray-800">
                        {trend.title}
                      </h3>
                      <p className="text-3xl font-bold text-blue-600">
                        {trend.value}
                      </p>
                      <p className="text-sm text-gray-600">{trend.period}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "problem":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="space-y-6">
              {slide.content.problems.map((problem: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="p-6 border-l-4 border-red-500 hover:shadow-xl transition-all duration-300">
                    <CardContent className="space-y-3">
                      <h3 className="text-xl font-bold text-red-600">
                        {problem.title}
                      </h3>
                      <p className="text-base text-gray-700">
                        {problem.description}
                      </p>
                      <Badge
                        variant="destructive"
                        className="text-sm px-3 py-1"
                      >
                        Impact: {problem.impact}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "objectives":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="space-y-6">
              {slide.content.objectives.map((objective: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300">
                    <CardContent className="space-y-4">
                      <h3 className="text-xl font-bold text-blue-600">
                        {objective.category}
                      </h3>
                      <ul className="space-y-2">
                        {objective.goals.map(
                          (goal: string, goalIndex: number) => (
                            <li
                              key={goalIndex}
                              className="flex items-start space-x-2"
                            >
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-base text-gray-700">
                                {goal}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "literature":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="space-y-6">
              {slide.content.areas.map((area: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300">
                    <CardContent className="space-y-4">
                      <h3 className="text-xl font-bold text-purple-600">
                        {area.title}
                      </h3>
                      <p className="text-base text-gray-700">
                        {area.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {area.keyPoints.map(
                          (point: string, pointIndex: number) => (
                            <Badge
                              key={pointIndex}
                              variant="outline"
                              className="text-sm"
                            >
                              {point}
                            </Badge>
                          )
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "tech":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {slide.content.technologies.map((tech: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <tech.icon className="w-10 h-10 text-blue-600" />
                        <div>
                          <Badge className="text-sm px-2 py-1 mb-1">
                            {tech.category}
                          </Badge>
                          <h3 className="text-lg font-bold text-gray-800">
                            {tech.name}
                          </h3>
                        </div>
                      </div>
                      <p className="text-base text-gray-600">
                        {tech.description}
                      </p>
                      <div className="space-y-1">
                        {tech.benefits.map(
                          (benefit: string, benefitIndex: number) => (
                            <div
                              key={benefitIndex}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-sm text-gray-600">
                                {benefit}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "architecture-overview":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="space-y-4">
              {slide.content.layers.map((layer: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300">
                    <CardContent className="flex items-center space-x-4">
                      <layer.icon className="w-10 h-10 text-indigo-600" />
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">
                          {layer.name}
                        </h3>
                        <p className="text-base text-gray-600">
                          {layer.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "architecture":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {slide.content.components.map((component: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
                    <CardContent className="text-center space-y-3">
                      <component.icon className="w-10 h-10 mx-auto text-blue-600" />
                      <h3 className="text-lg font-bold text-gray-800">
                        {component.name}
                      </h3>
                      <p className="text-base text-gray-600">
                        {component.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "dataflow":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-3 gap-4">
              {slide.content.steps.map((step: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="p-4 hover:shadow-xl transition-all duration-300">
                    <CardContent className="text-center space-y-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto font-bold">
                        {step.step}
                      </div>
                      <step.icon className="w-8 h-8 mx-auto text-blue-600" />
                      <h3 className="text-sm font-bold text-gray-800">
                        {step.title}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  {index < slide.content.steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-blue-400"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "design":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-3 gap-4">
              {slide.content.principles.map((principle: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-4 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="text-center space-y-3">
                      <principle.icon className="w-8 h-8 mx-auto text-pink-600" />
                      <h3 className="text-base font-bold text-gray-800">
                        {principle.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {principle.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "auth":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-600">
                      Key Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {slide.content.features.map(
                        (feature: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                              {feature}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-600">
                      Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {slide.content.benefits.map(
                        (benefit: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                              {benefit}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        );

      case "ai-integration":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="space-y-6">
              {slide.content.providers.map((provider: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300">
                    <CardContent className="space-y-4">
                      <h3 className="text-xl font-bold text-purple-600">
                        {provider.name}
                      </h3>
                      <p className="text-base text-gray-700">
                        {provider.use_case}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {provider.capabilities.map(
                          (capability: string, capIndex: number) => (
                            <Badge
                              key={capIndex}
                              variant="outline"
                              className="text-sm"
                            >
                              {capability}
                            </Badge>
                          )
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "code-ai":
      case "code-db":
      case "code-auth":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="overflow-hidden border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                  <CardTitle className="text-lg flex items-center space-x-3">
                    <Code className="w-6 h-6" />
                    <span>{slide.content.snippet.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <pre className="bg-gray-900 text-green-400 p-6 overflow-x-auto text-sm leading-relaxed">
                    <code>{slide.content.snippet.code}</code>
                  </pre>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        );

      case "testing-method":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {slide.content.testTypes.map((testType: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300">
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold text-orange-600">
                          {testType.type}
                        </h3>
                        <Badge variant="outline" className="text-sm">
                          {testType.coverage}
                        </Badge>
                      </div>
                      <p className="text-base text-gray-700">
                        {testType.description}
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-600">
                          Tools Used:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {testType.tools.map(
                            (tool: string, toolIndex: number) => (
                              <Badge
                                key={toolIndex}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tool}
                              </Badge>
                            )
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "testing-functional":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="space-y-4">
              {slide.content.testResults.map((result: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300">
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-gray-800">
                            {result.component}
                          </h3>
                          <p className="text-base text-gray-700">
                            {result.testCase}
                          </p>
                          <p className="text-sm text-gray-600">
                            {result.details}
                          </p>
                        </div>
                        <Badge
                          variant={
                            result.status.includes("✅")
                              ? "default"
                              : "destructive"
                          }
                          className="text-sm px-3 py-1"
                        >
                          {result.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "performance":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="space-y-6">
              {slide.content.metrics.map((metric: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300">
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold text-gray-800">
                          {metric.label}
                        </h3>
                        <div className="text-right">
                          <p className="text-base text-gray-600">
                            Target: {metric.target}
                          </p>
                          <p className="text-lg font-bold text-green-600">
                            Achieved: {metric.achieved}
                          </p>
                          <p className="text-sm text-blue-600">
                            {metric.improvement}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Performance</span>
                          <span>{metric.percentage}%</span>
                        </div>
                        <Progress value={metric.percentage} className="h-3" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "ux-evaluation":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                {slide.content.ratings.map((rating: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="p-4 hover:shadow-xl transition-all duration-300">
                      <CardContent className="space-y-3">
                        <div className="flex justify-between items-center">
                          <h3 className="text-base font-bold text-gray-800">
                            {rating.category}
                          </h3>
                          <div className="flex items-center space-x-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(rating.rating)
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                            <span className="text-lg font-bold text-gray-800 ml-2">
                              {rating.rating}/{rating.maxRating}
                            </span>
                          </div>
                        </div>
                        <Progress
                          value={(rating.rating / rating.maxRating) * 100}
                          className="h-2"
                        />
                        <p className="text-sm text-gray-600 italic">
                          {rating.feedback}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-yellow-600">
                      Participant Demographics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-base text-gray-700">
                          Students
                        </span>
                        <span className="text-lg font-bold text-blue-600">
                          {slide.content.demographics.students}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-base text-gray-700">
                          Developers
                        </span>
                        <span className="text-lg font-bold text-green-600">
                          {slide.content.demographics.developers}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-base text-gray-700">
                          Casual Users
                        </span>
                        <span className="text-lg font-bold text-purple-600">
                          {slide.content.demographics.casualUsers}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        );

      case "features":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {slide.content.features.map((feature: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <feature.icon className="w-8 h-8 text-blue-600" />
                        <h3 className="text-lg font-bold text-gray-800">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-base text-gray-600">
                        {feature.description}
                      </p>
                      <div className="space-y-1">
                        {feature.details.map(
                          (detail: string, detailIndex: number) => (
                            <div
                              key={detailIndex}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="w-3 h-3 text-green-600" />
                              <span className="text-sm text-gray-600">
                                {detail}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "challenges":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="space-y-6">
              {slide.content.challenges.map((challenge: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300">
                    <CardContent className="space-y-4">
                      <h3 className="text-lg font-bold text-red-600">
                        {challenge.challenge}
                      </h3>
                      <p className="text-base text-gray-700">
                        {challenge.description}
                      </p>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-green-700">
                          Solution:
                        </p>
                        <p className="text-sm text-green-600">
                          {challenge.solution}
                        </p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-blue-700">
                          Impact:
                        </p>
                        <p className="text-sm text-blue-600">
                          {challenge.impact}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "comparison":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="space-y-4">
              {slide.content.comparisons.map(
                (comparison: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-xl transition-all duration-300">
                      <CardContent className="grid grid-cols-4 gap-4 items-center">
                        <div>
                          <h3 className="text-base font-bold text-gray-800">
                            {comparison.feature}
                          </h3>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-green-600 font-semibold">
                            {comparison.ourApp}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">
                            {comparison.competitors}
                          </p>
                        </div>
                        <div className="text-center">
                          <Badge variant="outline" className="text-xs">
                            {comparison.advantage}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              )}
            </div>
          </div>
        );

      case "scalability":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {slide.content.aspects.map((aspect: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300">
                    <CardContent className="space-y-4">
                      <h3 className="text-lg font-bold text-cyan-600">
                        {aspect.title}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">
                            Current:
                          </span>
                          <span className="text-sm font-semibold text-gray-800">
                            {aspect.current}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Target:</span>
                          <span className="text-sm font-semibold text-blue-600">
                            {aspect.target}
                          </span>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">
                          {aspect.approach}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "future":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="space-y-6">
              {slide.content.enhancements.map(
                (enhancement: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <Card className="p-6 hover:shadow-xl transition-all duration-300">
                      <CardContent className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <h3 className="text-lg font-bold text-gray-800">
                              {enhancement.title}
                            </h3>
                            <p className="text-base text-gray-600">
                              {enhancement.description}
                            </p>
                            <p className="text-sm text-indigo-600 font-semibold">
                              Impact: {enhancement.impact}
                            </p>
                          </div>
                          <div className="text-right space-y-2">
                            <Badge
                              variant={
                                enhancement.priority === "High"
                                  ? "destructive"
                                  : enhancement.priority === "Medium"
                                  ? "default"
                                  : "secondary"
                              }
                              className="text-sm px-3 py-1"
                            >
                              {enhancement.priority} Priority
                            </Badge>
                            <p className="text-sm text-gray-600">
                              {enhancement.timeline}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              )}
            </div>
          </div>
        );

      case "team":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {slide.content.members.map((member: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300">
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <Users className="w-10 h-10 mx-auto text-green-600 mb-2" />
                        <h3 className="text-lg font-bold text-gray-800">
                          {member.name}
                        </h3>
                        <Badge variant="outline" className="text-sm mt-1">
                          {member.role}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-600">
                          Key Contributions:
                        </p>
                        <ul className="space-y-1">
                          {member.contributions.map(
                            (contribution: string, contribIndex: number) => (
                              <li
                                key={contribIndex}
                                className="flex items-start space-x-2"
                              >
                                <CheckCircle className="w-3 h-3 text-green-600 mt-1 flex-shrink-0" />
                                <span className="text-sm text-gray-700">
                                  {contribution}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "impact":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="space-y-8">
              {slide.content.achievements.map(
                (achievement: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card className="p-6 hover:shadow-xl transition-all duration-300">
                      <CardContent className="space-y-4">
                        <h3 className="text-xl font-bold text-yellow-600">
                          {achievement.category}
                        </h3>
                        <ul className="space-y-2">
                          {achievement.items.map(
                            (item: string, itemIndex: number) => (
                              <li
                                key={itemIndex}
                                className="flex items-start space-x-2"
                              >
                                <Award className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                                <span className="text-base text-gray-700">
                                  {item}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              )}
            </div>
          </div>
        );

      case "lessons":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="space-y-8">
              {slide.content.lessons.map((lesson: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300">
                    <CardContent className="space-y-4">
                      <h3 className="text-xl font-bold text-orange-600">
                        {lesson.category}
                      </h3>
                      <ul className="space-y-2">
                        {lesson.insights.map(
                          (insight: string, insightIndex: number) => (
                            <li
                              key={insightIndex}
                              className="flex items-start space-x-2"
                            >
                              <Lightbulb className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                              <span className="text-base text-gray-700">
                                {insight}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "conclusion":
        return (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <div className="space-y-6">
              {slide.content.achievements.map(
                (achievement: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300">
                      <CardContent className="flex items-center space-x-4">
                        <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                        <p className="text-base text-gray-700">{achievement}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 p-6 bg-blue-50 rounded-lg"
            >
              <p className="text-base text-gray-700 italic font-medium">
                {slide.content.impact}
              </p>
            </motion.div>
          </div>
        );

      case "thanks":
        return (
          <div className="text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <p className="text-2xl text-gray-600">{slide.subtitle}</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-base text-gray-700">{slide.description}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-8"
            >
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">
                    Project Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-left">
                  <p className="text-base">
                    <strong>University:</strong>{" "}
                    {slide.content.contact.university}
                  </p>
                  <p className="text-base">
                    <strong>Department:</strong>{" "}
                    {slide.content.contact.department}
                  </p>
                  <p className="text-base">
                    <strong>Supervisor:</strong>{" "}
                    {slide.content.contact.supervisor}
                  </p>
                  <p className="text-base">
                    <strong>Year:</strong> {slide.content.contact.year}
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">
                    Acknowledgments
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-left">
                  {slide.content.acknowledgments.map(
                    (ack: string, index: number) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{ack}</span>
                      </div>
                    )
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center space-x-4"
            >
              <Rocket className="w-12 h-12 text-blue-600" />
              <Brain className="w-12 h-12 text-purple-600" />
              <Smartphone className="w-12 h-12 text-green-600" />
            </motion.div>
          </div>
        );

      default:
        return <div>Slide content not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className="rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className="rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          <Button
            variant={isAutoPlay ? "default" : "outline"}
            size="sm"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="ml-4"
          >
            {isAutoPlay ? "Pause" : "Auto"}
          </Button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="fixed top-6 right-6 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border">
          <span className="text-base font-semibold text-gray-700">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="min-h-[80vh] flex items-center justify-center"
          >
            {renderSlideContent(slides[currentSlide])}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
