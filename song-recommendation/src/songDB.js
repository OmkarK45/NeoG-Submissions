const songDB = {
  Rock: [
    {
      name: "Nadaan Parinde",
      album: "Rockstar",
      year: 2011,
      rating: 4.7,
      link:
        "https://open.spotify.com/track/6Z394Nd4gW6Ts9hmu3NUjx?si=-Bx_cBjFSLG2j3G9Xn_aFw",
    },
    {
      name: "Ride",
      album: "Blurryface",
      year: 2015,
      rating: 4.9,
      link:
        "https://open.spotify.com/track/2Z8WuEywRWYTKe1NybPQEW?si=i_XYTP-rTUOzatpPOmlypw",
    },
    {
      name: "Bang Bang",
      album: "Bang Bang (Original Motion Picture Soundtrack)",
      year: 2014,
      rating: 4.2,
      link:
        "https://open.spotify.com/track/5R7HpWXej6SiCrd9YJsC5g?si=1jUWORa6TmqhkH40h8seBQ",
    },
    {
      name: "Zinda",
      album: "Bhaag Milkha Bhaag",
      year: 2013,
      rating: 4.3,
      link:
        "https://open.spotify.com/track/7vZz8oJ5qAqB9MghufRK5k?si=e3dy1F3kT8-Myzm2HWqdxg",
    },
    {
      name: "Tere Bin",
      album: "Bas Ek Pal",
      year: 2006,
      rating: 4.9,
      link:
        "https://open.spotify.com/track/3DpedytYku64Hjf51064vO?si=6wCOE5HGS0OZWRACzXDKhQ",
    },
    {
      name: "Peheli Nazar Mein",
      album: "Race",
      year: 2008,
      rating: 4.4,
      link:
        "https://open.spotify.com/track/17opN752ZQpNuoptelsNQ1?si=X9A1xFVcTHKNVjhvuagrQw",
    },
    {
      name: "Bhula Dena",
      album: "Aashiqui 2",
      year: 2013,
      rating: 4.3,
      link:
        "https://open.spotify.com/track/0WNCYgCd33LnBnw22WFuq8?si=RKOZMWEBT4yP4_0LRXdxZA",
    },
  ],
  Pop: [
    {
      name: "Uptown Funk",
      album: "Uptown Special",
      year: 2014,
      rating: 4.7,
      link:
        "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS?si=I3z5gQ7JSGi8Igkv_tRGlQ",
    },
    {
      name: "Old Town Road",
      album: "7",
      year: 2019,
      rating: 4.7,
      link:
        "https://open.spotify.com/track/0F7FA14euOIX8KcbEturGH?si=FtzhpPBaSUuc6RbllWis5w",
    },
    {
      name: "Señorita",
      album: "Shawn Mendes",
      year: 2018,
      rating: 4.5,
      link:
        "https://open.spotify.com/track/0TK2YIli7K1leLovkQiNik?si=RyK0lMb5ScOIq_Eopro1iA",
    },
    {
      name: "Levitating (ft. DaBaby)",
      album: "Levitating (ft. DaBaby)",
      year: 2020,
      rating: 4.7,
      link:
        "https://open.spotify.com/track/463CkQjx2Zk1yXoBuierM9?si=ydLJ4UKwTrmGszg-wUxI1w",
    },
    {
      name: "Dynamite",
      album: "Dynamite (DayTime version)",
      year: 2020,
      rating: 4.8,
      link:
        "https://open.spotify.com/track/0t1kP63rueHleOhQkYSXFY?si=NqOzz9v4SFav6DhZSWjjOA",
    },
    {
      name: "In your eyes",
      album: "After Hours",
      year: 2020,
      rating: 5,
      link:
        "https://open.spotify.com/track/7szuecWAPwGoV1e5vGu8tl?si=hNg1jD8QQw6wi1qrRlSYKQ",
    },
    {
      name: "Save Your Tears",
      album: "After Hours",
      year: 2020,
      rating: 4.9,
      link:
        "https://open.spotify.com/track/5QO79kh1waicV47BqGRL3g?si=o75eM0aoQ7KBE49xu7YMfQ",
    },
  ],
  Rap: [
    {
      name: "Lose Yourself",
      album: "8 Mile",
      year: 2002,
      rating: 5,
      link:
        "https://open.spotify.com/track/7MJQ9Nfxzh8LPZ9e9u68Fq?si=U2GKYmvdTuOT2FdKm3tXfQ",
    },
    {
      name: "In da club",
      album: "50 Cent",
      year: 2003,
      rating: 4.4,
      link:
        "https://open.spotify.com/track/7iL6o9tox1zgHpKUfh9vuC?si=tSAmwy_JTz6UWO8de0v2cg",
    },
    {
      name: "Rap God",
      album: "The Marshall Mathers LP2",
      year: 2013,
      rating: 5,
      link:
        "https://open.spotify.com/track/6or1bKJiZ06IlK0vFvY75k?si=8QjmLw5TTmW1EXYCTTsNwg",
    },
  ],
  EDM: [
    {
      name: "Wake Me Up",
      album: "True",
      year: 2013,
      rating: 4.9,
      link:
        "https://open.spotify.com/track/0nrRP2bk19rLc0orkWPQk2?si=fPQ85OYsQZGoG_p8baRKBg",
    },
    {
      name: "Closer",
      album: "Collage",
      year: 2016,
      rating: 5,
      link:
        "https://open.spotify.com/track/7BKLCZ1jbUBVqRi2FVlTVw?si=p5wYXUzJTLyrPHC7dy0gJw",
    },
    {
      name: "Lean On",
      album: "Love is the mission",
      year: 2015,
      rating: 5,
      link:
        "https://open.spotify.com/track/1Lim1Py7xBgbAkAys3AGAG?si=yEuQwPlwQ-WxDmBvrehOvg",
    },
    {
      name: "Don't Let Me Down",
      album: "Collage",
      year: 2013,
      rating: 4.9,
      link:
        "https://open.spotify.com/track/1i1fxkWeaMmKEB4T7zqbzK?si=xipsfKEmTuek6q21PfGVxg",
    },
    {
      name: "In The Name of Love",
      album: "In The Name of Love",
      year: 2016,
      rating: 4.7,
      link:
        "https://open.spotify.com/track/23L5CiUhw2jV1OIMwthR3S?si=0lcmrt48SMKp0ibwl5U7FQ",
    },
    {
      name: "Alone",
      album: "Alone",
      year: 2016,
      rating: 4.8,
      link:
        "https://open.spotify.com/track/12mGwph2YzDIlChtq3EdXP?si=QmFHw606QjmdsQJSZ834rA",
    },
    {
      name: "Faded",
      album: "Faded",
      year: 2015,
      rating: 4.5,
      link:
        "https://open.spotify.com/track/7gHs73wELdeycvS48JfIos?si=JBivyfOQREmtc0pRfai5mQ",
    },
  ],
};
export default songDB;
