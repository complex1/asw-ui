<template>
  <div class="asw-input" :class="block ? 'asw-block' : ''">
    <label v-if="label !== ''">
      {{label}}
      <b v-if="imp">*</b>
    </label>
    <p v-if="sublabel !== ''">{{sublabel}}</p>
    <label class="switch">
      <input
        type="checkbox"
        :class="block ? 'asw-block' : ''"
        @change="changeValue"
        v-model="bindData"
      />
      <span class="slider round"></span>
    </label>
    <br v-if="!block" />
    <small :class="'c-' + getMessage.class">{{getMessage.msg}}</small>
  </div>
</template>

<script>
import inputMixin from './inputMixin'
export default {
  mixins: [inputMixin]
}
</script>

<style>
.switch {
  position: relative;
  display: inline-block;
  width: 1.75em;
  height: 1em;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 0.75em;
  width: 0.75em;
  left: 0.1em;
  bottom: 0.1em;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  transform: translateX(0.75em);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
