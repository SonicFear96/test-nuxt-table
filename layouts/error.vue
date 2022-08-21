<template>
  <section class="error">
    <h2>Error 404</h2>
    <nuxt-link class="button" to="/">to Main Page</nuxt-link>
  </section>
</template>

<style scoped>
h2 {
  color: red;
  text-transform: uppercase;
  font-size: 18px;
}
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 40px;
}
.button {
  width: 100px;
  height: 40px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: grey;
}
.button:hover {
  cursor: pointer;
  opacity: 0.8;
}

</style>

