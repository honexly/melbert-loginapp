<template>
    <div class="form-group">
      <label :for="id" class="label">{{ label }}</label>
      <input
        v-bind="$attrs"
        v-model="modelValue"
        :type="type"
        :id="id"
        class="input"
        @blur="handleBlur"
        @input="handleInput"
        :class="{
          valid: isValid,
          invalid: touched && !isValid
        }"
        :placeholder="placeholder"
      />
      <p v-if="touched && !isValid" class="error-text">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TextField',
    props: {
      id: { type: String, required: true },
      label: { type: String, required: true },
      modelValue: { type: String, required: true },
      errorMessage: { type: String, default: '' },
      isValid: { type: Boolean, required: true },
      touched: { type: Boolean, required: true },
      type: { type: String, default: 'text' },
      placeholder: { type: String, default: '' },
    },
    methods: {
      handleInput(event) {
        this.$emit('update:modelValue', event.target.value);
      },
      handleBlur() {
        this.$emit('update:touched', true);
      }
    }
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 20px;
  }
  
  .label {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    display: block;
    margin-bottom: 8px;
  }
  
  .input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s ease;
  }
  
  .input.valid {
    border-color: green;
  }
  
  .input.invalid {
    border-color: red;
  }
  
  .error-text {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }
  </style>
  