// The native debris recipes name their node instead of a tag, so the infinite node gets its own copies.
const ANCIENT_DEBRIS_DRILLS = [
  { drill: 'diamond_drill', processingTime: 2150400 },
  { drill: 'netherite_drill', processingTime: 1075200 }
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
})
