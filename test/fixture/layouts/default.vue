<template>
<div class="container">
  <nav>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link
      v-for="p in ['Foo', 'Bar', 'Baz']"
      :key="p"
      :to="'/' + p"
    >
      {{ p }}
    </nuxt-link>
  </nav>

  <nuxt/>

  <footer>
    Generated on {{ date }}
  </footer>
</div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date()
    }
  }
}
</script>

<style>
.container, main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

nav {
  margin-bottom: 30px;
}

nav a {
  text-decoration: none;
  color: blue;
}

nav a.nuxt-link-exact-active {
  color: red;
}

footer {
  color: grey;
  margin-top: 30px;
}
</style>
