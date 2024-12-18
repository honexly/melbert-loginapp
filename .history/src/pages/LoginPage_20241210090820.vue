<template>
    <div id="app">
        <div class="form-wrapper">
      <div class="form-card">
        <!-- Header -->
        <div class="header">
          <h1 class="logo">📧 Email & Password Validation</h1>
        </div>
        <!-- Form -->
        <form @submit.prevent="validateForm" class="form-container">
          <!-- Email Input -->
          <div class="form-group">
            <input
              type="email"
              v-model="email"
              placeholder="Enter your email"
              class="input"
              :class="{ 'input-error': emailTouched && !isValidEmail }"
              @blur="emailTouched = true"
            />
            <p v-if="emailTouched && !isValidEmail" class="error-text">
              Please enter a valid email with "@" and ".com"
            </p>
          </div>
          <!-- Password Input -->
          <div class="form-group">
            <input
              type="password"
              v-model="password"
              placeholder="Enter your password"
              class="input"
              :class="{ 'input-error': passwordTouched && !isValidPassword }"
              @blur="passwordTouched = true"
            />
            <p v-if="passwordTouched && !isValidPassword" class="error-text">
              Password must be at least 8 characters.
            </p>
          </div>
          <!-- Submit Button -->
          <button
            type="submit"
            class="btn"
            :disabled="!isValidEmail || !isValidPassword"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
      </div>
  </template>
  <script>
 export default {
  data() {
    return {
      email: "",
      password: "",
      emailTouched: false,
      passwordTouched: false,
    };
  },
  computed: {
    isValidEmail() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    },
    isValidPassword() { 
        this.email === "nap.mjmaini@gmail.com" &&
        this.password === "melbertjames"
      ) {
        alert("Login successful!");
        // Navigate to the homepage
        this.$router.push("/homepage");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    },
  },
};
  </script>
  <style scoped>
  
  .form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f4f8;
}

/* Card Styling */
.form-card {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

/* Header */
.header .logo {
  font-size: 1.5rem;
  color: #4a90e2;
  margin-bottom: 1.5rem;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
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
  border-color: #4a90e2;
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

/* Submit Button */
.btn {
  width: 100%;
  padding: 0.75rem;
  background: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
  </style>
  