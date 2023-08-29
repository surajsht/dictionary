"use client";

import { createRef, useEffect } from "react";
import { CustomContext } from "../Context/Context";
import { GiSpeaker } from "react-icons/gi";

const Result = () => {
  let { loading, searchResult } = CustomContext();
  let audioRef = createRef();

  useEffect(() => {
    if (searchResult[0]?.phonetics[0]?.audio) {
      audioRef.current.src = searchResult[0]?.phonetics[0]?.audio;
    }
  }, [searchResult]);

  let playAudio = () => {
    audioRef.current.play();
  };

  if (!loading) return;

  return (
    <div className="container">
      {searchResult.length > 0 ? (
        <div className="space-y-6">
          {searchResult.map((item, itemIdx) => {
            return (
              <div key={itemIdx}>
                <div className="flex items-center gap-4 mb-1">
                  <h2 className="text-4xl font-semibold"> {item?.word} </h2>

                  {item?.phonetic && <span> {item.phonetic} </span>}

                  {item?.phonetics[0]?.audio && (
                    <button onClick={() => playAudio()}>
                      <GiSpeaker className="h-6 w-6" />
                    </button>
                  )}

                  <audio ref={audioRef}>
                    <source
                      src={`${item?.phonetics[0]?.audio}`}
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>
                </div>

                <div className="mb-2">{item?.meanings[0]?.partOfSpeech}</div>

                {item?.meanings[0]?.synonyms.length > 0 && (
                  <div className="mb-2 font-medium">
                    {`Synonyms : ${item?.meanings[0]?.synonyms.toString()}`}
                  </div>
                )}

                <div>
                  <h2 className="font-semibold text-xl mb-2"> Definition </h2>
                  <ul className="space-y-1 pl-4">
                    {item?.meanings[0]?.definitions.map(
                      (meaning, meaningIdx) => {
                        return (
                          <li key={meaningIdx} className="list-disc">
                            {meaning?.definition}
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h2 className="text-4xl font-semibold text-center">No search found</h2>
      )}
    </div>
  );
};

export default Result;
