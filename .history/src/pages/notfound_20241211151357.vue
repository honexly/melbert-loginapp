<template>
    <div class="not-found">
      <img src="@/assets/erro.gif" class="dinosaur">
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
  .dinosaur{
    height: 100;
    width: 70vw;
    background-size: cover;
  }
  </style>