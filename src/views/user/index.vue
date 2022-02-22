<script lang="ts" setup>
import { useUserStore } from '@/stores';
import { storeToRefs } from 'pinia';

const user = useUserStore();
const { isFocus } = storeToRefs(user);
</script>

<template>
  <div class="user-container">
    <!-- 系统信息 -->
    <div class="system-info">
      <img alt="" class="system-logo" src="../../images/login/apple.svg" />
      <h3 class="system-name">Apple OA System</h3>
    </div>

    <!-- 中间主体 -->
    <router-view v-slot="{ Component, route: { path } }">
      <transition mode="out-in" name="slide-fade">
        <div :key="path" class="main transition-wrap">
          <!-- 猫头鹰 -->
          <div :class="['owl', { password: isFocus }]">
            <div class="hand hand-left"></div>
            <div class="hand hand-right"></div>
            <div class="arms">
              <div class="arm arm-left"></div>
              <div class="arm arm-right"></div>
            </div>
          </div>

          <!-- 路由更新位置 -->
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
