// Mini Split Pro Repair — Testimonials Content Pool
export function getTestimonialsPool(city, state) {
  const loc = city ? `${city.name}` : `${state.name}`;

  return [
    {
      text: `Our multi-zone mini split stopped blowing cold air during a heatwave. The technician arrived on time in ${loc}, found a leaking flare fitting, repaired it, and recharged the line. Excellent, honest service!`,
      author: 'David M.'
    },
    {
      text: `We had water dripping down the drywall from our bedroom unit. The technician showed up quickly, cleaned out a clogged drain line, and made sure the unit was properly leveled. Very happy with the prompt help in ${loc}.`,
      author: 'Sarah K.'
    },
    {
      text: `Our heat pump had a blinking error code and wouldn't start. The tech diagnosed a faulty thermistor sensor, replaced it with an OEM part, and had our heat running within an hour. Highly recommend for mini split service in ${loc}.`,
      author: 'Robert L.'
    },
    {
      text: `Great communication from start to finish. The technician explained the repair options clearly without trying to upsell us. Our ductless system is running quietly and cooling effectively again in ${loc}.`,
      author: 'Amanda P.'
    },
    {
      text: `Scheduled a deep cleaning service for two indoor wall units that smelled musty. The team used proper bib bags, cleaned the blower wheels thoroughly, and left our home spotless. Fresh clean air again in ${loc}!`,
      author: 'James R.'
    },
    {
      text: `Professional installation of our new 3-zone system in ${loc}. The crew took great care routing the line sets neatly along the exterior siding. Clean work and very knowledgeable technicians.`,
      author: 'Michael B.'
    },
    {
      text: `Called for emergency repair on a Sunday when our heat stopped working. They answered right away and dispatched a technician who fixed the reversing valve issue. Fast and reliable service in ${loc}.`,
      author: 'Jennifer T.'
    },
    {
      text: `Our outdoor condenser was making a loud vibrating noise. The technician identified a loose fan bracket, tightened everything, and verified the motor bearings. Runs whisper-quiet now in ${loc}.`,
      author: 'Brian C.'
    },
    {
      text: `Fair pricing, prompt arrival, and skilled troubleshooting. They fixed an electrical communication issue between our indoor and outdoor units in ${loc}. Very pleased with the outcome.`,
      author: 'Karen W.'
    },
    {
      text: `We rely on a ductless unit for our small business in ${loc}. When it stopped cooling, their commercial tech arrived within a couple of hours and resolved the capacitor issue quickly. Minimal downtime!`,
      author: 'Thomas H.'
    },
    {
      text: `Transparent pricing and great technical knowledge. The technician took the time to show me how to clean the filters properly and check the condensate line in ${loc}. Wonderful customer care.`,
      author: 'Rachel D.'
    },
    {
      text: `I was worried I would need to replace my older mini split, but the technician repaired the wiring fault and recharged the system. Saved me thousands of dollars in ${loc}. Honest and reliable!`,
      author: 'Gary S.'
    }
  ];
}
