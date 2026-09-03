// Mini Split Pro Repair — FAQ Content Pool
export function getFaqsPool(city, state, brand, phone) {
  const loc = city ? `${city.name}, ${state.abbr}` : state.name;
  const locFull = city ? `${city.name}, ${state.name}` : state.name;

  return [
    {
      q: `How much does mini split repair typically cost in ${loc}?`,
      a: `Mini split repair costs in ${loc} generally range from $150 to $500 for standard issues like sensor replacements, condensate drain clearing, or electrical troubleshooting. Moderate repairs, including flare leak fixes and refrigerant recharges, typically cost between $250 and $600. Major component replacements like inverter boards or compressor repairs can range higher. ${brand} provides transparent upfront estimates before work begins. Call ${phone} to discuss your system.`
    },
    {
      q: `How quickly can a technician respond for mini split repair in ${loc}?`,
      a: `${brand} offers prompt scheduling and same-day dispatch for urgent heating and cooling failures throughout ${loc}. When you call ${phone}, our dispatch team coordinates with local technicians equipped with diagnostic tools to inspect and repair your ductless system as quickly as possible.`
    },
    {
      q: `Why is my ductless mini split blowing warm air instead of cooling in ${loc}?`,
      a: `When a mini split fails to cool properly in ${loc}, common causes include clogged air filters, dirty outdoor condenser coils, low refrigerant levels from a line set leak, a malfunctioning temperature sensor (thermistor), or an inverter communication glitch. A technician can test pressures and electrical components to find the root cause.`
    },
    {
      q: `What brands of ductless mini splits do your technicians service in ${locFull}?`,
      a: `Our technicians service all major ductless mini split brands across ${locFull}, including Mitsubishi Electric, Daikin, Fujitsu, LG, Gree, Samsung, Pioneer, MrCool, Carrier, Bosch, and Friedrich. We work directly with manufacturer specifications and diagnostic codes.`
    },
    {
      q: `How often should I have my mini split cleaned and serviced in ${loc}?`,
      a: `We recommend professional mini split service and coil cleaning at least once a year in ${loc}, or twice annually if your system is your primary heat and cooling source. Routine maintenance removes dust and mold from the blower wheel, keeps drain lines clear, and maintains proper efficiency.`
    },
    {
      q: `What are the signs of a refrigerant leak in a mini split system in ${loc}?`,
      a: `Signs of low refrigerant in ${loc} include ice or frost on the indoor coil or copper line set, hissing sounds near flare connections, higher electric bills, and weak or lukewarm airflow. Because refrigerant does not deplete naturally, any loss indicates a leak that must be repaired before recharging.`
    },
    {
      q: `Why is my indoor mini split unit leaking water inside my home in ${loc}?`,
      a: `Indoor water leaks in ${loc} are most often caused by a blocked condensate drain line, algae in the drain pan, or a frozen coil that has thawed quickly. Clearing the blockage and checking the unit level usually resolves the leak.`
    },
    {
      q: `Can a ductless mini split effectively heat a home during cold winters in ${state.name}?`,
      a: `Yes, modern cold-climate heat pumps are designed to provide efficient heat even when outdoor temperatures drop below freezing in ${state.name}. If your unit is struggling to maintain temperature, a technician can inspect the defrost cycle, thermistors, and refrigerant levels.`
    },
    {
      q: `What should I do if my mini split indoor unit is flashing an error code in ${loc}?`,
      a: `A flashing light or error code indicates that the system has entered a protective lockout mode due to a sensor fault, communication error, or pressure irregularity. Note the flashing pattern or code and contact ${brand} at ${phone} for troubleshooting and repair in ${loc}.`
    },
    {
      q: `How long do ductless mini split systems usually last in ${locFull}?`,
      a: `With regular maintenance and filter care, ductless mini split systems typically last 15 to 20 years in ${locFull}. Keeping coils clean and addressing small repairs early prevents premature compressor wear.`
    },
    {
      q: `What is included in a standard mini split maintenance visit in ${loc}?`,
      a: `A standard mini split service visit in ${loc} includes inspecting and cleaning the evaporator coil and blower wheel, flushing the condensate drain line, checking electrical wiring and operating voltages, testing temperature differentials, and verifying refrigerant pressures.`
    },
    {
      q: `Do you provide commercial mini split repair in ${loc}?`,
      a: `Yes, we provide commercial mini split service and repair for businesses, offices, retail spaces, and server rooms throughout ${loc}. We understand the importance of avoiding downtime and offer scheduled and emergency service.`
    },
    {
      q: `What is the typical cost for a new mini split installation in ${loc}?`,
      a: `Single-zone mini split installations in ${loc} typically range from $1,800 to $4,200 depending on the brand, capacity (BTUs), efficiency rating, and electrical requirements. Multi-zone installations for multiple rooms or whole homes range higher. Call ${phone} for a detailed estimate.`
    },
    {
      q: `Are ductless mini splits more energy efficient than traditional central AC in ${state.name}?`,
      a: `Yes, ductless systems avoid the energy losses associated with ductwork (which can account for up to 30% of energy consumption) and use inverter-driven compressors that adjust speed based on cooling demands, leading to lower monthly energy costs in ${state.name}.`
    },
    {
      q: `Why does my mini split smell musty when turned on in ${loc}?`,
      a: `A musty smell usually results from microbial growth or dust accumulation on the damp indoor evaporator coil and blower barrel. A professional deep cleaning with antimicrobial solution removes the buildup and eliminates the odor in ${loc}.`
    },
    {
      q: `Can I repair or recharge a mini split myself in ${loc}?`,
      a: `Ductless repairs and refrigerant handling require EPA Section 608 certification, specialized vacuum pumps, and torque wrenches for flare fittings. DIY repairs risk refrigerant loss, electrical hazards, or voiding equipment warranties. Contact ${brand} for certified service.`
    },
    {
      q: `How do multi-zone ductless mini split systems work in ${locFull}?`,
      a: `A multi-zone system connects multiple indoor air handlers to a single outdoor condenser. Each indoor unit is controlled independently, allowing different rooms in your ${locFull} property to have custom temperature settings.`
    },
    {
      q: `How long does a typical mini split repair appointment take in ${loc}?`,
      a: `Most common mini split repairs in ${loc} take between 1 to 2 hours once the technician has diagnosed the issue. More complex repairs involving board replacements or extensive leak repairs may take slightly longer.`
    },
    {
      q: `Why is my mini split cycling on and off rapidly in ${loc}?`,
      a: `Short cycling in ${loc} can be caused by an incorrectly placed or faulty thermostat sensor, restricted airflow from dirty filters, or an oversized unit for the space. A technician can inspect sensor readings and airflow to correct the issue.`
    },
    {
      q: `When should I consider replacing my mini split rather than repairing it in ${loc}?`,
      a: `If your unit is over 12–15 years old, uses phased-out refrigerant, or requires an expensive compressor replacement that exceeds half the cost of a new system, replacement with a modern high-SEER2 system is often the more cost-effective choice in ${loc}.`
    }
  ];
}
