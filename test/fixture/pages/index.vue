<template>
  <main>
    <img class="icon" :src="$icon(512)">
  </main>
</template>

<style scoped>
.icon {
  max-width: 100%;
}
</style>

<script>
export default {
  asyncData () {
    return {
      date: Date.now()
    }
  },
  computed: {
    computedDate () {
      return new Date(this.date)
    }
  },
  mounted () {
    this.int = setInterval(() => {
      this.date = Date.now()
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.int)
  }
}
</script>
