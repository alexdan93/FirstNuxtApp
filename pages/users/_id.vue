<template>
  <div class="user">
    <h4 class="user__title">
      {{ fetchedData.name }}
    </h4>
    <div class="user__profile">
      <p>
        Email:
        <a :href="`mailto:${fetchedData.email}`">{{ fetchedData.email }}</a>
      </p>
      <p>
        Adress:
        {{ fetchedData.address.city }},
        {{ fetchedData.address.street }},
        {{ fetchedData.address.suite }}
      </p>
      <a
        :href="`http://${fetchedData.website}`"
      >
        <p>www.{{ fetchedData.website }}</p>
      </a>
      <p>Phone: {{ fetchedData.phone }}</p>
    </div>
    <div class="user__company">
      <p>Company: {{ fetchedData.company.name }}</p>
      <p>Catch Phrase: {{ fetchedData.company.catchPhrase }}</p>
      <p>Business description: {{ fetchedData.company.bs }}</p>
    </div>
    <NuxtLink
      class="user__link"
      to="/users"
    >
      Back to Users
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Id',
  async asyncData({ params, $axios }) {
    const post = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    return { fetchedData: post };
  },
};

</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .user {
    margin: 0!important;
    height: 100vh;
  }
}
.user {
  $green: #16e2a6;
  $textColor: $green;
  $borderColor: #4355d0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20% 0;
  padding: 0 30px;
  text-align: center;
  border: 1px solid #fff;
  color: $green;
  box-shadow:
    0 0 .5rem #fff,
    inset 0 0 .5rem #fff,
    0 0 2rem $borderColor,
    inset 0 0 2rem $borderColor,
    0 0 4rem $borderColor,
    inset 0 0 4rem $borderColor;

  &__title {
    margin: 10px 0;
    color: #fff;
    text-shadow:
      0.2rem 0.2rem 1rem #fff,
      0 0 2rem $textColor,
      0 0 4rem $textColor,
      0 0 6rem $textColor,
      0 0 8rem $textColor,
      0 0 10rem $textColor;
  }
  &__link {
    max-width: 100px;
    text-decoration: none;
    justify-content: center;
    color: #fff;
    margin: 10px auto;
    font-size: 12x;
    text-shadow:
      0.2rem 0.2rem 1rem #fff,
      0 0 2rem $textColor,
      0 0 4rem $textColor,
      0 0 6rem $textColor,
      0 0 8rem $textColor,
      0 0 10rem $textColor;
  }
}
</style>
