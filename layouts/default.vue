<template>
  <div class="primary">
    <div class="primary__template template">
      <div class="template__content">
        <nuxt />
      </div>
    </div>
  </div>
</template>
<script>

export default {

};
</script>
<style lang="scss" scoped>
.primary {
  height: 100vh;
  overflow-y: auto;
}
.template {
  min-height: 100vh;
  overflow: hidden;
  background-color: #000;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 120;
  }
}

</style>
