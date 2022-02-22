<script lang="ts" setup>
import { Ref, ref } from 'vue';

const count: Ref<number> = ref(0);
</script>

<template>
  <!-- layout 布局 -->
  <el-container class="layout">
    <!-- header -->
    <el-header></el-header>

    <!-- main -->
    <el-main>
      <router-view />
    </el-main>

    <!-- footer -->
    <el-footer></el-footer>

  </el-container>
</template>

<style lang="scss" scoped>
.layout {
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #f0f2f5;
}
</style>
