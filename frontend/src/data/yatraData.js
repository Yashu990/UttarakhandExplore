// Yatra (Journey) Planning Data for Uttrakhand
// Contains destinations, packages, routes, and travel information

export const destinations = [
    // Char Dham - Four Sacred Shrines
    {
        id: 'yamunotri',
        name: 'Yamunotri',
        category: ['pilgrimage', 'char-dham'],
        description: 'Source of the holy river Yamuna, nestled in the Garhwal Himalayas',
        altitude: '3,293m',
        bestTime: ['May', 'June', 'September', 'October'],
        difficulty: 'Moderate',
        duration: '2-3 days',
        image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800',
        coordinates: { lat: 31.0117, lng: 78.4270 },
        highlights: ['Yamunotri Temple', 'Surya Kund', 'Divya Shila', 'Saptrishi Kund Trek'],
        nearestRailway: 'Rishikesh (210 km)',
        nearestAirport: 'Jolly Grant, Dehradun (230 km)'
    },
    {
        id: 'gangotri',
        name: 'Gangotri',
        category: ['pilgrimage', 'char-dham'],
        description: 'Origin of the sacred river Ganga, home to the revered Gangotri Temple',
        altitude: '3,100m',
        bestTime: ['May', 'June', 'September', 'October'],
        difficulty: 'Moderate',
        duration: '2-3 days',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
        coordinates: { lat: 30.9993, lng: 78.9395 },
        highlights: ['Gangotri Temple', 'Gaumukh Glacier', 'Tapovan', 'Bhagirathi Shila'],
        nearestRailway: 'Rishikesh (250 km)',
        nearestAirport: 'Jolly Grant, Dehradun (270 km)'
    },
    {
        id: 'kedarnath',
        name: 'Kedarnath',
        category: ['pilgrimage', 'char-dham'],
        description: 'One of the twelve Jyotirlingas, situated amidst stunning Himalayan peaks',
        altitude: '3,583m',
        bestTime: ['May', 'June', 'September', 'October'],
        difficulty: 'Challenging',
        duration: '3-4 days',
        image: 'https://images.unsplash.com/photo-1605640862933-acae1d3bd1b1?w=800',
        coordinates: { lat: 30.7346, lng: 79.0669 },
        highlights: ['Kedarnath Temple', 'Bhairav Temple', 'Gandhi Sarovar', 'Vasuki Tal'],
        nearestRailway: 'Rishikesh (216 km to Gaurikund)',
        nearestAirport: 'Jolly Grant, Dehradun (239 km to Gaurikund)'
    },
    {
        id: 'badrinath',
        name: 'Badrinath',
        category: ['pilgrimage', 'char-dham'],
        description: 'Holiest of the four Char Dham shrines, dedicated to Lord Vishnu',
        altitude: '3,133m',
        bestTime: ['May', 'June', 'September', 'October'],
        difficulty: 'Moderate',
        duration: '2-3 days',
        image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800',
        coordinates: { lat: 30.7433, lng: 79.4938 },
        highlights: ['Badrinath Temple', 'Tapt Kund', 'Mana Village', 'Vasudhara Falls'],
        nearestRailway: 'Rishikesh (297 km)',
        nearestAirport: 'Jolly Grant, Dehradun (317 km)'
    },

    // Popular Hill Stations
    {
        id: 'mussoorie',
        name: 'Mussoorie',
        category: ['hill-station', 'leisure'],
        description: 'Queen of Hills, famous for its scenic beauty and pleasant weather',
        altitude: '2,005m',
        bestTime: ['March', 'April', 'May', 'June', 'September', 'October', 'November'],
        difficulty: 'Easy',
        duration: '2-3 days',
        image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800',
        coordinates: { lat: 30.4598, lng: 78.0644 },
        highlights: ['Gun Hill', 'Kempty Falls', 'Mall Road', 'Lal Tibba', 'Camel\'s Back Road'],
        nearestRailway: 'Dehradun (34 km)',
        nearestAirport: 'Jolly Grant, Dehradun (60 km)'
    },
    {
        id: 'nainital',
        name: 'Nainital',
        category: ['hill-station', 'leisure'],
        description: 'Charming lake town surrounded by mountains, perfect for family vacations',
        altitude: '2,084m',
        bestTime: ['March', 'April', 'May', 'June', 'September', 'October', 'November'],
        difficulty: 'Easy',
        duration: '2-3 days',
        image: 'https://images.unsplash.com/photo-1605640840078-ef2e0338ed0e?w=800',
        coordinates: { lat: 29.3803, lng: 79.4636 },
        highlights: ['Naini Lake', 'Naina Devi Temple', 'Mall Road', 'Snow View Point', 'Tiffin Top'],
        nearestRailway: 'Kathgodam (35 km)',
        nearestAirport: 'Pantnagar (70 km)'
    },
    {
        id: 'ranikhet',
        name: 'Ranikhet',
        category: ['hill-station', 'leisure'],
        description: 'Peaceful hill station with panoramic Himalayan views and colonial charm',
        altitude: '1,869m',
        bestTime: ['March', 'April', 'May', 'June', 'September', 'October', 'November'],
        difficulty: 'Easy',
        duration: '2 days',
        image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800',
        coordinates: { lat: 29.6391, lng: 79.4320 },
        highlights: ['Chaubatia Gardens', 'Jhula Devi Temple', 'Majkhali', 'Golf Course'],
        nearestRailway: 'Kathgodam (80 km)',
        nearestAirport: 'Pantnagar (110 km)'
    },

    // Adventure Destinations
    {
        id: 'rishikesh',
        name: 'Rishikesh',
        category: ['adventure', 'pilgrimage', 'leisure'],
        description: 'Yoga capital of the world and adventure sports hub on the banks of Ganga',
        altitude: '372m',
        bestTime: ['February', 'March', 'April', 'May', 'September', 'October', 'November'],
        difficulty: 'Easy to Moderate',
        duration: '2-4 days',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
        coordinates: { lat: 30.0869, lng: 78.2676 },
        highlights: ['Laxman Jhula', 'Ram Jhula', 'River Rafting', 'Bungee Jumping', 'Beatles Ashram', 'Ganga Aarti'],
        nearestRailway: 'Rishikesh (0 km)',
        nearestAirport: 'Jolly Grant, Dehradun (20 km)'
    },
    {
        id: 'auli',
        name: 'Auli',
        category: ['adventure', 'hill-station'],
        description: 'Premier ski destination with breathtaking views of Nanda Devi',
        altitude: '2,800m',
        bestTime: ['December', 'January', 'February', 'March'],
        difficulty: 'Moderate',
        duration: '3-4 days',
        image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800',
        coordinates: { lat: 30.5233, lng: 79.5692 },
        highlights: ['Skiing', 'Cable Car Ride', 'Nanda Devi Views', 'Artificial Lake', 'Gurso Bugyal'],
        nearestRailway: 'Rishikesh (273 km)',
        nearestAirport: 'Jolly Grant, Dehradun (286 km)'
    },

    // Hidden Gems
    {
        id: 'chopta',
        name: 'Chopta',
        category: ['adventure', 'offbeat'],
        description: 'Mini Switzerland of India, base for Tungnath and Chandrashila trek',
        altitude: '2,680m',
        bestTime: ['April', 'May', 'June', 'September', 'October', 'November'],
        difficulty: 'Moderate',
        duration: '2-3 days',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
        coordinates: { lat: 30.4700, lng: 79.0300 },
        highlights: ['Tungnath Temple Trek', 'Chandrashila Summit', 'Deoria Tal', 'Bird Watching'],
        nearestRailway: 'Rishikesh (162 km)',
        nearestAirport: 'Jolly Grant, Dehradun (221 km)'
    },
    {
        id: 'munsiyari',
        name: 'Munsiyari',
        category: ['offbeat', 'adventure'],
        description: 'Little Kashmir with stunning views of Panchachuli peaks',
        altitude: '2,298m',
        bestTime: ['April', 'May', 'June', 'September', 'October'],
        difficulty: 'Moderate',
        duration: '3-4 days',
        image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800',
        coordinates: { lat: 30.0676, lng: 80.2382 },
        highlights: ['Panchachuli Views', 'Khaliya Top', 'Birthi Falls', 'Maheshwari Kund'],
        nearestRailway: 'Kathgodam (275 km)',
        nearestAirport: 'Pantnagar (313 km)'
    },

    // Wildlife & Nature
    {
        id: 'jim-corbett',
        name: 'Jim Corbett National Park',
        category: ['wildlife', 'leisure'],
        description: "India's oldest national park, famous for Bengal tigers",
        altitude: '400-1,200m',
        bestTime: ['November', 'December', 'January', 'February', 'March', 'April', 'May', 'June'],
        difficulty: 'Easy',
        duration: '2-3 days',
        image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800',
        coordinates: { lat: 29.5308, lng: 78.7716 },
        highlights: ['Tiger Safari', 'Elephant Safari', 'Bird Watching', 'Corbett Falls', 'Garjiya Devi Temple'],
        nearestRailway: 'Ramnagar (12 km)',
        nearestAirport: 'Pantnagar (85 km)'
    }
];

