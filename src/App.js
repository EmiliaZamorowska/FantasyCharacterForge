import "./App.css";
import "./shared.scss";
import React, { useState } from "react";
import RaceCardsState from "./components/RaceCardsState";
import ClassCardsState from "./components/ClassCardsState";
import AttributesPage from "./components/AttributesPage/AttributesPage.js";
import Description from "./components/DescriptionCards";
import Buttons from "./components/Buttons";

function App() {
  const [pickedRaceCard, setpickedRaceCard] = useState("Not selected");
  const [pickedClassCard, setpickedClassCard] = useState("Not selected");
  const [currentTab, setCurrentTab] = useState(0);
  const [isDisabled, setDisabled] = useState([false, true, true]);
  const [activeCard, setActiveCard] = useState(0);

  //Function locks the buttons if (currentTab && pickedRaceCard) - true
  //Function change array setDisabled
  const handleSubmit = () => {
    if (currentTab === 0 && pickedRaceCard === "Not selected") {
      setDisabled([false, false, true]);
    } else if (currentTab === 1 && pickedClassCard === "Not selected") {
      setDisabled([false, false, false]);
    } else {
      setDisabled([false, false, false]);
    }
  };
  return (
    <div className="app">
      <Buttons setCurrentTab={setCurrentTab} isDisabled={isDisabled}></Buttons>{" "}
      {/* Component / shows Buttons / set their state */}
      {/*if current tab 0 show RaceCardState with 3 properties */}
      {currentTab === 0 && (
        <RaceCardsState
          setpickedCard={setpickedRaceCard}
          handleSubmit={handleSubmit}
          setCurrentTab={setCurrentTab}
          activeCard={activeCard}
        />
      )}
      {/*if current tab 1 show ClassCardState with 3 properties */}
      {currentTab === 1 && (
        <ClassCardsState
          setpickedCard={setpickedClassCard}
          handleSubmit={handleSubmit}
          setCurrentTab={setCurrentTab}
          activeCard={activeCard}
        />
      )}
      {/*if current tab 2 show AttributesPage with div Test and Description */}
      {currentTab === 2 && (
        <AttributesPage
          pickedRaceCard={pickedRaceCard}
          pickedClassCard={pickedClassCard}
        />
      )}
      <div className="Buttons2">
        {currentTab !== 2 && (
          <Description
            pickedRaceCard={pickedRaceCard}
            pickedClassCard={pickedClassCard}
            currentTab={currentTab}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          ></Description>
        )}
      </div>
    </div>
  );
}

export default App;
