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
    // SMS GREEN 
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
                name: "Tanveer Ahmed",
                fathersName: "Ahmed",
                contactNumber: "",
                picture: "/TEAM5/PLAYERS_PICTURES/TANVEER-AHMED.jpeg",
                bFormPicture: "/TEAM5/PLAYERS_DOCUMENTS/TANVEER-AHMED.jpeg",
                bFormNumber: "71703-0344067-3",
                dateOfBirth: "2014-12-08",
                age: calculateAge("2014-12-08")
            },
            {
                id: "player-2-t5",
                name: "Ahsan Jan",
                fathersName: "Muhamma Jan",
                contactNumber: "",
                picture: "/TEAM5/PLAYERS_PICTURES/AHSAN-JAN.jpeg",
                bFormPicture: "/TEAM5/PLAYERS_DOCUMENTS/AHSAN-JAN.jpeg",
                bFormNumber: "71403-0351961-9",
                dateOfBirth: "2016-08-06",
                age: calculateAge("2016-08-06")
            },
            {
                id: "player-3-t5",
                name: "Rumail Abbas",
                fathersName: "Muhammad Abbas 0",
                contactNumber: "",
                picture: "/TEAM5/PLAYERS_PICTURES/RUMAIL-ABBAS.jpeg",
                bFormPicture: "/TEAM5/PLAYERS_DOCUMENTS/RUMAIL-ABBAS.jpeg",
                bFormNumber: "71403-0353881-7",
                dateOfBirth: "2014-12-05",
                age: calculateAge("2014-12-05")
            },
            {
                id: "player-4-t5",
                name: "Ajmal Nadir",
                fathersName: "Nadir",
                contactNumber: "",
                picture: "/TEAM5/PLAYERS_PICTURES/AJMAL-NADIR.jpeg",
                bFormPicture: "/TEAM5/PLAYERS_DOCUMENTS/AJMAL-NADIR.jpeg",
                bFormNumber: "71401-4694005-5",
                dateOfBirth: "2014-12-27",
                age: calculateAge("2014-12-27")
            },
            {
                id: "player-5-t5",
                name: "Shafiq Nazar",
                fathersName: "Lughar Nazar",
                contactNumber: "",
                picture: "/TEAM5/PLAYERS_PICTURES/SHAFIQ-NAZAR.jpeg",
                bFormPicture: "/TEAM5/PLAYERS_DOCUMENTS/SHAFIQ-NAZAR.jpeg",
                bFormNumber: "71401-4020161-3",
                dateOfBirth: "2014-11-14",
                age: calculateAge("2014-11-14")
            },
            {
                id: "player-6-t5",
                name: "Ahil",
                fathersName: "Ibrahim Jan",
                contactNumber: "",
                picture: "/TEAM5/PLAYERS_PICTURES/AHIL.jpeg",
                bFormPicture: "/TEAM5/PLAYERS_DOCUMENTS/AHIL.jpeg",
                bFormNumber: "71401-7460176-9",
                dateOfBirth: "2016-04-03",
                age: calculateAge("2016-04-03")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t5",
                name: "Mudasir",
                fathersName: "Aman Ali Shah",
                contactNumber: "",
                picture: "/TEAM5/PLAYERS_PICTURES/MUDASIR.jpeg",
                bFormPicture: "/TEAM5/PLAYERS_DOCUMENTS/MUDASIR.jpeg",
                bFormNumber: "71403-0354220-5",
                dateOfBirth: "2017-01-01",
                age: calculateAge("2017-01-01")
            }
        ],

        reservePlayers: []
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
    // OSHIKHANDAS JK 1 AL KARIM FC JR
    {
        id: "team-9",
        teamName: "AL KARIM JR FC",
        teamLogo: "/TEAM9/TEAM9.jpeg",
        teamCoach: "Hammad Ali",
        coachNumber: "3495529268",
        jkLocation: "Oshikhandas JK 1",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t9",
                name: "Arbaz Khan",
                fathersName: "Shahbaz Khan",
                contactNumber: "",
                picture: "/TEAM9/PLAYERS_PICTURES/ARBAZ-KHAN.jpeg",
                bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/ARBAZ-KHAN.jpeg",
                bFormNumber: "71501-9845248-5",
                dateOfBirth: "2014-09-13",
                age: calculateAge("2014-09-13")
            },
            {
                id: "player-2-t9",
                name: "Kehan Ullah",
                fathersName: "Atta Ullah",
                contactNumber: "",
                picture: "/TEAM9/PLAYERS_PICTURES/KEHAN-ULLAH.jpeg",
                bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/KEHAN-ULLAH.jpeg",
                bFormNumber: "71501-2952292-3",
                dateOfBirth: "2015-04-05",
                age: calculateAge("2015-04-05")
            },
            {
                id: "player-3-t9",
                name: "Fahad Shah",
                fathersName: "Shaheen Shah",
                contactNumber: "",
                picture: "/TEAM9/PLAYERS_PICTURES/FAHAD-SHAH.jpeg",
                bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/FAHAD-SHAH.jpeg",
                bFormNumber: "714001-16-12071",
                dateOfBirth: "2015-03-18",
                age: calculateAge("2015-03-18")
            },
            {
                id: "player-4-t9",
                name: "Fahad Babar",
                fathersName: "Babar Khan",
                contactNumber: "",
                picture: "/TEAM9/PLAYERS_PICTURES/FAHAD-BABAR.jpeg",
                bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/FAHAD-BABAR.jpeg",
                bFormNumber: "71501-4437834-3",
                dateOfBirth: "2016-07-02",
                age: calculateAge("2016-07-02")
            },
            {
                id: "player-5-t9",
                name: "Ahil Khan",
                fathersName: "Hazrat Jan",
                contactNumber: "",
                picture: "/TEAM9/PLAYERS_PICTURES/AHIL-KHAN.jpeg",
                bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/AHIL-KHAN.jpeg",
                bFormNumber: "71501-9025847-7",
                dateOfBirth: "2016-07-04",
                age: calculateAge("2016-07-04")
            },
            {
                id: "player-6-t9",
                name: "Arsal Alam",
                fathersName: "Alam Khan",
                contactNumber: "",
                picture: "/TEAM9/PLAYERS_PICTURES/ARSAL-ALAM.jpeg",
                bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/ARSAL-ALAM.jpeg",
                bFormNumber: "71501-4197605-9",
                dateOfBirth: "2015-05-17",
                age: calculateAge("2015-05-17")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t9",
                name: "Minhal Uddin Shah",
                fathersName: "Nizam Uddin",
                contactNumber: "",
                picture: "/TEAM9/PLAYERS_PICTURES/MINHAL-UDDIN-SHAH.jpeg",
                bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/MINHAL-UDDIN-SHAH.jpeg",
                bFormNumber: "71501-6215945-1",
                dateOfBirth: "2016-04-26",
                age: calculateAge("2016-04-26")
            },
            {
                id: "substitutePlayer-2-t9",
                name: "Melad Khan",
                fathersName: "Sana Khan",
                contactNumber: "",
                picture: "/TEAM9/PLAYERS_PICTURES/MELAD-KHAN.jpeg",
                bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/MELAD-KHAN.jpeg",
                bFormNumber: "71702-0348703-7",
                dateOfBirth: "2016-01-08",
                age: calculateAge("2016-01-08")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t9",
                name: "Ahad Ali",
                fathersName: "Iftikhar Ali",
                contactNumber: "",
                picture: "/TEAM9/PLAYERS_PICTURES/AHAD-ALI.jpeg",
                bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/AHAD-ALI.jpeg",
                bFormNumber: "71501-1920128-9",
                dateOfBirth: "2016-02-19",
                age: calculateAge("2016-02-19")
            },
            {
                id: "Reserveplayer-2-t9",
                name: "Siraj Ali",
                fathersName: "Sartaj Ali",
                contactNumber: "",
                picture: "/TEAM9/PLAYERS_PICTURES/SIRAJ-ALI.jpeg",
                bFormPicture: "/TEAM9/PLAYERS_DOCUMENTS/SIRAJ-ALI.jpeg",
                bFormNumber: "71501-3702911-3",
                dateOfBirth: "2015-03-22",
                age: calculateAge("2015-03-22")
            }
        ]
    },
    //    ==================== TEAM 10 ====================
    // CENTERAL JK A
    {
        id: "team-10",
        teamName: "CJK SHAHEEN A",
        teamLogo: "/TEAM10/TEAM10.jpeg",
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
        teamLogo: "/TEAM11/TEAM10.jpeg",
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
        jkLocation: "Zulfiqarabad",
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
    // FCD JK 7
    {
        id: "team-14",
        teamName: "FCD",
        teamLogo: "/TEAM14/TEAM14.png",
        teamCoach: "Sibtain Muhammad",
        coachNumber: "3175885120",
        jkLocation: "Danyore JK # 3",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t14",
                name: "Shan Himmat",
                fathersName: "Himmat Hussain",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/SHAN-HIMMAT.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/SHAN-HIMMAT.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-06-23",
                age: calculateAge("2015-06-23")
            },
            {
                id: "player-2-t14",
                name: "Arsal Kareem",
                fathersName: "Qaimat Kareem",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/ARSAL-KAREEM.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/ARSAL-KAREEM.jpeg",
                bFormNumber: "",
                dateOfBirth: "2017-06-04",
                age: calculateAge("2017-06-04")
            },
            {
                id: "player-3-t14",
                name: "Asiss Naseer",
                fathersName: "Naseer Uddin",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/ASISS-NASEER.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/ASISS-NASEER.jpeg",
                bFormNumber: "",
                dateOfBirth: "2018-02-23",
                age: calculateAge("2018-02-23")
            },
            {
                id: "player-4-t14",
                name: "Hayan Ali",
                fathersName: "Rahat Ali",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/HAYAN-ALI.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/HAYAN-ALI.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-07-01",
                age: calculateAge("2015-07-01")
            },
            {
                id: "player-5-t14",
                name: "Faizan Rais",
                fathersName: "Shah Rais Khan",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/FAIZAN-RAIS.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/FAIZAN-RAIS.jpeg",
                bFormNumber: "",
                dateOfBirth: "2019-08-10",
                age: calculateAge("2019-08-10")
            },
            {
                id: "player-6-t14",
                name: "Sinan Ahmad",
                fathersName: "",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/SINAN-AHMAD.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/SINAN-AHMAD.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-08-16",
                age: calculateAge("2015-08-16")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t14",
                name: "Muneeb Ur Rehman",
                fathersName: "Mujeeb Ur Rehman",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/MUNEEB-UR-REHMAN.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/MUNEEB-UR-REHMAN.jpeg",
                bFormNumber: "",
                dateOfBirth: "",
                age: null
            },
            {
                id: "substitutePlayer-2-t14",
                name: "Ariyan Khan",
                fathersName: "Sahib Khan",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/ARIYAN-KHAN.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/ARIYAN-KHAN.jpeg",
                bFormNumber: "",
                dateOfBirth: "",
                age: null
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t14",
                name: "Zarak Ur Rehman",
                fathersName: "Attah Ur Rehman",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/ZARAK-UR-REHMAN.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/ZARAK-UR-REHMAN.jpeg",
                bFormNumber: "",
                dateOfBirth: "",
                age: null
            },
            {
                id: "Reserveplayer-2-t14",
                name: "Haseeb Ur Rehman",
                fathersName: "Mujeeb Ur Rehman",
                contactNumber: "",
                picture: "/TEAM14/PLAYERS_PICTURES/HASEEB-UR-REHMAN.jpeg",
                bFormPicture: "/TEAM14/PLAYERS_DOCUMENTS/HASEEB-UR-REHMAN.jpeg",
                bFormNumber: "",
                dateOfBirth: "",
                age: null
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
                name: "Eshan Ahmed",
                fathersName: "Gulam Uddin",
                contactNumber: "",
                picture: "/TEAM15/PLAYERS_PICTURES/ESHAN-AHMED.jpeg",
                bFormPicture: "/TEAM15/PLAYERS_DOCUMENTS/ESHAN-AHMED.jpeg",
                bFormNumber: "71501-0859588-9",
                dateOfBirth: "2014-09-05",
                age: calculateAge("2014-09-05")
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
    {
        id: "team-18",
        teamName: "ROYAL UNITED FC",
        teamLogo: "/TEAM18/TEAM18.png",
        teamCoach: "Aitzaz and Sarim",
        coachNumber: "03444076959",
        jkLocation: "Zulfiqarabad JK",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t18",
                name: "Mustansir",
                fathersName: "M. Ayaz",
                contactNumber: "",
                picture: "/TEAM18/PLAYERS_PICTURES/MUSTANSIR.jpeg",
                bFormPicture: "/TEAM18/PLAYERS_DOCUMENTS/MUSTANSIR.jpeg",
                bFormNumber: "71402-9422475-9",
                dateOfBirth: "2015-03-11",
                age: calculateAge("2015-03-11")
            },
            {
                id: "player-2-t18",
                name: "Saim",
                fathersName: "Miralam",
                contactNumber: "",
                picture: "/TEAM18/PLAYERS_PICTURES/SAIM.jpeg",
                bFormPicture: "/TEAM18/PLAYERS_DOCUMENTS/SAIM.jpeg",
                bFormNumber: "71501-3806827-9",
                dateOfBirth: "2015-06-12",
                age: calculateAge("2015-06-12")
            },
            {
                id: "player-3-t18",
                name: "Adan",
                fathersName: "Hussain",
                contactNumber: "",
                picture: "/TEAM18/PLAYERS_PICTURES/ADAN.jpeg",
                bFormPicture: "/TEAM18/PLAYERS_DOCUMENTS/ADAN.jpeg",
                bFormNumber: "71402-9157401-5",
                dateOfBirth: "2014-09-11",
                age: calculateAge("2014-09-11")
            },
            {
                id: "player-4-t18",
                name: "Tanveer",
                fathersName: "Bulbul Jan",
                contactNumber: "",
                picture: "/TEAM18/PLAYERS_PICTURES/TANVEER.jpeg",
                bFormPicture: "/TEAM18/PLAYERS_DOCUMENTS/TANVEER.jpeg",
                bFormNumber: "71402-9876781-1",
                dateOfBirth: "2015-11-13",
                age: calculateAge("2015-11-13")
            },
            {
                id: "player-5-t18",
                name: "Shayan",
                fathersName: "M. Aktar",
                contactNumber: "",
                picture: "/TEAM18/PLAYERS_PICTURES/SHAYAN.jpeg",
                bFormPicture: "/TEAM18/PLAYERS_DOCUMENTS/SHAYAN.jpeg",
                bFormNumber: "71501-3806827-9",
                dateOfBirth: "2015-06-26",
                age: calculateAge("2015-06-26")
            },
            {
                id: "player-6-t18",
                name: "Shahrehman",
                fathersName: "Maksoom Shah",
                contactNumber: "",
                picture: "/TEAM18/PLAYERS_PICTURES/SHAHREHMAN.jpeg",
                bFormPicture: "/TEAM18/PLAYERS_DOCUMENTS/SHAHREHMAN.jpeg",
                bFormNumber: "71501-4213439-7",
                dateOfBirth: "2015-04-19",
                age: calculateAge("2015-04-19")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t18",
                name: "Minhaj",
                fathersName: "Sardar Karim",
                contactNumber: "",
                picture: "/TEAM18/PLAYERS_PICTURES/MINHAJ.jpeg",
                bFormPicture: "/TEAM18/PLAYERS_DOCUMENTS/MINHAJ.jpeg",
                bFormNumber: "71501-537808-7",
                dateOfBirth: "2017-04-09",
                age: calculateAge("2017-04-09")
            },
            {
                id: "substitutePlayer-2-t18",
                name: "Duraz",
                fathersName: "Ehsan",
                contactNumber: "",
                picture: "/TEAM18/PLAYERS_PICTURES/DURAZ.jpeg",
                bFormPicture: "/TEAM18/PLAYERS_DOCUMENTS/DURAZ.jpeg",
                bFormNumber: "71501-5298593-7",
                dateOfBirth: "2015-11-18",
                age: calculateAge("2015-11-18")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t18",
                name: "Sayyar",
                fathersName: "Sherbas",
                contactNumber: "",
                picture: "/TEAM18/PLAYERS_PICTURES/SAYYAR.jpeg",
                bFormPicture: "/TEAM18/PLAYERS_DOCUMENTS/SAYYAR.jpeg",
                bFormNumber: "71501-0300585-1",
                dateOfBirth: "2015-08-19",
                age: calculateAge("2015-08-19")
            }
        ]
    },
    //    ==================== TEAM 19 ====================
    // HUDA STRICKERS
    {
        id: "team-19",
        teamName: "Huda FC",
        teamLogo: "/TEAM19/TEAM19.jpeg",
        teamCoach: "Salman Khan",
        coachNumber: "3489918267",
        jkLocation: "JK-08 Danyore",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t18",
                name: "Rayyan Aziz",
                fathersName: "Mirza Aziz Khan",
                contactNumber: "",
                picture: "/TEAM18/PLAYERS_PICTURES/RAYYAN-AZIZ.jpeg",
                bFormPicture: "/TEAM18/PLAYERS_DOCUMENTS/RAYYAN-AZIZ.jpeg",
                bFormNumber: "7140184074089",
                dateOfBirth: "2014-12-24",
                age: calculateAge("2014-12-24")
            },
            {
                id: "player-2-t18",
                name: "Farhad Akbar",
                fathersName: "Akbar Shah",
                contactNumber: "",
                picture: "/TEAM18/PLAYERS_PICTURES/FARHAD-AKBAR.jpeg",
                bFormPicture: "/TEAM18/PLAYERS_DOCUMENTS/FARHAD-AKBAR.jpeg",
                bFormNumber: "7140303520291",
                dateOfBirth: "2014-12-27",
                age: calculateAge("2014-12-27")
            },
            {
                id: "player-3-t18",
                name: "Kamil Wazir",
                fathersName: "Sher Wazir Shah",
                contactNumber: "",
                picture: "/TEAM18/PLAYERS_PICTURES/KAMIL-WAZIR.jpeg",
                bFormPicture: "/TEAM18/PLAYERS_DOCUMENTS/KAMIL-WAZIR.jpeg",
                bFormNumber: "7140303574635",
                dateOfBirth: "2014-09-19",
                age: calculateAge("2014-09-19")
            },
            {
                id: "player-4-t18",
                name: "Muhammad Taha",
                fathersName: "Mola Madad",
                contactNumber: "",
                picture: "/TEAM18/PLAYERS_PICTURES/MUHAMMAD-TAHA.jpeg",
                bFormPicture: "/TEAM18/PLAYERS_DOCUMENTS/MUHAMMAD-TAHA.jpeg",
                bFormNumber: "7150102092545",
                dateOfBirth: "2014-08-14",
                age: calculateAge("2014-08-14")
            },
            {
                id: "player-5-t18",
                name: "Amjad Ali",
                fathersName: "Ahmed Khan",
                contactNumber: "",
                picture: "/TEAM18/PLAYERS_PICTURES/AMJAD-ALI.jpeg",
                bFormPicture: "/TEAM18/PLAYERS_DOCUMENTS/AMJAD-ALI.jpeg",
                bFormNumber: "7170203467021",
                dateOfBirth: "2015-03-25",
                age: calculateAge("2015-03-25")
            },
            {
                id: "player-6-t18",
                name: "Ajmal Dad",
                fathersName: "Jafar Dad",
                contactNumber: "",
                picture: "/TEAM18/PLAYERS_PICTURES/AJMAL-DAD.jpeg",
                bFormPicture: "/TEAM18/PLAYERS_DOCUMENTS/AJMAL-DAD.jpeg",
                bFormNumber: "7140103486293",
                dateOfBirth: "2014-12-20",
                age: calculateAge("2014-12-20")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t18",
                name: "Farooq Akbar",
                fathersName: "Akbar Shah",
                contactNumber: "",
                picture: "/TEAM18/PLAYERS_PICTURES/FAROOQ-AKBAR.jpeg",
                bFormPicture: "/TEAM18/PLAYERS_DOCUMENTS/FAROOQ-AKBAR.jpeg",
                bFormNumber: "7140303528313",
                dateOfBirth: "2014-12-27",
                age: calculateAge("2014-12-27")
            },
            {
                id: "substitutePlayer-2-t18",
                name: "Ahsan Karim",
                fathersName: "Farman Karim",
                contactNumber: "",
                picture: "/TEAM18/PLAYERS_PICTURES/AHSAN-KARIM.jpeg",
                bFormPicture: "/TEAM18/PLAYERS_DOCUMENTS/AHSAN-KARIM.jpeg",
                bFormNumber: "7150153422965",
                dateOfBirth: "2014-11-15",
                age: calculateAge("2014-11-15")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t18",
                name: "Rehan Ali",
                fathersName: "M Sharif",
                contactNumber: "",
                picture: "/TEAM18/PLAYERS_PICTURES/REHAN-ALI.jpeg",
                bFormPicture: "/TEAM18/PLAYERS_DOCUMENTS/REHAN-ALI.jpeg",
                bFormNumber: "7170203496223",
                dateOfBirth: "2014-11-24",
                age: calculateAge("2014-11-24")
            },
            {
                id: "Reserveplayer-2-t18",
                name: "Touseef Dad",
                fathersName: "Jafar Dad",
                contactNumber: "",
                picture: "/TEAM18/PLAYERS_PICTURES/TOUSEEF-DAD.jpeg",
                bFormPicture: "/TEAM18/PLAYERS_DOCUMENTS/TOUSEEF-DAD.jpeg",
                bFormNumber: "7140403466305",
                dateOfBirth: "2015-03-10",
                age: calculateAge("2015-03-10")
            }
        ]
    },
    //    ==================== TEAM 20 ====================
    // PHANTON UNITED
    {
        id: "team-20",
        teamName: "Phantom United",
        teamLogo: "/TEAM20/TEAM20.jpeg",
        teamCoach: "Javeed",
        coachNumber: "3555303428",
        jkLocation: "JK 1",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t20",
                name: "Rohan",
                fathersName: "Amjad",
                contactNumber: "",
                picture: "/TEAM20/PLAYERS_PICTURES/ROHAN.jpeg",
                bFormPicture: "/TEAM20/PLAYERS_DOCUMENTS/ROHAN.jpeg",
                bFormNumber: "71404-0362995-5",
                dateOfBirth: "2015-11-29",
                age: calculateAge("2015-11-29")
            },
            {
                id: "player-2-t20",
                name: "Sinan",
                fathersName: "Amjad",
                contactNumber: "",
                picture: "/TEAM20/PLAYERS_PICTURES/SINAN.jpeg",
                bFormPicture: "/TEAM20/PLAYERS_DOCUMENTS/SINAN.jpeg",
                bFormNumber: "71404-0362298-5",
                dateOfBirth: "2018-08-25",
                age: calculateAge("2018-08-25")
            },
            {
                id: "player-3-t20",
                name: "Zariyan",
                fathersName: "Aslam",
                contactNumber: "",
                picture: "/TEAM20/PLAYERS_PICTURES/ZARIYAN.jpeg",
                bFormPicture: "/TEAM20/PLAYERS_DOCUMENTS/ZARIYAN.jpeg",
                bFormNumber: "71404-0362298-5",
                dateOfBirth: "2015-11-20",
                age: calculateAge("2015-11-20")
            },
            {
                id: "player-4-t20",
                name: "Zain Ul Abideen",
                fathersName: "Gulzar",
                contactNumber: "",
                picture: "/TEAM20/PLAYERS_PICTURES/ZAIN-UL-ABIDEEN.jpeg",
                bFormPicture: "/TEAM20/PLAYERS_DOCUMENTS/ZAIN-UL-ABIDEEN.jpeg",
                bFormNumber: "71404-0362298-8",
                dateOfBirth: "2015-11-30",
                age: calculateAge("2015-11-30")
            },
            {
                id: "player-5-t20",
                name: "Iqrar",
                fathersName: "Quwat Jan",
                contactNumber: "",
                picture: "/TEAM20/PLAYERS_PICTURES/IQRAR.jpeg",
                bFormPicture: "/TEAM20/PLAYERS_DOCUMENTS/IQRAR.jpeg",
                bFormNumber: "71404-0362298-5",
                dateOfBirth: "2015-11-07",
                age: calculateAge("2015-11-07")
            },
            {
                id: "player-6-t20",
                name: "Shafaurq",
                fathersName: "Naseer Karim",
                contactNumber: "",
                picture: "/TEAM20/PLAYERS_PICTURES/SHAFAURQ.jpeg",
                bFormPicture: "/TEAM20/PLAYERS_DOCUMENTS/SHAFAURQ.jpeg",
                bFormNumber: "71404-0362298-5",
                dateOfBirth: "2015-11-28",
                age: calculateAge("2015-11-28")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t20",
                name: "Subhan",
                fathersName: "Ishfaq",
                contactNumber: "",
                picture: "/TEAM20/PLAYERS_PICTURES/SUBHAN.jpeg",
                bFormPicture: "/TEAM20/PLAYERS_DOCUMENTS/SUBHAN.jpeg",
                bFormNumber: "71404-0362298-8",
                dateOfBirth: "2014-12-09",
                age: calculateAge("2014-12-09")
            },
            {
                id: "substitutePlayer-2-t20",
                name: "Muhassm Wali",
                fathersName: "Wali",
                contactNumber: "",
                picture: "/TEAM20/PLAYERS_PICTURES/MUHASSM-WALI.jpeg",
                bFormPicture: "/TEAM20/PLAYERS_DOCUMENTS/MUHASSM-WALI.jpeg",
                bFormNumber: "71404-0362298-8",
                dateOfBirth: "2015-11-06",
                age: calculateAge("2015-11-06")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t20",
                name: "Saad Gohar",
                fathersName: "Musa",
                contactNumber: "",
                picture: "/TEAM20/PLAYERS_PICTURES/SAAD-GOHAR.jpeg",
                bFormPicture: "/TEAM20/PLAYERS_DOCUMENTS/SAAD-GOHAR.jpeg",
                bFormNumber: "71404-0362298-5",
                dateOfBirth: "2015-11-08",
                age: calculateAge("2015-11-08")
            },
            {
                id: "Reserveplayer-2-t20",
                name: "Hanan",
                fathersName: "Amjad",
                contactNumber: "",
                picture: "/TEAM20/PLAYERS_PICTURES/HANAN.jpeg",
                bFormPicture: "/TEAM20/PLAYERS_DOCUMENTS/HANAN.jpeg",
                bFormNumber: "71404-0362298-7",
                dateOfBirth: "2020-06-08",
                age: calculateAge("2020-06-08")
            }
        ]
    },
    //    ==================== TEAM 21 ====================
    // ELITE TITANS
    {
        id: "team-21",
        teamName: "Elite Titans",
        teamLogo: "/TEAM21/TEAM21.png",
        teamCoach: "Ahasn Amir",
        coachNumber: "3144514449",
        jkLocation: "JK # 02 OKD",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t21",
                name: "Ahsan Iqbal",
                fathersName: "Pervaz Ahmad",
                contactNumber: "",
                picture: "/TEAM21/PLAYERS_PICTURES/AHSAN-IQBAL.jpeg",
                bFormPicture: "/TEAM21/PLAYERS_DOCUMENTS/AHSAN-IQBAL.jpeg",
                bFormNumber: "71501-3825332-3",
                dateOfBirth: "2015-07-11",
                age: calculateAge("2015-07-11")
            },
            {
                id: "player-2-t21",
                name: "Amar Mir",
                fathersName: "Mir",
                contactNumber: "",
                picture: "/TEAM21/PLAYERS_PICTURES/AMAR-MIR.jpeg",
                bFormPicture: "/TEAM21/PLAYERS_DOCUMENTS/AMAR-MIR.jpeg",
                bFormNumber: "71501-5786190-3",
                dateOfBirth: "2015-04-10",
                age: calculateAge("2015-04-10")
            },
            {
                id: "player-3-t21",
                name: "Ayan",
                fathersName: "Ejaz",
                contactNumber: "",
                picture: "/TEAM21/PLAYERS_PICTURES/AYAN.jpeg",
                bFormPicture: "/TEAM21/PLAYERS_DOCUMENTS/AYAN.jpeg",
                bFormNumber: "71501-4922780-3",
                dateOfBirth: "2016-10-18",
                age: calculateAge("2016-10-18")
            },
            {
                id: "player-4-t21",
                name: "Musharraf Shahid",
                fathersName: "Shahid Akhtar",
                contactNumber: "",
                picture: "/TEAM21/PLAYERS_PICTURES/MUSHARRAF-SHAHID.jpeg",
                bFormPicture: "/TEAM21/PLAYERS_DOCUMENTS/MUSHARRAF-SHAHID.jpeg",
                bFormNumber: "71501-2788476-1",
                dateOfBirth: "2015-03-14",
                age: calculateAge("2015-03-14")
            },
            {
                id: "player-5-t21",
                name: "Junaid Younas",
                fathersName: "Muhammad Younas",
                contactNumber: "",
                picture: "/TEAM21/PLAYERS_PICTURES/JUNAID-YOUNAS.jpeg",
                bFormPicture: "/TEAM21/PLAYERS_DOCUMENTS/JUNAID-YOUNAS.jpeg",
                bFormNumber: "71501-0482357-3",
                dateOfBirth: "2015-12-25",
                age: calculateAge("2015-12-25")
            },
            {
                id: "player-6-t21",
                name: "Asjad Faqir",
                fathersName: "Muhammad Faqir",
                contactNumber: "",
                picture: "/TEAM21/PLAYERS_PICTURES/ASJAD-FAQIR.jpeg",
                bFormPicture: "/TEAM21/PLAYERS_DOCUMENTS/ASJAD-FAQIR.jpeg",
                bFormNumber: "71501-0407564-7",
                dateOfBirth: "2015-03-09",
                age: calculateAge("2015-03-09")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t21",
                name: "Alishan Aslam",
                fathersName: "Aslam Khan",
                contactNumber: "",
                picture: "/TEAM21/PLAYERS_PICTURES/ALISHAN-ASLAM.jpeg",
                bFormPicture: "/TEAM21/PLAYERS_DOCUMENTS/ALISHAN-ASLAM.jpeg",
                bFormNumber: "71501-4110094-7",
                dateOfBirth: "2015-02-14",
                age: calculateAge("2015-02-14")
            },
            {
                id: "substitutePlayer-2-t21",
                name: "Reyan Ejaz",
                fathersName: "Ejaz",
                contactNumber: "",
                picture: "/TEAM21/PLAYERS_PICTURES/REYAN-EJAZ.jpeg",
                bFormPicture: "/TEAM21/PLAYERS_DOCUMENTS/REYAN-EJAZ.jpeg",
                bFormNumber: "71501-9045856-1",
                dateOfBirth: "2015-01-18",
                age: calculateAge("2015-01-18")
            }
        ],

        reservePlayers: []
    },
    //    ==================== TEAM 22 ====================
    // FATIMAABAD JR
    {
        id: "team-22",
        teamName: "Fatimaabad JR",
        teamLogo: "/TEAM22/TEAM22.png",
        teamCoach: "Rizwan Ali Shahii",
        coachNumber: "3554239350",
        jkLocation: "Fatimabad JK 5 Oshikhandass",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t22",
                name: "Sannan Ali",
                fathersName: "Karimuddin",
                contactNumber: "",
                picture: "/TEAM22/PLAYERS_PICTURES/SANNAN-ALI.jpeg",
                bFormPicture: "/TEAM22/PLAYERS_DOCUMENTS/SANNAN-ALI.jpeg",
                bFormNumber: "26975086",
                dateOfBirth: "2018-08-01",
                age: calculateAge("2018-08-01")
            },
            {
                id: "player-2-t22",
                name: "Saqlain Ali",
                fathersName: "Mehboob",
                contactNumber: "",
                picture: "/TEAM22/PLAYERS_PICTURES/SAQLAIN-ALI.jpeg",
                bFormPicture: "/TEAM22/PLAYERS_DOCUMENTS/SAQLAIN-ALI.jpeg",
                bFormNumber: "12266470",
                dateOfBirth: "2015-07-11",
                age: calculateAge("2015-07-11")
            },
            {
                id: "player-3-t22",
                name: "Ayan Ali",
                fathersName: "M. Waiz",
                contactNumber: "",
                picture: "/TEAM22/PLAYERS_PICTURES/AYAN-ALI.jpeg",
                bFormPicture: "/TEAM22/PLAYERS_DOCUMENTS/AYAN-ALI.jpeg",
                bFormNumber: "27007406",
                dateOfBirth: "2017-07-03",
                age: calculateAge("2017-07-03")
            },
            {
                id: "player-4-t22",
                name: "Abis Ullah",
                fathersName: "Shukur Ullah Baig",
                contactNumber: "",
                picture: "/TEAM22/PLAYERS_PICTURES/ABIS-ULLAH.jpeg",
                bFormPicture: "/TEAM22/PLAYERS_DOCUMENTS/ABIS-ULLAH.jpeg",
                bFormNumber: "23126631",
                dateOfBirth: "2018-01-25",
                age: calculateAge("2018-01-25")
            },
            {
                id: "player-5-t22",
                name: "Rayan Alam",
                fathersName: "Shahid Alam",
                contactNumber: "",
                picture: "/TEAM22/PLAYERS_PICTURES/RAYAN-ALAM.jpeg",
                bFormPicture: "/TEAM22/PLAYERS_DOCUMENTS/RAYAN-ALAM.jpeg",
                bFormNumber: "47766699",
                dateOfBirth: "2016-02-14",
                age: calculateAge("2016-02-14")
            },
            {
                id: "player-6-t22",
                name: "Noor Raiz",
                fathersName: "M. Iqbal",
                contactNumber: "",
                picture: "/TEAM22/PLAYERS_PICTURES/NOOR-RAIZ.jpeg",
                bFormPicture: "/TEAM22/PLAYERS_DOCUMENTS/NOOR-RAIZ.jpeg",
                bFormNumber: "B757046652",
                dateOfBirth: "2018-03-13",
                age: calculateAge("2018-03-13")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t22",
                name: "Sharafat Ali",
                fathersName: "Pakhtoon Wali",
                contactNumber: "",
                picture: "/TEAM22/PLAYERS_PICTURES/SHARAFAT-ALI.jpeg",
                bFormPicture: "/TEAM22/PLAYERS_DOCUMENTS/SHARAFAT-ALI.jpeg",
                bFormNumber: "24609845",
                dateOfBirth: "2014-09-12",
                age: calculateAge("2014-09-12")
            },
            {
                id: "substitutePlayer-2-t22",
                name: "Fasi Uddin",
                fathersName: "Kush Amadin",
                contactNumber: "",
                picture: "/TEAM22/PLAYERS_PICTURES/FASI-UDDIN.jpeg",
                bFormPicture: "/TEAM22/PLAYERS_DOCUMENTS/FASI-UDDIN.jpeg",
                bFormNumber: "B757046652",
                dateOfBirth: "2015-12-30",
                age: calculateAge("2015-12-30")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t22",
                name: "Haseeb Uddin",
                fathersName: "Kush Amadin",
                contactNumber: "",
                picture: "/TEAM22/PLAYERS_PICTURES/HASEEB-UDDIN.jpeg",
                bFormPicture: "/TEAM22/PLAYERS_DOCUMENTS/HASEEB-UDDIN.jpeg",
                bFormNumber: "B7150142114218",
                dateOfBirth: "2018-12-18",
                age: calculateAge("2018-12-18")
            },
            {
                id: "Reserveplayer-2-t22",
                name: "Ayan Ikram",
                fathersName: "M. Ikram",
                contactNumber: "",
                picture: "/TEAM22/PLAYERS_PICTURES/AYAN-IKRAM.jpeg",
                bFormPicture: "/TEAM22/PLAYERS_DOCUMENTS/AYAN-IKRAM.jpeg",
                bFormNumber: "B7150132214979",
                dateOfBirth: "2018-05-16",
                age: calculateAge("2018-05-16")
            },
            {
                id: "Reserveplayer-3-t22",
                name: "Ali",
                fathersName: "Alam",
                contactNumber: "",
                picture: "/TEAM22/PLAYERS_PICTURES/ALI.jpeg",
                bFormPicture: "/TEAM22/PLAYERS_DOCUMENTS/ALI.jpeg",
                bFormNumber: "B7140123257554",
                dateOfBirth: "2016-03-12",
                age: calculateAge("2016-03-12")
            }
        ]
    },
    //    ==================== TEAM 23 ====================
    // PRINCEABAD
    {
        id: "team-23",
        teamName: "Princeabad Juniors",
        teamLogo: "/TEAM23/TEAM23.png",
        teamCoach: "Zulqarnain Khan",
        coachNumber: "3554936999",
        jkLocation: "Prince Abad Jamaatkhana # 2",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t23",
                name: "Abul Hassan",
                fathersName: "Khadim Hussain",
                contactNumber: "",
                picture: "/TEAM23/PLAYERS_PICTURES/ABUL-HASSAN.jpeg",
                bFormPicture: "/TEAM23/PLAYERS_DOCUMENTS/ABUL-HASSAN.jpeg",
                bFormNumber: "71501-….260-9",
                dateOfBirth: "2015-11-03",
                age: calculateAge("2015-11-03")
            },
            {
                id: "player-2-t23",
                name: "Sarim Karim",
                fathersName: "Shezada Behram",
                contactNumber: "",
                picture: "/TEAM23/PLAYERS_PICTURES/SARIM-KARIM.jpeg",
                bFormPicture: "/TEAM23/PLAYERS_DOCUMENTS/SARIM-KARIM.jpeg",
                bFormNumber: "71501-….963-3",
                dateOfBirth: "2016-10-28",
                age: calculateAge("2016-10-28")
            },
            {
                id: "player-3-t23",
                name: "Aliyaz Ali",
                fathersName: "Ali Dad",
                contactNumber: "",
                picture: "/TEAM23/PLAYERS_PICTURES/ALIYAZ-ALI.jpeg",
                bFormPicture: "/TEAM23/PLAYERS_DOCUMENTS/ALIYAZ-ALI.jpeg",
                bFormNumber: "71401-….685-9",
                dateOfBirth: "2015-11-03",
                age: calculateAge("2015-11-03")
            },
            {
                id: "player-4-t23",
                name: "Ali Arsal Khan",
                fathersName: "Garee Khan",
                contactNumber: "",
                picture: "/TEAM23/PLAYERS_PICTURES/ALI-ARSAL-KHAN.jpeg",
                bFormPicture: "/TEAM23/PLAYERS_DOCUMENTS/ALI-ARSAL-KHAN.jpeg",
                bFormNumber: "71501-….447-7",
                dateOfBirth: "2015-11-03",
                age: calculateAge("2015-11-03")
            },
            {
                id: "player-5-t23",
                name: "Riyan Ali",
                fathersName: "Mujeeb Ud Din",
                contactNumber: "",
                picture: "/TEAM23/PLAYERS_PICTURES/RIYAN-ALI.jpeg",
                bFormPicture: "/TEAM23/PLAYERS_DOCUMENTS/RIYAN-ALI.jpeg",
                bFormNumber: "71501-….999-7",
                dateOfBirth: "2016-10-05",
                age: calculateAge("2016-10-05")
            },
            {
                id: "player-6-t23",
                name: "Irham Jahan",
                fathersName: "Jahangir",
                contactNumber: "",
                picture: "/TEAM23/PLAYERS_PICTURES/IRHAM-JAHAN.jpeg",
                bFormPicture: "/TEAM23/PLAYERS_DOCUMENTS/IRHAM-JAHAN.jpeg",
                bFormNumber: "71501-….543-9",
                dateOfBirth: "2016-10-06",
                age: calculateAge("2016-10-06")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t23",
                name: "Kashan Wali",
                fathersName: "Sher Wali Khan",
                contactNumber: "",
                picture: "/TEAM23/PLAYERS_PICTURES/KASHAN-WALI.jpeg",
                bFormPicture: "/TEAM23/PLAYERS_DOCUMENTS/KASHAN-WALI.jpeg",
                bFormNumber: "71501-….719-1",
                dateOfBirth: "2014-12-17",
                age: calculateAge("2014-12-17")
            },
            {
                id: "substitutePlayer-2-t23",
                name: "Atif Nizam",
                fathersName: "Nizam Uddin",
                contactNumber: "",
                picture: "/TEAM23/PLAYERS_PICTURES/ATIF-NIZAM.jpeg",
                bFormPicture: "/TEAM23/PLAYERS_DOCUMENTS/ATIF-NIZAM.jpeg",
                bFormNumber: "71501-….217-5",
                dateOfBirth: "2017-05-28",
                age: calculateAge("2017-05-28")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t23",
                name: "Siraj Iqbal",
                fathersName: "Iqbal Uddin",
                contactNumber: "",
                picture: "/TEAM23/PLAYERS_PICTURES/SIRAJ-IQBAL.jpeg",
                bFormPicture: "/TEAM23/PLAYERS_DOCUMENTS/SIRAJ-IQBAL.jpeg",
                bFormNumber: "71501-….712-1",
                dateOfBirth: "2018-06-05",
                age: calculateAge("2018-06-05")
            },
            {
                id: "Reserveplayer-2-t23",
                name: "Asees Iqbal",
                fathersName: "Iqbal Uddin",
                contactNumber: "",
                picture: "/TEAM23/PLAYERS_PICTURES/ASEES-IQBAL.jpeg",
                bFormPicture: "/TEAM23/PLAYERS_DOCUMENTS/ASEES-IQBAL.jpeg",
                bFormNumber: "71501-….673-3",
                dateOfBirth: "2016-05-26",
                age: calculateAge("2016-05-26")
            }
        ]
    },
    //    ==================== TEAM 24 ====================
    // KHOMER BLUE
    {
        id: "team-24",
        teamName: "Khomer Blue",
        teamLogo: "/TEAM24/TEAM24.png",
        teamCoach: "Nadir Alam",
        coachNumber: "3365913658",
        jkLocation: "Khomer Jamatkhana",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t24",
                name: "Abbas",
                fathersName: "Niat Panah",
                contactNumber: "",
                picture: "/TEAM24/PLAYERS_PICTURES/ABBAS.jpeg",
                bFormPicture: "/TEAM24/PLAYERS_DOCUMENTS/ABBAS.jpeg",
                bFormNumber: "71404-0352492-7",
                dateOfBirth: "2015-12-20",
                age: calculateAge("2015-12-20")
            },
            {
                id: "player-2-t24",
                name: "Ali Zain",
                fathersName: "Aslam",
                contactNumber: "",
                picture: "/TEAM24/PLAYERS_PICTURES/ALI-ZAIN.jpeg",
                bFormPicture: "/TEAM24/PLAYERS_DOCUMENTS/ALI-ZAIN.jpeg",
                bFormNumber: "714020597277-7",
                dateOfBirth: "2015-09-12",
                age: calculateAge("2015-09-12")
            },
            {
                id: "player-3-t24",
                name: "Rahil",
                fathersName: "Saat Akber",
                contactNumber: "",
                picture: "/TEAM24/PLAYERS_PICTURES/RAHIL.jpeg",
                bFormPicture: "/TEAM24/PLAYERS_DOCUMENTS/RAHIL.jpeg",
                bFormNumber: "71401-5908533-3",
                dateOfBirth: "2015-09-03",
                age: calculateAge("2015-09-03")
            },
            {
                id: "player-4-t24",
                name: "Ariyan",
                fathersName: "Haji Baig",
                contactNumber: "",
                picture: "/TEAM24/PLAYERS_PICTURES/ARIYAN.jpeg",
                bFormPicture: "/TEAM24/PLAYERS_DOCUMENTS/ARIYAN.jpeg",
                bFormNumber: "71403-0363532-7",
                dateOfBirth: "2015-02-25",
                age: calculateAge("2015-02-25")
            },
            {
                id: "player-5-t24",
                name: "Shafaiz",
                fathersName: "Sher Faraz",
                contactNumber: "",
                picture: "/TEAM24/PLAYERS_PICTURES/SHAFAIZ.jpeg",
                bFormPicture: "/TEAM24/PLAYERS_DOCUMENTS/SHAFAIZ.jpeg",
                bFormNumber: "71404-0360604-7",
                dateOfBirth: "2015-02-08",
                age: calculateAge("2015-02-08")
            },
            {
                id: "player-6-t24",
                name: "Ayan",
                fathersName: "Nadir Alam",
                contactNumber: "",
                picture: "/TEAM24/PLAYERS_PICTURES/AYAN.jpeg",
                bFormPicture: "/TEAM24/PLAYERS_DOCUMENTS/AYAN.jpeg",
                bFormNumber: "71403-0367933-1",
                dateOfBirth: "2015-10-01",
                age: calculateAge("2015-10-01")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t24",
                name: "Qurban Ali",
                fathersName: "Imtiaz Ali Khan",
                contactNumber: "",
                picture: "/TEAM24/PLAYERS_PICTURES/QURBAN-ALI.jpeg",
                bFormPicture: "/TEAM24/PLAYERS_DOCUMENTS/QURBAN-ALI.jpeg",
                bFormNumber: "71703-0341473-1",
                dateOfBirth: "2015-09-04",
                age: calculateAge("2015-09-04")
            },
            {
                id: "substitutePlayer-2-t24",
                name: "Alinain",
                fathersName: "Liaqat Ali Khan",
                contactNumber: "",
                picture: "/TEAM24/PLAYERS_PICTURES/ALINAIN.jpeg",
                bFormPicture: "/TEAM24/PLAYERS_DOCUMENTS/ALINAIN.jpeg",
                bFormNumber: "71401-0648996-7",
                dateOfBirth: "2016-05-07",
                age: calculateAge("2016-05-07")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t24",
                name: "Araib Alam",
                fathersName: "Alamgir",
                contactNumber: "",
                picture: "/TEAM24/PLAYERS_PICTURES/ARAIB-ALAM.jpeg",
                bFormPicture: "/TEAM24/PLAYERS_DOCUMENTS/ARAIB-ALAM.jpeg",
                bFormNumber: "71501-5184426-7",
                dateOfBirth: "2018-06-11",
                age: calculateAge("2018-06-11")
            },
            {
                id: "Reserveplayer-2-t24",
                name: "Mohd Azlan",
                fathersName: "Akhlaq Hussain",
                contactNumber: "",
                picture: "/TEAM24/PLAYERS_PICTURES/MOHD-AZLAN.jpeg",
                bFormPicture: "/TEAM24/PLAYERS_DOCUMENTS/MOHD-AZLAN.jpeg",
                bFormNumber: "71402-7656276-5",
                dateOfBirth: "2016-08-09",
                age: calculateAge("2016-08-09")
            },
            {
                id: "Reserveplayer-3-t24",
                name: "Muheet Alam",
                fathersName: "Mohd Alam",
                contactNumber: "",
                picture: "/TEAM24/PLAYERS_PICTURES/MUHEET-ALAM.jpeg",
                bFormPicture: "/TEAM24/PLAYERS_DOCUMENTS/MUHEET-ALAM.jpeg",
                bFormNumber: "71404-0349295-7",
                dateOfBirth: "2014-11-10",
                age: calculateAge("2014-11-10")
            }
        ]
    },
    //    ==================== TEAM 25 ====================
    // KHOMER RED
    {
        id: "team-25",
        teamName: "Khomer Red",
        teamLogo: "/TEAM25/TEAM25.png",
        teamCoach: "Nadir Alam",
        coachNumber: "3365913658",
        jkLocation: "Khomer Jamatkhana",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t25",
                name: "Farhan Ali",
                fathersName: "Ali Madad Shah",
                contactNumber: "",
                picture: "/TEAM25/PLAYERS_PICTURES/FARHAN-ALI.jpeg",
                bFormPicture: "/TEAM25/PLAYERS_DOCUMENTS/FARHAN-ALI.jpeg",
                bFormNumber: "71404-0357579-7",
                dateOfBirth: "2018-05-19",
                age: calculateAge("2018-05-19")
            },
            {
                id: "player-2-t25",
                name: "Hisham",
                fathersName: "Dinar Khan",
                contactNumber: "",
                picture: "/TEAM25/PLAYERS_PICTURES/HISHAM.jpeg",
                bFormPicture: "/TEAM25/PLAYERS_DOCUMENTS/HISHAM.jpeg",
                bFormNumber: "71404-0349758-3",
                dateOfBirth: "2018-02-22",
                age: calculateAge("2018-02-22")
            },
            {
                id: "player-3-t25",
                name: "Afnan Akhtar",
                fathersName: "Sohail Akhtar",
                contactNumber: "",
                picture: "/TEAM25/PLAYERS_PICTURES/AFNAN-AKHTAR.jpeg",
                bFormPicture: "/TEAM25/PLAYERS_DOCUMENTS/AFNAN-AKHTAR.jpeg",
                bFormNumber: "72301-0344022-9",
                dateOfBirth: "2015-07-10",
                age: calculateAge("2015-07-10")
            },
            {
                id: "player-4-t25",
                name: "Arhan Alam",
                fathersName: "Mir Alam",
                contactNumber: "",
                picture: "/TEAM25/PLAYERS_PICTURES/ARHAN-ALAM.jpeg",
                bFormPicture: "/TEAM25/PLAYERS_DOCUMENTS/ARHAN-ALAM.jpeg",
                bFormNumber: "71501-1691861-1",
                dateOfBirth: "2016-07-03",
                age: calculateAge("2016-07-03")
            },
            {
                id: "player-5-t25",
                name: "Saad Farman",
                fathersName: "Farman Karim",
                contactNumber: "",
                picture: "/TEAM25/PLAYERS_PICTURES/SAAD-FARMAN.jpeg",
                bFormPicture: "/TEAM25/PLAYERS_DOCUMENTS/SAAD-FARMAN.jpeg",
                bFormNumber: "71702-0352160-3",
                dateOfBirth: "2016-09-04",
                age: calculateAge("2016-09-04")
            },
            {
                id: "player-6-t25",
                name: "Hammad Sultan",
                fathersName: "Shah Sultan",
                contactNumber: "",
                picture: "/TEAM25/PLAYERS_PICTURES/HAMMAD-SULTAN.jpeg",
                bFormPicture: "/TEAM25/PLAYERS_DOCUMENTS/HAMMAD-SULTAN.jpeg",
                bFormNumber: "71501-7315168-3",
                dateOfBirth: "2015-07-15",
                age: calculateAge("2015-07-15")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t25",
                name: "Sinan Ali",
                fathersName: "Liaqat Ali Khan",
                contactNumber: "",
                picture: "/TEAM25/PLAYERS_PICTURES/SINAN-ALI.jpeg",
                bFormPicture: "/TEAM25/PLAYERS_DOCUMENTS/SINAN-ALI.jpeg",
                bFormNumber: "71401-0648996-7",
                dateOfBirth: "2018-12-27",
                age: calculateAge("2018-12-27")
            },
            {
                id: "substitutePlayer-2-t25",
                name: "Farrukh Zad",
                fathersName: "Amin Ahmad Jan",
                contactNumber: "",
                picture: "/TEAM25/PLAYERS_PICTURES/FARRUKH-ZAD.jpeg",
                bFormPicture: "/TEAM25/PLAYERS_DOCUMENTS/FARRUKH-ZAD.jpeg",
                bFormNumber: "71501-2231305-3",
                dateOfBirth: "2015-##-16",
                age: null
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t25",
                name: "Ali Quli Khan",
                fathersName: "Sarfaraz Ali",
                contactNumber: "",
                picture: "/TEAM25/PLAYERS_PICTURES/ALI-QULI-KHAN.jpeg",
                bFormPicture: "/TEAM25/PLAYERS_DOCUMENTS/ALI-QULI-KHAN.jpeg",
                bFormNumber: "71703-0342426-3",
                dateOfBirth: "2015-09-27",
                age: calculateAge("2015-09-27")
            },
            {
                id: "Reserveplayer-2-t25",
                name: "Mir Sanna",
                fathersName: "Fida Karim",
                contactNumber: "",
                picture: "/TEAM25/PLAYERS_PICTURES/MIR-SANNA.jpeg",
                bFormPicture: "/TEAM25/PLAYERS_DOCUMENTS/MIR-SANNA.jpeg",
                bFormNumber: "71501-1534486-9",
                dateOfBirth: "2018-##-26",
                age: null
            },
            {
                id: "Reserveplayer-3-t25",
                name: "Aariz Alam",
                fathersName: "Alamgir",
                contactNumber: "",
                picture: "/TEAM25/PLAYERS_PICTURES/AARIZ-ALAM.jpeg",
                bFormPicture: "/TEAM25/PLAYERS_DOCUMENTS/AARIZ-ALAM.jpeg",
                bFormNumber: "71501-5078976-7",
                dateOfBirth: "2015-##-27",
                age: null
            }
        ]
    },
    //    ==================== TEAM 26 ====================
    // KHOMER GREEN
    {
        id: "team-26",
        teamName: "Khomer Green",
        teamLogo: "/TEAM26/TEAM26.png",
        teamCoach: "Nadir Alam",
        coachNumber: "3365913658",
        jkLocation: "Khomer Jamatkhana",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t26",
                name: "Rohit Alam",
                fathersName: "Mohd Alam",
                contactNumber: "",
                picture: "/TEAM26/PLAYERS_PICTURES/ROHIT-ALAM.jpeg",
                bFormPicture: "/TEAM26/PLAYERS_DOCUMENTS/ROHIT-ALAM.jpeg",
                bFormNumber: "71404-0349296-1",
                dateOfBirth: "2015-11-10",
                age: calculateAge("2015-11-10")
            },
            {
                id: "player-2-t26",
                name: "Aariz Mir",
                fathersName: "Hajat Mir",
                contactNumber: "",
                picture: "/TEAM26/PLAYERS_PICTURES/AARIZ-MIR.jpeg",
                bFormPicture: "/TEAM26/PLAYERS_DOCUMENTS/AARIZ-MIR.jpeg",
                bFormNumber: "71402-5794729-3",
                dateOfBirth: "2016-03-09",
                age: calculateAge("2016-03-09")
            },
            {
                id: "player-3-t26",
                name: "Jamsheed",
                fathersName: "Jamsheed Ul Hasnain",
                contactNumber: "",
                picture: "/TEAM26/PLAYERS_PICTURES/JAMSHEED.jpeg",
                bFormPicture: "/TEAM26/PLAYERS_DOCUMENTS/JAMSHEED.jpeg",
                bFormNumber: "71404-0339637-1",
                dateOfBirth: "2016-04-12",
                age: calculateAge("2016-04-12")
            },
            {
                id: "player-4-t26",
                name: "Saifan Sultan",
                fathersName: "Sultan",
                contactNumber: "",
                picture: "/TEAM26/PLAYERS_PICTURES/SAIFAN-SULTAN.jpeg",
                bFormPicture: "/TEAM26/PLAYERS_DOCUMENTS/SAIFAN-SULTAN.jpeg",
                bFormNumber: "42101-7006761-5",
                dateOfBirth: "2015-05-29",
                age: calculateAge("2015-05-29")
            },
            {
                id: "player-5-t26",
                name: "Adeel Ahsan",
                fathersName: "Ahsan Allah",
                contactNumber: "",
                picture: "/TEAM26/PLAYERS_PICTURES/ADEEL-AHSAN.jpeg",
                bFormPicture: "/TEAM26/PLAYERS_DOCUMENTS/ADEEL-AHSAN.jpeg",
                bFormNumber: "71501-4482696-5",
                dateOfBirth: "2015-09-18",
                age: calculateAge("2015-09-18")
            },
            {
                id: "player-6-t26",
                name: "Afnan Hakim",
                fathersName: "Hakim Uddin",
                contactNumber: "",
                picture: "/TEAM26/PLAYERS_PICTURES/AFNAN-HAKIM.jpeg",
                bFormPicture: "/TEAM26/PLAYERS_DOCUMENTS/AFNAN-HAKIM.jpeg",
                bFormNumber: "71403-0358943-1",
                dateOfBirth: "2017-11-15",
                age: calculateAge("2017-11-15")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t26",
                name: "Wasee Mubarak",
                fathersName: "Mubarak Ali",
                contactNumber: "",
                picture: "/TEAM26/PLAYERS_PICTURES/WASEE-MUBARAK.jpeg",
                bFormPicture: "/TEAM26/PLAYERS_DOCUMENTS/WASEE-MUBARAK.jpeg",
                bFormNumber: "71702-0348114-7",
                dateOfBirth: "2014-11-09",
                age: calculateAge("2014-11-09")
            },
            {
                id: "substitutePlayer-2-t26",
                name: "Arham Wazir",
                fathersName: "Wazeer Khan",
                contactNumber: "",
                picture: "/TEAM26/PLAYERS_PICTURES/ARHAM-WAZIR.jpeg",
                bFormPicture: "/TEAM26/PLAYERS_DOCUMENTS/ARHAM-WAZIR.jpeg",
                bFormNumber: "71402-1531680-1",
                dateOfBirth: "2016-05-13",
                age: calculateAge("2016-05-13")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t26",
                name: "Mohd Sinan",
                fathersName: "Arab Khan",
                contactNumber: "",
                picture: "/TEAM26/PLAYERS_PICTURES/MOHD-SINAN.jpeg",
                bFormPicture: "/TEAM26/PLAYERS_DOCUMENTS/MOHD-SINAN.jpeg",
                bFormNumber: "71501-2775122-5",
                dateOfBirth: "2019-07-19",
                age: calculateAge("2019-07-19")
            },
            {
                id: "Reserveplayer-2-t26",
                name: "Ahil Abbas",
                fathersName: "Mohd Abbas",
                contactNumber: "",
                picture: "/TEAM26/PLAYERS_PICTURES/AHIL-ABBAS.jpeg",
                bFormPicture: "/TEAM26/PLAYERS_DOCUMENTS/AHIL-ABBAS.jpeg",
                bFormNumber: "71702-0353010-7",
                dateOfBirth: "2017-12-05",
                age: calculateAge("2017-12-05")
            },
            {
                id: "Reserveplayer-3-t26",
                name: "Roman Alam",
                fathersName: "Mir Alam",
                contactNumber: "",
                picture: "/TEAM26/PLAYERS_PICTURES/ROMAN-ALAM.jpeg",
                bFormPicture: "/TEAM26/PLAYERS_DOCUMENTS/ROMAN-ALAM.jpeg",
                bFormNumber: "71501-3376447-9",
                dateOfBirth: "2015-09-15",
                age: calculateAge("2015-09-15")
            }
        ]
    },
    //    ==================== TEAM 27 ====================
    // JUTIAL FC
    {
        id: "team-27",
        teamName: "Jutial FC",
        teamLogo: "/TEAM27/TEAM27.jpeg",
        teamCoach: "Anwer Hayat",
        coachNumber: "",
        jkLocation: "",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t27",
                name: "Alsaif",
                fathersName: "Sher Nawaz Khan",
                contactNumber: "",
                picture: "/TEAM27/PLAYERS_PICTURES/ALSAIF.jpeg",
                bFormPicture: "/TEAM27/PLAYERS_DOCUMENTS/ALSAIF.jpeg",
                bFormNumber: "71401-0352458-9",
                dateOfBirth: "2015-08-31",
                age: calculateAge("2015-08-31")
            },
            {
                id: "player-2-t27",
                name: "Hammad",
                fathersName: "Akram Baig",
                contactNumber: "",
                picture: "/TEAM27/PLAYERS_PICTURES/HAMMAD.jpeg",
                bFormPicture: "/TEAM27/PLAYERS_DOCUMENTS/HAMMAD.jpeg",
                bFormNumber: "42101-7641267-3",
                dateOfBirth: "2017-08-07",
                age: calculateAge("2017-08-07")
            },
            {
                id: "player-3-t27",
                name: "Hasham",
                fathersName: "Mir Khan",
                contactNumber: "",
                picture: "/TEAM27/PLAYERS_PICTURES/HASHAM.jpeg",
                bFormPicture: "/TEAM27/PLAYERS_DOCUMENTS/HASHAM.jpeg",
                bFormNumber: "71404-0347355-7",
                dateOfBirth: "2015-03-13",
                age: calculateAge("2015-03-13")
            },
            {
                id: "player-4-t27",
                name: "Zohan Ali",
                fathersName: "Nasir Alam",
                contactNumber: "",
                picture: "/TEAM27/PLAYERS_PICTURES/ZOHAN-ALI.jpeg",
                bFormPicture: "/TEAM27/PLAYERS_DOCUMENTS/ZOHAN-ALI.jpeg",
                bFormNumber: "71501-9314790-7",
                dateOfBirth: "2016-06-28",
                age: calculateAge("2016-06-28")
            },
            {
                id: "player-5-t27",
                name: "Tabraiz",
                fathersName: "Mumtaz Ali Khan",
                contactNumber: "",
                picture: "/TEAM27/PLAYERS_PICTURES/TABRAIZ.jpeg",
                bFormPicture: "/TEAM27/PLAYERS_DOCUMENTS/TABRAIZ.jpeg",
                bFormNumber: "71401-7878718-5",
                dateOfBirth: "2014-12-12",
                age: calculateAge("2014-12-12")
            },
            {
                id: "player-6-t27",
                name: "Ali Darwish",
                fathersName: "Jamil Hayat",
                contactNumber: "",
                picture: "/TEAM27/PLAYERS_PICTURES/ALI-DARWISH.jpeg",
                bFormPicture: "/TEAM27/PLAYERS_DOCUMENTS/ALI-DARWISH.jpeg",
                bFormNumber: "71501-7414575-5",
                dateOfBirth: "2015-03-25",
                age: calculateAge("2015-03-25")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t27",
                name: "Arsalan Aktar",
                fathersName: "Aktar Aypub",
                contactNumber: "",
                picture: "/TEAM27/PLAYERS_PICTURES/ARSALAN-AKTAR.jpeg",
                bFormPicture: "/TEAM27/PLAYERS_DOCUMENTS/ARSALAN-AKTAR.jpeg",
                bFormNumber: "71403-0377526-5",
                dateOfBirth: "2017-07-29",
                age: calculateAge("2017-07-29")
            },
            {
                id: "substitutePlayer-2-t27",
                name: "Ayan Khalid",
                fathersName: "Khalid Hussain",
                contactNumber: "",
                picture: "/TEAM27/PLAYERS_PICTURES/AYAN-KHALID.jpeg",
                bFormPicture: "/TEAM27/PLAYERS_DOCUMENTS/AYAN-KHALID.jpeg",
                bFormNumber: "71501-5356385-3",
                dateOfBirth: "2018-04-12",
                age: calculateAge("2018-04-12")
            }
        ],

        reservePlayers: []
    },
    //    ==================== TEAM 28 ====================
    // JUTIAL JUNIORS
    {
        id: "team-28",
        teamName: "Jutial Juniors",
        teamLogo: "/TEAM28/TEAM28.png",
        teamCoach: "Yusuf Khan",
        coachNumber: "",
        jkLocation: "Upper Jutial",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t28",
                name: "Ariyan Khan",
                fathersName: "Rahat Karim",
                contactNumber: "",
                picture: "/TEAM28/PLAYERS_PICTURES/ARIYAN-KHAN.jpeg",
                bFormPicture: "/TEAM28/PLAYERS_DOCUMENTS/ARIYAN-KHAN.jpeg",
                bFormNumber: "71501-9157219-3",
                dateOfBirth: "2015-01-06",
                age: calculateAge("2015-01-06")
            },
            {
                id: "player-2-t28",
                name: "Shams Umair",
                fathersName: "Mumtaz Ali Khan",
                contactNumber: "",
                picture: "/TEAM28/PLAYERS_PICTURES/SHAMS-UMAIR.jpeg",
                bFormPicture: "/TEAM28/PLAYERS_DOCUMENTS/SHAMS-UMAIR.jpeg",
                bFormNumber: "71403-0360841-1",
                dateOfBirth: "2015-09-18",
                age: calculateAge("2015-09-18")
            },
            {
                id: "player-3-t28",
                name: "Fawad Nabi",
                fathersName: "M. Nani",
                contactNumber: "",
                picture: "/TEAM28/PLAYERS_PICTURES/FAWAD-NABI.jpeg",
                bFormPicture: "/TEAM28/PLAYERS_DOCUMENTS/FAWAD-NABI.jpeg",
                bFormNumber: "71403-0340744-5",
                dateOfBirth: "2015-06-08",
                age: calculateAge("2015-06-08")
            },
            {
                id: "player-4-t28",
                name: "Mudasir",
                fathersName: "Amin Ali",
                contactNumber: "",
                picture: "/TEAM28/PLAYERS_PICTURES/MUDASIR.jpeg",
                bFormPicture: "/TEAM28/PLAYERS_DOCUMENTS/MUDASIR.jpeg",
                bFormNumber: "71402-5314016-7",
                dateOfBirth: "2015-03-05",
                age: calculateAge("2015-03-05")
            },
            {
                id: "player-5-t28",
                name: "Sinan Hussain",
                fathersName: "Shahid Hussain",
                contactNumber: "",
                picture: "/TEAM28/PLAYERS_PICTURES/SINAN-HUSSAIN.jpeg",
                bFormPicture: "/TEAM28/PLAYERS_DOCUMENTS/SINAN-HUSSAIN.jpeg",
                bFormNumber: "71402-5868874-1",
                dateOfBirth: "2018-03-10",
                age: calculateAge("2018-03-10")
            },
            {
                id: "player-6-t28",
                name: "Wajdan",
                fathersName: "Imran Hussain",
                contactNumber: "",
                picture: "/TEAM28/PLAYERS_PICTURES/WAJDAN.jpeg",
                bFormPicture: "/TEAM28/PLAYERS_DOCUMENTS/WAJDAN.jpeg",
                bFormNumber: "71501-6156207-3",
                dateOfBirth: "2015-05-13",
                age: calculateAge("2015-05-13")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t28",
                name: "Azhan",
                fathersName: "Imran Hussain",
                contactNumber: "",
                picture: "/TEAM28/PLAYERS_PICTURES/AZHAN.jpeg",
                bFormPicture: "/TEAM28/PLAYERS_DOCUMENTS/AZHAN.jpeg",
                bFormNumber: "71501-6155257-3",
                dateOfBirth: "2015-06-15",
                age: calculateAge("2015-06-15")
            },
            {
                id: "substitutePlayer-2-t28",
                name: "Azlan Hussain",
                fathersName: "Shahid Hussain",
                contactNumber: "",
                picture: "/TEAM28/PLAYERS_PICTURES/AZLAN-HUSSAIN.jpeg",
                bFormPicture: "/TEAM28/PLAYERS_DOCUMENTS/AZLAN-HUSSAIN.jpeg",
                bFormNumber: "71402-5963874-1",
                dateOfBirth: "2016-01-10",
                age: calculateAge("2016-01-10")
            },
            {
                id: "substitutePlayer-3-t28",
                name: "Shahzain",
                fathersName: "",
                contactNumber: "",
                picture: "/TEAM28/PLAYERS_PICTURES/SHAHZAIN.jpeg",
                bFormPicture: "/TEAM28/PLAYERS_DOCUMENTS/SHAHZAIN.jpeg",
                bFormNumber: "",
                dateOfBirth: "",
                age: null
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t28",
                name: "Zoraiz Iqbal",
                fathersName: "Wajid Iqbal",
                contactNumber: "",
                picture: "/TEAM28/PLAYERS_PICTURES/ZORAIZ-IQBAL.jpeg",
                bFormPicture: "/TEAM28/PLAYERS_DOCUMENTS/ZORAIZ-IQBAL.jpeg",
                bFormNumber: "71501-0210920-3",
                dateOfBirth: "2016-06-28",
                age: calculateAge("2016-06-28")
            }
        ]
    },
    //    ==================== TEAM 29 ====================
    // FATIMAABAD FC
    {
        id: "team-29",
        teamName: "Fatimaabad FC",
        teamLogo: "/TEAM29/TEAM29.png",
        teamCoach: "Rizwan Ali Shahii",
        coachNumber: "3554239350",
        jkLocation: "Fatimaabad JK 5 Oshikhandass",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t29",
                name: "Wahab Uddin",
                fathersName: "Ghulam Haider",
                contactNumber: "",
                picture: "/TEAM29/PLAYERS_PICTURES/WAHAB-UDDIN.jpeg",
                bFormPicture: "/TEAM29/PLAYERS_DOCUMENTS/WAHAB-UDDIN.jpeg",
                bFormNumber: "11551969",
                dateOfBirth: "2014-08-19",
                age: calculateAge("2014-08-19")
            },
            {
                id: "player-2-t29",
                name: "Azhar Ali Shah",
                fathersName: "Rahim Shah",
                contactNumber: "",
                picture: "/TEAM29/PLAYERS_PICTURES/AZHAR-ALI-SHAH.jpeg",
                bFormPicture: "/TEAM29/PLAYERS_DOCUMENTS/AZHAR-ALI-SHAH.jpeg",
                bFormNumber: "28764186",
                dateOfBirth: "2014-09-11",
                age: calculateAge("2014-09-11")
            },
            {
                id: "player-3-t29",
                name: "Amar Alam",
                fathersName: "Maqsood Alam",
                contactNumber: "",
                picture: "/TEAM29/PLAYERS_PICTURES/AMAR-ALAM.jpeg",
                bFormPicture: "/TEAM29/PLAYERS_DOCUMENTS/AMAR-ALAM.jpeg",
                bFormNumber: "18520251",
                dateOfBirth: "2014-09-18",
                age: calculateAge("2014-09-18")
            },
            {
                id: "player-4-t29",
                name: "Afsar Jan",
                fathersName: "Khan Aman",
                contactNumber: "",
                picture: "/TEAM29/PLAYERS_PICTURES/AFSAR-JAN.jpeg",
                bFormPicture: "/TEAM29/PLAYERS_DOCUMENTS/AFSAR-JAN.jpeg",
                bFormNumber: "12260779",
                dateOfBirth: "2014-11-19",
                age: calculateAge("2014-11-19")
            },
            {
                id: "player-5-t29",
                name: "Sayam Barcha",
                fathersName: "Naeem Khan",
                contactNumber: "",
                picture: "/TEAM29/PLAYERS_PICTURES/SAYAM-BARCHA.jpeg",
                bFormPicture: "/TEAM29/PLAYERS_DOCUMENTS/SAYAM-BARCHA.jpeg",
                bFormNumber: "27007589",
                dateOfBirth: "2014-08-02",
                age: calculateAge("2014-08-02")
            },
            {
                id: "player-6-t29",
                name: "Azmat Ali",
                fathersName: "Gull Khan",
                contactNumber: "",
                picture: "/TEAM29/PLAYERS_PICTURES/AZMAT-ALI.jpeg",
                bFormPicture: "/TEAM29/PLAYERS_DOCUMENTS/AZMAT-ALI.jpeg",
                bFormNumber: "64645466",
                dateOfBirth: "2014-08-05",
                age: calculateAge("2014-08-05")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t29",
                name: "Ahil Ahmed",
                fathersName: "Khurram",
                contactNumber: "",
                picture: "/TEAM29/PLAYERS_PICTURES/AHIL-AHMED.jpeg",
                bFormPicture: "/TEAM29/PLAYERS_DOCUMENTS/AHIL-AHMED.jpeg",
                bFormNumber: "16251189",
                dateOfBirth: "2014-09-03",
                age: calculateAge("2014-09-03")
            },
            {
                id: "substitutePlayer-2-t29",
                name: "Subtain Iqbal",
                fathersName: "Javed Iqbal",
                contactNumber: "",
                picture: "/TEAM29/PLAYERS_PICTURES/SUBTAIN-IQBAL.jpeg",
                bFormPicture: "/TEAM29/PLAYERS_DOCUMENTS/SUBTAIN-IQBAL.jpeg",
                bFormNumber: "26266213",
                dateOfBirth: "2015-08-28",
                age: calculateAge("2015-08-28")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t29",
                name: "Hassan Barcha",
                fathersName: "Naeem",
                contactNumber: "",
                picture: "/TEAM29/PLAYERS_PICTURES/HASSAN-BARCHA.jpeg",
                bFormPicture: "/TEAM29/PLAYERS_DOCUMENTS/HASSAN-BARCHA.jpeg",
                bFormNumber: "27007589",
                dateOfBirth: "2018-03-18",
                age: calculateAge("2018-03-18")
            },
            {
                id: "Reserveplayer-2-t29",
                name: "Rayan Alam",
                fathersName: "Jange Alam",
                contactNumber: "",
                picture: "/TEAM29/PLAYERS_PICTURES/RAYAN-ALAM.jpeg",
                bFormPicture: "/TEAM29/PLAYERS_DOCUMENTS/RAYAN-ALAM.jpeg",
                bFormNumber: "32020441",
                dateOfBirth: "2015-07-01",
                age: calculateAge("2015-07-01")
            },
            {
                id: "Reserveplayer-3-t29",
                name: "Afaq Zia",
                fathersName: "M. Zia",
                contactNumber: "",
                picture: "/TEAM29/PLAYERS_PICTURES/AFAQ-ZIA.jpeg",
                bFormPicture: "/TEAM29/PLAYERS_DOCUMENTS/AFAQ-ZIA.jpeg",
                bFormNumber: "15425848",
                dateOfBirth: "2015-01-01",
                age: calculateAge("2015-01-01")
            }
        ]
    },
    //    ==================== TEAM 30 ====================
    // FRANSKI FC DANYORE JK 3
    {
        id: "team-30",
        teamName: "Franskie Juniors FC",
        teamLogo: "/TEAM30/TEAM30.png",
        teamCoach: "Faizan",
        coachNumber: "03554319777",
        jkLocation: "Danyor JK #3",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t30",
                name: "Zayan",
                fathersName: "Arshad Khan",
                contactNumber: "",
                picture: "/TEAM30/PLAYERS_PICTURES/ZAYAN.jpeg",
                bFormPicture: "/TEAM30/PLAYERS_DOCUMENTS/ZAYAN.jpeg",
                bFormNumber: "71501-6240257-7",
                dateOfBirth: "2014-12-15",
                age: calculateAge("2014-12-15")
            },
            {
                id: "player-2-t30",
                name: "Zayeem",
                fathersName: "Arshad Khan",
                contactNumber: "",
                picture: "/TEAM30/PLAYERS_PICTURES/ZAYEEM.jpeg",
                bFormPicture: "/TEAM30/PLAYERS_DOCUMENTS/ZAYEEM.jpeg",
                bFormNumber: "71501-6241207-7",
                dateOfBirth: "2017-11-30",
                age: calculateAge("2017-11-30")
            },
            {
                id: "player-3-t30",
                name: "Arsalan",
                fathersName: "Murad Madad",
                contactNumber: "",
                picture: "/TEAM30/PLAYERS_PICTURES/ARSALAN.jpeg",
                bFormPicture: "/TEAM30/PLAYERS_DOCUMENTS/ARSALAN.jpeg",
                bFormNumber: "71405-0338926-7",
                dateOfBirth: "2015-05-03",
                age: calculateAge("2015-05-03")
            },
            {
                id: "player-4-t30",
                name: "Amaad",
                fathersName: "Salman Karim",
                contactNumber: "",
                picture: "/TEAM30/PLAYERS_PICTURES/AMAAD.jpeg",
                bFormPicture: "/TEAM30/PLAYERS_DOCUMENTS/AMAAD.jpeg",
                bFormNumber: "71506-0343426-1",
                dateOfBirth: "2016-02-07",
                age: calculateAge("2016-02-07")
            },
            {
                id: "player-5-t30",
                name: "Faiz",
                fathersName: "Gulam Jan",
                contactNumber: "",
                picture: "/TEAM30/PLAYERS_PICTURES/FAIZ.jpeg",
                bFormPicture: "/TEAM30/PLAYERS_DOCUMENTS/FAIZ.jpeg",
                bFormNumber: "71403-0357789-5",
                dateOfBirth: "2015-04-04",
                age: calculateAge("2015-04-04")
            },
            {
                id: "player-6-t30",
                name: "Shayan",
                fathersName: "Mirza Khan",
                contactNumber: "",
                picture: "/TEAM30/PLAYERS_PICTURES/SHAYAN.jpeg",
                bFormPicture: "/TEAM30/PLAYERS_DOCUMENTS/SHAYAN.jpeg",
                bFormNumber: "71401-5504206-5",
                dateOfBirth: "2019-01-09",
                age: calculateAge("2019-01-09")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t30",
                name: "Fayaz Alam",
                fathersName: "Mehmood Alam Shah",
                contactNumber: "",
                picture: "/TEAM30/PLAYERS_PICTURES/FAYAZ-ALAM.jpeg",
                bFormPicture: "/TEAM30/PLAYERS_DOCUMENTS/FAYAZ-ALAM.jpeg",
                bFormNumber: "71401-8156200-1",
                dateOfBirth: "2015-03-16",
                age: calculateAge("2015-03-16")
            },
            {
                id: "substitutePlayer-2-t30",
                name: "Wafi Ahmed",
                fathersName: "Mirza Khan",
                contactNumber: "",
                picture: "/TEAM30/PLAYERS_PICTURES/WAFI-AHMED.jpeg",
                bFormPicture: "/TEAM30/PLAYERS_DOCUMENTS/WAFI-AHMED.jpeg",
                bFormNumber: "71401-3465616-5",
                dateOfBirth: "2016-03-04",
                age: calculateAge("2016-03-04")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t30",
                name: "Ahad Hussain",
                fathersName: "Wajahat Hussain",
                contactNumber: "",
                picture: "/TEAM30/PLAYERS_PICTURES/AHAD-HUSSAIN.jpeg",
                bFormPicture: "/TEAM30/PLAYERS_DOCUMENTS/AHAD-HUSSAIN.jpeg",
                bFormNumber: "71403-0374169-1",
                dateOfBirth: "2016-10-02",
                age: calculateAge("2016-10-02")
            }
        ]
    },
    //    ==================== TEAM 31 ====================
    // OSHIKHANDAS JK 6
    {
        id: "team-31",
        teamName: "Al Rahim FC",
        teamLogo: "/TEAM31/TEAM31.jpeg",
        teamCoach: "Shahzaib Alam",
        coachNumber: "3555282434",
        jkLocation: "Al Rahim FC",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t31",
                name: "Ayan Arish",
                fathersName: "Faqeer Husnain",
                contactNumber: "",
                picture: "/TEAM31/PLAYERS_PICTURES/AYAN-ARISH.jpeg",
                bFormPicture: "/TEAM31/PLAYERS_DOCUMENTS/AYAN-ARISH.jpeg",
                bFormNumber: "",
                dateOfBirth: "2014-08-23",
                age: calculateAge("2014-08-23")
            },
            {
                id: "player-2-t31",
                name: "Azan Liaqat",
                fathersName: "Laiqat Ali",
                contactNumber: "",
                picture: "/TEAM31/PLAYERS_PICTURES/AZAN-LIAQAT.jpeg",
                bFormPicture: "/TEAM31/PLAYERS_DOCUMENTS/AZAN-LIAQAT.jpeg",
                bFormNumber: "7150106205479",
                dateOfBirth: "2014-07-07",
                age: calculateAge("2014-07-07")
            },
            {
                id: "player-3-t31",
                name: "Zurraiz Ali",
                fathersName: "Ikram Ullah",
                contactNumber: "",
                picture: "/TEAM31/PLAYERS_PICTURES/ZURRAIZ-ALI.jpeg",
                bFormPicture: "/TEAM31/PLAYERS_DOCUMENTS/ZURRAIZ-ALI.jpeg",
                bFormNumber: "",
                dateOfBirth: "2017-03-01",
                age: calculateAge("2017-03-01")
            },
            {
                id: "player-4-t31",
                name: "Ammab Farman",
                fathersName: "Share Farman",
                contactNumber: "",
                picture: "/TEAM31/PLAYERS_PICTURES/AMMAB-FARMAN.jpeg",
                bFormPicture: "/TEAM31/PLAYERS_DOCUMENTS/AMMAB-FARMAN.jpeg",
                bFormNumber: "",
                dateOfBirth: "2017-03-06",
                age: calculateAge("2017-03-06")
            },
            {
                id: "player-5-t31",
                name: "Melad Shams",
                fathersName: "Sham Uddin",
                contactNumber: "",
                picture: "/TEAM31/PLAYERS_PICTURES/MELAD-SHAMS.jpeg",
                bFormPicture: "/TEAM31/PLAYERS_DOCUMENTS/MELAD-SHAMS.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-01-23",
                age: calculateAge("2015-01-23")
            },
            {
                id: "player-6-t31",
                name: "Jahnanzaib Alam",
                fathersName: "Naik Alam",
                contactNumber: "",
                picture: "/TEAM31/PLAYERS_PICTURES/JAHANZAIB-ALAM.jpeg",
                bFormPicture: "/TEAM31/PLAYERS_DOCUMENTS/JAHANZAIB-ALAM.jpeg",
                bFormNumber: "7150119995373",
                dateOfBirth: "2017-04-01",
                age: calculateAge("2017-04-01")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t31",
                name: "Aliyazdan",
                fathersName: "Javeed Iqbal",
                contactNumber: "",
                picture: "/TEAM31/PLAYERS_PICTURES/ALIYAZDAN.jpeg",
                bFormPicture: "/TEAM31/PLAYERS_DOCUMENTS/ALIYAZDAN.jpeg",
                bFormNumber: "7150186835535",
                dateOfBirth: "2015-06-19",
                age: calculateAge("2015-06-19")
            },
            {
                id: "substitutePlayer-2-t31",
                name: "Ansab Sahid",
                fathersName: "Zahid Sharif",
                contactNumber: "",
                picture: "/TEAM31/PLAYERS_PICTURES/ANSAB-SAHID.jpeg",
                bFormPicture: "/TEAM31/PLAYERS_DOCUMENTS/ANSAB-SAHID.jpeg",
                bFormNumber: "",
                dateOfBirth: "2018-08-25",
                age: calculateAge("2018-08-25")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t31",
                name: "Arish Ali",
                fathersName: "Kabeer Ali",
                contactNumber: "",
                picture: "/TEAM31/PLAYERS_PICTURES/ARISH-ALI.jpeg",
                bFormPicture: "/TEAM31/PLAYERS_DOCUMENTS/ARISH-ALI.jpeg",
                bFormNumber: "",
                dateOfBirth: "2016-08-21",
                age: calculateAge("2016-08-21")
            },
            {
                id: "Reserveplayer-2-t31",
                name: "Saddat Shams",
                fathersName: "Sham Uddin",
                contactNumber: "",
                picture: "/TEAM31/PLAYERS_PICTURES/SADDAT-SHAMS.jpeg",
                bFormPicture: "/TEAM31/PLAYERS_DOCUMENTS/SADDAT-SHAMS.jpeg",
                bFormNumber: "",
                dateOfBirth: "2016-07-01",
                age: calculateAge("2016-07-01")
            }
        ]
    },
    //    ==================== TEAM 32 ====================
    // HARAM AMINABAD JK 
    {
        id: "team-32",
        teamName: "Harram Ball United",
        teamLogo: "/TEAM32/TEAM32.jpeg",
        teamCoach: "Yazal Riaz",
        coachNumber: "3155911944",
        jkLocation: "Amin Abad Jutiyal",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t32",
                name: "Daniyal Amin",
                fathersName: "Amin Sher",
                contactNumber: "",
                picture: "/TEAM32/PLAYERS_PICTURES/DANIYAL-AMIN.jpeg",
                bFormPicture: "/TEAM32/PLAYERS_DOCUMENTS/DANIYAL-AMIN.jpeg",
                bFormNumber: "71501-6341883-9",
                dateOfBirth: "2015-02-06",
                age: calculateAge("2015-02-06")
            },
            {
                id: "player-2-t32",
                name: "Haider Yaqoob",
                fathersName: "Jalal Haider",
                contactNumber: "",
                picture: "/TEAM32/PLAYERS_PICTURES/HAIDER-YAQOOB.jpeg",
                bFormPicture: "/TEAM32/PLAYERS_DOCUMENTS/HAIDER-YAQOOB.jpeg",
                bFormNumber: "71501-2566112-5",
                dateOfBirth: "2015-12-15",
                age: calculateAge("2015-12-15")
            },
            {
                id: "player-3-t32",
                name: "Ahsan",
                fathersName: "Niyat Murad",
                contactNumber: "",
                picture: "/TEAM32/PLAYERS_PICTURES/AHSAN.jpeg",
                bFormPicture: "/TEAM32/PLAYERS_DOCUMENTS/AHSAN.jpeg",
                bFormNumber: "71402-2935200-1",
                dateOfBirth: "2014-03-28",
                age: calculateAge("2014-03-28")
            },
            {
                id: "player-4-t32",
                name: "Shamraiz",
                fathersName: "Manzoor Karim",
                contactNumber: "",
                picture: "/TEAM32/PLAYERS_PICTURES/SHAMRAIZ.jpeg",
                bFormPicture: "/TEAM32/PLAYERS_DOCUMENTS/SHAMRAIZ.jpeg",
                bFormNumber: "71501-1322484-5",
                dateOfBirth: "2015-04-04",
                age: calculateAge("2015-04-04")
            },
            {
                id: "player-5-t32",
                name: "Ezan",
                fathersName: "Salman Farsi",
                contactNumber: "",
                picture: "/TEAM32/PLAYERS_PICTURES/EZAN.jpeg",
                bFormPicture: "/TEAM32/PLAYERS_DOCUMENTS/EZAN.jpeg",
                bFormNumber: "71501-1301457-9",
                dateOfBirth: "2015-09-15",
                age: calculateAge("2015-09-15")
            },
            {
                id: "player-6-t32",
                name: "Rohan Karim",
                fathersName: "Qurban Karim",
                contactNumber: "",
                picture: "/TEAM32/PLAYERS_PICTURES/ROHAN-KARIM.jpeg",
                bFormPicture: "/TEAM32/PLAYERS_DOCUMENTS/ROHAN-KARIM.jpeg",
                bFormNumber: "37405-4523707-6",
                dateOfBirth: "2014-10-13",
                age: calculateAge("2014-10-13")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t32",
                name: "Zeeshan Faraz",
                fathersName: "Sir Faraz Khan",
                contactNumber: "",
                picture: "/TEAM32/PLAYERS_PICTURES/ZEESHAN-FARAZ.jpeg",
                bFormPicture: "/TEAM32/PLAYERS_DOCUMENTS/ZEESHAN-FARAZ.jpeg",
                bFormNumber: "71501-2342239-5",
                dateOfBirth: "2015-11-15",
                age: calculateAge("2015-11-15")
            },
            {
                id: "substitutePlayer-2-t32",
                name: "Wajahat Ali Shah",
                fathersName: "Shireen Jan",
                contactNumber: "",
                picture: "/TEAM32/PLAYERS_PICTURES/WAJAHAT-ALI-SHAH.jpeg",
                bFormPicture: "/TEAM32/PLAYERS_DOCUMENTS/WAJAHAT-ALI-SHAH.jpeg",
                bFormNumber: "71401-8660135-7",
                dateOfBirth: "2016-10-08",
                age: calculateAge("2016-10-08")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t32",
                name: "Raheel Hameed",
                fathersName: "Hammed Ullah",
                contactNumber: "",
                picture: "/TEAM32/PLAYERS_PICTURES/RAHEEL-HAMEED.jpeg",
                bFormPicture: "/TEAM32/PLAYERS_DOCUMENTS/RAHEEL-HAMEED.jpeg",
                bFormNumber: "",
                dateOfBirth: "2016-12-12",
                age: calculateAge("2016-12-12")
            },
            {
                id: "Reserveplayer-2-t32",
                name: "Ammar",
                fathersName: "Anwar Hayat",
                contactNumber: "",
                picture: "/TEAM32/PLAYERS_PICTURES/AMMAR.jpeg",
                bFormPicture: "/TEAM32/PLAYERS_DOCUMENTS/AMMAR.jpeg",
                bFormNumber: "",
                dateOfBirth: "2016-11-15",
                age: calculateAge("2016-11-15")
            },
            {
                id: "Reserveplayer-3-t32",
                name: "Nihal Muhammad",
                fathersName: "Muhammad Ali",
                contactNumber: "",
                picture: "/TEAM32/PLAYERS_PICTURES/NIHAL-MUHAMMAD.jpeg",
                bFormPicture: "/TEAM32/PLAYERS_DOCUMENTS/NIHAL-MUHAMMAD.jpeg",
                bFormNumber: "71501-7594661-8",
                dateOfBirth: "2015-01-30",
                age: calculateAge("2015-01-30")
            }
        ]
    },
    //    ==================== TEAM 33 ====================
    // DANYOUOR JK 3 FC BANI SHOOTERS
    {
        id: "team-33",
        teamName: "FC Bani Shooters",
        teamLogo: "/TEAM33/TEAM33.jpeg",
        teamCoach: "Saad Ali",
        coachNumber: "3195068179",
        jkLocation: "JK # 3 Danyore",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t33",
                name: "Azman Ali",
                fathersName: "Pyar Ali",
                contactNumber: "",
                picture: "/TEAM33/PLAYERS_PICTURES/AZMAN-ALI.jpeg",
                bFormPicture: "/TEAM33/PLAYERS_DOCUMENTS/AZMAN-ALI.jpeg",
                bFormNumber: "71506-0341640-1",
                dateOfBirth: "2014-08-04",
                age: calculateAge("2014-08-04")
            },
            {
                id: "player-2-t33",
                name: "Irfan Khan",
                fathersName: "Surum Khan",
                contactNumber: "",
                picture: "/TEAM33/PLAYERS_PICTURES/IRFAN-KHAN.jpeg",
                bFormPicture: "/TEAM33/PLAYERS_DOCUMENTS/IRFAN-KHAN.jpeg",
                bFormNumber: "71404-0355281-9",
                dateOfBirth: "2014-10-17",
                age: calculateAge("2014-10-17")
            },
            {
                id: "player-3-t33",
                name: "Seyam Khan",
                fathersName: "Khan Zada",
                contactNumber: "",
                picture: "/TEAM33/PLAYERS_PICTURES/SEYAM-KHAN.jpeg",
                bFormPicture: "/TEAM33/PLAYERS_DOCUMENTS/SEYAM-KHAN.jpeg",
                bFormNumber: "71501-9375797-7",
                dateOfBirth: "2015-12-18",
                age: calculateAge("2015-12-18")
            },
            {
                id: "player-4-t33",
                name: "Alhan Baig",
                fathersName: "Imam Yar Baig",
                contactNumber: "",
                picture: "/TEAM33/PLAYERS_PICTURES/ALHAN-BAIG.jpeg",
                bFormPicture: "/TEAM33/PLAYERS_DOCUMENTS/ALHAN-BAIG.jpeg",
                bFormNumber: "71506-0341272-3",
                dateOfBirth: "2014-12-10",
                age: calculateAge("2014-12-10")
            },
            {
                id: "player-5-t33",
                name: "Rohan Karim",
                fathersName: "Ajaz Karim",
                contactNumber: "",
                picture: "/TEAM33/PLAYERS_PICTURES/ROHAN-KARIM.jpeg",
                bFormPicture: "/TEAM33/PLAYERS_DOCUMENTS/ROHAN-KARIM.jpeg",
                bFormNumber: "71501-8095348-1",
                dateOfBirth: "2016-05-09",
                age: calculateAge("2016-05-09")
            },
            {
                id: "player-6-t33",
                name: "Atif Fida",
                fathersName: "Fida Hussain",
                contactNumber: "",
                picture: "/TEAM33/PLAYERS_PICTURES/ATIF-FIDA.jpeg",
                bFormPicture: "/TEAM33/PLAYERS_DOCUMENTS/ATIF-FIDA.jpeg",
                bFormNumber: "71501-5844617-1",
                dateOfBirth: "2014-12-05",
                age: calculateAge("2014-12-05")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t33",
                name: "Noor Ali",
                fathersName: "Amir Ali",
                contactNumber: "",
                picture: "/TEAM33/PLAYERS_PICTURES/NOOR-ALI.jpeg",
                bFormPicture: "/TEAM33/PLAYERS_DOCUMENTS/NOOR-ALI.jpeg",
                bFormNumber: "71501-7534805-3",
                dateOfBirth: "2015-08-03",
                age: calculateAge("2015-08-03")
            },
            {
                id: "substitutePlayer-2-t33",
                name: "Shanzada",
                fathersName: "Naik Zada",
                contactNumber: "",
                picture: "/TEAM33/PLAYERS_PICTURES/SHANZADA.jpeg",
                bFormPicture: "/TEAM33/PLAYERS_DOCUMENTS/SHANZADA.jpeg",
                bFormNumber: "71501-1420151-3",
                dateOfBirth: "2014-10-31",
                age: calculateAge("2014-10-31")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t33",
                name: "Hammad Aziz",
                fathersName: "Abdul Aziz",
                contactNumber: "",
                picture: "/TEAM33/PLAYERS_PICTURES/HAMMAD-AZIZ.jpeg",
                bFormPicture: "/TEAM33/PLAYERS_DOCUMENTS/HAMMAD-AZIZ.jpeg",
                bFormNumber: "71506-0352939-9",
                dateOfBirth: "2014-10-22",
                age: calculateAge("2014-10-22")
            },
            {
                id: "Reserveplayer-2-t33",
                name: "Amad Alam",
                fathersName: "Muhammad Alam",
                contactNumber: "",
                picture: "/TEAM33/PLAYERS_PICTURES/AMAD-ALAM.jpeg",
                bFormPicture: "/TEAM33/PLAYERS_DOCUMENTS/AMAD-ALAM.jpeg",
                bFormNumber: "71501-0166715-3",
                dateOfBirth: "2014-10-23",
                age: calculateAge("2014-10-23")
            }
        ]
    },
    //    ==================== TEAM 34 ====================
    // CHAMEN FC DANYORE JK # 6
    {
        id: "team-34",
        teamName: "CHAMAN FC",
        teamLogo: "/TEAM34/TEAM34.jpeg",
        teamCoach: "Azhar Maqbool",
        coachNumber: "3555810157",
        jkLocation: "Danyore JK #6",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t34",
                name: "Fahad Noor",
                fathersName: "Noor Ali",
                contactNumber: "",
                picture: "/TEAM34/PLAYERS_PICTURES/FAHAD-NOOR.jpeg",
                bFormPicture: "/TEAM34/PLAYERS_DOCUMENTS/FAHAD-NOOR.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-11-16",
                age: calculateAge("2015-11-16")
            },
            {
                id: "player-2-t34",
                name: "Faraz Arif Khan",
                fathersName: "Arif Khan",
                contactNumber: "",
                picture: "/TEAM34/PLAYERS_PICTURES/FARAZ-ARIF-KHAN.jpeg",
                bFormPicture: "/TEAM34/PLAYERS_DOCUMENTS/FARAZ-ARIF-KHAN.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-11-04",
                age: calculateAge("2015-11-04")
            },
            {
                id: "player-3-t34",
                name: "Hannan Mir",
                fathersName: "",
                contactNumber: "",
                picture: "/TEAM34/PLAYERS_PICTURES/HANNAN-MIR.jpeg",
                bFormPicture: "/TEAM34/PLAYERS_DOCUMENTS/HANNAN-MIR.jpeg",
                bFormNumber: "",
                dateOfBirth: "2016-12-26",
                age: calculateAge("2016-12-26")
            },
            {
                id: "player-4-t34",
                name: "Alishan Ali",
                fathersName: "Nisar Ali",
                contactNumber: "",
                picture: "/TEAM34/PLAYERS_PICTURES/ALISHAN-ALI.jpeg",
                bFormPicture: "/TEAM34/PLAYERS_DOCUMENTS/ALISHAN-ALI.jpeg",
                bFormNumber: "",
                dateOfBirth: "2017-01-19",
                age: calculateAge("2017-01-19")
            },
            {
                id: "player-5-t34",
                name: "Rehan Atta",
                fathersName: "Attaullah",
                contactNumber: "",
                picture: "/TEAM34/PLAYERS_PICTURES/REHAN-ATTA.jpeg",
                bFormPicture: "/TEAM34/PLAYERS_DOCUMENTS/REHAN-ATTA.jpeg",
                bFormNumber: "",
                dateOfBirth: "2016-03-23",
                age: calculateAge("2016-03-23")
            },
            {
                id: "player-6-t34",
                name: "Ahil Mir",
                fathersName: "Salman Ali",
                contactNumber: "",
                picture: "/TEAM34/PLAYERS_PICTURES/AHIL-MIR.jpeg",
                bFormPicture: "/TEAM34/PLAYERS_DOCUMENTS/AHIL-MIR.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-05-05",
                age: calculateAge("2015-05-05")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t34",
                name: "Ashraf ul Arfeen",
                fathersName: "Shahid Karim",
                contactNumber: "",
                picture: "/TEAM34/PLAYERS_PICTURES/ASHRAF-UL-ARFEEN.jpeg",
                bFormPicture: "/TEAM34/PLAYERS_DOCUMENTS/ASHRAF-UL-ARFEEN.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-11-28",
                age: calculateAge("2015-11-28")
            }
        ],

        reservePlayers: []
    },
    //    ==================== TEAM 35 ====================
    // GHIZER JANBAZ
    {
        id: "team-35",
        teamName: "Ghizer Janbaaz",
        teamLogo: "/TEAM35/TEAM35.jpeg",
        teamCoach: "Azhar Maqbool",
        coachNumber: "3555810158",
        jkLocation: "Zulfiqarabad",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t35",
                name: "Shahfat Ali",
                fathersName: "Bahadur Khan",
                contactNumber: "",
                picture: "/TEAM35/PLAYERS_PICTURES/SHAHFAT-ALI.jpeg",
                bFormPicture: "/TEAM35/PLAYERS_DOCUMENTS/SHAHFAT-ALI.jpeg",
                bFormNumber: "71403-0354789-9",
                dateOfBirth: "2014-08-15",
                age: calculateAge("2014-08-15")
            },
            {
                id: "player-2-t35",
                name: "Farhan Ali",
                fathersName: "Bahadur Khan",
                contactNumber: "",
                picture: "/TEAM35/PLAYERS_PICTURES/FARHAN-ALI.jpeg",
                bFormPicture: "/TEAM35/PLAYERS_DOCUMENTS/FARHAN-ALI.jpeg",
                bFormNumber: "71403-0354191-7",
                dateOfBirth: "2017-03-01",
                age: calculateAge("2017-03-01")
            },
            {
                id: "player-3-t35",
                name: "Irfan Ali",
                fathersName: "Bahadur Khan",
                contactNumber: "",
                picture: "/TEAM35/PLAYERS_PICTURES/IRFAN-ALI.jpeg",
                bFormPicture: "/TEAM35/PLAYERS_DOCUMENTS/IRFAN-ALI.jpeg",
                bFormNumber: "71403-0354190-3",
                dateOfBirth: "2016-03-28",
                age: calculateAge("2016-03-28")
            },
            {
                id: "player-4-t35",
                name: "Noman Ali",
                fathersName: "Sher Murad",
                contactNumber: "",
                picture: "/TEAM35/PLAYERS_PICTURES/NOMAN-ALI.jpeg",
                bFormPicture: "/TEAM35/PLAYERS_DOCUMENTS/NOMAN-ALI.jpeg",
                bFormNumber: "71401-3347208-1",
                dateOfBirth: "2015-03-10",
                age: calculateAge("2015-03-10")
            },
            {
                id: "player-5-t35",
                name: "Muhammad Wasim",
                fathersName: "Zar Nayab Khan",
                contactNumber: "",
                picture: "/TEAM35/PLAYERS_PICTURES/MUHAMMAD-WASIM.jpeg",
                bFormPicture: "/TEAM35/PLAYERS_DOCUMENTS/MUHAMMAD-WASIM.jpeg",
                bFormNumber: "71401-1065939-3",
                dateOfBirth: "2014-08-16",
                age: calculateAge("2014-08-16")
            },
            {
                id: "player-6-t35",
                name: "Alizaib",
                fathersName: "Mirza Alam",
                contactNumber: "",
                picture: "/TEAM35/PLAYERS_PICTURES/ALIZAIB.jpeg",
                bFormPicture: "/TEAM35/PLAYERS_DOCUMENTS/ALIZAIB.jpeg",
                bFormNumber: "71401-1319728-7",
                dateOfBirth: "2015-06-27",
                age: calculateAge("2015-06-27")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t35",
                name: "Sameer",
                fathersName: "Arab Khan",
                contactNumber: "",
                picture: "/TEAM35/PLAYERS_PICTURES/SAMEER.jpeg",
                bFormPicture: "/TEAM35/PLAYERS_DOCUMENTS/SAMEER.jpeg",
                bFormNumber: "714030-0353355-3",
                dateOfBirth: "2015-03-03",
                age: calculateAge("2015-03-03")
            },
            {
                id: "substitutePlayer-2-t35",
                name: "Naeem",
                fathersName: "Zar Nayab Khan",
                contactNumber: "",
                picture: "/TEAM35/PLAYERS_PICTURES/NAEEM.jpeg",
                bFormPicture: "/TEAM35/PLAYERS_DOCUMENTS/NAEEM.jpeg",
                bFormNumber: "71401-41145961-1",
                dateOfBirth: "2014-08-26",
                age: calculateAge("2014-08-26")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t35",
                name: "Zuhaib",
                fathersName: "Islam Khan",
                contactNumber: "",
                picture: "/TEAM35/PLAYERS_PICTURES/ZUHAIB.jpeg",
                bFormPicture: "/TEAM35/PLAYERS_DOCUMENTS/ZUHAIB.jpeg",
                bFormNumber: "71403-0356118-1",
                dateOfBirth: "2015-05-03",
                age: calculateAge("2015-05-03")
            },
            {
                id: "Reserveplayer-2-t35",
                name: "Farhan",
                fathersName: "Sultan Azam",
                contactNumber: "",
                picture: "/TEAM35/PLAYERS_PICTURES/FARHAN.jpeg",
                bFormPicture: "/TEAM35/PLAYERS_DOCUMENTS/FARHAN.jpeg",
                bFormNumber: "71501-0243863-1",
                dateOfBirth: "2014-06-08",
                age: calculateAge("2014-06-08")
            },
            {
                id: "Reserveplayer-3-t35",
                name: "Shahzaib",
                fathersName: "Sher Alam",
                contactNumber: "",
                picture: "/TEAM35/PLAYERS_PICTURES/SHAHZAIB.jpeg",
                bFormPicture: "/TEAM35/PLAYERS_DOCUMENTS/SHAHZAIB.jpeg",
                bFormNumber: "71703-0242165-3",
                dateOfBirth: "2015-06-17",
                age: calculateAge("2015-06-17")
            }
        ]
    },
    //    ==================== TEAM 36 ====================
    // KARIM TOWN B 
    {
        id: "team-36",
        teamName: "Balad-ul-karim B",
        teamLogo: "/TEAM36/TEAM36.png",
        teamCoach: "Saqlain",
        coachNumber: "",
        jkLocation: "Karim Town",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t36",
                name: "Naseer",
                fathersName: "Ibrahim",
                contactNumber: "",
                picture: "/TEAM36/PLAYERS_PICTURES/NASEER.jpeg",
                bFormPicture: "/TEAM36/PLAYERS_DOCUMENTS/NASEER.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-03-22",
                age: calculateAge("2015-03-22")
            },
            {
                id: "player-2-t36",
                name: "Shafi",
                fathersName: "Ibrahim",
                contactNumber: "",
                picture: "/TEAM36/PLAYERS_PICTURES/SHAFI.jpeg",
                bFormPicture: "/TEAM36/PLAYERS_DOCUMENTS/SHAFI.jpeg",
                bFormNumber: "",
                dateOfBirth: "2017-10-05",
                age: calculateAge("2017-10-05")
            },
            {
                id: "player-3-t36",
                name: "Zahir",
                fathersName: "Amin Ali",
                contactNumber: "",
                picture: "/TEAM36/PLAYERS_PICTURES/ZAHIR.jpeg",
                bFormPicture: "/TEAM36/PLAYERS_DOCUMENTS/ZAHIR.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-02-06",
                age: calculateAge("2015-02-06")
            },
            {
                id: "player-4-t36",
                name: "Mohib",
                fathersName: "Muzafar",
                contactNumber: "",
                picture: "/TEAM36/PLAYERS_PICTURES/MOHIB.jpeg",
                bFormPicture: "/TEAM36/PLAYERS_DOCUMENTS/MOHIB.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-01-02",
                age: calculateAge("2015-01-02")
            },
            {
                id: "player-5-t36",
                name: "Moeed",
                fathersName: "Muzafar",
                contactNumber: "",
                picture: "/TEAM36/PLAYERS_PICTURES/MOEED.jpeg",
                bFormPicture: "/TEAM36/PLAYERS_DOCUMENTS/MOEED.jpeg",
                bFormNumber: "",
                dateOfBirth: "2016-05-19",
                age: calculateAge("2016-05-19")
            },
            {
                id: "player-6-t36",
                name: "Aahil",
                fathersName: "Aman",
                contactNumber: "",
                picture: "/TEAM36/PLAYERS_PICTURES/AAHIL.jpeg",
                bFormPicture: "/TEAM36/PLAYERS_DOCUMENTS/AAHIL.jpeg",
                bFormNumber: "",
                dateOfBirth: "2014-12-10",
                age: calculateAge("2014-12-10")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t36",
                name: "Umair",
                fathersName: "Sher Khan",
                contactNumber: "",
                picture: "/TEAM36/PLAYERS_PICTURES/UMAIR.jpeg",
                bFormPicture: "/TEAM36/PLAYERS_DOCUMENTS/UMAIR.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-08-11",
                age: calculateAge("2015-08-11")
            },
            {
                id: "substitutePlayer-2-t36",
                name: "Imad",
                fathersName: "Izhar Ali",
                contactNumber: "",
                picture: "/TEAM36/PLAYERS_PICTURES/IMAD.jpeg",
                bFormPicture: "/TEAM36/PLAYERS_DOCUMENTS/IMAD.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-07-31",
                age: calculateAge("2015-07-31")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t36",
                name: "Abriz",
                fathersName: "Jahangir",
                contactNumber: "",
                picture: "/TEAM36/PLAYERS_PICTURES/ABRIZ.jpeg",
                bFormPicture: "/TEAM36/PLAYERS_DOCUMENTS/ABRIZ.jpeg",
                bFormNumber: "",
                dateOfBirth: "2016-02-08",
                age: calculateAge("2016-02-08")
            },
            {
                id: "Reserveplayer-2-t36",
                name: "Azmeer",
                fathersName: "Shah Ferman",
                contactNumber: "",
                picture: "/TEAM36/PLAYERS_PICTURES/AZMEER.jpeg",
                bFormPicture: "/TEAM36/PLAYERS_DOCUMENTS/AZMEER.jpeg",
                bFormNumber: "",
                dateOfBirth: "2016-03-29",
                age: calculateAge("2016-03-29")
            },
            {
                id: "Reserveplayer-3-t36",
                name: "Awais",
                fathersName: "Mahmood",
                contactNumber: "",
                picture: "/TEAM36/PLAYERS_PICTURES/AWAIS.jpeg",
                bFormPicture: "/TEAM36/PLAYERS_DOCUMENTS/AWAIS.jpeg",
                bFormNumber: "",
                dateOfBirth: "2014-10-22",
                age: calculateAge("2014-10-22")
            }
        ]
    },
    //    ==================== TEAM 37 ====================
    // KARIM TOWN A SCORPIO
    {
        id: "team-37",
        teamName: "SCORPION FC",
        teamLogo: "/TEAM37/TEAM37.png",
        teamCoach: "Sohail Ahmad",
        coachNumber: "0355 5715801 | 03554562231",
        jkLocation: "Balad-UL-Karim",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t37",
                name: "Alviyan",
                fathersName: "Naseer Uddin",
                contactNumber: "",
                picture: "/TEAM37/PLAYERS_PICTURES/ALVIYAN.jpeg",
                bFormPicture: "/TEAM37/PLAYERS_DOCUMENTS/ALVIYAN.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-05-30",
                age: calculateAge("2015-05-30")
            },
            {
                id: "player-2-t37",
                name: "Roohan Ullah",
                fathersName: "Ahsan Ullah Baig",
                contactNumber: "",
                picture: "/TEAM37/PLAYERS_PICTURES/ROOHAN-ULLAH.jpeg",
                bFormPicture: "/TEAM37/PLAYERS_DOCUMENTS/ROOHAN-ULLAH.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-03-19",
                age: calculateAge("2015-03-19")
            },
            {
                id: "player-3-t37",
                name: "Shams Tabraiz",
                fathersName: "Gul Bahar Shah",
                contactNumber: "",
                picture: "/TEAM37/PLAYERS_PICTURES/SHAMS-TABRAIZ.jpeg",
                bFormPicture: "/TEAM37/PLAYERS_DOCUMENTS/SHAMS-TABRAIZ.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-01-22",
                age: calculateAge("2015-01-22")
            },
            {
                id: "player-4-t37",
                name: "Ali Azan",
                fathersName: "Hadi Hussain",
                contactNumber: "",
                picture: "/TEAM37/PLAYERS_PICTURES/ALI-AZAN.jpeg",
                bFormPicture: "/TEAM37/PLAYERS_DOCUMENTS/ALI-AZAN.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-09-10",
                age: calculateAge("2015-09-10")
            },
            {
                id: "player-5-t37",
                name: "Taha Ali",
                fathersName: "Khush Ahma din",
                contactNumber: "",
                picture: "/TEAM37/PLAYERS_PICTURES/TAHA-ALI.jpeg",
                bFormPicture: "/TEAM37/PLAYERS_DOCUMENTS/TAHA-ALI.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-02-06",
                age: calculateAge("2015-02-06")
            },
            {
                id: "player-6-t37",
                name: "Tayyab Ali",
                fathersName: "Khush Ahma din",
                contactNumber: "",
                picture: "/TEAM37/PLAYERS_PICTURES/TAYYAB-ALI.jpeg",
                bFormPicture: "/TEAM37/PLAYERS_DOCUMENTS/TAYYAB-ALI.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-03-15",
                age: calculateAge("2015-03-15")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t37",
                name: "Umair Adil",
                fathersName: "Adil Khan",
                contactNumber: "",
                picture: "/TEAM37/PLAYERS_PICTURES/UMAIR-ADIL.jpeg",
                bFormPicture: "/TEAM37/PLAYERS_DOCUMENTS/UMAIR-ADIL.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-07-31",
                age: calculateAge("2015-07-31")
            },
            {
                id: "substitutePlayer-2-t37",
                name: "Araib Ali",
                fathersName: "Yousuf Ali",
                contactNumber: "",
                picture: "/TEAM37/PLAYERS_PICTURES/ARAIB-ALI.jpeg",
                bFormPicture: "/TEAM37/PLAYERS_DOCUMENTS/ARAIB-ALI.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-12-15",
                age: calculateAge("2015-12-15")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t37",
                name: "Ariz Tufail",
                fathersName: "Tufail Johar",
                contactNumber: "",
                picture: "/TEAM37/PLAYERS_PICTURES/ARIZ-TUFAIL.jpeg",
                bFormPicture: "/TEAM37/PLAYERS_DOCUMENTS/ARIZ-TUFAIL.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-07-05",
                age: calculateAge("2015-07-05")
            },
            {
                id: "Reserveplayer-2-t37",
                name: "Hamees",
                fathersName: "Dilbar Khan",
                contactNumber: "",
                picture: "/TEAM37/PLAYERS_PICTURES/HAMEES.jpeg",
                bFormPicture: "/TEAM37/PLAYERS_DOCUMENTS/HAMEES.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-08-01",
                age: calculateAge("2015-08-01")
            },
            {
                id: "Reserveplayer-3-t37",
                name: "Shayan",
                fathersName: "Imran",
                contactNumber: "",
                picture: "/TEAM37/PLAYERS_PICTURES/SHAYAN.jpeg",
                bFormPicture: "/TEAM37/PLAYERS_DOCUMENTS/SHAYAN.jpeg",
                bFormNumber: "",
                dateOfBirth: "2015-11-30",
                age: calculateAge("2015-11-30")
            }
        ]
    },
    //    ==================== TEAM 38 ====================
    // RAHIM ABAD
    // incomplete
    {
        id: "team-38",
        teamName: "BLACK HAWKS",
        teamLogo: "/TEAM38/TEAM38.jpeg",
        teamCoach: "Hasnain",
        coachNumber: "+92 311 9776474",
        jkLocation: "RAHIABAD JK 1",
        teamGSL: "JKGSL",
    },
    //    ==================== TEAM 39 ====================
    // Sultanabad JK 1
    // incomplete
    {
        id: "team-39",
        teamName: "Sultanabad FC JR",
        teamLogo: "/TEAM39/TEAM39.jpeg",
        teamCoach: "NANUU",
        coachNumber: "03554324608",
        jkLocation: "Sultanabad JK 1",
        teamGSL: "JKGSL",
    },
    //    ==================== TEAM 39 ====================
    // SHAHEEN ELEVEN
    {
        id: "team-40",
        teamName: "SHAHEEN ELEVEN",
        teamLogo: "/TEAM40/TEAM40.png",
        teamCoach: "Saifan Najeem",
        coachNumber: "3318815261",
        jkLocation: "Zulfiqarabad",
        teamGSL: "JKGSL",

        teamPlayers: [
            {
                id: "player-1-t40",
                name: "Affan Najeem",
                fathersName: "Najeem Ullah Baig",
                contactNumber: "",
                picture: "/TEAM40/PLAYERS_PICTURES/AFFAN NAJEEM.jpeg",
                bFormPicture: "/TEAM40/PLAYERS_DOCUMENTS/AFFAN NAJEEM.jpeg",
                bFormNumber: "71702-0349773-9",
                dateOfBirth: "2015-06-18",
                age: calculateAge("2015-06-18")
            },
            {
                id: "player-2-t40",
                name: "Shazain Alam",
                fathersName: "Mehbob Alam",
                contactNumber: "",
                picture: "/TEAM40/PLAYERS_PICTURES/SHAZAIN ALAM.jpeg",
                bFormPicture: "/TEAM40/PLAYERS_DOCUMENTS/SHAZAIN ALAM.jpeg",
                bFormNumber: "71501-3700910-9",
                dateOfBirth: "2015-02-19",
                age: calculateAge("2015-02-19")
            },
            {
                id: "player-3-t40",
                name: "Shah Zain Faisal",
                fathersName: "Shah Faisal",
                contactNumber: "",
                picture: "/TEAM40/PLAYERS_PICTURES/SHAH ZAIN FAISAL.jpeg",
                bFormPicture: "/TEAM40/PLAYERS_DOCUMENTS/SHAH ZAIN FAISAL.jpeg",
                bFormNumber: "71505-0410646-7",
                dateOfBirth: "2015-12-31",
                age: calculateAge("2015-12-31")
            },
            {
                id: "player-4-t40",
                name: "Nizar Karim",
                fathersName: "Ikram Dad",
                contactNumber: "",
                picture: "/TEAM40/PLAYERS_PICTURES/NIZAR KARIM.jpeg",
                bFormPicture: "/TEAM40/PLAYERS_DOCUMENTS/NIZAR KARIM.jpeg",
                bFormNumber: "71501-3681943-3",
                dateOfBirth: "2015-08-27",
                age: calculateAge("2015-08-27")
            },
            {
                id: "player-5-t40",
                name: "Mumzamil Hussain",
                fathersName: "Maqsood Jan",
                contactNumber: "",
                picture: "/TEAM40/PLAYERS_PICTURES/MUMZAMIL HUSSAIN.jpeg",
                bFormPicture: "/TEAM40/PLAYERS_DOCUMENTS/MUMZAMIL HUSSAIN.jpeg",
                bFormNumber: "71403-0368618-1",
                dateOfBirth: "2015-02-05",
                age: calculateAge("2015-02-05")
            },
            {
                id: "player-6-t40",
                name: "Azlan Ali",
                fathersName: "Muhammad Jan",
                contactNumber: "",
                picture: "/TEAM40/PLAYERS_PICTURES/AZLAN ALI.jpeg",
                bFormPicture: "/TEAM40/PLAYERS_DOCUMENTS/AZLAN ALI.jpeg",
                bFormNumber: "71402-9985321-1",
                dateOfBirth: "2015-01-17",
                age: calculateAge("2015-01-17")
            }
        ],

        substitutePlayers: [
            {
                id: "substitutePlayer-1-t40",
                name: "Shah Zain Aslam",
                fathersName: "Aslam Shah",
                contactNumber: "",
                picture: "/TEAM40/PLAYERS_PICTURES/SHAH ZAIN ASLAM.jpeg",
                bFormPicture: "/TEAM40/PLAYERS_DOCUMENTS/SHAH ZAIN ASLAM.jpeg",
                bFormNumber: "71501-5197386-5",
                dateOfBirth: "2015-07-23",
                age: calculateAge("2015-07-23")
            },
            {
                id: "substitutePlayer-2-t40",
                name: "Murtaza Hamid",
                fathersName: "Hamid Alam",
                contactNumber: "",
                picture: "/TEAM40/PLAYERS_PICTURES/MURTAZA HAMID.jpeg",
                bFormPicture: "/TEAM40/PLAYERS_DOCUMENTS/MURTAZA HAMID.jpeg",
                bFormNumber: "71402-7289225-5",
                dateOfBirth: "2015-02-07",
                age: calculateAge("2015-02-07")
            }
        ],

        reservePlayers: [
            {
                id: "Reserveplayer-1-t40",
                name: "Mushtaba Hamid",
                fathersName: "Hamid Ali",
                contactNumber: "",
                picture: "/TEAM40/PLAYERS_PICTURES/MUSHTABA HAMID.jpeg",
                bFormPicture: "/TEAM40/PLAYERS_DOCUMENTS/MUSHTABA HAMID.jpeg",
                bFormNumber: "71402-5322210-1",
                dateOfBirth: "2017-01-08",
                age: calculateAge("2017-01-08")
            }
        ]
    },

];

// 33 members

// 38 Total Teams

// SMS x2
// Jutial X2
// Kari town X2
// Khomer X3
// Center X2
// Oshkhandas X2

// TOTAL MEMBERS SHOULD BE 31
