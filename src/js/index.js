const { Song, Playlist } = require("./classes.js");

/**
 * Retrieves a list of songs from the Genius API based on a search query
 *
 * @param {string} query - The search query for songs
 * @returns {Promise<Array>} - A Promise that resolves to an array of unique songs matching the search query
 */
function getSongsList(query) {
  // Encode the search query to include special characters
  const encodedName = encodeURIComponent(query);

  // Construct the URL to call the Genius API search endpoint
  const url = `https://genius.com/api/search/songs?q=${encodedName}&limit=10`;

  // Call the Genius API search endpoint and get the response as JSON
  //const response = fetch(url);
  //const jsonResponse = response.json();
  const jsonResponse = {
    meta: { status: 200 },
    response: {
      sections: [
        {
          type: "song",
          hits: [
            {
              highlights: [],
              index: "song",
              type: "song",
              result: {
                _type: "song",
                annotation_count: 26,
                api_path: "/songs/299177",
                artist_names: "Beyoncé (Ft. JAY-Z)",
                full_title: "Drunk in Love by Beyoncé (Ft. JAY-Z)",
                header_image_thumbnail_url:
                  "https://images.genius.com/9dc66306cd3f6d048434600ad9fea747.300x300x1.jpg",
                header_image_url:
                  "https://images.genius.com/9dc66306cd3f6d048434600ad9fea747.1000x1000x1.jpg",
                id: 299177,
                instrumental: false,
                language: "en",
                lyrics_owner_id: 149650,
                lyrics_state: "complete",
                lyrics_updated_at: 1657350739,
                path: "/Beyonce-drunk-in-love-lyrics",
                pyongs_count: 3240,
                relationships_index_url:
                  "https://genius.com/Beyonce-drunk-in-love-sample",
                release_date_components: { year: 2013, month: 12, day: 17 },
                release_date_for_display: "December 17, 2013",
                release_date_with_abbreviated_month_for_display:
                  "Dec. 17, 2013",
                song_art_image_thumbnail_url:
                  "https://images.genius.com/8b5bfe335567fc7673d46ccf72176b2c.300x300x1.png",
                song_art_image_url:
                  "https://images.genius.com/8b5bfe335567fc7673d46ccf72176b2c.800x800x1.png",
                stats: {
                  unreviewed_annotations: 0,
                  hot: false,
                  pageviews: 8495460,
                },
                title: "Drunk in Love",
                title_with_featured: "Drunk in Love (Ft. JAY-Z)",
                updated_by_human_at: 1659660478,
                url: "https://genius.com/Beyonce-drunk-in-love-lyrics",
                featured_artists: [
                  {
                    _type: "artist",
                    api_path: "/artists/2",
                    header_image_url:
                      "https://images.genius.com/57f67753a0fe8ce5ff4a2ab903fbe850.500x301x1.png",
                    id: 2,
                    image_url:
                      "https://images.genius.com/dab4680bbb0569024ef3df3d1e87c277.570x570x1.jpg",
                    index_character: "j",
                    is_meme_verified: true,
                    is_verified: true,
                    name: "JAY-Z",
                    slug: "Jay-z",
                    url: "https://genius.com/artists/Jay-z",
                    iq: 225,
                  },
                ],
                primary_artist: {
                  _type: "artist",
                  api_path: "/artists/498",
                  header_image_url:
                    "https://images.genius.com/e508c24c5293ad1a9596f91e6ca212d1.1000x572x1.jpg",
                  id: 498,
                  image_url:
                    "https://images.genius.com/e5333866d279aeb1b3c8b98028ca33ea.900x900x1.jpg",
                  index_character: "b",
                  is_meme_verified: false,
                  is_verified: false,
                  name: "Beyoncé",
                  slug: "Beyonce",
                  url: "https://genius.com/artists/Beyonce",
                },
              },
            },
            {
              highlights: [],
              index: "song",
              type: "song",
              result: {
                _type: "song",
                annotation_count: 28,
                api_path: "/songs/2263909",
                artist_names: "​gnash (Ft. Olivia O'Brien)",
                full_title:
                  "​i​ hate u, i love u by ​gnash (Ft. Olivia O'Brien)",
                header_image_thumbnail_url:
                  "https://images.genius.com/3577194e7015b076528d4c9dd0cb8115.300x300x1.jpg",
                header_image_url:
                  "https://images.genius.com/3577194e7015b076528d4c9dd0cb8115.1000x1000x1.jpg",
                id: 2263909,
                instrumental: false,
                language: "en",
                lyrics_owner_id: 1998921,
                lyrics_state: "complete",
                lyrics_updated_at: 1637184069,
                path: "/Gnash-i-hate-u-i-love-u-lyrics",
                pyongs_count: 351,
                relationships_index_url:
                  "https://genius.com/Gnash-i-hate-u-i-love-u-sample",
                release_date_components: { year: 2016, month: 2, day: 17 },
                release_date_for_display: "February 17, 2016",
                release_date_with_abbreviated_month_for_display:
                  "Feb. 17, 2016",
                song_art_image_thumbnail_url:
                  "https://images.genius.com/1a9037bc68df98aaa43721f802946c6e.300x300x1.png",
                song_art_image_url:
                  "https://images.genius.com/1a9037bc68df98aaa43721f802946c6e.1000x1000x1.png",
                stats: {
                  unreviewed_annotations: 0,
                  hot: false,
                  pageviews: 6404793,
                },
                title: "​i​ hate u, i love u",
                title_with_featured:
                  "​i​ hate u, i love u (Ft. Olivia O'Brien)",
                updated_by_human_at: 1652733547,
                url: "https://genius.com/Gnash-i-hate-u-i-love-u-lyrics",
                featured_artists: [
                  {
                    _type: "artist",
                    api_path: "/artists/540192",
                    header_image_url:
                      "https://images.genius.com/afd77fc0fad69f25fa80cf642b1124e6.640x640x1.jpg",
                    id: 540192,
                    image_url:
                      "https://images.genius.com/46ce63308d08e978352ed7970d76ebe1.478x478x1.jpg",
                    index_character: "o",
                    is_meme_verified: false,
                    is_verified: true,
                    name: "Olivia O’Brien",
                    slug: "Olivia-obrien",
                    url: "https://genius.com/artists/Olivia-obrien",
                    iq: 3864,
                  },
                ],
                primary_artist: {
                  _type: "artist",
                  api_path: "/artists/48185",
                  header_image_url:
                    "https://images.genius.com/c5970cf8d80b1adf6e1d6d24bf53f3cc.660x660x1.jpg",
                  id: 48185,
                  image_url:
                    "https://images.genius.com/e2b6a7c0df03f490d825b56a9a4e326e.640x640x1.jpg",
                  index_character: "g",
                  is_meme_verified: false,
                  is_verified: true,
                  name: "​gnash",
                  slug: "Gnash",
                  url: "https://genius.com/artists/Gnash",
                  iq: 11520,
                },
              },
            },
            {
              highlights: [],
              index: "song",
              type: "song",
              result: {
                _type: "song",
                annotation_count: 23,
                api_path: "/songs/92464",
                artist_names: "Chief Keef",
                full_title: "Love Sosa by Chief Keef",
                header_image_thumbnail_url:
                  "https://images.genius.com/a839d8d4fa6c1b1c00c9b4e2ad37b811.300x169x1.jpg",
                header_image_url:
                  "https://images.genius.com/a839d8d4fa6c1b1c00c9b4e2ad37b811.1000x563x1.jpg",
                id: 92464,
                instrumental: false,
                language: "en",
                lyrics_owner_id: 468,
                lyrics_state: "complete",
                lyrics_updated_at: 1682381405,
                path: "/Chief-keef-love-sosa-lyrics",
                pyongs_count: 385,
                relationships_index_url:
                  "https://genius.com/Chief-keef-love-sosa-sample",
                release_date_components: { year: 2012, month: 10, day: 18 },
                release_date_for_display: "October 18, 2012",
                release_date_with_abbreviated_month_for_display:
                  "Oct. 18, 2012",
                song_art_image_thumbnail_url:
                  "https://images.genius.com/45653129f1bada90a3803e0abd3e04e7.300x300x1.png",
                song_art_image_url:
                  "https://images.genius.com/45653129f1bada90a3803e0abd3e04e7.800x800x1.png",
                stats: {
                  unreviewed_annotations: 11,
                  concurrents: 7,
                  hot: false,
                  pageviews: 4804489,
                },
                title: "Love Sosa",
                title_with_featured: "Love Sosa",
                updated_by_human_at: 1682381674,
                url: "https://genius.com/Chief-keef-love-sosa-lyrics",
                featured_artists: [],
                primary_artist: {
                  _type: "artist",
                  api_path: "/artists/16808",
                  header_image_url:
                    "https://images.genius.com/4021ba198d32951f29a747ea92c3d57f.1000x333x1.jpg",
                  id: 16808,
                  image_url:
                    "https://images.genius.com/12592b0da715efe0916dd3645763c64a.999x999x1.jpg",
                  index_character: "c",
                  is_meme_verified: true,
                  is_verified: true,
                  name: "Chief Keef",
                  slug: "Chief-keef",
                  url: "https://genius.com/artists/Chief-keef",
                  iq: 2440,
                },
              },
            },
            {
              highlights: [],
              index: "song",
              type: "song",
              result: {
                _type: "song",
                annotation_count: 5,
                api_path: "/songs/3422526",
                artist_names: "Billie Eilish & Khalid",
                full_title: "​lovely by Billie Eilish & Khalid",
                header_image_thumbnail_url:
                  "https://images.genius.com/78d19196547c7db698fe6c01794ea579.300x300x1.jpg",
                header_image_url:
                  "https://images.genius.com/78d19196547c7db698fe6c01794ea579.1000x1000x1.jpg",
                id: 3422526,
                instrumental: false,
                language: "en",
                lyrics_owner_id: 104344,
                lyrics_state: "complete",
                lyrics_updated_at: 1631058407,
                path: "/Billie-eilish-and-khalid-lovely-lyrics",
                pyongs_count: 394,
                relationships_index_url:
                  "https://genius.com/Billie-eilish-and-khalid-lovely-sample",
                release_date_components: { year: 2018, month: 4, day: 19 },
                release_date_for_display: "April 19, 2018",
                release_date_with_abbreviated_month_for_display:
                  "Apr. 19, 2018",
                song_art_image_thumbnail_url:
                  "https://images.genius.com/86a0564f50ede2f0a4c71873484cf2c2.300x300x1.jpg",
                song_art_image_url:
                  "https://images.genius.com/86a0564f50ede2f0a4c71873484cf2c2.1000x1000x1.jpg",
                stats: {
                  unreviewed_annotations: 0,
                  concurrents: 3,
                  hot: false,
                  pageviews: 4302194,
                },
                title: "​lovely",
                title_with_featured: "​lovely",
                updated_by_human_at: 1681389512,
                url: "https://genius.com/Billie-eilish-and-khalid-lovely-lyrics",
                featured_artists: [],
                primary_artist: {
                  _type: "artist",
                  api_path: "/artists/1444143",
                  header_image_url:
                    "https://images.genius.com/3ca082faa8078f214d37670bfc896ecd.922x355x1.png",
                  id: 1444143,
                  image_url:
                    "https://images.genius.com/0102b6996cdc06b7d4040ba8db6477be.603x603x1.png",
                  index_character: "b",
                  is_meme_verified: false,
                  is_verified: false,
                  name: "Billie Eilish & Khalid",
                  slug: "Billie-eilish-and-khalid",
                  url: "https://genius.com/artists/Billie-eilish-and-khalid",
                },
              },
            },
            {
              highlights: [],
              index: "song",
              type: "song",
              result: {
                _type: "song",
                annotation_count: 10,
                api_path: "/songs/2342329",
                artist_names: "Justin Bieber",
                full_title: "Love Yourself by Justin Bieber",
                header_image_thumbnail_url:
                  "https://images.genius.com/ff429a6c7bf8e73717ad263f800f1cf7.300x300x1.jpg",
                header_image_url:
                  "https://images.genius.com/ff429a6c7bf8e73717ad263f800f1cf7.1000x1000x1.jpg",
                id: 2342329,
                instrumental: false,
                language: "en",
                lyrics_owner_id: 172030,
                lyrics_state: "complete",
                lyrics_updated_at: 1673826919,
                path: "/Justin-bieber-love-yourself-lyrics",
                pyongs_count: 150,
                relationships_index_url:
                  "https://genius.com/Justin-bieber-love-yourself-sample",
                release_date_components: { year: 2015, month: 11, day: 13 },
                release_date_for_display: "November 13, 2015",
                release_date_with_abbreviated_month_for_display:
                  "Nov. 13, 2015",
                song_art_image_thumbnail_url:
                  "https://images.genius.com/c48eb30caab693c9a80f49610e2ddb24.300x300x1.png",
                song_art_image_url:
                  "https://images.genius.com/c48eb30caab693c9a80f49610e2ddb24.1000x1000x1.png",
                stats: {
                  unreviewed_annotations: 0,
                  concurrents: 2,
                  hot: false,
                  pageviews: 4258128,
                },
                title: "Love Yourself",
                title_with_featured: "Love Yourself",
                updated_by_human_at: 1673826918,
                url: "https://genius.com/Justin-bieber-love-yourself-lyrics",
                featured_artists: [],
                primary_artist: {
                  _type: "artist",
                  api_path: "/artists/357",
                  header_image_url:
                    "https://images.genius.com/be2c60bdfb3ea6844a46cc5873c75b89.1000x563x1.jpg",
                  id: 357,
                  image_url:
                    "https://images.genius.com/8c95afb142e16e2e053b4384514dc339.938x938x1.png",
                  index_character: "j",
                  is_meme_verified: false,
                  is_verified: true,
                  name: "Justin Bieber",
                  slug: "Justin-bieber",
                  url: "https://genius.com/artists/Justin-bieber",
                  iq: 1533,
                },
              },
            },
            {
              highlights: [],
              index: "song",
              type: "song",
              result: {
                _type: "song",
                annotation_count: 5,
                api_path: "/songs/3182605",
                artist_names: "XXXTENTACION (Ft. Trippie Redd)",
                full_title: "Fuck Love by XXXTENTACION (Ft. Trippie Redd)",
                header_image_thumbnail_url:
                  "https://images.genius.com/3909b41f2c27e688e4caec3637cdba36.300x300x1.png",
                header_image_url:
                  "https://images.genius.com/3909b41f2c27e688e4caec3637cdba36.1000x1000x1.png",
                id: 3182605,
                instrumental: false,
                language: "en",
                lyrics_owner_id: 432937,
                lyrics_state: "complete",
                lyrics_updated_at: 1656283232,
                path: "/Xxxtentacion-fuck-love-lyrics",
                pyongs_count: 417,
                relationships_index_url:
                  "https://genius.com/Xxxtentacion-fuck-love-sample",
                release_date_components: { year: 2017, month: 8, day: 24 },
                release_date_for_display: "August 24, 2017",
                release_date_with_abbreviated_month_for_display:
                  "Aug. 24, 2017",
                song_art_image_thumbnail_url:
                  "https://images.genius.com/3909b41f2c27e688e4caec3637cdba36.300x300x1.png",
                song_art_image_url:
                  "https://images.genius.com/3909b41f2c27e688e4caec3637cdba36.1000x1000x1.png",
                stats: {
                  unreviewed_annotations: 0,
                  concurrents: 2,
                  hot: false,
                  pageviews: 4001386,
                },
                title: "Fuck Love",
                title_with_featured: "Fuck Love (Ft. Trippie Redd)",
                updated_by_human_at: 1678487420,
                url: "https://genius.com/Xxxtentacion-fuck-love-lyrics",
                featured_artists: [
                  {
                    _type: "artist",
                    api_path: "/artists/1086436",
                    header_image_url:
                      "https://images.genius.com/cb8862d96235af8750677d64e92fee5a.1000x667x1.jpg",
                    id: 1086436,
                    image_url:
                      "https://images.genius.com/1f0fcb626715f7bb0d47c9c2e01b7473.1000x1000x1.jpg",
                    index_character: "t",
                    is_meme_verified: false,
                    is_verified: true,
                    name: "Trippie Redd",
                    slug: "Trippie-redd",
                    url: "https://genius.com/artists/Trippie-redd",
                    iq: 7274,
                  },
                ],
                primary_artist: {
                  _type: "artist",
                  api_path: "/artists/396565",
                  header_image_url:
                    "https://images.genius.com/83281176c66e39feea1b35f435388edb.1000x333x1.jpg",
                  id: 396565,
                  image_url:
                    "https://images.genius.com/7337afb84752ce941b08f860be07a13d.548x548x1.jpg",
                  index_character: "x",
                  is_meme_verified: false,
                  is_verified: true,
                  name: "XXXTENTACION",
                  slug: "Xxxtentacion",
                  url: "https://genius.com/artists/Xxxtentacion",
                  iq: 364,
                },
              },
            },
            {
              highlights: [],
              index: "song",
              type: "song",
              result: {
                _type: "song",
                annotation_count: 21,
                api_path: "/songs/3047141",
                artist_names: "Kendrick Lamar (Ft. Zacari)",
                full_title: "LOVE. by Kendrick Lamar (Ft. Zacari)",
                header_image_thumbnail_url:
                  "https://images.genius.com/bee6665429a0ab8173957a1bf2ca7a95.300x145x1.png",
                header_image_url:
                  "https://images.genius.com/bee6665429a0ab8173957a1bf2ca7a95.618x298x1.png",
                id: 3047141,
                instrumental: false,
                language: "en",
                lyrics_owner_id: 389740,
                lyrics_state: "complete",
                lyrics_updated_at: 1669407755,
                path: "/Kendrick-lamar-love-lyrics",
                pyongs_count: 274,
                relationships_index_url:
                  "https://genius.com/Kendrick-lamar-love-sample",
                release_date_components: { year: 2017, month: 4, day: 14 },
                release_date_for_display: "April 14, 2017",
                release_date_with_abbreviated_month_for_display:
                  "Apr. 14, 2017",
                song_art_image_thumbnail_url:
                  "https://images.genius.com/66e5fceba3208f82a426c04e791b62cf.300x300x1.png",
                song_art_image_url:
                  "https://images.genius.com/66e5fceba3208f82a426c04e791b62cf.600x600x1.png",
                stats: {
                  unreviewed_annotations: 4,
                  concurrents: 3,
                  hot: false,
                  pageviews: 4039125,
                },
                title: "LOVE.",
                title_with_featured: "LOVE. (Ft. Zacari)",
                updated_by_human_at: 1669671943,
                url: "https://genius.com/Kendrick-lamar-love-lyrics",
                featured_artists: [
                  {
                    _type: "artist",
                    api_path: "/artists/526832",
                    header_image_url:
                      "https://images.genius.com/231f731ccce29439954154b729a30548.1000x388x1.jpg",
                    id: 526832,
                    image_url:
                      "https://images.genius.com/fed6bafb2a3cff5ed258c4c2ff31cdac.391x391x1.png",
                    index_character: "z",
                    is_meme_verified: false,
                    is_verified: true,
                    name: "Zacari",
                    slug: "Zacari",
                    url: "https://genius.com/artists/Zacari",
                    iq: 5570,
                  },
                ],
                primary_artist: {
                  _type: "artist",
                  api_path: "/artists/1421",
                  header_image_url:
                    "https://images.genius.com/3514a6d32afe88c48f22263e303f55d0.1000x601x1.jpg",
                  id: 1421,
                  image_url:
                    "https://images.genius.com/d6d96651b423fa5a83c38ee2a4c6c939.1000x1000x1.jpg",
                  index_character: "k",
                  is_meme_verified: true,
                  is_verified: true,
                  name: "Kendrick Lamar",
                  slug: "Kendrick-lamar",
                  url: "https://genius.com/artists/Kendrick-lamar",
                  iq: 54509,
                },
              },
            },
            {
              highlights: [],
              index: "song",
              type: "song",
              result: {
                _type: "song",
                annotation_count: 5,
                api_path: "/songs/2890553",
                artist_names: "Drake",
                full_title: "Fake Love by Drake",
                header_image_thumbnail_url:
                  "https://images.genius.com/ba45a8086a709c65ed46461931e2ea43.300x199x1.jpg",
                header_image_url:
                  "https://images.genius.com/ba45a8086a709c65ed46461931e2ea43.1000x664x1.jpg",
                id: 2890553,
                instrumental: false,
                language: "en",
                lyrics_owner_id: 672397,
                lyrics_state: "complete",
                lyrics_updated_at: 1617382219,
                path: "/Drake-fake-love-lyrics",
                pyongs_count: 193,
                relationships_index_url:
                  "https://genius.com/Drake-fake-love-sample",
                release_date_components: { year: 2016, month: 10, day: 23 },
                release_date_for_display: "October 23, 2016",
                release_date_with_abbreviated_month_for_display:
                  "Oct. 23, 2016",
                song_art_image_thumbnail_url:
                  "https://images.genius.com/ff88109f9d46d61f0bccf0ebb3b65d96.300x300x1.png",
                song_art_image_url:
                  "https://images.genius.com/ff88109f9d46d61f0bccf0ebb3b65d96.1000x1000x1.png",
                stats: {
                  unreviewed_annotations: 0,
                  hot: false,
                  pageviews: 3775915,
                },
                title: "Fake Love",
                title_with_featured: "Fake Love",
                updated_by_human_at: 1657704149,
                url: "https://genius.com/Drake-fake-love-lyrics",
                featured_artists: [],
                primary_artist: {
                  _type: "artist",
                  api_path: "/artists/130",
                  header_image_url:
                    "https://images.genius.com/50b41d1da8dfd60548a6c9f2afa9b1b1.480x270x54.gif",
                  id: 130,
                  image_url:
                    "https://images.genius.com/4e793216ac5eb88b8e8b7fc11b2e6521.548x548x1.jpg",
                  index_character: "d",
                  is_meme_verified: false,
                  is_verified: false,
                  name: "Drake",
                  slug: "Drake",
                  url: "https://genius.com/artists/Drake",
                },
              },
            },
            {
              highlights: [],
              index: "song",
              type: "song",
              result: {
                _type: "song",
                annotation_count: 42,
                api_path: "/songs/81672",
                artist_names: "Macklemore & Ryan Lewis (Ft. Mary Lambert)",
                full_title:
                  "Same Love by Macklemore & Ryan Lewis (Ft. Mary Lambert)",
                header_image_thumbnail_url:
                  "https://images.rapgenius.com/84mo7jurwko1n48l8x01m5mw8.300x300x1.jpg",
                header_image_url:
                  "https://images.rapgenius.com/84mo7jurwko1n48l8x01m5mw8.730x730x1.jpg",
                id: 81672,
                instrumental: false,
                language: "en",
                lyrics_owner_id: 44072,
                lyrics_state: "complete",
                lyrics_updated_at: 1664507529,
                path: "/Macklemore-and-ryan-lewis-same-love-lyrics",
                pyongs_count: 231,
                relationships_index_url:
                  "https://genius.com/Macklemore-and-ryan-lewis-same-love-sample",
                release_date_components: { year: 2012, month: 7, day: 18 },
                release_date_for_display: "July 18, 2012",
                release_date_with_abbreviated_month_for_display:
                  "Jul. 18, 2012",
                song_art_image_thumbnail_url:
                  "https://images.rapgenius.com/6edc45e919a44fc4d1f9786d4ff073a9.300x300x1.jpg",
                song_art_image_url:
                  "https://images.rapgenius.com/6edc45e919a44fc4d1f9786d4ff073a9.1000x1000x1.jpg",
                stats: {
                  unreviewed_annotations: 1,
                  hot: false,
                  pageviews: 3651970,
                },
                title: "Same Love",
                title_with_featured: "Same Love (Ft. Mary Lambert)",
                updated_by_human_at: 1671500568,
                url: "https://genius.com/Macklemore-and-ryan-lewis-same-love-lyrics",
                featured_artists: [
                  {
                    _type: "artist",
                    api_path: "/artists/22717",
                    header_image_url:
                      "https://images.genius.com/4aec3bddc55079826cba3775ec45dc79.400x400x1.jpg",
                    id: 22717,
                    image_url:
                      "https://images.genius.com/4aec3bddc55079826cba3775ec45dc79.400x400x1.jpg",
                    index_character: "m",
                    is_meme_verified: false,
                    is_verified: false,
                    name: "Mary Lambert",
                    slug: "Mary-lambert",
                    url: "https://genius.com/artists/Mary-lambert",
                  },
                ],
                primary_artist: {
                  _type: "artist",
                  api_path: "/artists/2525",
                  header_image_url:
                    "https://images.genius.com/3f619f317557a048f0f2d068aab8157f.480x480x1.jpg",
                  id: 2525,
                  image_url:
                    "https://images.genius.com/3f619f317557a048f0f2d068aab8157f.480x480x1.jpg",
                  index_character: "m",
                  is_meme_verified: false,
                  is_verified: false,
                  name: "Macklemore & Ryan Lewis",
                  slug: "Macklemore-and-ryan-lewis",
                  url: "https://genius.com/artists/Macklemore-and-ryan-lewis",
                },
              },
            },
            {
              highlights: [],
              index: "song",
              type: "song",
              result: {
                _type: "song",
                annotation_count: 13,
                api_path: "/songs/3944360",
                artist_names: "Lil Pump & Kanye West (Ft. Adele Givens)",
                full_title:
                  "I Love It by Lil Pump & Kanye West (Ft. Adele Givens)",
                header_image_thumbnail_url:
                  "https://images.genius.com/8b95f4c24d85c1e478b5d4ee74a06fcf.300x300x1.png",
                header_image_url:
                  "https://images.genius.com/8b95f4c24d85c1e478b5d4ee74a06fcf.1000x1000x1.png",
                id: 3944360,
                instrumental: false,
                language: "en",
                lyrics_owner_id: 104344,
                lyrics_state: "complete",
                lyrics_updated_at: 1649401193,
                path: "/Lil-pump-and-kanye-west-i-love-it-lyrics",
                pyongs_count: 202,
                relationships_index_url:
                  "https://genius.com/Lil-pump-and-kanye-west-i-love-it-sample",
                release_date_components: { year: 2018, month: 9, day: 6 },
                release_date_for_display: "September 6, 2018",
                release_date_with_abbreviated_month_for_display: "Sep. 6, 2018",
                song_art_image_thumbnail_url:
                  "https://images.genius.com/8b95f4c24d85c1e478b5d4ee74a06fcf.300x300x1.png",
                song_art_image_url:
                  "https://images.genius.com/8b95f4c24d85c1e478b5d4ee74a06fcf.1000x1000x1.png",
                stats: {
                  unreviewed_annotations: 0,
                  hot: false,
                  pageviews: 3549536,
                },
                title: "I Love It",
                title_with_featured: "I Love It (Ft. Adele Givens)",
                updated_by_human_at: 1651668019,
                url: "https://genius.com/Lil-pump-and-kanye-west-i-love-it-lyrics",
                featured_artists: [
                  {
                    _type: "artist",
                    api_path: "/artists/1572771",
                    header_image_url:
                      "https://images.genius.com/5e34481d48cb4e61a026a78ec4a98ae8.690x690x1.jpg",
                    id: 1572771,
                    image_url:
                      "https://images.genius.com/5e34481d48cb4e61a026a78ec4a98ae8.690x690x1.jpg",
                    index_character: "a",
                    is_meme_verified: false,
                    is_verified: false,
                    name: "Adele Givens",
                    slug: "Adele-givens",
                    url: "https://genius.com/artists/Adele-givens",
                  },
                ],
                primary_artist: {
                  _type: "artist",
                  api_path: "/artists/1572772",
                  header_image_url:
                    "https://images.genius.com/b859cd9b398a23e52dd4987704166516.634x439x1.jpg",
                  id: 1572772,
                  image_url:
                    "https://images.genius.com/18deb36224ce8eb66e0bcc45d5d1a8ba.800x800x1.jpg",
                  index_character: "l",
                  is_meme_verified: false,
                  is_verified: false,
                  name: "Lil Pump & Kanye West",
                  slug: "Lil-pump-and-kanye-west",
                  url: "https://genius.com/artists/Lil-pump-and-kanye-west",
                },
              },
            },
          ],
        },
      ],
      next_page: 2,
    },
  };

  console.log(jsonResponse);

  // Extract the songs from the response and map them to a new object with just their name and ID
  return jsonResponse.response.sections[0].hits.map(
    (song) =>
      new Song(
        song.result.title,
        song.result.artist_names,
        song.result.song_art_image_url
      )
  );
}

