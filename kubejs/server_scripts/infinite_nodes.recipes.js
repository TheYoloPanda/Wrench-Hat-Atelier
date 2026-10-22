// The native debris recipes name their node instead of a tag, so the infinite node gets its own copies.
const ANCIENT_DEBRIS_DRILLS = [
  { drill: 'diamond_drill', processingTime: 2150400 },
  { drill: 'netherite_drill', processingTime: 1075200 }
]

// Compact Crafting's field is where infinite nodes are assembled, so its projectors cost endgame
// materials. The ender crystal recipe goes, and compact_walls needs Compact Machines.
const COMPACT_CRAFTING_REMOVED = [
  'compactcrafting:base',
  'compactcrafting:projector_dish',
  'compactcrafting:ender_crystal',
  'compactcrafting:compact_walls'
]

// Each schema passes through a boss of its branch: Ignis for the Create one, the Wilden Chimera
// for the Ars one, all three dragons for the rare one.
const INFUSED_SCHEMA_PEDESTALS = [
  'ars_nouveau:source_gem_block',
  'ars_nouveau:source_gem_block',
  'ars_nouveau:source_gem_block',
  'ars_nouveau:source_gem_block',
  'ars_nouveau:manipulation_essence',
  'ars_nouveau:wilden_tribute',
  'ars_nouveau:earth_essence',
  'ars_nouveau:earth_essence'
]

const DRACONIC_SCHEMA_INGREDIENTS = [
  'kubejs:infused_vein_schema',
  'iceandfire:dragonsteel_fire_ingot',
  'iceandfire:dragonsteel_ice_ingot',
  'iceandfire:dragonsteel_lightning_ingot',
  'iceandfire:fire_dragon_blood',
  'iceandfire:ice_dragon_blood',
  'iceandfire:lightning_dragon_blood'
]

// Infinite nodes come only from the miniaturization field: a 9x9x9 pattern built around a natural
// node that was never worked, plus the tier's schema. Compact Crafting has no tags, so every
// natural variant gets its own recipe.
const FIELD_SIZE = 9

const TIER_PATTERNS = {
  common: { pillar: 'create:brass_casing', catalyst: 'kubejs:common_vein_schema', craftingTime: 1200 },
  intermediate: { pillar: 'ars_nouveau:sourcestone', catalyst: 'kubejs:infused_vein_schema', craftingTime: 2400 },
  // Rare cores keep the family block on the 8 corners only; the rest is dragon bone.
  rare: { pillar: 'ars_nouveau:sourcestone', catalyst: 'kubejs:draconic_vein_schema', craftingTime: 4800, coreFiller: 'iceandfire:dragon_bone_block' }
}

