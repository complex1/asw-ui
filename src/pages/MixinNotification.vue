<template>
  <div>
    <h2>Asw Notification</h2>
    <table width="100%"><tr></tr><tr><td>title</td><td><code>String</code></td><td><code>""</code></td><td>Title of notificaton</td></tr><tr><td>text</td><td><code>String</code></td><td><code>""</code></td><td>Text of notificaton</td></tr><tr><td>type</td><td><code>String</code></td><td><code>""</code></td><td>color of notificaton ( 'primary', 'secondary', 'alert', 'success', 'warning','info')</td></tr><tr><td>timeout</td><td><code>Number</code></td><td><code>5000</code></td><td>Time of notificaton</td></tr><tr><td>callback</td><td><code>Function</code></td><td><code></code></td><td>called at the end of notification</td></tr></table>
    <doc-code :data="{code: code}">
      <button v-for="i in vari" :key="i.id" class="mx-2" :class="'asw-' + i " @click="click(i)">{{i}}</button>
    </doc-code>
  </div>
</template>

<script>
import '../asw-ele/plugin/notification/notification.scss'
import notification from '../asw-ele/plugin/notification'
export default {
  data: function () {
    return {
      vari: [
        'primary',
        'secondary',
        'danger',
        'success',
        'warning',
        'info'
      ],
      code: `
<button v-for="i in vari"
        :key="i.id" 
        class="mx-2" 
        :class="'asw-' + i " 
        @click="click(i)"
      >{{i}}</button>

import 'asw-ele/plugin/notification/notification.scss'
import notification from 'asw-ele/plugin/notification'

  vari: [
    'primary',
    'secondary',
    'alert',
    'success',
    'warning',
    'info'
  ]
  click (i) {
  notification({
    title: 'this is my title for ' + i,
    text: 'this is my message for' + i + ' notification',
    type: i
  })
  }

      `
    }
  },
  methods: {
    click (i) {
      notification({
        title: `this is my title for ${i}`,
        text: `this is my message for ${i} notification`,
        type: i
      })
    }
  }
}
</script>
