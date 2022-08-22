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
  min-height: 50px;
  align-items: center;
  background-color: rgba(234, 210, 168, 0.2);
  border-radius: 8px;
  padding: 0 20px;
}
.card-item__id {
  font-weight: bold;
  color: grey;
}
.card-item__name {
  color: grey;
}
.card-item__email {
  color: grey;
}
@media (max-width: 575px) {
  .card-item {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
