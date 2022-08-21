<template>
  <div class="header-sorting-list__wrapper">
    <ul class="header-sorting-list">
      <li class="header-sorting-item" @click="item.sort ? sort() : ''" :class="{'sort': item.sort}" v-for="item of sortingList" :key="item.title">
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
          title: 'id',
          sort: true
        },
        {
          title: 'name',
          sort: false
        },
        {
          title: 'email',
          sort: false
        }
      ]
    }
  },
  methods: {
    sort () {
      this.$emit('sort')
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
  padding: 0 20px;
}
.header-sorting-item {
  position: relative;
  font-size: 18px;
  line-height: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #9ea1ae;
}
.header-sorting-item.sort {
  text-decoration: underline;
  cursor: pointer;
  opacity: 0.5;
}
</style>

