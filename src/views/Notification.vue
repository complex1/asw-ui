<template>
  <div>
    <h2>{{data.title}}</h2>
    <p>{{data.about}}</p>
    <prop-table :data = "data.params" />
    <documentation :data="data.code" :component="true">
    <button v-for="i in vari" :key="i.id" class="mx-2" :class="'asw-' + i " @click="click(i)">{{i}}</button>
    </documentation>
  </div>
</template>

<script>
import notification from './jsonData/notification'
export default {
  data: function () {
    return {
      data: notification,
      vari: [
        'primary',
        'secondary',
        'alert',
        'success',
        'warning',
        'info'
      ]
    }
  },
  methods: {
    click (i) {
      this.$OpenNotification({
        title: `this is my title for ${i}`,
        text: `this is my message for ${i} notification`,
        type: i
      })
    }
  }
}
</script>
