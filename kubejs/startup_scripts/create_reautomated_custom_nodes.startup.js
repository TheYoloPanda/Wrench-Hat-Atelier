const CUSTOM_NODE_BLOCKS = [
  { id: 'coal_node', displayName: 'Coal Node', baseStone: 'minecraft:cobblestone', yield: 1920 },
  { id: 'deepslate_coal_node', displayName: 'Deepslate Coal Node', baseStone: 'minecraft:cobbled_deepslate', yield: 2400 },
  { id: 'redstone_node', displayName: 'Redstone Node', baseStone: 'minecraft:cobblestone', yield: 1440 },
  { id: 'deepslate_redstone_node', displayName: 'Deepslate Redstone Node', baseStone: 'minecraft:cobbled_deepslate', yield: 1800 },
  { id: 'emerald_node', displayName: 'Emerald Node', baseStone: 'minecraft:cobblestone', yield: 864 },
  { id: 'deepslate_emerald_node', displayName: 'Deepslate Emerald Node', baseStone: 'minecraft:cobbled_deepslate', yield: 1080 },
  { id: 'lapis_node', displayName: 'Lapis Node', baseStone: 'minecraft:cobblestone', yield: 1440 },
  { id: 'deepslate_lapis_node', displayName: 'Deepslate Lapis Node', baseStone: 'minecraft:cobbled_deepslate', yield: 1800 },
  { id: 'nether_quartz_node', displayName: 'Nether Quartz Node', baseStone: 'minecraft:netherrack', yield: 1440 },
  { id: 'bort_node', displayName: 'Bort Node', baseStone: 'minecraft:cobblestone', yield: 1760 },
  { id: 'deepslate_bort_node', displayName: 'Deepslate Bort Node', baseStone: 'minecraft:cobbled_deepslate', yield: 2200 },
  { id: 'mithril_node', displayName: 'Mithril Node', baseStone: 'minecraft:cobblestone', yield: 1440 },
  { id: 'deepslate_mithril_node', displayName: 'Deepslate Mithril Node', baseStone: 'minecraft:cobbled_deepslate', yield: 1800 },
  { id: 'silver_node', displayName: 'Silver Node', baseStone: 'minecraft:cobblestone', yield: 1760 },
  { id: 'deepslate_silver_node', displayName: 'Deepslate Silver Node', baseStone: 'minecraft:cobbled_deepslate', yield: 2200 },
  { id: 'sapphire_node', displayName: 'Sapphire Node', baseStone: 'minecraft:cobblestone', yield: 1200 },
  { id: 'overworld_draconium_node', displayName: 'Overworld Draconium Node', baseStone: 'minecraft:cobblestone', yield: 864 },
  { id: 'deepslate_draconium_node', displayName: 'Deepslate Draconium Node', baseStone: 'minecraft:cobbled_deepslate', yield: 1080 },
  { id: 'nether_draconium_node', displayName: 'Nether Draconium Node', baseStone: 'minecraft:netherrack', yield: 864 },
  { id: 'end_draconium_node', displayName: 'End Draconium Node', baseStone: 'minecraft:end_stone', yield: 720 },
  { id: 'crimson_iron_node', displayName: 'Crimson Iron Node', baseStone: 'minecraft:netherrack', yield: 1760 },
  { id: 'blackstone_crimson_iron_node', displayName: 'Blackstone Crimson Iron Node', baseStone: 'minecraft:blackstone', yield: 2200 },
  { id: 'azure_silver_node', displayName: 'Azure Silver Node', baseStone: 'minecraft:end_stone', yield: 1440 },
  { id: 'fire_node', displayName: 'Fire Node', baseStone: 'iceandfire:chared_cobblestone', yield: 2400 },
  { id: 'ice_node', displayName: 'Ice Node', baseStone: 'iceandfire:frozen_cobblestone', yield: 2400 },
  { id: 'lightning_node', displayName: 'Lightning Node', baseStone: 'iceandfire:crackled_cobblestone', yield: 2400 }
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
  { id: 'compressed_draconium_slug', displayName: 'Compressed Draconium Slug' },
  { id: 'scorched_ore_cluster', displayName: 'Scorched Ore Cluster' },
  { id: 'frozen_ore_cluster', displayName: 'Frozen Ore Cluster' },
  { id: 'charged_ore_cluster', displayName: 'Charged Ore Cluster' }
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
