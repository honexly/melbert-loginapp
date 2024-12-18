<template>
     <div class="home-container">
    <!-- Header Section -->
    <header class="header">
      <div class="logo">
        <img src="@/assets/lol-logo.png" class="lol-logo">
        <p>Stay up to date with all things League</p>
      </div>
       <!-- Log Out Button -->
    <button class="btn-logout" @click="logout">Log Out</button>
    </header>

    <!-- Main Content Section -->
    <main class="main-content">
      <section class="news-section">
        <h2>Road to Preseason - Gameplay Update</h2>
        <p>Join the exciting new changes and strategies for the preseason!</p>
        <a href="#" class="btn-read-more">Read More</a>
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
  </template>
  
  <script>
  export default {
  name: "home",
  methods: {
    logout() {
      // Clear any authentication state or session (e.g., remove from localStorage)
      localStorage.removeItem('userLoggedIn'); // or any other session-related data

      // Redirect to the login page using Vue Router
      this.$router.push("/login");
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
  background: #0f0f0f;
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
  background: #181818;
}

.news-section h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #f4c542;
}

.news-section p {
  font-size: 1rem;
  margin-bottom: 20px;
  color: #ccc;
}

.btn-read-more {
  padding: 10px 20px;
  background: #f4c542;
  color: #0f0f0f;
  text-decoration: none;
  border-radius: 5px;
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
}
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

/* Info Section */
.info-section {
  margin-top: 40px;
  text-align: center;
}

.info-section h3 {
  font-size: 1.75rem;
  color: #f4c542;
}

.info-section p {
  color: #ccc;
  font-size: 1rem;
  margin-top: 10px;
}

/* Footer */
.footer {
  background: #0f0f0f;
  padding: 20px;
  text-align: center;
  color: #888;
}
  </style>