export const packages = [
    {
        id: 'char-dham-complete',
        name: 'Complete Char Dham Yatra',
        type: 'Pilgrimage',
        duration: '10-12 days',
        destinations: ['yamunotri', 'gangotri', 'kedarnath', 'badrinath'],
        estimatedCost: {
            budget: '₹25,000 - ₹35,000',
            midRange: '₹40,000 - ₹55,000',
            premium: '₹70,000 - ₹1,00,000'
        },
        difficulty: 'Challenging',
        bestTime: ['May', 'June', 'September', 'October'],
        highlights: [
            'Visit all four sacred dhams',
            'Complete spiritual circuit',
            'Himalayan darshan',
            'Sacred river origins'
        ],
        image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800',
        itinerary: [
            { day: 1, title: 'Haridwar/Rishikesh to Barkot', activities: ['Travel', 'Overnight stay'] },
            { day: 2, title: 'Yamunotri Temple Visit', activities: ['Trek to Yamunotri', 'Temple darshan', 'Return'] },
            { day: 3, title: 'Barkot to Uttarkashi', activities: ['Travel', 'Visit Vishwanath Temple'] },
            { day: 4, title: 'Gangotri Temple Visit', activities: ['Visit Gangotri', 'Ganga darshan'] },
            { day: 5, title: 'Uttarkashi to Guptkashi', activities: ['Travel', 'Rest'] },
            { day: 6, title: 'Kedarnath Temple Visit', activities: ['Trek/Helicopter to Kedarnath', 'Temple darshan'] },
            { day: 7, title: 'Kedarnath to Guptkashi', activities: ['Return trek', 'Rest'] },
            { day: 8, title: 'Guptkashi to Badrinath', activities: ['Travel via Joshimath'] },
            { day: 9, title: 'Badrinath Darshan', activities: ['Temple visit', 'Mana village', 'Tapt Kund'] },
            { day: 10, title: 'Return Journey', activities: ['Travel back to Rishikesh/Haridwar'] }
        ]
    },
    {
        id: 'do-dham-kedarnath-badrinath',
        name: 'Do Dham - Kedarnath & Badrinath',
        type: 'Pilgrimage',
        duration: '6-7 days',
        destinations: ['kedarnath', 'badrinath'],
        estimatedCost: {
            budget: '₹15,000 - ₹22,000',
            midRange: '₹25,000 - ₹35,000',
            premium: '₹45,000 - ₹60,000'
        },
        difficulty: 'Moderate to Challenging',
        bestTime: ['May', 'June', 'September', 'October'],
        highlights: [
            'Visit two major Char Dhams',
            'Shorter duration pilgrimage',
            'Jyotirlinga darshan at Kedarnath',
            'Vishnu temple at Badrinath'
        ],
        image: 'https://images.unsplash.com/photo-1605640862933-acae1d3bd1b1?w=800'
    },
    {
        id: 'weekend-mussoorie-nainital',
        name: 'Hill Station Weekend - Mussoorie & Nainital',
        type: 'Leisure',
        duration: '3-4 days',
        destinations: ['mussoorie', 'nainital'],
        estimatedCost: {
            budget: '₹8,000 - ₹12,000',
            midRange: '₹15,000 - ₹22,000',
            premium: '₹30,000 - ₹45,000'
        },
        difficulty: 'Easy',
        bestTime: ['March', 'April', 'May', 'June', 'September', 'October', 'November'],
        highlights: [
            'Quick weekend getaway',
            'Two popular hill stations',
            'Pleasant weather',
            'Family friendly'
        ],
        image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800'
    },
    {
        id: 'adventure-rishikesh-auli',
        name: 'Adventure Special - Rishikesh & Auli',
        type: 'Adventure',
        duration: '5-6 days',
        destinations: ['rishikesh', 'auli'],
        estimatedCost: {
            budget: '₹12,000 - ₹18,000',
            midRange: '₹20,000 - ₹30,000',
            premium: '₹40,000 - ₹55,000'
        },
        difficulty: 'Moderate',
        bestTime: ['December', 'January', 'February', 'March'],
        highlights: [
            'River rafting in Rishikesh',
            'Skiing in Auli',
            'Bungee jumping',
            'Cable car ride'
        ],
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800'
    },
    {
        id: 'wildlife-corbett',
        name: 'Wildlife Safari - Jim Corbett',
        type: 'Wildlife',
        duration: '2-3 days',
        destinations: ['jim-corbett'],
        estimatedCost: {
            budget: '₹6,000 - ₹10,000',
            midRange: '₹12,000 - ₹18,000',
            premium: '₹25,000 - ₹40,000'
        },
        difficulty: 'Easy',
        bestTime: ['November', 'December', 'January', 'February', 'March', 'April', 'May'],
        highlights: [
            'Tiger spotting',
            'Jeep safari',
            'Elephant safari',
            'Bird watching'
        ],
        image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800'
    },
    {
        id: 'offbeat-chopta-munsiyari',
        name: 'Offbeat Gems - Chopta & Munsiyari',
        type: 'Offbeat',
        duration: '5-6 days',
        destinations: ['chopta', 'munsiyari'],
        estimatedCost: {
            budget: '₹10,000 - ₹15,000',
            midRange: '₹18,000 - ₹25,000',
            premium: '₹35,000 - ₹50,000'
        },
        difficulty: 'Moderate to Challenging',
        bestTime: ['April', 'May', 'June', 'September', 'October'],
        highlights: [
            'Tungnath trek',
            'Panchachuli views',
            'Unspoiled nature',
            'Photography paradise'
        ],
        image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800'
    }
];

