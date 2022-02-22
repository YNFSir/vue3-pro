<script lang="ts" setup>
import { useUserStore } from '@/stores';

const { handleChangeFocus } = useUserStore();
</script>

<template>
  <div class="input-box">
    <input placeholder="请输入用户名" type="text" />
    <input
      placeholder="请输入密码"
      type="password"
      @focusin="handleChangeFocus(true)"
      @focusout="handleChangeFocus(false)"
    />
    <button @click.prevent="$router.replace('/layout')">登 录</button>
  </div>

  <div class="other-box">
    <a @click.prevent="$router.replace('/register')">没有账号，去注册</a>
    <a @click.prevent="$router.replace('/forget')">忘记密码</a>
  </div>
</template>
