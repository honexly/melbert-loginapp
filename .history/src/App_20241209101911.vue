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
/* Container for the form */
.top-name{
  display:flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #4CAF50;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-content: center;
  border: 1px solid;
  width: 440px;
  border-radius: 10px;
  justify-content: center;

}

.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #058f4a;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Form group styling */
.form-group {
  margin-bottom: 20px;
}

/* Label styling */
.label {
  font-size: 16px;
  font-weight: bold;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  display: block;
  margin-bottom: 8px;
  color: #ffffff;
}

/* Input field styling */
.input {
  width: 95%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease;
}

/* Green border when typing a valid email or password */
.input.valid {
  border-color: green;
}

/* Red border when email or password is invalid and touched */
.input.invalid {
  border-color: red;
}

/* Error message styling */
.error-text {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: bold;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  display: block;
  margin-top: 5px;
}

/* Submit button styling */
.submit-btn {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Disabled button styling */
.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Focused input field styling */
.input:focus {
  border-color: #4CAF50;
}
</style>
