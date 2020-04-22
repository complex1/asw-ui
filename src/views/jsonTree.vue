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
      showData: [
        {
          _id: '5e9e10b5749af46e10080c56',
          index: 0,
          guid: 'd47c180e-e81a-4cbb-8c9e-438d23d32b10',
          isActive: false,
          balance: '$2,728.10',
          picture: 'http://placehold.it/32x32',
          age: 40,
          eyeColor: 'brown',
          name: 'Karen Harper',
          gender: 'female',
          company: 'TOYLETRY',
          email: 'karenharper@toyletry.com',
          phone: '+1 (910) 487-3731',
          registered: '2017-06-02T01:06:19 -06:-30',
          tags: [
            'non',
            'duis',
            'sunt',
            'commodo',
            'amet',
            'ex',
            'aliqua'
          ],
          friends: [
            {
              id: 0,
              name: 'Cassie Finley'
            },
            {
              id: 1,
              name: 'Christina Benton'
            },
            {
              id: 2,
              name: 'Lowery Anderson'
            }
          ],
          greeting: 'Hello, Karen Harper! You have 3 unread messages.',
          favoriteFruit: 'banana'
        }
      ]
    }
  }
}
</script>

<style>
</style>
