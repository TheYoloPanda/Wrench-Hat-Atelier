// Occultism keeps its rituals, spirits and miners, but no longer creates the resources the pack
// gates behind Nodes. Lists checked against Occultism 1.224.4: re-check them after every update.
;(() => {
  // Dimensional Mineshaft results removed per tier (recipe IDs occultism:miner/<tier>/<name>).
  // Kept: every basic_resources result; ores: clay, crying_obsidian, glowstone, gravel,
  // magma_block, obsidian, otherrock, otherstone; master: iesnium_ore, mining_dim_core;
  // eldritch: clay, glowstone_dust, mining_dim_core, raw_iesnium.
  // Most entries are conditional on other mods' tags and are not loaded in this pack.
  const REMOVED_MINER_RESULTS = {
    ores: [
      'agate_ore', 'aluminum_ore', 'amber_ore', 'amethyst_ore', 'antimony_ore', 'aquamarine_ore',
      'arcane_crystal', 'ardite_ore', 'baronyte_ore', 'bauxite_ore', 'beryl_ore', 'black_quartz_ore',
      'blazium_ore', 'bloodstone_ore', 'blue_gemstone_ore', 'bone_fragments_ore', 'boron_ore',
      'certus_quartz_ore', 'charged_runium_ore', 'cinnabar_ore', 'coal_ore', 'cobalt_ore',
      'copper_ore', 'crystallite_ore', 'dark_gem_ore', 'diamond_ore', 'dimensional_shard_ore',
      'draconium_ore', 'elecanium_ore', 'electrotine_ore', 'emberstone_ore', 'emerald_ore',
      'fluorite_ore', 'garnet_ore', 'gemenyte_ore', 'ghastly_ore', 'ghoulish_ore',
      'gilded_blackstone', 'gold_ore', 'green_gemstone_ore', 'heliodor_ore', 'indicolite_ore',
      'inferium_ore', 'iolite_ore', 'iridium_ore', 'iron_ore', 'jade_ore', 'jewelyte_ore',
      'lapis_ore', 'lead_ore', 'lignite_coal_ore', 'limonite_ore', 'lithium_ore', 'lyon_ore',
      'magnesium_ore', 'malachite_ore', 'mithril_ore', 'monazite_ore', 'morganite_ore',
      'mystite_ore', 'nether_gold_ore', 'nether_quartz_ore', 'nickel_ore', 'niter_ore', 'onyx_ore',
      'opal_ore', 'ornamyte_ore', 'osmium_ore', 'peridot_ore', 'platinum_ore', 'prosperity_ore',
      'purple_gemstone_ore', 'red_gemstone_ore', 'redstone_ore', 'ruby_ore', 'runic_stone',
      'runium_ore', 'sal_ammoniac_ore', 'salt_ore', 'sapphire_ore', 'shyregem_ore', 'shyrestone_ore',
      'silver_ore', 'sulfur_ore', 'tanzanite_ore', 'thorium_ore', 'tin_ore', 'titanium_ore',
      'topaz_ore', 'tungsten_ore', 'uraninite_dense_ore', 'uraninite_ore', 'uraninite_poor_ore',
      'uraninite_regular_ore', 'uranium_ore', 'varsium_ore', 'white_gemstone_ore', 'xpetrified_ore',
      'yellow_gemstone_ore', 'zinc_ore'
    ],
    deeps: [
      'deepslate_coal_ore', 'deepslate_copper_ore', 'deepslate_diamond_ore', 'deepslate_emerald_ore',
      'deepslate_gold_ore', 'deepslate_iron_ore', 'deepslate_lapis_ore', 'deepslate_redstone_ore',
      'deepslate_silver_ore'
    ],
    master: ['ancient_debris', 'stella_arcanum', 'stellarite'],
    eldritch: [
      'amethyst', 'ancient_debris', 'arcane_crystal', 'bauxite', 'black_quartz', 'coal', 'dark_gem',
      'diamond', 'emerald', 'fluorite', 'inferium_essence', 'jade', 'lapis', 'lignite_coal',
      'monazite', 'onyx', 'peridot', 'prosperity_shard', 'quartz', 'raw_aethersent',
      'raw_allthemodium', 'raw_aluminum', 'raw_antimony', 'raw_azure_silver', 'raw_cloggrum',
      'raw_cobalt', 'raw_copper', 'raw_crimson_iron', 'raw_froststeel', 'raw_gold', 'raw_iridium',
      'raw_iron', 'raw_lead', 'raw_nickel', 'raw_osmium', 'raw_platinum', 'raw_silver', 'raw_tin',
      'raw_titanium', 'raw_tungsten', 'raw_unobtainium', 'raw_uranium', 'raw_vibranium',
      'raw_yellorium', 'raw_zinc', 'redstone', 'ruby', 'rune', 'sal_ammoniac', 'salt', 'sapphire',
      'soulium_dust', 'stellarite', 'sulfur', 'uraninite'
    ]
  }

  // The Gambler keeps amethyst, prismarine crystals, spirit attuned gems and iesnium nuggets.
  const REMOVED_GAMBLER_TRADES = ['gold', 'diamond', 'emerald', 'iron', 'lazuli', 'quartz', 'silver']

  ServerEvents.recipes(event => {
    Object.keys(REMOVED_MINER_RESULTS).forEach(tier => {
      REMOVED_MINER_RESULTS[tier].forEach(name => {
        event.remove({ id: `occultism:miner/${tier}/${name}` })
      })
    })

    REMOVED_GAMBLER_TRADES.forEach(name => {
      event.remove({ id: `occultism:spirit_trade/gambler_${name}` })
    })
  })
})()
