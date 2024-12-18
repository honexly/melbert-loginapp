<template>
    <div id="app">
      <div class="form-wrapper">
        <div class="form-card">
          <!-- Logo and Description -->
          <div class="header">
            <h1 class="logo">📞 Contact Keeper</h1>
            <p class="subtitle">Your Network, Simplified</p>
          </div>
  
          <!-- Form -->
          <form @submit.prevent="submitForm" class="form-container">
            <!-- Email Input -->
            <div class="form-group">
              <input
                type="email"
                v-model="email"
                placeholder="Email"
                class="input"
                :class="{ 'input-error': !isValidEmail && emailTouched }"
                @blur="emailTouched = true"
              />
              <p v-if="emailTouched && !isValidEmail && email !== ''" class="error-text">
                Please enter a valid email address.
              </p>
            </div>
  
            <!-- Password Input -->
            <div class="form-group">
              <input
                type="password"
                v-model="password"
                placeholder="Password"
                class="input"
                :class="{ 'input-error': !isValidPassword && passwordTouched }"
                @blur="passwordTouched = true"
              />
              <p v-if="passwordTouched && !isValidPassword" class="error-text">
                Password must be at least 8 characters.
              </p>
            </div>
  
            <!-- Links -->
            <div class="links">
              <a href="#" class="forgot-password">Forgot Password?</a>
            </div>
  
            <!-- Submit Button -->
            <button type="submit" class="btn" :disabled="!isValidEmail || !isValidPassword">
              Sign In
            </button>
  
            <!-- Signup Link -->
            <div class="signup-link">
              <span>New to Keeper? </span>
              <a href="#" class="create-account">Create an account</a>
            </div>
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
        return /^[\w._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email);
      },
      isValidPassword() {
        return this.password.length >= 8;
      },
    },
    methods: {
      submitForm() {
        if (this.isValidEmail && this.isValidPassword) {
          // Redirect to the Home page
          this.$router.push({ name: 'Home' });
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  
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
  }
  
  .header .subtitle {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1.5rem;
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
    color: #6c63ff;
    text-decoration: none;
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
  }
  
  .create-account {
    color: #6c63ff;
    text-decoration: none;
  }
  
  .create-account:hover {
    text-decoration: underline;
  }
  </style>
  