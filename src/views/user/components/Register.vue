<script lang="ts" setup>
import { useUserStore } from '@/stores';

const { handleChangeFocus } = useUserStore();
</script>

<template>
  <div class="input-box">
    <input placeholder="请输入用户名" type="text" />
    <input
      placeholder="请输入用户密码"
      type="password"
      @focusin="handleChangeFocus(true)"
      @focusout="handleChangeFocus(false)"
    />
    <input
      placeholder="请确认用户密码"
      type="password"
      @focusin="handleChangeFocus(true)"
      @focusout="handleChangeFocus(false)"
    />
    <button>注 册</button>
  </div>

  <div class="agreement-box">
    <input id="agreement" class="agreement-checkbox" name="" type="checkbox" />
    <label class="agreement-msg">
      同意并愿意遵守
      <a class="agreement-book">用户协议</a>
      和
      <a class="agreement-book">隐私政策</a>
    </label>
  </div>

  <div class="other-box">
    <a @click.prevent="$router.replace('/login')">已有账号，去登录</a>
  </div>
</template>
