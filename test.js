let db = require("./utils/database");

let Artist = {
  name: "tenkitsune",
  desc:
    "Trịnh Nhật Quang, better known as Tenkitsune, is a 22-year-old producer born and raised in Vietnam whose extensive credits include work with such groups as FOGPAK, Tiny Waves, the Tokyo-based TREKKIE TRAX, and Warner Music Group. Having taken the SoundCloud world by storm, Tenkitsune’s rise to global recognition as a prominent figure in the forward-thinking melodic electronic music scene has only just begun. With his releases like 'Animal Friends' and 'Kittens Express,' Tenkitsune has amassed millions of plays through various labels and promotional channels worldwide, paving the way for future bass producers everywhere.",
  img:
    "https://todmg.club/static/385cff5500ccbe252519a7d3eeccf0d9/44d11/tenkitsune.jpg",
  tags: ["tenkitsune"],
};

setTimeout(() => {
  db.add.Artist(Artist).then((r) => console.log(r));
}, 1000 * 2);
