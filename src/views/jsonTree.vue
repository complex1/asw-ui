<template>
  <div>
    <h2>Json Tree</h2>
    <p></p>
    <documentation :data="code" :component="true">
      <asw-json-tree :data="showData" shift="1" depth="2"/>
    </documentation>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      code: {
        code: '<asw-json-tree :data="showData" shift="1" depth="2"/>'
      },
      showData: { projectId: '5eac94066229164763b06b43', projectName: 'vsdfvs', projectDescription: '', createdTime: 1588368390423, lastUpdatedTime: 1588368390423, createdBy: 'complex', code: { codeId: '5eac94066229164763b06b42', foreignKey: null, name: null, metadata: null, projectCode: null }, propertyList: [], serviceList: [], dataSourceList: [], dataSocketList: [], customCSSList: [], savedElementsList: [] }
    }
  }
}
</script>

<style>
</style>
