<template>
  <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input
        v-model="formData.name"
        type="text"
        id="name"
        placeholder="Enter name"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
        Image URL
      </label>
      <input
        v-model="formData.image"
        type="text"
        id="image"
        placeholder="Enter image URL"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
        Description
      </label>
      <textarea
        v-model="formData.description"
        id="description"
        placeholder="Enter description"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      ></textarea>
    </div>
    <div class="flex items-center justify-between">
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, defineEmits } from 'vue'; // Добавяне на defineEmits

const emit = defineEmits(['add-project-subject']); // Деклариране на emit
const formData = ref({
  name: '',
  image: '',
  description: '',
});

function submitForm() {
  if (formData.value.name && formData.value.image && formData.value.description) {
    emit('add-project-subject', { ...formData.value, id: Date.now() });
    formData.value.name = '';
    formData.value.image = '';
    formData.value.description = '';
  } else {
    alert('Please fill in all fields.');
  }
}
</script>

<style>
/* Add relevant styling here if needed */
</style>
