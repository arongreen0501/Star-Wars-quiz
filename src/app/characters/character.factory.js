(function() {

    angular
        .module("app.characters")
        .factory("DataService", DataService);

        function DataService() {
            var dataObj = {
                characterData: characterData
            };

            return dataObj;
        }

        //API frá swapi.com, sniðinn að okkar þörfum..

        var characterData = [

        {
          "name": "Luke Skywalker",
          "height": "172",
          "weight": "77",
          "hair": "blonde",
          "eyes": "blue",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "bilprof"
        },
        {
          "name": "C-3PO",
          "height": "167",
          "weight": "75",
          "hair": "other",
          "eyes": "grayblue",
          "gender": "other",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "R2-D2",
          "height": "96",
          "weight": "32",
          "hair": "other",
          "eyes": "brown",
          "gender": "other",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Darth Vader",
          "height": "202",
          "weight": "136",
          "hair": "other",
          "eyes": "grayblue",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "bilprof"
        },
        {
          "name": "Princess Leia",
          "height": "150",
          "weight": "49",
          "hair": "brown",
          "eyes": "brown",
          "gender": "female",
          "residence": "reykjavik",
          "drive": "bilprof"
        },
        {
          "name": "Owen Lars",
          "height": "178",
          "weight": "120",
          "hair": "brown",
          "eyes": "blue",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Beru Whitesun lars",
          "height": "165",
          "weight": "75",
          "hair": "brown",
          "eyes": "blue",
          "gender": "female",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "R5-D4",
          "height": "97",
          "weight": "32",
          "hair": "other",
          "eyes": "brown",
          "gender": "other",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Biggs Darklighter",
          "height": "183",
          "weight": "84",
          "hair": "black",
          "eyes": "brown",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "bilprof"
        },
        {
          "name": "Obi-Wan Kenobi",
          "height": "182",
          "weight": "77",
          "hair": "gray",
          "eyes": "grayblue",
          "gender": "male",
          "residence": "sudvestur",
          "drive": "bilprof"
        },
        {
          "name": "Anakin Skywalker",
          "height": "188",
          "weight": "84",
          "hair": "blonde",
          "eyes": "blue",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "bilprof"
        },
        {
          "name": "Wilhuff Tarkin",
          "height": "180",
          "weight": "70",
          "hair": "gray",
          "eyes": "blue",
          "gender": "male",
          "residence": "sudvestur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Chewbacca",
          "height": "228",
          "weight": "112",
          "hair": "brown",
          "eyes": "blue",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "bilprof"
        },
        {
          "name": "Han Solo",
          "height": "180",
          "weight": "80",
          "hair": "brown",
          "eyes": "brown",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "bilprof"
        },
        {
          "name": "Greedo",
          "height": "173",
          "weight": "74",
          "hair": "other",
          "eyes": "brown",
          "gender": "male",
          "residence": "sudvestur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Jabba the Hutt",
          "height": "175",
          "weight": "1358",
          "hair": "other",
          "eyes": "lightbrown",
          "gender": "other",
          "residence": "sudvestur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Wedge Antilles",
          "height": "170",
          "weight": "77",
          "hair": "brown",
          "eyes": "lightbrown",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "bilprof"
        },
        {
          "name": "Jek Tono Porkins",
          "height": "180",
          "weight": "110",
          "hair": "brown",
          "eyes": "blue",
          "gender": "male",
          "residence": "sudvestur",
          "drive": "bilprof"
        },
        {
          "name": "Yoda",
          "height": "66",
          "weight": "17",
          "hair": "gray",
          "eyes": "brown",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Sheev Palpatine",
          "height": "170",
          "weight": "75",
          "hair": "gray",
          "eyes": "grayblue",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },

        {
          "name": "Boba Fett",
          "height": "183",
          "weight": "78",
          "hair": "black",
          "eyes": "brown",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "bilprof"
        },
        {
          "name": "IG-88",
          "height": "200",
          "weight": "140",
          "hair": "other",
          "eyes": "brown",
          "gender": "other",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Bossk",
          "height": "190",
          "weight": "113",
          "hair": "other",
          "eyes": "brown",
          "gender": "male",
          "residence": "sudvestur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Lando Calrissian",
          "height": "177",
          "weight": "79",
          "hair": "black",
          "eyes": "brown",
          "gender": "male",
          "residence": "sudvestur",
          "drive": "bilprof"
        },
        {
          "name": "Ackbar",
          "height": "180",
          "weight": "83",
          "hair": "other",
          "eyes": "lightbrown",
          "gender": "male",
          "residence": "sudvestur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Mon Mothma",
          "height": "150",
          "weight": "65",
          "hair": "red",
          "eyes": "blue",
          "gender": "female",
          "residence": "sudvestur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Arvel Crynyd",
          "height": "167",
          "weight": "72",
          "hair": "brown",
          "eyes": "brown",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "bilprof"
        },
        {
          "name": "Wicket Wystri Warrick",
          "height": "88",
          "weight": "20",
          "hair": "brown",
          "eyes": "brown",
          "gender": "male",
          "residence": "sudvestur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Nien Nunb",
          "height": "160",
          "weight": "68",
          "hair": "other",
          "eyes": "brown",
          "gender": "male",
          "residence": "sudvestur",
          "drive": "bilprof"
        },


        {
          "name": "Qui-Gon Jinn",
          "height": "193",
          "weight": "89",
          "hair": "brown",
          "eyes": "blue",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "bilprof"
        },
        {
          "name": "Nute Gunray",
          "height": "191",
          "weight": "90",
          "hair": "other",
          "eyes": "brown",
          "gender": "male",
          "residence": "nordvestur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Finis Valorum",
          "height": "170",
          "weight": "73",
          "hair": "blonde",
          "eyes": "blue",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Jar Jar Binks",
          "height": "196",
          "weight": "66",
          "hair": "other",
          "eyes": "lightbrown",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Roos Tarpals",
          "height": "224",
          "weight": "82",
          "hair": "other",
          "eyes": "lightbrown",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Rugor Nass",
          "height": "206",
          "weight": "180",
          "hair": "other",
          "eyes": "lightbrown",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Ric Olié",
          "height": "183",
          "weight": "82",
          "hair": "brown",
          "eyes": "blue",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "bilprof"
        },
        {
          "name": "Watto",
          "height": "137",
          "weight": "50",
          "hair": "black",
          "eyes": "grayblue",
          "gender": "male",
          "residence": "nordvestur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Sebulba",
          "height": "112",
          "weight": "40",
          "hair": "other",
          "eyes": "lightbrown",
          "gender": "male",
          "residence": "nordvestur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Quarsh Panaka",
          "height": "183",
          "weight": "81",
          "hair": "black",
          "eyes": "brown",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },

        {
          "name": "Shmi Skywalker",
          "height": "163",
          "weight": "64",
          "hair": "black",
          "eyes": "brown",
          "gender": "female",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Darth Maul",
          "height": "175",
          "weight": "80",
          "hair": "other",
          "eyes": "grayblue",
          "gender": "male",
          "residence": "nordvestur",
          "drive": "bilprof"
        },
        {
          "name": "Bib Fortuna",
          "height": "180",
          "weight": "91",
          "hair": "other",
          "eyes": "lightbrown",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Ayla Secura",
          "height": "178",
          "weight": "55",
          "hair": "other",
          "eyes": "lightbrown",
          "gender": "female",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Ratts Tyerel",
          "height": "79",
          "weight": "15",
          "hair": "other",
          "eyes": "other",
          "gender": "male",
          "residence": "nordaustur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Gasgano",
          "height": "122",
          "weight": "31",
          "hair": "other",
          "eyes": "brown",
          "gender": "male",
          "residence": "nordaustur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Mace Windu",
          "height": "188",
          "weight": "84",
          "hair": "other",
          "eyes": "brown",
          "gender": "male",
          "residence": "nordvestur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Ki-Adi-Mundi",
          "height": "198",
          "weight": "82",
          "hair": "gray",
          "eyes": "grayblue",
          "gender": "male",
          "residence": "nordvestur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Eeth Koth",
          "height": "171",
          "weight": "77",
          "hair": "black",
          "eyes": "brown",
          "gender": "male",
          "residence": "sudur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Adi Gallia",
          "height": "184",
          "weight": "50",
          "hair": "other",
          "eyes": "blue",
          "gender": "female",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Saesee Tiin",
          "height": "188",
          "weight": "86",
          "hair": "other",
          "eyes": "lightbrown",
          "gender": "male",
          "residence": "sudur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Yarael Poof",
          "height": "264",
          "weight": "98",
          "hair": "other",
          "eyes": "grayblue",
          "gender": "male",
          "residence": "sudur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Mas Amedda",
          "height": "196",
          "weight": "103",
          "hair": "other",
          "eyes": "blue",
          "gender": "male",
          "residence": "sudvestur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Gregar Typho",
          "height": "185",
          "weight": "85",
          "hair": "black",
          "eyes": "brown",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "bilprof"
        },
        {
          "name": "Cordé",
          "height": "157",
          "weight": "52",
          "hair": "brown",
          "eyes": "brown",
          "gender": "female",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Cliegg Lars",
          "height": "183",
          "weight": "87",
          "hair": "brown",
          "eyes": "blue",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },

        {
          "name": "Poggle the Lesser",
          "height": "183",
          "weight": "80",
          "hair": "other",
          "eyes": "grayblue",
          "gender": "male",
          "residence": "sudvestur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Barriss Offee",
          "height": "166",
          "weight": "50",
          "hair": "black",
          "eyes": "blue",
          "gender": "female",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Dormé",
          "height": "165",
          "weight": "45",
          "hair": "brown",
          "eyes": "brown",
          "gender": "female",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Count Dooku",
          "height": "193",
          "weight": "80",
          "hair": "gray",
          "eyes": "brown",
          "gender": "male",
          "residence": "sudvestur",
          "drive": "bilprof"
        },
        {
          "name": "Bail Prestor Organa",
          "height": "191",
          "weight": "84",
          "hair": "black",
          "eyes": "brown",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Jango Fett",
          "height": "183",
          "weight": "79",
          "hair": "black",
          "eyes": "brown",
          "gender": "male",
          "residence": "sudvestur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Zam Wesell",
          "height": "168",
          "weight": "55",
          "hair": "blonde",
          "eyes": "grayblue",
          "gender": "female",
          "residence": "sudur",
          "drive": "bilprof"
        },
        {
          "name": "Taun We",
          "height": "213",
          "weight": "66",
          "hair": "other",
          "eyes": "brown",
          "gender": "female",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Jocasta Nu",
          "height": "167",
          "weight": "62",
          "hair": "gray",
          "eyes": "blue",
          "gender": "female",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "R4-P17",
          "height": "96",
          "weight": "32",
          "hair": "other",
          "eyes": "blue",
          "gender": "female",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Shaak Ti",
          "height": "178",
          "weight": "57",
          "hair": "other",
          "eyes": "brown",
          "gender": "female",
          "residence": "nordaustur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Grievous",
          "height": "216",
          "weight": "159",
          "hair": "other",
          "eyes": "green",
          "gender": "male",
          "residence": "nordaustur",
          "drive": "bilprof"
        },
        {
          "name": "Raymus Antilles",
          "height": "188",
          "weight": "79",
          "hair": "brown",
          "eyes": "brown",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Sly Moore",
          "height": "178",
          "weight": "48",
          "hair": "other",
          "eyes": "blue",
          "gender": "female",
          "residence": "sudur",
          "drive": "ekkibilprof"
        },



        {
          "name": "Tion Medon",
          "height": "206",
          "weight": "80",
          "hair": "other",
          "eyes": "brown",
          "gender": "male",
          "residence": "nordaustur",
          "drive": "ekkibilprof"
        },
        {
          "name": "Finn",
          "height": "175",
          "weight": "87",
          "hair": "black",
          "eyes": "dark",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "bilprof"
        },
        {
          "name": "Rey",
          "height": "170",
          "weight": "64",
          "hair": "brown",
          "eyes": "lightbrown",
          "gender": "female",
          "residence": "reykjavik",
          "drive": "bilprof"
        },
        {
          "name": "Poe Dameron",
          "height": "174",
          "weight": "80",
          "hair": "brown",
          "eyes": "brown",
          "gender": "male",
          "residence": "reykjavik",
          "drive": "bilprof"
        },
        {
          "name": "BB8",
          "height": "67",
          "weight": "18",
          "hair": "other",
          "eyes": "brown",
          "gender": "other",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Captain Phasma",
          "height": "191",
          "weight": "78",
          "hair": "other",
          "eyes": "other",
          "gender": "female",
          "residence": "reykjavik",
          "drive": "ekkibilprof"
        },
        {
          "name": "Padmé Amidala",
          "height": "165",
          "weight": "45",
          "hair": "brown",
          "eyes": "brown",
          "gender": "female",
          "residence": "reykjavik",
          "drive": "bilprof"
        }


        ];


})();

