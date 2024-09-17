import testimonialData from "../assets/testimonialData.json"; // Import the JSON data
import StarRating from '../assets/StarRating.png'
const TestimonialCardComponent = ({ testimonial }) => {
    return (
      <div
        className="reviews-wrapper">
        <img
          src={testimonial.image.src}
          alt={`${testimonial.name}'s testimonial`}
          className="client" />
        <div className="client-detail">
          <h5>{testimonial.name}</h5>
          <span class="stars">4.5<img src={StarRating} alt="customer rating" className="star" /></span>
          <p>{`" ${testimonial.text} "`}</p>
        </div>
      </div>
    );
  };
  
export const CustomerSay = () => {
    return (
      <section className="testimonials">
        <div className="testimonials-container">
            <div className="testimonials-headline">
                <h2>Testimonials</h2>
                <h4>Read what others have to say about us</h4>
            </div>
            <div
            className="reviews">
            {testimonialData.Testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="review">
              <TestimonialCardComponent testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
      </section>
    );
  };

export default CustomerSay;