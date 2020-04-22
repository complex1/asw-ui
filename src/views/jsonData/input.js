export default {
  title: 'Input',
  about: '',
  componentProps: {
    placeholder: {
      type: 'String',
      default: '""',
      about: 'To paas placeholder'
    },
    label: {
      type: 'String',
      default: '""',
      about: 'Main Label'
    },
    imp: {
      type: 'Boolean',
      default: false,
      about: 'Is required'
    },
    sublabel: {
      type: 'String',
      default: '""',
      about: 'Sub label'
    },
    block: {
      type: 'Boolean',
      default: false,
      about: 'To give full width'
    },
    msg: {
      type: ['Object', 'String'],
      default: {
        message: '',
        variant: 'default'
      },
      about: 'To display Bottom Message'
    }
  },
  inputNumberProps: {
    min: {
      type: ['Number', 'String'],
      default: 0,
      about: 'min value'
    },
    max: {
      type: ['Number', 'String'],
      default: 1000000000000,
      about: 'maximum value'
    }
  },
  events: [
    {
      name: 'change',
      action: 'called when ever data is changed'
    }
  ],
  components: [
    {
      title: 'Input text',
      about: '',
      code: `
<asw-input-text />
`
    },
    {
      title: 'Size',
      about: '',
      code: `
<asw-input-text class="fxxs" />
<asw-input-text class="fxs" />
<asw-input-text class="fs" />
<asw-input-text class="fl" />
<asw-input-text class="fxl" />
<asw-input-text class="fxxl" />
`
    },
    {
      title: 'Label',
      about: '',
      code: `
<asw-input-text
label="Label"
:imp="true"
sublabel="Sub label"
:block="true"
:msg="{message: 'message', variant: 'info'}"
v-model="BindData"
/>
<i>{{BindData}}<i>
`
    },
    {
      title: 'Number',
      about: '',
      code: `
<asw-input-number
label="Label"
:imp="true"
sublabel="Sub label"
:block="true"
:msg="{message: 'message', variant: 'info'}"
min = "100"
max = "200"
v-model="BindData"
/>
<i>{{BindData}}</i>
`
    },
    {
      title: 'Email',
      about: 'it has inbuilt Validation rule and can be get by "validated"',
      code: `
<asw-input-email
label="Label"
:imp="true"
sublabel="Sub label"
:block="true"
:msg="{message: 'message', variant: 'info'}"
v-model="BindData"
/>
<i>{{BindData}}</i>
`
    },
    {
      title: 'Password',
      about: '',
      code: `
<asw-input-password
label="Label"
:imp="true"
sublabel="Sub label"
:block="true"
:msg="{message: 'message', variant: 'info'}"
v-model="BindData"
/>
<i>{{BindData}}</i>
`
    },
    {
      title: 'Checkbox',
      about: '',
      code: `
<asw-input-Checkbox
label="Label"
:imp="true"
sublabel="Sub label"
:block="true"
:msg="{message: 'message', variant: 'info'}"
v-model="BindData"
/>
<i>{{BindData}}</i>
`
    },
    {
      title: 'Switch',
      about: '',
      code: `
<asw-input-switch
label="Label"
:imp="true"
sublabel="Sub label"
:block="true"
:msg="{message: 'message', variant: 'info'}"
v-model="BindData"
/>
<i>{{BindData}}</i>
`
    },
    {
      title: 'Color',
      about: '',
      code: `
<asw-input-Color
label="Label"
:imp="true"
sublabel="Sub label"
:block="true"
:msg="{message: 'message', variant: 'info'}"
v-model="BindData"
/>
<i>{{BindData}}</i>
`
    }
  ]
}
