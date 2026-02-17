'use client';

const reviews = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Hanuman Junction',
    rating: 5,
    text: 'Best car mechanic in Hanuman Junction! Got my car denting and painting done here. Anil Kumar sir is very skilled and honest. Fair price, quality work.',
    date: '2 months ago',
  },
  {
    id: 2,
    name: 'Suresh Babu',
    location: 'Eluru',
    rating: 5,
    text: '10+ years experience shows. Engine repair was done perfectly. Car running smooth now. Highly recommend K A P MOTORS.',
    date: '1 month ago',
  },
  {
    id: 3,
    name: 'Venkat Rao',
    location: 'Hanuman Junction',
    rating: 5,
    text: 'Car AC repair - gas refill and cooling fix. Done in same day. Good service and reasonable rate. Will come again.',
    date: '3 weeks ago',
  },
  {
    id: 4,
    name: 'Murali Krishna',
    location: 'Nuzvid',
    rating: 5,
    text: 'Electrical work - headlight and power window repair. Expert work. My car is like new. Thank you Anil sir.',
    date: '2 weeks ago',
  },
  {
    id: 5,
    name: 'Lakshmi Devi',
    location: 'Hanuman Junction',
    rating: 5,
    text: 'Brake service and general check up. Quick service, no unnecessary charges. Trustworthy garage. Very satisfied.',
    date: '1 week ago',
  },
  {
    id: 6,
    name: 'Ravi Teja',
    location: 'Eluru Road',
    rating: 5,
    text: 'Full body painting for my car. Color matching perfect. Quality work at good price. K A P MOTORS is the best.',
    date: '5 days ago',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-kap-red' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-kap-black text-center mb-4">
          Customer Reviews
        </h2>
        <div className="w-24 h-1 bg-kap-red mx-auto mb-4" />
        <p className="text-kap-light-grey text-center mb-16 max-w-2xl mx-auto">
          Trusted by hundreds of customers in Hanuman Junction and nearby areas
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-kap-blue/10 transition-shadow border border-gray-100"
            >
              <StarRating rating={review.rating} />
              <p className="text-kap-black mt-4 mb-4">{review.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-kap-black">{review.name}</p>
                  <p className="text-sm text-kap-light-grey">{review.location}</p>
                </div>
                <p className="text-xs text-kap-light-grey">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
