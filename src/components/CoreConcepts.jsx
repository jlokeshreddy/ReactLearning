import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept/CoreConcept";
import Section from "./Section";

function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      {/* <h2>Core Concepts</h2> */}
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </Section>
  );
}

export default CoreConcepts;
