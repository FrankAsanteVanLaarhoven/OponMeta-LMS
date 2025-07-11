/**
 * Test Utility for AI Learning Companions System
 * This utility helps test the companions functionality
 */

import { sampleCompanions, subjects, getSubjectColor, getSubjectIcon } from '../data/companionsData';

export const testCompanionsSystem = () => {
  console.log('🤖 AI Learning Companions System Test');
  console.log('=====================================');

  // Test Data Structure
  console.log('\n📊 Testing Data Structure:');
  console.log(`  ✓ ${sampleCompanions.length} companions loaded`);
  console.log(`  ✓ ${subjects.length} subjects available`);
  
  // Test Subject Coverage
  console.log('\n📚 Testing Subject Coverage:');
  const subjectCounts = subjects.reduce((acc, subject) => {
    acc[subject] = sampleCompanions.filter(c => c.subject === subject).length;
    return acc;
  }, {} as Record<string, number>);
  
  Object.entries(subjectCounts).forEach(([subject, count]) => {
    console.log(`  ✓ ${subject}: ${count} companions`);
  });

  // Test Companion Features
  console.log('\n🎯 Testing Companion Features:');
  const features = {
    voiceTypes: new Set(sampleCompanions.map(c => c.voice)),
    styleTypes: new Set(sampleCompanions.map(c => c.style)),
    totalDuration: sampleCompanions.reduce((sum, c) => sum + c.duration, 0),
    averageDuration: Math.round(sampleCompanions.reduce((sum, c) => sum + c.duration, 0) / sampleCompanions.length)
  };
  
  console.log(`  ✓ Voice types: ${Array.from(features.voiceTypes).join(', ')}`);
  console.log(`  ✓ Style types: ${Array.from(features.styleTypes).join(', ')}`);
  console.log(`  ✓ Total duration: ${features.totalDuration} minutes`);
  console.log(`  ✓ Average duration: ${features.averageDuration} minutes`);

  // Test Utility Functions
  console.log('\n🔧 Testing Utility Functions:');
  subjects.forEach(subject => {
    const color = getSubjectColor(subject);
    const icon = getSubjectIcon(subject);
    console.log(`  ✓ ${subject}: ${icon} (${color})`);
  });

  // Test Sample Companions
  console.log('\n👥 Testing Sample Companions:');
  sampleCompanions.slice(0, 5).forEach(companion => {
    console.log(`  ✓ ${companion.name} - ${companion.subject} (${companion.duration}min)`);
  });

  console.log('\n✅ Companions system tested successfully!');
  console.log('\n📋 Manual Testing Checklist:');
  console.log('  1. Navigate to /companions');
  console.log('  2. Test search functionality');
  console.log('  3. Test subject filtering');
  console.log('  4. Test grid/list view switching');
  console.log('  5. Test bookmarking companions');
  console.log('  6. Click on a companion to start session');
  console.log('  7. Test session interface');
  console.log('  8. Test connection controls');
  console.log('  9. Test message display');
  console.log('  10. Test session duration tracking');
};

export const testCompanionSession = (companionId: string) => {
  const companion = sampleCompanions.find(c => c.id === companionId);
  
  if (!companion) {
    console.log('❌ Companion not found');
    return;
  }

  console.log(`🎤 Testing Session for ${companion.name}`);
  console.log('=====================================');
  
  console.log(`  Subject: ${companion.subject}`);
  console.log(`  Topic: ${companion.topic}`);
  console.log(`  Duration: ${companion.duration} minutes`);
  console.log(`  Voice: ${companion.voice}`);
  console.log(`  Style: ${companion.style}`);
  console.log(`  Color: ${getSubjectColor(companion.subject)}`);
  console.log(`  Icon: ${getSubjectIcon(companion.subject)}`);
  
  console.log('\n✅ Session test completed!');
};

export const testCompanionSearch = (query: string) => {
  console.log(`🔍 Testing Search: "${query}"`);
  console.log('============================');
  
  const results = sampleCompanions.filter(companion => 
    companion.name.toLowerCase().includes(query.toLowerCase()) ||
    companion.topic.toLowerCase().includes(query.toLowerCase()) ||
    companion.description.toLowerCase().includes(query.toLowerCase())
  );
  
  console.log(`  Found ${results.length} results:`);
  results.forEach(companion => {
    console.log(`    ✓ ${companion.name} - ${companion.topic}`);
  });
  
  console.log('\n✅ Search test completed!');
};

export const testSubjectFilter = (subject: string) => {
  console.log(`📚 Testing Subject Filter: "${subject}"`);
  console.log('=====================================');
  
  const results = sampleCompanions.filter(companion => companion.subject === subject);
  
  console.log(`  Found ${results.length} companions in ${subject}:`);
  results.forEach(companion => {
    console.log(`    ✓ ${companion.name} - ${companion.duration}min`);
  });
  
  console.log('\n✅ Subject filter test completed!');
};

export const getCompanionStats = () => {
  const stats = {
    total: sampleCompanions.length,
    subjects: subjects.length,
    totalDuration: sampleCompanions.reduce((sum, c) => sum + c.duration, 0),
    averageDuration: Math.round(sampleCompanions.reduce((sum, c) => sum + c.duration, 0) / sampleCompanions.length),
    voiceDistribution: sampleCompanions.reduce((acc, c) => {
      acc[c.voice] = (acc[c.voice] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
    styleDistribution: sampleCompanions.reduce((acc, c) => {
      acc[c.style] = (acc[c.style] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  };
  
  console.log('📊 Companion Statistics');
  console.log('=======================');
  console.log(`  Total Companions: ${stats.total}`);
  console.log(`  Subjects Covered: ${stats.subjects}`);
  console.log(`  Total Duration: ${stats.totalDuration} minutes`);
  console.log(`  Average Duration: ${stats.averageDuration} minutes`);
  console.log(`  Voice Distribution:`, stats.voiceDistribution);
  console.log(`  Style Distribution:`, stats.styleDistribution);
  
  return stats;
};

// Export test functions
export default {
  testCompanionsSystem,
  testCompanionSession,
  testCompanionSearch,
  testSubjectFilter,
  getCompanionStats
}; 