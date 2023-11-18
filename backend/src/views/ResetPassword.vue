<template>
    <GuestLayout title="Set new password">
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true"/>
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="new-password" class="sr-only">New Password</label>
            <input id="new-password" name="password" type="password" required=""
                   class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="New Password"/>
          </div>
          <div>
            <label for="password-repeat" class="sr-only">Repeat Password</label>
            <input id="password-repeat" name="password_repeat" type="password" required=""
                   class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="Repeat Password"/>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="text-sm">
            <router-link :to="{name: 'login'}" class="font-medium text-indigo-600 hover:text-indigo-500">
              Go back to Login
            </router-link>
          </div>
        </div>

        <div>
          <button type="submit"
                  class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

            Submit
          </button>
        </div>
      </form>
    </GuestLayout>
  </template>

  <script setup>
  import GuestLayout from "../components/GuestLayout.vue";
  </script>
