const CUSTOM_NODE_TAGS = {
  'kubejs:ore_nodes/coal_nodes': [
    'kubejs:coal_node',
    'kubejs:deepslate_coal_node',
    'kubejs:infinite_coal_node'
  ],
  'kubejs:ore_nodes/redstone_nodes': [
    'kubejs:redstone_node',
    'kubejs:deepslate_redstone_node',
    'kubejs:infinite_redstone_node'
  ],
  'kubejs:ore_nodes/emerald_nodes': [
    'kubejs:emerald_node',
    'kubejs:deepslate_emerald_node',
    'kubejs:infinite_emerald_node'
  ],
  'kubejs:ore_nodes/lapis_nodes': [
    'kubejs:lapis_node',
    'kubejs:deepslate_lapis_node',
    'kubejs:infinite_lapis_node'
  ],
  'kubejs:ore_nodes/quartz_nodes': [
    'kubejs:nether_quartz_node'
  ],
  'kubejs:ore_nodes/bort_nodes': [
    'kubejs:bort_node',
    'kubejs:deepslate_bort_node',
    'kubejs:infinite_bort_node'
  ],
  'kubejs:ore_nodes/mithril_nodes': [
    'kubejs:mithril_node',
    'kubejs:deepslate_mithril_node',
    'kubejs:infinite_mithril_node'
  ],
  'kubejs:ore_nodes/silver_nodes': [
    'kubejs:silver_node',
    'kubejs:deepslate_silver_node',
    'kubejs:infinite_silver_node'
  ],
  'kubejs:ore_nodes/sapphire_nodes': [
    'kubejs:sapphire_node',
    'kubejs:infinite_sapphire_node'
  ],
  'kubejs:ore_nodes/draconium_nodes': [
    'kubejs:overworld_draconium_node',
    'kubejs:deepslate_draconium_node',
    'kubejs:nether_draconium_node',
    'kubejs:end_draconium_node',
    'kubejs:infinite_draconium_node'
  ],
  'kubejs:ore_nodes/crimson_iron_nodes': [
    'kubejs:crimson_iron_node',
    'kubejs:blackstone_crimson_iron_node',
    'kubejs:infinite_crimson_iron_node'
  ],
  'kubejs:ore_nodes/azure_silver_nodes': [
    'kubejs:azure_silver_node',
    'kubejs:infinite_azure_silver_node'
  ],
  'kubejs:ore_nodes/fire_nodes': [
    'kubejs:fire_node',
    'kubejs:infinite_fire_node'
  ],
  'kubejs:ore_nodes/ice_nodes': [
    'kubejs:ice_node',
    'kubejs:infinite_ice_node'
  ],
  'kubejs:ore_nodes/lightning_nodes': [
    'kubejs:lightning_node',
    'kubejs:infinite_lightning_node'
  ]
}

const ROOST_NODES = {
  'roosttraces:fire_roost_nodes': 'kubejs:fire_node',
  'roosttraces:ice_roost_nodes': 'kubejs:ice_node',
  'roosttraces:lightning_roost_nodes': 'kubejs:lightning_node'
}

ServerEvents.tags('block', event => {
  const allNodes = []

  Object.entries(CUSTOM_NODE_TAGS).forEach(([tag, nodes]) => {
    nodes.forEach(node => {
      event.add(tag, node)
      allNodes.push(node)
    })
  })

  allNodes.forEach(node => event.add('createreautomated:ore_nodes', node))
  // No family tag: the native debris recipes name their node directly.
  event.add('createreautomated:ore_nodes', 'kubejs:infinite_ancient_debris_node')

  // Dragon Roosts only place their elemental node; the default pool stays as is.
  Object.entries(ROOST_NODES).forEach(([tag, node]) => {
    event.removeAll(tag)
    event.add(tag, node)
  })
})
