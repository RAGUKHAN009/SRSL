import { calculateAge } from '../utils/calculateAge';

export const teams = [
    //    ==================== TEAM 1 ====================
    // HINDU KUSH STRICKERS
    {
        id: "Team-1",
        teamName: "Hindu Kush .S",
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
                dateOfBirth: "2014-10-01",
                age: calculateAge("2014-10-01")
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
                name: "Fawad Anwar",
                fathersName: "Khursheed Anwar",
                contactNumber: "+923 5543 75995",
                picture: "/TEAM1/PLAYERS_PICTURES/",
                bFormPicture: "/TEAM1/PLAYERS_DOCUMENTS/HARIS.jpeg",
                bFormNumber: "37405-2345330-5",
                dateOfBirth: "2016-07-20",
                age: calculateAge("2016-07-20")
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
        id: "Team-2",
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
        id: "Team-3",
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
                dateOfBirth: "2015-07-10",
                age: calculateAge("2015-07-10")
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
        id: "Team-4",
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
                dateOfBirth: "2014-07-23",
                age: calculateAge("2014-07-23")
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
        id: "Team-5",
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
        id: "Team-6",
        teamName: "VEYRON UNITED",
        teamLogo: "/TEAM6/VER-LOGO.png",
        teamCoach: "Zakir Abaas",
        coachNumber: "3554932234",
        jkLocation: "HUSSAIN ABAD COLONY",
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
        teamName: "NCS UNITED",
        teamLogo: "/TEAM7/NCS_logo.png",
        teamCoach: "Aqib Babar",
        coachNumber: "03554370937",
        jkLocation: "NOOR COLONY JK",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t7",
                name: "Adeeb Faraz",
                fathersName: "Sher Faraz",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/ADEEB-FARAZ.jpeg",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/ADEEB-FARAZ.jpeg",
                bFormNumber: "7140403507073",
                dateOfBirth: "2015-04-01",
                age: calculateAge("2015-04-01")
            },
            {
                id: "player-2-t7",
                name: "Rahil Mussa",
                fathersName: "Mussa Baig",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/RAHIL-MUSSA.jpeg",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/RAHIL-MUSSA.jpeg",
                bFormNumber: "7140123157331",
                dateOfBirth: "2014-11-16",
                age: calculateAge("2014-11-16")
            },
            {
                id: "player-3-t7",
                name: "Hasnain Qadir",
                fathersName: "Qadir Khan",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/HASNAIN-QADIR.jpeg",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/HASNAIN-QADIR.jpeg",
                bFormNumber: "7140166707177",
                dateOfBirth: "2016-08-02",
                age: calculateAge("2016-08-02")
            },
            {
                id: "player-4-t7",
                name: "Bazil Faraz",
                fathersName: "Sher Faraz",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/BAZIL-FARAZ.jpeg",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/BAZIL-FARAZ.jpeg",
                bFormNumber: "7140183880773",
                dateOfBirth: "2016-07-19",
                age: calculateAge("2016-07-19")
            },
            {
                id: "player-5-t7",
                name: "Jawad Karim",
                fathersName: "Meharban Shah",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/JAWAD-KARIM.jpeg",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/JAWAD-KARIM.jpeg",
                bFormNumber: "7140166707177",
                dateOfBirth: "2015-12-15",
                age: calculateAge("2015-12-15")
            },
            {
                id: "player-6-t7",
                name: "Hasnain Babar",
                fathersName: "Babar Khan",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/HASNAIN-BABAR.jpeg",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/HASNAIN-BABAR.jpeg",
                bFormNumber: "7140176377325",
                dateOfBirth: "2018-03-25",
                age: calculateAge("2018-03-25")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t7",
                name: "Tahir Alam",
                fathersName: "Tati Shah",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/TAHIR-ALAM.jpeg",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/TAHIR-ALAM.jpeg",
                bFormNumber: "7140177755431",
                dateOfBirth: "2017-03-09",
                age: calculateAge("2017-03-09")
            },
            {
                id: "substitutePlayer-2-t7",
                name: "Sameed Khan",
                fathersName: "Shaheen Khan",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/SAMEED-KHAN.jpeg",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/SAMEED-KHAN.jpeg",
                bFormNumber: "7150166385387",
                dateOfBirth: "2015-12-22",
                age: calculateAge("2015-12-22")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t7",
                name: "Ijlal Mussa",
                fathersName: "Mussa Baig",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/IJLAL-MUSSA.jpeg",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/IJLAL-MUSSA.jpeg",
                bFormNumber: "7140183880773",
                dateOfBirth: "2017-09-23",
                age: calculateAge("2017-09-23")
            },
            {
                id: "Reserveplayer-2-t7",
                name: "Shahzain Aziz",
                fathersName: "Mirza Aziz",
                contactNumber: "",
                picture: "/TEAM7/PLAYERS_PICTURES/SHAHZAIN-AZIZ.jpeg",
                bFormPicture: "/TEAM7/PLAYERS_DOCUMENTS/SHAHZAIN-AZIZ.jpeg",
                bFormNumber: "7140122041383",
                dateOfBirth: "2016-11-11",
                age: calculateAge("2016-11-11")
            }
        ]
    },
    //    ==================== TEAM 8 ====================
    // SAKWAR FC
    {
        id: "team-8",
        teamName: "SAKWAR SHAHEENS",
        teamLogo: "/TEAM8/SAKWAR.jpeg",
        teamCoach: "ZIYAN KHAN",
        coachNumber: "3555735830",
        jkLocation: "ALI-ABAD SAKWAR",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t8",
                name: "REHAN",
                fathersName: "JAFER ALI",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/REHAN.jpeg",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/REHAN.jpeg",
                bFormNumber: "71403-0367211-9",
                dateOfBirth: "2014-10-04",
                age: calculateAge("2014-10-04")
            },
            {
                id: "player-2-t8",
                name: "SIBTAIN HASSAN (GK)",
                fathersName: "M. HASSAN",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/SIBTAIN-HASSAN.jpeg",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/SIBTAIN-HASSAN.jpeg",
                bFormNumber: "71403-0359920-6",
                dateOfBirth: "2015-11-02",
                age: calculateAge("2015-11-02")
            },
            {
                id: "player-3-t8",
                name: "FAWAD MAQSOOD",
                fathersName: "MAQSOOD WALI",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/FAWAD-MAQSOOD.jpeg",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/FAWAD-MAQSOOD.jpeg",
                bFormNumber: "71403-0367246-9",
                dateOfBirth: "2014-10-03",
                age: calculateAge("2014-10-03")
            },
            {
                id: "player-4-t8",
                name: "JIBRAN AFSAR",
                fathersName: "AFSAR ALI KHAN",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/JIBRAN-AFSAR.jpeg",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/JIBRAN-AFSAR.jpeg",
                bFormNumber: "71401-7510218-7",
                dateOfBirth: "2015-01-25",
                age: calculateAge("2015-01-25")
            },
            {
                id: "player-5-t8",
                name: "SHOAIB AZAM",
                fathersName: "SHER AZAM",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/SHOAIB-AZAM.jpeg",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/SHOAIB-AZAM.jpeg",
                bFormNumber: "71403-0359788-5",
                dateOfBirth: "2014-11-09",
                age: calculateAge("2014-11-09")
            },
            {
                id: "player-6-t8",
                name: "RAHEEL ALI",
                fathersName: "BAHADUR KHAN",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/RAHEEL-ALI.jpeg",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/RAHEEL-ALI.jpeg",
                bFormNumber: "71403-0363689-5",
                dateOfBirth: "2016-09-09",
                age: calculateAge("2016-09-09")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t8",
                name: "WAJI-UD-DEEN",
                fathersName: "M. NADIR",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/WAJI-UD-DEEN.jpeg",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/WAJI-UD-DEEN.jpeg",
                bFormNumber: "71403-0377093-5",
                dateOfBirth: "2016-01-30",
                age: calculateAge("2016-01-30")
            },
            {
                id: "substitutePlayer-2-t8",
                name: "MANSOOR ALI",
                fathersName: "SHER MADAD",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/MANSOOR-ALI.jpeg",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/MANSOOR-ALI.jpeg",
                bFormNumber: "71403-0378818-7",
                dateOfBirth: "2016-12-10",
                age: calculateAge("2016-12-10")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t8",
                name: "SALMAN (GK)",
                fathersName: "FARMAN ALI",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/SALMAN.jpeg",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/SALMAN.jpeg",
                bFormNumber: "15201-5875462-9",
                dateOfBirth: "2014-09-02",
                age: calculateAge("2014-09-02")
            },
            {
                id: "Reserveplayer-2-t8",
                name: "FURQAN ALI",
                fathersName: "AMAN ALI KHAN",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/FURQAN-ALI.jpeg",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/FURQAN-ALI.jpeg",
                bFormNumber: "71403-03590527",
                dateOfBirth: "2016-03-18",
                age: calculateAge("2016-03-18")
            },
            {
                id: "Reserveplayer-3-t8",
                name: "AHSAN HAMEED",
                fathersName: "ABDUL HAMEED",
                contactNumber: "",
                picture: "/TEAM8/PLAYERS_PICTURES/AHSAN-HAMEED.jpeg",
                bFormPicture: "/TEAM8/PLAYERS_DOCUMENTS/AHSAN-HAMEED.jpeg",
                bFormNumber: "71403-0368616-5",
                dateOfBirth: "2016-07-12",
                age: calculateAge("2016-07-12")
            }
        ]
    },
    //    ==================== TEAM 9 ====================
    // OSHIKHANDAS JK9
    // {
    //     id: "team-9",
    //     teamName: "OSHIKHANDAS STRICKERS",
    //     teamLogo: "/TEAM9/OSHIKHANDAS-STRICKERS.png",
    //     teamCoach: "Saran Qureshi",
    //     coachNumber: "3554937776",
    //     jkLocation: "OSHIKHANDAS JK 9",
    //     teamGSL: "JKGSL",

    //     teamPlayers: [
    //         {
    //             id: "player-1-t9",
    //             name: "Fazan",
    //             fathersName: "Rehmat Karim",
    //             contactNumber: "",
    //             picture: "/TEAM9/PLAYERS_PICTURES/FAZAN.jpeg",
    //             bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/FAZAN.jpeg",
    //             bFormNumber: "71501-1744768-9",
    //             dateOfBirth: "2014-02-05",
    //             age: calculateAge("2014-02-05")
    //         },
    //         {
    //             id: "player-2-t9",
    //             name: "Akash Ali",
    //             fathersName: "Aloading",
    //             contactNumber: "",
    //             picture: "/TEAM9/PLAYERS_PICTURES/AKASH-ALI.jpeg",
    //             bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/AKASH-ALI.jpeg",
    //             bFormNumber: "71501-0617833-9",
    //             dateOfBirth: "2013-01-26",
    //             age: calculateAge("2013-01-26")
    //         },
    //         {
    //             id: "player-3-t9",
    //             name: "Fayiz",
    //             fathersName: "Imtiaz",
    //             contactNumber: "",
    //             picture: "/TEAM9/PLAYERS_PICTURES/FAYIZ.jpeg",
    //             bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/FAYIZ.jpeg",
    //             bFormNumber: "71501-4658031-3",
    //             dateOfBirth: "2014-34-26",
    //             age: null
    //         },
    //         {
    //             id: "player-4-t9",
    //             name: "Asif",
    //             fathersName: "Aslam",
    //             contactNumber: "",
    //             picture: "/TEAM9/PLAYERS_PICTURES/ASIF.jpeg",
    //             bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/ASIF.jpeg",
    //             bFormNumber: "71403-0371424-3",
    //             dateOfBirth: "2016-03-01",
    //             age: calculateAge("2016-03-01")
    //         },
    //         {
    //             id: "player-5-t9",
    //             name: "Zeeshan",
    //             fathersName: "Noor Ali",
    //             contactNumber: "",
    //             picture: "/TEAM9/PLAYERS_PICTURES/ZEESHAN.jpeg",
    //             bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/ZEESHAN.jpeg",
    //             bFormNumber: "71501-9069105-1",
    //             dateOfBirth: "2014-10-12",
    //             age: calculateAge("2014-10-12")
    //         },
    //         {
    //             id: "player-6-t9",
    //             name: "Amad",
    //             fathersName: "Zulfaqir",
    //             contactNumber: "",
    //             picture: "/TEAM9/PLAYERS_PICTURES/AMAD.jpeg",
    //             bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/AMAD.jpeg",
    //             bFormNumber: "71702-0345570-5",
    //             dateOfBirth: "2015-01-30",
    //             age: calculateAge("2015-01-30")
    //         }
    //     ],

    //     substitutePlayers: [
    //         {
    //             id: "substitutePlayer-1-t9",
    //             name: "Nihan",
    //             fathersName: "Salman",
    //             contactNumber: "",
    //             picture: "/TEAM9/PLAYERS_PICTURES/NIHAN.jpeg",
    //             bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/NIHAN.jpeg",
    //             bFormNumber: "71501-1071387-1",
    //             dateOfBirth: "2014-20-20",
    //             age: null
    //         },
    //         {
    //             id: "substitutePlayer-2-t9",
    //             name: "Rayan Ali",
    //             fathersName: "Aliyar Khan",
    //             contactNumber: "",
    //             picture: "/TEAM9/PLAYERS_PICTURES/RAYAN-ALI.jpeg",
    //             bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/RAYAN-ALI.jpeg",
    //             bFormNumber: "42401-8291821-5",
    //             dateOfBirth: "2014-02-25",
    //             age: calculateAge("2014-02-25")
    //         }
    //     ],

    //     reservePlayers: [
    //         {
    //             id: "Reserveplayer-1-t9",
    //             name: "Nihan",
    //             fathersName: "Farman",
    //             contactNumber: "",
    //             picture: "/TEAM9/PLAYERS_PICTURES/NIHAN-RESERVE.jpeg",
    //             bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/NIHAN-RESERVE.jpeg",
    //             bFormNumber: "71501-915739-5",
    //             dateOfBirth: "2014-03-06",
    //             age: calculateAge("2014-03-06")
    //         },
    //         {
    //             id: "Reserveplayer-2-t9",
    //             name: "Hamdan Karim",
    //             fathersName: "Karim Uadin",
    //             contactNumber: "",
    //             picture: "/TEAM9/PLAYERS_PICTURES/HAMDAN-KARIM.jpeg",
    //             bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/HAMDAN-KARIM.jpeg",
    //             bFormNumber: "71501-3629860-9",
    //             dateOfBirth: "2015-10-15",
    //             age: calculateAge("2015-10-15")
    //         },
    //         {
    //             id: "Reserveplayer-3-t9",
    //             name: "Hashmi Nusrat",
    //             fathersName: "Nusrat Ali",
    //             contactNumber: "",
    //             picture: "/TEAM9/PLAYERS_PICTURES/HASHMI-NUSRAT.jpeg",
    //             bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/HASHMI-NUSRAT.jpeg",
    //             bFormNumber: "71403-0365063-1",
    //             dateOfBirth: "2014-04-24",
    //             age: calculateAge("2014-04-24")
    //         }
    //     ]
    // },
    //    ==================== TEAM 10 ====================
    // CENTERAL JK
    {
        id: "team-10",
        teamName: "CJK SHAHEEN A",
        teamLogo: "/TEAM10/CJK-SHAHEEN-A.png",
        teamCoach: "Sabil Karim",
        coachNumber: "3705152207",
        jkLocation: "",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t10",
                name: "Hasnain Ali",
                fathersName: "Mohsin Ali",
                contactNumber: "",
                picture: "/TEAM10/PLAYERS_PICTURES/HASNAIN-ALI.jpeg",
                bFormPicture: "/TEAM10/PLAYERS_DOCUMENTS/HASNAIN-ALI.jpeg",
                bFormNumber: "71801-03427863",
                dateOfBirth: "2015-04-16",
                age: calculateAge("2015-04-16")
            },
            {
                id: "player-2-t10",
                name: "Rahen Iqbal",
                fathersName: "Gojjar Khan",
                contactNumber: "",
                picture: "/TEAM10/PLAYERS_PICTURES/RAHEN-IQBAL.jpeg",
                bFormPicture: "/TEAM10/PLAYERS_DOCUMENTS/RAHEN-IQBAL.jpeg",
                bFormNumber: "71402-4111577-2",
                dateOfBirth: "2015-07-01",
                age: calculateAge("2015-07-01")
            },
            {
                id: "player-3-t10",
                name: "Sayyan Ali",
                fathersName: "Sultan Khan",
                contactNumber: "",
                picture: "/TEAM10/PLAYERS_PICTURES/SAYYAN-ALI.jpeg",
                bFormPicture: "/TEAM10/PLAYERS_DOCUMENTS/SAYYAN-ALI.jpeg",
                bFormNumber: "71501-1457382-3",
                dateOfBirth: "2015-11-28",
                age: calculateAge("2015-11-28")
            },
            {
                id: "player-4-t10",
                name: "Reyan Ali",
                fathersName: "Sultan Khan",
                contactNumber: "",
                picture: "/TEAM10/PLAYERS_PICTURES/REYAN-ALI.jpeg",
                bFormPicture: "/TEAM10/PLAYERS_DOCUMENTS/REYAN-ALI.jpeg",
                bFormNumber: "",
                dateOfBirth: "2014-11-20",
                age: calculateAge("2014-11-20")
            },
            {
                id: "player-5-t10",
                name: "Fawad Ali",
                fathersName: "Shakoor Murad",
                contactNumber: "",
                picture: "/TEAM10/PLAYERS_PICTURES/FAWAD-ALI.jpeg",
                bFormPicture: "/TEAM10/PLAYERS_DOCUMENTS/FAWAD-ALI.jpeg",
                bFormNumber: "71403-0371653-5",
                dateOfBirth: "2014-04-24",
                age: calculateAge("2014-04-24")
            },
            {
                id: "player-6-t10",
                name: "Rayyan Sultan",
                fathersName: "Sultan Ali",
                contactNumber: "",
                picture: "/TEAM10/PLAYERS_PICTURES/RAYYAN-SULTAN.jpeg",
                bFormPicture: "/TEAM10/PLAYERS_DOCUMENTS/RAYYAN-SULTAN.jpeg",
                bFormNumber: "71401-5811790-1",
                dateOfBirth: "2014-10-25",
                age: calculateAge("2014-10-25")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t10",
                name: "Haseeb Karim",
                fathersName: "Safdar Karim",
                contactNumber: "",
                picture: "/TEAM10/PLAYERS_PICTURES/HASEEB-KARIM.jpeg",
                bFormPicture: "/TEAM10/PLAYERS_DOCUMENTS/HASEEB-KARIM.jpeg",
                bFormNumber: "71702-0346953-9",
                dateOfBirth: "2014-04-16",
                age: calculateAge("2014-04-16")
            },
            {
                id: "substitutePlayer-2-t10",
                name: "M. Irtiza",
                fathersName: "Hamza Karim",
                contactNumber: "",
                picture: "/TEAM10/PLAYERS_PICTURES/M-IRTIZA.jpeg",
                bFormPicture: "/TEAM10/PLAYERS_DOCUMENTS/M-IRTIZA.jpeg",
                bFormNumber: "34301-4381914-7",
                dateOfBirth: "2014-03-30",
                age: calculateAge("2014-03-30")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t10",
                name: "Sherko Aman",
                fathersName: "Bulbul Aman",
                contactNumber: "",
                picture: "/TEAM10/PLAYERS_PICTURES/SHERKO-AMAN.jpeg",
                bFormPicture: "/TEAM10/PLAYERS_DOCUMENTS/SHERKO-AMAN.jpeg",
                bFormNumber: "71501-3716727-5",
                dateOfBirth: "2014-12-19",
                age: calculateAge("2014-12-19")
            },
            {
                id: "Reserveplayer-2-t10",
                name: "Shawaiz Ali",
                fathersName: "Kamil Jan",
                contactNumber: "",
                picture: "/TEAM10/PLAYERS_PICTURES/SHAWAIZ-ALI.jpeg",
                bFormPicture: "/TEAM10/PLAYERS_DOCUMENTS/SHAWAIZ-ALI.jpeg",
                bFormNumber: "71501-5578412-1",
                dateOfBirth: "2015-08-01",
                age: calculateAge("2015-08-01")
            },
            {
                id: "Reserveplayer-3-t10",
                name: "Wahaj",
                fathersName: "",
                contactNumber: "",
                picture: "/TEAM10/PLAYERS_PICTURES/WAHAJ.jpeg",
                bFormPicture: "/TEAM10/PLAYERS_DOCUMENTS/WAHAJ.jpeg",
                bFormNumber: "",
                dateOfBirth: "",
                age: null
            }
        ]
    },
    //    ==================== TEAM 11 ====================
    // CENTERAL JK
    {
        id: "team-11",
        teamName: "CJK SHAHEEN B",
        teamLogo: "/TEAM11/CJK-SHAHEEN-B.png",
        teamCoach: "Shoaib Ali",
        coachNumber: "3554358627",
        jkLocation: "",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t11",
                name: "Shazaib Nawaz",
                fathersName: "Dil Nawaz",
                contactNumber: "",
                picture: "/TEAM11/PLAYERS_PICTURES/SHAZAIB-NAWAZ.jpeg",
                bFormPicture: "/TEAM11/PLAYERS_DOCUMENTS/SHAZAIB-NAWAZ.jpeg",
                bFormNumber: "71501-6263354-5",
                dateOfBirth: "2017-11-12",
                age: calculateAge("2017-11-12")
            },
            {
                id: "player-2-t11",
                name: "Abdul Karim",
                fathersName: "Rehmat Karim Baig",
                contactNumber: "",
                picture: "/TEAM11/PLAYERS_PICTURES/ABDUL-KARIM.jpeg",
                bFormPicture: "/TEAM11/PLAYERS_DOCUMENTS/ABDUL-KARIM.jpeg",
                bFormNumber: "71501-2083154-7",
                dateOfBirth: "2016-03-23",
                age: calculateAge("2016-03-23")
            },
            {
                id: "player-3-t11",
                name: "Nouman Raja",
                fathersName: "Javed Raja",
                contactNumber: "",
                picture: "/TEAM11/PLAYERS_PICTURES/NOUMAN-RAJA.jpeg",
                bFormPicture: "/TEAM11/PLAYERS_DOCUMENTS/NOUMAN-RAJA.jpeg",
                bFormNumber: "71403-0371261-5",
                dateOfBirth: "2014-01-01",
                age: calculateAge("2014-01-01")
            },
            {
                id: "player-4-t11",
                name: "Paras Karim",
                fathersName: "Karim Uddin",
                contactNumber: "",
                picture: "/TEAM11/PLAYERS_PICTURES/PARAS-KARIM.jpeg",
                bFormPicture: "/TEAM11/PLAYERS_DOCUMENTS/PARAS-KARIM.jpeg",
                bFormNumber: "71501-9276014-7",
                dateOfBirth: "2015-04-14",
                age: calculateAge("2015-04-14")
            },
            {
                id: "player-5-t11",
                name: "Talha",
                fathersName: "",
                contactNumber: "",
                picture: "/TEAM11/PLAYERS_PICTURES/TALHA.jpeg",
                bFormPicture: "/TEAM11/PLAYERS_DOCUMENTS/TALHA.jpeg",
                bFormNumber: "",
                dateOfBirth: "",
                age: null
            },
            {
                id: "player-6-t11",
                name: "Haseed Karim",
                fathersName: "Safdar Karim",
                contactNumber: "",
                picture: "/TEAM11/PLAYERS_PICTURES/HASEED-KARIM.jpeg",
                bFormPicture: "/TEAM11/PLAYERS_DOCUMENTS/HASEED-KARIM.jpeg",
                bFormNumber: "71702-0346950-5",
                dateOfBirth: "2014-04-16",
                age: calculateAge("2014-04-16")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t11",
                name: "Shazaib Khan",
                fathersName: "Amin Khan",
                contactNumber: "",
                picture: "/TEAM11/PLAYERS_PICTURES/SHAZAIB-KHAN.jpeg",
                bFormPicture: "/TEAM11/PLAYERS_DOCUMENTS/SHAZAIB-KHAN.jpeg",
                bFormNumber: "71501-6426871-1",
                dateOfBirth: "2017-04-21",
                age: calculateAge("2017-04-21")
            }
        ],

        reservePlayers: []
    },
    //    ==================== TEAM 12 ====================
    // AL-Hadi Juniors
    {
        id: "team-12",
        teamName: "AL-Hadi Juniors",
        teamLogo: "/TEAM12/ALHADI.jpeg",
        teamCoach: "Azlan Rustam",
        coachNumber: "03129976690",
        jkLocation: "",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t12",
                name: "Ayaz Khan",
                fathersName: "Sulaiman Khan",
                contactNumber: "",
                picture: "/TEAM12/PLAYERS_PICTURES/AYAZ-KHAN.jpeg",
                bFormPicture: "/TEAM12/PLAYERS_DOCUMENTS/AYAZ-KHAN.jpeg",
                bFormNumber: "71501-2849244-1",
                dateOfBirth: "2014-10-04",
                age: calculateAge("2014-10-04")
            },
            {
                id: "player-2-t12",
                name: "Afnan Karim",
                fathersName: "Rehmat Karim",
                contactNumber: "",
                picture: "/TEAM12/PLAYERS_PICTURES/AFNAN-KARIM.jpeg",
                bFormPicture: "/TEAM12/PLAYERS_DOCUMENTS/AFNAN-KARIM.jpeg",
                bFormNumber: "71501-0353318-9",
                dateOfBirth: "2014-09-17",
                age: calculateAge("2014-09-17")
            },
            {
                id: "player-3-t12",
                name: "Rehan Ali",
                fathersName: "Fida Ali",
                contactNumber: "",
                picture: "/TEAM12/PLAYERS_PICTURES/REHAN-ALI.jpeg",
                bFormPicture: "/TEAM12/PLAYERS_DOCUMENTS/REHAN-ALI.jpeg",
                bFormNumber: "71401-5025446-9",
                dateOfBirth: "2014-12-25",
                age: calculateAge("2014-12-25")
            },
            {
                id: "player-4-t12",
                name: "Aliyan Ali",
                fathersName: "Asgar Ali",
                contactNumber: "",
                picture: "/TEAM12/PLAYERS_PICTURES/ALIYAN-ALI.jpeg",
                bFormPicture: "/TEAM12/PLAYERS_DOCUMENTS/ALIYAN-ALI.jpeg",
                bFormNumber: "611012673771-1",
                dateOfBirth: "2016-05-20",
                age: calculateAge("2016-05-20")
            },
            {
                id: "player-5-t12",
                name: "Mohtadi Jalal",
                fathersName: "Jalal-Ud-Din",
                contactNumber: "",
                picture: "/TEAM12/PLAYERS_PICTURES/MOHTADI-JALAL.jpeg",
                bFormPicture: "/TEAM12/PLAYERS_DOCUMENTS/MOHTADI-JALAL.jpeg",
                bFormNumber: "71501-3642822-3",
                dateOfBirth: "2015-11-15",
                age: calculateAge("2015-11-15")
            },
            {
                id: "player-6-t12",
                name: "Sami Salamat",
                fathersName: "Salamat-Ud-Din",
                contactNumber: "",
                picture: "/TEAM12/PLAYERS_PICTURES/SAMI-SALAMAT.jpeg",
                bFormPicture: "/TEAM12/PLAYERS_DOCUMENTS/SAMI-SALAMAT.jpeg",
                bFormNumber: "71501-9489243-5",
                dateOfBirth: "2014-11-07",
                age: calculateAge("2014-11-07")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t12",
                name: "Ahad Aman",
                fathersName: "Aman Karin",
                contactNumber: "",
                picture: "/TEAM12/PLAYERS_PICTURES/AHAD-AMAN.jpeg",
                bFormPicture: "/TEAM12/PLAYERS_DOCUMENTS/AHAD-AMAN.jpeg",
                bFormNumber: "71501-3262425-1",
                dateOfBirth: "2015-10-26",
                age: calculateAge("2015-10-26")
            },
            {
                id: "substitutePlayer-2-t12",
                name: "Ahmed Ali",
                fathersName: "Ghulam Muhammad",
                contactNumber: "",
                picture: "/TEAM12/PLAYERS_PICTURES/AHMED-ALI.jpeg",
                bFormPicture: "/TEAM12/PLAYERS_DOCUMENTS/AHMED-ALI.jpeg",
                bFormNumber: "71501-4106379-7",
                dateOfBirth: "2015-09-05",
                age: calculateAge("2015-09-05")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t12",
                name: "Farhan Abbas",
                fathersName: "Zahid Abbas",
                contactNumber: "",
                picture: "/TEAM12/PLAYERS_PICTURES/FARHAN-ABBAS.jpeg",
                bFormPicture: "/TEAM12/PLAYERS_DOCUMENTS/FARHAN-ABBAS.jpeg",
                bFormNumber: "71601-28758-9",
                dateOfBirth: "2015-10-03",
                age: calculateAge("2015-10-03")
            },
            {
                id: "Reserveplayer-2-t12",
                name: "Ahmed Hayyat",
                fathersName: "Ali Hayat",
                contactNumber: "",
                picture: "/TEAM12/PLAYERS_PICTURES/AHMED-HAYYAT.jpeg",
                bFormPicture: "/TEAM12/PLAYERS_DOCUMENTS/AHMED-HAYYAT.jpeg",
                bFormNumber: "71401-6988572-3",
                dateOfBirth: "2014-12-15",
                age: calculateAge("2014-12-15")
            },
            {
                id: "Reserveplayer-3-t12",
                name: "Shazain Qasim",
                fathersName: "Qasim Shah",
                contactNumber: "",
                picture: "/TEAM12/PLAYERS_PICTURES/SHAZAIN-QASIM.jpeg",
                bFormPicture: "/TEAM12/PLAYERS_DOCUMENTS/SHAZAIN-QASIM.jpeg",
                bFormNumber: "71501-2027520-7",
                dateOfBirth: "2015-08-27",
                age: calculateAge("2015-08-27")
            }
        ]
    },
    //    ==================== TEAM 13 ====================
    // AL-KHAIRA FC
    {
        id: "team-13",
        teamName: "AL-KHAIRA FC",
        teamLogo: "/TEAM13/ALKHAIRFC.png",
        teamCoach: "Nazir Hussain",
        coachNumber: "03554262490",
        jkLocation: "",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t13",
                name: "Rudaab Baig",
                fathersName: "Waheed Uddin",
                contactNumber: "",
                picture: "/TEAM13/PLAYERS_PICTURES/RUDAAB-BAIG.jpeg",
                bFormPicture: "/TEAM13/PLAYERS_DOCUMENTS/RUDAAB-BAIG.jpeg",
                bFormNumber: "717023487797",
                dateOfBirth: "2015-10-16",
                age: calculateAge("2015-10-16")
            },
            {
                id: "player-2-t13",
                name: "Mudasir Iqbal",
                fathersName: "Muhammad Iqbal",
                contactNumber: "",
                picture: "/TEAM13/PLAYERS_PICTURES/MUDASIR-IQBAL.jpeg",
                bFormPicture: "/TEAM13/PLAYERS_DOCUMENTS/MUDASIR-IQBAL.jpeg",
                bFormNumber: "7150120683446",
                dateOfBirth: "2014-10-11",
                age: calculateAge("2014-10-11")
            },
            {
                id: "player-3-t13",
                name: "Muzamil Johar",
                fathersName: "Ghazi Johar",
                contactNumber: "",
                picture: "/TEAM13/PLAYERS_PICTURES/MUZAMIL-JOHAR.jpeg",
                bFormPicture: "/TEAM13/PLAYERS_DOCUMENTS/MUZAMIL-JOHAR.jpeg",
                bFormNumber: "7170203487817",
                dateOfBirth: "2014-09-22",
                age: calculateAge("2014-09-22")
            },
            {
                id: "player-4-t13",
                name: "Nihan Karim",
                fathersName: "Burhan Karim",
                contactNumber: "",
                picture: "/TEAM13/PLAYERS_PICTURES/NIHAN-KARIM.jpeg",
                bFormPicture: "/TEAM13/PLAYERS_DOCUMENTS/NIHAN-KARIM.jpeg",
                bFormNumber: "7150403857772",
                dateOfBirth: "2014-12-24",
                age: calculateAge("2014-12-24")
            },
            {
                id: "player-5-t13",
                name: "Sajil Hussain",
                fathersName: "Jama Bahadur",
                contactNumber: "",
                picture: "/TEAM13/PLAYERS_PICTURES/SAJIL-HUSSAIN.jpeg",
                bFormPicture: "/TEAM13/PLAYERS_DOCUMENTS/SAJIL-HUSSAIN.jpeg",
                bFormNumber: "7140189135825",
                dateOfBirth: "2014-10-22",
                age: calculateAge("2014-10-22")
            },
            {
                id: "player-6-t13",
                name: "Yasir Iqbal",
                fathersName: "Muhammad Iqbal",
                contactNumber: "",
                picture: "/TEAM13/PLAYERS_PICTURES/YASIR-IQBAL.jpeg",
                bFormPicture: "/TEAM13/PLAYERS_DOCUMENTS/YASIR-IQBAL.jpeg",
                bFormNumber: "7150102971937",
                dateOfBirth: "2014-10-11",
                age: calculateAge("2014-10-11")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t13",
                name: "Ali Yazdaan",
                fathersName: "Sher Zaman",
                contactNumber: "",
                picture: "/TEAM13/PLAYERS_PICTURES/ALI-YAZDAAN.jpeg",
                bFormPicture: "/TEAM13/PLAYERS_DOCUMENTS/ALI-YAZDAAN.jpeg",
                bFormNumber: "7150132355171",
                dateOfBirth: "2015-12-22",
                age: calculateAge("2015-12-22")
            },
            {
                id: "substitutePlayer-2-t13",
                name: "Zeeshan Rehmat",
                fathersName: "Mirza Rehmat",
                contactNumber: "",
                picture: "/TEAM13/PLAYERS_PICTURES/ZEESHAN-REHMAT.jpeg",
                bFormPicture: "/TEAM13/PLAYERS_DOCUMENTS/ZEESHAN-REHMAT.jpeg",
                bFormNumber: "714030377225",
                dateOfBirth: "2016-01-01",
                age: calculateAge("2016-01-01")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t13",
                name: "Haneef Baig",
                fathersName: "Karim Ullah Baig",
                contactNumber: "",
                picture: "/TEAM13/PLAYERS_PICTURES/HANEEF-BAIG.jpeg",
                bFormPicture: "/TEAM13/PLAYERS_DOCUMENTS/HANEEF-BAIG.jpeg",
                bFormNumber: "71720349018",
                dateOfBirth: "2015-04-09",
                age: calculateAge("2015-04-09")
            },
            {
                id: "Reserveplayer-2-t13",
                name: "Munir Khan",
                fathersName: "Amin Khan",
                contactNumber: "",
                picture: "/TEAM13/PLAYERS_PICTURES/MUNIR-KHAN.jpeg",
                bFormPicture: "/TEAM13/PLAYERS_DOCUMENTS/MUNIR-KHAN.jpeg",
                bFormNumber: "717030427461",
                dateOfBirth: "2015-03-21",
                age: calculateAge("2015-03-21")
            },
            {
                id: "Reserveplayer-3-t13",
                name: "Haris Ali",
                fathersName: "Hakim Jan",
                contactNumber: "",
                picture: "/TEAM13/PLAYERS_PICTURES/HARIS-ALI.jpeg",
                bFormPicture: "/TEAM13/PLAYERS_DOCUMENTS/HARIS-ALI.jpeg",
                bFormNumber: "37140524402355",
                dateOfBirth: "2016-03-25",
                age: calculateAge("2016-03-25")
            }
        ]
    },
    //    ==================== TEAM 14 ====================
    // FATIMAABAD JR
    {
        id: "team-14",
        teamName: "FATIMAABAD JR",
        teamLogo: "/TEAM14/OSHIKHANDAS.png",
        teamCoach: "Rizwan Ali Shahii",
        coachNumber: "3554239350",
        jkLocation: "JK 5",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t14",
                name: "Sannan Ali",
                fathersName: "Karimuddin",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/SANNAN-ALI.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/SANNAN-ALI.jpeg",
                bFormNumber: "26975086",
                dateOfBirth: "2018-08-01",
                age: calculateAge("2018-08-01")
            },
            {
                id: "player-2-t14",
                name: "Saqlain Ali",
                fathersName: "Mehboob",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/SAQLAIN-ALI.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/SAQLAIN-ALI.jpeg",
                bFormNumber: "12266470",
                dateOfBirth: "2015-07-11",
                age: calculateAge("2015-07-11")
            },
            {
                id: "player-3-t14",
                name: "Ayan Ali",
                fathersName: "M. Waiz",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/AYAN-ALI.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/AYAN-ALI.jpeg",
                bFormNumber: "27007406",
                dateOfBirth: "2017-07-03",
                age: calculateAge("2017-07-03")
            },
            {
                id: "player-4-t14",
                name: "Abis Ullah",
                fathersName: "Shukur Ullah Baig",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/ABIS-ULLAH.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/ABIS-ULLAH.jpeg",
                bFormNumber: "23126631",
                dateOfBirth: "2018-01-25",
                age: calculateAge("2018-01-25")
            },
            {
                id: "player-5-t14",
                name: "Rayan Alam",
                fathersName: "Shahid Alam",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/RAYAN-ALAM.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/RAYAN-ALAM.jpeg",
                bFormNumber: "47766699",
                dateOfBirth: "2016-02-14",
                age: calculateAge("2016-02-14")
            },
            {
                id: "player-6-t14",
                name: "Noor Raiz",
                fathersName: "M. Iqbal",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/NOOR-RAIZ.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/NOOR-RAIZ.jpeg",
                bFormNumber: "B757046652",
                dateOfBirth: "2018-03-13",
                age: calculateAge("2018-03-13")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t14",
                name: "Sharafat Ali",
                fathersName: "Pakhtoon Wali",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/SHARAFAT-ALI.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/SHARAFAT-ALI.jpeg",
                bFormNumber: "24609845",
                dateOfBirth: "2014-09-12",
                age: calculateAge("2014-09-12")
            },
            {
                id: "substitutePlayer-2-t14",
                name: "Fasi Uddin",
                fathersName: "Kush Amadin",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/FASI-UDDIN.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/FASI-UDDIN.jpeg",
                bFormNumber: "B757046652",
                dateOfBirth: "2015-12-30",
                age: calculateAge("2015-12-30")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t14",
                name: "Haseeb Uddin",
                fathersName: "Kush Amadin",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/HASEEB-UDDIN.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/HASEEB-UDDIN.jpeg",
                bFormNumber: "B7150142114218",
                dateOfBirth: "2018-12-18",
                age: calculateAge("2018-12-18")
            },
            {
                id: "Reserveplayer-2-t14",
                name: "Ayan Ikram",
                fathersName: "M. Ikram",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/AYAN-IKRAM.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/AYAN-IKRAM.jpeg",
                bFormNumber: "B7150132214979",
                dateOfBirth: "2018-05-16",
                age: calculateAge("2018-05-16")
            },
            {
                id: "Reserveplayer-3-t14",
                name: "Ali",
                fathersName: "Alam",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/ALI.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/ALI.jpeg",
                bFormNumber: "B7140123257554",
                dateOfBirth: "2016-03-12",
                age: calculateAge("2016-03-12")
            }
        ]
    },
    //    ==================== TEAM 15 ====================
    // AMINABAD FC
    {
        id: "team-15",
        teamName: "AMINABAD FC",
        teamLogo: "/TEAM15/TEAM15.png",
        teamCoach: "Mehboob Alam",
        coachNumber: "3452650507",
        jkLocation: "JK2 Amin-Abad Nomal",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t15",
                name: "Riyan Karim",
                fathersName: "Rahmat Karim",
                contactNumber: "",
                picture: "/TEAM15/PLAYERS_PICTURES/RIYAN-KARIM.jpeg",
                bFormPicture: "/TEAM15/PLAYERS_DOCUMENTS/RIYAN-KARIM.jpeg",
                bFormNumber: "71501-21712140",
                dateOfBirth: "2016-10-10",
                age: calculateAge("2016-10-10")
            },
            {
                id: "player-2-t15",
                name: "Ruhan Karim",
                fathersName: "Rahmat Karim",
                contactNumber: "",
                picture: "/TEAM15/PLAYERS_PICTURES/RUHAN-KARIM.jpeg",
                bFormPicture: "/TEAM15/PLAYERS_DOCUMENTS/RUHAN-KARIM.jpeg",
                bFormNumber: "71501-2171214-5",
                dateOfBirth: "2014-09-28",
                age: calculateAge("2014-09-28")
            },
            {
                id: "player-3-t15",
                name: "Rafay Ali Baig",
                fathersName: "Ikram Ullah Baig",
                contactNumber: "",
                picture: "/TEAM15/PLAYERS_PICTURES/RAFAY-ALI-BAIG.jpeg",
                bFormPicture: "/TEAM15/PLAYERS_DOCUMENTS/RAFAY-ALI-BAIG.jpeg",
                bFormNumber: "71501-6215341-7",
                dateOfBirth: "2014-09-22",
                age: calculateAge("2014-09-22")
            },
            {
                id: "player-4-t15",
                name: "Mufeez Ali Baig",
                fathersName: "Ikram Ullah Baig",
                contactNumber: "",
                picture: "/TEAM15/PLAYERS_PICTURES/MUFEEZ-ALI-BAIG.jpeg",
                bFormPicture: "/TEAM15/PLAYERS_DOCUMENTS/MUFEEZ-ALI-BAIG.jpeg",
                bFormNumber: "71501-6215246-7",
                dateOfBirth: "2014-09-22",
                age: calculateAge("2014-09-22")
            },
            {
                id: "player-5-t15",
                name: "Riaz Karim",
                fathersName: "Ajaz Karim",
                contactNumber: "",
                picture: "/TEAM15/PLAYERS_PICTURES/RIAZ-KARIM.jpeg",
                bFormPicture: "/TEAM15/PLAYERS_DOCUMENTS/RIAZ-KARIM.jpeg",
                bFormNumber: "71501-3883728-5",
                dateOfBirth: "2014-10-22",
                age: calculateAge("2014-10-22")
            },
            {
                id: "player-6-t15",
                name: "Fahad Shah",
                fathersName: "Ijlal Shah",
                contactNumber: "",
                picture: "/TEAM15/PLAYERS_PICTURES/FAHAD-SHAH.jpeg",
                bFormPicture: "/TEAM15/PLAYERS_DOCUMENTS/FAHAD-SHAH.jpeg",
                bFormNumber: "71501-8574398-1",
                dateOfBirth: "2020-01-01",
                age: calculateAge("2020-01-01")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t15",
                name: "Fahad Shah",
                fathersName: "Fahad Shah",
                contactNumber: "",
                picture: "/TEAM15/PLAYERS_PICTURES/FAHAD-SHAH.jpeg",
                bFormPicture: "/TEAM15/PLAYERS_DOCUMENTS/FAHAD-SHAH.jpeg",
                bFormNumber: "71501-8574398-1",
                dateOfBirth: "2020-01-01",
                age: calculateAge("2020-01-01")
            },
            {
                id: "substitutePlayer-2-t15",
                name: "Ridhan Karim",
                fathersName: "Rahmat Karim",
                contactNumber: "",
                picture: "/TEAM15/PLAYERS_PICTURES/RIDHAN-KARIM.jpeg",
                bFormPicture: "/TEAM15/PLAYERS_DOCUMENTS/RIDHAN-KARIM.jpeg",
                bFormNumber: "71501-0366409-3",
                dateOfBirth: "2019-04-01",
                age: calculateAge("2019-04-01")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t15",
                name: "Fareed Ali",
                fathersName: "Muhammad Ali",
                contactNumber: "",
                picture: "/TEAM15/PLAYERS_PICTURES/FAREED-ALI.jpeg",
                bFormPicture: "/TEAM15/PLAYERS_DOCUMENTS/FAREED-ALI.jpeg",
                bFormNumber: "71501-0433595-3",
                dateOfBirth: "2016-05-01",
                age: calculateAge("2016-05-01")
            },
            {
                id: "Reserveplayer-2-t15",
                name: "Eshan Ahmed",
                fathersName: "Gulam Uddin",
                contactNumber: "",
                picture: "/TEAM15/PLAYERS_PICTURES/ESHAN-AHMED.jpeg",
                bFormPicture: "/TEAM15/PLAYERS_DOCUMENTS/ESHAN-AHMED.jpeg",
                bFormNumber: "71501-0859588-9",
                dateOfBirth: "2014-09-05",
                age: calculateAge("2014-09-05")
            }
        ]
    },
    //    ==================== TEAM 16 ====================
    // NASA FC
    {
        id: "team-16",
        teamName: "NoorAbad FC",
        teamLogo: "/TEAM16/TEAM16.jpeg",
        teamCoach: "Zeeshan",
        coachNumber: "03110866879",
        jkLocation: "NoorAbad Jamatkhana",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t16",
                name: "Zahid",
                fathersName: "Zakir Hussain",
                contactNumber: "",
                picture: "/TEAM16/PLAYERS_PICTURES/ZAHID.jpeg",
                bFormPicture: "/TEAM16/PLAYERS_DOCUMENTS/ZAHID.jpeg",
                bFormNumber: "7150131921997",
                dateOfBirth: "2014-09-04",
                age: calculateAge("2014-09-04")
            },
            {
                id: "player-2-t16",
                name: "Emmed",
                fathersName: "Kawja Khan",
                contactNumber: "",
                picture: "/TEAM16/PLAYERS_PICTURES/EMMED.jpeg",
                bFormPicture: "/TEAM16/PLAYERS_DOCUMENTS/EMMED.jpeg",
                bFormNumber: "7170203530025",
                dateOfBirth: "2015-07-12",
                age: calculateAge("2015-07-12")
            },
            {
                id: "player-3-t16",
                name: "Nizar",
                fathersName: "Zahid Ali",
                contactNumber: "",
                picture: "/TEAM16/PLAYERS_PICTURES/NIZAR.jpeg",
                bFormPicture: "/TEAM16/PLAYERS_DOCUMENTS/NIZAR.jpeg",
                bFormNumber: "4230226251527",
                dateOfBirth: "2014-10-23",
                age: calculateAge("2014-10-23")
            },
            {
                id: "player-4-t16",
                name: "Adana",
                fathersName: "Mulaim Baig",
                contactNumber: "",
                picture: "/TEAM16/PLAYERS_PICTURES/ADANA.jpeg",
                bFormPicture: "/TEAM16/PLAYERS_DOCUMENTS/ADANA.jpeg",
                bFormNumber: "7140303704113",
                dateOfBirth: "2016-04-13",
                age: calculateAge("2016-04-13")
            },
            {
                id: "player-5-t16",
                name: "Rahil",
                fathersName: "M. Aslam",
                contactNumber: "",
                picture: "/TEAM16/PLAYERS_PICTURES/RAHIL.jpeg",
                bFormPicture: "/TEAM16/PLAYERS_DOCUMENTS/RAHIL.jpeg",
                bFormNumber: "7140199903953",
                dateOfBirth: "2018-03-14",
                age: calculateAge("2018-03-14")
            },
            {
                id: "player-6-t16",
                name: "Nehal",
                fathersName: "Sher Azam",
                contactNumber: "",
                picture: "/TEAM16/PLAYERS_PICTURES/NEHAL.jpeg",
                bFormPicture: "/TEAM16/PLAYERS_DOCUMENTS/NEHAL.jpeg",
                bFormNumber: "7140330300037",
                dateOfBirth: "2018-03-11",
                age: calculateAge("2018-03-11")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t16",
                name: "Aryan",
                fathersName: "Zafar Ibal",
                contactNumber: "",
                picture: "/TEAM16/PLAYERS_PICTURES/ARYAN.jpeg",
                bFormPicture: "/TEAM16/PLAYERS_DOCUMENTS/ARYAN.jpeg",
                bFormNumber: "7140303534035",
                dateOfBirth: "2017-02-05",
                age: calculateAge("2017-02-05")
            },
            {
                id: "substitutePlayer-2-t16",
                name: "Alishan",
                fathersName: "Ali Baig",
                contactNumber: "",
                picture: "/TEAM16/PLAYERS_PICTURES/ALISHAN.jpeg",
                bFormPicture: "/TEAM16/PLAYERS_DOCUMENTS/ALISHAN.jpeg",
                bFormNumber: "7150196751217",
                dateOfBirth: "2015-04-17",
                age: calculateAge("2015-04-17")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t16",
                name: "Etisham",
                fathersName: "Ali Baig",
                contactNumber: "",
                picture: "/TEAM16/PLAYERS_PICTURES/ETISHAM.jpeg",
                bFormPicture: "/TEAM16/PLAYERS_DOCUMENTS/ETISHAM.jpeg",
                bFormNumber: "7150195790767",
                dateOfBirth: "2014-04-10",
                age: calculateAge("2014-04-10")
            },
            {
                id: "Reserveplayer-2-t16",
                name: "Ahsan",
                fathersName: "Mulaim Baig",
                contactNumber: "",
                picture: "/TEAM16/PLAYERS_PICTURES/AHSAN.jpeg",
                bFormPicture: "/TEAM16/PLAYERS_DOCUMENTS/AHSAN.jpeg",
                bFormNumber: "7140303704139",
                dateOfBirth: "2018-07-02",
                age: calculateAge("2018-07-02")
            }
        ]
    },
    //    ==================== TEAM 17 ====================
    // OSHIKHANDAS YOUNGSTERS
    {
        id: "team-17",
        teamName: "JK 3 OKD",
        teamLogo: "/TEAM17/TEAM17.jpeg",
        teamCoach: "Zafran Sultan",
        coachNumber: "03554502059",
        jkLocation: "JK 3 OKD",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t17",
                name: "Moiz",
                fathersName: "Asad",
                contactNumber: "",
                picture: "/TEAM17/PLAYERS_PICTURES/MOIZ.jpeg",
                bFormPicture: "/TEAM17/PLAYERS_DOCUMENTS/MOIZ.jpeg",
                bFormNumber: "7150162849265",
                dateOfBirth: "2017-03-03",
                age: calculateAge("2017-03-03")
            },
            {
                id: "player-2-t17",
                name: "Raham Ali",
                fathersName: "Basharat",
                contactNumber: "",
                picture: "/TEAM17/PLAYERS_PICTURES/RAHAM-ALI.jpeg",
                bFormPicture: "/TEAM17/PLAYERS_DOCUMENTS/RAHAM-ALI.jpeg",
                bFormNumber: "7150119933755",
                dateOfBirth: "2014-08-21",
                age: calculateAge("2014-08-21")
            },
            {
                id: "player-3-t17",
                name: "Ali",
                fathersName: "Atiq Ur Rehman",
                contactNumber: "",
                picture: "/TEAM17/PLAYERS_PICTURES/ALI.jpeg",
                bFormPicture: "/TEAM17/PLAYERS_DOCUMENTS/ALI.jpeg",
                bFormNumber: "7150137076393",
                dateOfBirth: "2014-11-19",
                age: calculateAge("2014-11-19")
            },
            {
                id: "player-4-t17",
                name: "Zulqarnain",
                fathersName: "Naeem",
                contactNumber: "",
                picture: "/TEAM17/PLAYERS_PICTURES/ZULQARNAIN.jpeg",
                bFormPicture: "/TEAM17/PLAYERS_DOCUMENTS/ZULQARNAIN.jpeg",
                bFormNumber: "7150603524021",
                dateOfBirth: "2014-08-18",
                age: calculateAge("2014-08-18")
            },
            {
                id: "player-5-t17",
                name: "Azha",
                fathersName: "Sajad",
                contactNumber: "",
                picture: "/TEAM17/PLAYERS_PICTURES/AZHA.jpeg",
                bFormPicture: "/TEAM17/PLAYERS_DOCUMENTS/AZHA.jpeg",
                bFormNumber: "7150167181831",
                dateOfBirth: "2016-01-14",
                age: calculateAge("2016-01-14")
            },
            {
                id: "player-6-t17",
                name: "Hanan",
                fathersName: "Mehboob",
                contactNumber: "",
                picture: "/TEAM17/PLAYERS_PICTURES/HANAN.jpeg",
                bFormPicture: "/TEAM17/PLAYERS_DOCUMENTS/HANAN.jpeg",
                bFormNumber: "7150131000722",
                dateOfBirth: "2017-02-25",
                age: calculateAge("2017-02-25")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t17",
                name: "Haider Riaz",
                fathersName: "Riaz",
                contactNumber: "",
                picture: "/TEAM17/PLAYERS_PICTURES/HAIDER-RIAZ.jpeg",
                bFormPicture: "/TEAM17/PLAYERS_DOCUMENTS/HAIDER-RIAZ.jpeg",
                bFormNumber: "7170231812679",
                dateOfBirth: "2015-11-14",
                age: calculateAge("2015-11-14")
            },
            {
                id: "substitutePlayer-2-t17",
                name: "Hayan",
                fathersName: "Irfan",
                contactNumber: "",
                picture: "/TEAM17/PLAYERS_PICTURES/HAYAN.jpeg",
                bFormPicture: "/TEAM17/PLAYERS_DOCUMENTS/HAYAN.jpeg",
                bFormNumber: "7150169209563",
                dateOfBirth: "2016-11-09",
                age: calculateAge("2016-11-09")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t17",
                name: "Ubair",
                fathersName: "Alamdin",
                contactNumber: "",
                picture: "/TEAM17/PLAYERS_PICTURES/UBAIR.jpeg",
                bFormPicture: "/TEAM17/PLAYERS_DOCUMENTS/UBAIR.jpeg",
                bFormNumber: "",
                dateOfBirth: "",
                age: null
            },
            {
                id: "Reserveplayer-2-t17",
                name: "Azhan",
                fathersName: "Ali Sher Khan",
                contactNumber: "",
                picture: "/TEAM17/PLAYERS_PICTURES/AZHAN.jpeg",
                bFormPicture: "/TEAM17/PLAYERS_DOCUMENTS/AZHAN.jpeg",
                bFormNumber: "",
                dateOfBirth: "",
                age: null
            },
            {
                id: "Reserveplayer-3-t17",
                name: "Wajdan",
                fathersName: "Liaqat",
                contactNumber: "",
                picture: "/TEAM17/PLAYERS_PICTURES/WAJDAN.jpeg",
                bFormPicture: "/TEAM17/PLAYERS_DOCUMENTS/WAJDAN.jpeg",
                bFormNumber: "7150166645601",
                dateOfBirth: "2017-06-27",
                age: calculateAge("2017-06-27")
            }
        ]
    },
    //    ==================== TEAM 18 ====================
    // OSHIKHANDAS YOUNGSTERS

];