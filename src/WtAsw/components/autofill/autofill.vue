<template>
  <div class="fn asw-input asw-autofill" v-asw-click-outside="close">
    <input type="text" @focus="focused" v-model="searchString" />
    <div v-if="open" class="asw-ele-2 asw-autofill-popup">
      <with-keyboard-control :listLength="sortedList.length" @selected="selectedHandler">
        <template slot-scope="{selectedIndex}">
          <div
            v-for="(item, index) in sortedList"
            class="list-item"
            :class="{'selected': index === selectedIndex}"
            :key="index"
            @click="selectedHandler(index)"
          >{{item}}</div>
        </template>
      </with-keyboard-control>
    </div>
  </div>
</template>

<script>
import WithKeyboardControl from './withKeyboardControl.vue'
import inputMixin from '../input/inputMixin'
export default {
  name: '',
  mixins: [inputMixin],
  components: {
    WithKeyboardControl
  },
  props: {
    list: {
      type: Array,
      default: function () {
        return ['agenda', 'schedule', 'programUS', 'programmeUK', 'inventory', 'itinerary', 'list', 'worklist', 'card', 'checklist', 'plan', 'syllabus', 'bill', 'catalogUS', 'catalogueUK', 'docket', 'lineup', 'listing', 'memo', 'outline', 'table', 'menu', 'record', 'register', 'registry', 'schema', 'scheme', 'chart', 'directory', 'roll', 'line-up', 'to-do', 'list', 'bill', 'of', 'fare', 'things', 'to', 'be', 'done', 'calendar', 'timetable']
      }
    }
  },
  data: function () {
    return {
      open: false,
      searchString: ''
    }
  },
  methods: {
    close () {
      this.open = false
    },
    focused () {
      this.open = true
      this.searchString = this.bindData
    },
    selectedHandler (selectedIndex) {
      if (this.sortedList[selectedIndex] === undefined) {
        this.searchString = this.bindData
      } else {
        this.bindData = this.sortedList[selectedIndex]
        this.changeValue()
      }
      this.open = false
    }
  },
  computed: {
    sortedList () {
      const renderList = []
      const search = this.searchString.trim()
      this.list.forEach(item => {
        if (item.toLowerCase().indexOf(search.toLowerCase()) > -1) { renderList.push(item) }
      })
      return renderList
    }
  },
  watch: {
    bindData (val) {
      this.searchString = val
    }
  },
  created () {}
}
</script>

<style lang="scss">
.asw-autofill {
  position: relative;
  width: fit-content;
}
.asw-autofill .asw-autofill-popup {
  position: absolute;
  top: 1.9em;
  left: 0px;
  width: 100%;
  max-height: 200px;
  overflow: auto;
  border-radius: 5px;
  z-index: 99999;
  background: #ffffff;
}

.asw-autofill .asw-autofill-popup .list-item {
  list-style: none;
  padding: 5px 10px;
  opacity: 0.8;
  font-size: 1em;
  border: 1px solid #d9d9d9;
  margin: -1px;
}
.asw-autofill .asw-autofill-popup .list-item:hover {
  background: #dbdbdb69;
}

.list-item:hover,
.list-item.selected {
  background-color: #dbdbdb69;
}
</style>
