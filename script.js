// --- DATA: PvZ Minus Content (All 48 Plants) ---
const database = [
    // --- DAY PLANTS (8) ---
    {
        id: "peashooter", category: "plants", name: "Peashooter",
        icon: "assets/images/peashooter.png", abilityGif: "assets/gifs/peashooter.gif",
        desc: "Peashooters are your first line of defense. They shoot peas at attacking zombies.",
        minus: "TBA", auto: "Calls out a forward-moving peashooter that starts from the leftmost",
        flavor: "\"I'm just a regular guy,\" says Peashooter. \"But in this economy? I gotta work double shifts.\"",
        cost: 125, recharge: "fast"
    },
    {
        id: "sunflower", category: "plants", name: "Sunflower",
        icon: "assets/images/sunflower.png", abilityGif: "assets/gifs/sunflower.gif",
        desc: "Sunflowers are essential for you to produce extra sun. Try planting as many as you can!",
        minus: "TBA", auto: "TBA",
        flavor: "Sunflower couldn't resist the beat. Which beat is that? Why, the lifegiving jazzy rhythm of the Earth itself.",
        cost: 50, recharge: "fast"
    },
    {
        id: "cherry_bomb", category: "plants", name: "Cherry Bomb",
        icon: "assets/images/cherrybomb.png", abilityGif: "assets/gifs/cherrybomb.gif",
        desc: "Cherry Bombs can blow up all zombies in an area. They have a short fuse so plant them near zombies.",
        minus: "TBA", auto: "(created by Marigold) Move to the right in 5x speed (wave 1-50), 4x speed (wave 51-100), 3x speed (wave 101-150) and 2x speed (after wave 150), stops at end of lawn.",
        flavor: "\"I wanna explode,\" says Cherry #1. \"No, let's detonate instead!\" says his brother. After intense consultation they agree to explodonate.",
        cost: 150, recharge: "very slow"
    },
    {
        id: "wallnut", category: "plants", name: "Wall-nut",
        icon: "assets/images/wallnut.png", abilityGif: "assets/gifs/wallnut.gif",
        desc: "Wall-nuts have hard shells which you can use to protect your other plants.",
        minus: "TBA", auto: "Transforms a zombie biting/smashing it into a full-health hypnotized Pole Vaulting Zombie that isn't moving",
        flavor: "\"I ask you, how do you feel when a zombie takes a bite out of you?\" says Wall-nut. \"I don't feel a thing.\"",
        cost: 50, recharge: "slow"
    },
    {
        id: "potato_mine", category: "plants", name: "Potato Mine",
        icon: "assets/images/potatomine.png", abilityGif: "assets/gifs/potatomine.gif",
        desc: "Potato Mines pack a powerful punch, but they need a while to arm themselves.",
        minus: "TBA", auto: "(created by Marigold) Move to the right in 1x speed after surfacing, stops moving when reaching to the end of lawn.",
        flavor: "Some folks say Potato Mine is lazy. Potato Mine says nothing. He's too busy thinking about his investment strategy.",
        cost: 50, recharge: "slow"
    },
    {
        id: "butter_pea", category: "plants", name: "Shivering Snow Pea",
        icon: "assets/images/butterpea.png", abilityGif: "assets/gifs/butterpea.gif",
        desc: "Snow Peas fire frozen peas that damage and slow the enemy.",
        minus: "TBA", auto: "Attacking rate -0.02s after every shot, can end up 1s as the fastest attacking rate",
        flavor: "Folks often tell Snow Pea how 'cool' he is, or exhort him to 'chill out.' He rolls his eyes.",
        cost: 225, recharge: "fast"
    },
    {
        id: "chomper", category: "plants", name: "Chomper",
        icon: "assets/images/chomper.png", abilityGif: "assets/gifs/chomper.gif",
        desc: "Chompers can devour a zombie whole, and \"less\" vulnerable while chewing.",
        minus: "TBA", auto: "No chewing after eating a zombie (100% when the zombie's currently having 300HP or below, 40% for other cases)",
        flavor: "Chomper got a gig on a zombie movie once, but it fell through. His agent demanded too much of the gross.",
        cost: 200, recharge: "fast"
    },
    {
        id: "repeater", category: "plants", name: "Repeater",
        icon: "assets/images/repeater.png", abilityGif: "assets/gifs/repeater.gif",
        desc: "Repeater fires two peas at a time.",
        minus: "TBA", auto: "Shoots snow peas that reflects to the back when hitting a zombie, and travels back to the front after reaching the left corner",
        flavor: "Repeater is fierce. He's from the streets. He doesn't take attitude from anybody.",
        cost: 225, recharge: "fast"
    },

    // --- NIGHT PLANTS (8) ---
    {
        id: "puff_shroom", category: "plants", name: "Puff-shroom",
        icon: "assets/images/puffshroom.png", abilityGif: "assets/gifs/puffshroom.gif",
        desc: "Puff-shrooms are cheap, but can only fire a short distance.",
        minus: "TBA", auto: "0.45s firing rate when bitten (straight up phase 2), 3 plants at the same time, full distance shot.",
        flavor: "\"I only recently became aware of the existence of zombies,\" says Puff-shroom. \"Like many fungi, I'd just assumed they were fairy tales.\"",
        cost: 0, recharge: "fast"
    },
    {
        id: "sun_shroom", category: "plants", name: "Sun-shroom",
        icon: "assets/images/sunshroom.png", abilityGif: "assets/gifs/sun_shroom.gif",
        desc: "Sun-shrooms give small sun at first and normal sun later.",
        minus: "TBA", auto: "TBA",
        flavor: "Sun-shroom hates sun. He hates it so much that when it builds up in his system, he spits it out as fast as he can.",
        cost: 25, recharge: "fast"
    },
    {
        id: "fume_shroom", category: "plants", name: "Fume-shroom",
        icon: "assets/images/fumeshroom.png", abilityGif: "assets/gifs/fumeshroom.gif",
        desc: "Fume-shrooms shoot fumes that can pass through screen doors.",
        minus: "TBA", auto: "Places a small clone of itself at the same tile (100HP, cannot make a clone, OG attacking range)",
        flavor: "\"I was in a dead-end job producing yeast spores for a bakery,\" says Fume-shroom. \"Then Puff-shroom told me about this zombie-busting gig.\"",
        cost: 125, recharge: "fast"
    },
    {
        id: "grave_buster", category: "plants", name: "Grave Buster",
        icon: "assets/images/gravebuster.png", abilityGif: "assets/gifs/gravebuster.gif",
        desc: "Plant Grave Busters on graves to remove them.",
        minus: "TBA", auto: "(created by Marigold) Four of it will be constantly planted from column 6 to 9.",
        flavor: "Despite Grave Buster's fearsome appearance, he wants everyone to know that he loves kittens.",
        cost: 75, recharge: "fast"
    },
    {
        id: "hypno_shroom", category: "plants", name: "Hypno-shroom?????",
        icon: "assets/images/hypnoshroom.png", abilityGif: "assets/gifs/hypnoshroom.gif",
        desc: "When a zombie eats a Hypno-shroom, it will turn around and fight for you.",
        minus: "TBA", auto: "TBA",
        flavor: "\"Zombies are our friends,\" asserts Hypno-shroom. \"They're badly misunderstood creatures.\"",
        cost: 75, recharge: "slow"
    },
    {
        id: "scaredy_shroom", category: "plants", name: "Scaredy-shroom",
        icon: "assets/images/scaredyshroom.png", abilityGif: "assets/gifs/scaredyshroom.gif",
        desc: "Scaredy-shrooms are long-ranged shooters that hide when enemies get near.",
        minus: "TBA", auto: "The special projectile it shot (10%) no longer do chains, instead, it turns a zombie that being hit into violet form. Zombies in violet form moves back to scaredy's position when scared.",
        flavor: "\"Who's there?\" whispers Scaredy-shroom, voice trembling. \"Go away. I don't want to see anybody.\"",
        cost: 50, recharge: "fast"
    },
    {
        id: "ice_shroom", category: "plants", name: "Ice-shroom",
        icon: "assets/images/iceshroom.png", abilityGif: "assets/gifs/iceshroom.gif",
        desc: "Ice-shrooms temporarily paralyze all zombies on the screen.",
        minus: "TBA", auto: "TBA",
        flavor: "Ice-shroom frowns, not because he's unhappy, but because of a childhood injury that left his facial nerves paralyzed.",
        cost: 75, recharge: "very slow"
    },
    {
        id: "doom_shroom", category: "plants", name: "Doom-shroom",
        icon: "assets/images/doomshroom.png", abilityGif: "assets/gifs/doomshroom.gif",
        desc: "Doom-shrooms destroy everything in a large area and leave a crater that can't be planted on.",
        minus: "TBA", auto: "(created by Marigold) Move to the right in 4x speed (wave 1-50), 3x speed (wave 51-100), 2x speed (wave 101-150) and 1x speed (after wave 150), stops at end of lawn, no craters left on lawn.",
        flavor: "\"You're lucky I'm on your side,\" says Doom-shroom. \"I could destroy everything you hold dear.\"",
        cost: 200, recharge: "VERYYYY slow"
    },

    // --- POOL PLANTS (8) ---
    {
        id: "lily_pad", category: "plants", name: "Lily Pad",
        icon: "assets/images/lilypad.png", abilityGif: "assets/gifs/lilypad.gif",
        desc: "Lily Pads let you plant non-aquatic plants on top of them.",
        minus: "TBA", auto: "0HP, heals plants that's on top of it (20HP/5 sec).",
        flavor: "Lily Pad never complains. Lily Pad never wants to know what's going on. Put a plant on top of him, he won't say a thing.",
        cost: 25, recharge: "fast"
    },
    {
        id: "squash", category: "plants", name: "Squash",
        icon: "assets/images/squash.png", abilityGif: "assets/gifs/squash.gif",
        desc: "Squash will smash the first zombie that gets close to it.",
        minus: "TBA", auto: "TBA",
        flavor: "\"I'm ready!\" yells Squash. \"Let's do it! Put me in! There's nobody better! I'm your guy!\"",
        cost: 75, recharge: "slow"
    },
    {
        id: "threepeater", category: "plants", name: "Threepeater",
        icon: "assets/images/threepeater.png", abilityGif: "assets/gifs/threepeater.gif",
        desc: "Threepeaters shoot peas in three lanes.",
        minus: "TBA", auto: "Shoots an extra basketball projectile in its lane for every shot. The extra 2 projectiles on every 6th shot will travel to the same lane instead.",
        flavor: "Threepeater likes reading, playing backgammon and stabbing zombies with a trident.",
        cost: 375, recharge: "fast"
    },
    {
        id: "tangle_kelp", category: "plants", name: "Tangle Kelp",
        icon: "assets/images/tanglekelp.png", abilityGif: "assets/gifs/tanglekelp.gif",
        desc: "Tangle Kelp are aquatic plants that pull the first zombie that nears them underwater.",
        minus: "TBA", auto: "TBA",
        flavor: "Tangle Kelp is totally invisible. Okay, not totally invisible. But he's close.",
        cost: 25, recharge: "slow"
    },
    {
        id: "chilly_pepper", category: "plants", name: "Chilly Pepper",
        icon: "assets/images/chilly.png", abilityGif: "assets/gifs/chilly.gif",
        desc: "Jalapenos destroy an entire lane of zombies.",
        minus: "TBA", auto: "Move to the right in 1x speed when it haven't seen any zombies, stops moving when reaching to the end of lawn",
        flavor: "\"Nnnggghhh!\" says Jalapeno. He's wound a little tight.",
        cost: 125, recharge: "very slow"
    },
    {
        id: "spikeweed", category: "plants", name: "Spikeweed",
        icon: "assets/images/spikeweed.png", abilityGif: "assets/gifs/spikeweed.gif",
        desc: "Spikeweeds destroy rolling zombies and hurt zombies that step on them.",
        minus: "TBA", auto: "Summons an one-tile spikeweed in every 10s. One-tile spikeweed follows a zombie and keeps attacking them in an attacking rate of 0.65s, disappears after 7.5s.",
        flavor: "Hockey is Spikeweed's obsession. He loves to watch hockey, he plays it when he can.",
        cost: 150, recharge: "fast"
    },
    {
        id: "torchwood", category: "plants", name: "Torchwood",
        icon: "assets/images/torchwood.png", abilityGif: "assets/gifs/torchwood.gif",
        desc: "Torchwoods turn peas that pass through them into fireballs that deal twice as much damage.",
        minus: "TBA", auto: "When getting eaten/smashed/ crushed, it releases 2 piercing chilling projectiles from each side to another at the current lane, and generates a stronger, darker torchwood. Jalapeno effect upon death.",
        flavor: "Everybody likes and respects Torchwood. They like him for his integrity, for his steadfast friendship.",
        cost: 150, recharge: "fast"
    },
    {
        id: "tallnut", category: "plants", name: "Tall-nut",
        icon: "assets/images/tallnut.png", abilityGif: "assets/gifs/tallnut.gif",
        desc: "Tall-nuts are heavy-duty wall plants that can't be vaulted over.",
        minus: "none", auto: "Gives vulnerability effect to the zombies who bite/smash it, which causes their body and armor to take 4x of any damages.",
        flavor: "\"People wonder if there's a rivalry between Wall-nut and Tall-nut. Tall-nut laughs a rich, baritone laugh.\"",
        cost: 150, recharge: "slow"
    },

    // --- FOG PLANTS (8) ---
    {
        id: "sea_shroom", category: "plants", name: "Sea-shroom",
        icon: "assets/images/seashroom.png", abilityGif: "assets/gifs/seashroom.gif",
        desc: "Sea-shrooms are aquatic plants that shoot short-ranged spores.",
        minus: "TBA", auto: "Shoots 3 times at a time, full-range. 3 of it will be planted at the same tile and same time.",
        flavor: "Sea-shroom has never seen the sea. It's in his name, but he's never been there.",
        cost: 0, recharge: "slow"
    },
    {
        id: "plantern", category: "plants", name: "Plantern",
        icon: "assets/images/plantern.png", abilityGif: "assets/gifs/plantern.gif",
        desc: "Planterns light up an area, letting you see through fog.",
        minus: "TBA", auto: "Produces 6 random projectiles with the same kind that equally travel to the left and right in a speed of average, slower and much slower.",
        flavor: "Plantern defies science, he just does. Other plants eat light, Plantern gives it off.",
        cost: 150, recharge: "slow"
    },
    {
        id: "cactus", category: "plants", name: "Cactus",
        icon: "assets/images/cactus.png", abilityGif: "assets/gifs/cactus.gif",
        desc: "Cacti shoot spikes that can hit both ground and air targets.",
        minus: "TBA", auto: "No longer randomly shoots pushback spikes, instead there's now a shooting sequence (1 pushback spike, then 2 normal spikes, then repeat). Always shoot pushback spike against high targets.",
        flavor: "She's prickly, sure, but Cactus's spikes belie a spongy heart. She just wants to hug and be hugged.",
        cost: 200, recharge: "fast"
    },
    {
        id: "blover", category: "plants", name: "Blover",
        icon: "assets/images/blover.png", abilityGif: "assets/gifs/blover.gif",
        desc: "Blovers blow away all balloon zombies and fog.",
        minus: "TBA", auto: "TBA",
        flavor: "When he was five, Blover got a shiny new birthday cake. He blew and blew, but couldn't extinguish the candles. He's been practicing ever since.",
        cost: 75, recharge: "fast"
    },
    {
        id: "split_pea", category: "plants", name: "Split Pea",
        icon: "assets/images/splitpea.png", abilityGif: "assets/gifs/splitpea.gif",
        desc: "Split Peas shoot peas forward and backwards.",
        minus: "TBA", auto: "Shoots a chilly fire pea after every 4 shots. After 6 cycles or when a zombie appears from the back, there will be another 4 same cycles with hugely buffed attacking rate, then loop back to normal cycle.",
        flavor: "No story because the creator ran out of ideas XD.",
        cost: 150, recharge: "fast"
    },
    {
        id: "starfruit", category: "plants", name: "Starfruit",
        icon: "assets/images/starfruit.png", abilityGif: "assets/gifs/starfruit.gif",
        desc: "Starfruit shoot stars in 5 directions.",
        minus: "TBA", auto: "The star projectiles it shot remain in place before moving forward after a while. Additionally, launches a large star projectile straight ahead.",
        flavor: "\"Aw, man,\" says Starfruit. \"I went to the dentist the other day and he said I have four cavities. I've got - one tooth!\"",
        cost: 300, recharge: "fast"
    },
    {
        id: "pumpkin", category: "plants", name: "Pumpkin",
        icon: "assets/images/pumpkin.png", abilityGif: "assets/gifs/pumpkin.gif",
        desc: "Pumpkins protect the plant within.",
        minus: "TBA", auto: "No longer buff plants when gets eaten, instead, it’ll plant another Pumpkin with having half of the previous Pumpkin's total HP.",
        flavor: "Pumpkin hasn't heard from his cousin Renfield lately. Apparently Renfield's a big star...",
        cost: 150, recharge: "slow"
    },
    {
        id: "magnet_shroom", category: "plants", name: "Magnet-shroom",
        icon: "assets/images/magnetshroom.png", abilityGif: "assets/gifs/magnetshroom.gif",
        desc: "Magnet-shrooms remove helmets and other metal objects from zombies.",
        minus: "TBA", auto: "Has full-range detection in its lane. Removes at most 20 metal objects from zombies. Turns into a Metal-nut upon defeated in any ways.",
        flavor: "Magnetism is a powerful force. Very powerful. Sometimes it scares Magnet-shroom a little.",
        cost: 75, recharge: "fast"
    },

    // --- ROOF PLANTS (8) ---
    {
        id: "cabbage_pult", category: "plants", name: "Cabbage-pult",
        icon: "assets/images/cabbage.png", abilityGif: "assets/gifs/cabbage.gif",
        desc: "Cabbage-pults hurl cabbages at the enemy.",
        minus: "TBA", auto: "Shoots 2 or 4 (40%) cabbages at a time",
        flavor: "Cabbage-pult is okay with launching cabbages at zombies. It's what he's paid for.",
        cost: 125, recharge: "fast"
    },
    {
        id: "flower_pot", category: "plants", name: "Flower Pot",
        icon: "assets/images/pot.png", abilityGif: "assets/gifs/pot.gif",
        desc: "Flower Pots let you plant on the roof.",
        minus: "TBA", auto: "0HP, heals plants that's on top of it (20HP/5 sec).",
        flavor: "\"I'm a pot for plants. Yet I am also a plant. HAS YOUR MIND EXPLODED YET?\"",
        cost: 25, recharge: "fast"
    },
    {
        id: "kernel_pult", category: "plants", name: "Kernel-pult",
        icon: "assets/images/kernel.png", abilityGif: "assets/gifs/kernel.gif",
        desc: "Kernel-pults fling corn kernels and butter at zombies.",
        minus: "TBA", auto: "When zombies get 3 tiles near of it, its attacking rate become constant, which's 1s per hurl; in this situation, throwing butter will also make it generate a lane of instant butters that also immobilize zombies.",
        flavor: "Kernel-pult is the oldest of the pult brothers. Out of all of them, he is the only one who consistently remembers everyone's birthdays.",
        cost: 150, recharge: "fast"
    },
    {
        id: "coffee_bean", category: "plants", name: "Coffee Bean",
        icon: "assets/images/coffee.png", abilityGif: "assets/gifs/coffee.gif",
        desc: "Plant Coffee Beans on sleeping mushrooms to wake them up.",
        minus: "TBA", auto: "Acts as a normal floating plant. Places a normal Coffee Bean (with Minus's new ability) at either its same tile (70%), the tiles on its left (15%) or right (15%) for the plants in every 50s.",
        flavor: "\"Hey guys, hey! What's up?\" says Coffee Bean. \"Let's go! Hey!\"",
        cost: 100, recharge: "fast"
    },
    {
        id: "garlic", category: "plants", name: "Garlic",
        icon: "assets/images/garlic.png", abilityGif: "assets/gifs/garlic.gif",
        desc: "Garlic diverts zombies into other lanes.",
        minus: "TBA", auto: "1st degrade: shoots a garlic projectile that can divert zombies.\n2nd degrade: release a garlic fume that can also divert zombies.\n",
        flavor: "Lane diversion is not just Garlic's profession. It's his passion.",
        cost: 75, recharge: "fast"
    },
    {
        id: "umbrella_leaf", category: "plants", name: "Umbrella Leaf",
        icon: "assets/images/umbrella.png", abilityGif: "assets/gifs/umbrella.gif",
        desc: "Umbrella Leaves protect nearby plants from bungees and catapults.",
        minus: "TBA", auto: "Reflects Catapult Zombie's basketball back to the zombies on its current lane. Knockback zombie who bites/smash it with 1 tile to the right.",
        flavor: "\"SPROING!\" says Umbrella leaf. \"Did you like that? I can do it again. SPROING!\"",
        cost: 100, recharge: "fast"
    },
    {
        id: "marigold", category: "plants", name: "Marigold",
        icon: "assets/images/marigold.png", abilityGif: "assets/gifs/marigold.gif",
        desc: "Marigolds give you silver and gold coins.",
        minus: "TBA", auto: "Plants a random instant-use plants. Plants Cherry Bomb, Ice-shroom, Doom-shroom, Blover, Potato Mine, Chilly Pepper and Explode-o-nut (without Auto Battler buff) at the same tile when it dies.",
        flavor: "Marigold spends a lot of time deciding whether to spit out a silver coin or a gold/red diamond one.",
        cost: 450, recharge: "slow"
    },
    {
        id: "melon_pult", category: "plants", name: "Melon-pult",
        icon: "assets/images/melon.png", abilityGif: "assets/gifs/melon.gif",
        desc: "Melon-pults do heavy damage to a group of zombies.",
        minus: "TBA", auto: "Throws a melon projectile at its front that bounces 1 tile to the right forever until reaching to the rightmost of the screen. No splash damage to adjacent lanes.",
        flavor: "There's no false modesty with Melon-pult. \"I deliver the big hits,\" he says.",
        cost: 375, recharge: "fast"
    },

    // --- UPGRADE PLANTS (8) ---
    {
        id: "gatling_pea", category: "plants", name: "Gatling Pea",
        icon: "assets/images/gatlingpea.png", abilityGif: "assets/gifs/gatlingpea.gif",
        desc: "Gatling Peas shoot four peas at a time.",
        minus: "TBA", auto: "Level 1: Shoots 4 peas at a time. Other properties remain the same as the original version.\nLevel 2: Shoots 5 peas at a time, with a 5% chance to shoot a snow pea.\nLevel 3: Shoots 6 peas, plus heals itself by 1 HP each time it attacks.",
        flavor: "Gatling Pea's parents were concerned when he announced his intention to join the military.",
        cost: 450, recharge: "very slow"
    },
    {
        id: "twin_sunflower", category: "plants", name: "Twin Sunflower",
        icon: "assets/images/twinsunflower.png", abilityGif: "assets/gifs/twinsunflower.gif",
        desc: "Twin Sunflowers give twice as much sun as a normal sunflower.",
        minus: "TBA", auto: "TBA",
        flavor: "It was a crazy night, involving forbidden science, an alien meteorite, and a highly reactive isotope of Sun.",
        cost: 150, recharge: "very slow"
    },
    {
        id: "gloom_shroom", category: "plants", name: "Gloom-shroom",
        icon: "assets/images/gloomshroom.png", abilityGif: "assets/gifs/gloomshroom.gif",
        desc: "Gloom-shrooms release heavy fumes in an area around themselves.",
        minus: "TBA", auto: "Deals 55 damage to zombies with armors, 20 damage to zombie bodies, and 30 damage to zombies with vehicle. 5 tiles of horizontal attacking range.",
        flavor: "\"I've always been a gloomy guy,\" says Gloom-shroom. \"But that's okay, it's just who I am.\"",
        cost: 200, recharge: "very slow"
    },
    {
        id: "cattail", category: "plants", name: "Cattail",
        icon: "assets/images/cattail.png", abilityGif: "assets/gifs/cattail.gif",
        desc: "Cattails can be planted on Lily Pads and shoot homing spikes.",
        minus: "TBA", auto: "Shoots 3 homing spikes at a time when aiming to the zombie that's on the same lane as it.",
        flavor: "\"Woof!\" says Cattail. \"Woof woof woof! Does this confuse you? Will you expect me to meow?\"",
        cost: 400, recharge: "very slow"
    },
    {
        id: "winter_melon", category: "plants", name: "Winter Melon",
        icon: "assets/images/winter.png", abilityGif: "assets/gifs/winter.gif",
        desc: "Winter Melons do heavy damage and slow groups of zombies.",
        minus: "TBA", auto: "Throws 2 more winter melon projectiles that drop at each side of the actual winter melon. No splash damage to adjacent lanes.",
        flavor: "Winter Melon tries to calm people down. It's the whole cold-and-slow approach to life.",
        cost: 250, recharge: "very slow"
    },
    {
        id: "gold_magnet", category: "plants", name: "Gold Magnet",
        icon: "assets/images/goldmagnet.png", abilityGif: "assets/gifs/goldmagnet.gif",
        desc: "Gold Magnets collect coins and diamonds for you.",
        minus: "TBA", auto: "TBA",
        flavor: "\"How did I get here?\" asks Gold Magnet. \"I was a middle-management executive. Now I'm a magnet collecting money.\"",
        cost: 200, recharge: "very slow"
    },
    {
        id: "spikerock", category: "plants", name: "Spikerock",
        icon: "assets/images/spikerock.png", abilityGif: "assets/gifs/spikerock.gif",
        desc: "Spikerocks pop multiple tires and damage zombies that walk over it.",
        minus: "TBA", auto: "30*2 damages per attack. Instant-kills a zombie (7%).",
        flavor: "Nothing wants to step over Spikerock, obviously. Stepping over pieces of Lego is a far more merciful punishment.",
        cost: 200, recharge: "very slow"
    },
    {
        id: "cob_cannon", category: "plants", name: "Cob Cannon",
        icon: "assets/images/cobcannon.png", abilityGif: "assets/gifs/cobcannon.gif",
        desc: "Cob Cannons must be planted on two side-by-side Kernel-pults. Click to launch deadly cobs.",
        minus: "TBA", auto: "TBA",
        flavor: "What's the deal with Cob Cannon anyway? He went to Harvard. He practices law in New York.",
        cost: 500, recharge: "very slow"
    }
];

