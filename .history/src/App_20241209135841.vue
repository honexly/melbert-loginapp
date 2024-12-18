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
/* General Page Styling */
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Card Styling */
.form-card {
  background: #fff;
  padding: 2rem;
  background-image: url('@/assets/background-img.jpg');
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

/* Header */
.header .logo {
  font-size: 1.5rem;
  color: #a640fad3;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.header .subtitle {
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

/* Input Fields */
.input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.input:focus {
  outline: none;
  border-color: #6c63ff;
}

/* Error styling */
.input-error {
  border-color: red;
}

.error-text {
  font-size: 0.875rem;
  color: red;
  margin-top: 0.5rem;
}

/* Links */
.links {
  text-align: right;
  margin-bottom: 1rem;
}

.forgot-password {
  font-size: 0.875rem;
  color: #ffffff;
  text-decoration: none;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.forgot-password:hover {
  text-decoration: underline;
}

/* Submit Button */
.btn {
  width: 100%;
  padding: 0.75rem;
  background: #a640fad3;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.btn:disabled {
  background: #a640fad3;
  cursor: not-allowed;
}

/* Signup Link */
.signup-link {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #555;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.create-account {
  color: #6c63ff;
  text-decoration: none;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.create-account:hover {
  text-decoration: underline;
}
</style>
