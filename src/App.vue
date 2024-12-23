<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-blue-600 text-white py-4 text-center text-xl font-bold">
      Interactive ProjectSubject Manager
    </header>

    <main class="p-6">
      <!-- AddProjectSubject Component -->
      <AddProjectSubject @add-project-subject="addProjectSubject" />

      <!-- ProjectSubjectFilter Component -->
      <ProjectSubjectFilter @filter-changed="filterSubjects" />

      <!-- ProjectSubjectList Component -->
      <ProjectSubjectList
        :subjects="filteredSubjects"
        @delete-subject="deleteProjectSubject"
      />
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import AddProjectSubject from './components/AddProjectSubject.vue';
import ProjectSubjectFilter from './components/ProjectSubjectFilter.vue';
import ProjectSubjectList from './components/ProjectSubjectList.vue';

const subjects = ref([]);
const filter = ref('');

const filteredSubjects = computed(() => {
  return subjects.value.filter((subject) =>
    subject.name.toLowerCase().includes(filter.value.toLowerCase())
  );
});

function addProjectSubject(newSubject) {
  subjects.value.push(newSubject);
}

function deleteProjectSubject(subjectId) {
  subjects.value = subjects.value.filter((subject) => subject.id !== subjectId);
}

function filterSubjects(newFilter) {
  filter.value = newFilter;
}
</script>

<style>
@import './assets/styles.css';
</style>
