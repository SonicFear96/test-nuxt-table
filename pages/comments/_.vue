<template>
  <div class="comment-page-inner wrapper">
    <h2>{{data.name}}</h2>
    <p>{{data.email}}</p>
    <p>{{data.body}}</p>
  </div>
</template>

<script>
export default {
  name: 'comment-page-inner',
  async asyncData({store, params}) {
    let data = []
    await store.dispatch('getComment', params.pathMatch)
    data = store.getters['comment']
    return {
      data
    }
  },
}
</script>

<style>
.comment-page-inner {
  margin-top: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
