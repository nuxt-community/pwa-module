<template>
<div>
  <h1>Nuxt PWA!</h1>
  <nuxt-link to="/icons">Icons</nuxt-link>
  <br><br>

  Now: {{ date }}
</div>
</template>

<script>
export default {
  asyncData() {
    return {
      date: Date.now()
    }
  },
  mounted() {
    this.int = setInterval(() => {
      this.date = Date.now()
    }, 1000)
  },
  computed: {
    computedDate() {
      return new Date(this.date)
    }
  },
  beforeDestroy() {
    clearInterval(this.int)
  }
}
</script>
