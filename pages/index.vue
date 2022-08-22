<template>
  <div class="main-page">
    <div class="comment-list__wrapper wrapper">
      <headerSortingList @sort="sortData"/>
      <ul class="comment__card-list">
        <li class="comment__card-item" @click="openComment(item)" v-for="item of comments" :key='item.id'>
          <cardItem :data="item"/>
        </li>
      </ul>
      <div class="button-wrapper">
        <button :disabled="start === 0" @click.prevent="getComments(more = false)" class="button-pagination">prev</button>
        <button @click.prevent="getComments(more = true)" class="button-pagination">next</button>
      </div>
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
      comments: [],
      start: 0,
      isSorting: false
    }
  },
  async asyncData({$axios}) {
    const start = 0
    const isSorting = false
    const comments = await $axios.$get(`https://jsonplaceholder.typicode.com/comments?_start=${start}&_limit=10`)
    return {
      comments,
      isSorting
    }
  },
  methods: {
    openComment (data) {
      this.$router.push(`comments/${data.id}`)
    },
    async getComments (more) {
      more ? this.start += 10 : this.start -= 10
      await this.$store.dispatch('getComments', this.start)
      this.comments = [...this.$store.getters['comments']]
      this.isSorting = false
    },
    sortData () {
      this.isSorting ? this.comments = [...this.comments.sort((a, b) => a.id - b.id)] : this.comments = [...this.comments.sort((a, b) => b.id - a.id)]
      this.isSorting = !this.isSorting
    }
  }
}
</script>

<style scoped>
.main-page {
  margin-bottom: 60px;
}
.comment-list__wrapper {
  margin-top: 50px;
}
.comment__card-list {
  list-style: none;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.comment__card-item:hover {
  cursor: pointer;
  opacity: 0.5;
}
.button-wrapper {
  margin-top: 40px;
}
.button-pagination {
  width: 100px;
  height: 40px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
}
.button-pagination:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>
