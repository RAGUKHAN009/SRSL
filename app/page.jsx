"use client";
import Image from "next/image";
import { useState } from "react";
import { teams } from "../data/teams";

// 1. We create a new component just for a single team.
// This gives EVERY team its own independent show/hide state!
function TeamCard({ team }) {
  const [showPlayerSix, setShowPlayerSix] = useState(false);

  const ShowPlaying = () => {
    setShowPlayerSix((prev) => !prev);
  };

  return (
    <section className="bg-white p-8 rounded-xl shadow-md border border-gray-200 mt-10 IskiWidthDefineKerniHai">
      {/* Team Header */}
      <button className="flex items-center gap-6 border-b text-left w-full cursor-pointer touch-manipulation" onClick={ShowPlaying}>
        <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl overflow-hidden shrink-0">
          <Image src={team.teamLogo} alt={team.teamName} width={80} height={80} className="object-cover w-full h-full" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{team.teamName}</h2>
          <div className="text-gray-600 mt-2 flex flex-col gap-1 text-sm font-medium mb-4">
            <span>Coach: {team.teamCoach}</span>
            <span>Jamatkhanna: {team.jkLocation}</span>
            <span>GSL: {team.teamGSL}</span>
          </div>
        </div>
      </button>
      <span className="text-gray-800 mb-5">{team.id}</span>

      {/* Hidden Players Container */}
      {showPlayerSix && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-800 pt-5 pb-5">PLAYING SIX</h3>
          {/* Players Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="playerSix">
            {team.teamPlayers.map((player) => (
              <div key={player.id} className="border border-gray-200 p-5 rounded-lg hover:shadow-lg transition-shadow bg-gray-50">
                <div className="w-20 h-20 bg-gray-300 rounded-full mb-4 mx-auto flex items-center justify-center overflow-hidden">
                  <Image
                    src={player.picture}
                    alt={player.name}
                    height={80}
                    width={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="font-bold text-lg text-center text-gray-900">{player.name}</h4>

                <div className="text-sm text-gray-700 mt-4 space-y-2">
                  <p className="flex justify-between">
                    <span className="font-semibold">S/O:</span> {player.fathersName}
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Age:</span> {player.age} yrs
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">DOB:</span> {player.dateOfBirth}
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Contact:</span> {player.contactNumber}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Substitute Players Grid */}
          <hr className="mt-10" />
          <h3 className="text-xl font-semibold text-gray-800 pt-5 pb-5">SUBSTITUTE TWO</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.substitutePlayers?.map((player) => (
              <div key={player.id} className="border border-gray-200 p-5 rounded-lg hover:shadow-lg transition-shadow bg-gray-50">
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-4 mx-auto overflow-hidden">
                  <Image
                    src={player.picture}
                    alt={player.name}
                    height={80}
                    width={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="font-bold text-lg text-center text-gray-900">{player.name}</h4>

                <div className="text-sm text-gray-700 mt-4 space-y-2">
                  <p className="flex justify-between">
                    <span className="font-semibold">S/O:</span> {player.fathersName}
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Age:</span> {player.age} yrs
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">DOB:</span> {player.dateOfBirth}
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Contact:</span> {player.contactNumber}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Reserve Players Grid */}
          <hr className="mt-10" />
          <h3 className="text-xl font-semibold text-gray-800 pt-5 pb-5">RESERVE THREE</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.reservePlayers?.map((player) => (
              <div key={player.id} className="border border-gray-200 p-5 rounded-lg hover:shadow-lg transition-shadow bg-gray-50">
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-4 mx-auto overflow-hidden"></div>
                <h4 className="font-bold text-lg text-center text-gray-900">{player.name}</h4>

                <div className="text-sm text-gray-700 mt-4 space-y-2">
                  <p className="flex justify-between">
                    <span className="font-semibold">S/O:</span> {player.fathersName}
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Age:</span> {player.age} yrs
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">DOB:</span> {player.dateOfBirth}
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Contact:</span> {player.contactNumber}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

// 2. Your main Home page now just loops through the data 
// and creates a brand new TeamCard for each team.
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black h-auto pb-20">
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
}