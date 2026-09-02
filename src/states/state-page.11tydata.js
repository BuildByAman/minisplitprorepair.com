import { getFaqsPool } from '../../data/faqsPool.js';
import { getTestimonialsPool } from '../../data/testimonialsPool.js';
import { getWhyChoosePool } from '../../data/whyChoosePool.js';

function getSeededRandom(seedString) {
  let seed = 0;
  for (let i = 0; i < seedString.length; i++) {
    seed = (seed * 31 + seedString.charCodeAt(i)) % 2147483647;
  }
  if (seed <= 0) seed += 2147483646;
  return function() {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

function shuffleArray(array, randomFunc) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(randomFunc() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default {
  eleventyComputed: {
    faqs: (data) => {
      const state = data.state;
      const rand = getSeededRandom(state.slug);
      const allFaqs = getFaqsPool(null, state, data.site.BRAND, data.site.PHONE);
      return shuffleArray(allFaqs, rand).slice(0, 5);
    },
    testimonials: (data) => {
      const state = data.state;
      const rand = getSeededRandom(state.slug);
      const allTestimonials = getTestimonialsPool(null, state, data.site.BRAND);
      return shuffleArray(allTestimonials, rand).slice(0, 3);
    },
    whyChooseContent: (data) => {
      const state = data.state;
      const rand = getSeededRandom(state.slug);
      const allWhyChoose = getWhyChoosePool(null, state, data.site.BRAND);
      return allWhyChoose[Math.floor(rand() * allWhyChoose.length)];
    },
    localClimateText: (data) => {
      const state = data.state;
      let text = `${state.name} homeowners and businesses rely on mini split systems for year-round comfort. Our certified HVAC technicians are experienced with the local climate demands and ready to service any brand or model.`;
      const hotStates = ['FL','TX','AZ','NV','NM','LA','GA','AL','MS','SC','HI'];
      const coldStates = ['WI','MN','MI','NY','IL','ND','SD','OH','PA','ME','VT','NH','IA','MA','MT','WY','CO','ID','AK'];
      if (hotStates.includes(state.abbr)) {
        text = `In ${state.name}'s hot and humid climate, mini split systems work overtime. Regular maintenance is critical to prevent refrigerant leaks, dirty coil buildup, and compressor strain. Our technicians are experienced with the unique HVAC challenges in ${state.name}.`;
      } else if (coldStates.includes(state.abbr)) {
        text = `${state.name}'s cold winters demand reliable heat pump performance. Modern mini splits operate efficiently down to -13°F, but defrost cycles, refrigerant charge, and heat pump diagnostics require specialized expertise. Our technicians ensure your system performs in ${state.name}'s harsh winters.`;
      }
      return text;
    }
  }
};
