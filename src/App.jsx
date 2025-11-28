import { useState } from "react";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleClick(selectedButton) {
    console.log("helooooooo i am from appjsx", selectedButton);
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        {/* <h2>Time to get started!</h2> */}
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              lable="Components"
              isSelected={selectedTopic === "components"}
              onSelect={() => handleClick("components")}
            />
            <TabButton
              lable="Jsx"
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleClick("jsx")}
            />
            <TabButton
              lable="Props"
              isSelected={selectedTopic === "props"}
              onSelect={() => handleClick("props")}
            />
            <TabButton
              lable="State"
              isSelected={selectedTopic === "state"}
              onSelect={() => handleClick("state")}
            />
          </menu>
          {!selectedTopic && <p>Please select any topic</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
