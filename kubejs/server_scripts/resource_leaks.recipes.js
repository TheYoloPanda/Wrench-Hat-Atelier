// Recipes that turn unlimited materials into resources the pack only gives through Nodes or
// The Last Quarry. Checked against Create 6.0.10 and Ender IO 8.2.12: re-check after updates.
;(() => {
  const RECIPE_ROOT = 'kubejs:resource_leaks'

  // Removed outright. The striated stones (ochrum, crimsite, veridium, asurine) stay in the
  // world as decoration; crushing them no longer yields metal.
  const REMOVED_RECIPES = [
    'create:crushing/ochrum',
    'create:crushing/ochrum_recycling',
    'create:crushing/crimsite',
    'create:crushing/crimsite_recycling',
    'create:crushing/veridium',
    'create:crushing/veridium_recycling',
    'create:crushing/asurine',
    'create:crushing/asurine_recycling',
    'create:crushing/diorite',
    'create:crushing/diorite_recycling',
    'create:crushing/prismarine_crystals',
    'create:splashing/soul_sand',
    'create:filling/redstone'
  ]

  function replaceRecipe(event, originalId, name, recipe) {
    event.remove({ id: originalId })
    event.custom(recipe).id(`${RECIPE_ROOT}/${name}`)
  }

  ServerEvents.recipes(event => {
    REMOVED_RECIPES.forEach(id => event.remove({ id: id }))

    // The replacements below are the original recipes minus their metal, gem and redstone outputs.
    replaceRecipe(event, 'create:crushing/tuff', 'crushing/tuff', {
      type: 'create:crushing',
      ingredients: [{ item: 'minecraft:tuff' }],
      processing_time: 350,
      results: [{ chance: 0.25, id: 'minecraft:flint' }]
    })

    replaceRecipe(event, 'create:crushing/tuff_recycling', 'crushing/tuff_recycling', {
      type: 'create:crushing',
      ingredients: [{ tag: 'create:stone_types/tuff' }],
      processing_time: 350,
      results: [{ chance: 0.25, id: 'minecraft:flint' }]
    })

    replaceRecipe(event, 'create:splashing/gravel', 'splashing/gravel', {
      type: 'create:splashing',
      ingredients: [{ item: 'minecraft:gravel' }],
      results: [{ chance: 0.25, id: 'minecraft:flint' }]
    })

    replaceRecipe(event, 'create:splashing/red_sand', 'splashing/red_sand', {
      type: 'create:splashing',
      ingredients: [{ item: 'minecraft:red_sand' }],
      results: [{ chance: 0.05, id: 'minecraft:dead_bush' }]
    })

    replaceRecipe(event, 'create:splashing/crushed_raw_iron', 'splashing/crushed_raw_iron', {
      type: 'create:splashing',
      ingredients: [{ item: 'create:crushed_raw_iron' }],
      results: [{ count: 9, id: 'minecraft:iron_nugget' }]
    })

    replaceRecipe(event, 'enderio:sag_milling/coal_ore', 'sag_milling/coal_ore', {
      type: 'enderio:sag_milling',
      energy: 2400,
      input: { tag: 'c:ores/coal' },
      outputs: [
        { item: { count: 3, id: 'minecraft:coal' } },
        { chance: 0.6, item: { count: 1, id: 'enderio:powdered_coal' } },
        { chance: 0.15, item: { count: 1, id: 'minecraft:cobblestone' } }
      ]
    })

    replaceRecipe(event, 'enderio:sag_milling/raw_copper', 'sag_milling/raw_copper', {
      type: 'enderio:sag_milling',
      energy: 2400,
      input: { tag: 'c:raw_materials/copper' },
      outputs: [
        { item: { count: 1, id: 'enderio:powdered_copper' } },
        { chance: 0.8, item: { count: 1, id: 'enderio:powdered_copper' } }
      ]
    })
  })
})()
