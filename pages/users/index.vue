<template>
  <div class="users">
    <h1 class="users__title">
      {{ title }}
    </h1>
    <ul class="users__list">
      <li
        v-for="user in filteredUsers.length ? filteredUsers : users"
        :key="user.id"
      >
        <ul
          class="users__user"
        >
          <NuxtLink
            class="users__link"
            :to="`users/${user.id}`"
          >
            <li>{{ user.name }}</li>
            <li>Company: {{ user.company.name }}</li>
            <li>Phone: {{ user.phone }}</li>
          </NuxtLink>
        </ul>
      </li>
    </ul>
    <div>
      <input
        type="text"
        placeholder="Search by Name"
        class="users__search"
        @input="e => findByName(e.target.value)"
      >
    </div>
    <NuxtLink
      class="users__link_glow"
      to="/"
    >
      Back
    </NuxtLink>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Index',
  data() {
    return {
      title: 'Users page',
      filteredUsers: [],
    };
  },
  computed: {
    ...mapGetters({
      users: 'users/getUsers',
    }),
  },
  mounted() {
    Promise.all([
      this.$store.dispatch('users/setUsers'),
    ]);
  },
  methods: {
    findByName(name) {
      this.filteredUsers = this.users.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()));
    },
  },
};

</script>

<style lang="scss" scoped>

.users {
  $green: #16e2a6;
  $textColor: $green;
  $borderColor: #4355d0;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  text-shadow:
    0.2rem 0.2rem 1rem #fff,
    0 0 6rem $textColor;

  box-shadow:
    0 0 .5rem #fff,
    inset 0 0 .5rem #fff,
    0 0 2rem $borderColor,
    inset 0 0 2rem $borderColor,
    0 0 4rem $borderColor,
    inset 0 0 4rem $borderColor;

  &__title {
    display: block;
    text-align: center;
    color: #fff;
    text-shadow:
      0.2rem 0.2rem 1rem #fff,
      0 0 2rem $textColor,
      0 0 4rem $textColor,
      0 0 6rem $textColor,
      0 0 8rem $textColor,
      0 0 10rem $textColor;
  }
  &__list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 25%;
    list-style-type: none;
  }
  &__user {
    margin: 10px;
    width: 250px;
    padding: 5px;
    border-radius: 7px;
    cursor: pointer;
  }
  &__search {
    margin: 0 auto;
    min-width: 200px;
    display: block;
    box-shadow:
      0 0 .5rem #fff,
      inset 0 0 .5rem #fff,
      0 0 2rem $borderColor,
      inset 0 0 2rem $borderColor,
      0 0 4rem $borderColor,
      inset 0 0 4rem $borderColor;
  }
  &__link {
    text-decoration: none;
    color: $green;
    &_glow {
      max-width: 100px;
      text-decoration: none;
      justify-content: center;
      color: #fff;
      margin: 10px auto;
      font-size: 18px;
    }
  }
}
</style>
