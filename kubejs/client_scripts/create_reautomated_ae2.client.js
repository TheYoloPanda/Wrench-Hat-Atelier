// AE2's damaged, chipped and flawed budding have no source in survival: the Certus Nodes
// take their place, so the recipe viewer hides them.
const HIDDEN_BUDDING_CERTUS = [
  'ae2:damaged_budding_quartz',
  'ae2:chipped_budding_quartz',
  'ae2:flawed_budding_quartz'
]

RecipeViewerEvents.removeEntries('item', event => {
  HIDDEN_BUDDING_CERTUS.forEach(id => event.remove(id))
})
