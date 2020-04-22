export default {
  title: 'SELECT',
  about: '',
  params: {
    title: {
      type: 'String',
      default: '""',
      about: 'Title of notificaton'
    },
    text: {
      type: 'String',
      default: '""',
      about: 'Text of notificaton'
    },
    type: {
      type: 'String',
      default: '""',
      about: 'color of notificaton ( \'primary\', \'secondary\', \'alert\', \'success\', \'warning\',\'info\')'
    },
    timeout: {
      type: 'Number',
      default: '5000',
      about: 'Time of notificaton'
    },
    callback: {
      type: 'Function',
      default: '',
      about: 'called at the end of notification'
    }
  },
  code: {
    code: `
<template>
<div>
  <button v-for="i in vari" :key="i.id" class="mx-2" :class="'asw-' + i " @click="click(i)">{{i}}</button>
</div>
</template>

<script>
export default {
  data: function () {
    return {
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
        title: 'this is my title for ' + i ,
        text: 'this is my message for ' + i + ' notification',
        type: i
      })
    }
  }
}
</script>
`
  }
}
