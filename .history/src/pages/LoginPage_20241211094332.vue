<template>
    <div id="app">
    <!-- Loading Screen -->
    <div class="loading-screen" v-if="isLoading">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>

    <!-- Video Playback -->
    <div v-if="showVideo" class="video-screen">
      <video ref="videoPlayer" autoplay muted controls class="autoplay-video" @ended="proceedToHomepage">
        <source src="@/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button class="btn skip-btn" @click="proceedToHomepage">Skip</button>
    </div>

    <!-- Login Form -->
    <div class="login-wrapper" v-else>
      <div class="login-card">
        <div class="lol-logo">
          <img src="@/assets/download (2).png" alt="LOL Logo" class="logo" />
        </div>
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
      isLoading: false, // Tracks loading state
      showVideo: false, // Tracks whether the video is being shown
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
        this.isLoading = true; // Start loading animation
        setTimeout(() => {
          this.isLoading = false; // Stop loading
          this.showVideo = true; // Show the video
        }, 2000); // Delay for 2 seconds
      } else {
        alert("Incorrect. Please try again.");
      }
    },
    proceedToHomepage() {
      this.$router.push("/home"); // Navigate to the homepage
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
  background-image: url('@/assets/leesin.jpg');
  background-size: cover;
  padding: 2rem;
  padding-right: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.5);
  text-align: center;
  width: 550px;
  height: 800px;
  color: #fff;
}
.logo{
  width:500px
}

/* Title */
.title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-transform: uppercase;
  color: #f80000;
  
}
/* Input Fields */
.input {
  width: 95%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  background:transparent;
  color: #ffffff;
  font-size: 0.9rem;
}
.input::placeholder {
  color: #aaa;
}
.input:focus {
  outline: none;
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
/* Video Screen */
.video-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 1000;
}

.autoplay-video {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.5);
}

.skip-btn {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #f80000;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.skip-btn:hover {
  background-color: #d60000;
}
/* Loading Screen */
.loading-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212;
  color: white;
}
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-screen p {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #f4c542;
}
  </style>
  