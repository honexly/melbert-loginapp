<template>
    <div class="home-container">
    <!-- Header Section -->
    <header class="header">
      <div class="logo">
        <h1>League of Legends</h1>
        <p>Stay up to date with all things League</p>
      </div>
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
          <img src="https://via.placeholder.com/300" alt="League Update" />
        </div>
        <div class="image-box">
          <img src="https://via.placeholder.com/300" alt="League Champions" />
        </div>
        <div class="image-box">
          <img src="https://via.placeholder.com/300" alt="Season Update" />
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
    name: "HomePage",
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 2rem;
    font-family: Arial, sans-serif;
  }
  </style>