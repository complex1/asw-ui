export default [
  {
    title: 'Position',
    code: `
<div class="my-box s m-1 tooltip--bottom-right" aria-label="Bottom Right" >Bottom Right</div>
<div class="my-box s m-1 tooltip--bottom" aria-label="Bottom" >Bottom</div>
<div class="my-box s m-1 tooltip--bottom-left" aria-label="Bottom Left" >Bottom Left</div>
<div class="my-box s m-1 tooltip--top-right" aria-label="Top Right" >Top Right</div>
<div class="my-box s m-1 tooltip--top" aria-label="Top" >Top</div>
<div class="my-box s m-1 tooltip--top-left" aria-label="Top Left" >Top Left</div>
<div class="my-box s m-1 tooltip--right " aria-label="Right" >Right</div>
<div class="my-box s m-1 tooltip--left" aria-label="Left" >Left</div>
    `
  },
  {
    title: 'Color',
    code: `
<div class="my-box s  m-1 bg-danger tooltip--bottom tooltip--error" aria-label="Danger" >Danger</div>
<div class="my-box s  m-1 bg-warning tooltip--bottom tooltip--warning" aria-label="warning" >Warning</div>
<div class="my-box s  m-1 bg-success tooltip--bottom tooltip--success" aria-label="my-box success" >Success</div>
<div class="my-box s  m-1 bg-info tooltip--bottom tooltip--info" aria-label="info" >Info</div>
    `
  },
  {
    title: 'Size',
    code: `
<div class="my-box s  m-1 tooltip--bottom tooltip--small " aria-label="my-box small small text" >Small</div>
<div class="my-box s  m-1 tooltip--bottom tooltip--medium" aria-label="medium size text" >Medium</div>
<div class="my-box s  m-1 tooltip--bottom tooltip--large" aria-label="large size text" >Large</div>    
`
  },
  {
    title: 'Shape',
    code: `
<div class="my-box s  m-1 tooltip--bottom tooltip--rounded" aria-label="rounded" >Rounded</div>
<div class="my-box s  m-1 tooltip--bottom tooltip--bounce" aria-label="Bounce" >Bounce</div>
    `
  }
]
