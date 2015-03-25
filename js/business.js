 var app = angular.module('businessApp', []);


            app.controller('CustomersController', function($scope){
              $scope.customers =[
                  {
                    "id": 1,
                    "name": "Zeph",
                    "total": 75.78546546
                  },
                  {
                    "id": 2,
                    "name": "Dominique",
                    "total": 93
                  },
                  {
                    "id": 3,
                    "name": "Lev",
                    "total": 80
                  },
                  {
                    "id": 4,
                    "name": "Jennifer",
                    "total": 9
                  },
                  {
                    "id": 5,
                    "name": "Scarlet",
                    "total": 37
                  },
                  {
                    "id": 6,
                    "name": "Carissa",
                    "total": 59
                  },
                  {
                    "id": 7,
                    "name": "Ralph",
                    "total": 3
                  },
                  {
                    "id": 8,
                    "name": "Alexa",
                    "total": 43
                  },
                  {
                    "id": 9,
                    "name": "Sopoline",
                    "total": 18
                  },
                  {
                    "id": 10,
                    "name": "Geoffrey",
                    "total": 97
                  },
                  {
                    "id": 11,
                    "name": "Avye",
                    "total": 79
                  },
                  {
                    "id": 12,
                    "name": "Denise",
                    "total": 85
                  },
                  {
                    "id": 13,
                    "name": "Madeline",
                    "total": 78
                  },
                  {
                    "id": 14,
                    "name": "Kerry",
                    "total": 94
                  },
                  {
                    "id": 15,
                    "name": "Blossom",
                    "total": 64
                  },
                  {
                    "id": 16,
                    "name": "Karleigh",
                    "total": 63
                  },
                  {
                    "id": 17,
                    "name": "Lacey",
                    "total": 64
                  },
                  {
                    "id": 18,
                    "name": "Maris",
                    "total": 73
                  },
                  {
                    "id": 19,
                    "name": "Morgan",
                    "total": 69
                  },
                  {
                    "id": 20,
                    "name": "Madeline",
                    "total": 40
                  },
                  {
                    "id": 21,
                    "name": "Lesley",
                    "total": 73
                  },
                  {
                    "id": 22,
                    "name": "Isaac",
                    "total": 78
                  },
                  {
                    "id": 23,
                    "name": "Elmo",
                    "total": 11
                  },
                  {
                    "id": 24,
                    "name": "Wallace",
                    "total": 18
                  },
                  {
                    "id": 25,
                    "name": "McKenzie",
                    "total": 67
                  },
                  {
                    "id": 26,
                    "name": "Ulysses",
                    "total": 78
                  },
                  {
                    "id": 27,
                    "name": "Bertha",
                    "total": 33
                  },
                  {
                    "id": 28,
                    "name": "Kareem",
                    "total": 61
                  },
                  {
                    "id": 29,
                    "name": "Karyn",
                    "total": 83
                  },
                  {
                    "id": 30,
                    "name": "Dolan",
                    "total": 46
                  },
                  {
                    "id": 31,
                    "name": "Amy",
                    "total": 42
                  },
                  {
                    "id": 32,
                    "name": "Fiona",
                    "total": 33
                  },
                  {
                    "id": 33,
                    "name": "Yoshio",
                    "total": 57
                  },
                  {
                    "id": 34,
                    "name": "Samson",
                    "total": 98
                  },
                  {
                    "id": 35,
                    "name": "Geoffrey",
                    "total": 14
                  },
                  {
                    "id": 36,
                    "name": "Martha",
                    "total": 52
                  },
                  {
                    "id": 37,
                    "name": "Destiny",
                    "total": 30
                  },
                  {
                    "id": 38,
                    "name": "Dakota",
                    "total": 89
                  },
                  {
                    "id": 39,
                    "name": "Holly",
                    "total": 60
                  },
                  {
                    "id": 40,
                    "name": "Ferris",
                    "total": 26
                  },
                  {
                    "id": 41,
                    "name": "Brock",
                    "total": 13
                  },
                  {
                    "id": 42,
                    "name": "Brock",
                    "total": 40
                  },
                  {
                    "id": 43,
                    "name": "Autumn",
                    "total": 34
                  },
                  {
                    "id": 44,
                    "name": "Patricia",
                    "total": 63
                  },
                  {
                    "id": 45,
                    "name": "Callie",
                    "total": 59
                  },
                  {
                    "id": 46,
                    "name": "Nasim",
                    "total": 88
                  },
                  {
                    "id": 47,
                    "name": "Clayton",
                    "total": 2
                  },
                  {
                    "id": 48,
                    "name": "Xantha",
                    "total": 61
                  },
                  {
                    "id": 49,
                    "name": "Quinn",
                    "total": 27
                  },
                  {
                    "id": 50,
                    "name": "Mia",
                    "total": 88
                  },
                  {
                    "id": 51,
                    "name": "Cedric",
                    "total": 38
                  },
                  {
                    "id": 52,
                    "name": "Beck",
                    "total": 51
                  },
                  {
                    "id": 53,
                    "name": "Winter",
                    "total": 100
                  },
                  {
                    "id": 54,
                    "name": "Belle",
                    "total": 59
                  },
                  {
                    "id": 55,
                    "name": "Whoopi",
                    "total": 17
                  },
                  {
                    "id": 56,
                    "name": "Inez",
                    "total": 83
                  },
                  {
                    "id": 57,
                    "name": "Zephania",
                    "total": 74
                  },
                  {
                    "id": 58,
                    "name": "Amy",
                    "total": 92
                  },
                  {
                    "id": 59,
                    "name": "Jana",
                    "total": 53
                  },
                  {
                    "id": 60,
                    "name": "Xaviera",
                    "total": 62
                  },
                  {
                    "id": 61,
                    "name": "Moana",
                    "total": 24
                  },
                  {
                    "id": 62,
                    "name": "Kirestin",
                    "total": 60
                  },
                  {
                    "id": 63,
                    "name": "Oren",
                    "total": 5
                  },
                  {
                    "id": 64,
                    "name": "Walter",
                    "total": 97
                  },
                  {
                    "id": 65,
                    "name": "Sean",
                    "total": 1
                  },
                  {
                    "id": 66,
                    "name": "Gannon",
                    "total": 68
                  },
                  {
                    "id": 67,
                    "name": "Zeus",
                    "total": 73
                  },
                  {
                    "id": 68,
                    "name": "Deirdre",
                    "total": 63
                  },
                  {
                    "id": 69,
                    "name": "Penelope",
                    "total": 30
                  },
                  {
                    "id": 70,
                    "name": "Lael",
                    "total": 75
                  },
                  {
                    "id": 71,
                    "name": "Felix",
                    "total": 21
                  },
                  {
                    "id": 72,
                    "name": "Gail",
                    "total": 73
                  },
                  {
                    "id": 73,
                    "name": "Pandora",
                    "total": 9
                  },
                  {
                    "id": 74,
                    "name": "Melanie",
                    "total": 21
                  },
                  {
                    "id": 75,
                    "name": "Rhea",
                    "total": 50
                  },
                  {
                    "id": 76,
                    "name": "Kamal",
                    "total": 20
                  },
                  {
                    "id": 77,
                    "name": "Wesley",
                    "total": 80
                  },
                  {
                    "id": 78,
                    "name": "Bradley",
                    "total": 4
                  },
                  {
                    "id": 79,
                    "name": "Barclay",
                    "total": 89
                  },
                  {
                    "id": 80,
                    "name": "Eugenia",
                    "total": 3
                  },
                  {
                    "id": 81,
                    "name": "Laurel",
                    "total": 31
                  },
                  {
                    "id": 82,
                    "name": "Rhiannon",
                    "total": 86
                  },
                  {
                    "id": 83,
                    "name": "Uma",
                    "total": 33
                  },
                  {
                    "id": 84,
                    "name": "Abdul",
                    "total": 78
                  },
                  {
                    "id": 85,
                    "name": "Nathan",
                    "total": 10
                  },
                  {
                    "id": 86,
                    "name": "Maris",
                    "total": 53
                  },
                  {
                    "id": 87,
                    "name": "Drew",
                    "total": 88
                  },
                  {
                    "id": 88,
                    "name": "Basil",
                    "total": 99
                  },
                  {
                    "id": 89,
                    "name": "Jolie",
                    "total": 45
                  },
                  {
                    "id": 90,
                    "name": "Odysseus",
                    "total": 84
                  },
                  {
                    "id": 91,
                    "name": "Kameko",
                    "total": 45
                  },
                  {
                    "id": 92,
                    "name": "Elvis",
                    "total": 30
                  },
                  {
                    "id": 93,
                    "name": "Hunter",
                    "total": 75
                  },
                  {
                    "id": 94,
                    "name": "Piper",
                    "total": 17
                  },
                  {
                    "id": 95,
                    "name": "Willow",
                    "total": 58
                  },
                  {
                    "id": 96,
                    "name": "Amos",
                    "total": 60
                  },
                  {
                    "id": 97,
                    "name": "Orla",
                    "total": 75
                  },
                  {
                    "id": 98,
                    "name": "Chaim",
                    "total": 62
                  },
                  {
                    "id": 99,
                    "name": "Donovan",
                    "total": 41
                  },
                  {
                    "id": 100,
                    "name": "Scarlet",
                    "total": 28
                  }
                ];
            });

             