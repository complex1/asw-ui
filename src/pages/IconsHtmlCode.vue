<template>
  <div>
    <h2>Icons HTML Code</h2>
    <hr>
    <div class="flex">
      <div v-for="icon in htmlIcons" :key="icon.id" class="m-2 p-2" >
        <div v-html="icon" class="text-center xl"></div>
        <div class="s">{{icon}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import htmlIcons from './jsonData/HtmlIconCode'
export default {
  data: () => {
    return {
      htmlIcons
    }
  }
}
</script>

<style>

</style>
