<template>
  <div>
    <h2>Asw Textarea Element's</h2>
    <hr>
    <my-doc>
      <asw-input-textarea/>
    </my-doc>
    <hr>
    <asw-input-textarea label="Lable" sublabel="dce" :msg="{message: 'correct password', variant: 'success'}"/>
    <my-code :code="code"/>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      code: '<asw-input-textarea label="Lable" sublabel="dce" :msg="{message: \'correct password\', variant: \'success\'}"/>'
    }
  }
}
</script>

<style>

</style>
