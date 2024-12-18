<template>
    <div id="app">
        
        <div class="login-wrapper">
            <div class="lol-logo">
                <img src="@/assets/lol-logo.png">
            </div>
    <div class="login-card">
      <h2 class="title">Account Login</h2>
      <form @submit.prevent="submitForm">
        <!-- Email Input -->
        <div class="form-group">
          <input
            type="email"
            v-model="email"
            placeholder="Email"
            class="input"
            :class="{ 'input-error': emailTouched && !isValidEmail }"
            @blur="emailTouched = true"
          />
          <p v-if="emailTouched && !isValidEmail" class="error-text">
            Please enter a valid email.
          </p>
        </div>

        <!-- Password Input -->
        <div class="form-group">
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            class="input"
            :class="{ 'input-error': passwordTouched && !isValidPassword }"
            @blur="passwordTouched = true"
          />
          <p v-if="passwordTouched && !isValidPassword" class="error-text">
            Password must be at least 8 characters long.
          </p>
        </div>

        <!-- Remember Me -->
        <div class="remember">
          <input type="checkbox" id="remember" v-model="rememberEmail" />
          <label for="remember">Remember Me</label>
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="btn"
          :disabled="!isValidEmail || !isValidPassword"
        >
          Log In
        </button>

        <!-- Links -->
        <div class="links">
          <p>
            Don't Have an account?
            <a href="#" class="link">Sign up now!</a>
          </p>
          <p>
            Forgot your <a href="#" class="link">password</a>?
          </p>
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
    // Email validation: must contain "@" and ".com"
    isValidEmail() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    },
    // Password validation: minimum 8 characters
    isValidPassword() {
      return this.password.length >= 8;
    },
  },
  methods: {
    submitForm() {
      // Check for specific email and password match
      if (
        this.email === "nap.mjmainit@gmail.com" &&
        this.password === "melbertjames"
      ) {
        alert("Login successful!");
        // Navigate to the homepage
        this.$router.push("/home");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    },
  },
};
  </script>
  <style scoped>
  
  /* General Wrapper */
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('@/assets/league-of-legends-lol1234.gif');
  background-size: cover;
  
  font-family: Arial, sans-serif;
}

/* Card Styling */
.login-card {
  background-image: url('@/assets/faker.jpg');
  background-size: cover;
  padding: 2rem;
  padding-right: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.5);
  text-align: center;
  width: 550px;
  color: #fff;
}

/* Title */
.title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-transform: uppercase;
}

/* Input Fields */
.input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  background:transparent;
  color: #fff;
  font-size: 0.9rem;
}

.input::placeholder {
  color: #aaa;
}

.input:focus {
  outline: none;
  border-color: #888;
}

/* Error Styling */
.input-error {
  border-color: red;
}

/* Remember Checkbox */
.remember {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.85rem;
}

.remember input {
  margin-right: 0.5rem;
}

/* Button */
.btn {
  width: 100%;
  padding: 0.75rem;
  background: #e38916;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.btn:disabled {
  background: #666;
  cursor: not-allowed;
}

/* Links */
.links {
  margin-top: 1.5rem;
  font-size: 0.85rem;
}

.link {
  color: #e38916;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
  </style>
  