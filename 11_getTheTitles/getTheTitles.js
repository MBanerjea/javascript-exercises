const getTheTitles = function (arr) {
  // let titleList = [];
  // arr.forEach(element => {
  //   titleList.push(element.title);
  // });
  // return titleList;

  const titleList = arr.map(element => element.title)
  return titleList;
};

// Do not edit below this line
module.exports = getTheTitles;
