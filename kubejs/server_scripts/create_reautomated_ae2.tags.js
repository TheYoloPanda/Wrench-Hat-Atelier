// AE2 budding push as DESTROY, which Create contraptions still move. Kept out of them, the budding
// are worked only where the meteorite placed them.
const IMMOVABLE_BUDDING_CERTUS = [
  'ae2:flawless_budding_quartz',
  'ae2:flawed_budding_quartz',
  'ae2:chipped_budding_quartz',
  'ae2:damaged_budding_quartz'
]

ServerEvents.tags('block', event => {
  IMMOVABLE_BUDDING_CERTUS.forEach(block => event.add('create:non_movable', block))
})
