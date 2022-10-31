var sleep1 = (ms) => {
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}
sleep1(3000);
alert('3 secs');
