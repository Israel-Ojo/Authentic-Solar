

        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            green: '#059669',     // Emerald Green
                            darkgreen: '#047857',
                            lightgreen: '#ecfdf5',
                            yellow: '#f59e0b',    // Sun Gold/Amber
                            gold: '#fbbf24',
                            dark: '#0f172a',      // Dark Slate
                            slate: '#1e293b'
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        heading: ['Montserrat', 'sans-serif']
                    }
                }
            }
        }
    



        /* Products Data with High Quality Photography Assets */
        const PRODUCTS_DATA = [
            {
                id: 'inv-1',
                name: '1.0kVA / 12V Pure Sine Wave Inverter',
                category: 'inverter',
                price: 'N210,000 - N280,000',
                desc: 'Compact inverter designed for lighting, fans, laptop, and LED TV in flats or offices.',
                img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop',
                badge: 'Popular for Flats'
            },
            {
                id: 'inv-2',
                name: '2.5kVA / 24V Smart Hybrid Inverter',
                category: 'inverter',
                price: 'N380,000 - N490,000',
                desc: 'Powers 1 inverter refrigerator, 5 standing fans, TVs, laptops, and full house LED lighting.',
                img: 'https://images.unsplash.com/photo-1548611716-300181734990?q=80&w=600&auto=format&fit=crop',
                badge: 'Best Value'
            },
            {
                id: 'inv-3',
                name: '3.5kVA / 24V Pure Sine Wave Inverter',
                category: 'inverter',
                price: 'N520,000 - N680,000',
                desc: 'Heavy duty household capacity: supports deep freezers, 1HP pumping machine, fans & TVs.',
                img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop',
                badge: 'Heavy Household'
            },
            {
                id: 'inv-4',
                name: '5.0kVA / 48V Commercial Hybrid Inverter',
                category: 'inverter',
                price: 'N780,000 - N1,100,000',
                desc: 'Commercial or duplex solution. Powers 1.5HP inverter AC, deep freezers, and full office load.',
                img: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=600&auto=format&fit=crop',
                badge: 'Commercial / Villa'
            },
            {
                id: 'pan-1',
                name: '300W Monocrystalline Solar Panel',
                category: 'panel',
                price: 'N85,000 - N110,000',
                desc: 'High efficiency monocrystalline solar cells for fast battery charging in low light.',
                img: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=600&auto=format&fit=crop',
                badge: 'Tier-1 Mono'
            },
            {
                id: 'pan-2',
                name: '550W High-Efficiency Monocrystalline Panel',
                category: 'panel',
                price: 'N140,000 - N175,000',
                desc: 'Bifacial half-cut cells designed for large solar arrays and heavy battery charging.',
                img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop',
                badge: 'High Wattage'
            },
            {
                id: 'bat-1',
                name: '220Ah / 12V Deep Cycle Tubular Gel Battery',
                category: 'battery',
                price: 'N290,000 - N360,000',
                desc: 'Long cycle lifespan, zero maintenance, heavy duty discharge resilience.',
                img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop',
                badge: 'Long Cycle Gel'
            },
            {
                id: 'bat-2',
                name: '5.12kWh / 100Ah Wall Lithium Battery',
                category: 'battery',
                price: 'N1,200,000 - N1,600,000',
                desc: 'LiFePO4 wall powerwall. Fast charging, 10+ year lifespan, lightweight space saver.',
                img: 'https://images.unsplash.com/photo-1548611716-300181734990?q=80&w=600&auto=format&fit=crop',
                badge: 'Lithium Powerwall'
            },
            {
                id: 'app-1',
                name: 'Solar Rechargeable Standing Fan + Panel',
                category: 'appliance',
                price: 'N45,000 - N65,000',
                desc: 'Includes dedicated DC solar panel, battery backup, night LED, and USB phone charging.',
                img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop',
                badge: 'DC Solar Fan'
            }
        ];

        /* Appliance Load Sizing Config */
        const APPLIANCES = [
            { id: 'light', name: 'LED Bulbs / Lights', watts: 15, count: 0, icon: 'fa-lightbulb' },
            { id: 'fan', name: 'Standing / Ceiling Fans', watts: 70, count: 0, icon: 'fa-fan' },
            { id: 'tv', name: 'LED Television (32" - 65")', watts: 100, count: 0, icon: 'fa-tv' },
            { id: 'laptop', name: 'Laptop / Computer', watts: 65, count: 0, icon: 'fa-laptop' },
            { id: 'fridge', name: 'Inverter Refrigerator', watts: 200, count: 0, icon: 'fa-snowflake' },
            { id: 'freezer', name: 'Deep Freezer', watts: 350, count: 0, icon: 'fa-box' },
            { id: 'pump', name: 'Water Pumping Machine (1HP)', watts: 800, count: 0, icon: 'fa-water' },
            { id: 'ac', name: '1.5HP Inverter Air Conditioner', watts: 1200, count: 0, icon: 'fa-wind' }
        ];

        /* Multi-Page Navigation Handler */
        function navigateTo(pageId) {
            // Hide all page views
            document.querySelectorAll('.page-view').forEach(view => {
                view.classList.remove('active');
            });

            // Show selected page
            const activePage = document.getElementById(`page-${pageId}`);
            if (activePage) {
                activePage.classList.add('active');
            } else {
                document.getElementById('page-home').classList.add('active');
            }

            // Update Nav Active Styling
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('bg-brand-lightgreen', 'text-brand-green');
            });
            const activeNavBtn = document.getElementById(`nav-${pageId}`);
            if (activeNavBtn) {
                activeNavBtn.classList.add('bg-brand-lightgreen', 'text-brand-green');
            }

            // Update window URL hash
            window.location.hash = pageId;

            // Scroll smoothly to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        /* Render Collection Products */
        function renderProducts(items) {
            const grid = document.getElementById('products-grid');
            if (!grid) return;

            grid.innerHTML = items.map(item => `
                <div class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between">
                    <div>
                        <div class="h-44 overflow-hidden relative">
                            <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover hover:scale-105 transition duration-500">
                            <span class="absolute top-3 left-3 bg-brand-green text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                                ${item.badge}
                            </span>
                        </div>
                        <div class="p-5">
                            <h3 class="font-bold text-slate-900 text-base mb-2">${item.name}</h3>
                            <p class="text-xs text-slate-600 leading-relaxed mb-3">${item.desc}</p>
                        </div>
                    </div>
                    <div class="p-5 pt-0">
                        <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
                            <div>
                                <span class="text-[10px] text-slate-400 uppercase font-semibold block">Price Range</span>
                                <span class="font-bold text-slate-800 text-xs font-mono">${item.price}</span>
                            </div>
                            <a href="https://wa.me/2347039380365?text=Hello%20Authentic%20Solar!%20I%20want%20to%20buy%20${encodeURIComponent(item.name)}" 
                               target="_blank" 
                               class="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow">
                                <i class="fa-brands fa-whatsapp text-sm"></i> Order
                            </a>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function filterProducts(category) {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                if (btn.dataset.category === category) {
                    btn.classList.add('bg-brand-green', 'text-white', 'shadow');
                    btn.classList.remove('bg-slate-100', 'text-slate-700');
                } else {
                    btn.classList.remove('bg-brand-green', 'text-white', 'shadow');
                    btn.classList.add('bg-slate-100', 'text-slate-700');
                }
            });

            if (category === 'all') {
                renderProducts(PRODUCTS_DATA);
            } else {
                const filtered = PRODUCTS_DATA.filter(p => p.category === category);
                renderProducts(filtered);
            }
        }

        function searchProducts() {
            const query = document.getElementById('product-search-input').value.toLowerCase();
            const filtered = PRODUCTS_DATA.filter(p => p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query));
            renderProducts(filtered);
        }

        /* Calculator Functions */
        function renderCalculator() {
            const container = document.getElementById('appliance-list');
            if (!container) return;

            container.innerHTML = APPLIANCES.map(app => `
                <div class="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between shadow-2xs">
                    <div class="flex items-center space-x-3">
                        <div class="w-9 h-9 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center text-sm">
                            <i class="fa-solid ${app.icon}"></i>
                        </div>
                        <div>
                            <div class="font-semibold text-xs sm:text-sm text-slate-800">${app.name}</div>
                            <div class="text-[11px] text-slate-400 font-mono">~${app.watts}W each</div>
                        </div>
                    </div>
                    
                    <div class="flex items-center space-x-2">
                        <button onclick="updateApplianceCount('${app.id}', -1)" class="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm flex items-center justify-center transition">
                            -
                        </button>
                        <span id="count-${app.id}" class="w-6 text-center font-bold text-sm text-slate-800 font-mono">
                            ${app.count}
                        </span>
                        <button onclick="updateApplianceCount('${app.id}', 1)" class="w-7 h-7 rounded-lg bg-brand-green hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center transition">
                            +
                        </button>
                    </div>
                </div>
            `).join('');

            calculateLoad();
        }

        function updateApplianceCount(id, change) {
            const item = APPLIANCES.find(a => a.id === id);
            if (item) {
                item.count = Math.max(0, item.count + change);
                document.getElementById(`count-${id}`).innerText = item.count;
                calculateLoad();
            }
        }

        function resetCalculator() {
            APPLIANCES.forEach(a => a.count = 0);
            renderCalculator();
        }

        function calculateLoad() {
            let totalWatts = 0;
            APPLIANCES.forEach(a => {
                totalWatts += (a.watts * a.count);
            });

            const totalWattsEl = document.getElementById('total-wattage');
            if (totalWattsEl) totalWattsEl.innerText = `${totalWatts} Watts`;

            let kva = 0;
            let batteries = 0;
            let panels = 0;

            if (totalWatts > 0) {
                const safeWatts = totalWatts * 1.3;
                
                if (safeWatts <= 800) {
                    kva = 1.0; batteries = 1; panels = 2;
                } else if (safeWatts <= 1800) {
                    kva = 2.5; batteries = 2; panels = 4;
                } else if (safeWatts <= 2800) {
                    kva = 3.5; batteries = 2; panels = 6;
                } else if (safeWatts <= 4500) {
                    kva = 5.0; batteries = 4; panels = 8;
                } else {
                    kva = 7.5; batteries = 8; panels = 12;
                }
            }

            const recInverter = document.getElementById('rec-inverter');
            const recBattery = document.getElementById('rec-battery');
            const recPanels = document.getElementById('rec-panels');

            if (recInverter) recInverter.innerText = `${kva.toFixed(1)} kVA`;
            if (recBattery) recBattery.innerText = `${batteries} x 220Ah Battery`;
            if (recPanels) recPanels.innerText = `${panels} x 550W Panels`;

            return { totalWatts, kva, batteries, panels };
        }

        function sendCalculatorToWhatsApp() {
            const { totalWatts, kva, batteries, panels } = calculateLoad();
            const activeAppliances = APPLIANCES.filter(a => a.count > 0).map(a => `${a.count}x ${a.name}`).join(', ');

            if (totalWatts === 0) {
                alert('Please select at least one appliance to calculate your load.');
                return;
            }

            const message = `Hello Authentic Solar Energy! 👋\nI calculated my home load on your website:\n\n` +
                            `*Selected Appliances:* ${activeAppliances}\n` +
                            `*Total Load:* ${totalWatts} Watts\n\n` +
                            `*Recommended System:* \n` +
                            `- Inverter: ${kva.toFixed(1)} kVA Pure Sine Wave\n` +
                            `- Battery Bank: ${batteries} units (12V 220Ah)\n` +
                            `- Solar Panels: ${panels} units (550W)\n\n` +
                            `Please give me a full installation price quote for Lagos.`;

            window.open(`https://wa.me/2347039380365?text=${encodeURIComponent(message)}`, '_blank');
        }

        /* AI Chatbot Logic */
        function openChatModal() { document.getElementById('chat-modal').classList.remove('hidden'); }
        function closeChatModal() { document.getElementById('chat-modal').classList.add('hidden'); }
        function toggleChatModal() { document.getElementById('chat-modal').classList.toggle('hidden'); }

        function sendQuickPrompt(promptText) {
            document.getElementById('chat-input').value = promptText;
            handleChatSubmit(new Event('submit'));
        }

        function appendMessage(sender, text) {
            const chatLog = document.getElementById('chat-messages');
            const messageDiv = document.createElement('div');
            messageDiv.className = sender === 'user' ? 'flex items-start justify-end gap-2.5' : 'flex items-start gap-2.5';

            if (sender === 'user') {
                messageDiv.innerHTML = `
                    <div class="bg-brand-green text-white rounded-2xl rounded-tr-none p-3.5 text-xs sm:text-sm shadow-sm max-w-[85%]">
                        <p>${escapeHtml(text)}</p>
                    </div>
                    <div class="w-8 h-8 rounded-full bg-slate-800 text-brand-gold flex items-center justify-center text-xs shrink-0 font-bold">
                        You
                    </div>
                `;
            } else {
                messageDiv.innerHTML = `
                    <div class="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center text-xs shrink-0 font-bold">
                        AI
                    </div>
                    <div class="bg-white border border-slate-200 text-slate-800 rounded-2xl rounded-tl-none p-3.5 text-xs sm:text-sm shadow-sm max-w-[85%] space-y-2">
                        ${text}
                    </div>
                `;
            }

            chatLog.appendChild(messageDiv);
            chatLog.scrollTop = chatLog.scrollHeight;
        }

        function escapeHtml(string) {
            return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }

        function handleChatSubmit(event) {
            event.preventDefault();
            const inputField = document.getElementById('chat-input');
            const userQuery = inputField.value.trim();

            if (!userQuery) return;

            appendMessage('user', userQuery);
            inputField.value = '';

            const typingId = showTypingIndicator();

            setTimeout(() => {
                removeTypingIndicator(typingId);
                const botResponse = generateSolarBotAnswer(userQuery);
                appendMessage('bot', botResponse);
            }, 600);
        }

        function showTypingIndicator() {
            const chatLog = document.getElementById('chat-messages');
            const indicator = document.createElement('div');
            indicator.id = 'typing-indicator';
            indicator.className = 'flex items-start gap-2.5';
            indicator.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center text-xs shrink-0 font-bold">
                    AI
                </div>
                <div class="bg-white border border-slate-200 text-slate-500 rounded-2xl p-3 text-xs shadow-sm flex items-center gap-1.5">
                    <span class="animate-bounce">●</span>
                    <span class="animate-bounce delay-100">●</span>
                    <span class="animate-bounce delay-200">●</span>
                    <span class="ml-1 text-[11px]">Calculating load requirement...</span>
                </div>
            `;
            chatLog.appendChild(indicator);
            chatLog.scrollTop = chatLog.scrollHeight;
            return 'typing-indicator';
        }

        function removeTypingIndicator(id) {
            const el = document.getElementById(id);
            if (el) el.remove();
        }

        /* Dedicated Solar & Load Calculation Engine */
        function generateSolarBotAnswer(query) {
            const q = query.toLowerCase();

            const solarKeywords = ['inverter', 'panel', 'battery', 'kva', 'watt', 'solar', 'fridge', 'freezer', 'fan', 'tv', 'ac', 'pump', 'light', 'price', 'cost', 'ikotun', 'lagos', 'authentic', 'ups', 'lithium', 'tubular', 'load'];
            
            const isRelated = solarKeywords.some(keyword => q.includes(keyword));

            if (!isRelated) {
                return `<p>I am specialized exclusively in **Inverters, Solar Panels, Batteries, and Load Calculations** for Authentic Solar Energy.</p>
                <p class="text-xs text-slate-500">Please describe your household appliances e.g. "I have 1 freezer, 3 fans, and 1 TV" to calculate your inverter kVA!</p>`;
            }

            let calculatedWatts = 0;
            let detectedAppliances = [];

            if (q.includes('fridge') || q.includes('refrigerator')) {
                calculatedWatts += 200;
                detectedAppliances.push('1x Refrigerator');
            }
            if (q.includes('freezer')) {
                calculatedWatts += 350;
                detectedAppliances.push('1x Deep Freezer');
            }
            if (q.includes('fan')) {
                const match = q.match(/(\d+)\s*fan/);
                const count = match ? parseInt(match[1]) : 3;
                calculatedWatts += (70 * count);
                detectedAppliances.push(`${count}x Fans`);
            }
            if (q.includes('tv') || q.includes('television')) {
                calculatedWatts += 100;
                detectedAppliances.push('1x TV');
            }
            if (q.includes('ac') || q.includes('air conditioner')) {
                calculatedWatts += 1200;
                detectedAppliances.push('1x 1.5HP Inverter AC');
            }

            if (calculatedWatts > 0) {
                let recKva = 1.0;
                let recBatteries = 1;
                let recPanels = 2;

                const safeWatts = calculatedWatts * 1.3;
                if (safeWatts <= 800) { recKva = 1.0; recBatteries = 1; recPanels = 2; }
                else if (safeWatts <= 1800) { recKva = 2.5; recBatteries = 2; recPanels = 4; }
                else if (safeWatts <= 2800) { recKva = 3.5; recBatteries = 2; recPanels = 6; }
                else if (safeWatts <= 4500) { recKva = 5.0; recBatteries = 4; recPanels = 8; }
                else { recKva = 7.5; recBatteries = 8; recPanels = 12; }

                return `
                    <p class="font-bold text-brand-green">📊 Load Calculation Result:</p>
                    <p class="text-xs text-slate-600">Detected: ${detectedAppliances.join(', ')} (~${calculatedWatts}W)</p>
                    <div class="bg-slate-100 p-2.5 rounded-xl text-xs space-y-1 font-mono my-1 border border-slate-200">
                        <div>⚡ Inverter: <strong>${recKva.toFixed(1)} kVA Pure Sine Wave</strong></div>
                        <div>🔋 Battery: <strong>${recBatteries}x 220Ah Deep Cycle</strong></div>
                        <div>☀️ Panels: <strong>${recPanels}x 550W Panels</strong></div>
                    </div>
                    <a href="https://wa.me/2347039380365?text=Hello%20Authentic%20Solar!%20Your%20AI%20recommended%20a%20${recKva.toFixed(1)}kVA%20system%20for%20my%20load." target="_blank" class="inline-flex items-center gap-1.5 bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-emerald-700 transition">
                        <i class="fa-brands fa-whatsapp"></i> Order on WhatsApp
                    </a>
                `;
            }

            if (q.includes('3.5kva') || q.includes('3.5 kva')) {
                return `
                    <p class="font-bold text-slate-900">⚡ 3.5kVA / 24V Pure Sine Wave System:</p>
                    <p class="text-xs text-slate-600">Powers 1 Deep Freezer, 5 Fans, 2 TVs, Laptops, and LED bulbs comfortably.</p>
                    <p class="text-xs font-semibold text-brand-green mt-1">Includes site evaluation at Abaranje Ikotun & across Lagos.</p>
                `;
            }

            return `
                <p>At <strong>Authentic Solar Energy</strong>, we supply and install:</p>
                <ul class="list-disc list-inside text-xs space-y-1 text-slate-600 my-1">
                    <li>Pure Sine Wave Inverters (1kVA - 10kVA)</li>
                    <li>Tier-1 Monocrystalline Solar Panels</li>
                    <li>Deep Cycle Tubular Gel & Lithium Batteries</li>
                </ul>
                <p class="text-xs">Would you like me to calculate your load requirement?</p>
            `;
        }

        function handleContactSubmit(event) {
            event.preventDefault();
            alert('Thank you for reaching out to Authentic Solar Energy! Our engineer will contact you shortly.');
            event.target.reset();
        }

        /* Initial Load Router */
        window.onload = function() {
            renderProducts(PRODUCTS_DATA);
            renderCalculator();

            const initialHash = window.location.hash.replace('#', '') || 'home';
            navigateTo(initialHash);
        };
    