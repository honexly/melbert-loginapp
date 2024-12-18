<template>
    <div class="not-found">
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <router-link to="/home">Return to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  };
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    margin-top: 50px;
    color: white;
  }
  </style>