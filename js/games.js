// 游戏数据
const allGames = [
    // 益智游戏
    {
        id: 1,
        title: '2048',
        description: 'Classic number puzzle game. Combine tiles to reach the 2048 tile!',
        image: 'images/game1.jpg',
        url: 'games/game-template.html?id=1',
        category: 'puzzle',
        iframeUrl: 'https://play.famobi.com/2048'
    },
    {
        id: 2,
        title: 'Sudoku Classic',
        description: 'Fill the grid with numbers so that each row, column, and 3x3 box contains all digits from 1 to 9.',
        image: 'images/game2.jpg',
        url: 'games/game-template.html?id=2',
        category: 'puzzle',
        iframeUrl: 'https://play.famobi.com/sudoku-classic'
    },
    {
        id: 3,
        title: 'Mahjong Classic',
        description: 'Traditional Chinese tile-matching puzzle game. Match and remove all tiles to win!',
        image: 'images/game3.jpg',
        url: 'games/game-template.html?id=3',
        category: 'puzzle',
        iframeUrl: 'https://play.famobi.com/mahjong-classic'
    },
    {
        id: 4,
        title: 'Jigsaw Puzzle XMas',
        description: 'Put together beautiful Christmas-themed jigsaw puzzles. Perfect for the holiday season!',
        image: 'images/game4.jpg',
        url: 'games/game-template.html?id=4',
        category: 'puzzle',
        iframeUrl: 'https://play.famobi.com/jigsaw-puzzle-xmas'
    },
    {
        id: 16,
        title: 'Rise Up',
        description: 'Guide your ball through obstacles and reach new heights in this challenging arcade game!',
        image: 'images/game16.jpg',
        url: 'games/game-template.html?id=16',
        category: 'arcade',
        iframeUrl: 'https://play.famobi.com/rise-up'
    },
    {
        id: 17,
        title: 'Giant Rush',
        description: 'Run and grow bigger in this exciting endless runner game!',
        image: 'images/game17.jpg',
        url: 'games/game-template.html?id=17',
        category: 'arcade',
        iframeUrl: 'https://play.famobi.com/giant-rush'
    },
    {
        id: 18,
        title: 'Train Miner',
        description: 'Mine resources and build your train empire in this strategic mining game!',
        image: 'images/game18.jpg',
        url: 'games/game-template.html?id=18',
        category: 'strategy',
        iframeUrl: 'https://play.famobi.com/train-miner'
    },
    {
        id: 19,
        title: 'Western Sniper',
        description: 'Test your shooting skills in this wild west themed shooting game!',
        image: 'images/game19.jpg',
        url: 'games/game-template.html?id=19',
        category: 'action',
        iframeUrl: 'https://play.famobi.com/western-sniper'
    },
    {
        id: 20,
        title: 'Go Escape',
        description: 'Escape from dangerous situations in this thrilling adventure game!',
        image: 'images/game20.jpg',
        url: 'games/game-template.html?id=20',
        category: 'action',
        iframeUrl: 'https://play.famobi.com/go-escape'
    },
    {
        id: 21,
        title: 'Color Fill 3D',
        description: 'Fill 3D objects with beautiful colors in this relaxing puzzle game!',
        image: 'images/game21.jpg',
        url: 'games/game-template.html?id=21',
        category: 'puzzle',
        iframeUrl: 'https://play.famobi.com/color-fill-3d'
    },
    {
        id: 22,
        title: 'Color Roll 3D',
        description: 'Roll and paint 3D objects in this creative puzzle game!',
        image: 'images/game22.jpg',
        url: 'games/game-template.html?id=22',
        category: 'puzzle',
        iframeUrl: 'https://play.famobi.com/color-roll-3d'
    },
    {
        id: 23,
        title: 'Braindom',
        description: 'Test your brain with challenging puzzles and riddles!',
        image: 'images/game23.jpg',
        url: 'games/game-template.html?id=23',
        category: 'puzzle',
        iframeUrl: 'https://play.famobi.com/braindom'
    },
    {
        id: 24,
        title: 'Sort It',
        description: 'Sort and organize items in this relaxing puzzle game!',
        image: 'images/game24.jpg',
        url: 'games/game-template.html?id=24',
        category: 'puzzle',
        iframeUrl: 'https://play.famobi.com/sort-it'
    },
    {
        id: 25,
        title: 'Cube Match',
        description: 'Match and combine cubes in this addictive puzzle game!',
        image: 'images/game25.jpg',
        url: 'games/game-template.html?id=25',
        category: 'puzzle',
        iframeUrl: 'https://play.famobi.com/cube-match'
    },
    // 动作游戏
    {
        id: 5,
        title: 'Monster Jump',
        description: 'Jump over obstacles and collect coins in this exciting monster-themed platformer',
        image: 'images/game5.jpg',
        url: 'games/game-template.html?id=5',
        category: 'action',
        iframeUrl: 'https://play.famobi.com/monster-jump'
    },
    {
        id: 6,
        title: 'Endless Truck',
        description: 'Drive your truck through endless roads, avoiding obstacles and collecting power-ups!',
        image: 'images/game6.jpg',
        url: 'games/game-template.html?id=6',
        category: 'action',
        iframeUrl: 'https://play.famobi.com/endless-truck'
    },
    {
        id: 7,
        title: 'Alien Quest',
        description: 'Embark on an exciting space adventure! Fight aliens and save the galaxy.',
        image: 'images/game7.jpg',
        url: 'games/game-template.html?id=7',
        category: 'action',
        iframeUrl: 'https://play.famobi.com/alien-quest'
    },
    // 体育游戏
    {
        id: 8,
        title: 'Basketball Pro',
        description: 'Test your basketball skills in this exciting sports game. Score as many baskets as you can!',
        image: 'images/game8.jpg',
        url: 'games/game-template.html?id=8',
        category: 'sports',
        iframeUrl: 'https://play.famobi.com/basketball-pro'
    },
    {
        id: 9,
        title: 'Baseball Pro',
        description: 'Step up to the plate and hit home runs in this exciting baseball game!',
        image: 'images/game9.jpg',
        url: 'games/game-template.html?id=9',
        category: 'sports',
        iframeUrl: 'https://play.famobi.com/baseball-pro'
    },
    // 策略游戏
    {
        id: 10,
        title: 'Chess Classic',
        description: 'Play the classic game of chess against the computer. Test your strategic thinking!',
        image: 'images/game10.jpg',
        url: 'games/game-template.html?id=10',
        category: 'strategy',
        iframeUrl: 'https://play.famobi.com/chess-classic'
    },
    {
        id: 11,
        title: 'Civilizations Wars',
        description: 'Build your empire, train your army, and conquer territories in this strategic war game!',
        image: 'images/game11.jpg',
        url: 'games/game-template.html?id=11',
        category: 'strategy',
        iframeUrl: 'https://play.famobi.com/civilizations-wars-all-stars'
    },
    // 纸牌游戏
    {
        id: 12,
        title: 'Solitaire Classic',
        description: 'The classic card game. Arrange cards in descending order and alternating colors.',
        image: 'images/game12.jpg',
        url: 'games/game-template.html?id=12',
        category: 'card',
        iframeUrl: 'https://play.famobi.com/solitaire-classic'
    },
    {
        id: 13,
        title: 'Spider Solitaire',
        description: 'A challenging variation of solitaire. Arrange cards in sequence to clear the table.',
        image: 'images/game13.jpg',
        url: 'games/game-template.html?id=13',
        category: 'card',
        iframeUrl: 'https://play.famobi.com/spider-solitaire'
    },
    // 街机游戏
    {
        id: 14,
        title: 'Bubbles Shooter',
        description: 'Match and pop bubbles in this addictive puzzle game. Clear all bubbles to win!',
        image: 'images/game14.jpg',
        url: 'games/game-template.html?id=14',
        category: 'arcade',
        iframeUrl: 'https://play.famobi.com/bubbles-shooter'
    },
    {
        id: 15,
        title: 'Candy Bubble',
        description: 'Match and pop colorful candy bubbles in this sweet puzzle game!',
        image: 'images/game15.jpg',
        url: 'games/game-template.html?id=15',
        category: 'arcade',
        iframeUrl: 'https://play.famobi.com/candy-bubble'
    },
    {
        id: 26,
        title: 'Parking Jam',
        description: 'Test your parking skills in this challenging puzzle game! Move cars to create a path for the target vehicle to exit.',
        image: 'images/game26.jpg',
        url: 'games/game-template.html?id=26',
        category: 'puzzle',
        iframeUrl: 'https://play.famobi.com/parking-jam'
    },
    {
        id: 27,
        title: 'Fashion Battle',
        description: 'Show off your fashion sense in this exciting dress-up game! Create stunning outfits and compete with other players.',
        image: 'images/game27.jpg',
        url: 'games/game-template.html?id=27',
        category: 'arcade',
        iframeUrl: 'https://play.famobi.com/fashion-battle'
    },
    {
        id: 28,
        title: 'Fruit Party',
        description: 'Match and combine fruits in this colorful puzzle game! Create bigger fruits and clear the board to win.',
        image: 'images/game28.jpg',
        url: 'games/game-template.html?id=28',
        category: 'puzzle',
        iframeUrl: 'https://play.famobi.com/fruit-party'
    },
    {
        id: 29,
        title: 'Neon Rider',
        description: 'Ride through neon-lit tracks in this exciting racing game! Avoid obstacles and collect power-ups.',
        image: 'images/game29.jpg',
        url: 'games/game-template.html?id=29',
        category: 'arcade',
        iframeUrl: 'https://play.famobi.com/neon-rider'
    },
    {
        id: 30,
        title: 'Speed Master',
        description: 'Test your reflexes in this fast-paced action game! React quickly to obstacles and reach the finish line.',
        image: 'images/game30.jpg',
        url: 'games/game-template.html?id=30',
        category: 'action',
        iframeUrl: 'https://play.famobi.com/speed-master'
    },
    {
        id: 31,
        title: 'Alien Attack',
        description: 'Defend Earth from alien invaders in this thrilling shooting game! Upgrade your weapons and save humanity.',
        image: 'images/game31.jpg',
        url: 'games/game-template.html?id=31',
        category: 'action',
        iframeUrl: 'https://play.famobi.com/alien-attack'
    },
    {
        id: 32,
        title: 'Peet Sneak',
        description: 'Sneak past guards and collect treasures in this stealth adventure game! Use your wits to avoid detection.',
        image: 'images/game32.jpg',
        url: 'games/game-template.html?id=32',
        category: 'action',
        iframeUrl: 'https://play.famobi.com/peet-sneak'
    },
    {
        id: 33,
        title: 'Cut The Rope',
        description: 'Help Om Nom get his candy in this physics-based puzzle game! Cut ropes strategically to feed the hungry monster.',
        image: 'images/game33.jpg',
        url: 'games/game-template.html?id=33',
        category: 'puzzle',
        iframeUrl: 'https://play.famobi.com/cut-the-rope'
    },
    {
        id: 34,
        title: 'Toilet Run',
        description: 'Run through obstacles in this hilarious endless runner game! Collect toilet paper and avoid obstacles.',
        image: 'images/game34.jpg',
        url: 'games/game-template.html?id=34',
        category: 'arcade',
        iframeUrl: 'https://play.famobi.com/toilet-run'
    },
    {
        id: 35,
        title: 'Block Painter',
        description: 'Paint blocks and create beautiful patterns in this creative puzzle game! Use your imagination to complete levels.',
        image: 'images/game35.jpg',
        url: 'games/game-template.html?id=35',
        category: 'puzzle',
        iframeUrl: 'https://play.famobi.com/block-painter'
    },
    {
        id: 36,
        title: 'Stack Tower',
        description: 'Stack blocks perfectly in this challenging arcade game! Test your timing and precision to build the tallest tower.',
        image: 'images/game36.jpg',
        url: 'games/game-template.html?id=36',
        category: 'arcade',
        iframeUrl: 'https://play.famobi.com/stack-tower'
    },
    {
        id: 37,
        title: 'Monster Truck Racing',
        description: 'Race through challenging tracks in this exciting monster truck game! Jump over obstacles and perform stunts.',
        image: 'images/game37.jpg',
        url: 'games/game-template.html?id=37',
        category: 'racing',
        iframeUrl: 'https://play.famobi.com/monster-truck-racing'
    },
    {
        id: 38,
        title: 'Word Search',
        description: 'Find hidden words in this classic word search puzzle! Test your vocabulary and observation skills.',
        image: 'images/game38.jpg',
        url: 'games/game-template.html?id=38',
        category: 'puzzle',
        iframeUrl: 'https://play.famobi.com/word-search'
    },
    {
        id: 39,
        title: 'Zombie Defense',
        description: 'Defend your base from waves of zombies in this thrilling tower defense game! Build and upgrade your defenses.',
        image: 'images/game39.jpg',
        url: 'games/game-template.html?id=39',
        category: 'strategy',
        iframeUrl: 'https://play.famobi.com/zombie-defense'
    },
    {
        id: 40,
        title: 'Basketball Stars',
        description: 'Compete in intense basketball matches in this multiplayer sports game! Show off your shooting and dunking skills.',
        image: 'images/game40.jpg',
        url: 'games/game-template.html?id=40',
        category: 'sports',
        iframeUrl: 'https://play.famobi.com/basketball-stars'
    },
    {
        id: 41,
        title: 'Monster Match',
        description: 'Match and collect cute monsters in this colorful puzzle game! Create powerful combinations to clear the board.',
        image: 'images/game41.jpg',
        url: 'games/game-template.html?id=41',
        category: 'puzzle',
        iframeUrl: 'https://play.famobi.com/monster-match'
    },
    {
        id: 42,
        title: 'Space Shooter',
        description: 'Battle alien forces in this classic space shooting game! Upgrade your ship and save the galaxy.',
        image: 'images/game42.jpg',
        url: 'games/game-template.html?id=42',
        category: 'action',
        iframeUrl: 'https://play.famobi.com/space-shooter'
    },
    {
        id: 43,
        title: 'Monster Farm',
        description: 'Build and manage your own monster farm in this simulation game! Breed, train, and care for unique monsters.',
        image: 'images/game43.jpg',
        url: 'games/game-template.html?id=43',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-farm'
    },
    {
        id: 44,
        title: 'Puzzle Adventure',
        description: 'Solve challenging puzzles in this exciting adventure game! Use your wits to progress through levels.',
        image: 'images/game44.jpg',
        url: 'games/game-template.html?id=44',
        category: 'puzzle',
        iframeUrl: 'https://play.famobi.com/puzzle-adventure'
    },
    {
        id: 45,
        title: 'Monster Racing',
        description: 'Race against other monsters in this thrilling racing game! Use special abilities to win the race.',
        image: 'images/game45.jpg',
        url: 'games/game-template.html?id=45',
        category: 'racing',
        iframeUrl: 'https://play.famobi.com/monster-racing'
    },
    {
        id: 46,
        title: 'Monster Puzzle',
        description: 'Solve monster-themed puzzles in this challenging brain teaser! Match pieces and create cute monster pictures.',
        image: 'images/game46.jpg',
        url: 'games/game-template.html?id=46',
        category: 'puzzle',
        iframeUrl: 'https://play.famobi.com/monster-puzzle'
    },
    {
        id: 47,
        title: 'Monster Soccer',
        description: 'Play soccer with your favorite monsters in this exciting sports game! Score goals and win tournaments.',
        image: 'images/game47.jpg',
        url: 'games/game-template.html?id=47',
        category: 'sports',
        iframeUrl: 'https://play.famobi.com/monster-soccer'
    },
    {
        id: 48,
        title: 'Monster Defense',
        description: 'Defend your monster kingdom from invaders in this strategic tower defense game! Build defenses and train your monster army.',
        image: 'images/game48.jpg',
        url: 'games/game-template.html?id=48',
        category: 'strategy',
        iframeUrl: 'https://play.famobi.com/monster-defense'
    },
    {
        id: 49,
        title: 'Monster Cards',
        description: 'Collect and battle with monster cards in this exciting card game! Build your deck and become the ultimate monster master.',
        image: 'images/game49.jpg',
        url: 'games/game-template.html?id=49',
        category: 'card',
        iframeUrl: 'https://play.famobi.com/monster-cards'
    },
    {
        id: 50,
        title: 'Monster Arcade',
        description: 'Play classic arcade games with a monster twist! Jump, shoot, and collect coins in this retro-style game.',
        image: 'images/game50.jpg',
        url: 'games/game-template.html?id=50',
        category: 'arcade',
        iframeUrl: 'https://play.famobi.com/monster-arcade'
    },
    {
        id: 51,
        title: 'Monster Farm 2',
        description: 'Expand your monster farm in this exciting simulation game! Breed new monster species and create a thriving monster community.',
        image: 'images/game51.jpg',
        url: 'games/game-template.html?id=51',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-farm-2'
    },
    {
        id: 52,
        title: 'Monster Adventure',
        description: 'Embark on an epic adventure with your monster friends! Explore magical worlds and defeat evil forces.',
        image: 'images/game52.jpg',
        url: 'games/game-template.html?id=52',
        category: 'action',
        iframeUrl: 'https://play.famobi.com/monster-adventure'
    },
    {
        id: 53,
        title: 'Monster Tennis',
        description: 'Play tennis with your favorite monsters in this exciting sports game! Master different shots and win championships.',
        image: 'images/game53.jpg',
        url: 'games/game-template.html?id=53',
        category: 'sports',
        iframeUrl: 'https://play.famobi.com/monster-tennis'
    },
    {
        id: 54,
        title: 'Monster Chess',
        description: 'Play chess with monster-themed pieces in this strategic board game! Challenge your mind and become a master strategist.',
        image: 'images/game54.jpg',
        url: 'games/game-template.html?id=54',
        category: 'strategy',
        iframeUrl: 'https://play.famobi.com/monster-chess'
    },
    {
        id: 55,
        title: 'Monster Golf',
        description: 'Play golf with your favorite monsters in this exciting sports game! Master different shots and win tournaments.',
        image: 'images/game55.jpg',
        url: 'games/game-template.html?id=55',
        category: 'sports',
        iframeUrl: 'https://play.famobi.com/monster-golf'
    },
    {
        id: 56,
        title: 'Monster Bowling',
        description: 'Roll strikes and spares in this monster-themed bowling game! Challenge your friends and become a bowling champion.',
        image: 'images/game56.jpg',
        url: 'games/game-template.html?id=56',
        category: 'sports',
        iframeUrl: 'https://play.famobi.com/monster-bowling'
    },
    {
        id: 57,
        title: 'Monster Pool',
        description: 'Play pool with monster-themed balls in this classic billiards game! Show off your skills and win matches.',
        image: 'images/game57.jpg',
        url: 'games/game-template.html?id=57',
        category: 'sports',
        iframeUrl: 'https://play.famobi.com/monster-pool'
    },
    {
        id: 58,
        title: 'Monster Boxing',
        description: 'Step into the ring with your monster in this exciting boxing game! Punch, dodge, and become the champion.',
        image: 'images/game58.jpg',
        url: 'games/game-template.html?id=58',
        category: 'sports',
        iframeUrl: 'https://play.famobi.com/monster-boxing'
    },
    {
        id: 59,
        title: 'Monster Hockey',
        description: 'Score goals in this fast-paced monster hockey game! Team up with other monsters and win the championship.',
        image: 'images/game59.jpg',
        url: 'games/game-template.html?id=59',
        category: 'sports',
        iframeUrl: 'https://play.famobi.com/monster-hockey'
    },
    {
        id: 60,
        title: 'Monster Volleyball',
        description: 'Spike and serve in this exciting monster volleyball game! Work as a team and win matches.',
        image: 'images/game60.jpg',
        url: 'games/game-template.html?id=60',
        category: 'sports',
        iframeUrl: 'https://play.famobi.com/monster-volleyball'
    },
    {
        id: 61,
        title: 'Monster Racing 2',
        description: 'Race through new tracks in this thrilling sequel to Monster Racing! Use special abilities and win races.',
        image: 'images/game61.jpg',
        url: 'games/game-template.html?id=61',
        category: 'racing',
        iframeUrl: 'https://play.famobi.com/monster-racing-2'
    },
    {
        id: 62,
        title: 'Monster Kart Racing',
        description: 'Race in monster-themed karts in this exciting racing game! Use power-ups and become the champion.',
        image: 'images/game62.jpg',
        url: 'games/game-template.html?id=62',
        category: 'racing',
        iframeUrl: 'https://play.famobi.com/monster-kart-racing'
    },
    {
        id: 63,
        title: 'Monster Bike Racing',
        description: 'Ride monster bikes through challenging tracks in this exciting racing game! Perform stunts and win races.',
        image: 'images/game63.jpg',
        url: 'games/game-template.html?id=63',
        category: 'racing',
        iframeUrl: 'https://play.famobi.com/monster-bike-racing'
    },
    {
        id: 64,
        title: 'Monster Defense 2',
        description: 'Defend your monster kingdom from new threats in this exciting sequel! Build stronger defenses and protect your realm.',
        image: 'images/game64.jpg',
        url: 'games/game-template.html?id=64',
        category: 'strategy',
        iframeUrl: 'https://play.famobi.com/monster-defense-2'
    },
    {
        id: 65,
        title: 'Monster Empire',
        description: 'Build and expand your monster empire in this strategic game! Conquer territories and become the ultimate ruler.',
        image: 'images/game65.jpg',
        url: 'games/game-template.html?id=65',
        category: 'strategy',
        iframeUrl: 'https://play.famobi.com/monster-empire'
    },
    {
        id: 66,
        title: 'Monster Cards 2',
        description: 'Collect and battle with new monster cards in this exciting sequel! Build powerful decks and become the champion.',
        image: 'images/game66.jpg',
        url: 'games/game-template.html?id=66',
        category: 'card',
        iframeUrl: 'https://play.famobi.com/monster-cards-2'
    },
    {
        id: 67,
        title: 'Monster Poker',
        description: 'Play poker with monster-themed cards in this exciting card game! Test your skills and win big.',
        image: 'images/game67.jpg',
        url: 'games/game-template.html?id=67',
        category: 'card',
        iframeUrl: 'https://play.famobi.com/monster-poker'
    },
    {
        id: 68,
        title: 'Monster Arcade 2',
        description: 'Play more classic arcade games with a monster twist! Jump, shoot, and collect coins in this retro-style game.',
        image: 'images/game68.jpg',
        url: 'games/game-template.html?id=68',
        category: 'arcade',
        iframeUrl: 'https://play.famobi.com/monster-arcade-2'
    },
    {
        id: 69,
        title: 'Monster Farm 3',
        description: 'Expand your monster farm even further in this exciting sequel! Breed new species and create a thriving community.',
        image: 'images/game69.jpg',
        url: 'games/game-template.html?id=69',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-farm-3'
    },
    {
        id: 70,
        title: 'Monster Adventure 2',
        description: 'Embark on a new epic adventure with your monster friends! Explore magical worlds and defeat evil forces.',
        image: 'images/game70.jpg',
        url: 'games/game-template.html?id=70',
        category: 'action',
        iframeUrl: 'https://play.famobi.com/monster-adventure-2'
    },
    {
        id: 71,
        title: 'Monster Fishing',
        description: 'Catch unique monsters in this exciting fishing game! Use different baits and techniques to catch rare species.',
        image: 'images/game71.jpg',
        url: 'games/game-template.html?id=71',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-fishing'
    },
    {
        id: 72,
        title: 'Monster Cooking',
        description: 'Cook delicious meals for your monsters in this fun cooking game! Create unique recipes and satisfy hungry monsters.',
        image: 'images/game72.jpg',
        url: 'games/game-template.html?id=72',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-cooking'
    },
    {
        id: 73,
        title: 'Monster Hospital',
        description: 'Run your own monster hospital in this medical simulation game! Heal sick monsters and make them feel better.',
        image: 'images/game73.jpg',
        url: 'games/game-template.html?id=73',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-hospital'
    },
    {
        id: 74,
        title: 'Monster School',
        description: 'Teach young monsters in this educational simulation game! Help them learn and grow into amazing creatures.',
        image: 'images/game74.jpg',
        url: 'games/game-template.html?id=74',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-school'
    },
    {
        id: 75,
        title: 'Monster Restaurant',
        description: 'Manage your own monster restaurant in this business simulation game! Serve delicious food to hungry monsters.',
        image: 'images/game75.jpg',
        url: 'games/game-template.html?id=75',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-restaurant'
    },
    {
        id: 76,
        title: 'Monster Hotel',
        description: 'Run a luxury hotel for monsters in this hospitality simulation game! Make your guests feel comfortable and happy.',
        image: 'images/game76.jpg',
        url: 'games/game-template.html?id=76',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-hotel'
    },
    {
        id: 77,
        title: 'Monster Shop',
        description: 'Manage your own monster shop in this retail simulation game! Sell items and make your customers happy.',
        image: 'images/game77.jpg',
        url: 'games/game-template.html?id=77',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-shop'
    },
    {
        id: 78,
        title: 'Monster Zoo',
        description: 'Create and manage your own monster zoo in this zoo simulation game! Care for exotic monsters and attract visitors.',
        image: 'images/game78.jpg',
        url: 'games/game-template.html?id=78',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-zoo'
    },
    {
        id: 79,
        title: 'Monster Park',
        description: 'Design and run your own monster theme park in this park simulation game! Create exciting attractions for visitors.',
        image: 'images/game79.jpg',
        url: 'games/game-template.html?id=79',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-park'
    },
    {
        id: 80,
        title: 'Monster City',
        description: 'Build and manage your own monster city in this city-building simulation game! Create a thriving monster metropolis.',
        image: 'images/game80.jpg',
        url: 'games/game-template.html?id=80',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-city'
    },
    {
        id: 81,
        title: 'Monster Island',
        description: 'Create your own monster island paradise in this island simulation game! Build a perfect home for your monsters.',
        image: 'images/game81.jpg',
        url: 'games/game-template.html?id=81',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-island'
    },
    {
        id: 82,
        title: 'Monster Castle',
        description: 'Build and defend your monster castle in this castle simulation game! Protect your kingdom from invaders.',
        image: 'images/game82.jpg',
        url: 'games/game-template.html?id=82',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-castle'
    },
    {
        id: 83,
        title: 'Monster Lab',
        description: 'Create and experiment with new monsters in this science simulation game! Discover amazing monster combinations.',
        image: 'images/game83.jpg',
        url: 'games/game-template.html?id=83',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-lab'
    },
    {
        id: 84,
        title: 'Monster Circus',
        description: 'Run your own monster circus in this entertainment simulation game! Train monsters to perform amazing acts.',
        image: 'images/game84.jpg',
        url: 'games/game-template.html?id=84',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-circus'
    },
    {
        id: 85,
        title: 'Monster Museum',
        description: 'Curate your own monster museum in this museum simulation game! Display rare and interesting monster exhibits.',
        image: 'images/game85.jpg',
        url: 'games/game-template.html?id=85',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-museum'
    },
    {
        id: 86,
        title: 'Monster Library',
        description: 'Manage your own monster library in this library simulation game! Organize books and help monsters learn.',
        image: 'images/game86.jpg',
        url: 'games/game-template.html?id=86',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-library'
    },
    {
        id: 87,
        title: 'Monster Bank',
        description: 'Run your own monster bank in this financial simulation game! Help monsters manage their money and investments.',
        image: 'images/game87.jpg',
        url: 'games/game-template.html?id=87',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-bank'
    },
    {
        id: 88,
        title: 'Monster Post Office',
        description: 'Manage your own monster post office in this delivery simulation game! Sort and deliver mail to monster homes.',
        image: 'images/game88.jpg',
        url: 'games/game-template.html?id=88',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-post-office'
    },
    {
        id: 89,
        title: 'Monster Police Station',
        description: 'Run your own monster police station in this law enforcement simulation game! Keep the monster city safe.',
        image: 'images/game89.jpg',
        url: 'games/game-template.html?id=89',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-police-station'
    },
    {
        id: 90,
        title: 'Monster Fire Station',
        description: 'Manage your own monster fire station in this emergency services simulation game! Save monsters from fires.',
        image: 'images/game90.jpg',
        url: 'games/game-template.html?id=90',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-fire-station'
    },
    {
        id: 91,
        title: 'Monster Airport',
        description: 'Run your own monster airport in this aviation simulation game! Manage flights and help monsters travel.',
        image: 'images/game91.jpg',
        url: 'games/game-template.html?id=91',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-airport'
    },
    {
        id: 92,
        title: 'Monster Train Station',
        description: 'Manage your own monster train station in this railway simulation game! Schedule trains and help monsters commute.',
        image: 'images/game92.jpg',
        url: 'games/game-template.html?id=92',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-train-station'
    },
    {
        id: 93,
        title: 'Monster Bus Station',
        description: 'Run your own monster bus station in this transportation simulation game! Organize routes and help monsters travel.',
        image: 'images/game93.jpg',
        url: 'games/game-template.html?id=93',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-bus-station'
    },
    {
        id: 94,
        title: 'Monster Subway',
        description: 'Manage your own monster subway system in this underground transportation simulation game! Keep the trains running on time.',
        image: 'images/game94.jpg',
        url: 'games/game-template.html?id=94',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-subway'
    },
    {
        id: 95,
        title: 'Monster Harbor',
        description: 'Run your own monster harbor in this maritime simulation game! Manage ships and help monsters trade goods.',
        image: 'images/game95.jpg',
        url: 'games/game-template.html?id=95',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-harbor'
    },
    {
        id: 96,
        title: 'Monster Space Station',
        description: 'Manage your own monster space station in this space simulation game! Help monsters explore the cosmos.',
        image: 'images/game96.jpg',
        url: 'games/game-template.html?id=96',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-space-station'
    },
    {
        id: 97,
        title: 'Monster Weather Station',
        description: 'Run your own monster weather station in this meteorology simulation game! Predict weather and help monsters prepare.',
        image: 'images/game97.jpg',
        url: 'games/game-template.html?id=97',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-weather-station'
    },
    {
        id: 98,
        title: 'Monster News Station',
        description: 'Manage your own monster news station in this media simulation game! Report news and keep monsters informed.',
        image: 'images/game98.jpg',
        url: 'games/game-template.html?id=98',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-news-station'
    },
    {
        id: 99,
        title: 'Monster Radio Station',
        description: 'Run your own monster radio station in this broadcasting simulation game! Play music and entertain monster listeners.',
        image: 'images/game99.jpg',
        url: 'games/game-template.html?id=99',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-radio-station'
    },
    {
        id: 100,
        title: 'Monster TV Station',
        description: 'Manage your own monster TV station in this television simulation game! Create shows and entertain monster viewers.',
        image: 'images/game100.jpg',
        url: 'games/game-template.html?id=100',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-tv-station'
    },
    {
        id: 101,
        title: 'Monster Movie Studio',
        description: 'Create blockbuster movies with your monster actors in this film production simulation game! Direct, produce, and entertain monster audiences.',
        image: 'images/game101.jpg',
        url: 'games/game-template.html?id=101',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-movie-studio'
    },
    {
        id: 102,
        title: 'Monster Theater',
        description: 'Run your own monster theater in this performing arts simulation game! Stage plays and musicals for monster audiences.',
        image: 'images/game102.jpg',
        url: 'games/game-template.html?id=102',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-theater'
    },
    {
        id: 103,
        title: 'Monster Concert Hall',
        description: 'Manage your own monster concert hall in this music venue simulation game! Host concerts and entertain monster music lovers.',
        image: 'images/game103.jpg',
        url: 'games/game-template.html?id=103',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-concert-hall'
    },
    {
        id: 104,
        title: 'Monster Art Gallery',
        description: 'Curate your own monster art gallery in this art exhibition simulation game! Display monster artwork and attract visitors.',
        image: 'images/game104.jpg',
        url: 'games/game-template.html?id=104',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-art-gallery'
    },
    {
        id: 105,
        title: 'Monster Sports Arena',
        description: 'Run your own monster sports arena in this sports venue simulation game! Host monster sports events and tournaments.',
        image: 'images/game105.jpg',
        url: 'games/game-template.html?id=105',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-sports-arena'
    },
    {
        id: 106,
        title: 'Monster Shopping Mall',
        description: 'Manage your own monster shopping mall in this retail simulation game! Create a shopping paradise for monster customers.',
        image: 'images/game106.jpg',
        url: 'games/game-template.html?id=106',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-shopping-mall'
    },
    {
        id: 107,
        title: 'Monster Food Court',
        description: 'Run your own monster food court in this dining simulation game! Serve delicious food to hungry monster shoppers.',
        image: 'images/game107.jpg',
        url: 'games/game-template.html?id=107',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-food-court'
    },
    {
        id: 108,
        title: 'Monster Cinema',
        description: 'Manage your own monster cinema in this movie theater simulation game! Show monster movies and entertain audiences.',
        image: 'images/game108.jpg',
        url: 'games/game-template.html?id=108',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-cinema'
    },
    {
        id: 109,
        title: 'Monster Bowling Alley',
        description: 'Run your own monster bowling alley in this entertainment simulation game! Create a fun bowling experience for monster players.',
        image: 'images/game109.jpg',
        url: 'games/game-template.html?id=109',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-bowling-alley'
    },
    {
        id: 110,
        title: 'Monster Arcade Center',
        description: 'Manage your own monster arcade center in this gaming simulation game! Provide entertainment for monster gamers.',
        image: 'images/game110.jpg',
        url: 'games/game-template.html?id=110',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-arcade-center'
    },
    {
        id: 111,
        title: 'Monster Ice Rink',
        description: 'Run your own monster ice rink in this skating simulation game! Create a fun ice skating experience for monster visitors.',
        image: 'images/game111.jpg',
        url: 'games/game-template.html?id=111',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-ice-rink'
    },
    {
        id: 112,
        title: 'Monster Swimming Pool',
        description: 'Manage your own monster swimming pool in this aquatic recreation simulation game! Provide a fun swimming experience for monster visitors.',
        image: 'images/game112.jpg',
        url: 'games/game-template.html?id=112',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-swimming-pool'
    },
    {
        id: 113,
        title: 'Monster Gym',
        description: 'Run your own monster gym in this fitness simulation game! Help monsters stay fit and healthy.',
        image: 'images/game113.jpg',
        url: 'games/game-template.html?id=113',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-gym'
    },
    {
        id: 114,
        title: 'Monster Spa',
        description: 'Manage your own monster spa in this wellness simulation game! Provide relaxation and beauty treatments for monster clients.',
        image: 'images/game114.jpg',
        url: 'games/game-template.html?id=114',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-spa'
    },
    {
        id: 115,
        title: 'Monster Beauty Salon',
        description: 'Run your own monster beauty salon in this beauty simulation game! Style and pamper monster clients.',
        image: 'images/game115.jpg',
        url: 'games/game-template.html?id=115',
        category: 'simulation',
        iframeUrl: 'https://play.famobi.com/monster-beauty-salon'
    }
];

