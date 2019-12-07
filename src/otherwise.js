export default func => promise => promise.catch(func || (x => x))
