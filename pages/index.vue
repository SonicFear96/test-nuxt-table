<template>
  <div class="main-page">
    <div class="comment-list__wrapper wrapper">
      <headerSortingList/>
      <ul class="comment__card-list">
        <li class="comment__card-item" @click="openComment(item)" v-for="item of comments" :key='item.id'>
          <cardItem :data="item"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import headerSortingList from '@/components/header-sorting-list/'
import cardItem from '@/components/sorting-card/'
export default {
  name: 'index-page',
  components: {
    headerSortingList,
    cardItem
  },
  data () {
    return {
      comments: []
    }
  },
  async asyncData({store}) {
    let comments = []
    await store.dispatch('getComments')
    comments = store.getters['comments']
    return {
      comments
    }
  },
  methods: {
    openComment (data) {
      this.$router.push(`comments/${data.id}`)
    }
  }
}
</script>

<style scoped>
.comment-list__wrapper {
  margin-top: 50px;
}
.comment__card-list {
  list-style: none;
}
</style>
