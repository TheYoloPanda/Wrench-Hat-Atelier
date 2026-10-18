// Infinite nodes for the families Create ReAutomated has none for. With yield 0 the node gets no
// block entity, so it always extracts and never depletes.
const INFINITE_NODE_BLOCKS = [
  { id: 'infinite_coal_node', displayName: 'Infinite Coal Node', baseStone: 'minecraft:cobblestone', texture: 'kubejs:block/coal_node' },
  { id: 'infinite_redstone_node', displayName: 'Infinite Redstone Node', baseStone: 'minecraft:cobblestone', texture: 'kubejs:block/redstone_node' },
  { id: 'infinite_emerald_node', displayName: 'Infinite Emerald Node', baseStone: 'minecraft:cobblestone', texture: 'kubejs:block/emerald_node' },
  { id: 'infinite_lapis_node', displayName: 'Infinite Lapis Node', baseStone: 'minecraft:cobblestone', texture: 'kubejs:block/lapis_node' },
  { id: 'infinite_bort_node', displayName: 'Infinite Bort Node', baseStone: 'minecraft:cobblestone', texture: 'kubejs:block/bort_node' },
  { id: 'infinite_mithril_node', displayName: 'Infinite Mithril Node', baseStone: 'minecraft:cobblestone', texture: 'kubejs:block/mithril_node' },
  { id: 'infinite_silver_node', displayName: 'Infinite Silver Node', baseStone: 'minecraft:cobblestone', texture: 'kubejs:block/silver_node' },
  { id: 'infinite_sapphire_node', displayName: 'Infinite Sapphire Node', baseStone: 'minecraft:cobblestone', texture: 'kubejs:block/sapphire_node' },
  { id: 'infinite_draconium_node', displayName: 'Infinite Draconium Node', baseStone: 'minecraft:cobblestone', texture: 'kubejs:block/overworld_draconium_node' },
  { id: 'infinite_crimson_iron_node', displayName: 'Infinite Crimson Iron Node', baseStone: 'minecraft:netherrack', texture: 'kubejs:block/crimson_iron_node' },
  { id: 'infinite_azure_silver_node', displayName: 'Infinite Azure Silver Node', baseStone: 'minecraft:end_stone', texture: 'kubejs:block/azure_silver_node' },
  { id: 'infinite_ancient_debris_node', displayName: 'Infinite Ancient Debris Node', baseStone: 'minecraft:netherrack', texture: 'createreautomated:block/ancient_debris_node_side' },
  { id: 'infinite_fire_node', displayName: 'Infinite Fire Node', baseStone: 'iceandfire:chared_cobblestone', texture: 'kubejs:block/fire_node' },
  { id: 'infinite_ice_node', displayName: 'Infinite Ice Node', baseStone: 'iceandfire:frozen_cobblestone', texture: 'kubejs:block/ice_node' },
  { id: 'infinite_lightning_node', displayName: 'Infinite Lightning Node', baseStone: 'iceandfire:crackled_cobblestone', texture: 'kubejs:block/lightning_node' }
]

StartupEvents.registry('block', event => {
  INFINITE_NODE_BLOCKS.forEach(node => {
    event.create(node.id, 'createreautomated:ore_node')
      .displayName(node.displayName)
      .parentModel('createreautomated:block/infinite_node_base')
      .textures({ node: node.texture })
      .renderType('cutout_mipped')
      .notSolid()
      .baseStone(node.baseStone)
      .yield(0)
      .withCommonLoot()
      .hardness(28.0)
      .resistance(1500.0)
      .requiresTool(true)
      .tagBlock('minecraft:mineable/pickaxe')
      .tagBlock('minecraft:needs_iron_tool')
  })
})
