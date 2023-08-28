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
    console.log(searchResult);
  }, [searchResult]);

  let playAudio = () => {
    audioRef.current.play();
  };

  if (!loading) return;

  return (
    <div className="container">
      {searchResult.length > 0 ? (
        <div>
          {searchResult.map((item, itemIdx) => {
            return (
              <div>
                <div>
                  <h2> {item?.word} </h2>

                  <span> {item?.phonetic} </span>

                  {item?.phonetics[0]?.audio && (
                    <button onClick={() => playAudio()}>
                      <GiSpeaker />
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

                <div>{item?.meanings[0]?.partOfSpeech}</div>

                {item?.meanings[0]?.synonyms.length > 0 && (
                  <div>
                    {`Synonyms : ${item?.meanings[0]?.synonyms.toString()}`}
                  </div>
                )}

                <div>
                  <ul>
                    {item?.meanings[0]?.definitions.map(
                      (meaning, meaningIdx) => {
                        return (
                          <li key={meaningIdx}> {meaning?.definition} </li>
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
        <h2> No search found </h2>
      )}
    </div>
  );
};

export default Result;
