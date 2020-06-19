<template>
  <div>
    <h2>Elevation</h2>
    <p>use class .asw-ele-n where n is 0-24</p>
    <div class="flex">
      <div v-for="i in 25" :key="i.id" :class="'asw-ele-' + (i -1)" class="ele-box" >
        {{'.asw-ele-' + (i-1)}}
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.ele-box {
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
}

</style>
