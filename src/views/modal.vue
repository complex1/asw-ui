<template>
  <div>
    <h2>{{data.title}}</h2>
    <p>{{data.about}}</p>
    <documentation :data="data.components[0]" :component="true">
      <button class="sm" @click="openModal1 = true">click me</button>
      <div class="asw-modal" v-if="openModal1">
        <div class="p-2">
          <span>this is my asw-modal</span>
          <space />
          <button @click=" openModal1= false" class="fxxs asw-alert">CLose</button>
        </div>
      </div>
    </documentation>
    <h3>Props of asw-form-modal</h3>
    <p>These Are the props that use in element</p>
    <prop-table :data="data.componentProps" />
    <h3>Events</h3>
    <event-table :data="data.events" />
    <documentation :data="data.components[1]" :component="true">
      <button class="sm" @click="openModal2 = true">click me</button>
      <div class="asw-modal" v-if="openModal2">
        <asw-form-modal
          title="This is form"
          :ok="true"
          :cancel="true"
          @cancel="openModal2 = false"
        />
      </div>
    </documentation>
  </div>
</template>

<script>
import data from './jsonData/modal'
export default {
  data: function () {
    return {
      data: data,
      openModal1: false,
      openModal2: false
    }
  }
}
</script>

<style>
</style>