const FAMILY_BLOCKS = {
  iron: { tier: 'common', block: 'minecraft:iron_block', output: 'createreautomated:infinite_iron_node' },
  // Waxed, so it cannot oxidize while the pattern is being built.
  copper: { tier: 'common', block: 'minecraft:waxed_copper_block', output: 'createreautomated:infinite_copper_node' },
  coal: { tier: 'common', block: 'minecraft:coal_block', output: 'kubejs:infinite_coal_node' },
  zinc: { tier: 'common', block: 'create:zinc_block', output: 'createreautomated:infinite_zinc_node' },
  gold: { tier: 'intermediate', block: 'minecraft:gold_block', output: 'createreautomated:infinite_gold_node' },
  redstone: { tier: 'intermediate', block: 'minecraft:redstone_block', output: 'kubejs:infinite_redstone_node' },
  lapis: { tier: 'intermediate', block: 'minecraft:lapis_block', output: 'kubejs:infinite_lapis_node' },
  quartz: { tier: 'intermediate', block: 'minecraft:quartz_block', output: 'createreautomated:infinite_quartz_node' },
  silver: { tier: 'intermediate', block: 'occultism:silver_block', output: 'kubejs:infinite_silver_node' },
  bort: { tier: 'intermediate', block: 'silentgear:bort_block', output: 'kubejs:infinite_bort_node' },
  diamond: { tier: 'rare', block: 'minecraft:diamond_block', output: 'createreautomated:infinite_diamond_node' },
  emerald: { tier: 'rare', block: 'minecraft:emerald_block', output: 'kubejs:infinite_emerald_node' },
  sapphire: { tier: 'rare', block: 'iceandfire:sapphire_block', output: 'kubejs:infinite_sapphire_node' },
  mithril: { tier: 'rare', block: 'kubejs:mithril_block', output: 'kubejs:infinite_mithril_node' },
  crimson_iron: { tier: 'rare', block: 'silentgear:crimson_iron_block', output: 'kubejs:infinite_crimson_iron_node' },
  azure_silver: { tier: 'rare', block: 'silentgear:azure_silver_block', output: 'kubejs:infinite_azure_silver_node' },
  draconium: { tier: 'rare', block: 'draconicevolution:draconium_block', output: 'kubejs:infinite_draconium_node' },
  ancient_debris: { tier: 'rare', block: 'minecraft:netherite_block', output: 'kubejs:infinite_ancient_debris_node' },
  fire: { tier: 'rare', block: 'iceandfire:dragonscale_red', output: 'kubejs:infinite_fire_node' },
  ice: { tier: 'rare', block: 'iceandfire:dragonscale_blue', output: 'kubejs:infinite_ice_node' },
  lightning: { tier: 'rare', block: 'iceandfire:dragonscale_electric', output: 'kubejs:infinite_lightning_node' },
  certus: { tier: 'rare', block: 'ae2:fluix_block', output: 'kubejs:infinite_certus_node' }
}

const NATURAL_NODES = [
  { node: 'createreautomated:iron_node', family: 'iron' },
  { node: 'createreautomated:deepslate_iron_node', family: 'iron' },
  { node: 'createreautomated:copper_node', family: 'copper' },
  { node: 'createreautomated:deepslate_copper_node', family: 'copper' },
  { node: 'kubejs:coal_node', family: 'coal' },
  { node: 'kubejs:deepslate_coal_node', family: 'coal' },
  { node: 'createreautomated:zinc_node', family: 'zinc' },
  { node: 'createreautomated:deepslate_zinc_node', family: 'zinc' },
  { node: 'createreautomated:gold_node', family: 'gold' },
  { node: 'createreautomated:deepslate_gold_node', family: 'gold' },
  { node: 'createreautomated:nether_gold_node', family: 'gold' },
  { node: 'kubejs:redstone_node', family: 'redstone' },
  { node: 'kubejs:deepslate_redstone_node', family: 'redstone' },
  { node: 'kubejs:lapis_node', family: 'lapis' },
  { node: 'kubejs:deepslate_lapis_node', family: 'lapis' },
  { node: 'createreautomated:nether_quartz_node', family: 'quartz' },
  { node: 'kubejs:nether_quartz_node', family: 'quartz' },
  { node: 'kubejs:silver_node', family: 'silver' },
  { node: 'kubejs:deepslate_silver_node', family: 'silver' },
  { node: 'kubejs:bort_node', family: 'bort' },
  { node: 'kubejs:deepslate_bort_node', family: 'bort' },
  { node: 'createreautomated:diamond_node', family: 'diamond' },
  { node: 'createreautomated:deepslate_diamond_node', family: 'diamond' },
  { node: 'kubejs:emerald_node', family: 'emerald' },
  { node: 'kubejs:deepslate_emerald_node', family: 'emerald' },
  { node: 'kubejs:sapphire_node', family: 'sapphire' },
  { node: 'kubejs:mithril_node', family: 'mithril' },
  { node: 'kubejs:deepslate_mithril_node', family: 'mithril' },
  { node: 'kubejs:crimson_iron_node', family: 'crimson_iron' },
  { node: 'kubejs:blackstone_crimson_iron_node', family: 'crimson_iron' },
  { node: 'kubejs:azure_silver_node', family: 'azure_silver' },
  { node: 'kubejs:overworld_draconium_node', family: 'draconium' },
  { node: 'kubejs:deepslate_draconium_node', family: 'draconium' },
  { node: 'kubejs:nether_draconium_node', family: 'draconium' },
  { node: 'kubejs:end_draconium_node', family: 'draconium' },
  { node: 'createreautomated:ancient_debris_node', family: 'ancient_debris' },
  { node: 'kubejs:fire_node', family: 'fire' },
  { node: 'kubejs:ice_node', family: 'ice' },
  { node: 'kubejs:lightning_node', family: 'lightning' },
  { node: 'kubejs:flawed_certus_node', family: 'certus' }
]

