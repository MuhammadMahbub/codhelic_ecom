<template>
    <div class="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div>
          <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
            {{ title }}
          </h2>
        </div>
        <slot></slot>
      </div>
    </div>
  </template>


<script setup>

    const {title} = defineProps({
        title: String
    })
</script>
