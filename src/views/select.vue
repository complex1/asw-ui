<template>
  <div>
    <h2>{{data.title}}</h2>
    <p>{{data.about}}</p>
    <h3>Props</h3>
    <p>These Are the common props that use in all input element</p>
    <prop-table :data="data.componentProps" />
    <h3>Events</h3>
    <event-table :data="data.events" />
    <documentation :data="data.components[0]" :component="true">
      <asw-input-select :options="['C', 'C++', 'JAVA', 'PYTHON']" v-model="BindData1" />
      <i>{{BindData1}}</i>
    </documentation>
    <documentation :data="data.components[1]" :component="true">
      <asw-input-select
        :options="[{value: 'c', label: 'C'}, {value: 'java', label: 'JAVA'},]"
        v-model="BindData2"
      />
      <i>{{BindData2}}</i>
    </documentation>
    <documentation :data="data.components[2]" :component="true">
      <asw-input-select :options="{c: 'c', java: 'JAVA'}" v-model="BindData3" />
      <i>{{BindData3}}</i>
    </documentation>
    <documentation :data="data.components[3]" :component="true">
      <asw-input-radio :options="['C', 'C++', 'JAVA', 'PYTHON']" v-model="BindData4" />
      <i>{{BindData4}}</i>
    </documentation>
    <documentation :data="data.components[4]" :component="true">
      <asw-input-multi-select :options="['C', 'C++', 'JAVA', 'PYTHON']" v-model="BindData5" />
      <i>{{BindData5}}</i>
    </documentation>
  </div>
</template>

<script>
import data from './jsonData/select'
export default {
  data: () => {
    return {
      data: data,
      BindData1: '',
      BindData2: '',
      BindData3: '',
      BindData4: '',
      BindData5: []
    }
  }
}
</script>

<style>
</style>
