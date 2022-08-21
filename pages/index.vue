<template>
  <div class="main-page">
    <div class="comment-list__wrapper wrapper">
      <headerSortingList/>
      <ul class="comment__card-list">
        <li class="comment__card-item" @click="openComment(item)" v-for="item of comments" :key='item.id'>
          <cardItem :data="item"/>
        </li>
      </ul>
      <div>
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
      start: 0
    }
  },
  async asyncData({store}) {
    let comments = []
    const start = 0
    await store.dispatch('getComments', start)
    comments = store.getters['comments']
    return {
      comments,
    }
  },
  methods: {
    openComment (data) {
      this.$router.push(`comments/${data.id}`)
    },
    async getComments (more) {
      more ? this.start += 10 : this.start -= 10
      await this.$store.dispatch('getComments', this.start)
      this.comments = this.$store.getters['comments']
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
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.comment__card-item:hover {
  cursor: pointer;
  opacity: 0.5;
}
</style>
