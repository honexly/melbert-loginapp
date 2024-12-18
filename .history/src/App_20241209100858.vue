<template>
  <div id="app">
    <router-view></router-view>
    <div class="top-name">
    <h1>Enter your details</h1>
  </div>
    <form @submit.prevent="submitForm" class="form-container">
      <!-- Email Field -->
      <div class="form-group">
        <label for="email" class="label">Email:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          @input="validateEmail"
          @blur="validateEmail"
          :class="{
            'valid': isTyping && isValidEmail, 
            'invalid': !isValidEmail && emailTouched
          }"
          placeholder="Enter your email"
          class="input"
        />
        <p v-if="emailTouched && !isValidEmail" class="error-text">
          Please enter a valid email address.
        </p>
      </div>
      <!-- Password Field -->
      <div class="form-group">
        <label for="password" class="label">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          @input="validatePassword"
          @blur="validatePassword"
          :class="{
            'valid': isTyping && isValidPassword, 
            'invalid': !isValidPassword && passwordTouched
          }"
          placeholder="Enter your password"
          class="input"
        />
        <p v-if="passwordTouched && !isValidPassword" class="error-text">
          Password must be at least 8 characters.
        </p>
      </div>

      <!-- Confirm Password Field -->
      <div class="form-group">
        <label for="confirmPassword" class="label">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="confirmPassword"
          @input="validateConfirmPassword"
          @blur="validateConfirmPassword"
          :class="{
            'valid': confirmPassword === password,
            'invalid': confirmPassword !== password && confirmPasswordTouched
          }"
          placeholder="Confirm your password"
          class="input"
        />
        <p v-if="confirmPasswordTouched && confirmPassword !== password" class="error-text">
          Passwords do not match.
        </p>
      </div>

      <button type="submit" :disabled="!isValidEmail || !isValidPassword || confirmPassword !== password" class="submit-btn">
        Submit
      </button>
    </form>

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
