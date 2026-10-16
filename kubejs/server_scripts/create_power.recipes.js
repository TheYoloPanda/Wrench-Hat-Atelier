// Power sources for Node outposts. A sail craft gives 1 White Sail instead of 2, so a full
// windmill costs as much as the one Extractor it feeds at 256 RPM.
// Checked against Create 6.0.10: re-check after updates.
;(() => {
  const RECIPE_ROOT = 'kubejs:create_power'

  ServerEvents.recipes(event => {
    // Create's own recipe, same pattern and tags, with the yield halved.
    event.remove({ id: 'create:crafting/kinetics/white_sail' })
    event.custom({
      type: 'minecraft:crafting_shaped',
      category: 'misc',
      key: {
        A: { item: 'create:andesite_alloy' },
        S: { tag: 'c:rods/wooden' },
        W: { tag: 'minecraft:wool' }
      },
      pattern: ['WS', 'SA'],
      result: { count: 1, id: 'create:white_sail' }
    }).id(`${RECIPE_ROOT}/crafting/white_sail`)
  })
})()
