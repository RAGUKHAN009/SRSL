import { calculateAge } from '../utils/calculateAge';

export const teams = [
    {
        id: "team-1",
        teamName: "Hindu Kush Strickers",
        teamLogo: "/TEAM1/HKS_LOGO.jpg",
        teamCoach: "Asif Ali",
        coachNumber: "3554375995",
        jkLocation: "Jutial Jamat Khana",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t1",
                name: "Ayan Ali",
                fathersName: "Ghulam Ali",
                contactNumber: "+923 5543 75995",
                picture: "/TEAM1/PLAYERS_PICTURES/Ayan.jpeg",
                bFormPicture: "/TEAM1/PLAYERS_DOCUMENTS/AYAN.jpeg",
                bFormNumber: "71403-0358501-7",
                dateOfBirth: "2014-01-10",
                age: calculateAge("2014-01-10")
            },
            {
                id: "player-2-t1",
                name: "Faheem Rais",
                fathersName: "Rais Muhammad Khan",
                contactNumber: "+923 5543 75995",
                picture: "/TEAM1/PLAYERS_PICTURES/FAHEEM.jpeg",
                bFormPicture: "/TEAM1/PLAYERS_DOCUMENTS/FAHEEM.jpeg",
                bFormNumber: "71403-0351992-1",
                dateOfBirth: "2016-10-05",
                age: calculateAge("2016-10-05")
            },
            {
                id: "player-3-t1",
                name: "Faizan Wazir",
                fathersName: "Mohammad Wazir Khan",
                contactNumber: "+923 5543 75995",
                picture: "/TEAM1/PLAYERS_PICTURES/FAIZAN.jpeg",
                bFormPicture: "/TEAM1/PLAYERS_DOCUMENTS/FAIZAN.jpeg",
                bFormNumber: "71403-0354021-7",
                dateOfBirth: "2015-11-15",
                age: calculateAge("2015-11-15")
            },
            {
                id: "player-4-t1",
                name: "Tauseef Rais",
                fathersName: "Rais Muhammad Khan",
                contactNumber: "+923 5543 75995",
                picture: "/TEAM1/PLAYERS_PICTURES/TOUSEEF.jpeg",
                bFormPicture: "/TEAM1/PLAYERS_DOCUMENTS/TOUSEEF.jpeg",
                bFormNumber: "71403-0351987-9",
                dateOfBirth: "2014-12-17",
                age: calculateAge("2014-12-17")
            },
            {
                id: "player-5-t1",
                name: "Kamran Ali Khan",
                fathersName: "Niyat Ali",
                contactNumber: "+923 5543 75995",
                picture: "/TEAM1/PLAYERS_PICTURES/KAMRAN.jpeg",
                bFormPicture: "/TEAM1/PLAYERS_DOCUMENTS/KAMRAN.jpeg",
                bFormNumber: "71403-0357898-9",
                dateOfBirth: "2017-09-08",
                age: calculateAge("2017-09-08")
            },
            {
                id: "player-6-t1",
                name: "Asif Karim",
                fathersName: "Karim Dad",
                contactNumber: "+923 5543 75995",
                picture: "/TEAM1/PLAYERS_PICTURES/ASIF.jpeg",
                bFormPicture: "/TEAM1/PLAYERS_DOCUMENTS/ASIF.jpeg",
                bFormNumber: "",
                dateOfBirth: "2014-12-30",
                age: calculateAge("2014-12-30")
            }
        ],
        substitutePlayers: [
            {
                id: "substitute-1-t1",
                name: "Ubaid Wali",
                fathersName: "Sher Wali",
                contactNumber: "+923 5543 75995",
                picture: "/TEAM1/PLAYERS_PICTURES/UBAID.jpeg",
                bFormPicture: "/TEAM1/PLAYERS_DOCUMENTS/UBAID.jpeg",
                bFormNumber: "71403-0390260-7",
                dateOfBirth: "2014-12-24",
                age: calculateAge("2014-12-24")
            },
            {
                id: "substitute-2-t1",
                name: "Haris Ali",
                fathersName: "Hakim Jan",
                contactNumber: "+923 5543 75995",
                picture: "/TEAM1/PLAYERS_PICTURES/HARIS.jpeg",
                bFormPicture: "/TEAM1/PLAYERS_DOCUMENTS/HARIS.jpeg",
                bFormNumber: "37405-2345330-5",
                dateOfBirth: "2014-12-18",
                age: calculateAge("2014-12-18")
            }
        ],
        reservePlayers: [
            {
                id: "Reserveplayer-1-t1",
                name: "Reserve Player One",
                fathersName: "Reserve Player One's Father",
                contactNumber: "+92 300 1234567",
                picture: "/images/players/aliyan.jpg",
                bFormPicture: "/images/documents/aliyan-bform.jpg",
                dateOfBirth: "2005-08-14",

            },
            {
                id: "Reserveplayer-2-t1",
                name: "Reserve Player Two",
                fathersName: "Reserve Player Two's Father",
                contactNumber: "+92 300 1234567",
                picture: "/images/players/aliyan.jpg",
                bFormPicture: "/images/documents/aliyan-bform.jpg",
                dateOfBirth: "2005-08-14",

            },
            {
                id: "Reserveplayer-3-t1",
                name: "Reserve Player Three",
                fathersName: "Reserve Player Three's Father",
                contactNumber: "+92 300 1234567",
                picture: "/images/players/aliyan.jpg",
                bFormPicture: "/images/documents/aliyan-bform.jpg",
                dateOfBirth: "2005-08-14",

            }
        ]
    },

    {
        id: "team-2",
        teamName: "VEYRON UNITED",
        teamLogo: "/TEAM2/VER-LOGO.png",
        teamCoach: "Zakir Abaas",
        coachNumber: "3554932234",
        jkLocation: "HUSSAIN ABAD COLONY JUTIAL GILGIT",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t2",
                name: "Ayan Abbas",
                fathersName: "Abbas Ali",
                contactNumber: "",
                picture: "/TEAM2/PLAYERS_PICTURES/AYAN.jpeg",
                bFormPicture: "/TEAM2/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2016-10-11",
                age: calculateAge("2016-10-11")
            },
            {
                id: "player-2-t2",
                name: "Atif Zaman",
                fathersName: "Sher Zaman",
                contactNumber: "",
                picture: "/TEAM2/PLAYERS_PICTURES/ATIF.jpeg",
                bFormPicture: "/TEAM2/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2015-10-31",
                age: calculateAge("2015-10-31")
            },
            {
                id: "player-3-t2",
                name: "Rfaqat Hussain",
                fathersName: "Khadim Hussain",
                contactNumber: "",
                picture: "/TEAM2/PLAYERS_PICTURES/RAFAQAT.jpeg",
                bFormPicture: "/TEAM2/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2015-02-15",
                age:  calculateAge("2015-02-15")
            },
            {
                id: "player-4-t2",
                name: "Hunaid Karim",
                fathersName: "Zafar Jan",
                contactNumber: "",
                picture: "/TEAM2/PLAYERS_PICTURES/HUNAID.jpeg",
                bFormPicture: "/TEAM2/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2014-08-18",
                age: calculateAge("2014-08-18")
            },
            {
                id: "player-5-t2",
                name: "Ahmad Faraz",
                fathersName: "Hussain Ulah",
                contactNumber: "",
                picture: "/TEAM2/PLAYERS_PICTURES/AHMAD.jpeg",
                bFormPicture: "/TEAM2/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2014-02-07",
                age: calculateAge("2014-02-07")
            },
            {
                id: "player-6-t2",
                name: "Muhamad Arnain",
                fathersName: "Muhammad Latif",
                contactNumber: "",
                picture: "/TEAM2/PLAYERS_PICTURES/ARNAIN.jpeg",
                bFormPicture: "/TEAM2/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2014-01-11",
                age: calculateAge("2014-01-11")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t2",
                name: "Ahil Alam",
                fathersName: "Naik Alam",
                contactNumber: "",
                picture: "/images/players/ahil-alam.jpg",
                bFormPicture: "/images/documents/ahil-alam-bform.jpg",
                dateOfBirth: "2014-08-31",
                age: calculateAge("2014-08-31")
            },
            {
                id: "Reserveplayer-2-t2",
                name: "Eyad Jamal",
                fathersName: "Jamal Uddin",
                contactNumber: "",
                picture: "/images/players/eyad-jamal.jpg",
                bFormPicture: "/images/documents/eyad-jamal-bform.jpg",
                dateOfBirth: "2014-09-17",
                age: calculateAge("2014-09-17")
            },
            {
                id: "Reserveplayer-3-t2",
                name: "Yasha Karim",
                fathersName: "Issa Karim",
                contactNumber: "",
                picture: "/images/players/yasha-karim.jpg",
                bFormPicture: "/images/documents/yasha-karim-bform.jpg",
                dateOfBirth: "2014-05-24",
                age: calculateAge("2014-05-24")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t2",
                name: "Asad Zaman",
                fathersName: "Sher Zaman",
                contactNumber: "",
                picture: "/images/players/asad-zaman.jpg",
                bFormPicture: "/images/documents/asad-zaman-bform.jpg",
                dateOfBirth: "2014-06-04",
                age: calculateAge("2014-06-04")
            },
            {
                id: "substitutePlayer-2-t2",
                name: "Ahmad Nawaz",
                fathersName: "Sher Nawaz",
                contactNumber: "",
                picture: "/images/players/ahmad-nawaz.jpg",
                bFormPicture: "/images/documents/ahmad-nawaz-bform.jpg",
                dateOfBirth: "2014-12-08",
                age: calculateAge("2014-12-08")
            }
        ]
    }

    ,

    // {
    //     id: "team-2",
    //     teamName: "Team 2 Name",
    //     teamLogo: "/logos/SMS.png",
    //     teamCoach: "SMS Coach",
    //     jkLocation: "YASIN COLONY",
    //     teamGSL: "JKGSL",
    //     teamPlayers: [
    //         {
    //             id: "player-1-t1",
    //             name: "Player One",
    //             fathersName: "Player One's Father",
    //             contactNumber: "+92 300 1234567",
    //             picture: "/images/players/ALIYAN.png",
    //             bFormPicture: "/images/documents/aliyan-bform.jpg",
    //             dateOfBirth: "2005-08-14",
    //             age: calculateAge("2005-08-14")
    //         },
    //         {
    //             id: "player-2-t1",
    //             name: "Player Two",
    //             fathersName: "Player Two's Father",
    //             contactNumber: "+92 300 7654321",
    //             picture: "/images/players/zain.jpg",
    //             bFormPicture: "/images/documents/zain-bform.jpg",
    //             dateOfBirth: "2006-03-23",
    //             age: calculateAge("2006-03-23")

    //         },
    //         {
    //             id: "player-3-t1",
    //             name: "Player Three",
    //             fathersName: "Player Three's Father",
    //             contactNumber: "+92 300 7654321",
    //             picture: "/images/players/zain.jpg",
    //             bFormPicture: "/images/documents/zain-bform.jpg",
    //             dateOfBirth: "2006-03-23",
    //             age: calculateAge("2006-03-23")
    //         },
    //         {
    //             id: "player-4-t1",
    //             name: "Player Four",
    //             fathersName: "Player Four's Father",
    //             contactNumber: "+92 300 7654321",
    //             picture: "/images/players/zain.jpg",
    //             bFormPicture: "/images/documents/zain-bform.jpg",
    //             dateOfBirth: "2006-03-23",
    //             age: calculateAge("2006-03-23"),



    //         },
    //         {
    //             id: "player-5-t1",
    //             name: "Player Five",
    //             fathersName: "Player Five's Father",
    //             contactNumber: "+92 300 7654321",
    //             picture: "/images/players/zain.jpg",
    //             bFormPicture: "/images/documents/zain-bform.jpg",
    //             dateOfBirth: "2006-03-23",
    //             age: calculateAge("2006-03-23")
    //         },
    //         {
    //             id: "player-6-t1",
    //             name: "Player Six",
    //             fathersName: "Player Six's Father",
    //             contactNumber: "+92 300 7654321",
    //             picture: "/images/players/zain.jpg",
    //             bFormPicture: "/images/documents/zain-bform.jpg",
    //             dateOfBirth: "2006-03-23",
    //             age: calculateAge("2006-03-23")
    //         }
    //     ],
    //     reservePlayers: [
    //         {
    //             id: "Reserveplayer-1-t1",
    //             name: "Reserve Player One",
    //             fathersName: "Reserve Player One's Father",
    //             contactNumber: "+92 300 1234567",
    //             picture: "/images/players/aliyan.jpg",
    //             bFormPicture: "/images/documents/aliyan-bform.jpg",
    //             dateOfBirth: "2005-08-14",

    //         },
    //         {
    //             id: "Reserveplayer-2-t1",
    //             name: "Reserve Player Two",
    //             fathersName: "Reserve Player Two's Father",
    //             contactNumber: "+92 300 1234567",
    //             picture: "/images/players/aliyan.jpg",
    //             bFormPicture: "/images/documents/aliyan-bform.jpg",
    //             dateOfBirth: "2005-08-14",

    //         },
    //         {
    //             id: "Reserveplayer-3-t1",
    //             name: "Reserve Player Three",
    //             fathersName: "Reserve Player Three's Father",
    //             contactNumber: "+92 300 1234567",
    //             picture: "/images/players/aliyan.jpg",
    //             bFormPicture: "/images/documents/aliyan-bform.jpg",
    //             dateOfBirth: "2005-08-14",

    //         }
    //     ],
    //     substitutePlayers: [
    //         {
    //             id: "substitutePlayer-1-t1",
    //             name: "Substitute Player One",
    //             fathersName: "Substitute Player One's Father",
    //             contactNumber: "+92 300 1234567",
    //             picture: "/images/players/aliyan.jpg",
    //             bFormPicture: "/images/documents/aliyan-bform.jpg",
    //             dateOfBirth: "2005-08-14",
    //             age: calculateAge("2005-08-14")

    //         },
    //         {
    //             id: "substitutePlayer-2-t1",
    //             name: "Substitute Player Two",
    //             fathersName: "Substitute Player Two's Father",
    //             contactNumber: "+92 300 1234567",
    //             picture: "/images/players/aliyan.jpg",
    //             bFormPicture: "/images/documents/aliyan-bform.jpg",
    //             dateOfBirth: "2005-08-14",
    //             age: calculateAge("2005-08-14   ")
    //         }
    //     ]
    // }

];