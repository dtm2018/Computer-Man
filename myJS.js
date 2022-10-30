function dtmWait1s() {
  const date = Date.now();
  let miliSecs = 1000;
  let currentDate = 0;
  alert();
  do {
    currentDate = Date.now();
  } while (currentDate - date < miliSecs);
}
