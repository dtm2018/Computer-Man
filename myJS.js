function dtmWait1s() {
  const date = Date.now();
  let miliSecs = 4000;
  let currentDate = 0;
  
  alert('dana');
  
  do {
    currentDate = Date.now();
  } while (currentDate - date < miliSecs);
}