// --- GENERATE 48 FILLER PLANTS (soon no more)---
/*
for (let i = 0; i < 45; i++) {
    database.push({
        id: `plant_${i}`,
        category: "plants",
        name: `Plant ${i+1}`,
        icon: "https://static.wikia.nocookie.net/plantsvszombies/images/1/15/Sunflower.png",
        
        // Filler data for testing
        // plantImage: "https://static.wikia.nocookie.net/plantsvszombies/images/1/15/Sunflower.png",
        abilityGif: "", // Empty for fillers

        desc: "Standard plant for testing grid layout.",
        minus: "Standard stats.",
        auto: "Standard behavior.",
        flavor: "This is a filler plant to test the full 48-item grid.",
        cost: 0,
        recharge: "NA"
    });
}
*/

const app = {
    state: {
        category: 'plants',
        search: ''
    },

    init: () => {
        app.grid = document.getElementById('grid-container');
        app.heading = document.getElementById('almanac-heading');
        app.initObserver();
        app.renderGrid();
    },

    setCategory: (cat) => {
        app.state.category = cat;
        const titleCat = cat.charAt(0).toUpperCase() + cat.slice(1);
        app.heading.innerText = `Suburban Almanac - ${titleCat}`;
        document.querySelectorAll('.tab-btn').forEach(btn => {
            if (btn.innerText.toLowerCase() === cat) btn.classList.add('active');
            else btn.classList.remove('active');
        });
        app.renderGrid();
    },

    renderGrid: () => {
        app.grid.innerHTML = '';
        const filtered = database.filter(item => item.category === app.state.category);

        filtered.forEach((item, index) => {
            const packet = document.createElement('div');
            packet.className = 'seed-packet';
            packet.innerHTML = `
                <img src="${item.icon}" alt="${item.name}">
                <div class="packet-cost">${item.cost || 0}</div>
            `;
            packet.onclick = () => {
                app.loadDetails(item);
                document.querySelectorAll('.seed-packet').forEach(p => p.classList.remove('selected'));
                packet.classList.add('selected');
            };
            app.grid.appendChild(packet);
            if (index === 0) packet.click();
        });
    },

    loadDetails: (unit) => {
        // 1. Update Text (Keep your existing text code)
        document.getElementById('detail-name').innerText = unit.name || "Unknown";
        document.getElementById('detail-mechanics').innerText = unit.desc || "No description.";
        document.getElementById('detail-minus').innerText = unit.minus || "N/A";
        document.getElementById('detail-auto').innerText = unit.auto || "N/A";
        document.getElementById('detail-flavor').innerText = unit.flavor || "";
        document.getElementById('detail-cost').innerText = unit.cost || "-";
        document.getElementById('detail-recharge').innerText = unit.recharge || "-";

        // 2. Update GIF Logic
        const gifImg = document.getElementById('detail-gif');
        const gifWrapper = document.querySelector('.ability-gif-wrapper');
        const fallback = document.getElementById('media-fallback');

        if (unit.abilityGif) {
            gifImg.src = unit.abilityGif;
            gifWrapper.classList.remove('hidden');
            fallback.classList.add('hidden');
        } else {
            // If no GIF is defined in database, hide the wrapper
            gifWrapper.classList.add('hidden'); 
            fallback.classList.remove('hidden');
        }
    },

    initObserver: () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, {
            threshold: 0.1
        });
        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }
};

document.addEventListener('DOMContentLoaded', app.init);