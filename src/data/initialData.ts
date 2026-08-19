import { Destination, TravelPackage, Review, GalleryItem, Booking, FAQItem, SiteSettings } from '../types';

export const INITIAL_DESTINATIONS: Destination[] = [
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    slug: 'sigiriya',
    region: 'Cultural Triangle',
    tagline: 'The Ancient Fortress in the Clouds & Royal Water Gardens',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1588258524675-c61919a3d410?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A UNESCO World Heritage site and monumental ancient palace rising 200 meters above tropical jungle plains. Sigiriya features fifth-century fresco masterpieces, mirror walls, and advanced hydraulic water gardens.',
    bestSeason: 'December to April, July to September',
    idealDuration: '2 - 3 Days',
    highlights: [
      'Private sunrise climb to Sigiriya Rock Fortress with archaeological historian',
      'Luxury champagne hot air balloon flight over the cultural triangle',
      'Private safari at Minneriya Elephant Gathering',
      'Eco-luxury treehouse suites overlooking the lotus lakes'
    ],
    priceFromUSD: 1450,
    rating: 4.9,
    reviewsCount: 142,
    popularFor: ['Heritage', 'Archaeology', 'Hot Air Balloons', 'Elephant Safaris'],
    luxuryActivities: ['Private Helicopter Transfer', 'Private Dining in Ancient Ruins', 'Ayurvedic Herb Spa']
  },
  {
    id: 'ella',
    name: 'Ella',
    slug: 'ella',
    region: 'Hill Country',
    tagline: 'Misty Cloud Forests, Nine Arch Bridge & Tea Escapes',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566833919183-b939f074d47c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Nestled deep in the central highlands, Ella offers dramatic mountain passes, roaring waterfalls, emerald tea valleys, and the world-renowned Nine Arch Viaduct bridge.',
    bestSeason: 'January to May',
    idealDuration: '2 - 3 Days',
    highlights: [
      'First-Class ViceRoy Observation carriage train ride through mountain tunnels',
      'Exclusive private photography access at Nine Arch Bridge at sunrise',
      'Helicopter landing directly on private tea estate hilltops',
      'Zipline & cliff-edge cocktail lounge overlooking Ella Gap'
    ],
    priceFromUSD: 1250,
    rating: 4.8,
    reviewsCount: 128,
    popularFor: ['Scenic Trains', 'Nine Arch Bridge', 'Hiking', 'Highland Views'],
    luxuryActivities: ['Private Tea Masterclass', 'Private Villa with Infinity Pool overlooking Ravana Falls']
  },
  {
    id: 'galle',
    name: 'Galle',
    slug: 'galle',
    region: 'Southern Coast',
    tagline: '17th-Century Dutch Fort, Cobbled Alleys & Coastal Opulence',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Enclosed within massive coral bastions, Galle Fort is an enchanting blend of European colonial architecture and vibrant South Asian coastal heritage with Michelin-level culinary gems.',
    bestSeason: 'November to April',
    idealDuration: '2 - 4 Days',
    highlights: [
      'Curated private architectural walking tour of the 16th-century ramparts',
      'Private sunset catamaran sailing along the historical coastline',
      'Boutique gemstone masterclasses with master gemologists',
      'Dining at heritage colonial mansions restored by world-renowned architects'
    ],
    priceFromUSD: 1600,
    rating: 4.95,
    reviewsCount: 189,
    popularFor: ['Colonial Forts', 'Fine Dining', 'Boutique Shopping', 'Sunset Ramparts'],
    luxuryActivities: ['Private Yacht Charter', 'Private Chef Seafood BBQ', 'Gem Vault Exclusives']
  },
  {
    id: 'mirissa',
    name: 'Mirissa',
    slug: 'mirissa',
    region: 'Southern Coast',
    tagline: 'Blue Whale Sanctuaries, Coconut Tree Hill & Golden Bays',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Famous worldwide for the Indian Ocean blue whale migration, Mirissa offers crescent bays fringed by swaying palm trees, private luxury yachts, and serene coastal villas.',
    bestSeason: 'November to April',
    idealDuration: '2 - 3 Days',
    highlights: [
      'Private luxury charter boat with marine biologists for Blue Whale expeditions',
      'Exclusive dawn access to Coconut Tree Hill for private portraits',
      'Snorkeling with wild green sea turtles in crystal turquoise waters',
      'Beachfront candlelit dining with fresh Indian Ocean rock lobsters'
    ],
    priceFromUSD: 1100,
    rating: 4.85,
    reviewsCount: 114,
    popularFor: ['Blue Whales', 'Coconut Tree Hill', 'Surfing', 'Sunset Cocktails'],
    luxuryActivities: ['Private Marine Catamaran', 'Luxury Beach Villa with Private Butler']
  },
  {
    id: 'yala',
    name: 'Yala',
    slug: 'yala',
    region: 'Wildlife & Nature',
    tagline: 'Highest Leopard Density in the World & Wild Coastal Wilderness',
    image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Where untamed dry-zone wilderness meets the Indian Ocean surf. Yala is renowned for having the highest concentration of wild Sri Lankan leopards, sloth bears, and majestic Asian elephant herds.',
    bestSeason: 'February to July',
    idealDuration: '2 - 3 Days',
    highlights: [
      'Customized open-top 4x4 safari with elite senior wildlife naturalists',
      'Stay in world-class safari glamping lodges with plunge pools',
      'Bush breakfast setup inside pristine wildlife reserve buffers',
      'Night-vision infrared camera drives tracking nocturnal apex predators'
    ],
    priceFromUSD: 1850,
    rating: 4.92,
    reviewsCount: 165,
    popularFor: ['Sri Lankan Leopards', 'Sloth Bears', 'Elephants', 'Luxury Glamping'],
    luxuryActivities: ['Luxury Tented Pavilion Lodge', 'Private Naturalist Guide', 'Helicopter Airstrip Access']
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya',
    slug: 'nuwara-eliya',
    region: 'Hill Country',
    tagline: 'Little England, High-Altitude Tea Estates & Mist-Veiled Lakes',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566833919183-b939f074d47c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Perched at 1,868m above sea level, Nuwara Eliya offers cool spring climates, colonial Tudor manors, manicured golf courses, and the cradle of the world’s most prestigious Ceylon Single-Estate teas.',
    bestSeason: 'February to May',
    idealDuration: '2 - 4 Days',
    highlights: [
      'High-tea experience at historic colonial heritage grand hotels',
      'Private planter bungalow stays with bespoke fireplace butler service',
      'Sunrise expedition to Horton Plains and the sheer drop of World’s End',
      'Curated private tasting of vintage Silver Tips and Golden Needle teas'
    ],
    priceFromUSD: 1350,
    rating: 4.88,
    reviewsCount: 132,
    popularFor: ['Ceylon Tea Estates', 'Tudor Architecture', 'Worlds End', 'Cool Mountain Air'],
    luxuryActivities: ['Tea Estate Planter Bungalow', 'Private 18-Hole Golf Round', 'Helicopter Transfer']
  },
  {
    id: 'kandy',
    name: 'Kandy',
    slug: 'kandy',
    region: 'Cultural Triangle',
    tagline: 'Sacred Temple of the Tooth & Royal Botanical Sanctuaries',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1588258524675-c61919a3d410?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'The last royal capital of Sri Lanka, surrounded by forested hills and peaceful Kandy Lake. Home to the Sacred Relic of the tooth of the Buddha and the majestic Royal Botanical Gardens of Peradeniya.',
    bestSeason: 'December to April',
    idealDuration: '2 - 3 Days',
    highlights: [
      'VIP private access to the inner sanctuary of the Sacred Tooth Relic Temple',
      'Private horticulturist tour of the centuries-old Royal Botanical Gardens',
      'Scenic helicopter hop to Knuckles Mountain Range for private picnics',
      'Traditional Kandyan royal dance performance with front-row VIP seating'
    ],
    priceFromUSD: 1150,
    rating: 4.86,
    reviewsCount: 120,
    popularFor: ['Temple of the Tooth', 'Botanical Gardens', 'Kandy Lake', 'Royal History'],
    luxuryActivities: ['VIP Temple Access', 'Private Hilltop Villa', 'Traditional Ayurvedic Healing']
  },
  {
    id: 'bentota',
    name: 'Bentota',
    slug: 'bentota',
    region: 'West Coast',
    tagline: 'Golden Sand Coastline, Geoffrey Bawa Estates & River Safaris',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A paradise of calm golden beaches, tranquil mangrove river lagoons, and architectural masterworks created by the father of Tropical Modernism, Geoffrey Bawa.',
    bestSeason: 'November to April',
    idealDuration: '2 - 4 Days',
    highlights: [
      'Private guided estate tour of Lunuganga – Geoffrey Bawa’s legendary country estate',
      'Madu Ganga private boat safari exploring 64 mangrove islands & cinnamon estates',
      'Luxury private jet-ski and deep-sea game fishing expeditions',
      'Beachfront 5-star private pool villas with sunset champagne butler service'
    ],
    priceFromUSD: 1400,
    rating: 4.89,
    reviewsCount: 108,
    popularFor: ['Geoffrey Bawa Architecture', 'Golden Beaches', 'Water Sports', 'River Mangroves'],
    luxuryActivities: ['Private River Yacht', 'Beachfront Luxury Villa', 'Ayurvedic Retreat']
  }
];

