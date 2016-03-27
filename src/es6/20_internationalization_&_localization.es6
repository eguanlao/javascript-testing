// Collation
/*{
  // in German,  "ä" sorts with "a"
  // in Swedish, "ä" sorts after "z"
  var list = [ "ä", "a", "z" ];
  var i10nDE = new Intl.Collator("de");
  var i10nSV = new Intl.Collator("sv");
  assert(i10nDE.compare("ä", "z") === -1);
  assert(i10nSV.compare("ä", "z") === +1);
  assert.deepEqual(list.sort(i10nDE.compare), ["a", "ä", "z"]);
  assert.deepEqual(list.sort(i10nSV.compare), ["a", "z", "ä"]);
}*/