// 当前选中的分类
let currentCategory = 'all';

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    loadGames();
    setupCategoryButtons();
    setupSearchInput();
});

// 加载游戏列表
function loadGames(filteredGames = allGames) {
    const gameGrid = document.querySelector('.game-grid');
    if (!gameGrid) return;

    gameGrid.innerHTML = ''; // 清空现有内容

    filteredGames.forEach(game => {
        const gameCard = createGameCard(game);
        gameGrid.appendChild(gameCard);
    });
}

// 创建游戏卡片
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    
    card.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <h3>${game.title}</h3>
        <p>${game.description}</p>
        <a href="${game.url}" class="play-button">Play Now</a>
    `;
    
    return card;
}

// 设置分类按钮事件
function setupCategoryButtons() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮的active类
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前按钮的active类
            button.classList.add('active');
            
            // 更新当前分类
            currentCategory = button.dataset.category;
            
            // 过滤并显示游戏
            const filteredGames = currentCategory === 'all' 
                ? allGames 
                : allGames.filter(game => game.category === currentCategory);
            
            loadGames(filteredGames);
        });
    });
}

// 设置搜索输入事件
function setupSearchInput() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', debounce(searchGames, 300));
}

// 搜索游戏
function searchGames() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    
    const filteredGames = allGames.filter(game => 
        game.title.toLowerCase().includes(searchTerm) ||
        game.description.toLowerCase().includes(searchTerm)
    );
    
    loadGames(filteredGames);
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
} 