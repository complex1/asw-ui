<template>
  <div>
    <h2>SCSS vars</h2>
    <hr>
    <h3>Color</h3>
    <div class="row  m-2 align-baseline">$primary: <i class="box" style="background: #007bff"></i>#007bff;</div>
    <div class="row  m-2 align-baseline">$secondary: <i class="box" style="background: #6c757d"></i>#6c757d;</div>
    <div class="row  m-2 align-baseline">$info: <i class="box" style="background: #17a2b8"></i>#17a2b8;</div>
    <div class="row  m-2 align-baseline">$warning: <i class="box" style="background: #007bff"></i>#ffc107;</div>
    <div class="row  m-2 align-baseline">$danger: <i class="box" style="background: #dc3545"></i>#dc3545;</div>
    <div class="row  m-2 align-baseline">$light: <i class="box" style="background: #f8f9fa"></i>#f8f9fa;</div>
    <div class="row  m-2 align-baseline">$dark: <i class="box" style="background: #343a40"></i>#343a40;</div>
    <hr>
    <h3>Font Family</h3>
    <div class="row  m-2 align-baseline">$font-thin: <span class="px-2" style="font-family: montserrat_thin">montserrat_thin</span></div>
    <div class="row  m-2 align-baseline">$font-light: <span class="px-2" style="font-family: montserrat_light">montserrat_light</span></div>
    <div class="row  m-2 align-baseline">$font: <span class="px-2" style="font-family: montserrat">montserrat</span></div>
    <div class="row  m-2 align-baseline">$font-medium: <span class="px-2" style="font-family: montserrat_medium">montserrat_medium</span></div>
    <div class="row  m-2 align-baseline">$font-semi-bold: <span class="px-2" style="font-family: montserrat_semi_bold">montserrat_semi_bold</span></div>
    <div class="row  m-2 align-baseline">$font-bold: <span class="px-2" style="font-family: montserrat_bold">montserrat_bold</span></div>
    <div class="row  m-2 align-baseline">$font-black: <span class="px-2" style="font-family: montserrat_black">montserrat_black</span></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.box {
    height: 10px;
    width: 10px;
    margin: 6px 5px;
    border-radius: 3px;
}
</style>
