import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from '../components/TabButton/TabButton'

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
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
  );
}

export default Examples;
