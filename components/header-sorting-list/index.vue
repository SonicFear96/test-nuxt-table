<template>
  <div class="header-sorting-list__wrapper">
    <ul class="header-sorting-list">
      <li class="header-sorting-item" v-for="item of sortingList" :key="item.title">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'header-sorting-list',
  data () {
    return {
      sortingList: [
        {
          title: 'id'
        },
        {
          title: 'name'
        },
        {
          title: 'email'
        }
      ]
    }
  }
}
</script>

<style scoped>
.header-sorting-list-wrapper {
  max-width: 800px;
  margin: 0 auto;
}
.header-sorting-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.header-sorting-item {
  font-size: 10px;
  line-height: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #9ea1ae;
}
</style>

