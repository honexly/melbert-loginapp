<template>
    <div>
        <router-view>   <button type="submit" class="btn" :disabled="!isValidEmail || !isValidPassword">
          Sign In
        </button>
      </router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>