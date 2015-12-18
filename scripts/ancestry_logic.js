function createAncestry(horse, index) {
  singleAncestry[index] = horse;
  //console.log('finding sire');
  var sire = findSire(horse);
  //console.log('sire', sire);
  if (sire) {
    createAncestry(sire, index * 2);
  }
  var dam = findDam(horse);
  if (dam) {
    createAncestry(dam, (index * 2) + 1);
  }
  return singleAncestry;
};

function findSire (horse) {
  //console.log('horse.sire', horse.sire);
  if (!horse.sire || !horse.sire.id) {
    return false;
  }
  //console.log('horse id:', horse.sire.id);
  var sireID = horse.sire.id;
  for (var i = 0; i < horseArray.length; i++) {
    if (horseArray[i].id === sireID) {
      //console.log('return sire', horseArray[i]);
      return horseArray[i];
    }
  }
  return false;
};

function findDam (horse) {
  //console.log('horse.dam', horse.dam);
  if (!horse.dam || !horse.dam.id) {
    return false;
  }
  //console.log('horse id:', horse.dam.id);
  var damID = horse.dam.id;
  for (var i = 0; i < horseArray.length; i++) {
    if (horseArray[i].id === damID) {
      //console.log('return dam', horseArray[i]);
      return horseArray[i];
    }
  }
  return false;
};
