export default {
  title: 'Modal',
  about: 'this is for Modal',
  componentProps: {
    title: {
      type: 'String',
      default: 'Title',
      about: 'form title'
    },
    h: {
      type: 'String',
      default: '300px',
      about: 'form content height'
    },
    w: {
      type: 'String',
      default: '400px',
      about: 'form content width'
    },
    del: {
      type: 'Boolean',
      default: false,
      about: 'Enable delete button'
    },
    cancel: {
      type: 'Boolean',
      default: false,
      about: 'Enable cancel button'
    },
    add: {
      type: 'Boolean',
      default: false,
      about: 'Enable add button'
    },
    save: {
      type: 'Boolean',
      default: false,
      about: 'Enable save button'
    },
    ok: {
      type: 'Boolean',
      default: false,
      about: 'Enable ok button'
    }
  },
  events: [
    {
      name: 'delete',
      action: 'called when delete button clicked'
    },
    {
      name: 'cancel',
      action: 'called when cancel button clicked'
    },
    {
      name: 'add',
      action: 'called when add button clicked'
    },
    {
      name: 'save',
      action: 'called when save button clicked'
    },
    {
      name: 'ok',
      action: 'called when ok button clicked'
    }
  ],
  components: [
    {
      title: 'Modal',
      about: '',
      code: `
<button class="sm" @click="openModal1 = true">click me</button>
<div class="asw-modal" v-if="openModal1">
  <div class="p-2">
    <span> this is my asw-modal </span>
    <space/>
    <button @click=" openModal1= false" class="fxxs asw-alert"> CLose</button>
  </div>
</div>
      `
    },
    {
      title: 'Form modal',
      about: '',
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
