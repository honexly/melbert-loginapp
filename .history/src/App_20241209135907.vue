<template>
  <div id="app">
    <form @submit.prevent="submitForm" class="email-form">
      <!-- Email Input -->
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Enter test@test.com"
          class="input"
          :class="{ 'input-error': !isValidEmail && emailTouched }"
          @blur="emailTouched = true"
        />
        <p v-if="emailTouched && !isValidEmail" class="error-text">
          Please enter "test@test.com"
        </p>
      </div>

      <!-- Submit Button -->
      <button type="submit" :disabled="!isValidEmail" class="btn">
        Submit
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      emailTouched: false, // Track whether the email input has been touched
      passwordTouched: false, // Track whether the password input has been touched
    };
  },
  computed: {
    isValidEmail() {
      // Email validation: required, must contain "@" and "."
      return /^[\w._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email);
    },
    isValidPassword() {
      // Password validation: required, minimum 8 characters
      return this.password.length >= 8;
    },
  },
  methods: {
    submitForm() {
      if (this.isValidEmail && this.isValidPassword) {
        alert("Form submitted!");
        // Handle form submission logic here (e.g., send data to server)
      }
    },
  },
};
</script>
<style scoped>
<style scoped>
/* General Styling */
.email-form {
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f7f7f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Input Styling */
.input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.input-error {
  border-color: red;
}

.error-text {
  color: red;
  font-size: 12px;
  margin-top: -8px;
  margin-bottom: 10px;
}

/* Submit Button */
.btn {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:disabled {
  background-color: #a5d6a7;
  cursor: not-allowed;
}
</style>
