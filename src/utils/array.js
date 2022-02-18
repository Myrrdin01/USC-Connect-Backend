async function getArrayItemFromObject(objects, key) {
  /*
  
    This method is created to get Object Arrays and display them as only arrays by entering their attribute that is wanted
  
    */
  if (!objects) {
    return [];
  }

  return objects.map((objects) => {
    return objects[key];
  });
}

module.exports = { getArrayItemFromObject };