async function buttonTrigger(clickEvent) {
  console.log(clickEvent);

  const playlistTracklistElem = document.querySelector(".playlist>.tracklist");

  // Search for the parent with the class "song-results-option"
  let songElem = clickEvent.target.parentNode;
  while (songElem && songElem.className !== "song-results-option") {
    songElem = songElem.parentNode;
  }

  const addCase = songElem.querySelector(".song-add-btn");

  if (addCase) {
    const results = songElem.parentNode;
    results.removeChild(songElem);

    const svg = songElem.querySelector("svg");
    svg.parentNode.className = "song-remove-btn";
    svg.setAttribute("viewBox", "0 0 1024 1024");
    const path = svg.querySelector("g>path");
    path.setAttribute(
      "d",
      "M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-896C299.968 128 128 299.968 128 512s171.968 384 384 384 384-171.968 384-384S724.032 128 512 128z m192 448H320a64 64 0 1 1 0-128h384a64 64 0 0 1 64 64c0 35.392-28.608 64-64 64z"
    );

    playlistTracklistElem.append(songElem);
  } else {
    playlistTracklistElem.removeChild(songElem);
  }

  // update the playlist cookie (take into account that it might not exist yet)
  const cookies = document.cookie.split(";");
  let playlist = null;
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("playlist=")) {
      playlist = JSON.parse(cookie.split("=")[1]);
      break;
    }
  }

  console.log(cookies);
  console.log(playlist);

  if (!playlist) {
    playlist = { songs: [] };
  }

  const song = new Song(
    songElem.querySelector(".song-name").innerText,
    songElem.querySelector(".song-artists").innerText,
    songElem.querySelector(".song-image").src
  );

  if (addCase) {
    playlist.songs.push(song);
  } else {
    playlist.songs = playlist.songs.filter(
      (playlistSong) =>
        playlistSong.title !== song.title &&
        playlistSong.artists !== song.artists
    );
  }

  document.cookie = `playlist=${JSON.stringify(playlist)};max-age=86400`;

  console.log(document.cookie.split(";"));
  console.log(playlist);
}

