<template>
<div>
  <h1>Icons</h1>
  <nuxt-link to="/">Home</nuxt-link>
  <br><br>

  <img :src="$icon(512)" >
  {{ $icon(512) }}
</div>
</template>

<script>
export default {

}
</script>
