<template>
  <div>
    <h2>{{data.title}}</h2>
    <p>{{data.about}}</p>
    <h3>Props</h3>
    <p>These Are the common props that use in all input element</p>
    <prop-table :data = "data.componentProps" />
    <h3>Events</h3>
    <event-table :data="data.events" />
      <documentation :data="data.components[0]" :component="true">
        <asw-input-text/>
      </documentation>
      <documentation :data="data.components[1]" :component="true">
        <div>
          <asw-input-text class="fxxs" />
          <asw-input-text class="fxs" />
          <asw-input-text class="fs" />
          <asw-input-text class="fl" />
          <asw-input-text class="fxl" />
          <asw-input-text class="fxxl" />
        </div>
      </documentation>
      <documentation :data="data.components[2]" :component="true">
          <asw-input-text
            label="Label"
            :imp="true"
            sublabel="Sub label"
            :block="true"
            :msg="{message: 'message', variant: 'info'}"
            v-model="BindData"
          />
          <i>{{BindData}}</i>
      </documentation>
    <h3>Input Number Props</h3>
    <prop-table :data="data.inputNumberProps" />
    <documentation :data="data.components[3]" :component="true">
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
    </documentation>
    <documentation :data="data.components[4]" :component="true">
      <asw-input-email
      label="Label"
      :imp="true"
      sublabel="Sub label"
      :block="true"
      :msg="{message: 'message', variant: 'info'}"
      v-model="BindData"
      />
      <i>{{BindData}}</i>
    </documentation>
    <documentation :data="data.components[5]" :component="true">
      <asw-input-password
      label="Label"
      :imp="true"
      sublabel="Sub label"
      :block="true"
      :msg="{message: 'message', variant: 'info'}"
      v-model="BindData"
      />
      <i>{{BindData}}</i>
    </documentation>
    <documentation :data="data.components[6]" :component="true">
      <asw-input-checkbox
        label="Label"
        :imp="true"
        sublabel="Sub label"
        :block="true"
        :msg="{message: 'message', variant: 'info'}"
        v-model="BindData"
        />
    </documentation>
    <documentation :data="data.components[7]" :component="true">
      <asw-input-switch
        label="Label"
        :imp="true"
        sublabel="Sub label"
        :block="false"
        :msg="{message: 'message', variant: 'info'}"
        v-model="BindData"
        />
    </documentation>
    <documentation :data="data.components[8]" :component="true">
      <asw-input-color
        label="Label"
        :imp="true"
        sublabel="Sub label"
        :block="false"
        :msg="{message: 'message', variant: 'info'}"
        v-model="BindData"
        />
    </documentation>
  </div>
</template>

<script>
import data from './jsonData/input'
export default {
  data: () => {
    return {
      data: data,
      BindData: ''
    }
  }
}
</script>

<style>

</style>
