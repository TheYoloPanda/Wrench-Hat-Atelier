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
})