// Miniaturization is the only way to an infinite node.
const NATIVE_INFINITE_RECIPES = ['iron', 'copper', 'gold', 'zinc', 'diamond', 'quartz']
  .map(family => `createreautomated:mechanical_crafting/infinite_${family}_node`)

// One mixed layer per height: corner pillars all the way up, a 3x3x3 core on layers 3-5 with the
// natural node at its centre. Returns the layers top first, as Compact Crafting reads them.
function buildLayers(tier, familyBlock, naturalNode) {
  const pattern = TIER_PATTERNS[tier]
  const components = {
    '-': { type: 'compactcrafting:empty' },
    P: { type: 'compactcrafting:block', block: pattern.pillar },
    F: { type: 'compactcrafting:block', block: familyBlock },
    N: { type: 'compactcrafting:block', block: naturalNode, properties: { depletion: ['0'] } }
  }
  if (pattern.coreFiller) {
    components.B = { type: 'compactcrafting:block', block: pattern.coreFiller }
  }

  const last = FIELD_SIZE - 1
  const centre = last / 2
  const inCore = value => Math.abs(value - centre) <= 1
  const isCoreCorner = value => Math.abs(value - centre) === 1

  const cellKey = (x, y, z) => {
    if ((x === 0 || x === last) && (z === 0 || z === last)) return 'P'
    if (!(inCore(x) && inCore(y) && inCore(z))) return '-'
    if (x === centre && y === centre && z === centre) return 'N'
    if (pattern.coreFiller && !(isCoreCorner(x) && isCoreCorner(y) && isCoreCorner(z))) return 'B'
    return 'F'
  }
  // Rhino treats a const inside a loop body as a redeclaration, so each row and layer is built by
  // its own function call.
  const rowCells = (y, z) => {
    const row = []
    for (let x = 0; x <= last; x++) row.push(cellKey(x, y, z))
    return row
  }
  const layerRows = y => {
    const rows = []
    for (let z = 0; z <= last; z++) rows.push(rowCells(y, z))
    return rows
  }

  const layers = []
  for (let y = last; y >= 0; y--) {
    layers.push({ type: 'compactcrafting:mixed', pattern: layerRows(y) })
  }
  return { layers: layers, components: components }
}