export const transportOptions = [
    {
        mode: 'By Road (Private Car/Taxi)',
        description: 'Most flexible and convenient option for Char Dham Yatra',
        pros: ['Flexible schedule', 'Comfortable', 'Can stop anywhere', 'Direct routes'],
        cons: ['Expensive', 'Driver dependent', 'Mountain driving can be tiring'],
        estimatedCost: '₹15-25 per km',
        recommendedFor: ['Families', 'Elderly', 'Premium travelers']
    },
    {
        mode: 'By Bus (UPSRTC/Private)',
        description: 'Budget-friendly option with regular services',
        pros: ['Economical', 'Regular services', 'Safe', 'No driving stress'],
        cons: ['Fixed schedules', 'Less comfortable', 'Crowded during peak season'],
        estimatedCost: '₹500-1500 per person per journey',
        recommendedFor: ['Budget travelers', 'Solo travelers', 'Young couples']
    },
    {
        mode: 'By Train + Road',
        description: 'Reach major railway stations then continue by road',
        pros: ['Economical', 'Comfortable train journey', 'Scenic routes'],
        cons: ['Limited railway connectivity', 'Need road transport from stations'],
        estimatedCost: '₹500-2000 (train) + road transfer',
        recommendedFor: ['All types of travelers'],
        majorStations: ['Rishikesh', 'Haridwar', 'Kathgodam', 'Dehradun']
    },
    {
        mode: 'By Air + Road',
        description: 'Fastest way to reach Uttarakhand',
        pros: ['Fast', 'Saves time', 'Comfortable'],
        cons: ['Expensive', 'Limited airports', 'Still need road transport'],
        estimatedCost: '₹5,000-15,000 (flight) + road transfer',
        recommendedFor: ['Time-constrained travelers', 'Premium travelers'],
        airports: ['Jolly Grant (Dehradun)', 'Pantnagar']
    },
    {
        mode: 'Helicopter Services',
        description: 'Available for Char Dham Yatra during season',
        pros: ['Very fast', 'Skip long treks', 'Aerial views', 'Ideal for elderly'],
        cons: ['Very expensive', 'Weather dependent', 'Weight limits', 'Limited availability'],
        estimatedCost: '₹1,50,000-3,00,000 per person (full package)',
        recommendedFor: ['Premium travelers', 'Elderly', 'Limited mobility'],
        routes: ['Kedarnath', 'Badrinath', 'Yamunotri', 'Gangotri']
    }
];

