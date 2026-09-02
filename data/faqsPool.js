// Mini Split Pro Repair — FAQ Content Pool
export function getFaqsPool(city, state, brand, phone) {
  const loc = city ? `${city.name}, ${state.abbr}` : state.name;
  const locFull = city ? `${city.name}, ${state.name}` : state.name;

  return [
    {
      q: `How much does mini split repair cost in ${loc}?`,
      a: `Mini split repair costs in ${loc} typically range between $150 and $650 for common issues such as sensor replacements, electrical troubleshooting, or condensate drain flushes. Refrigerant leak repairs and precision recharge generally range from $220 to $480, while complex inverter board or compressor repairs can range from $650 to $1,300. ${brand} provides transparent, upfront pricing with free estimates before any work begins. Call ${phone} for immediate assistance.`
    },
    {
      q: `How quickly can you dispatch a technician for mini split repair in ${loc}?`,
      a: `${brand} offers same-day mini split repair and 24/7 emergency dispatch throughout ${loc}. When you call ${phone}, our local dispatch coordinators quickly assign a certified ductless technician equipped with diagnostic gear and OEM replacement parts to resolve your heating or cooling breakdown on the very first visit.`
    },
    {
      q: `Why is my ductless mini split not cooling properly in ${loc}?`,
      a: `If your mini split is blowing lukewarm or warm air in ${loc}, the most frequent causes include low refrigerant charge caused by loose flare fittings, dirty indoor air filters, clogged condenser coils, a malfunctioning reversing valve, or a faulty inverter compressor board. Our technicians will run a full multi-point diagnostic check to pinpoint the issue and complete an exact mini split repair immediately.`
    },
    {
      q: `What brands of ductless mini splits do you service in ${locFull}?`,
      a: `We provide comprehensive mini split service for every leading manufacturer in ${locFull}, including Mitsubishi Electric (Mr. Slim & Zuba), Daikin, Fujitsu Halcyon, LG Art Cool, Gree, Samsung, Pioneer, MrCool, Carrier, Bosch, Senville, and Friedrich. Our certified technicians maintain direct access to OEM replacement parts and technical diagnostic documentation.`
    },
    {
      q: `How often should I schedule professional mini split service and cleaning in ${loc}?`,
      a: `We recommend professional mini split service and deep coil cleaning at least once every 12 months in ${loc}, or twice yearly for systems utilized continuously for both summer cooling and winter heating. Annual service removes deep-seated mold, bacteria, and dust buildup from the blower barrel, restoring up to 25% lost energy efficiency and extending compressor life.`
    },
    {
      q: `How do I know if my mini split system has a refrigerant leak in ${loc}?`,
      a: `Common indicators of a mini split refrigerant leak in ${loc} include ice or frost forming along the copper line sets or indoor coil, hissing sounds near flare nuts, sudden spikes in electrical consumption, and the indoor unit blowing ambient room temperature air. Because refrigerant operates in a closed loop, our mini split repair experts perform electronic leak tests, seal the leak point, and recharge to exact factory weight.`
    },
    {
      q: `Why is my indoor mini split unit leaking water down the wall in ${loc}?`,
      a: `Water dripping or splashing from the indoor air handler in ${loc} is typically caused by algae or mold clogging the condensate drain tube, an unlevel indoor wall bracket, or a frozen evaporator coil thawing rapidly. Our technicians quickly clear condensate obstructions with high-pressure nitrogen, inspect the drain pan, and test drainage flow to prevent drywall or floor damage.`
    },
    {
      q: `Can mini split heat pumps keep homes warm during freezing winters in ${state.name}?`,
      a: `Yes! Modern hyper-heating inverter mini split heat pumps deliver 100% heating capacity down to -13°F (-25°C). If your ductless system in ${state.name} is struggling during freezing temperatures, our mini split service team will inspect the outdoor defrost cycle, temperature thermistors, crankcase heater, and refrigerant pressures to ensure reliable heating.`
    },
    {
      q: `What does a blinking timer or error code light mean on my mini split in ${loc}?`,
      a: `A flashing LED or error code sequence on your indoor display indicates an internal system lockout triggered by communication errors between indoor and outdoor boards, thermistor faults, high discharge pressure, or fan motor failure. Contact ${brand} at ${phone} to have a certified technician in ${loc} decode the error and perform the required mini split repair.`
    },
    {
      q: `How long do ductless mini split systems typically last in ${locFull}?`,
      a: `High-efficiency ductless mini split systems generally last between 15 to 20 years in ${locFull} when maintained with regular preventative mini split service. Scheduling periodic coil cleanings, filter washes, and electrical checks prevents premature compressor burnout and preserves peak seasonal performance.`
    },
    {
      q: `What is included in a routine mini split maintenance service in ${loc}?`,
      a: `A comprehensive mini split service from ${brand} in ${loc} includes chemical sanitization of the indoor evaporator coil and blower wheel, condensate drain line flushing, outdoor condenser coil washing, electrical connection tightening, operating voltage and amp draw testing, remote control calibration, and refrigerant pressure verification.`
    },
    {
      q: `Do you provide commercial mini split repair and service in ${loc}?`,
      a: `Yes, ${brand} provides specialized commercial mini split repair for businesses across ${loc}, including corporate office suites, retail shops, restaurants, computer server rooms, and medical practices. We offer rapid emergency response and customized preventative maintenance agreements to eliminate expensive commercial downtime.`
    },
    {
      q: `How much does new mini split installation cost in ${loc}?`,
      a: `The total cost of installing a new ductless mini split system in ${loc} typically ranges from $1,800 to $4,500 for a single-zone unit, and $3,500 to $9,000+ for multi-zone systems covering multiple rooms or entire floors. Total pricing depends on system capacity (BTUs), SEER2 rating, line set length, and electrical panel requirements. Call ${phone} for a free in-home estimate.`
    },
    {
      q: `Are ductless mini splits more energy efficient than central HVAC systems in ${state.name}?`,
      a: `Yes, mini splits are up to 30% to 40% more energy efficient than traditional ducted systems in ${state.name}. Because mini splits deliver conditioned air directly into individual zones without loss through leaky ductwork, and utilize variable-speed inverter compressors, they drastically reduce monthly electric bills.`
    },
    {
      q: `Why does my mini split smell musty or sour when running in ${loc}?`,
      a: `A sour, musty, or "dirty sock" odor coming from your indoor unit in ${loc} is caused by microbial bacteria and mold thriving on the damp evaporator coil and blower fan wheel. Our specialized deep cleaning mini split service thoroughly treats the unit with EPA-approved antimicrobial foaming cleaners to eliminate odors and purify indoor air quality.`
    },
    {
      q: `Do you provide 24/7 emergency mini split service on weekends and holidays in ${loc}?`,
      a: `Yes, ${brand} provides genuine 24/7/365 emergency mini split repair across ${loc}. Our local emergency technicians are on standby nights, weekends, and holidays to restore your heating or cooling whenever unexpected breakdowns occur. Call our emergency hotline at ${phone} anytime.`
    },
    {
      q: `Why is my outdoor mini split compressor vibrating or making grinding noises in ${loc}?`,
      a: `Loud vibrations, buzzing, or metallic grinding from the outdoor condenser in ${loc} can signal loose mounting brackets, failing fan motor bearings, unbalanced blades, or internal compressor mechanical wear. Our mini split repair specialists will immediately diagnose the noise and replace worn components before severe damage occurs.`
    },
    {
      q: `Can I repair or recharge a mini split myself in ${loc}?`,
      a: `No, mini split repair and refrigerant charging require specialized EPA Section 608 certification, vacuum pumps, micron gauges, and electronic torque wrenches. Attempting DIY repairs risks electrical shock, refrigerant loss, system contamination, and automatically voids manufacturer warranties. Always trust certified professionals at ${brand}.`
    },
    {
      q: `Do you install multi-zone ductless mini split systems in ${locFull}?`,
      a: `Yes! ${brand} specializes in engineering and installing multi-zone mini split systems in ${locFull}. A single high-efficiency outdoor condenser can power up to 5 or 8 individual indoor units, granting every room independent temperature control and personalized comfort settings.`
    },
    {
      q: `Will installing a ductless mini split increase the value of my home in ${state.name}?`,
      a: `Yes! Adding a modern, high-SEER2 ductless mini split system adds substantial appraisal value and market appeal to properties across ${state.name}. Ductless systems are highly sought after by buyers for supplemental room cooling, finished basements, sunrooms, master bedroom suites, and home additions.`
    },
    {
      q: `How long does a standard mini split installation take in ${loc}?`,
      a: `A standard single-zone ductless mini split installation in ${loc} typically takes between 4 to 6 hours from arrival to final commissioning. Multi-zone installations across several rooms usually take 1 to 2 days, including electrical circuit runs and complete system evacuation testing.`
    },
    {
      q: `What is the warranty coverage on mini split repairs and new installations in ${loc}?`,
      a: `New mini split installations completed by ${brand} in ${loc} include 5- to 12-year manufacturer warranties on compressors and parts, paired with our own workmanship labor guarantee. All individual replacement parts installed during mini split repair calls come with a full 1-year warranty for complete peace of mind.`
    },
    {
      q: `Why is my mini split turning on and off rapidly (short-cycling) in ${loc}?`,
      a: `Short-cycling in ${loc} is often caused by an oversized unit, a faulty ambient thermistor sensor, restricted airflow over dirty filters, or low refrigerant causing high head pressure shutoffs. Our technicians will diagnose and fix the cycling issue to protect your compressor from premature burnout.`
    },
    {
      q: `Do you offer financing options for mini split replacements in ${loc}?`,
      a: `Yes, ${brand} partners with leading home improvement lenders in ${loc} to provide affordable monthly payment plans, low APR rates, and promotional 0% interest financing for qualifying mini split replacements and new system installations.`
    },
    {
      q: `How can I schedule a mini split repair appointment in ${loc}?`,
      a: `Scheduling mini split repair or routine mini split service in ${loc} is simple. Just call our 24/7 service desk at ${phone} or submit an online request. Our local dispatch team will immediately coordinate a convenient appointment window with a certified technician.`
    }
  ];
}
