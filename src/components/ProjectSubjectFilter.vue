<template>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="filter">
      Filter by Name
    </label>
    <input
      v-model="filterText"
      @input="onFilterChange"
      type="text"
      id="filter"
      placeholder="Type to filter..."
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'; // Добавяне на defineEmits

const emit = defineEmits(['filter-changed']); // Деклариране на emit
const filterText = ref('');

function onFilterChange() {
  emit('filter-changed', filterText.value);
}
</script>

<style>
/* Add relevant styling here if needed */
</style>
