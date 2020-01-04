export default function isInViewport(elem, top = 256) {
  var bounding = elem.getBoundingClientRect();
  let res = (
    bounding.top <= top &&
    bounding.bottom >= 0
  )
  if(top===0)console.log(res)
  return res;
};