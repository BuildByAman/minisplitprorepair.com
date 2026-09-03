// Mini Split Pro Repair — Why Choose Us Content Pool
export function getWhyChoosePool(city, state, brand) {
  const loc = city ? `${city.name}` : `${state.name}`;

  return [
    {
      p1: `Choosing ${brand} for mini split service in ${loc} connects you with certified technicians trained specifically on modern inverter technology. Unlike traditional central air systems, ductless heat pumps rely on sophisticated electronic boards, variable-speed compressors, and multi-zone communication wiring that require dedicated diagnostic tools and mini split repair experience.`,
      p2: `We know that HVAC problems are disruptive and uncomfortable. Our local service vehicles carry common replacement sensors, circuit boards, fan motors, and approved refrigerants for major brands like Mitsubishi, Daikin, Fujitsu, LG, and Gree, allowing our technicians to complete most repairs on the initial visit throughout ${loc}.`
    },
    {
      p1: `At ${brand}, we provide upfront pricing and clear communication for every mini split service call in ${loc}. Before any work starts, our technician explains the diagnosis, provides an itemized estimate, and answers your questions so you can make an informed decision without unexpected charges or pushy sales tactics.`,
      p2: `Every repair and installation is completed by trained professionals who respect your home. When working in your ${loc} property, our technicians use floor protection, maintain clean work areas, and thoroughly test your ductless system across all heating and cooling modes before wrapping up.`
    },
    {
      p1: `When your ductless system stops working during a winter cold snap or summer heatwave, ${brand} offers 24/7 emergency dispatch for mini split repair in ${loc}. Our local dispatchers quickly route an experienced technician to your address to troubleshoot lockouts, water leaks, frozen coils, or heating failures.`,
      p2: `We focus on identifying the root cause rather than temporary patches. If your unit is struggling with low cooling or heating capacity, we check flare connections, run electronic leak detection, and ensure proper refrigerant levels to restore lasting performance across ${loc}.`
    },
    {
      p1: `Ductless mini splits offer exceptional efficiency when properly calibrated and maintained. In ${loc}, ${brand} provides dependable residential and commercial mini split service, ranging from comprehensive annual coil sanitization and blower flushes to complex multi-zone system installations.`,
      p2: `Our goal is to help homeowners across ${state.name} maximize comfort and reduce energy consumption. Regular preventative checkups keep your indoor air clean, prevent premature wear on inverter components, and ensure your system delivers steady temperatures year-round.`
    },
    {
      p1: `Homeowners in ${loc} count on ${brand} for reliable mini split repair and personalized service. Following every repair or new installation, our technicians walk you through your remote settings, show you how to clean your washable filters, and provide helpful advice on optimizing your thermostat for lower energy bills.`,
      p2: `We understand the local climate conditions in ${state.name} and recommend ductless solutions engineered to handle both high summer humidity and freezing winter days. Our technicians ensure your equipment operates at peak efficiency in every season.`
    },
    {
      p1: `Protect your ductless system by working with certified technicians who follow manufacturer guidelines. Improper vacuuming, loose flare fittings, or incorrect electrical wiring can damage sensitive electronics and void equipment warranties. ${brand} provides certified, warranty-compliant mini split service across ${loc}.`,
      p2: `Whether you need a single-room repair in a garage or bonus room, or full multi-zone climate control for an entire property, our technicians deliver professional craftsmanship and dependable support on every call.`
    }
  ];
}
