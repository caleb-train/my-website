export default function isInViewport(elem, top = 256) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top <= top &&
    bounding.bottom >= 0
  );
};