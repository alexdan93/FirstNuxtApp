<template>
  <div class="pages">
    <h1>Main page</h1>
    <NuxtLink
      class="pages__link"
      to="/users"
    >
      Users Page
    </NuxtLink>
  </div>
</template>
<script>

export default {
  name: 'Index',
};
</script>

<style lang="scss" scoped>
.pages {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.pages__link {
  display: flex;
}
</style>