ServerEvents.recipes(event => {
  ANCIENT_DEBRIS_DRILLS.forEach(recipe => {
    event.custom({
      type: 'createreautomated:advanced_extracting',
      ingredients: [
        { item: `createreautomated:${recipe.drill}` },
        { type: 'neoforge:single', amount: 1, fluid: 'minecraft:lava' }
      ],
      node: 'kubejs:infinite_ancient_debris_node',
      processing_time: recipe.processingTime,
      results: [
        { count: 2, id: 'createreautomated:ancient_debris_bit' },
        { chance: 0.02, id: 'createreautomated:node_fragment' }
      ]
    }).id(`kubejs:infinite_nodes/advanced_extracting/ancient_debris_bits_${recipe.drill}`)
  })

  COMPACT_CRAFTING_REMOVED.forEach(id => event.remove({ id: id }))

  event.custom({
    type: 'minecraft:crafting_shaped',
    category: 'misc',
    key: {
      P: { item: 'create:precision_mechanism' },
      G: { item: 'ars_nouveau:source_gem_block' },
      C: { item: 'create:brass_casing' },
      S: { item: 'create:sturdy_sheet' }
    },
    pattern: [' P ', 'GCG', 'SSS'],
    result: { count: 1, id: 'compactcrafting:base' }
  }).id('kubejs:infinite_nodes/crafting/projector_base')

  event.custom({
    type: 'minecraft:crafting_shaped',
    category: 'misc',
    key: {
      G: { tag: 'c:glass_panes' },
      D: { item: 'iceandfire:dragonbone' },
      E: { item: 'minecraft:ender_eye' }
    },
    pattern: ['GD ', 'GED', 'GD '],
    result: { count: 1, id: 'compactcrafting:projector_dish' }
  }).id('kubejs:infinite_nodes/crafting/projector_dish')

  // Create ReAutomated's infinite node shape, with precision mechanisms in place of the nodes.
  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    category: 'misc',
    key: {
      A: { item: 'createreautomated:node_fragment' },
      B: { item: 'create:precision_mechanism' },
      C: { item: 'cataclysm:ignitium_ingot' },
      D: { item: 'minecraft:echo_shard' }
    },
    pattern: [' AAA ', 'ABDBA', 'ADCDA', 'ABDBA', ' AAA '],
    result: { count: 1, id: 'kubejs:common_vein_schema' },
    show_notification: false
  }).id('kubejs:infinite_nodes/mechanical_crafting/common_vein_schema')

  event.custom({
    type: 'ars_nouveau:enchanting_apparatus',
    keepNbtOfReagent: false,
    pedestalItems: INFUSED_SCHEMA_PEDESTALS.map(item => ({ item: item })),
    reagent: { item: 'kubejs:common_vein_schema' },
    result: { count: 1, id: 'kubejs:infused_vein_schema' },
    sourceCost: 5000
  }).id('kubejs:infinite_nodes/enchanting_apparatus/infused_vein_schema')

  event.custom({
    type: 'occultism:ritual',
    activation_item: { item: 'occultism:book_of_binding_bound_marid' },
    duration: 300,
    ingredients: DRACONIC_SCHEMA_INGREDIENTS.map(item => ({ item: item })),
    pentacle_id: 'occultism:craft_marid',
    result: { count: 1, id: 'kubejs:draconic_vein_schema' },
    ritual_dummy: { count: 1, id: 'kubejs:draconic_vein_schema_ritual' },
    ritual_type: 'occultism:craft'
  }).id('kubejs:infinite_nodes/ritual/draconic_vein_schema')

  event.custom({
    type: 'minecraft:crafting_shaped',
    category: 'building',
    key: { I: { item: 'irons_spellbooks:mithril_ingot' } },
    pattern: ['III', 'III', 'III'],
    result: { count: 1, id: 'kubejs:mithril_block' }
  }).id('kubejs:infinite_nodes/crafting/mithril_block')

  event.custom({
    type: 'minecraft:crafting_shapeless',
    category: 'misc',
    ingredients: [{ item: 'kubejs:mithril_block' }],
    result: { count: 9, id: 'irons_spellbooks:mithril_ingot' }
  }).id('kubejs:infinite_nodes/crafting/mithril_ingot_from_block')

  NATIVE_INFINITE_RECIPES.forEach(id => event.remove({ id: id }))

  NATURAL_NODES.forEach(entry => {
    const family = FAMILY_BLOCKS[entry.family]
    const tier = TIER_PATTERNS[family.tier]
    const built = buildLayers(family.tier, family.block, entry.node)
    event.custom({
      type: 'compactcrafting:miniaturization',
      recipeSize: FIELD_SIZE,
      craftingTime: tier.craftingTime,
      layers: built.layers,
      components: built.components,
      catalyst: { id: tier.catalyst, count: 1 },
      outputs: [{ id: family.output, count: 1 }]
    }).id(`kubejs:infinite_nodes/miniaturization/${entry.node.replace(':', '/')}`)
  })

  // The infinite Certus node has no family tag, so it gets the Flawed Certus Node's recipe by
  // name, without the Fragment: those stay a Flawless output.
  event.custom({
    type: 'createreautomated:extracting',
    ingredients: [{ tag: 'createreautomated:drills/at_least_tier_2' }],
    node: 'kubejs:infinite_certus_node',
    processing_time: 35328,
    extractionQuantity: 1,
    durabilityCost: 6,
    results: [{ count: 3, id: 'kubejs:certus_quartz_bit' }]
  }).id('kubejs:infinite_nodes/extracting/certus_bits')
})
