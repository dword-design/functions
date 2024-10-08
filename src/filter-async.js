export default func => async collection => {
  const filterResults = await Promise.all(collection.map(func));
  return collection.filter((element, index) => filterResults[index]);
};
