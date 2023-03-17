<template>
    <div class="main-text error-page">
        <p>
            {{ error.message }}
        </p>
        <p>
            -----------------
        </p>
        <p>
            Goodbye to <button class="my-link" @click="handleError">TOP</button>
        </p>
    </div>
</template>

<style scoped>
.error-page{
    margin: auto;
    text-align: center;
}
</style>

<script setup>
const props = defineProps({ error: Object })
const handleError = () => clearError({ redirect: '/' })
</script>