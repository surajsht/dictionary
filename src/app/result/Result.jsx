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
          <div>
            <div>
              <h2> {searchResult[0]?.word} </h2>

              <span> {searchResult[0]?.phonetic} </span>

              {searchResult[0]?.phonetics[0]?.audio && (
                <button onClick={() => playAudio()}>
                  <GiSpeaker />
                </button>
              )}

              <audio ref={audioRef}>
                <source
                  src={`${searchResult[0]?.phonetics[0]?.audio}`}
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
            </div>

            <div>{searchResult[0]?.meanings[0]?.partOfSpeech}</div>

            <div>
              {`Synonyms : ${searchResult[0]?.meanings[0]?.synonyms.toString()}`}
            </div>

            <div>
              <ul>
                {searchResult[0]?.meanings[0]?.definitions.map(
                  (meaning, meaningIdx) => {
                    return <li key={meaningIdx}> {meaning?.definition} </li>;
                  }
                )}
              </ul>
            </div>
          </div>

          <div>
            <div>{searchResult[0]?.meanings[1]?.partOfSpeech}</div>

            <div>
              {`Synonyms : ${searchResult[0]?.meanings[1]?.synonyms.toString()}`}
            </div>

            <div>
              <ul>
                {searchResult[0]?.meanings[1]?.definitions.map(
                  (meaning, meaningIdx) => {
                    return <li key={meaningIdx}> {meaning?.definition} </li>;
                  }
                )}
              </ul>
            </div>
          </div>

          <div>
            <div>{searchResult[0]?.meanings[2]?.partOfSpeech}</div>

            <div>
              {`Synonyms : ${searchResult[0]?.meanings[2]?.synonyms.toString()}`}
            </div>

            <div>
              <ul>
                {searchResult[0]?.meanings[2]?.definitions.map(
                  (meaning, meaningIdx) => {
                    return <li key={meaningIdx}> {meaning?.definition} </li>;
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <h2> No search found </h2>
      )}
    </div>
  );
};

export default Result;
