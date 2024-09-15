<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <Logo class="mb-4"></Logo>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Create an account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="handleRegister">
            <div>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                v-model="formData.email"
              />
            </div>
            <div>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                v-model="formData.password"
              />
            </div>
            <div>
              <Label for="confirm-password">Confirm password</Label>
              <Input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                v-model="formData.confirmPassword"
              />
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  v-model="formData.confirmTerms"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                />
              </div>
              <div class="ml-3 text-sm">
                <label
                  for="terms"
                  class="font-light text-gray-500 dark:text-gray-300"
                  >I accept the
                  <a
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                    >Terms and Conditions</a
                  ></label
                >
              </div>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create an account
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?
              <RouterLink
                to="/login"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Login here</RouterLink
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import Logo from "../Common/Logo.vue";
import Input from "../Common/Inputs/Input.vue";
import Label from "../Common/Inputs/Label.vue";

const formData = ref({
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  confirmTerms: false,
});

const handleRegister = () => {
  console.log(formData.value);
};
</script>
