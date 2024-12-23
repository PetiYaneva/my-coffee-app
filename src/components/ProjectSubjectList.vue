<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <ProjectSubjectCard
      v-for="subject in subjects"
      :key="subject.id"
      :subject="subject"
      @delete-subject="$emit('delete-subject', subject.id)"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import ProjectSubjectCard from './ProjectSubjectCard.vue';

defineProps({
  subjects: {
    type: Array,
    required: true
  }
});
</script>

<style>
/* Add relevant styling here if needed */
</style>
