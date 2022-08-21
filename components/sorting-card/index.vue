<template>
  <div class="card-item">
    <div class="card-item__id">
      {{data.id}}
    </div>
    <div class="card-item__name">
      {{data.name}}
    </div>
    <div class="card-item__email">
      {{data.email}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'sorting-card',
  props: {
    data: Object
  }

}
</script>

<style scoped>
.card-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
