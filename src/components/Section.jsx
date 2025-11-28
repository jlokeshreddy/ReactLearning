function Section({ title, childern, ...props }) {
  return (
    <section {...props}>
      <h1>{title}</h1>
      {childern}
    </section>
  );
}

export default Section;
