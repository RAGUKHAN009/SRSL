import { calculateAge } from '../utils/calculateAge';

export const teams = [
    {
        id: "team-1",
        teamName: "Hindu Kush Strickers",
        teamLogo: "/HKS/HKS.jpg",
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
                picture: "/HKS/PLAYERS_PICTURES/AYAN.png",
                bFormPicture: "/HKS/PLAYERS_DOCUMENTS/AYAN.jpeg",
                bFormNumber: "71403-0358501-7",
                dateOfBirth: "2014-01-10",
                age: calculateAge("2014-01-10")
            },
            {
                id: "player-2-t1",
                name: "Faheem Rais",
                fathersName: "Rais Muhammad Khan",
                contactNumber: "+923 5543 75995",
                picture: "/HKS/PLAYERS_PICTURES/FAHEEM.jpeg",
                bFormPicture: "/HKS/PLAYERS_DOCUMENTS/FAHEEM.jpeg",
                bFormNumber: "71403-0351992-1",
                dateOfBirth: "2016-10-05",
                age: calculateAge("2016-10-05")
            },
            {
                id: "player-3-t1",
                name: "Faizan Wazir",
                fathersName: "Mohammad Wazir Khan",
                contactNumber: "+923 5543 75995",
                picture: "/HKS/PLAYERS_PICTURES/FAIZAN.jpeg",
                bFormPicture: "/HKS/PLAYERS_DOCUMENTS/FAIZAN.jpeg",
                bFormNumber: "71403-0354021-7",
                dateOfBirth: "2015-11-15",
                age: calculateAge("2015-11-15")
            },
            {
                id: "player-4-t1",
                name: "Tauseef Rais",
                fathersName: "Rais Muhammad Khan",
                contactNumber: "+923 5543 75995",
                picture: "/HKS/PLAYERS_PICTURES/TOUSEEF.jpeg",
                bFormPicture: "/HKS/PLAYERS_DOCUMENTS/TOUSEEF.jpeg",
                bFormNumber: "71403-0351987-9",
                dateOfBirth: "2014-12-17",
                age: calculateAge("2014-12-17")
            },
            {
                id: "player-5-t1",
                name: "Kamran Ali Khan",
                fathersName: "Niyat Ali",
                contactNumber: "+923 5543 75995",
                picture: "/HKS/PLAYERS_PICTURES/KAMRAN.jpeg",
                bFormPicture: "/HKS/PLAYERS_DOCUMENTS/KAMRAN.jpeg",
                bFormNumber: "71403-0357898-9",
                dateOfBirth: "2017-09-08",
                age: calculateAge("2017-09-08")
            },
            {
                id: "player-6-t1",
                name: "Asif Karim",
                fathersName: "Karim Dad",
                contactNumber: "+923 5543 75995",
                picture: "/HKS/PLAYERS_PICTURES/ASIF.jpeg",
                bFormPicture: "/HKS/PLAYERS_DOCUMENTS/ASIF.jpeg",
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
                picture: "/HKS/PLAYERS_PICTURES/UBAID.jpeg",
                bFormPicture: "/HKS/PLAYERS_DOCUMENTS/UBAID.jpeg",
                bFormNumber: "71403-0390260-7",
                dateOfBirth: "2014-12-24",
                age: calculateAge("2014-12-24")
            },
            {
                id: "substitute-2-t1",
                name: "Haris Ali",
                fathersName: "Hakim Jan",
                contactNumber: "+923 5543 75995",
                picture: "/HKS/PLAYERS_PICTURES/HARIS.jpeg",
                bFormPicture: "/HKS/PLAYERS_DOCUMENTS/HARIS.jpeg",
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
    // {
    //     id: "team-2",
    //     teamName: "SMS FC",
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