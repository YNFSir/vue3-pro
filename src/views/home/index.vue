<script setup lang="ts"></script>

<template>
  <div class="top-panel">今天星期{{ new Date().getDay() }}</div>

  <button @click="$router.replace('/')">退出登录</button>
</template>

<style scoped></style>
