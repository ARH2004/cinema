<template>
  <div class="popularCollections">
    <div class="container">
      <div class="popularCollections__wrapper">
        <div class="popularCollections__box-title">
          <h2 class="popularCollections__title">Популярные коллекции</h2>
        </div>
        <div class="popularCollections__box-content">
          <img src="" alt="" class="popularCollections__img">
          <div class="popularCollections__text-in-img">
            <p class="popularCollections__text"></p>
            <button>Click!</button>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>
<script>
export default {
  name: 'v-popularCollections'
}
</script>
<style lang="scss" scoped>
.container{
  max-width: 300px;
}
</style>