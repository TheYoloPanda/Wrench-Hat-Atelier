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
})
