;(() => {
  const RECIPE_ROOT = 'kubejs:create_reautomated_ae2'
  const CERTUS_QUARTZ_BIT = 'kubejs:certus_quartz_bit'
  const MATRIX_FRAGMENT = 'kubejs:certus_growth_matrix_fragment'
  const CHARGED_CERTUS = 'ae2:charged_certus_quartz_crystal'

  function createRepeatedItemIngredients(item, count) {
    const ingredients = []
    for (let i = 0; i < count; i++) {
      ingredients.push({ item: item })
    }
    return ingredients
  }

  // Certus Nodes yield bits only: Fragments come from the meteorite Flawless alone, so Matrix
  // supply grows with the meteorites the player works, not with the nodes at the base.
  function addExtracting(event, recipe) {
    event.custom({
      type: 'createreautomated:extracting',
      ingredients: [{ tag: recipe.drillTag }],
      node: recipe.node,
      processing_time: recipe.processingTime,
      extractionQuantity: 1,
      durabilityCost: recipe.durabilityCost,
      results: [{ count: recipe.bitCount, id: CERTUS_QUARTZ_BIT }]
    }).id(`${RECIPE_ROOT}/extracting/${recipe.id}`)
  }

  function addAdvancedExtracting(event, recipe) {
    event.custom({
      type: 'createreautomated:advanced_extracting',
      ingredients: [
        { tag: recipe.drillTag },
        { type: 'neoforge:single', amount: recipe.fluidAmount, fluid: recipe.fluid }
      ],
      node: recipe.node,
      processing_time: recipe.processingTime,
      extractionQuantity: 1,
      durabilityCost: recipe.durabilityCost,
      results: [
        { count: recipe.bitCount, id: CERTUS_QUARTZ_BIT },
        { chance: recipe.fragmentChance, id: MATRIX_FRAGMENT }
      ]
    }).id(`${RECIPE_ROOT}/advanced_extracting/${recipe.id}`)
  }

  function addNineToOneCompacting(event, id, input, output) {
    event.custom({
      type: 'create:compacting',
      ingredients: createRepeatedItemIngredients(input, 9),
      results: [{ id: output }]
    }).id(`${RECIPE_ROOT}/compacting/${id}`)
  }

  function addGrowthMatrixCompacting(event) {
    const ingredients = []
    const fragments = createRepeatedItemIngredients(MATRIX_FRAGMENT, 9)
    const certusDust = createRepeatedItemIngredients('ae2:certus_quartz_dust', 4)

    for (let i = 0; i < fragments.length; i++) {
      ingredients.push(fragments[i])
    }
    for (let i = 0; i < certusDust.length; i++) {
      ingredients.push(certusDust[i])
    }

    ingredients.push({ item: 'create:sturdy_sheet' })
    ingredients.push({ type: 'neoforge:single', amount: 250, fluid: 'minecraft:water' })

    event.custom({
      type: 'create:compacting',
      heat_requirement: 'heated',
      ingredients: ingredients,
      results: [{ id: 'kubejs:certus_growth_matrix' }]
    }).id(`${RECIPE_ROOT}/compacting/certus_growth_matrix`)
  }

  function addNodeTransform(event, id, baseIngredients, output) {
    const ingredients = []
    for (let i = 0; i < baseIngredients.length; i++) {
      ingredients.push({ item: baseIngredients[i] })
    }

    const chargedCertusIngredients = createRepeatedItemIngredients(CHARGED_CERTUS, 9)
    for (let i = 0; i < chargedCertusIngredients.length; i++) {
      ingredients.push(chargedCertusIngredients[i])
    }

    // Placed unstable, a used node drops nothing, so it cannot come back full through the next
    // upgrade unless the player spends a Stabilizer on it.
    event.custom({
      type: 'ae2:transform',
      ingredients: ingredients,
      result: { count: 1, id: output, components: { 'minecraft:block_state': { stable: 'false' } } }
    }).id(`${RECIPE_ROOT}/transform/${id}`)
  }

  ServerEvents.recipes(event => {
    event.remove({ id: 'ae2:transform/damaged_budding_quartz' })
    event.remove({ id: 'ae2:transform/chipped_budding_quartz' })
    event.remove({ id: 'ae2:transform/flawed_budding_quartz' })

    addExtracting(event, {
      id: 'damaged_certus_node',
      drillTag: 'createreautomated:drills/at_least_tier_1',
      node: 'kubejs:damaged_certus_node',
      processingTime: 17920,
      bitCount: 1,
      durabilityCost: 3
    })

    addExtracting(event, {
      id: 'chipped_certus_node',
      drillTag: 'createreautomated:drills/at_least_tier_1',
      node: 'kubejs:chipped_certus_node',
      processingTime: 27648,
      bitCount: 2,
      durabilityCost: 4
    })

    addExtracting(event, {
      id: 'flawed_certus_node',
      drillTag: 'createreautomated:drills/at_least_tier_2',
      node: 'kubejs:flawed_certus_node',
      processingTime: 35328,
      bitCount: 3,
      durabilityCost: 6
    })

    addAdvancedExtracting(event, {
      id: 'flawless_budding_certus',
      drillTag: 'createreautomated:drills/at_least_tier_2',
      node: 'ae2:flawless_budding_quartz',
      processingTime: 40960,
      bitCount: 4,
      fragmentChance: 0.0125,
      durabilityCost: 8,
      fluid: 'minecraft:water',
      fluidAmount: 250
    })

    addNineToOneCompacting(
      event,
      'certus_quartz_crystal',
      CERTUS_QUARTZ_BIT,
      'ae2:certus_quartz_crystal'
    )
    addGrowthMatrixCompacting(event)

    addNodeTransform(
      event,
      'damaged_certus_node',
      ['ae2:quartz_block', 'kubejs:certus_growth_matrix'],
      'kubejs:damaged_certus_node'
    )
    addNodeTransform(
      event,
      'chipped_certus_node',
      ['kubejs:damaged_certus_node'],
      'kubejs:chipped_certus_node'
    )
    addNodeTransform(
      event,
      'flawed_certus_node',
      ['kubejs:chipped_certus_node'],
      'kubejs:flawed_certus_node'
    )
  })
})()
