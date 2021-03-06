/**
 * Synthetic events in React
 *
 * Inside React event handlers, the event object is wrapped in a SyntheticEvent object.
 * These objects are pooled, which means that the objects received at an event handler will be reused for other events to increase performance.
 * This also means that accessing the event object’s properties asynchronously will be impossible since the event’s properties have been reset due to reuse.
 *
 * @Reference:
 * https://medium.com/nick-parsons/react-redux-best-practices-gotchas-56cf61c1c415
 */

// The following piece of code will log null because event has been reused inside the SyntheticEvent pool:
function handleClick(event) {
  setTimeout(function () {
    console.log(event.target.name);
  }, 1000);
}

//To avoid this you need to store the event’s property you are interested in inside its own binding:
function handleClick(event) {
  let name = event.target.name;
  setTimeout(function () {
    console.log(name);
  }, 1000);
}