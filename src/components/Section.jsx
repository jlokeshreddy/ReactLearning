function Section({title, children, ...props}) {
  console.log('helloooo',props)
  return (
    <section {...props}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

export default Section;
