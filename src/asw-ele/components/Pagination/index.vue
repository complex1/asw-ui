<template>
  <ul :class="paginationClasses.ul">
    <li
      v-if="paginationLabels.first"
      :class="`${paginationClasses.li} ${hasFirst ? paginationClasses.liDisable : ''}`"
    >
      <a
        @click="first"
        :disabled="hasFirst"
        :class="`${paginationClasses.button} ${hasFirst ? paginationClasses.buttonDisable : ''}`"
        class="icon"
        v-html="paginationLabels.first"
      ></a>
    </li>

    <li
      v-if="paginationLabels.prev"
      :class="`${paginationClasses.li} ${hasFirst ? paginationClasses.liDisable : ''}`"
    >
      <a
        @click="prev"
        :disabled="hasFirst"
        :class="`${paginationClasses.button} ${hasFirst ? paginationClasses.buttonDisable : ''}`"
        class="icon"
        v-html="paginationLabels.prev"
      ></a>
    </li>

    <li
      v-for="page in items"
      :key="page.label"
      :class="`${paginationClasses.li} ${page.active ? paginationClasses.liActive : ''} ${page.disable ? paginationClasses.liDisable : ''}`"
    >
      <span
        v-if="page.disable"
        :class="`${paginationClasses.button} ${paginationClasses.buttonDisable}`"
      >
        ...
      </span>
      <a
        v-else
        @click="goto(page.label)"
        :class="`${paginationClasses.button} ${page.active ? paginationClasses.buttonActive : ''}`"
      >
        {{ page.label }}
      </a>
    </li>

    <li
      v-if="paginationLabels.next"
      :class="`${paginationClasses.li} ${hasLast ? paginationClasses.liDisable : ''}`"
    >
      <a
        @click="next"
        :disabled="hasLast"
        class="icon"
        :class="`${paginationClasses.button} ${hasLast ? paginationClasses.buttonDisable : ''}`"
        v-html="paginationLabels.next"
      ></a>
    </li>

    <li
      v-if="paginationLabels.last"
      :class="`${paginationClasses.li} ${hasLast ? paginationClasses.liDisable : ''}`"
    >
      <a
        @click="last"
        :disabled="hasLast"
        class="icon"
        :class="`${paginationClasses.button} ${hasLast ? paginationClasses.buttonDisable : ''}`"
        v-html="paginationLabels.last"
      ></a>
    </li>
  </ul>
</template>

<script>
const defaultClasses = {
  ul: 'pagination',
  li: 'pagination-item',
  liActive: 'pagination-item--active',
  liDisable: 'pagination-item--disable',
  button: 'pagination-link',
  buttonActive: 'pagination-link--active',
  buttonDisable: 'pagination-link--disable'
}
const defaultLabels = {
  first: '&laquo;',
  prev: '&lsaquo;',
  next: '&rsaquo;',
  last: '&raquo;'
}
export default {
  props: {
    value: { // current page
      type: Number,
      required: true
    },
    pageCount: { // page numbers
      type: Number,
      required: true
    },
    classes: {
      type: Object,
      required: false,
      default: () => ({})
    },
    labels: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data () {
    return {
      paginationClasses: {
        ...defaultClasses,
        ...this.classes
      },
      paginationLabels: {
        ...defaultLabels,
        ...this.labels
      }
    }
  },
  mounted () {
    if (this.value > this.pageCount) {
      this.$emit('input', this.pageCount)
    }
  },
  computed: {
    items () {
      const valPrev = this.value > 1 ? (this.value - 1) : 1 // for easier navigation - gives one previous page
      const valNext = this.value < this.pageCount ? (this.value + 1) : this.pageCount // one next page
      const extraPrev = valPrev === 3 ? 2 : null
      const extraNext = valNext === (this.pageCount - 2) ? (this.pageCount - 1) : null
      const dotsBefore = valPrev > 3 ? 2 : null
      const dotsAfter = valNext < (this.pageCount - 2) ? (this.pageCount - 1) : null
      const output = []
      for (let i = 1; i <= this.pageCount; i += 1) {
        if ([1, this.pageCount, this.value, valPrev, valNext, extraPrev, extraNext, dotsBefore, dotsAfter].includes(i)) {
          output.push({
            label: i,
            active: this.value === i,
            disable: [dotsBefore, dotsAfter].includes(i)
          })
        }
      }
      return output
    },
    hasFirst () {
      return (this.value === 1)
    },
    hasLast () {
      return (this.value === this.pageCount)
    }
  },
  watch: {
    value: function () {
      this.$emit('change')
      if (this.value > this.pageCount) {
        this.$emit('input', this.pageCount)
      }
    },
    pageCount: function () {
      if (this.value > this.pageCount) {
        this.$emit('input', this.pageCount)
      }
    }
  },
  methods: {
    first () {
      if (!this.hasFirst) {
        this.$emit('input', 1)
      }
    },
    prev () {
      if (!this.hasFirst) {
        this.$emit('input', (this.value - 1))
      }
    },
    goto (page) {
      this.$emit('input', page)
    },
    next () {
      if (!this.hasLast) {
        this.$emit('input', (this.value + 1))
      }
    },
    last () {
      if (!this.hasLast) {
        this.$emit('input', this.pageCount)
      }
    }
  }
}
</script>
<style lang="scss" >
.pagination {
  display: flex;
  list-style: none;
  &-item a{
    font-size: 1em;
    padding: 0.5em 1em;
    color: black;
    text-decoration: none;
    transition: background-color .3s;
  }
  &-item a:hover{
    background-color: #ddd;
  }
  &-item--active a{
      background-color: dodgerblue;
      color: white;
  }
  &-item--active a:hover{
      background-color: dodgerblue;
  }
  &-item--disable a:hover{
    background-color: transparent;
  }
  .icon {
    line-height: 0px;
  }
}
</style>
