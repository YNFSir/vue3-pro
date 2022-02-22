<script setup lang="ts">
import { Ref, ref } from 'vue';

const count: Ref<number> = ref(0)
</script>

<template>
  <!-- layout 布局 -->
  <div class="layout">
    <p class="number">{{ count }}</p>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #555555;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: url(../images/layout/20200909114047942.jpeg) no-repeat;
    background-size: cover;
    opacity: 0.5;
    width: 100%;
    height: 100%;
  }

  .number {
    color: red;
    font-weight: bolder;
    font-size: 20px;
    font-style: italic;
  }
}
</style>
