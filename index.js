function tasKagitMakas(secim) {
  /* kodlar buraya */
  let num = Math.floor(Math.random() * 3);
  let random;
  if (num === 1) {
    random = 'kağıt';
  } else if (num === 2) {
    random = 'makas';
  } else {
    random = 'taş';
  }

  if (random === secim) {
    return (
      'Senin seçimin: ' +
      secim +
      '. Bilgisayarın seçimi: ' +
      random +
      '. Beraberlik!'
    );
  }
  if (
    (secim === 'taş' && random === 'makas') ||
    (secim === 'kağıt' && random === 'taş') ||
    (secim === 'makas' && random === 'kağıt')
  ) {
    return (
      'Senin seçimin: ' +
      secim +
      '. Bilgisayarın seçimi: ' +
      random +
      '. Kazandın!'
    );
  } else {
    return (
      'Senin seçimin: ' +
      secim +
      '. Bilgisayarın seçimi: ' +
      random +
      '. Kaybettin!'
    );
  }
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = tasKagitMakas;