export const accommodationTypes = [
    {
        type: 'Budget',
        description: 'Dharamshalas, guesthouses, and budget hotels',
        priceRange: '₹300-800 per night',
        facilities: ['Basic rooms', 'Shared bathrooms (some)', 'Simple meals'],
        examples: ['GMVN guesthouses', 'Temple dharamshalas', 'Local lodges'],
        bookingAdvice: 'Book in advance during peak season'
    },
    {
        type: 'Mid-Range',
        description: 'Comfortable hotels with good facilities',
        priceRange: '₹1,500-3,500 per night',
        facilities: ['Private bathrooms', 'Hot water', 'TV', 'Restaurant', 'Room service'],
        examples: ['3-star hotels', 'Boutique hotels', 'Resorts'],
        bookingAdvice: 'Book 2-3 months in advance for peak season'
    },
    {
        type: 'Premium',
        description: 'Luxury hotels and resorts with all amenities',
        priceRange: '₹5,000-15,000+ per night',
        facilities: ['Luxury rooms', 'Spa', 'Multi-cuisine dining', 'Activities', 'Concierge'],
        examples: ['5-star hotels', 'Heritage properties', 'Luxury resorts'],
        bookingAdvice: 'Book 3-6 months in advance'
    }
];

export const travelTips = [
    {
        category: 'Health & Safety',
        tips: [
            'Carry altitude sickness medication',
            'Stay hydrated, avoid alcohol at high altitudes',
            'Carry basic first aid kit',
            'Get travel insurance',
            'Acclimatize properly before trekking'
        ]
    },
    {
        category: 'What to Pack',
        tips: [
            'Warm clothes even in summer',
            'Rain gear (monsoon season)',
            'Comfortable walking shoes',
            'Sunscreen and sunglasses',
            'Power bank and chargers',
            'Torch/flashlight',
            'Personal medications'
        ]
    },
    {
        category: 'Money Matters',
        tips: [
            'Carry sufficient cash (ATMs limited in remote areas)',
            'Keep small denominations',
            'UPI may not work everywhere',
            'Budget extra for emergencies'
        ]
    },
    {
        category: 'Best Practices',
        tips: [
            'Start early in the morning',
            'Respect local customs and temples',
            'Don\'t litter - keep mountains clean',
            'Book accommodations in advance',
            'Check weather forecasts',
            'Inform family about your itinerary',
            'Hire local guides for treks'
        ]
    }
];

