<!-- Button.vue -->
<template>
  <div class="bq-button" @click="handleClick">
    <span>-测试按钮-6</span>
  </div>
</template>

<script setup lang="ts">
defineOptions({name: "bq-button"});

const props = defineProps({
  title: String,
  size: {
    type: String,
    required: true,
    validate(val: string) {
      return ['mini', 'default', 'large'].includes(val)
    }
  }
})

let vaa = ref(1);
const handleClick = ()=>{
  alert("bq-button click"+vaa.value+props.size)
}
</script>

<style lang="scss" scoped>
//@import "@theme-chalk/button.scss";
.bq-button {
  background-color: blue;
}
</style>
