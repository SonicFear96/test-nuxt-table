<template>
  <div id="app">
    <vHeader/>
    <Nuxt />
  </div>
</template>

<script>
import vHeader from '@/components/header'

export default {
  components: {
    vHeader
  }
}
</script>

<style>
* {
  vertical-align: baseline;
  font-family: inherit;
  font-style: inherit;
  font-size: 100%;
  border: none;
  padding: 0;
  margin: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}
.wrapper {
  padding: 0 90px;
}
@media (max-width: 780px) {
  .wrapper {
    padding:0 70px;
  }
}
@media (max-width: 575px) {
  .wrapper {
    padding:0 30px;
  }
}
</style>