export const budgetBreakdown = {
    transport: 0.35, // 35%
    accommodation: 0.30, // 30%
    food: 0.20, // 20%
    activities: 0.10, // 10%
    miscellaneous: 0.05 // 5%
};

export const seasonalInfo = {
    summer: {
        months: ['March', 'April', 'May', 'June'],
        description: 'Best time for Char Dham Yatra and hill stations',
        temperature: '15°C - 30°C',
        pros: ['Pleasant weather', 'Clear skies', 'All routes open'],
        cons: ['Peak season crowds', 'Higher prices']
    },
    monsoon: {
        months: ['July', 'August'],
        description: 'Rainy season - travel not recommended',
        temperature: '20°C - 25°C',
        pros: ['Lush greenery', 'Fewer tourists', 'Lower prices'],
        cons: ['Landslides risk', 'Roads may be blocked', 'Char Dham closed']
    },
    autumn: {
        months: ['September', 'October', 'November'],
        description: 'Excellent time for travel, clear views',
        temperature: '10°C - 25°C',
        pros: ['Clear mountain views', 'Pleasant weather', 'Post-monsoon freshness'],
        cons: ['Some high-altitude areas may close by late November']
    },
    winter: {
        months: ['December', 'January', 'February'],
        description: 'Cold weather, ideal for snow activities',
        temperature: '-5°C - 15°C',
        pros: ['Snowfall', 'Skiing in Auli', 'Offseason discounts'],
        cons: ['Char Dham closed', 'Heavy snowfall may block roads', 'Very cold']
    }
};
