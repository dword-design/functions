export default callback => async collection => {
  const filterResults = await Promise.all(collection.map(callback))
  return collection.filter((element, index) => filterResults[index])
}
