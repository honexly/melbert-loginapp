<template>
    <div class="not-found">
      <img src="@/assets/Animation - 1733791896349.gif" class="dinosaur">
      <router-link to="/home">Return to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'notfound',
  };
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    margin-top: 50px;
    color: white;
  }
  .dinosaur{
    height: 100vh;
    width: 70%;
    background-size: cover;
  }
  </style>