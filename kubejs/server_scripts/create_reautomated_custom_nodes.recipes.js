function addExtracting(event, recipe) {
  event.custom({
    type: 'createreautomated:extracting',
    ingredients: [{ tag: recipe.drillTag }],
    node: recipe.node,
    processing_time: recipe.processingTime,
    extractionQuantity: recipe.extractionQuantity,
    durabilityCost: recipe.durabilityCost,
    results: [
      { count: recipe.outputCount, id: recipe.output },
      { chance: 0.01, id: 'createreautomated:node_fragment' }
    ]
  }).id(`kubejs:create_reautomated/extracting/${recipe.id}`)
}

function addNineToOneCompacting(event, id, input, output, heatRequirement) {
  const ingredients = []
  for (let i = 0; i < 9; i++) {
    ingredients.push({ item: input })
  }

  const recipe = {
    type: 'create:compacting',
    ingredients: ingredients,
    results: [{ id: output }]
  }

  if (heatRequirement) {
    recipe.heat_requirement = heatRequirement
  }

  event.custom(recipe).id(`kubejs:create_reautomated/compacting/${id}`)
}

ServerEvents.recipes(event => {
  const extractingRecipes = [
    {
      id: 'coal_bits',
      drillTag: 'createreautomated:drills/at_least_tier_1',
      node: '#kubejs:ore_nodes/coal_nodes',
      processingTime: 25600,
      extractionQuantity: 1,
      output: 'kubejs:coal_bit',
      outputCount: 8,
      durabilityCost: 5
    },
    {
      id: 'redstone_bits',
      drillTag: 'createreautomated:drills/at_least_tier_2',
      node: '#kubejs:ore_nodes/redstone_nodes',
      processingTime: 25600,
      extractionQuantity: 1,
      output: 'kubejs:tiny_pile_of_redstone_dust',
      outputCount: 6,
      durabilityCost: 8
    },
    {
      id: 'emerald_bits',
      drillTag: 'createreautomated:drills/at_least_tier_2',
      node: '#kubejs:ore_nodes/emerald_nodes',
      processingTime: 51200,
      extractionQuantity: 1,
      output: 'kubejs:emerald_bit',
      outputCount: 2,
      durabilityCost: 10
    },
    {
      id: 'lapis_bits',
      drillTag: 'createreautomated:drills/at_least_tier_2',
      node: '#kubejs:ore_nodes/lapis_nodes',
      processingTime: 25600,
      extractionQuantity: 1,
      output: 'kubejs:lapis_bit',
      outputCount: 6,
      durabilityCost: 8
    },
    {
      id: 'quartz_bits',
      drillTag: 'createreautomated:drills/at_least_tier_1',
      node: '#kubejs:ore_nodes/quartz_nodes',
      processingTime: 25600,
      extractionQuantity: 1,
      output: 'kubejs:nether_quartz_bit',
      outputCount: 8,
      durabilityCost: 5
    },
    {
      id: 'bort_bits',
      drillTag: 'createreautomated:drills/at_least_tier_1',
      node: '#kubejs:ore_nodes/bort_nodes',
      processingTime: 25600,
      extractionQuantity: 1,
      output: 'kubejs:bort_bit',
      outputCount: 6,
      durabilityCost: 5
    },
    {
      id: 'mithril_bits',
      drillTag: 'createreautomated:drills/at_least_tier_2',
      node: '#kubejs:ore_nodes/mithril_nodes',
      processingTime: 25600,
      extractionQuantity: 1,
      output: 'kubejs:mithril_bit',
      outputCount: 4,
      durabilityCost: 8
    },
    {
      id: 'silver_bits',
      drillTag: 'createreautomated:drills/at_least_tier_1',
      node: '#kubejs:ore_nodes/silver_nodes',
      processingTime: 25600,
      extractionQuantity: 1,
      output: 'kubejs:silver_bit',
      outputCount: 6,
      durabilityCost: 5
    },
    {
      id: 'sapphire_dust',
      drillTag: 'createreautomated:drills/at_least_tier_2',
      node: '#kubejs:ore_nodes/sapphire_nodes',
      processingTime: 51200,
      extractionQuantity: 1,
      output: 'kubejs:tiny_pile_of_sapphire_dust',
      outputCount: 2,
      durabilityCost: 10
    },
    {
      id: 'small_piles_of_draconium_dust',
      drillTag: 'createreautomated:drills/at_least_tier_3',
      node: '#kubejs:ore_nodes/draconium_nodes',
      processingTime: 51200,
      extractionQuantity: 1,
      output: 'kubejs:tiny_pile_of_draconium_dust',
      outputCount: 2,
      durabilityCost: 12
    },
    {
      id: 'crimson_iron_bits',
      drillTag: 'createreautomated:drills/at_least_tier_2',
      node: '#kubejs:ore_nodes/crimson_iron_nodes',
      processingTime: 25600,
      extractionQuantity: 1,
      output: 'kubejs:crimson_iron_bit',
      outputCount: 4,
      durabilityCost: 8
    },
    {
      id: 'azure_silver_bits',
      drillTag: 'createreautomated:drills/at_least_tier_2',
      node: '#kubejs:ore_nodes/azure_silver_nodes',
      processingTime: 25600,
      extractionQuantity: 1,
      output: 'kubejs:azure_silver_bit',
      outputCount: 4,
      durabilityCost: 8
    }
  ]

  extractingRecipes.forEach(recipe => addExtracting(event, recipe))

  addNineToOneCompacting(event, 'coal', 'kubejs:coal_bit', 'minecraft:coal')
  addNineToOneCompacting(event, 'redstone', 'kubejs:tiny_pile_of_redstone_dust', 'minecraft:redstone')
  addNineToOneCompacting(event, 'emerald', 'kubejs:emerald_bit', 'minecraft:emerald')
  addNineToOneCompacting(event, 'lapis', 'kubejs:lapis_bit', 'minecraft:lapis_lazuli')
  addNineToOneCompacting(event, 'quartz', 'kubejs:nether_quartz_bit', 'minecraft:quartz')
  addNineToOneCompacting(event, 'bort', 'kubejs:bort_bit', 'silentgear:bort')
  addNineToOneCompacting(event, 'mithril', 'kubejs:mithril_bit', 'irons_spellbooks:raw_mithril')
  addNineToOneCompacting(event, 'silver', 'kubejs:silver_bit', 'occultism:raw_silver')
  addNineToOneCompacting(event, 'sapphire', 'kubejs:tiny_pile_of_sapphire_dust', 'iceandfire:sapphire_gem')
  addNineToOneCompacting(event, 'crimson_iron', 'kubejs:crimson_iron_bit', 'silentgear:raw_crimson_iron')
  addNineToOneCompacting(event, 'azure_silver', 'kubejs:azure_silver_bit', 'silentgear:raw_azure_silver')

  event.custom({
    type: 'create:mixing',
    heat_requirement: 'superheated',
    ingredients: [
      { item: 'kubejs:tiny_pile_of_draconium_dust' },
      { item: 'kubejs:tiny_pile_of_draconium_dust' },
      { item: 'kubejs:tiny_pile_of_draconium_dust' },
      { item: 'kubejs:tiny_pile_of_draconium_dust' },
      { item: 'kubejs:tiny_pile_of_draconium_dust' },
      { item: 'kubejs:tiny_pile_of_draconium_dust' },
      { item: 'kubejs:tiny_pile_of_draconium_dust' },
      { item: 'kubejs:tiny_pile_of_draconium_dust' },
      { item: 'create:powdered_obsidian' },
      { item: 'minecraft:ender_pearl' },
      { type: 'neoforge:single', amount: 1000, fluid: 'minecraft:lava' }
    ],
    results: [{ id: 'kubejs:unstable_draconium_blend' }]
  }).id('kubejs:create_reautomated/mixing/unstable_draconium_blend')

  event.custom({
    type: 'create:compacting',
    heat_requirement: 'superheated',
    ingredients: [
      { item: 'kubejs:unstable_draconium_blend' },
      { item: 'create:sturdy_sheet' },
      { item: 'minecraft:amethyst_shard' }
    ],
    results: [{ id: 'kubejs:compressed_draconium_slug' }]
  }).id('kubejs:create_reautomated/compacting/compressed_draconium_slug')

  event.custom({
    type: 'create:mixing',
    ingredients: [
      { item: 'kubejs:compressed_draconium_slug' },
      { item: 'minecraft:diamond' },
      { item: 'minecraft:ender_eye' }
    ],
    results: [{ id: 'draconicevolution:draconium_ingot' }]
  }).id('kubejs:create_reautomated/mixing/draconium_ingot')
})
