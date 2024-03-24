console.log('Start');

setTimeout(() => {
  console.log('setTimeout 1');
  process.nextTick(() => {
    console.log('nextTick inside setTimeout');
  });
  setImmediate(() => {
    console.log('setImmediate inside setTimeout');
  });
}, 0);

setImmediate(() => {
  console.log('setImmediate 1');
  process.nextTick(() => {
    console.log('nextTick inside setImmediate');
  });
  setTimeout(() => {
    console.log('setTimeout inside setImmediate');
  }, 0);
});

process.nextTick(() => {
  console.log('nextTick 1');
  setTimeout(() => {
    console.log('setTimeout inside nextTick');
  }, 0);
  setImmediate(() => {
    console.log('setImmediate inside nextTick');
  });
});

console.log('End');