<template>
    <button 
      :disabled="disabled" 
      class="submit-btn"
      @click="$emit('click')">
      <slot></slot> <!-- Use slot for dynamic text content -->
    </button>
  </template>
  
  <script>
  export default {
    name: 'Button',
    props: {
      disabled: { type: Boolean, default: false },
    },
  };
  </script>
  
  <style scoped>
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
  
  .submit-btn:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  