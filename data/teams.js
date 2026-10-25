import { calculateAge } from '../utils/calculateAge';

export const teams = [
    //    ==================== TEAM 1 ====================
    // HINDU KUSH STRICKERS
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
    //    ==================== TEAM 2 ====================
    // SMS RED
    {
        id: "team-2",
        teamName: "SMS RED",
        teamLogo: "/TEAM2/SMS.png",
        teamCoach: "KASHIF HUSSAIN",
        coachNumber: "3101878229",
        jkLocation: "YASIN COLONY",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t2",
                name: "Mueez Ali",
                fathersName: "Eid Madad",
                contactNumber: "",
                picture: "/TEAM2/PLAYERS_PICTURES/MUEEZ.jpeg",
                bFormPicture: "/TEAM2/PLAYERS_DOCUMENTS/MUEEZ.jpeg",
                dateOfBirth: "2014-10-22",
                age: calculateAge("2014-10-22")
            },
            {
                id: "player-2-t2",
                name: "Aisar",
                fathersName: "Aslam Khan",
                contactNumber: "",
                picture: "/TEAM2/PLAYERS_PICTURES/AISAR.jpeg",
                bFormPicture: "/TEAM2/PLAYERS_DOCUMENTS/AISAR.jpeg",
                dateOfBirth: "2014-08-28",
                age: calculateAge("2014-08-28")
            },
            {
                id: "player-3-t2",
                name: "Baseer",
                fathersName: "Imtaiz Ahmed",
                contactNumber: "",
                picture: "/TEAM2/PLAYERS_PICTURES/BASEER.jpeg",
                bFormPicture: "/TEAM2/PLAYERS_DOCUMENTS/BASEER.jpeg",
                dateOfBirth: "2014-02-13",
                age: calculateAge("2014-02-13")
            },
            {
                id: "player-4-t2",
                name: "Ruhail",
                fathersName: "Nafas Ali",
                contactNumber: "",
                picture: "/TEAM2/PLAYERS_PICTURES/RUHAIL.jpeg",
                bFormPicture: "/TEAM2/PLAYERS_DOCUMENTS/RUHAIL.jpeg",
                dateOfBirth: "2014-08-01",
                age: calculateAge("2014-08-01")
            },
            {
                id: "player-5-t2",
                name: "Mujtaba",
                fathersName: "Shahid Ali",
                contactNumber: "",
                picture: "/TEAM2/PLAYERS_PICTURES/MUJTABA.jpeg",
                bFormPicture: "/TEAM2/PLAYERS_DOCUMENTS/MUJTABA.jpeg",
                dateOfBirth: "2017-01-01",
                age: calculateAge("2017-01-01")
            },
            {
                id: "player-6-t2",
                name: "Alishan",
                fathersName: "Iqbal Jan",
                contactNumber: "",
                picture: "/TEAM2/PLAYERS_PICTURES/ALISHAN.jpeg",
                bFormPicture: "/TEAM2/PLAYERS_DOCUMENTS/ALISHAN.jpeg",
                dateOfBirth: "2014-10-12",
                age: calculateAge("2014-10-12")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t2",
                name: "Sidhan",
                fathersName: "Akber Hussain",
                contactNumber: "",
                picture: "/TEAM2/PLAYERS_PICTURES/SIDHAN.jpeg",
                bFormPicture: "/TEAM2/PLAYERS_DOCUMENTS/SIDHAN.jpeg",
                dateOfBirth: "2017-03-18",
                age: calculateAge("2017-03-18")
            },
            {
                id: "Reserveplayer-2-t2",
                name: "Amaar",
                fathersName: "Ezat Murad",
                contactNumber: "",
                picture: "/TEAM2/PLAYERS_PICTURES/AMAAR.jpeg",
                bFormPicture: "/TEAM2/PLAYERS_DOCUMENTS/AMAAR.jpeg",
                dateOfBirth: "2015-02-09",
                age: calculateAge("2015-02-09")
            },
            {
                id: "Reserveplayer-3-t2",
                name: "Alizain",
                fathersName: "Rehmat Zar",
                contactNumber: "",
                picture: "/TEAM2/PLAYERS_PICTURES/ALIZAIN.jpeg",
                bFormPicture: "/TEAM2/PLAYERS_DOCUMENTS/ALIZAIN.jpeg",
                dateOfBirth: "2015-03-09",
                age: calculateAge("2015-03-09")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t2",
                name: "Anhab",
                fathersName: "Sher Murad",
                contactNumber: "",
                picture: "/TEAM2/PLAYERS_PICTURES/ANHAB.jpeg",
                bFormPicture: "/TEAM2/PLAYERS_DOCUMENTS/ANHAB.jpeg",
                dateOfBirth: "2018-07-15",
                age: calculateAge("2018-07-15")
            },
            {
                id: "substitutePlayer-2-t2",
                name: "Ishaq",
                fathersName: "Hussain Ali",
                contactNumber: "",
                picture: "/TEAM2/PLAYERS_PICTURES/ISHAQ.jpeg",
                bFormPicture: "/TEAM2/PLAYERS_DOCUMENTS/ISHAQ.jpeg",
                dateOfBirth: "2014-09-28",
                age: calculateAge("2014-09-28")
            }
        ]
    },
    //    ==================== TEAM 3 ====================
    // SMS BLUE 

    {
        id: "team-3",
        teamName: "SMS GREEN",
        teamLogo: "/TEAM3/SMS.png",
        teamCoach: "tufail ahmed",
        coachNumber: "3101878229",
        jkLocation: "YASIN COLONY",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t3",
                name: "Shoukat",
                fathersName: "Qurban Ali",
                contactNumber: "",
                picture: "/TEAM3/PLAYERS_PICTURES/SHOUKAT.jpeg",
                bFormPicture: "/TEAM3/PLAYERS_DOCUMENTS/SHOUKAT.jpeg",
                dateOfBirth: "2016-06-03",
                age: calculateAge("2016-06-03")
            },
            {
                id: "player-2-t3",
                name: "Zuhaib",
                fathersName: "M. Azam Khan",
                contactNumber: "",
                picture: "/TEAM3/PLAYERS_PICTURES/ZUHAIB.jpeg",
                bFormPicture: "/TEAM3/PLAYERS_DOCUMENTS/ZUHAIB.jpeg",
                dateOfBirth: "2014-03-24",
                age: calculateAge("2014-03-24")
            },
            {
                id: "player-3-t3",
                name: "Hasnain",
                fathersName: "Bulbul Jan",
                contactNumber: "",
                picture: "/TEAM3/PLAYERS_PICTURES/HASNAIN.jpeg",
                bFormPicture: "/TEAM3/PLAYERS_DOCUMENTS/HASNAIN.jpeg",
                dateOfBirth: "2014-02-10",
                age: calculateAge("2014-02-10")
            },
            {
                id: "player-4-t3",
                name: "Ibsham",
                fathersName: "Akber Ali",
                contactNumber: "",
                picture: "/TEAM3/PLAYERS_PICTURES/IBSHAM.jpeg",
                bFormPicture: "/TEAM3/PLAYERS_DOCUMENTS/IBSHAM.jpeg",
                dateOfBirth: "2015-08-08",
                age: calculateAge("2015-08-08")
            },
            {
                id: "player-5-t3",
                name: "Muneeb",
                fathersName: "Niyat Jan",
                contactNumber: "",
                picture: "/TEAM3/PLAYERS_PICTURES/MUNEEB.jpeg",
                bFormPicture: "/TEAM3/PLAYERS_DOCUMENTS/MUNEEB.jpeg",
                dateOfBirth: "2016-07-05",
                age: calculateAge("2016-07-05")
            },
            {
                id: "player-6-t3",
                name: "Faisal Safdar",
                fathersName: "M. Safdar",
                contactNumber: "",
                picture: "/TEAM3/PLAYERS_PICTURES/FAISAL.jpeg",
                bFormPicture: "/TEAM3/PLAYERS_DOCUMENTS/FAISAL.jpeg",
                dateOfBirth: "2016-05-13",
                age: calculateAge("2016-05-13")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t3",
                name: "Shayan Yousaf",
                fathersName: "Shah Wali",
                contactNumber: "",
                picture: "/TEAM3/PLAYERS_PICTURES/SHAYAN.jpeg",
                bFormPicture: "/TEAM3/PLAYERS_DOCUMENTS/SHAYAN.jpeg",
                dateOfBirth: "2016-04-06",
                age: calculateAge("2016-04-06")
            },
            {
                id: "Reserveplayer-2-t3",
                name: "Ayan Ali",
                fathersName: "Imtaiz Khan",
                contactNumber: "",
                picture: "/TEAM3/PLAYERS_PICTURES/AYAN.jpeg",
                bFormPicture: "/TEAM3/PLAYERS_DOCUMENTS/AYAN.jpeg",
                dateOfBirth: "2016-11-06",
                age: calculateAge("2016-11-06")
            },
            {
                id: "Reserveplayer-3-t3",
                name: "Zulkaif",
                fathersName: "Rahim",
                contactNumber: "",
                picture: "/TEAM3/PLAYERS_PICTURES/ZULKAIF.jpeg",
                bFormPicture: "/TEAM3/PLAYERS_DOCUMENTS/ZULKAIF.jpeg",
                dateOfBirth: "2017-03-03",
                age: calculateAge("2017-03-03")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t3",
                name: "Anees Jamal",
                fathersName: "Youns Hussain",
                contactNumber: "",
                picture: "/TEAM3/PLAYERS_PICTURES/ANEES.jpeg",
                bFormPicture: "/TEAM3/PLAYERS_DOCUMENTS/ANEES.jpeg",
                dateOfBirth: "2014-07-17",
                age: calculateAge("2014-07-17")
            },
            {
                id: "substitutePlayer-2-t3",
                name: "Sibtain",
                fathersName: "Asad Iqbal",
                contactNumber: "",
                picture: "/TEAM3/PLAYERS_PICTURES/SIBTAIN.jpeg",
                bFormPicture: "/TEAM3/PLAYERS_DOCUMENTS/SIBTAIN.jpeg",
                dateOfBirth: "2017-02-03",
                age: calculateAge("2017-02-03")
            }
        ]
    },
    //    ==================== TEAM 4 ====================
    //  Falcon United FC
    {
        id: "team-4",
        teamName: "Falcon United FC",
        teamLogo: "/TEAM4/FALCON.png",
        teamCoach: "Minhaj Uddin",
        coachNumber: "0313-0884776 / 0312-9935440",
        jkLocation: "SHAH KARIM HOSTEL",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t4",
                name: "Azlan Ali Artas",
                fathersName: "Mehoob Alam",
                contactNumber: "",
                picture: "/TEAM4/PLAYERS_PICTURES/AZLAN.jpeg",
                bFormPicture: "/TEAM4/PLAYERS_DOCUMENTS/AZLAN.jpeg",
                dateOfBirth: "2014-09-10",
                age: calculateAge("2014-09-10")
            },
            {
                id: "player-2-t4",
                name: "Kabir Karim",
                fathersName: "Shahid Karim",
                contactNumber: "",
                picture: "/TEAM4/PLAYERS_PICTURES/KABIR.jpeg",
                bFormPicture: "/TEAM4/PLAYERS_DOCUMENTS/KABIR.jpeg",
                dateOfBirth: "2014-03-20",
                age: calculateAge("2014-03-20")
            },
            {
                id: "player-3-t4",
                name: "Hamad Musa",
                fathersName: "Musa Madad",
                contactNumber: "",
                picture: "/TEAM4/PLAYERS_PICTURES/HAMAD.jpeg",
                bFormPicture: "/TEAM4/PLAYERS_DOCUMENTS/HAMAD.jpeg",
                dateOfBirth: "2015-11-27",
                age: calculateAge("2015-11-27")
            },
            {
                id: "player-4-t4",
                name: "Fawad Musa",
                fathersName: "Musa Madad",
                contactNumber: "",
                picture: "/TEAM4/PLAYERS_PICTURES/FAWAD.jpeg",
                bFormPicture: "/TEAM4/PLAYERS_DOCUMENTS/FAWAD.jpeg",
                dateOfBirth: "2015-11-22",
                age: calculateAge("2015-11-22")
            },
            {
                id: "player-5-t4",
                name: "Ali Nikash",
                fathersName: "Nasir Hussain",
                contactNumber: "",
                picture: "/TEAM4/PLAYERS_PICTURES/ALI-NIKASH.jpeg",
                bFormPicture: "/TEAM4/PLAYERS_DOCUMENTS/ALI-NIKASH.jpeg",
                dateOfBirth: "2014-10-27",
                age: calculateAge("2014-10-27")
            },
            {
                id: "player-6-t4",
                name: "Afaq",
                fathersName: "M. Rahim",
                contactNumber: "",
                picture: "/TEAM4/PLAYERS_PICTURES/AFAQ.jpeg",
                bFormPicture: "/TEAM4/PLAYERS_DOCUMENTS/AFAQ.jpeg",
                dateOfBirth: "2014-04-23",
                age: calculateAge("2014-04-23")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t4",
                name: "Arsham (Res)",
                fathersName: "Ayub",
                contactNumber: "",
                picture: "/TEAM4/PLAYERS_PICTURES/ARSHAM.jpeg",
                bFormPicture: "/TEAM4/PLAYERS_DOCUMENTS/ARSHAM.jpeg",
                dateOfBirth: "2014-07-23",
                age: calculateAge("2014-07-23")
            },
            {
                id: "Reserveplayer-2-t4",
                name: "Sunil (Res)",
                fathersName: "Mir Akbar",
                contactNumber: "",
                picture: "/TEAM4/PLAYERS_PICTURES/SUNIL.jpeg",
                bFormPicture: "/TEAM4/PLAYERS_DOCUMENTS/SUNIL.jpeg",
                dateOfBirth: "2016-03-07",
                age: calculateAge("2016-03-07")
            },
            {
                id: "Reserveplayer-3-t4",
                name: "Ali (Res)",
                fathersName: "",
                contactNumber: "",
                picture: "/TEAM4/PLAYERS_PICTURES/ALI.jpeg",
                bFormPicture: "/TEAM4/PLAYERS_DOCUMENTS/ALI.jpeg",
                dateOfBirth: "2016-11-03",
                age: calculateAge("2016-11-03")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t4",
                name: "Rawal Karim",
                fathersName: "Dostyar Khan",
                contactNumber: "",
                picture: "/TEAM4/PLAYERS_PICTURES/RAWAL.jpeg",
                bFormPicture: "/TEAM4/PLAYERS_DOCUMENTS/RAWAL.jpeg",
                dateOfBirth: "2014-12-25",
                age: calculateAge("2014-12-25")
            },
            {
                id: "substitutePlayer-2-t4",
                name: "Shayan",
                fathersName: "Mirza Jan",
                contactNumber: "",
                picture: "/TEAM4/PLAYERS_PICTURES/SHAYAN.jpeg",
                bFormPicture: "/TEAM4/PLAYERS_DOCUMENTS/SHAYAN.jpeg",
                dateOfBirth: "2016-03-13",
                age: calculateAge("2016-03-13")
            }
        ]
    },
    //    ==================== TEAM 5 ====================
    //  PRINCE JUNIORS FC
    {
        id: "team-5",
        teamName: "Prince Junior FC",
        teamLogo: "/TEAM5/PRINCE.jpeg",
        teamCoach: "Sunail Abbas",
        coachNumber: "+92 317 9357162",
        jkLocation: "Prince Town Jamat Khana",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t5",
                name: "Muzamil Riaz",
                fathersName: "Piyar Madad Khan",
                contactNumber: "",
                picture: "/TEAM5/PLAYERS_PICTURES/MUZAMIL.jpeg",
                bFormPicture: "/TEAM5/PLAYERS_DOCUMENTS/MUZAMIL.jpeg",
                bFormNumber: "71401-6916482-3",
                dateOfBirth: "2014-05-21",
                age: calculateAge("2014-05-21")
            },
            {
                id: "player-2-t5",
                name: "Najam-ul-Saqib",
                fathersName: "Nadir Shah",
                contactNumber: "",
                picture: "/TEAM5/PLAYERS_PICTURES/NAJAM-UL-SAQIB.jpeg",
                bFormPicture: "/TEAM5/PLAYERS_DOCUMENTS/NAJAM-UL-SAQIB.jpeg",
                bFormNumber: "71402-2723925-3",
                dateOfBirth: "2014-06-25",
                age: calculateAge("2014-06-25")
            },
            {
                id: "player-3-t5",
                name: "Rumail Abbas",
                fathersName: "Muhammad Abbas 0",
                contactNumber: "",
                picture: "/TEAM5/PLAYERS_PICTURES/RUMAIL.jpeg",
                bFormPicture: "/TEAM5/PLAYERS_DOCUMENTS/RUMAIL.jpeg",
                bFormNumber: "71403-0353881-7",
                dateOfBirth: "2014-12-05",
                age: calculateAge("2014-12-05")
            },
            {
                id: "player-4-t5",
                name: "Aliyan Jan",
                fathersName: "Muhammad Jan",
                contactNumber: "",
                picture: "/TEAM5/PLAYERS_PICTURES/ALIYAN.jpeg",
                bFormPicture: "/TEAM5/PLAYERS_DOCUMENTS/ALIYAN.jpeg",
                bFormNumber: "71403-0351957-7",
                dateOfBirth: "2014-04-22",
                age: calculateAge("2014-04-22")
            },
            {
                id: "player-5-t5",
                name: "Shafiq Nazar",
                fathersName: "Lughar Nazar",
                contactNumber: "",
                picture: "/TEAM5/PLAYERS_PICTURES/SHAFIQ.jpeg",
                bFormPicture: "/TEAM5/PLAYERS_DOCUMENTS/SHAFIQ.jpeg",
                bFormNumber: "71401-4020161-3",
                dateOfBirth: "2014-11-14",
                age: calculateAge("2014-11-14")
            },
            {
                id: "player-6-t5",
                name: "Hafiz Anwar",
                fathersName: "Anwar Khan",
                contactNumber: "",
                picture: "/TEAM5/PLAYERS_PICTURES/HAFIZ-ANWAR.jpeg",
                bFormPicture: "/TEAM5/PLAYERS_DOCUMENTS/HAFIZ-ANWAR.jpeg",
                bFormNumber: "71702-0344816-1",
                dateOfBirth: "2014-06-28",
                age: calculateAge("2014-06-28")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t5",
                name: "Ajmal Nadir",
                fathersName: "Nadir",
                contactNumber: "",
                picture: "/TEAM5/PLAYERS_PICTURES/AJMAL.jpeg",
                bFormPicture: "/TEAM5/PLAYERS_DOCUMENTS/AJMAL.jpeg",
                bFormNumber: "71401-4694005-5",
                dateOfBirth: "2014-12-27",
                age: calculateAge("2014-12-27")
            },
            {
                id: "substitutePlayer-2-t5",
                name: "Zaib Alam",
                fathersName: "",
                contactNumber: "",
                picture: "/TEAM5/PLAYERS_PICTURES/ZAIB.jpeg",
                bFormPicture: "/TEAM5/PLAYERS_DOCUMENTS/ZAIB.jpeg",
                bFormNumber: "",
                dateOfBirth: "",
                age: null
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t5",
                name: "Shazaib",
                fathersName: "Aman Ali Shah",
                contactNumber: "",
                picture: "/TEAM5/PLAYERS_PICTURES/SHAZAIB.jpeg",
                bFormPicture: "/TEAM5/PLAYERS_DOCUMENTS/SHAZAIB.jpeg",
                bFormNumber: "71401-3327073-1",
                dateOfBirth: "2014-03-31",
                age: calculateAge("2014-03-31")
            },
            {
                id: "Reserveplayer-2-t5",
                name: "Ahil",
                fathersName: "Ibrahim Jan",
                contactNumber: "",
                picture: "/TEAM5/PLAYERS_PICTURES/AHIL.jpeg",
                bFormPicture: "/TEAM5/PLAYERS_DOCUMENTS/AHIL.jpeg",
                bFormNumber: "71401-7460176-9",
                dateOfBirth: "2016-04-03",
                age: calculateAge("2016-04-03")
            },
            {
                id: "Reserveplayer-3-t5",
                name: "Mudasir",
                fathersName: "Aman Ali Shah",
                contactNumber: "",
                picture: "/TEAM5/PLAYERS_PICTURES/MUDASIR.jpeg",
                bFormPicture: "/TEAM5/PLAYERS_DOCUMENTS/MUDASIR.jpeg",
                bFormNumber: "71403-0354220-5",
                dateOfBirth: "2017-01-01",
                age: calculateAge("2017-01-01")
            }
        ]
    },
    //    ==================== TEAM 6 ====================
    // VERYON UNITED
    {
        id: "team-6",
        teamName: "VEYRON UNITED",
        teamLogo: "/TEAM6/VER-LOGO.png",
        teamCoach: "Zakir Abaas",
        coachNumber: "3554932234",
        jkLocation: "HUSSAIN ABAD COLONY JUTIAL GILGIT",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t6",
                name: "Ayan Abbas",
                fathersName: "Abbas Ali",
                contactNumber: "",
                picture: "/TEAM6/PLAYERS_PICTURES/AYAN.jpeg",
                bFormPicture: "/TEAM6/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2016-10-11",
                age: calculateAge("2016-10-11")
            },
            {
                id: "player-2-t6",
                name: "Atif Zaman",
                fathersName: "Sher Zaman",
                contactNumber: "",
                picture: "/TEAM6/PLAYERS_PICTURES/ATIF.jpeg",
                bFormPicture: "/TEAM6/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2015-10-31",
                age: calculateAge("2015-10-31")
            },
            {
                id: "player-3-t6",
                name: "Rfaqat Hussain",
                fathersName: "Khadim Hussain",
                contactNumber: "",
                picture: "/TEAM6/PLAYERS_PICTURES/RAFAQAT.jpeg",
                bFormPicture: "/TEAM6/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2015-02-15",
                age: calculateAge("2015-02-15")
            },
            {
                id: "player-4-t6",
                name: "Hunaid Karim",
                fathersName: "Zafar Jan",
                contactNumber: "",
                picture: "/TEAM6/PLAYERS_PICTURES/HUNAID.jpeg",
                bFormPicture: "/TEAM6/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2014-08-18",
                age: calculateAge("2014-08-18")
            },
            {
                id: "player-5-t6",
                name: "Ahmad Faraz",
                fathersName: "Hussain Ulah",
                contactNumber: "",
                picture: "/TEAM6/PLAYERS_PICTURES/AHMAD.jpeg",
                bFormPicture: "/TEAM6/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2014-02-07",
                age: calculateAge("2014-02-07")
            },
            {
                id: "player-6-t6",
                name: "Muhamad Arnain",
                fathersName: "Muhammad Latif",
                contactNumber: "",
                picture: "/TEAM6/PLAYERS_PICTURES/ARNAIN.jpeg",
                bFormPicture: "/TEAM6/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2014-01-11",
                age: calculateAge("2014-01-11")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t6",
                name: "Ahil Alam",
                fathersName: "Naik Alam",
                contactNumber: "",
                picture: "/TEAM6/PLAYERS_PICTURES/AHIL.jpeg",
                bFormPicture: "/TEAM6/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2014-08-31",
                age: calculateAge("2014-08-31")
            },
            {
                id: "Reserveplayer-2-t6",
                name: "Eyad Jamal",
                fathersName: "Jamal Uddin",
                contactNumber: "",
                picture: "/TEAM6/PLAYERS_PICTURES/EYAD.jpeg",
                bFormPicture: "/TEAM6/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2014-09-17",
                age: calculateAge("2014-09-17")
            },
            {
                id: "Reserveplayer-3-t6",
                name: "Yasha Karim",
                fathersName: "Issa Karim",
                contactNumber: "",
                picture: "/TEAM6/PLAYERS_PICTURES/YASHA.jpeg",
                bFormPicture: "/TEAM6/PLAYERS_DOCUMENTS/YASHA.jpeg",
                dateOfBirth: "2014-05-24",
                age: calculateAge("2014-05-24")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t6",
                name: "Asad Zaman",
                fathersName: "Sher Zaman",
                contactNumber: "",
                picture: "/TEAM6/PLAYERS_PICTURES/ASAD.jpeg",
                bFormPicture: "/TEAM6/PLAYERS_DOCUMENTS/ASAD.jpeg",
                dateOfBirth: "2014-06-04",
                age: calculateAge("2014-06-04")
            },
            {
                id: "substitutePlayer-2-t6",
                name: "Ahmad Nawaz",
                fathersName: "Sher Nawaz",
                contactNumber: "",
                picture: "/TEAM6/PLAYERS_PICTURES/AHMAD.jpeg",
                bFormPicture: "/TEAM6/PLAYERS_DOCUMENTS/AHMAD.jpeg",
                dateOfBirth: "2014-12-08",
                age: calculateAge("2014-12-08")
            }
        ]
    },
    //    ==================== TEAM 7 ====================
    // NCS UNITED A
    {
        id: "team-7",
        teamName: "NCS UNITED A",
        teamLogo: "/TEAM7/NCS_logo.png",
        teamCoach: "Aqib Babar",
        coachNumber: "03554370937",
        jkLocation: "NOOR COLONY JK",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t7",
                name: "Bazil Fazaz",
                fathersName: "Sher Faraz",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2016-07-19",
                age: calculateAge("2016-07-19")
            },
            {
                id: "player-2-t7",
                name: "Hasnain Qadir",
                fathersName: "Qadir Khan",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2016-08-02",
                age: calculateAge("2016-08-02")
            },
            {
                id: "player-3-t7",
                name: "Bilal Mussa",
                fathersName: "Mussa Baig",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2015-04-20",
                age: calculateAge("2015-04-20")
            },
            {
                id: "player-4-t7",
                name: "Akash Ali",
                fathersName: "Ali Madad",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2014-06-07",
                age: calculateAge("2014-06-07")
            },
            {
                id: "player-5-t7",
                name: "Junaid Karim",
                fathersName: "Maharban Shah",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2015-12-15",
                age: calculateAge("2015-12-15")
            },
            {
                id: "player-6-t7",
                name: "Sameed Khan",
                fathersName: "Shaheen Khan",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2015-12-22",
                age: calculateAge("2015-12-22")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t7",
                name: "Tufail Alam",
                fathersName: "Tati Shah",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/",
                dateOfBirth: "",
                age: null
            },
            {
                id: "Reserveplayer-2-t7",
                name: "Ahil Faraz",
                fathersName: "Sher Faraz",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/",
                dateOfBirth: "",
                age: null
            },
            {
                id: "Reserveplayer-3-t7",
                name: "Ahmad Hassan",
                fathersName: "Shafqat Ali",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/",
                dateOfBirth: "",
                age: null
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t7",
                name: "Shahzain Aziz",
                fathersName: "Mirza Aziz",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2016-11-11",
                age: calculateAge("2016-11-11")
            },
            {
                id: "substitutePlayer-2-t7",
                name: "Ali Hassan",
                fathersName: "Shafqat Ali",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2016-10-14",
                age: calculateAge("2016-10-14")
            }
        ]
    },
    //    ==================== TEAM 8 ====================
    // NCS UNITED B
    {
        id: "team-8",
        teamName: "NCS UNITED B",
        teamLogo: "/TEAM8/NCS_logo.png",
        teamCoach: "Aqib Babar",
        coachNumber: "03554370937",
        jkLocation: "NOOR COLONY JK",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t8",
                name: "Adeeb Faraz",
                fathersName: "Sher Faraz",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2015-04-01",
                age: calculateAge("2015-04-01")
            },
            {
                id: "player-2-t8",
                name: "Rahil Mussa",
                fathersName: "Mussa Baig",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2014-11-16",
                age: calculateAge("2014-11-16")
            },
            {
                id: "player-3-t8",
                name: "Tanveer Alam",
                fathersName: "Tati Shah",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/    ",
                dateOfBirth: "2015-06-06",
                age: calculateAge("2015-06-06")
            },
            {
                id: "player-4-t8",
                name: "Syed Ehsan",
                fathersName: "Ali Rahmet",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2014-03-23",
                age: calculateAge("2014-03-23")
            },
            {
                id: "player-5-t8",
                name: "Jawad Karim",
                fathersName: "Meharban Shah",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2015-12-15",
                age: calculateAge("2015-12-15")
            },
            {
                id: "player-6-t8",
                name: "Hasnain Babar",
                fathersName: "Babar Khan",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2018-03-25",
                age: calculateAge("2018-03-25")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t8",
                name: "Faizan",
                fathersName: "Durdana Shah",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/",
                dateOfBirth: "",
                age: null
            },
            {
                id: "Reserveplayer-2-t8",
                name: "Emair",
                fathersName: "Asghar",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/",
                dateOfBirth: "",
                age: null
            },
            {
                id: "Reserveplayer-3-t8",
                name: "Ali Salman",
                fathersName: "Bahar Shah",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/",
                dateOfBirth: "",
                age: null
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t8",
                name: "Tahir Alam",
                fathersName: "Tati Shah",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2017-03-09",
                age: calculateAge("2017-03-09")
            },
            {
                id: "substitutePlayer-2-t8",
                name: "Ijlal Mussa",
                fathersName: "Mussa Baig",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/",
                dateOfBirth: "2017-09-23",
                age: calculateAge("2017-09-23")
            }
        ]
    }
];