// Synthetic Certus sources: they replace AE2's damaged, chipped and flawed budding, which never
// deplete under an Extractor. Each node runs out into a quartz block, ready for a new Matrix.
const CERTUS_NODE_BLOCKS = [
  { id: 'damaged_certus_node', displayName: 'Damaged Certus Node', texture: 'ae2:block/damaged_budding_quartz', yield: 1200 },
  { id: 'chipped_certus_node', displayName: 'Chipped Certus Node', texture: 'ae2:block/chipped_budding_quartz', yield: 1800 },
  { id: 'flawed_certus_node', displayName: 'Flawed Certus Node', texture: 'ae2:block/flawed_budding_quartz', yield: 2400 }
]

StartupEvents.registry('block', event => {
  CERTUS_NODE_BLOCKS.forEach(node => {
    event.create(node.id, 'createreautomated:ore_node')
      .displayName(node.displayName)
      .texture(node.texture)
      .baseStone('ae2:quartz_block')
      .yield(node.yield)
      .withCommonLoot()
      .hardness(28.0)
      .resistance(1500.0)
      .requiresTool(true)
      .tagBlock('minecraft:mineable/pickaxe')
      .tagBlock('minecraft:needs_iron_tool')
  })
})

StartupEvents.registry('item', event => {
  event.create('certus_quartz_bit')
    .displayName('Certus Quartz Bit')

  event.create('certus_growth_matrix_fragment')
    .displayName('Certus Growth Matrix Fragment')

  event.create('certus_growth_matrix')
    .displayName('Certus Growth Matrix')
})
