
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Plus Jakarta Sans', 'sans-serif'],
          },
          colors: {
            brand: {
              green: '#008751',
              darkgreen: '#005c37',
              lightgreen: '#20c997',
              gold: '#FACC15',
              yellow: '#EAB308',
            }
          }
        }
      }
    }


    // PAGE ROUTING LOGIC
    function navigateTo(pageId) {
      const pages = document.querySelectorAll('.page-section');
      pages.forEach(page => page.classList.add('hidden'));

      const selectedPage = document.getElementById(pageId);
      if (selectedPage) {
        selectedPage.classList.remove('hidden');
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Highlight active nav button
      const navBtns = document.querySelectorAll('.nav-btn');
      navBtns.forEach(btn => btn.classList.remove('text-brand-green', 'dark:text-emerald-400', 'bg-slate-100', 'dark:bg-slate-800'));
      
      const activeNav = document.getElementById('nav-' + pageId);
      if (activeNav) {
        activeNav.classList.add('text-brand-green', 'dark:text-emerald-400', 'bg-slate-100', 'dark:bg-slate-800');
      }
    }

    // Handle Hash on Initial Load
    window.addEventListener('DOMContentLoaded', () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      navigateTo(hash);
      calculateLoad();
    });

    // DARK / LIGHT THEME TOGGLE
    function toggleTheme() {
      document.documentElement.classList.toggle('dark');
    }

    // MOBILE MENU TOGGLE
    function toggleMobileMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
    }

    // CATALOG FILTERING
    function filterCatalog(e, category) {
      const items = document.querySelectorAll('.catalog-item');
      const buttons = document.querySelectorAll('.cat-btn');

      buttons.forEach(btn => {
        btn.classList.remove('bg-brand-green', 'text-white');
        btn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
      });

      if (e && e.currentTarget) {
        e.currentTarget.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
        e.currentTarget.classList.add('bg-brand-green', 'text-white');
      }

      items.forEach(item => {
        if (category === 'all' || item.classList.contains('category-' + category)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    }

    // HOUSEHOLD CALCULATOR LOGIC
    const counts = { fan: 2, bulb: 6, tv: 1, fridge: 1, ac: 0, laptop: 1 };
    const wattsPerAppliance = { fan: 60, bulb: 15, tv: 120, fridge: 350, ac: 800, laptop: 65 };

    function updateCalc(type, delta) {
      counts[type] = Math.max(0, counts[type] + delta);
      document.getElementById(`${type}-count`).innerText = counts[type];
      calculateLoad();
    }

    function calculateLoad() {
      let totalWatts = 0;
      for (const item in counts) {
        totalWatts += counts[item] * wattsPerAppliance[item];
      }

      document.getElementById('total-watts').innerText = totalWatts + " Watts";

      let recInverter = "1.5 kVA";
      let recPanels = "2x 550W Panels";
      let recBattery = "2x 220Ah Tubular";

      if (totalWatts > 3000) {
        recInverter = "7.5 kVA - 10 kVA";
        recPanels = "8x to 12x 550W Panels";
        recBattery = "8x 220Ah OR 10kWh Lithium";
      } else if (totalWatts > 1800) {
        recInverter = "5.5 kVA Hybrid";
        recPanels = "6x 550W Panels";
        recBattery = "4x 220Ah OR 5kWh Lithium";
      } else if (totalWatts > 800) {
        recInverter = "3.5 kVA System";
        recPanels = "4x 550W Panels";
        recBattery = "2x - 4x 220Ah Batteries";
      }

      document.getElementById('rec-inverter').innerText = recInverter;
      document.getElementById('rec-panels').innerText = recPanels;
      document.getElementById('rec-battery').innerText = recBattery;

      const waMsg = `Hello Authentic Solar! I used your Solar Estimator. My load is ${totalWatts}W (${counts.fan} Fans, ${counts.bulb} Bulbs, ${counts.tv} TVs, ${counts.fridge} Fridges, ${counts.ac} ACs). Please send me a quote for a ${recInverter} system.`;
      document.getElementById('calc-whatsapp-btn').href = `https://wa.me/2347039380365?text=${encodeURIComponent(waMsg)}`;
    }

    // CHATBOT LOGIC
    function toggleChat() {
      const chatWin = document.getElementById('chat-window');
      chatWin.classList.toggle('hidden');
    }

    function sendQuickMsg(text) {
      document.getElementById('chat-input').value = text;
      handleChatSubmit(new Event('submit'));
    }

    function handleChatSubmit(e) {
      e.preventDefault();
      const input = document.getElementById('chat-input');
      const query = input.value.trim();
      if (!query) return;

      appendChatMessage('user', query);
      input.value = '';

      setTimeout(() => {
        const botReply = generateSolarBotReply(query);
        appendChatMessage('bot', botReply);
      }, 600);
    }

    function appendChatMessage(sender, message) {
      const messagesContainer = document.getElementById('chat-messages');
      const isUser = sender === 'user';

      const msgDiv = document.createElement('div');
      msgDiv.className = `flex gap-2.5 ${isUser ? 'justify-end' : ''}`;

      if (isUser) {
        msgDiv.innerHTML = `
          <div class="bg-brand-green text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] font-medium">
            ${message}
          </div>
        `;
      } else {
        msgDiv.innerHTML = `
          <div class="w-7 h-7 rounded-full bg-brand-green text-white flex items-center justify-center text-xs flex-shrink-0 mt-1">
            <i class="fas fa-robot"></i>
          </div>
          <div class="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none text-slate-800 dark:text-slate-200 max-w-[85%] space-y-2">
            ${message}
          </div>
        `;
      }

      messagesContainer.appendChild(msgDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function generateSolarBotReply(q) {
      const query = q.toLowerCase();

      // Guard against non-solar topics
      if (!query.includes('fan') && !query.includes('fridge') && !query.includes('ac') && !query.includes('kva') && !query.includes('panel') && !query.includes('battery') && !query.includes('inverter') && !query.includes('solar') && !query.includes('cost') && !query.includes('price') && !query.includes('watt') && !query.includes('light') && !query.includes('tv')) {
        return "<p>I am trained exclusively on <strong>Inverters, Solar Panels, and Battery Load Sizing</strong> for Authentic Solar Energy. Please tell me about your home appliances or solar inquiries!</p>";
      }

      // Calculation logic based on keywords
      if (query.includes('kva') || query.includes('need') || query.includes('fan') || query.includes('fridge') || query.includes('ac') || query.includes('tv')) {
        let watts = 0;
        if (query.includes('fan')) watts += 120;
        if (query.includes('tv')) watts += 120;
        if (query.includes('fridge') || query.includes('freezer')) watts += 400;
        if (query.includes('ac') || query.includes('aircon')) watts += 900;
        if (query.includes('bulb') || query.includes('light')) watts += 80;

        let kva = "1.5 kVA";
        let panels = "2x 550W Panels";
        let batt = "2x 220Ah Tubular Batteries";

        if (watts > 1200) {
          kva = "5.5 kVA Hybrid";
          panels = "6x 550W Panels";
          batt = "4x 220Ah OR 5kWh Lithium";
        } else if (watts > 600) {
          kva = "3.5 kVA System";
          panels = "4x 550W Panels";
          batt = "2x to 4x 220Ah Batteries";
        }

        const quoteMsg = encodeURIComponent(`Hello! AI Chat recommended a ${kva} system for my appliances. Please send me a full quote.`);

        return `<p>Based on your description, here is our recommended setup:</p>
          <ul class="list-disc pl-4 space-y-1 my-1 text-xs">
            <li><strong>Inverter:</strong> ${kva} Pure Sine Wave</li>
            <li><strong>Solar Panels:</strong> ${panels}</li>
            <li><strong>Battery Bank:</strong> ${batt}</li>
          </ul>
          <a href="https://wa.me/2347039380365?text=${quoteMsg}" target="_blank" class="inline-block mt-2 px-3 py-1.5 bg-emerald-600 text-white rounded-lg font-bold text-xs"><i class="fab fa-whatsapp mr-1"></i> Get Price Quote on WhatsApp</a>`;
      }

      if (query.includes('battery') || query.includes('tubular') || query.includes('lithium')) {
        return `<p>We stock both <strong>Tubular Deep-Cycle</strong> and <strong>Lithium LiFePO4</strong> batteries:</p>
          <ul class="list-disc pl-4 space-y-1 text-xs">
            <li><strong>Tubular (220Ah / 12V):</strong> Affordable, heavy duty, standard 1.5 - 3 year lifespan.</li>
            <li><strong>Lithium (5kWh / 48V):</strong> 10+ year lifespan, 90% deep discharge, faster solar charging.</li>
          </ul>`;
      }

      return `<p>We offer original Pure Sine Wave inverters, 550W Monocrystalline solar panels, and tubular/lithium batteries with professional installation in Lagos.</p>
        <p class="text-xs">Call us at <strong>07039380365</strong> or <a href="https://wa.me/2347039380365" target="_blank" class="text-emerald-500 font-bold underline">chat on WhatsApp</a> for exact pricing.</p>`;
    }
  
