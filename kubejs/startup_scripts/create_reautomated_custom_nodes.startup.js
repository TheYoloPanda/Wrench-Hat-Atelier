const CUSTOM_NODE_BLOCKS = [
  { id: 'coal_node', displayName: 'Coal Node', baseStone: 'minecraft:cobblestone', yield: 240 },
  { id: 'deepslate_coal_node', displayName: 'Deepslate Coal Node', baseStone: 'minecraft:cobbled_deepslate', yield: 300 },
  { id: 'redstone_node', displayName: 'Redstone Node', baseStone: 'minecraft:cobblestone', yield: 180 },
  { id: 'deepslate_redstone_node', displayName: 'Deepslate Redstone Node', baseStone: 'minecraft:cobbled_deepslate', yield: 225 },
  { id: 'emerald_node', displayName: 'Emerald Node', baseStone: 'minecraft:cobblestone', yield: 108 },
  { id: 'deepslate_emerald_node', displayName: 'Deepslate Emerald Node', baseStone: 'minecraft:cobbled_deepslate', yield: 135 },
  { id: 'lapis_node', displayName: 'Lapis Node', baseStone: 'minecraft:cobblestone', yield: 180 },
  { id: 'deepslate_lapis_node', displayName: 'Deepslate Lapis Node', baseStone: 'minecraft:cobbled_deepslate', yield: 225 },
  { id: 'nether_quartz_node', displayName: 'Nether Quartz Node', baseStone: 'minecraft:netherrack', yield: 180 },
  { id: 'bort_node', displayName: 'Bort Node', baseStone: 'minecraft:cobblestone', yield: 220 },
  { id: 'deepslate_bort_node', displayName: 'Deepslate Bort Node', baseStone: 'minecraft:cobbled_deepslate', yield: 275 },
  { id: 'mithril_node', displayName: 'Mithril Node', baseStone: 'minecraft:cobblestone', yield: 180 },
  { id: 'deepslate_mithril_node', displayName: 'Deepslate Mithril Node', baseStone: 'minecraft:cobbled_deepslate', yield: 225 },
  { id: 'silver_node', displayName: 'Silver Node', baseStone: 'minecraft:cobblestone', yield: 220 },
  { id: 'deepslate_silver_node', displayName: 'Deepslate Silver Node', baseStone: 'minecraft:cobbled_deepslate', yield: 275 },
  { id: 'sapphire_node', displayName: 'Sapphire Node', baseStone: 'minecraft:cobblestone', yield: 150 },
  { id: 'overworld_draconium_node', displayName: 'Overworld Draconium Node', baseStone: 'minecraft:cobblestone', yield: 108 },
  { id: 'deepslate_draconium_node', displayName: 'Deepslate Draconium Node', baseStone: 'minecraft:cobbled_deepslate', yield: 135 },
  { id: 'nether_draconium_node', displayName: 'Nether Draconium Node', baseStone: 'minecraft:netherrack', yield: 108 },
  { id: 'end_draconium_node', displayName: 'End Draconium Node', baseStone: 'minecraft:end_stone', yield: 90 },
  { id: 'crimson_iron_node', displayName: 'Crimson Iron Node', baseStone: 'minecraft:netherrack', yield: 220 },
  { id: 'blackstone_crimson_iron_node', displayName: 'Blackstone Crimson Iron Node', baseStone: 'minecraft:blackstone', yield: 275 },
  { id: 'azure_silver_node', displayName: 'Azure Silver Node', baseStone: 'minecraft:end_stone', yield: 180 }
]

const CUSTOM_NODE_ITEMS = [
  { id: 'coal_bit', displayName: 'Coal Bit' },
  { id: 'tiny_pile_of_redstone_dust', displayName: 'Tiny Pile of Redstone Dust' },
  { id: 'emerald_bit', displayName: 'Emerald Bit' },
  { id: 'lapis_bit', displayName: 'Lapis Bit' },
  { id: 'nether_quartz_bit', displayName: 'Quartz Bit' },
  { id: 'bort_bit', displayName: 'Bort Bit' },
  { id: 'mithril_bit', displayName: 'Mithril Bit' },
  { id: 'silver_bit', displayName: 'Silver Bit' },
  { id: 'tiny_pile_of_sapphire_dust', displayName: 'Tiny Pile of Sapphire Dust' },
  { id: 'tiny_pile_of_draconium_dust', displayName: 'Tiny Pile of Draconium Dust' },
  { id: 'crimson_iron_bit', displayName: 'Crimson Iron Bit' },
  { id: 'azure_silver_bit', displayName: 'Azure Silver Bit' },
  { id: 'unstable_draconium_blend', displayName: 'Unstable Draconium Blend' },
  { id: 'compressed_draconium_slug', displayName: 'Compressed Draconium Slug' }
]

StartupEvents.registry('block', event => {
  CUSTOM_NODE_BLOCKS.forEach(node => {
    event.create(node.id, 'createreautomated:ore_node')
      .displayName(node.displayName)
      .baseStone(node.baseStone)
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
  CUSTOM_NODE_ITEMS.forEach(item => {
    event.create(item.id)
      .displayName(item.displayName)
  })
})
