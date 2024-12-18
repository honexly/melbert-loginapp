<template>
    <transition name="fade-in-top-to-bottom">
      <div class="home-container">
        <!-- Header Section -->
        <header class="header">
          <!-- Log Out Button -->
          <div class="logout">
            <button class="btn-logout" @click="showConfirmation = true">Log Out</button>
          </div>
          <div class="logo">
            <img src="@/assets/lol-logo.png" class="lol-logo" />
            <p>Stay up to date with all things League</p>
          </div>
          <!-- Log Out Confirmation -->
          <div v-if="showConfirmation" class="confirmation-modal">
            <p>Are you sure you want to log out?</p>
            <button @click="logout" class="btn-yes">Yes</button>
            <button @click="cancelLogout" class="btn-no">No</button>
          </div>
        </header>
        <!-- Main Content Section -->
        <main class="main-content">
          <section class="news-section">
            <h2>Road to Preseason - Gameplay Update</h2>
            <p>Join the exciting new changes and strategies for the preseason!</p>
            <a href="#" class="btn-read-more" @click.prevent="goToNotFoundPage">Read More</a>
          </section>
  
          <!-- Featured Images Section -->
          <section class="featured-images">
            <div class="image-box">
              <img src="@/assets/udry.jpg" alt="League Update" />
            </div>
            <div class="image-box">
              <img src="@/assets/akali.jpg" alt="League Champions" />
            </div>
            <div class="image-box">
              <img src="@/assets/ezreal.jpg" alt="Season Update" />
            </div>
            <div class="image-box">
              <img src="@/assets/faker-ahri.jpg" alt="Season Update" />
            </div>
            <div class="image-box">
              <img src="@/assets/yone.jpg" alt="Season Update" />
            </div>
          </section>
          <section class="featured-images">
            <div class="image-box">
              <img src="@/assets/yasou.jpg" alt="League Update" />
            </div>
            <div class="image-box">
              <img src="@/assets/irelia.jpg" alt="League Champions" />
            </div>
            <div class="image-box">
              <img src="@/assets/katarina.jpg" alt="Season Update" />
            </div>
            <div class="image-box">
              <img src="@/assets/jayce.jpg" alt="Season Update" />
            </div>
            <div class="image-box">
              <img src="@/assets/zed.jpg" alt="Season Update" />
            </div>
          </section>
  
          <!-- Information Section -->
          <section class="info-section">
            <h3>Immersive Reading Experience</h3>
            <p>Get ready for immersive content like never before.</p>
          </section>
        </main>
        <!-- Footer Section -->
        <footer class="footer">
          <p>&copy; 2024 League of Legends. All rights reserved.</p>
        </footer>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    name: "HomePage",
  data() {
    return {
      showConfirmation: false, // To control the visibility of the confirmation modal
    };
  },
  methods: {
    // Redirect to NotFound page
    goToNotFoundPage() {
      this.$router.push("/not-found");
    },
    // Logout and redirect to the login page
    logout() {
      // Clear any authentication state or session (e.g., remove from localStorage)
      localStorage.removeItem('userLoggedIn'); // Or any other session-related data

      // Redirect to the login page
      this.$router.push("/LoginPage");
    },
    // Cancel logout and hide the confirmation modal
    cancelLogout() {
      this.showConfirmation = false;
    },
  },
};
  </script>
  
  <style scoped>
  /* General Styling */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: #121212;
  color: white;
}
.lol-logo{
    width: 400px;
   

}

.home-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* Header */
.header {
  background-image: url('@/assets/upper-background.jpg');
  background: no-repeat;
  padding: 20px;
  text-align: center;
}
.logo h1 {
  font-size: 3rem;
  color: #f4c542;
}

.logo p {
  font-size: 1.25rem;
  color: #ccc;
  margin-top: -30px;
}

/* Main Content */
.main-content {
  flex-grow: 1;
  padding: 40px;
  background-image: url('@/assets/ssdd.jpg');
  background-size:cover
 
}

.news-section h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #f4c542;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.news-section p {
  font-size: 1rem;
  margin-bottom: 20px;
  color: #ccc;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.btn-read-more {
  padding: 10px 20px;
  background: #f4c542;
  color: #0f0f0f;
  text-decoration: none;
  border-radius: 5px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.btn-read-more:hover {
  background: #e0a237;
}

/* Featured Images Section */
.featured-images {
  display: flex;
  gap: 20px;
  margin-top: 40px;
  justify-content: center;
  
}

.image-box {
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .2s;
}
.image-box:hover img {
  transform: scale(1.2) rotate(5deg);
  transition: .2s;
  filter: brightness(0.8) saturate(1.5);
}

/* Optional: Add a subtle shadow effect on hover */
.image-box:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.5s ease;
}
/* Logout Button */
.btn-logout {
  background: #f4c542;
  color: #0f0f0f;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.btn-logout:hover {
  background: #e0a237;
}
/* Confirmation Modal */
.confirmation-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #181818;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  color: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.confirmation-modal button {
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

.btn-yes {
  background: #f4c542;
  color: #0f0f0f;
}

.btn-yes:hover {
  background: #e0a237;
}

.btn-no {
  background: #444;
  color: white;
}

.btn-no:hover {
  background: #666;
}

/* Info Section */
.info-section {
  margin-top: 40px;
  text-align: center;
}

.info-section h3 {
  font-size: 1.75rem;
  color: #f4c542;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.info-section p {
  color: #ccc;
  font-size: 1rem;
  margin-top: 10px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

/* Footer */
.footer {
  background: #0f0f0f;
  padding: 20px;
  text-align: center;
  color: #888;
}
/* Fade-In Top-to-Bottom Animation */
@keyframes fadeInTopToBottom {
  from {
    opacity: 0;
    transform: translateY(-50px); /* Start 50px above the viewport */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* End at the normal position */
  }
}

/* Vue Transition Classes */
.fade-in-top-to-bottom-enter-active {
  animation: fadeInTopToBottom 0.8s ease-out;
}
.fade-in-top-to-bottom-leave-active {
  animation: fadeInTopToBottom 0.8s ease-in reverse;
}
  </style>