<template>
  <div id="app">
    <router-view></router-view>
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
          />
        </div>

        <!-- Password Input -->
        <div class="form-group">
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            class="input"
          />
        </div>

        <!-- Links -->
        <div class="links">
          <a href="#" class="forgot-password">Forgot Password?</a>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="btn">
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
  name:"App",
  components: {}
};
</script>

<style scoped>
/* General Page Styling */
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f7f9;
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
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
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
  background: #6c63ff;
  color: #fff;
  color: #a640fad3;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.btn:hover {
  background: #574bff;
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
