<template>
  <header class="main-header">
    <nav class="navigation">
      <ul class="nav-list">
        <li>
          <nuxt-link exact active-class="active" class="nav-link" to="/">
            Main page
          </nuxt-link>
        </li>
    </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'header-component'
}
</script>

<style>
.main-header {
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgb(74%, 74%, 74%, 0.2);
}
.nav-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
}
.nav-link {
  color: blue;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  transition: color .5s ease;
  text-transform: uppercase;
}
.nav-link:hover, .nav-link.active:hover {
  color: red;
}
.nav-link.active {
  color: brown;
}
</style>
