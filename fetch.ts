import fs from 'fs';
import path from 'path';

const baseUrl = 'https://stefanbtw.github.io/orient-bakery-hub/';

const files = {
  supermarket: [
    'supermarket_App.tsx.html',
    'supermarket_Home.tsx.html',
    'supermarket_Produce.tsx.html',
    'supermarket_Wholesale.tsx.html',
    'supermarket_Dashboard.tsx.html',
    'supermarket_SmartPaste.tsx.html',
    'supermarket_Cart.tsx.html',
    'supermarket_Deals.tsx.html',
    'supermarket_Login.tsx.html',
    'supermarket_Register.tsx.html',
    'supermarket_Aisles.tsx.html',
    'supermarket_mockDb.ts.html',
    'supermarket_PreviouslyBought.tsx.html',
    'supermarket_BOGOF.tsx.html',
    'supermarket_Under5.tsx.html',
    'supermarket_Bundles.tsx.html',
    'supermarket_Bakery.tsx.html',
    'supermarket_Receipts.tsx.html',
    'supermarket_Favorites.tsx.html',
    'supermarket_Loyalty.tsx.html',
    'supermarket_Settings.tsx.html'
  ],
  dining: [
    'dining_App.tsx.html',
    'dining_MenuScreen.tsx.html',
    'dining_SommelierScreen.tsx.html',
    'dining_DashboardScreen.tsx.html',
    'dining_AboutScreen.tsx.html',
    'dining_ReservationsScreen.tsx.html',
    'dining_DeliveryScreen.tsx.html'
  ],
  games: [
    'games_App.tsx.html',
    'games_ArenaHud.tsx.html',
    'games_Tournament.tsx.html',
    'games_Hardware.tsx.html',
    'games_VRFrontier.tsx.html',
    'games_Profile.tsx.html',
    'games_Navbar.tsx.html',
    'games_Home.tsx.html',
    'games_ConsoleSelection.tsx.html'
  ],
  water: [
    'water_App.tsx.html',
    'water_Home.tsx.html',
    'water_Process.tsx.html',
    'water_Logistics.tsx.html',
    'water_Impact.tsx.html',
    'water_Quality.tsx.html',
    'water_Navbar.tsx.html',
    'water_Footer.tsx.html'
  ],
  lounge: [
    'lounge_App.tsx.html',
    'lounge_Visualizer.tsx.html',
    'lounge_Menu.tsx.html',
    'lounge_Lab.tsx.html',
    'lounge_Concierge.tsx.html',
    'lounge_Booking.tsx.html'
  ]
};

async function fetchAndSave() {
  for (const [category, fileList] of Object.entries(files)) {
    const dir = path.join(process.cwd(), 'src', category);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    for (const file of fileList) {
      const url = baseUrl + file;
      console.log(`Fetching ${url}...`);
      try {
        const response = await fetch(url);
        let text = await response.text();
        
        // The files are HTML containing the code. We need to extract the code.
        // Usually it's inside a <pre><code> block or similar, or maybe it's just raw text?
        // Let's check the format. If it's HTML, we might need to parse it.
        // Actually, looking at the URL, it ends with .html. Let's just save it first.
        
        const outPath = path.join(dir, file.replace('.html', ''));
        fs.writeFileSync(outPath, text);
        console.log(`Saved ${outPath}`);
      } catch (e) {
        console.error(`Failed to fetch ${url}`, e);
      }
    }
  }
}

fetchAndSave();
