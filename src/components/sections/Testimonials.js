const Testimonials = ({ quotes }) => {
  // Check if quotes is an array before mapping over it
  if (!Array.isArray(quotes)) {
    // If quotes is not an array, return a placeholder or null
    return null; // Or return a placeholder message or component
  }

  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {quotes.map((quote, index) => (
          <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow" key={index}>
            <div>
              <p>
                <span className="quote">{quote.review}</span>
                <span className="person">{quote.name}</span>
                <span className="job">{quote.position}</span>
              </p>
              <img src={quote.image.url} alt={quote.name} />
            </div>
          </div>
        ))}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};

export default Testimonials;
