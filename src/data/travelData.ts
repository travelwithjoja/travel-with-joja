import { Destination, TourPackage, Hotel, GalleryItem, Review } from '../types';

export const WHATSAPP_PHONE = '94710914522'; // Concierge international format
export const WHATSAPP_DISPLAY = '+94 71 091 4522';
export const CONTACT_EMAIL = 'concierge@travelwithjoja.com';

export const DESTINATIONS: Destination[] = [
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    sinhalaName: 'සීගිරිය',
    region: 'Central Province / Cultural Triangle',
    tag: 'Ancient Wonder',
    tagline: 'The dramatic 5th-century Palace in the Sky',
    description: 'A towering 200-meter monolith rising from emerald jungle canopy, crowned with the ruins of King Kashyapa’s legendary fortress palace and ancient frescoes.',
    fullStory: 'Sigiriya is a UNESCO World Heritage Masterpiece. Rising sheer out of the dense central plains, this sheer granite monolith holds the archaeological marvel of the 5th century. Ascend through colossal lion paws, marvel at the mirror wall inscribed with ancient poetic graffiti, and wander royal water gardens engineered with gravity-fed hydraulic fountains that still function during rains.',
    heroImage: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Private sunrise climb before public gates open',
      'Exclusive Champagne breakfast overlooking Pidurangala Rock',
      'Royal water garden hydraulic archaeology tour with private historian',
      'Luxury helicopter transfer from Colombo directly to Sigiriya airstrip'
    ],
    bestSeason: 'December to April (Clear skies & balmy evenings)',
    elevationOrClimate: 'Warm tropical sunshine • 28°C - 32°C',
    recommendedDuration: '2 - 3 Days',
    topExperiences: [
      'Hot air balloon flight over ancient lakes at sunrise',
      'Private safari in Minneriya for the elephant gathering',
      'Ayurvedic wellness rituals in a private forest villa'
    ],
    signatureStay: 'Water Garden Sigiriya / Heritance Kandalama',
    curatorNote: 'We arrange exclusive after-hours access and private dawn ascents to enjoy the palace summits in serene silence before crowds arrive.'
  },
  {
    id: 'ella',
    name: 'Ella',
    sinhalaName: 'ඇල්ල',
    region: 'Badulla District / Central Highlands',
    tag: 'Misty Highlands',
    tagline: 'Cascading waterfalls, mist-draped peaks & colonial railways',
    description: 'Nestled deep within Sri Lanka’s lush highlands, Ella is a verdant paradise of undulating emerald tea slopes, legendary railway viaducts, and panoramic cloud-kissed gaps.',
    fullStory: 'Ella is the spiritual heart of Ceylon hill country. Surrounded by peaks cloaked in wild tea bushes and eucalyptus groves, this highland retreat offers some of the planet’s most scenic mountain train journeys. Walk the iconic Nine Arch Bridge surrounded by tea pickers, hike to Little Adam’s Peak for sunrise panoramic views spanning all the way to the southern ocean on clear mornings, and swim in crystalline rock pools beneath Ravana Falls.',
    heroImage: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'VIP Observation Saloon on the vintage Ceylon Highland Train',
      'Private tea tasting & high tea on the Nine Arch Bridge overlook',
      'Helicopter flight through the Ella Gap mountain passage',
      'Private guided trek to hidden cascading natural plunge pools'
    ],
    bestSeason: 'January to May & August to September',
    elevationOrClimate: 'Cool highland breeze • 1,041m elevation • 18°C - 24°C',
    recommendedDuration: '2 - 3 Days',
    topExperiences: [
      'Sunrise champagne toast at Little Adam’s Peak',
      'Artisan Ceylon single-origin tea plucking masterclass',
      'Private twilight dining suspended over the cloud forest'
    ],
    signatureStay: '98 Acres Resort & Luxury Spa',
    curatorNote: 'We reserve private 1st-class vintage train salons with personal luggage transfers so you travel effortlessly with zero hassle.'
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya',
    sinhalaName: 'නුවරඑළිය',
    region: 'Central Highlands / Little England',
    tag: 'Little England & Pure Ceylon Tea',
    tagline: 'Colonial opulence, pristine tea gardens & roaring fireplaces',
    description: 'At 1,868m above sea level, "Little England" combines Victorian architecture, manicured botanical gardens, and world-renowned single-estate Ceylon tea plantations.',
    fullStory: 'Perched in the highest mountain valleys of Sri Lanka, Nuwara Eliya is cooled by crisp mountain breezes and frequent golden mists. Founded by British explorers in the 19th century, it retains an atmosphere of aristocratic charm: Tudor-style country houses, a world-class 18-hole golf course founded in 1889, crystal-clear Gregory Lake, and hillside tea fields where the world’s finest Silver Tips and Orange Pekoe teas are hand-harvested daily.',
    heroImage: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Stay in private restored 19th-century colonial tea planter bungalows',
      'Private butler service and traditional fireside four-course dinners',
      'VIP walking tour of Hakgala Alpine Gardens and private golf tee times',
      'Vintage tea-master masterclass tasting rare single-estate flushes'
    ],
    bestSeason: 'February to May (Sunny, dry mountain weather)',
    elevationOrClimate: 'Crisp alpine climate • 1,868m elevation • 10°C - 20°C',
    recommendedDuration: '2 - 3 Days',
    topExperiences: [
      'Scenic hike across Horton Plains to World’s End cliff edge',
      'Private boat cruise on Lake Gregory with gourmet canapés',
      'Luxury spa therapies infused with green tea antioxidants'
    ],
    signatureStay: 'Ceylon Tea Trails by Resplendent Ceylon / The Grand Hotel',
    curatorNote: 'Nothing rivals sipping single-harvest Ceylon tea on a private veranda while looking out over Lake Castlereagh as the mist rolls across the water.'
  },
  {
    id: 'mirissa',
    name: 'Mirissa',
    sinhalaName: 'මිරිස්ස',
    region: 'Southern Province / Indian Ocean',
    tag: 'Tropical Haven',
    tagline: 'Azure waters, swaying palms & gentle ocean giants',
    description: 'A crescent of golden sand fringed by iconic coconut palms, gentle surf breaks, and the prime deep-ocean sanctuary for Blue Whales and playful spinner dolphins.',
    fullStory: 'Mirissa embodies the tropical bliss of the south coast. Famous for Coconut Tree Hill—a picturesque promontory jutting into the Indian Ocean—and pristine secluded coves, Mirissa is globally celebrated as one of the best locations on Earth to witness the magnificent Blue Whale, the largest creature to ever live. In the evenings, the shoreline lights up with candlelit beachfront tables serving fresh rock lobster and grilled jumbo prawns caught that afternoon.',
    heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Private chartered luxury catamaran whale expedition with marine naturalist',
      'Exclusive sunset access to Coconut Tree Hill with private photographer',
      'Secluded cove beach club daybed reservation with champagne service',
      'Snorkeling with resident sea turtles in crystalline coastal lagoons'
    ],
    bestSeason: 'November to April (Calm seas & peak whale migration)',
    elevationOrClimate: 'Tropical coastal breeze • 27°C - 31°C',
    recommendedDuration: '2 - 4 Days',
    topExperiences: [
      'Private dawn yacht voyage alongside Blue Whales and Sperm Whales',
      'Surf coaching with championship instructors at secret breaks',
      'Private beach BBQ cooked by personal master chef under the stars'
    ],
    signatureStay: 'Cape Weligama Luxury Cliffside Resort',
    curatorNote: 'Instead of crowded public whale watching boats, we charter private 40ft motor yachts with on-board breakfast and marine biologist commentary.'
  },
  {
    id: 'galle',
    name: 'Galle Fort',
    sinhalaName: 'ගාල්ල',
    region: 'Southern Coast',
    tag: 'Colonial Heritage & Coastal Glamour',
    tagline: '17th-century cobblestone alleys, Dutch ramparts & haute cuisine',
    description: 'A living UNESCO World Heritage citadel where European colonial architecture merges with tropical palms, boutique jewelers, art galleries, and oceanfront ramparts.',
    fullStory: 'Built first by the Portuguese in 1588 and extensively fortified by the Dutch in the 17th century, Galle Fort is an enchanting coastal enclave surrounded on three sides by the turquoise Indian Ocean. Stroll along massive stone ramparts as the sun sets behind the white lighthouse, explore cobbled lanes lined with Dutch merchant villas converted into ultra-luxury boutique hotels, and discover Sri Lanka’s world-renowned Ceylon sapphires and artisan jewelry ateliers.',
    heroImage: 'https://images.unsplash.com/photo-1566296517004-220eff942644?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Sunset champagne stroll on Dutch Ramparts with 5th-generation resident historian',
      'Private gemstone vault viewing & Ceylon sapphire custom design session',
      'Exclusive dining inside 300-year-old Dutch colonial courtyard estates',
      'Private sunset cruise past the iconic Galle Lighthouse and coastal cliffs'
    ],
    bestSeason: 'October to April (Warm ocean & vibrant cultural season)',
    elevationOrClimate: 'Coastal tropical • 26°C - 30°C',
    recommendedDuration: '2 - 3 Days',
    topExperiences: [
      'Private cocktail tasting on the Ramparts as the sun dips into the ocean',
      'Cooking masterclass with local celebrity chef inside Galle Fort manor',
      'Cinnamon island boat excursion on peaceful Madu River'
    ],
    signatureStay: 'Amangalla (Aman Resorts) / Fort Bazaar',
    curatorNote: 'Galle Fort is pure poetic romance. We arrange private historian walks and reserved sunset balcony tables at the most exclusive fort bistros.'
  },
  {
    id: 'yala',
    name: 'Yala National Park',
    sinhalaName: 'යාල',
    region: 'Southern & Uva Province',
    tag: 'Wildlife Kingdom',
    tagline: 'Home to the highest density of leopards on Earth',
    description: 'A wild tapestry of coastal lagoons, scrub jungle, and rocky outcrops where Sri Lankan leopards, sloth bears, Asian elephants, and crocodiles roam free.',
    fullStory: 'Yala National Park is Sri Lanka’s premier wildlife sanctuary. Boasting Block 1 with the highest density of leopards in the world, Yala offers an authentic safari experience where the jungle meets the pounding waves of the Indian Ocean. Track the elusive Sri Lankan Leopard (*Panthera pardus kotiya*), watch herds of wild elephants bathing in lily-covered water holes, and spot rare Sri Lankan sloth bears foraging for wild berries beneath ancient satinwood trees.',
    heroImage: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1581852017103-68ac655039a5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Customized open-top luxury 4x4 safari vehicles with shock suspension',
      'Lead safari naturalist with over 15 years leopard tracking expertise',
      'Bush breakfast in wild coastal dunes inside the national park',
      'Stay in cocoon-style luxury tented domes with private plunge pools'
    ],
    bestSeason: 'February to July (Dry season when wildlife gathers at waterholes)',
    elevationOrClimate: 'Dry zone wilderness • 29°C - 34°C',
    recommendedDuration: '2 - 3 Days',
    topExperiences: [
      'Dawn and dusk private game drives for prime leopard and sloth bear sightings',
      'Night-vision walking safari around private reserve borders',
      'Sundowners by a secluded jungle waterhole listening to wildlife calls'
    ],
    signatureStay: 'Wild Coast Tented Lodge (Relais & Châteaux) / Chena Huts',
    curatorNote: 'Our guests enjoy VIP priority park gate access and tracker radios connected with top wildlife researchers for unmatched sighting rates.'
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'pkg-royal-grand',
    title: 'The Royal Emerald Odyssey',
    subtitle: 'Sigiriya • Nuwara Eliya • Ella • Yala • Galle Fort',
    duration: '10 Days / 9 Nights',
    days: 10,
    nights: 9,
    pricePerPerson: 3850,
    category: 'Classic Luxury',
    rating: 4.98,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85',
    isPopular: true,
    destinationsCovered: ['Colombo', 'Sigiriya', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'Galle Fort'],
    highlights: [
      'Private Mercedes / Land Cruiser executive chauffeur throughout',
      'VIP helicopter transfer from Sigiriya to Central Highlands',
      'Luxury safari with private naturalist in Yala National Park',
      'All 5-star & Relais & Châteaux accommodations with breakfast & gourmet dinners'
    ],
    inclusions: [
      'Dedicated English-speaking VIP chauffeur guide & luxury SUV',
      'Private airport VIP FastTrack immigration upon arrival & departure',
      'All entrance fees, archaeological permits & private safari game drives',
      'First-class vintage observation train tickets Kandy to Ella',
      '24/7 Travel With Joja Executive Concierge on WhatsApp'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Colombo Coastal Glamour', location: 'Colombo', description: 'VIP airport meet-and-greet, luxury transfer to Galle Face Hotel or boutique villa, sunset cocktails overlooking the ocean.', highlight: 'Private chef coastal seafood tasting menu.' },
      { day: 2, title: 'Cultural Triangle & Sigiriya Sky Palace', location: 'Sigiriya', description: 'Scenic drive to Sigiriya, check-in to private pool villa, twilight archaeological walk in royal water gardens.', highlight: 'Fireside lantern dinner overlooking Sigiriya rock.' },
      { day: 3, title: 'Ancient Monolith & Minneriya Elephant Gathering', location: 'Sigiriya', description: 'Dawn ascent of Sigiriya fortress before crowds, afternoon private 4x4 safari tracking wild elephant herds.', highlight: 'Champagne toast at Pidurangala vantage point.' },
      { day: 4, title: 'Sacred Kandy & Royal Botanical Sanctuary', location: 'Kandy', description: 'Journey to the hill capital, private blessing ceremony at Temple of the Sacred Tooth Relic, orchid gardens stroll.', highlight: 'VIP seating for traditional Kandyan percussion performance.' },
      { day: 5, title: 'Highland Mist & Vintage Train to Ceylon Tea Trails', location: 'Nuwara Eliya', description: 'Board the iconic scenic train ascending through cloud forests and emerald tea hills to Little England.', highlight: 'High tea on colonial lawn with single-origin teas.' },
      { day: 6, title: 'Ella Gaps & Nine Arch Bridge Wonder', location: 'Ella', description: 'Scenic mountain drive to Ella, trek to Little Adam’s Peak, witness the vintage train cross Nine Arch Bridge.', highlight: 'Infinity pool relaxation over mountain peaks.' },
      { day: 7, title: 'Descent to Yala Safari Kingdom', location: 'Yala', description: 'Descend to the southern coastal plains, check into luxury cocoon tent with private plunge pool.', highlight: 'Evening game drive tracking leopards and sloth bears.' },
      { day: 8, title: 'Dawn Wilderness Safari & Golden Coastline', location: 'Yala to Galle', description: 'Early morning game drive for prime predator sightings, transfer along scenic southern coast to Galle Fort.', highlight: 'Bush breakfast in ocean-facing sand dunes.' },
      { day: 9, title: 'Galle Fort Heritage & Ramparts Sunset', location: 'Galle', description: 'Private walking tour of the 17th-century Dutch fortress, gemstone ateliers, sunset cocktails on the ramparts.', highlight: 'Farewell gourmet dinner in a restored Dutch manor.' },
      { day: 10, title: 'Scenic Return & VIP Departure', location: 'Colombo Airport', description: 'Chauffeured express expressway drive to Bandaranaike International Airport, VIP lounge access and departure.', highlight: 'Parting luxury gift box of artisanal Ceylon teas & spices.' }
    ]
  },
  {
    id: 'pkg-coastal-wildlife',
    title: 'Southern Azure & Wild Leopard Safari',
    subtitle: 'Mirissa • Yala • Galle Fort • Tangalle Private Beaches',
    duration: '7 Days / 6 Nights',
    days: 7,
    nights: 6,
    pricePerPerson: 2950,
    category: 'Wildlife & Nature',
    rating: 4.96,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1200&q=85',
    destinationsCovered: ['Tangalle', 'Yala', 'Mirissa', 'Galle'],
    highlights: [
      'Private chartered 40ft motor yacht for Blue Whale ocean expedition',
      'Exclusive 3 game drives in Yala with premier leopard tracker',
      'Stay at Cape Weligama and Wild Coast Tented Lodge',
      'Sunset sea turtle conservation release in secluded bay'
    ],
    inclusions: [
      'Private 4x4 Land Rover safari vehicles with dedicated tracker',
      'Private catamaran cruise with on-board champagne and chef',
      'Luxury oceanfront cliff suites & tented pool villas',
      'All gourmet meals and bespoke coastal excursions',
      'Airport fast-track transfers in executive Mercedes V-Class'
    ],
    itinerary: [
      { day: 1, title: 'Touchdown & Transfer to Golden Tangalle', location: 'Tangalle', description: 'Private helicopter or luxury SUV drive to secluded palm-fringed ocean sanctuary.', highlight: 'Sunset coconut water and beachfront candlelit dinner.' },
      { day: 2, title: 'Into the Wild: Yala National Park', location: 'Yala', description: 'Check into luxury safari cocoon suite, afternoon safari tracking wild elephants and birdlife.', highlight: 'Sundowner cocktails around a roaring bush campfire.' },
      { day: 3, title: 'Leopard Territory Game Drives', location: 'Yala', description: 'Dawn and twilight game drives maximizing sightings of leopards and sloth bears.', highlight: 'Gourmet bush breakfast prepared in the wild.' },
      { day: 4, title: 'Mirissa Coast & Sunset Coconut Hill', location: 'Mirissa', description: 'Drive along golden coastline, check-in to Cape Weligama cliff resort, private sunset at Coconut Tree Hill.', highlight: 'Infinity pool overlooking crashing Indian Ocean waves.' },
      { day: 5, title: 'Private Blue Whale & Dolphin Yacht Charter', location: 'Mirissa Ocean', description: 'Dawn yacht cruise into deep ocean trenches to encounter Blue Whales and playful spinner dolphin pods.', highlight: 'Onboard gourmet champagne brunch prepared by private chef.' },
      { day: 6, title: 'Historic Galle Fort & Rampart Living', location: 'Galle Fort', description: 'Explore ancient cobblestone alleys, boutique sapphire boutiques, and lighthouse sunset.', highlight: 'Artisanal spice-infused seafood dinner.' },
      { day: 7, title: 'Colombo Coastal Farewell', location: 'Colombo', description: 'Express luxury transfer to airport for outbound international flight.', highlight: 'Memories of the wild Indian Ocean.' }
    ]
  },
  {
    id: 'pkg-highland-tea',
    title: 'Highland Tea & Mist Sanctuary',
    subtitle: 'Kandy • Nuwara Eliya • Ceylon Tea Trails • Ella Gap',
    duration: '8 Days / 7 Nights',
    days: 8,
    nights: 7,
    pricePerPerson: 3200,
    category: 'Classic Luxury',
    rating: 5.0,
    reviewsCount: 116,
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=85',
    destinationsCovered: ['Kandy', 'Castlereagh Lake', 'Nuwara Eliya', 'Ella'],
    highlights: [
      'Stay in original British colonial planter bungalows at Ceylon Tea Trails',
      'Private vintage observation train through misty mountain passes',
      'Helicopter landing on lakeside lawns surrounded by tea mountains',
      'Exclusive masterclass with a Master Tea Blender'
    ],
    inclusions: [
      'Full-board dining with personal resident chef and butler',
      'Private highland train first-class scenic journey',
      'All private guided hikes (World’s End, Little Adam’s Peak)',
      'Executive 4x4 transport with personal chauffeur-guide'
    ],
    itinerary: [
      { day: 1, title: 'Scenic Hill Country Ascent to Kandy', location: 'Kandy', description: 'Chauffeured drive into the rolling green foothills, private temple visit.', highlight: 'Sunset over Kandy Lake from private villa terrace.' },
      { day: 2, title: 'Ceylon Tea Trails by Resplendent Ceylon', location: 'Castlereagh Lake', description: 'Arrive at the world’s first Relais & Châteaux tea bungalow resort nestled on lake shores.', highlight: 'Traditional afternoon high tea on lakeside lawns.' },
      { day: 3, title: 'Artisan Tea Harvesting & Plucking Trails', location: 'Tea Estates', description: 'Walk through century-old tea trails with resident tea planter, pick tender tea leaves, blend your custom tin.', highlight: 'Four-course tea-infused gourmet pairing dinner.' },
      { day: 4, title: 'Little England & Nuwara Eliya High Country', location: 'Nuwara Eliya', description: 'Ascend to 1,868m, visit Hakgala botanical gardens and historic golf links.', highlight: 'Log fire cocktail evening inside 19th-century salon.' },
      { day: 5, title: 'Horton Plains & World’s End Cliff Hike', location: 'Horton Plains', description: 'Private dawn trek across alpine moorlands to the sheer 870m World’s End precipice.', highlight: 'Picnic breakfast atop the clouds.' },
      { day: 6, title: 'Scenic Train to Ella & Nine Arch Bridge', location: 'Ella', description: 'Scenic train ride through mountain tunnels, visit iconic viaduct and Ravana waterfall.', highlight: 'Private balcony dining overlooking Ella Gap.' },
      { day: 7, title: 'Little Adam’s Peak & Spa Sanctuary', location: 'Ella', description: 'Sunrise hike, followed by all-day herbal Ayurvedic rejuvenation therapies.', highlight: 'Ayurvedic herbal oil massage with panoramic mountain views.' },
      { day: 8, title: 'Helicopter Transfer to Colombo', location: 'Colombo', description: 'Scenic aerial flight over central peaks returning directly to international airport.', highlight: 'Panoramic bird’s-eye view of Sri Lanka’s mountains.' }
    ]
  },
  {
    id: 'pkg-honeymoon-sanctuary',
    title: 'Ceylon Honeymoon & Romantic Sanctuaries',
    subtitle: 'Private Pool Villas • Secluded Beaches • Candlelit Waterfalls',
    duration: '9 Days / 8 Nights',
    days: 9,
    nights: 8,
    pricePerPerson: 4200,
    category: 'Honeymoon Exclusive',
    rating: 5.0,
    reviewsCount: 84,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    destinationsCovered: ['Sigiriya Forest Villa', 'Ella Cloud Villa', 'Cape Weligama Cliff Pool', 'Galle'],
    highlights: [
      '100% private luxury pool villas throughout the entire journey',
      'Candlelit dinner suspended over Ravana waterfall valley',
      'Private sunset champagne sailing cruise in Mirissa',
      'Couples Ayurvedic 120-minute signature spa treatments'
    ],
    inclusions: [
      'Complimentary champagne on arrival at every sanctuary',
      'Private chauffeur-driven luxury vehicle with privacy partition',
      'Professional travel photographer for a 2-hour sunset shoot in Galle & Mirissa',
      'Personalized romantic touches, flower baths & bespoke dining daily'
    ],
    itinerary: [
      { day: 1, title: 'Welcome to Paradise & Forest Villa', location: 'Cultural Triangle', description: 'Private transfer to secluded luxury water garden pool villa.', highlight: 'Floating champagne breakfast upon dawn.' },
      { day: 2, title: 'Private Sigiriya Ascent & Hot Air Balloon', location: 'Sigiriya', description: 'Dawn hot air balloon drift over misty lakes, private palace exploration.', highlight: 'Sunset massage overlooking Pidurangala.' },
      { day: 3, title: 'Highlands Romance & Fireplace Suite', location: 'Nuwara Eliya', description: 'Journey into cool mountain tea valleys, fireside romantic evening.', highlight: 'Private dining by candlelight inside a heritage greenhouse.' },
      { day: 4, title: 'Ella Mist & Waterfall Romance', location: 'Ella', description: 'Check into 98 Acres luxury chalet overlooking the gap.', highlight: 'Private jacuzzi with endless mountain views.' },
      { day: 5, title: 'Descent to Ocean Cliffside Paradise', location: 'Cape Weligama', description: 'Arrive at dramatic 12-acre cliffside promontory in Weligama.', highlight: 'Moonlit dinner on private ocean cliff edge.' },
      { day: 6, title: 'Private Catamaran & Secluded Lagoon', location: 'Mirissa', description: 'Sail to a secluded cove for private swimming, paddleboarding, and snorkeling.', highlight: 'Gourmet seafood lunch served on deck.' },
      { day: 7, title: 'Galle Fort Stroll & Professional Photo Shoot', location: 'Galle', description: 'Private golden hour photoshoot along the cobblestone streets and ramparts.', highlight: 'Fine dining in a 300-year-old Dutch villa courtyard.' },
      { day: 8, title: 'Beachside Relaxation & Couples Spa', location: 'Southern Coast', description: 'Day at leisure in your private oceanfront villa.', highlight: '120-minute bespoke couples aromatic oil massage.' },
      { day: 9, title: 'Private Farewell & Departure', location: 'Colombo Airport', description: 'Luxury express transfer to airport with parting memories.', highlight: 'Curated photo album gift delivered to your home.' }
    ]
  }
];

