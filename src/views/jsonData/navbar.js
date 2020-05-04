export default {
  title: 'Navbar',
  about: '',
  code: {
    code: `
<asw-navbar class="bg-info p-2 asw-ele-10 dark" h="50px">
  <template v-slot:left>
    <h3 class="nm mx-2">Brand Name</h3>
    <space/>
    <div class="align mt-2">
      <a class="asw-link" href="#">Home</a>
      <a class="asw-link" href="#">About</a>
      <a class="asw-link" href="#">Topic</a>
    </div>
  </template>
  <template v-slot:right>
    <asw-input-text class="light" placeholder="search"/>
    <div class="asw-avatar round bg-primary">SM</div>
  </template>
</asw-navbar>
`
  }
}