export const INITIAL_PACKAGES: TravelPackage[] = [
  {
    id: 'pkg-grand-sri-lanka',
    title: 'The Signature 10-Day Ceylon Grand Odyssey',
    subtitle: 'The Ultimate Bespoke Journey: Sigiriya, Hill Country, Yala Safari & Southern Coast',
    duration: '10 Days / 9 Nights',
    durationDays: 10,
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Signature',
    priceUSD: 4850,
    rating: 5.0,
    reviewsCount: 88,
    featured: true,
    maxTravelers: 8,
    transportType: 'Mercedes Luxury Chauffeur & Helicopter Segment',
    destinationsCovered: ['Sigiriya', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'Galle'],
    inclusions: [
      '5-Star Relais & Châteaux & Luxury Boutique Villa Accommodations',
      'Dedicated English-speaking Chauffeur-Guide in luxury vehicle with Wi-Fi & refreshments',
      '1 Scenic Helicopter Hop over Central Highland Peaks',
      'VIP fast-track entries to all monuments, temples & UNESCO sites',
      'Private 4x4 Leopard Safari in Yala with Senior Naturalist',
      'Daily gourmet champagne breakfast & curated 4-course dinners',
      '24/7 Concierge & On-Ground Guest Experience Manager'
    ],
    exclusions: [
      'International flights',
      'Sri Lanka tourist visa fees',
      'Discretionary staff gratuities',
      'Premium alcoholic beverages outside curated tasting menus'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Colombo & Transfer to Cultural Triangle',
        description: 'VIP airport meet-and-greet on the tarmac. Scenic drive to your luxury lakefront pavilion in Sigiriya. Sunset champagne overlooking lotus ponds.',
        stay: 'Water Garden Sigiriya / Jetwing Vil Uyana',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Sunrise at Sigiriya Rock Fortress & Minneriya Safari',
        description: 'Private guided climb to the Lion Rock before public crowds. Afternoon luxury jeep safari tracking wild elephant herds.',
        stay: 'Water Garden Sigiriya',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Sacred Kandy & The Temple of the Tooth Relic',
        description: 'Journey to the royal hill capital. Exclusive VIP private evening entry to the Sacred Tooth Relic Temple ceremony.',
        stay: 'The Kandy House / W15 Hanthana Estate',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 4,
        title: 'Highlands & Ceylon Tea Trails',
        description: 'Ascend to Nuwara Eliya. Private tea masterclass and high tea on manicured lawns at a restored 19th-century colonial estate.',
        stay: 'Ceylon Tea Trails - Castlereagh Bungalow',
        meals: 'All-Inclusive Luxury'
      },
      {
        day: 5,
        title: 'Nine Arch Bridge & Ella Highland Escape',
        description: 'Private train ride through misty tunnels. Sunrise photo session at Nine Arch Bridge followed by waterfall picnics.',
        stay: '98 Acres Resort & Spa Luxury Villa',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 6,
        title: 'Descent to Yala National Park Safari',
        description: 'Scenic transition to the south-east coast. Check in to luxury safari glamping tents. Afternoon game drive for leopards and sloth bears.',
        stay: 'Wild Coast Tented Lodge - Cocoon Suite',
        meals: 'All-Inclusive Safari Experience'
      },
      {
        day: 7,
        title: 'Dawn Safari & Transition to Historic Galle Fort',
        description: 'Sunrise leopard tracking safari followed by bush breakfast. Transfer to the UNESCO-listed 17th-century Galle Fort.',
        stay: 'Amangalla / Fort Bazaar',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 8,
        title: 'Galle Fort Ramparts & Private Yacht Sail',
        description: 'Private architectural walking tour. Sunset sailing catamaran along the historical southern coast with oysters and champagne.',
        stay: 'Amangalla',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 9,
        title: 'Bentota Coastal Serenity & Bawa Architecture',
        description: 'Explore Geoffrey Bawa’s Lunuganga country estate. Relax at private beachfront villa with Ayurvedic spa treatments.',
        stay: 'Saman Villas / Taj Bentota Ocean Suite',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 10,
        title: 'Departure from Colombo Bandaranaike Airport',
        description: 'Private luxury transfer to Colombo Airport for your departure with VIP airport lounge access.',
        stay: 'End of Journey',
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: 'pkg-royal-wildlife',
    title: 'Royal Wildlife & Untamed Wilderness Expedition',
    subtitle: '7-Day Intense Safari: Yala Leopards, Minneriya Elephants & Mirissa Blue Whales',
    duration: '7 Days / 6 Nights',
    durationDays: 7,
    image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Wildlife Safari',
    priceUSD: 3600,
    rating: 4.95,
    reviewsCount: 64,
    featured: true,
    maxTravelers: 6,
    transportType: 'Custom 4x4 Safari Land Cruisers & Executive Van',
    destinationsCovered: ['Sigiriya', 'Yala', 'Mirissa', 'Galle'],
    inclusions: [
      '4 Private customized 4x4 safari drives in Yala with expert tracker',
      'Private luxury catamaran charter for Indian Ocean Whale Watching',
      'All luxury tented lodge and coastal villa accommodations',
      'High-end telephoto camera lens loaners for wildlife photography',
      'All national park conservation fees and permits'
    ],
    exclusions: ['International airfare', 'Alcoholic beverages beyond welcome bar'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Minneriya Elephant Sanctuary',
        description: 'VIP meet and transfer to luxury lodge. Afternoon game drive witnessing hundreds of elephants gathering.',
        stay: 'Uga Ulagalla Resort',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Sigiriya Rock & Journey to the Deep South',
        description: 'Morning private rock fortress tour. Scenic flight or luxury transfer to Yala wilderness fringe.',
        stay: 'Wild Coast Tented Lodge',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 3,
        title: 'Full Day Yala Leopard & Sloth Bear Safari',
        description: 'Two extensive game drives into Block 1 & Block 5 with senior leopard conservation naturalists.',
        stay: 'Wild Coast Tented Lodge',
        meals: 'All-Inclusive'
      },
      {
        day: 4,
        title: 'Kumana Wetland Birding & Coastal Dunes',
        description: 'Explore untouched migratory bird lagoons and remote ocean dunes.',
        stay: 'Chena Huts by Uga Escapes',
        meals: 'All-Inclusive'
      },
      {
        day: 5,
        title: 'Mirissa Blue Whale Private Charter',
        description: 'Embark on a private yacht into deep waters to observe the largest mammals on Earth.',
        stay: 'Cape Weligama Luxury Resort',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 6,
        title: 'Galle Fort & Coral Reef Snorkeling',
        description: 'Snorkel with green turtles at private bay, followed by sunset wine tasting on Galle Fort ramparts.',
        stay: 'Cape Weligama',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 7,
        title: 'Airport VIP Escort & Departure',
        description: 'Private transfer along the Southern Expressway to Colombo Airport.',
        stay: 'Departure',
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: 'pkg-highland-tea-retreat',
    title: 'Ceylon High Tea, Mist & Mountain Sanctuary',
    subtitle: '5-Day Highland Escape: Ella Scenic Railways, Nuwara Eliya & Castlereagh Valleys',
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Wellness & Tea',
    priceUSD: 2450,
    rating: 4.9,
    reviewsCount: 52,
    featured: false,
    maxTravelers: 4,
    transportType: 'Scenic First Class Train & Private Chauffeur',
    destinationsCovered: ['Kandy', 'Nuwara Eliya', 'Ella'],
    inclusions: [
      'Private tea planter bungalow stay with fireplace butler',
      'ViceRoy luxury scenic mountain railway tickets',
      'Daily afternoon high-tea service with artisanal tea pairings',
      'Private Ayurvedic herbal rejuvenation massages',
      'Exclusive sunrise access to Nine Arch Bridge'
    ],
    exclusions: ['International flights', 'Personal purchases and tips'],
    itinerary: [
      {
        day: 1,
        title: 'Kandy Royal Heritage & Botanical Garden',
        description: 'Private orchid house tour and royal botanical garden walk.',
        stay: 'W15 Hanthana Estate',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Epic Mountain Rail Journey to Tea Trails',
        description: 'Board the iconic scenic train through cascading waterfalls and misty mountain gaps.',
        stay: 'Ceylon Tea Trails',
        meals: 'All-Inclusive'
      },
      {
        day: 3,
        title: 'Tea Masterclass & Lake Castlereagh Kayaking',
        description: 'Hand-pick tea leaves with estate pluckers, sample single-origin teas, kayak on tranquil alpine lakes.',
        stay: 'Ceylon Tea Trails',
        meals: 'All-Inclusive'
      },
      {
        day: 4,
        title: 'Ella Gap, Nine Arch Bridge & Ravana Waterfalls',
        description: 'Explore the architectural wonder of Nine Arch Viaduct and relax at cliff-top infinity pool.',
        stay: '98 Acres Resort',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 5,
        title: 'Highland Descent & Departure',
        description: 'Scenic luxury drive or helicopter flight back to Colombo Airport.',
        stay: 'Departure',
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: 'pkg-southern-coastal-bliss',
    title: 'Southern Coastal Bliss & Marine Luxury',
    subtitle: '6-Day Oceanfront Paradise: Galle Fort, Mirissa Private Catamarans & Bentota Villas',
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Coastal & Marine',
    priceUSD: 2950,
    rating: 4.93,
    reviewsCount: 77,
    featured: true,
    maxTravelers: 6,
    transportType: 'Executive Mercedes Van & Private Yacht Charters',
    destinationsCovered: ['Galle', 'Mirissa', 'Bentota'],
    inclusions: [
      'Ocean-view 5-star villas with private plunge pools',
      'Private sunset sailing catamaran with seafood platter',
      'Guided culinary seafood masterclass with master chef',
      'Bentota river mangrove cruise & Lunuganga estate tour',
      'Complimentary airport fast-track service'
    ],
    exclusions: ['International flights', 'Gratuities'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Bentota Beach Villa Check-In',
        description: 'Welcome cocktails, Ayurvedic foot reflexology, and romantic dinner right on the beach.',
        stay: 'Saman Villas Bentota',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Geoffrey Bawa Architecture & Madu River Safari',
        description: 'Explore cinnamon islands by private boat and visit Brief Garden and Lunuganga.',
        stay: 'Saman Villas Bentota',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 3,
        title: 'Historic Galle Fort & Sunset Ramparts Walk',
        description: 'Check in to a 17th-century colonial luxury suite inside the Fort. Evening cocktails.',
        stay: 'Amangalla Galle Fort',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 4,
        title: 'Mirissa Blue Whale Cruise & Secret Beach',
        description: 'Private morning marine safari, followed by private cove relaxation and fresh coconut cocktails.',
        stay: 'Cape Weligama',
        meals: 'Breakfast, Lunch'
      },
      {
        day: 5,
        title: 'Surfing, Spa & Sunset Champagne Catamaran',
        description: 'Private surf coaching or wellness spa, followed by golden hour sailing.',
        stay: 'Cape Weligama',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 6,
        title: 'Farewell Coastal Brunch & Airport Transfer',
        description: 'Leisurely brunch before private highway transfer to Colombo Bandaranaike International.',
        stay: 'Departure',
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: 'pkg-helicopter-island-hop',
    title: 'Serendib from the Sky: VIP Helicopter Island Tour',
    subtitle: '4-Day Ultra-Luxury Air Tour: Sigiriya, Hill Country & Yala without Travel Fatigue',
    duration: '4 Days / 3 Nights',
    durationDays: 4,
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Signature',
    priceUSD: 6900,
    rating: 5.0,
    reviewsCount: 36,
    featured: true,
    maxTravelers: 4,
    transportType: 'Dedicated Airbus H125 / Bell 206 Helicopter Throughout',
    destinationsCovered: ['Sigiriya', 'Nuwara Eliya', 'Yala', 'Galle'],
    inclusions: [
      'All inter-destination transfers via private chartered helicopter',
      'Premier suites in Sri Lanka’s top 4 luxury properties',
      'Private security, fast-track permits, and helicopter tarmac clearance',
      'All meals, vintage wines, and private tours included'
    ],
    exclusions: ['International flights'],
    itinerary: [
      {
        day: 1,
        title: 'Colombo Heliport to Sigiriya Cloud Fortress',
        description: 'Aerial flyover of Sigiriya Rock Fortress. Land directly on hotel grounds. Sunset champagne hot air ballooning.',
        stay: 'Water Garden Sigiriya',
        meals: 'All-Inclusive'
      },
      {
        day: 2,
        title: 'High-Altitude Heli Flight to Castlereagh Tea Hills',
        description: 'Soar above Adam’s Peak and water cascades. Land on tea estate lawn. Planter banquet.',
        stay: 'Ceylon Tea Trails',
        meals: 'All-Inclusive'
      },
      {
        day: 3,
        title: 'Helicopter Hop to Yala Coast & Afternoon Leopard Safari',
        description: 'Fly south over dramatic escarpments. Private game drive tracking leopards.',
        stay: 'Wild Coast Tented Lodge',
        meals: 'All-Inclusive'
      },
      {
        day: 4,
        title: 'Coastal Aerial Transfer to Colombo International',
        description: 'Scenic flight over Galle Fort and southern coastline directly to international airport terminal.',
        stay: 'Departure',
        meals: 'Breakfast, Lunch'
      }
    ]
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Lord & Lady Harrington',
    location: 'London, United Kingdom',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2026-02-14',
    title: 'The pinnacle of bespoke luxury travel',
    text: 'Travel With Joja orchestrated the most impeccable 10 days of our lives in Sri Lanka. From the helicopter hop over Sigiriya to our private butler at Ceylon Tea Trails and finding 3 leopards in Yala, every single detail was executed with royal precision.',
    tripTaken: 'The Signature 10-Day Ceylon Grand Odyssey',
    approved: true,
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Dr. Evelyn Vance & Marc Dubois',
    location: 'Geneva, Switzerland',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2026-01-28',
    title: 'Unmatched wildlife encounters & 5-star service',
    text: 'Seeing blue whales breach alongside our private catamaran in Mirissa and waking up to elephants outside our luxury pavilion in Yala was pure magic. Joja’s on-ground team was always two steps ahead with chilled champagne and thoughtful surprises.',
    tripTaken: 'Royal Wildlife & Untamed Wilderness Expedition',
    approved: true,
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Sophie & Liam Chen',
    location: 'Melbourne, Australia',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2026-02-02',
    title: 'A honeymoon straight out of a dream',
    text: 'We could not have imagined a more romantic experience. The candlelit dinner inside ancient ruins, the misty morning walk on Nine Arch Bridge before anyone else arrived, and our oceanfront villa in Galle made this unforgettable.',
    tripTaken: 'Southern Coastal Bliss & Marine Luxury',
    approved: true,
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Alexander Van Der Bilt',
    location: 'Amsterdam, Netherlands',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2026-01-15',
    title: 'Flawless helicopter logistics and zero fatigue',
    text: 'Saving 15 hours of driving by using Joja’s helicopter charters allowed us to experience the entire island in 4 days in pure comfort. Absolute world-class curation.',
    tripTaken: 'Serendib from the Sky: VIP Helicopter Island Tour',
    approved: true,
    verified: true
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Sigiriya Lion Rock at Dawn',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
    location: 'Sigiriya Cultural Triangle',
    caption: 'Ancient 5th-century palace fortress towering over virgin emerald rainforest.'
  },
  {
    id: 'gal-2',
    title: 'Nine Arch Viaduct Bridge',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80',
    location: 'Ella Mountain Pass',
    caption: 'Iconic British colonial stone engineering nestled in misty highland valleys.'
  },
  {
    id: 'gal-3',
    title: 'Sri Lankan Leopard on Granite Outcrop',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80',
    location: 'Yala National Park',
    caption: 'Panthera pardus kotiya basking during our private dusk safari drive.'
  },
  {
    id: 'gal-4',
    title: 'Coconut Tree Hill at Golden Hour',
    category: 'Beaches',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    location: 'Mirissa Bay',
    caption: 'Swaying palms over turquoise Indian Ocean waters on the southern cape.'
  },
  {
    id: 'gal-5',
    title: 'Galle Fort Sunset Ramparts & Lighthouse',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
    location: 'Galle Fort',
    caption: '17th-century coral ramparts framing the Indian Ocean horizon.'
  },
  {
    id: 'gal-6',
    title: 'Ceylon High-Grown Tea Fields',
    category: 'Tea Country',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    location: 'Nuwara Eliya & Hatton',
    caption: 'Manicured tea carpets producing the worlds most coveted single-estate Ceylon teas.'
  },
  {
    id: 'gal-7',
    title: 'Private Pool Villa Overlooking Indian Ocean',
    category: 'Luxury Stays',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    location: 'Bentota & Weligama',
    caption: 'Exclusive cliff-edge plunge pools with personalized butler service.'
  },
  {
    id: 'gal-8',
    title: 'Wild Elephant Herd at Lotus Lagoon',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1588258524675-c61919a3d410?auto=format&fit=crop&w=1200&q=80',
    location: 'Minneriya Sanctuary',
    caption: 'The Great Elephant Gathering – the largest congregational herd in Asia.'
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'book-1001',
    bookingRef: 'JOJA-2026-088',
    createdAt: '2026-08-18T10:30:00Z',
    name: 'Harrison Sterling',
    email: 'harrison.sterling@mayfaircapital.co.uk',
    phone: '+44 7700 900821',
    country: 'United Kingdom',
    destination: 'Sigiriya, Ella & Yala',
    packageId: 'pkg-grand-sri-lanka',
    packageName: 'The Signature 10-Day Ceylon Grand Odyssey',
    travelers: 2,
    travelersDetails: { adults: 2, children: 0 },
    date: '2026-10-15',
    returnDate: '2026-10-25',
    specialRequests: 'Celebrating 10th wedding anniversary. Preference for vintage champagne and private helicopter transfers.',
    status: 'Confirmed',
    totalUSD: 9700,
    currency: 'USD',
    totalConverted: 9700,
    paymentStatus: 'Paid',
    adminNotes: 'VIP client. Assigned Senior Naturalist Rohan and Mercedes S-Class Chauffeur.'
  },
  {
    id: 'book-1002',
    bookingRef: 'JOJA-2026-089',
    createdAt: '2026-08-19T01:15:00Z',
    name: 'Camille Laurent',
    email: 'c.laurent@luxuryparis.fr',
    phone: '+33 6 12 34 56 78',
    country: 'France',
    destination: 'Yala',
    packageId: 'pkg-royal-wildlife',
    packageName: 'Royal Wildlife & Untamed Wilderness Expedition',
    travelers: 4,
    travelersDetails: { adults: 4, children: 0 },
    date: '2026-11-04',
    returnDate: '2026-11-11',
    specialRequests: 'Two interconnected luxury cocoon suites requested at Wild Coast Tented Lodge. High-end photography gear requested.',
    status: 'Pending',
    totalUSD: 14400,
    currency: 'EUR',
    totalConverted: 13248,
    paymentStatus: 'Partially Paid',
    adminNotes: 'Awaiting balance payment. Cocoon suites pre-reserved.'
  },
  {
    id: 'book-1003',
    bookingRef: 'JOJA-2026-090',
    createdAt: '2026-08-19T02:45:00Z',
    name: 'Oliver Thorne',
    email: 'oliver.thorne@sydneyinvest.com.au',
    phone: '+61 412 345 678',
    country: 'Australia',
    destination: 'Galle & Mirissa',
    packageId: 'pkg-southern-coastal-bliss',
    packageName: 'Southern Coastal Bliss & Marine Luxury',
    travelers: 2,
    travelersDetails: { adults: 2, children: 0 },
    date: '2026-12-20',
    returnDate: '2026-12-26',
    specialRequests: 'Private catamaran whale watching charter and sunset champagne cruise in Galle.',
    status: 'Confirmed',
    totalUSD: 5900,
    currency: 'AUD',
    totalConverted: 8968,
    paymentStatus: 'Paid',
    adminNotes: 'Peak holiday season booking. Luxury oceanfront villa confirmed.'
  },
  {
    id: 'book-1004',
    bookingRef: 'JOJA-2026-091',
    createdAt: '2026-08-19T03:00:00Z',
    name: 'Marcus & Elena Richter',
    email: 'richter.architects@berlin-design.de',
    phone: '+49 171 2345678',
    country: 'Germany',
    destination: 'Ella & Nuwara Eliya',
    packageId: 'pkg-highland-tea-retreat',
    packageName: 'Ceylon High Tea, Mist & Mountain Sanctuary',
    travelers: 2,
    travelersDetails: { adults: 2, children: 0 },
    date: '2026-09-10',
    returnDate: '2026-09-15',
    specialRequests: 'Passionate about Geoffrey Bawa and tropical architecture. Requested private architectural escort.',
    status: 'Pending',
    totalUSD: 4900,
    currency: 'EUR',
    totalConverted: 4508,
    paymentStatus: 'Pending',
    adminNotes: 'Sent quote via WhatsApp and email. Follow-up scheduled.'
  }
];

export const INITIAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Why choose Travel With Joja for a luxury Sri Lanka journey?',
    answer: 'Travel With Joja is a premier boutique travel house dedicated exclusively to high-end, tailored Sri Lankan expeditions. We provide private helicopter charters, exclusive access to UNESCO sanctuaries before public opening hours, stays in world-renowned Relais & Châteaux properties, and 24/7 dedicated guest experience concierges.',
    category: 'Planning & Visas'
  },
  {
    id: 'faq-2',
    question: 'How do tourist visas work for visiting Sri Lanka?',
    answer: 'Most international travelers can obtain an Electronic Travel Authorization (ETA) or e-Visa online prior to arrival. Our concierge assists all booked clients with fast-track visa processing guidelines and VIP arrival tarmac clearances.',
    category: 'Planning & Visas'
  },
  {
    id: 'faq-3',
    question: 'What luxury transport options do you provide on the island?',
    answer: 'We operate a dedicated private fleet of executive Mercedes-Benz V-Class, S-Class, and custom-outfitted luxury safari 4x4 Land Cruisers. For fast island-hopping without road fatigue, we provide private Airbus H125 helicopters and chartered Cessna seaplanes connecting coastal lagoons to highland mountain airstrips.',
    category: 'Luxury Transport'
  },
  {
    id: 'faq-4',
    question: 'When is the best time of year to visit Sri Lanka?',
    answer: 'Sri Lanka is a year-round paradise due to its dual monsoon microclimates. From December to April, the South, West Coast, and Cultural Triangle enjoy sunny, calm seas. From May to September, the East Coast and North are idyllic. Our journeys are custom-timed to deliver perfect weather throughout your itinerary.',
    category: 'Weather & Packing'
  },
  {
    id: 'faq-5',
    question: 'Can packages be fully customized for private families or honeymoons?',
    answer: 'Absolutely. Every package shown on our website serves as an architectural blueprint. We personalize every single day—adjusting durations, private villas, dietary requirements, private naturalists, and special celebration dinners.',
    category: 'Booking & Payments'
  },
  {
    id: 'faq-6',
    question: 'What are the payment terms and cancellation policies?',
    answer: 'We accept major international credit cards (Visa, Mastercard, Amex), secure wire transfers, and verified payment gateways. A 30% deposit secures your luxury villas and private chauffeurs, with flexible rescheduling terms up to 30 days prior to departure.',
    category: 'Booking & Payments'
  }
];

export const INITIAL_SETTINGS: SiteSettings = {
  siteName: 'Travel With Joja',
  tagline: 'Luxury Sri Lanka Bespoke Journeys & Private Expeditions',
  whatsappNumber: '+94771234567',
  whatsappGreeting: 'Hello Joja! I would like to inquire about booking a bespoke luxury tour to Sri Lanka.',
  contactEmail: 'concierge@travelwithjoja.com',
  contactPhone: '+94 11 789 4500 / +44 20 8144 9200',
  officeAddress: 'Level 34, World Trade Center, Echelon Square, Colombo 01, Sri Lanka',
  defaultCurrency: 'USD',
  adminEmail: 'admin@travelwithjoja.com',
  currencyRates: {
    USD: 1.0,
    EUR: 0.92,
    GBP: 0.79,
    AUD: 1.52
  }
};