export const LUXURY_HOTELS: Hotel[] = [
  {
    id: 'hotel-tea-trails',
    name: 'Ceylon Tea Trails',
    location: 'Castlereagh Lake, Hatton',
    category: 'Relais & Châteaux Colonial Villa',
    rating: 4.99,
    pricePerNight: 1150,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    tagline: 'The world’s first tea bungalow resort',
    description: 'Comprising five restored historic colonial tea planter residences perched around Lake Castlereagh, complete with master butlers, croquet lawns, and timeless elegance.',
    amenities: ['Private Master Butler', 'Lakeside Infinity Pool', 'Tennis & Croquet Lawns', 'Tea-Infused Fine Dining', 'Private Helipad', 'Vintage Fireplaces'],
    highlights: ['Scenic helicopter transfers', 'Bespoke high teas on lake verandas', 'Canoeing across Castlereagh Lake']
  },
  {
    id: 'hotel-cape-weligama',
    name: 'Cape Weligama',
    location: 'Weligama / Mirissa Coast',
    category: 'Relais & Châteaux Cliffside Sanctuary',
    rating: 4.97,
    pricePerNight: 980,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Spectacular cliffside residences overlooking the Indian Ocean',
    description: 'Dramatically located on a 12-acre headland rising 40 meters above the surf, boasting 60-meter crescent moon infinity pool and lavish freestanding residences.',
    amenities: ['Iconic Moon Infinity Pool', 'Private Butler Service', 'Cliff-Edge Ocean Dining', 'PADI Dive Center', 'Luxury Spa Villas', 'Private Beach Access'],
    highlights: ['Whale watching charters directly from the bay', 'Sunset cliffside cocktails', 'Private pool villas with garden verandas']
  },
  {
    id: 'hotel-wild-coast',
    name: 'Wild Coast Tented Lodge',
    location: 'Yala National Park Border',
    category: 'Relais & Châteaux Luxury Safari Lodge',
    rating: 4.98,
    pricePerNight: 1250,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Where the wild jungle meets the rugged coast',
    description: 'Striking arched cocoon-like tented structures sculpted with natural materials, positioned between the raw wilderness of Yala and the turquoise Indian Ocean.',
    amenities: ['Private Plunge Pools', 'Luxury Cocoon Suites', 'Oceanfront Freeform Pool', 'Safari Naturalist Team', 'Open-Air Bamboo Restaurant', 'Wilderness Spa'],
    highlights: ['Priority leopard game drives', 'Bush dinners under the Milky Way', 'Ocean dune sundowners']
  },
  {
    id: 'hotel-water-garden',
    name: 'Water Garden Sigiriya',
    location: 'Sigiriya, Cultural Triangle',
    category: 'Bespoke Luxury Villa Resort',
    rating: 4.95,
    pricePerNight: 720,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Ancient water garden architecture reinvented in modern luxury',
    description: 'Sprawling across winding waterways and lily ponds with uninterrupted vistas of the majestic Sigiriya Rock Fortress from private overwater villas.',
    amenities: ['Private Villa Pools', 'Direct Sigiriya Views', 'Helicopter Pad', 'Ayurvedic Wellness Sanctuary', 'Gourmet Organic Dining', 'Bicycle Safari Paths'],
    highlights: ['Unobstructed view of Sigiriya fortress', 'Hydraulic water garden architecture', 'Private candlelit dinner on water platforms']
  },
  {
    id: 'hotel-amangalla',
    name: 'Amangalla by Aman',
    location: 'Galle Fort Citadel',
    category: 'Historic Grand Colonial Luxury',
    rating: 4.99,
    pricePerNight: 1350,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Three centuries of storied elegance within the Dutch Ramparts',
    description: 'An Aman sanctuary dating to 1684, filled with polished teak floorboards, antique four-poster beds, vintage crystal chandeliers, and serene baths.',
    amenities: ['The Baths Hydrotherapy Suite', 'Historic Zaal Great Hall', '21m Garden Pool', 'Resident Historian Walks', 'Aman Ayurvedic Doctor', 'Courtyard Dining'],
    highlights: ['300-year-old architecture', 'World-class Aman hydrotherapy rituals', 'Direct walking access to Galle Fort ramparts']
  },
  {
    id: 'hotel-98-acres',
    name: '98 Acres Resort & Spa',
    location: 'Ella Highlands',
    category: 'Highland Luxury Eco-Lodge',
    rating: 4.94,
    pricePerNight: 650,
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Perched high on a 98-acre scenic tea estate',
    description: 'Chic chalets crafted from discarded timber and straw, perched dramatically on the slopes of Little Adam’s Peak with jaw-dropping views of Ella Gap.',
    amenities: ['Mountain View Infinity Pool', 'Ravana Pool Club Access', 'Tea Plantation Hikes', 'Helipad Access', 'Ayurvedic Spa Pavilions', 'Open-Air Restaurant'],
    highlights: ['Unrivaled views of Ella Rock & Gap', 'Walking distance to Nine Arch Bridge', 'Flying Ravana mega zipline experience']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Sigiriya Fortress at Dawn',
    location: 'Sigiriya',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1000&q=80',
    description: 'The ancient 5th-century palace in the sky bathed in warm morning golden rays.'
  },
  {
    id: 'gal-2',
    title: 'Iconic Nine Arch Demodara Bridge',
    location: 'Ella',
    category: 'Highlands',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80',
    description: 'The marvel of British colonial railway architecture snaking through lush Ceylon tea slopes.'
  },
  {
    id: 'gal-3',
    title: 'Coconut Tree Hill at Golden Sunset',
    location: 'Mirissa',
    category: 'Coast',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1000&q=80',
    description: 'Swaying palm silhouettes on the red headland against a vibrant Indian Ocean sunset.'
  },
  {
    id: 'gal-4',
    title: 'Sri Lankan Leopard on Granite Outcrop',
    location: 'Yala National Park',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1000&q=80',
    description: 'The apex predator of Sri Lanka basking under the golden afternoon sun in Yala.'
  },
  {
    id: 'gal-5',
    title: 'Galle Fort Ramparts & Lighthouse',
    location: 'Galle',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1566296517004-220eff942644?auto=format&fit=crop&w=1000&q=80',
    description: 'The historic Dutch ramparts standing resilient against the turquoise ocean swells.'
  },
  {
    id: 'gal-6',
    title: 'Emerald Tea Plantation Rows',
    location: 'Nuwara Eliya',
    category: 'Highlands',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80',
    description: 'Pristine emerald contours of high-grown Ceylon tea estates in the crisp mountain air.'
  },
  {
    id: 'gal-7',
    title: 'Relais & Châteaux Cliffside Villa',
    location: 'Weligama',
    category: 'Villas',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80',
    description: 'Private infinity pool suspended above the crashing Indian Ocean surf.'
  },
  {
    id: 'gal-8',
    title: 'Wild Asian Elephants at Gathering',
    location: 'Minneriya / Yala',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1581852017103-68ac655039a5?auto=format&fit=crop&w=1000&q=80',
    description: 'Gentle giants gathering peacefully around ancient irrigation reservoirs.'
  },
  {
    id: 'gal-9',
    title: 'Traditional Stilt Fishermen at Sunset',
    location: 'Koggala Coast',
    category: 'Coast',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    description: 'Timeless age-old artisanal fishing traditions against glowing evening horizon.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Lord & Lady Harrington',
    city: 'London',
    country: 'United Kingdom',
    rating: 5,
    date: 'February 2026',
    packageTitle: 'The Royal Emerald Odyssey',
    comment: 'Travel With Joja orchestrated the most impeccable journey of our lives. From our private helicopter touching down directly on the tea lawns of Castlereagh to witnessing four leopards in Yala with our private tracker, every detail was executed with quiet perfection. Joja himself checked in daily via WhatsApp with personalized recommendations.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-2',
    author: 'Maximilian & Sophie von Bern',
    city: 'Zurich',
    country: 'Switzerland',
    rating: 5,
    date: 'January 2026',
    packageTitle: 'Ceylon Honeymoon & Romantic Sanctuaries',
    comment: 'An absolute masterpiece of luxury travel. The private villas at Cape Weligama and Ceylon Tea Trails felt like heaven on earth. The surprise sunset champagne yacht in Mirissa surrounded by dolphins was breathtaking. No other agency in Sri Lanka comes close to this level of bespoke elegance.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-3',
    author: 'Dr. Tariq & Amina Al-Mansoor',
    city: 'Dubai',
    country: 'United Arab Emirates',
    rating: 5,
    date: 'December 2025',
    packageTitle: 'Southern Azure & Wild Leopard Safari',
    comment: 'Private executive chauffeur, flawless airport fast-track, and the most knowledgeable wildlife guides I have ever encountered. Staying at Wild Coast Tented Lodge was surreal. The dark green and gold VIP treatment from the Joja team was exemplary throughout.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-4',
    author: 'Elena Rostova & Christopher Bell',
    city: 'New York',
    country: 'United States',
    rating: 5,
    date: 'March 2026',
    packageTitle: 'Highland Tea & Mist Sanctuary',
    comment: 'The scenic vintage train carriage Joja booked for us to Ella was unbelievable. Skipping all the queues at Sigiriya for a sunrise climb before anyone else arrived was worth every penny. You truly experience Sri Lanka like royalty.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQ_ITEMS = [
  {
    q: 'How does bespoke booking with Travel With Joja work?',
    a: 'Simply select an itinerary, destination, or contact our VIP Concierge directly via WhatsApp or our trip planner. We discuss your preferences, dates, and luxury style, then deliver a fully tailored master itinerary with private chauffeurs, 5-star villas, and helicopter transfers.'
  },
  {
    q: 'Can itineraries be customized with helicopter transfers or private yachts?',
    a: 'Yes. We maintain direct partnerships with Sri Lanka’s premier aviation charters, luxury private catamarans, and Relais & Châteaux properties to guarantee seamless aerial and sea transfers across the island.'
  },
  {
    q: 'What is included in the Travel With Joja VIP Concierge service?',
    a: 'You receive 24/7 dedicated WhatsApp support, airport VIP FastTrack immigration, luggage logistics, reservation priority at all signature restaurants, private historian and naturalist guides, and luxury air-conditioned Mercedes or 4x4 vehicles.'
  },
  {
    q: 'When is the best time of year to visit Sri Lanka?',
    a: 'Sri Lanka is a year-round paradise due to its dual monsoon climate. The South and West coasts (Mirissa, Galle, Yala) and Central Highlands (Ella, Nuwara Eliya, Sigiriya) are at their finest from November through May, while the East coast is radiant from May to October.'
  }
];
