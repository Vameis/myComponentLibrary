<template>
    <header class="el-header" :style="{ height }">
        <slot />
    </header>
</template>
  
<script lang="ts">
export default {
    name: 'ElHeader'
}
</script>
<script setup lang="ts">
import { withDefaults } from 'vue'

withDefaults(
    defineProps<{
        height?: string
    }>(), {
    height: "60px"
})

</script>
  
<style lang="scss">
@import '@/styles/mixin.scss';

@include b(header) {
    padding: $--header-padding;
    box-sizing: border-box;
    flex-shrink: 0;
}
</style>