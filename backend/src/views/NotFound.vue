<template>
    <div class="flex items-center justify-center w-full min-w-full min-h-full">
      <div class="flex">
        <div class="self-start px-8 pb-8 text-5xl font-bold leading-10 text-indigo-600 border-r">404</div>
        <div class="px-8">
          <h1 class="mb-2 text-5xl font-bold">Page Not Found</h1>
          <p class="mb-10 text-gray-400">Please check the url in address bar and try again</p>
          <div>
            <router-link :to="{name: 'app.dashboard'}"
              class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Go back home
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>

  </script>

  <style scoped>

  </style>
