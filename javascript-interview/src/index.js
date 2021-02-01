
/**
 * CODING CHALLENGE 1
 * @param {String} str the string to format
 * @see `codingChallenge.md` for instructions
 */
export function titleCase (str) {
  if (str === "")
	  throw 'Input cannot be null';
  
  str = str.replace(/[^0-9a-z]/gi, ' ');
  
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
	  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  
  return str.join(' ').trim();
}

/**
 * CODING CHALLENGE 2
 * @param {Number} timestamp the timestamp to format
 * @see `codingChallenge.md` for instructions
 */
export function dateString (timestamp) {
  //if (typeof timestamp !== null && !timestamp) 
	  //throw 'Input cannot be null';
	
  if (timestamp === undefined) {
	timestamp = new Date().getTime();
  }
  
  var date = new Date(timestamp);
  var result = date.toLocaleString({},
	  {timeZone:"UTC",month:"long", day:"2-digit", year:"numeric"});
  
  return result;
}

