function dtmWait1s() {
  const date = Date.now();
  let miliSecs = 2000;
  let currentDate = 0;
  
  do {
    currentDate = Date.now();
  } while (currentDate - date < miliSecs);
}
