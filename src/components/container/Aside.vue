<template>
    <aside class="el-aside" :style="{ width }">
        <slot />
    </aside>
</template>
<script lang="ts">
export default {
    name: 'ElAside'
}
</script>
<script setup lang="ts">
import { withDefaults } from 'vue'

withDefaults(defineProps<{
    width?: string
}>(), {
    width: "300px"
})
</script>
  
<style lang="scss">
@import '@/styles/mixin.scss';

@include b(aside) {
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
}
</style>