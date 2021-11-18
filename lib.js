function $(elem){
 const e  = document.querySelector(elem);
 return e;
}

function id(elem){
  return document.getElementById(elem);
}


function event(elem , met, cb){
  return $(elem).addEventListener(met,cb);
}

function addE(elem,met,cb){
  return elem.addEventListener(met,cb)
}
