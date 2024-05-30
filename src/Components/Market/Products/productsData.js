import arnica from './Assets/arnica.png';
import bands from './Assets/bands.png';
import BCAA from './Assets/BCAA.png';
import blocks from './Assets/blocks.png';
import carpet from './Assets/carpet.png';
import cooling from './Assets/coolinggel.png';
import detoxOne from './Assets/detoxOne.png';
import detoxTwo from './Assets/detoxTwo.png';
import glutamine from './Assets/glutamine.png';
import heatcream from './Assets/heatcream.png';
import herbal from './Assets/herbal.png';
import jump from './Assets/jump.png';
import massage from './Assets/massage.png';
import mineral from './Assets/mineral.png';
import omega from './Assets/omega.png';
import protein from './Assets/protein.png';
import sportbalm from './Assets/sportbalm.png';
import vitamins from './Assets/vitamins.png';

export const productsData = [
    {
        id: 1,
        description: ["High Concentration of Omega-3: Each capsule contains 1000 mg of highly purified fish oil with 500 mg of EPA (eicosapentaenoic acid) and 250 mg of DHA (docosahexaenoic acid).", "High Quality: Produced using molecular distillation to remove impurities and ensure product purity.", "Convenience: The product is available in soft gel capsules that are easy to swallow and do not cause an unpleasant fishy aftertaste.", "Free from Additives: Contains no GMOs, gluten, soy, or artificial preservatives.", "Suitable for All: Safe for people with various dietary preferences and restrictions."],
        image: omega,
        title: "Omega",
        category: "NUTRITION",
        name: "Omega 3",
        intro: "Is a premium source of Omega-3 fatty acids, specifically designed for active individuals and athletes. Our product helps maintain heart, brain, and joint health, which is especially important for those who lead an active lifestyle and exercise regularly.",
        extraInfo: ["OmegaPower 3 is packs of 120 capsules.", "Take 1-2 capsules daily with meals or as recommended by your healthcare provider. For best results, use regularly."],
        price: 29.99
    },

    {
        id: 2,
        description: ["Complete Nutrient Profile: Contains 25 essential vitamins and minerals, including vitamins A, C, D, E, B-complex, calcium, magnesium, and zinc.", "Enhanced Absorption: Formulated with bioavailable forms of nutrients to ensure maximum absorption and efficacy.", "Antioxidant Support: Includes potent antioxidants such as vitamin C, vitamin E, and selenium to protect against oxidative stress and support immune health.", "Energy and Metabolism Boost: B-complex vitamins and magnesium help convert food into energy, supporting metabolism and reducing fatigue.", "Joint and Bone Health: Calcium, vitamin D, and magnesium work together to promote strong bones and joint health, essential for active individuals."],
        image: mineral,
        title: "Vitamin",
        category: "NUTRITION",
        name: "Vitamin complex",
        intro: "VitaMax Performance is a comprehensive multivitamin and mineral supplement specifically formulated for athletes and active individuals. This premium blend of essential vitamins and minerals supports optimal performance, energy levels, and recovery, helping you achieve your fitness goals.",
        extraInfo: ["VitaMax Performance is available in bottles of 90 capsules, providing a one-month or two-month supply respectively.", "Take 2 capsules daily with meals or as directed by your healthcare provider. For best results, use consistently as part of a balanced diet and regular exercise routine."],
        price: 25.99
    },

    {
        id: 3,
        description: ["Full Spectrum of Essential Minerals: Contains 15 essential minerals including magnesium, calcium, potassium, zinc, iron, and selenium.", "Chelated Minerals: Uses chelated minerals for superior absorption and bioavailability.", "Electrolyte Support: Includes potassium, magnesium, and calcium to maintain electrolyte balance and prevent muscle cramps.", "Bone and Muscle Health: Provides critical minerals for bone density and muscle function, supporting active lifestyles.", "Immune and Antioxidant Support: Zinc and selenium contribute to a healthy immune system and protect against oxidative damage."],
        image: vitamins,
        title: "Mineral",
        category: "NUTRITION",
        name: "Mineral Complex",
        intro: "Is a high-quality mineral supplement designed to support the nutritional needs of active individuals. This balanced formula provides a comprehensive array of essential minerals that promote optimal health, energy production, and muscle function.",
        extraInfo: ["MineralBalance Complete is available in bottles of 30 tablets, offering a one-month supply.", "Take 2 tablets daily with meals or as directed by your healthcare provider. Consistent use as part of a healthy diet and exercise program will yield the best results."],
        price: 19.99
    },

    {
        id: 4,
        description: ["Optimal BCAA Ratio: Contains a precise 2:1:1 ratio of leucine, isoleucine, and valine, the most effective combination for muscle protein synthesis.", "Enhanced Absorption: Includes added electrolytes for improved hydration and faster nutrient delivery.", "Sugar-Free: Formulated without added sugars or artificial sweeteners, ensuring a clean, healthy supplement.", "Great Tasting Flavors: Available in delicious flavors like Tropical Punch and Blue Raspberry, making it a pleasure to consume.", "Non-GMO and Gluten-Free: Suitable for various dietary needs and restrictions."],
        image: BCAA,
        title: "BCAA",
        category: "NUTRITION",
        name: "BCAA Elite Formula",
        intro: "Is a high-performance branched-chain amino acid (BCAA) supplement designed to support muscle recovery, enhance endurance, and reduce fatigue. This advanced blend of essential amino acids helps you push harder and recover faster, making it a must-have for serious athletes and fitness enthusiasts.",
        extraInfo: ["BCAA Elite Formula is available in containers of 60 servings.", "Mix one scoop (10g) with 8-10 oz of water and consume before, during, or after your workout. For best results, use daily as part of your fitness routine."],
        price: 34.99
    },

    {
        id: 5,
        description: ["Pure L-Glutamine: Contains 5000 mg of pure, high-quality L-glutamine per serving for optimal effectiveness.", "Rapid Absorption: Micronized for faster absorption and utilization by the body.", "Unflavored and Versatile: Easily mixes into any beverage or protein shake without altering the taste.", "No Fillers or Additives: Free from artificial colors, flavors, and preservatives, ensuring a clean supplement.", "Vegan-Friendly: Suitable for vegans and vegetarians."],
        image: glutamine,
        title: "GlutamineRecovery",
        category: "NUTRITION",
        name: "Glutamine Recovery Pro",
        intro: "Is a premium glutamine supplement formulated to support muscle recovery, boost immune function, and promote overall gut health. This essential amino acid plays a critical role in muscle repair and immune response, making it an essential addition to any fitness regimen.",
        extraInfo: ["Glutamine Recovery Pro is available in containers of 60 servings, providing a one-month supply.", "Mix one scoop (5g) with 8-10 oz of water or your favorite beverage and consume after workouts or before bed. For best results, use consistently as part of your daily nutrition plan."],
        price: 27.99
    },

    {
        id: 6,
        description: ["High Protein Content: Each serving delivers 25 grams of pure whey protein isolate and concentrate, providing essential amino acids for muscle repair and growth.", "Fast Absorption: Whey protein is quickly absorbed by the body, making it ideal for post-workout recovery.", "Delicious Flavors: Available in a variety of delicious flavors such as Chocolate Fudge, Vanilla Bean, and Strawberry Cream.", "Low in Fat and Carbs: Formulated to be low in fat and carbohydrates, supporting lean muscle development without excess calories.", "No Artificial Additives: Free from artificial flavors, colors, and sweeteners, ensuring a clean and natural supplement."],
        image: protein,
        title: "ProPower",
        category: "NUTRITION",
        name: "Whey Protein",
        intro: "Is a high-quality protein supplement designed to support muscle growth, recovery, and overall performance. Made from premium whey protein, this formula provides a complete amino acid profile essential for athletes and fitness enthusiasts striving to achieve their goals.",
        extraInfo: ["ProPower Whey Protein is available in tubs of 5 lbs.", "Mix one scoop (30g) with 8-10 oz of water or your preferred beverage. Consume immediately after workouts or as a protein-rich snack throughout the day. For best results, use as part of a balanced diet and regular exercise program."],
        price: 39.99
    },

    {
        id: 7,
        description: ["Warming Formula: Contains capsaicin and menthol to create a warming sensation.", "Pain Relief: Effectively reduces pain and discomfort in muscles and joints.", "Fast-Acting: Quickly penetrates the skin to deliver immediate relief.", "Non-Greasy: Smooth, non-greasy texture that absorbs easily.", "No Artificial Additives: Free from parabens, artificial colors, and fragrances."],
        image: heatcream,
        title: "DeepRelief",
        category: "RECOVERING",
        name: "Heat Cream",
        intro: "Is a warming cream formulated to provide deep, penetrating heat therapy to sore and stiff muscles. This cream helps increase blood flow and relax muscles, making it perfect for pre-workout warm-ups or post-workout recovery.",
        extraInfo: ["DeepRelief Heat Cream is available in 100g tubes.", "Apply a small amount to the affected area and massage gently until fully absorbed. Use before physical activity to warm up muscles or after to relieve soreness."],
        price: 17.99
    },

    {
        id: 8,
        description: ["Natural Arnica Extract: Contains high-quality arnica montana for natural healing.", "Non-Greasy Formula: Light gel that absorbs quickly without leaving a sticky residue.", "Fragrance-Free: Free from artificial fragrances, making it suitable for sensitive skin.", "Anti-inflammatory: Reduces inflammation and helps heal bruises faster.", "Homeopathic: Safe and natural with no harmful chemicals or additives."],
        image: arnica,
        title: "Arnica",
        category: "RECOVERING",
        name: "Absolute Arnica Gel",
        intro: "Is a natural remedy designed to reduce bruising, swelling, and muscle pain. This homeopathic gel harnesses the power of arnica to provide effective relief for athletes and active individuals.",
        extraInfo: ["ActiveRevive Arnica Gel is available in 4 oz tubes.", "Apply a thin layer to the affected area and gently massage until absorbed. Use as needed for relief from bruising, swelling, and muscle pain."],
        price: 15.99
    },

    {
        id: 9,
        description: ["Natural Ingredients: Contains a blend of essential oils like eucalyptus, lavender, and peppermint, combined with carrier oils such as jojoba and sweet almond oil.", "Fast Absorption: Non-greasy formula that absorbs quickly, leaving the skin soft and moisturized.", "Soothing Scent: Pleasant, calming aroma that enhances the massage experience.", "Anti-inflammatory Properties: Reduces inflammation and alleviates muscle soreness.", "Paraben-Free: Free from parabens and synthetic additives, making it safe for all skin types."],
        image: massage,
        title: "MuscleMassageOil",
        category: "RECOVERING",
        name: "Muscle Massage Oil",
        intro: "Is a premium blend of natural oils designed to soothe sore muscles and promote relaxation. Perfect for post-workout recovery, this massage oil penetrates deep into the skin, providing long-lasting relief and nourishment.",
        extraInfo: ["MuscleEase Massage Oil is available in 200ml with a convenient pump dispenser.", "Apply a generous amount to the affected area and massage gently until fully absorbed. Use after workouts or whenever needed for relief."],
        price: 18.99
    },

    {
        id: 10,
        description: ["High-Strength Formula: Contains potent ingredients like menthol, camphor, and arnica for maximum pain relief.", "Quick-Acting: Provides fast, targeted relief for sore muscles and joints.", "Warming Effect: Creates a warming sensation that helps soothe and relax muscles.", "Non-Greasy: Absorbs quickly without leaving a greasy residue.", "Compact Packaging: Easy-to-carry tin, perfect for on-the-go use."],
        image: sportbalm,
        title: "FlexiRelief",
        category: "RECOVERING",
        name: "FlexiRelief Sports Balm",
        intro: "Is a powerful balm designed to provide immediate relief from muscle and joint pain. Formulated for athletes and active individuals, this balm penetrates deep to target pain at the source.",
        extraInfo: ["FlexiRelief Sports Balm is available in 50ml tins.", "Apply a small amount to the affected area and massage until fully absorbed. Use before or after physical activity to manage pain and prevent soreness."],
        price: 14.99
    },

    {
        id: 11,
        description: ["Cooling Ingredients: Infused with menthol and aloe vera for a soothing, cooling effect.", "Anti-inflammatory: Contains ingredients like arnica and witch hazel to reduce inflammation.", "Non-Sticky: Lightweight, non-sticky formula that absorbs quickly.", "Paraben-Free: Free from parabens, sulfates, and artificial colors.", "Hydrating: Moisturizes the skin while providing relief."],
        image: cooling,
        title: "RecoveryPlus",
        category: "RECOVERING",
        name: "RecoveryPlus Cooling Gel",
        intro: "Is a refreshing gel designed to provide instant cooling relief to tired and overworked muscles. Ideal for use after intense workouts, this gel helps reduce inflammation and speeds up recovery.",
        extraInfo: ["RecoveryPlus Cooling Gel is available in 500g cans.", "Apply generously to the affected area and gently massage until absorbed. Use after physical activity or as needed for cooling relief."],
        price: 15.99
    },

    {
        id: 12,
        description: ["Natural Ingredients: Contains a mix of dandelion root, ginger, licorice root, and peppermint, known for their detoxifying properties.", "Supports Digestion: Helps improve digestive function and reduce bloating.", "Boosts Energy: Naturally enhances energy levels without the need for caffeine.", "Delicious Flavor: A refreshing and soothing taste that can be enjoyed hot or cold.", "Non-GMO and Caffeine-Free: Free from genetically modified organisms and caffeine, suitable for any time of day."],
        image: herbal,
        title: "PureDetox",
        category: "DETOX",
        name: "PureDetox Herbal Tea",
        intro: "Is a natural blend of herbs designed to cleanse the body and promote overall wellness. This detox tea helps eliminate toxins, improve digestion, and boost energy levels, making it an ideal addition to your daily routine.",
        extraInfo: ["PureDetox Herbal Tea is available in boxes of 20 tea bags.", "Steep one tea bag in 8 oz of hot water for 5-7 minutes. Enjoy daily, preferably in the morning or evening, as part of your detox regimen."],
        price: 12.99
    },

    {
        id: 13,
        description: ["Weight Management: Contains ingredients like green tea, lemongrass, and hibiscus that help boost metabolism and support weight loss.", "Reduces Water Retention: Helps eliminate excess water weight, reducing bloating and puffiness.", "Natural Detox: A blend of cleansing herbs such as nettle leaf and burdock root to support liver function and detoxification.", "Refreshing Taste: A delightful and invigorating flavor that makes detoxing enjoyable.", "Gluten-Free and Vegan: Suitable for various dietary needs and preferences."],
        image: detoxOne,
        title: "SlimCleanse",
        category: "DETOX",
        name: "SlimCleanse Detox Tea",
        intro: "Is specially formulated to support weight management and detoxification. This blend of natural ingredients helps reduce water retention, boost metabolism, and cleanse the digestive system, aiding in a healthier, slimmer physique.",
        extraInfo: ["SlimCleanse Detox Tea is available in boxes of 20 tea bags.", "Steep one tea bag in 8 oz of hot water for 5-7 minutes. Drink daily, preferably before meals, to support your weight management goals."],
        price: 14.99
    },

    {
        id: 14,
        description: ["Liver Support: Contains milk thistle and turmeric, known for their liver-cleansing properties.", "Immune Boosting: Includes echinacea and elderberry to strengthen the immune system.", "Energy Enhancing: Ginseng and matcha provide a natural energy boost and improve mental clarity.", "Antioxidant-Rich: Packed with antioxidants to combat free radicals and promote overall health.", "Organic and Non-GMO: Made with organic, non-GMO ingredients for a pure detox experience."],
        image: detoxTwo,
        title: "VitalBoost",
        category: "DETOX",
        name: "VitalBoost Detox Tea",
        intro: "Is a revitalizing blend of herbs that helps enhance the body's natural detoxification processes. This tea supports liver health, boosts immunity, and increases vitality, making it perfect for those seeking a comprehensive detox solution.",
        extraInfo: ["VitalBoost Detox Tea is available in boxes of 20 tea bags.", "Steep one tea bag in 8 oz of hot water for 5-7 minutes. Enjoy daily, preferably in the morning, to start your day with a detox boost."],
        price: 16.99
    },

    {
        id: 15,
        description: ["Versatile Resistance Levels: Includes five bands with varying resistance levels: Extra Light, Light, Medium, Heavy, and Extra Heavy.", "Durable Material: Made from high-quality, natural latex that is built to last and withstand intense workouts.", "Portable and Lightweight: Compact and easy to carry, making them ideal for home workouts, gym sessions, and travel.", "Non-Slip Design: Textured surface ensures a secure grip during exercises, preventing slipping and rolling.", "Comprehensive Workout Guide: Comes with a detailed exercise guide to help you get the most out of your resistance bands."],
        image: bands,
        title: "FlexFit",
        category: "EQUIPMENT",
        name: "FlexFit Resistance Bands Set",
        intro: "Is a comprehensive collection of high-quality resistance bands designed to enhance your strength training and fitness routines. These bands come in varying levels of resistance, making them perfect for athletes of all fitness levels. Use them for a wide range of exercises, including strength training, physical therapy, and mobility work.",
        extraInfo: ["FlexFit Resistance Bands Set includes seven bands of varying resistance, a carrying pouch, and an exercise guide, all packaged in a compact box.", "Incorporate FlexFit Resistance Bands into your workout routine for strength training, stretching, or rehabilitation exercises. Use the included workout guide for ideas on how to effectively use each band."],
        price: 29.99
    },

    {
        id: 16,
        description: ["Superior Grip: Non-slip surface ensures a secure grip, even during sweaty sessions.", "Eco-Friendly Materials: Made from natural rubber and TPE (thermoplastic elastomers), free from PVC, latex, and harmful chemicals.", "Extra Cushioning: 6mm thickness provides optimal comfort and joint protection.", "Durable Construction: Built to withstand regular use without tearing or fading.", "Easy to Clean: Water-resistant and easy to wipe clean with a damp cloth."],
        image: carpet,
        title: "ZenGrip",
        category: "EQUIPMENT",
        name: "ZenGrip Yoga Mat",
        intro: "Is a high-quality, eco-friendly yoga mat designed to provide superior comfort and grip during your yoga practice. Made from sustainable materials, this mat is perfect for yogis of all levels, offering a stable and cushioned surface for all types of yoga and Pilates exercises.",
        extraInfo: ["ZenGrip Yoga Mat is available in various colors and comes with a carrying strap for easy transportation. Packaged in an eco-friendly box.", "Unroll the ZenGrip Yoga Mat on a flat surface. Use it for yoga, Pilates, or any floor exercises. Clean with a damp cloth after each use to maintain its longevity."],
        price: 39.99
    },

    {
        id: 17,
        description: ["High-Density Foam: Made from premium EVA foam, ensuring durability and firm support.", "Non-Slip Surface: Textured surface provides a secure grip, preventing slipping during use.", "Lightweight and Portable: Easy to carry and store, perfect for home, studio, or travel use.", "Versatile Use: Ideal for beginners and advanced yogis to assist with balance, flexibility, and alignment.", "Set of Two: Comes with two blocks, allowing for versatile use and various poses."],
        image: blocks,
        title: "AlignPro",
        category: "EQUIPMENT",
        name: "AlignPro Yoga Blocks Set",
        intro: "Is an essential tool for enhancing your yoga practice. These high-density foam blocks provide stability and support for a wide range of poses, helping you achieve better alignment and deeper stretches.",
        extraInfo: ["AlignPro Yoga Blocks Set includes two blocks, each measuring 9 x 6 x 4 inches. Available in multiple colors and packaged in a recyclable box.", "Use AlignPro Yoga Blocks during your yoga practice to support and modify poses. Place the blocks under your hands, feet, or seat to enhance stability and alignment."],
        price: 19.99
    },

    {
        id: 18,
        description: ["Adjustable Length: Easily adjustable up to 10 feet, making it suitable for users of all heights.", "High-Speed Ball Bearings: Equipped with high-speed ball bearings for smooth and fast rotations, ideal for double-unders and speed jumping.", "Durable Cable: Made from durable, tangle-free steel wire coated with PVC for added longevity and safety.", "Ergonomic Handles: Lightweight, anti-slip handles designed for maximum comfort and grip during intense workouts.", "Portable and Lightweight: Compact design makes it easy to carry, perfect for home, gym, or outdoor use."],
        image: jump,
        title: "SpeedMaster",
        category: "EQUIPMENT",
        name: "SpeedMaster Jump Rope",
        intro: "Is a premium quality jump rope designed for high-intensity workouts and speed training. Whether you're a beginner or a seasoned athlete, this jump rope provides the perfect blend of speed, durability, and comfort to help you achieve your fitness goals.",
        extraInfo: ["SpeedMaster Jump Rope comes with a convenient carrying pouch and an instruction manual for easy adjustment and use. Packaged in an attractive, eco-friendly box, making it an ideal gift for fitness enthusiasts.", "Adjust the length of the SpeedMaster Jump Rope by loosening the screws at the handles, cutting the excess cable, and re-tightening the screws. Use it for warm-ups, cardio sessions, or as part of your interval training routine. Perfect for boxers, CrossFit enthusiasts, and anyone looking to improve their fitness."],
        price: 19.99
    }
]