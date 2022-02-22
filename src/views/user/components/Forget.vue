<script setup lang="ts">

</script>

<template>
  <div class="input-box">
    <input type="text" placeholder="请输入用户名">
    <button>重置密码</button>
  </div>

  <div class="other-box">
    <a @click.prevent="$router.replace('/login')">已有账号，去登录</a>
    <a @click.prevent="$router.replace('/register')">没有账号，去注册</a>
  </div>
</template>

<style lang="scss" scoped>

</style>