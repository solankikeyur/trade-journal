<template>
  <input
    :type="type"
    :name="name"
    :id="id"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    :placeholder="placeholder"
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>
<script setup>
const { type, name, id, placeholder, modelValue } = defineProps(['type', 'name', 'id', 'placeholder', 'modelValue']);
const emit = defineEmits(['update:modelValue']);
</script>