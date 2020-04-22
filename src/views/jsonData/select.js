export default {
  title: 'SELECT',
  about: '',
  componentProps: {
    options: {
      type: ['Array', 'Object'],
      default: [],
      about: 'pass list of options'
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
  events: [
    {
      name: 'change',
      action: 'called when ever data is changed'
    }
  ],
  components: [
    {
      title: 'Input Select with Array option',
      about: '',
      code: `
<asw-input-select :options="['C', 'C++', 'JAVA', 'PYTHON']" v-model="BindData1"/>
<i>{{BindData1}}</i>
`
    },
    {
      title: 'Input Select with Array of object',
      about: '',
      code: `
<asw-input-select :options="[{value: 'c', label: 'C'}, {value: 'java', label: 'JAVA'},]" v-model="BindData2"/>
<i>{{BindData2}}</i>
`
    },
    {
      title: 'Input Select with object',
      about: '',
      code: `
<asw-input-select :options="{c: 'c', java: 'JAVA'}" v-model="BindData3"/>
<i>{{BindData3}}</i>
`
    },
    {
      title: 'Input Radio ',
      about: '',
      code: `
<asw-input-radio :options="['C', 'C++', 'JAVA', 'PYTHON']" v-model="BindData4"/>
<i>{{BindData4}}</i>
`
    },
    {
      title: ' Multi select ',
      about: '',
      code: `
<asw-input-multi-select :options="['C', 'C++', 'JAVA', 'PYTHON']" v-model="BindData5"/>
<i>{{BindData5}}</i>
`
    }
  ]
}