document.addEventListener("DOMContentLoaded", () => {
  const cookies = document.cookie.split(";");
  let playlist = null;
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("playlist=")) {
      playlist = JSON.parse(cookie.split("=")[1]);
      break;
    }
  }

  if (playlist) {
    const songs = playlist.songs;
    const uniqueSongs = [];
    console.log(songs);
    songs.forEach((song) => {
      if (
        !uniqueSongs.find(
          (uniqueSong) =>
            uniqueSong.title === song.title &&
            uniqueSong.artists === song.artists
        )
      ) {
        uniqueSongs.push(song);
      }
    });

    playlist.songs = uniqueSongs;
    console.log(playlist);

    const playlistTracklistElem = document.querySelector(
      ".playlist>.tracklist"
    );
    playlist.songs.forEach((song) => {
      const songObj = new Song(song.title, song.artists, song.coverart);
      const songElem = songObj.toHTML(false);
      console.log(songElem);
      songElem
        .querySelector(".song-remove-btn>svg")
        .addEventListener("click", buttonTrigger);

      // check if the song is already in the playlist
      if (
        !playlistTracklistElem.querySelector(
          `[data-title="${song.title}"][data-artists="${song.artists}"]`
        )
      ) {
        playlistTracklistElem.appendChild(songElem);
      }
    });

    console.log(playlist);
    document.cookie = `playlist=${JSON.stringify(playlist)};max-age=86400`;
  }

  const songInput = document.querySelector(".search-input");

  if (songInput) {
    songInput.addEventListener("input", async (event) => {
      let songsList = await getSongsList(event.target.value);
      console.log(songsList);
      songsList.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        if (a.artists < b.artists) {
          return -1;
        }
        if (a.artists > b.artists) {
          return 1;
        }
        return 0;
      });
      const playlistTracklistElem = document.querySelector(
        ".playlist>.tracklist"
      );
      songsList = songsList.filter(
        (song) =>
          !playlistTracklistElem.querySelector(
            `[data-title="${song.title}"][data-artists="${song.artists}"]`
          )
      );
      const resultsContainer = document.querySelector(".results");
      resultsContainer.innerHTML = "";
      songsList.forEach((song) => {
        const songElem = song.toHTML(true);
        resultsContainer.appendChild(songElem);
        songElem
          .querySelector(".song-results-option>.song-add-btn>svg")
          .addEventListener("click", buttonTrigger);
      });
    });
  }
});
