<template>
  <div>
    <h2>ASW Modal</h2>
    <doc-code :data="data[0]">
      <button class="s dark"  @click="openModal1 = true">click me</button>
      <div class="asw-modal" v-if="openModal1">
        <div class="p-2">
          <span>this is my asw-modal</span>
          <space />
          <button @click=" openModal1= false" class="asw-danger m-2">Close</button>
        </div>
      </div>
    </doc-code>
    <my-doc>
      <asw-form-modal :data="data"/>
    </my-doc>
    <doc-code :data="data[1]">
      <button class="sm" @click="openModal2 = true">click me</button>
      <div class="asw-modal" v-if="openModal2">
        <asw-form-modal
          title="This is form"
          :ok="true"
          :cancel="true"
          @cancel="openModal2 = false"
        />
      </div>
    </doc-code>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      openModal1: false,
      openModal2: false,
      data: [
        {
          title: 'Only Modal',
          code: `
<button class="s dark"  @click="openModal1 = true">click me</button>
<div class="asw-modal" v-if="openModal1">
  <div class="p-2">
    <span>this is my asw-modal</span>
    <space />
    <button @click=" openModal1= false" class="asw-danger m-2">Close</button>
  </div>
</div>
          `
        },
        {
          title: 'Form Modal',
          code: `
<button class="sm" @click="openModal2 = true">click me</button>
<div class="asw-modal" v-if="openModal2">
  <asw-form-modal
    title="This is form"
    :ok="true"
    :cancel="true"
    @cancel="openModal2 = false"
  />
</div>
          `
        }
      ]
    }
  }
}
</script>

<style>
</style>
