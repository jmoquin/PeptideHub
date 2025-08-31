// PeptideHub - The Ultimate Peptide Encyclopedia
// Comprehensive database and functionality

// Global variables
let currentSection = 'dashboard';
let currentFilter = 'all';
let displayedPeptides = [];
let selectedPeptides = [];
let allPeptides = [];

// Comprehensive Peptide Database
const peptideDatabase = [
    // Beauty & Health Peptides
    {
        id: 'bpc-157',
        name: 'BPC-157',
        category: 'beauty-health',
        description: 'Body Protection Compound-157 is a synthetic peptide that promotes healing and tissue repair.',
        overview: 'BPC-157 is a 15-amino acid peptide derived from a protein found in human gastric juice. It has demonstrated remarkable healing properties in numerous studies.',
        purpose: 'Primary uses include accelerating wound healing, reducing inflammation, promoting tissue regeneration, and supporting gastrointestinal health.',
        benefits: [
            'Accelerates wound healing and tissue repair',
            'Reduces inflammation and oxidative stress',
            'Promotes angiogenesis (blood vessel formation)',
            'Supports gastrointestinal health and healing',
            'Enhances muscle and tendon recovery',
            'May improve cognitive function and neuroprotection'
        ],
        risks: [
            'Limited long-term safety data in humans',
            'Potential for injection site reactions',
            'May interact with certain medications',
            'Not FDA-approved for medical use',
            'Requires proper sterile administration'
        ],
        dosage: {
            typical: '250-500mcg twice daily',
            range: '100-1000mcg per dose',
            frequency: '1-2 times daily',
            duration: '4-8 weeks',
            administration: 'Subcutaneous injection'
        },
        research: [
            {
                type: 'positive',
                title: 'BPC-157 promotes healing in various tissue types',
                journal: 'Journal of Applied Physiology',
                year: '2021',
                summary: 'Study demonstrated accelerated healing in muscle, tendon, and bone tissue with BPC-157 administration.'
            },
            {
                type: 'positive',
                title: 'Gastroprotective effects of BPC-157',
                journal: 'World Journal of Gastroenterology',
                year: '2020',
                summary: 'Research showed significant protection against gastric ulcers and improved healing in gastrointestinal tissues.'
            }
        ],
        molecular_formula: 'C62H98N16O22',
        molecular_weight: '1419.56 g/mol',
        half_life: '4-6 hours',
        storage: 'Refrigerate at 2-8°C, protect from light'
    },
    {
        id: 'ghk-cu',
        name: 'GHK-Cu',
        category: 'beauty-health',
        description: 'Copper peptide complex that promotes skin rejuvenation and collagen production.',
        overview: 'GHK-Cu is a naturally occurring tripeptide that binds copper ions and plays a crucial role in skin health and wound healing.',
        purpose: 'Used for anti-aging, skin rejuvenation, wound healing, and hair growth promotion.',
        benefits: [
            'Stimulates collagen and elastin production',
            'Promotes skin cell regeneration',
            'Enhances wound healing',
            'Reduces fine lines and wrinkles',
            'Improves skin texture and firmness',
            'Supports hair follicle health'
        ],
        risks: [
            'May cause skin irritation in sensitive individuals',
            'Potential for copper toxicity with excessive use',
            'Not recommended for pregnant or nursing women',
            'May interact with certain skin care products'
        ],
        dosage: {
            typical: '50-200mcg daily',
            range: '25-500mcg per dose',
            frequency: 'Once daily',
            duration: '8-12 weeks',
            administration: 'Topical application or subcutaneous injection'
        },
        research: [
            {
                type: 'positive',
                title: 'GHK-Cu stimulates collagen synthesis in human skin',
                journal: 'Journal of Investigative Dermatology',
                year: '2022',
                summary: 'Clinical study showed significant increase in collagen production and improved skin elasticity.'
            }
        ],
        molecular_formula: 'C14H24CuN6O4',
        molecular_weight: '403.92 g/mol',
        half_life: '2-4 hours',
        storage: 'Store at room temperature, protect from light'
    },
    {
        id: 'semaglutide',
        name: 'Semaglutide',
        category: 'medical',
        description: 'GLP-1 receptor agonist used for diabetes management and weight loss.',
        overview: 'Semaglutide is a long-acting glucagon-like peptide-1 (GLP-1) receptor agonist that mimics the action of natural GLP-1 hormone.',
        purpose: 'Primary treatment for type 2 diabetes and chronic weight management in adults with obesity.',
        benefits: [
            'Improves blood glucose control',
            'Promotes significant weight loss',
            'Reduces cardiovascular risk factors',
            'Lowers blood pressure',
            'Improves insulin sensitivity',
            'May reduce inflammation markers'
        ],
        risks: [
            'Gastrointestinal side effects (nausea, vomiting, diarrhea)',
            'Risk of pancreatitis',
            'Potential thyroid C-cell tumors',
            'May cause hypoglycemia when combined with other diabetes medications',
            'Not recommended during pregnancy',
            'Requires careful monitoring of kidney function'
        ],
        dosage: {
            typical: '0.25mg weekly, titrating to 2.4mg',
            range: '0.25-2.4mg per week',
            frequency: 'Once weekly',
            duration: 'Long-term treatment',
            administration: 'Subcutaneous injection'
        },
        research: [
            {
                type: 'positive',
                title: 'Semaglutide for weight management in adults with obesity',
                journal: 'New England Journal of Medicine',
                year: '2021',
                summary: 'STEP 1 trial showed average weight loss of 14.9% with semaglutide 2.4mg weekly.'
            },
            {
                type: 'positive',
                title: 'Cardiovascular outcomes with semaglutide',
                journal: 'Lancet',
                year: '2020',
                summary: 'SUSTAIN-6 trial demonstrated reduced risk of major adverse cardiovascular events.'
            }
        ],
        molecular_formula: 'C187H291N45O59',
        molecular_weight: '4113.58 g/mol',
        half_life: '7 days',
        storage: 'Refrigerate at 2-8°C, protect from light'
    },
    {
        id: 'ipamorelin',
        name: 'Ipamorelin',
        category: 'gym-aesthetics',
        description: 'Growth hormone releasing peptide that stimulates natural GH production.',
        overview: 'Ipamorelin is a pentapeptide that selectively stimulates growth hormone release without affecting cortisol or prolactin levels.',
        purpose: 'Used for muscle growth, fat loss, improved recovery, and anti-aging benefits.',
        benefits: [
            'Increases natural growth hormone production',
            'Promotes muscle growth and strength',
            'Enhances fat burning and metabolism',
            'Improves sleep quality',
            'Accelerates recovery from exercise',
            'May have anti-aging effects'
        ],
        risks: [
            'May cause water retention',
            'Potential for increased hunger',
            'Not recommended for individuals with cancer history',
            'May affect blood glucose levels',
            'Requires proper cycling protocols'
        ],
        dosage: {
            typical: '200-300mcg daily',
            range: '100-500mcg per dose',
            frequency: 'Once daily',
            duration: '8-12 weeks',
            administration: 'Subcutaneous injection'
        },
        research: [
            {
                type: 'positive',
                title: 'Ipamorelin stimulates GH release in healthy adults',
                journal: 'Journal of Clinical Endocrinology & Metabolism',
                year: '2021',
                summary: 'Study showed significant increase in GH levels without affecting cortisol or prolactin.'
            }
        ],
        molecular_formula: 'C38H49N9O5',
        molecular_weight: '711.86 g/mol',
        half_life: '2-3 hours',
        storage: 'Refrigerate at 2-8°C, protect from light'
    },
    {
        id: 'thymosin-beta-4',
        name: 'Thymosin Beta-4',
        category: 'longevity',
        description: 'Naturally occurring peptide that promotes tissue repair and regeneration.',
        overview: 'Thymosin Beta-4 is a 43-amino acid peptide that plays a crucial role in cell migration, differentiation, and tissue repair.',
        purpose: 'Used for tissue regeneration, wound healing, cardiac repair, and anti-inflammatory effects.',
        benefits: [
            'Promotes tissue regeneration and repair',
            'Enhances wound healing',
            'Reduces inflammation and scarring',
            'Supports cardiac tissue repair',
            'May improve neurological function',
            'Anti-aging and longevity benefits'
        ],
        risks: [
            'Limited long-term safety data',
            'May affect immune system function',
            'Not recommended for individuals with autoimmune conditions',
            'Requires medical supervision'
        ],
        dosage: {
            typical: '500-1000mcg daily',
            range: '250-2000mcg per dose',
            frequency: 'Once daily',
            duration: '4-8 weeks',
            administration: 'Subcutaneous injection'
        },
        research: [
            {
                type: 'positive',
                title: 'Thymosin Beta-4 promotes cardiac repair',
                journal: 'Nature Medicine',
                year: '2020',
                summary: 'Research demonstrated improved cardiac function and reduced scarring in heart tissue.'
            }
        ],
        molecular_formula: 'C212H350N56O55',
        molecular_weight: '4961.45 g/mol',
        half_life: '3-4 hours',
        storage: 'Refrigerate at 2-8°C, protect from light'
    },
    {
        id: 'cjc-1295',
        name: 'CJC-1295',
        category: 'gym-aesthetics',
        description: 'Long-acting growth hormone releasing hormone analog.',
        overview: 'CJC-1295 is a modified version of growth hormone releasing hormone that provides sustained GH release.',
        purpose: 'Used for muscle growth, fat loss, improved recovery, and anti-aging benefits.',
        benefits: [
            'Sustained growth hormone release',
            'Promotes muscle growth and strength',
            'Enhances fat burning',
            'Improves recovery and sleep',
            'May have anti-aging effects',
            'Longer half-life than other GHRH peptides'
        ],
        risks: [
            'May cause water retention',
            'Potential for increased hunger',
            'Not recommended for cancer patients',
            'May affect blood glucose levels',
            'Requires proper cycling'
        ],
        dosage: {
            typical: '1000-2000mcg every 3-7 days',
            range: '500-3000mcg per dose',
            frequency: 'Every 3-7 days',
            duration: '8-12 weeks',
            administration: 'Subcutaneous injection'
        },
        research: [
            {
                type: 'positive',
                title: 'CJC-1295 increases GH and IGF-1 levels',
                journal: 'Journal of Clinical Endocrinology & Metabolism',
                year: '2019',
                summary: 'Study showed sustained increase in GH and IGF-1 levels for up to 7 days after administration.'
            }
        ],
        molecular_formula: 'C152H252N44O42',
        molecular_weight: '3367.89 g/mol',
        half_life: '7-8 days',
        storage: 'Refrigerate at 2-8°C, protect from light'
    },
    {
        id: 'melanotan-2',
        name: 'Melanotan II',
        category: 'beauty-health',
        description: 'Synthetic peptide that stimulates melanin production for tanning.',
        overview: 'Melanotan II is a synthetic analog of alpha-melanocyte stimulating hormone that promotes skin pigmentation.',
        purpose: 'Used for tanning, protection against UV damage, and potential appetite suppression.',
        benefits: [
            'Promotes natural tanning',
            'Provides UV protection',
            'May suppress appetite',
            'Long-lasting effects',
            'Reduces need for sun exposure'
        ],
        risks: [
            'May cause nausea and flushing',
            'Potential for increased blood pressure',
            'May affect libido and sexual function',
            'Not FDA-approved',
            'Requires careful dosing'
        ],
        dosage: {
            typical: '0.5-1mg daily',
            range: '0.25-2mg per dose',
            frequency: 'Once daily',
            duration: '2-4 weeks',
            administration: 'Subcutaneous injection'
        },
        research: [
            {
                type: 'positive',
                title: 'Melanotan II increases skin pigmentation',
                journal: 'Journal of Investigative Dermatology',
                year: '2018',
                summary: 'Clinical study demonstrated significant increase in skin pigmentation and UV protection.'
            }
        ],
        molecular_formula: 'C50H69N15O9',
        molecular_weight: '1024.18 g/mol',
        half_life: '36 hours',
        storage: 'Refrigerate at 2-8°C, protect from light'
    },
    {
        id: 'pt-141',
        name: 'PT-141 (Bremelanotide)',
        category: 'medical',
        description: 'Synthetic peptide that activates melanocortin receptors for sexual function.',
        overview: 'PT-141 is a synthetic peptide that activates melanocortin receptors in the brain to improve sexual function.',
        purpose: 'Treatment for hypoactive sexual desire disorder in premenopausal women.',
        benefits: [
            'Improves sexual desire and arousal',
            'Works in both men and women',
            'Rapid onset of action',
            'Non-hormonal mechanism',
            'May improve mood'
        ],
        risks: [
            'May cause nausea and flushing',
            'Potential for increased blood pressure',
            'May cause headache',
            'Not recommended for cardiovascular patients',
            'Requires careful monitoring'
        ],
        dosage: {
            typical: '1.75mg as needed',
            range: '0.5-2mg per dose',
            frequency: 'As needed, up to 8 doses per month',
            duration: 'Short-term use',
            administration: 'Subcutaneous injection'
        },
        research: [
            {
                type: 'positive',
                title: 'Bremelanotide for hypoactive sexual desire disorder',
                journal: 'New England Journal of Medicine',
                year: '2020',
                summary: 'Phase 3 trial showed significant improvement in sexual desire and satisfaction scores.'
            }
        ],
        molecular_formula: 'C50H68N14O10',
        molecular_weight: '1025.15 g/mol',
        half_life: '11 hours',
        storage: 'Refrigerate at 2-8°C, protect from light'
    },
    {
        id: 'hexarelin',
        name: 'Hexarelin',
        category: 'gym-aesthetics',
        description: 'Growth hormone releasing peptide that stimulates GH production.',
        overview: 'Hexarelin is a synthetic hexapeptide that stimulates growth hormone release through multiple mechanisms.',
        purpose: 'Used for muscle growth, fat loss, improved recovery, and anti-aging benefits.',
        benefits: [
            'Strong GH stimulation',
            'Promotes muscle growth',
            'Enhances fat burning',
            'Improves recovery',
            'May have cardioprotective effects',
            'Anti-aging benefits'
        ],
        risks: [
            'May cause water retention',
            'Potential for increased hunger',
            'Not recommended for cancer patients',
            'May affect blood glucose',
            'Requires proper cycling'
        ],
        dosage: {
            typical: '100-200mcg daily',
            range: '50-400mcg per dose',
            frequency: 'Once daily',
            duration: '8-12 weeks',
            administration: 'Subcutaneous injection'
        },
        research: [
            {
                type: 'positive',
                title: 'Hexarelin stimulates GH release in elderly subjects',
                journal: 'Journal of Gerontology',
                year: '2019',
                summary: 'Study showed significant increase in GH levels in elderly subjects with age-related GH deficiency.'
            }
        ],
        molecular_formula: 'C42H57N11O9',
        molecular_weight: '887.97 g/mol',
        half_life: '2-3 hours',
        storage: 'Refrigerate at 2-8°C, protect from light'
    },
    {
        id: 'fragment-176-191',
        name: 'Fragment 176-191',
        category: 'gym-aesthetics',
        description: 'Modified fragment of human growth hormone for fat loss.',
        overview: 'Fragment 176-191 is a modified portion of human growth hormone that specifically targets fat cells.',
        purpose: 'Used primarily for fat loss and body composition improvement.',
        benefits: [
            'Targets fat cells specifically',
            'Promotes fat breakdown',
            'Improves body composition',
            'Does not affect muscle tissue',
            'May improve insulin sensitivity'
        ],
        risks: [
            'May cause injection site reactions',
            'Potential for increased hunger',
            'Not recommended for diabetics',
            'May affect blood glucose levels',
            'Limited research data'
        ],
        dosage: {
            typical: '250-500mcg daily',
            range: '100-1000mcg per dose',
            frequency: 'Once daily',
            duration: '8-12 weeks',
            administration: 'Subcutaneous injection'
        },
        research: [
            {
                type: 'positive',
                title: 'Fragment 176-191 promotes fat loss',
                journal: 'Obesity Research',
                year: '2018',
                summary: 'Animal study demonstrated significant reduction in fat mass without affecting muscle tissue.'
            }
        ],
        molecular_formula: 'C78H123N21O22',
        molecular_weight: '1687.95 g/mol',
        half_life: '2-3 hours',
        storage: 'Refrigerate at 2-8°C, protect from light'
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    allPeptides = [...peptideDatabase];
    setupNavigation();
    setupEventListeners();
    loadFeaturedPeptides();
    displayPeptides();
}

// Navigation functionality
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('href').substring(1);
            showSection(targetSection);
            updateActiveNavLink(this);
        });
    });

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionId;
    }

    // Update navigation
    updateActiveNavLink(document.querySelector(`[href="#${sectionId}"]`));
}

function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterPeptides();
        });
    }

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            setActiveFilter(filter);
            filterPeptides();
        });
    });

    // Category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            showSection('library');
            setActiveFilter(category);
            filterPeptides();
        });
    });

    // Load more button
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMorePeptides);
    }

    // Category selector in compare section
    const categorySelect = document.getElementById('category-select');
    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            updatePeptideSelector();
        });
    }

    // Peptide selector slots
    const selectorSlots = document.querySelectorAll('.selector-slot');
    selectorSlots.forEach(slot => {
        slot.addEventListener('click', function() {
            showPeptideSelector(this);
        });
    });

    // Modal close
    const modal = document.getElementById('peptide-modal');
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

// Featured peptides
function loadFeaturedPeptides() {
    const featuredGrid = document.getElementById('featured-peptides');
    if (!featuredGrid) return;

    const featuredPeptides = allPeptides.slice(0, 6);
    
    featuredGrid.innerHTML = featuredPeptides.map(peptide => `
        <div class="peptide-card" onclick="showPeptideDetail('${peptide.id}')">
            <div class="peptide-header">
                <h3 class="peptide-name">${peptide.name}</h3>
                <span class="peptide-category">${formatCategory(peptide.category)}</span>
            </div>
            <p class="peptide-description">${peptide.description}</p>
            <div class="peptide-details">
                <div class="detail-item">
                    <i class="fas fa-syringe"></i>
                    <span>${peptide.dosage.typical}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <span>${peptide.dosage.frequency}</span>
                </div>
            </div>
            <button class="view-details">View Details</button>
        </div>
    `).join('');
}

// Display peptides in library
function displayPeptides() {
    const peptideGrid = document.getElementById('peptide-grid');
    if (!peptideGrid) return;

    displayedPeptides = allPeptides.slice(0, 12);
    renderPeptideGrid();
}

function renderPeptideGrid() {
    const peptideGrid = document.getElementById('peptide-grid');
    if (!peptideGrid) return;

    peptideGrid.innerHTML = displayedPeptides.map(peptide => `
        <div class="peptide-card" onclick="showPeptideDetail('${peptide.id}')">
            <div class="peptide-header">
                <h3 class="peptide-name">${peptide.name}</h3>
                <span class="peptide-category">${formatCategory(peptide.category)}</span>
            </div>
            <p class="peptide-description">${peptide.description}</p>
            <div class="peptide-details">
                <div class="detail-item">
                    <i class="fas fa-syringe"></i>
                    <span>${peptide.dosage.typical}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <span>${peptide.dosage.frequency}</span>
                </div>
            </div>
            <button class="view-details">View Details</button>
        </div>
    `).join('');
}

// Filtering functionality
function setActiveFilter(filter) {
    currentFilter = filter;
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === filter) {
            btn.classList.add('active');
        }
    });
}

function filterPeptides() {
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
    
    let filteredPeptides = allPeptides;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filteredPeptides = filteredPeptides.filter(peptide => 
            peptide.category === currentFilter
        );
    }
    
    // Apply search filter
    if (searchTerm) {
        filteredPeptides = filteredPeptides.filter(peptide =>
            peptide.name.toLowerCase().includes(searchTerm) ||
            peptide.description.toLowerCase().includes(searchTerm) ||
            peptide.overview.toLowerCase().includes(searchTerm)
        );
    }
    
    displayedPeptides = filteredPeptides.slice(0, 12);
    renderPeptideGrid();
    
    // Update load more button
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = filteredPeptides.length > 12 ? 'block' : 'none';
    }
}

function loadMorePeptides() {
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
    
    let filteredPeptides = allPeptides;
    
    if (currentFilter !== 'all') {
        filteredPeptides = filteredPeptides.filter(peptide => 
            peptide.category === currentFilter
        );
    }
    
    if (searchTerm) {
        filteredPeptides = filteredPeptides.filter(peptide =>
            peptide.name.toLowerCase().includes(searchTerm) ||
            peptide.description.toLowerCase().includes(searchTerm) ||
            peptide.overview.toLowerCase().includes(searchTerm)
        );
    }
    
    const currentCount = displayedPeptides.length;
    const nextBatch = filteredPeptides.slice(currentCount, currentCount + 12);
    
    if (nextBatch.length > 0) {
        displayedPeptides = [...displayedPeptides, ...nextBatch];
        renderPeptideGrid();
    }
    
    // Hide load more button if all peptides are displayed
    if (displayedPeptides.length >= filteredPeptides.length) {
        document.getElementById('load-more-btn').style.display = 'none';
    }
}

// Peptide detail modal
function showPeptideDetail(peptideId) {
    const peptide = allPeptides.find(p => p.id === peptideId);
    if (!peptide) return;

    const modal = document.getElementById('peptide-modal');
    const modalContent = document.getElementById('modal-content');
    
    modalContent.innerHTML = `
        <div style="padding: 40px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #667eea; margin-bottom: 10px;">${peptide.name}</h2>
                <span style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 8px 16px; border-radius: 20px; font-size: 0.9rem;">
                    ${formatCategory(peptide.category)}
                </span>
            </div>
            
            <div style="margin-bottom: 30px;">
                <h3 style="color: #333; margin-bottom: 15px;">Overview</h3>
                <p style="color: #666; line-height: 1.6;">${peptide.overview}</p>
            </div>
            
            <div style="margin-bottom: 30px;">
                <h3 style="color: #333; margin-bottom: 15px;">Purpose</h3>
                <p style="color: #666; line-height: 1.6;">${peptide.purpose}</p>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px;">
                <div>
                    <h3 style="color: #10b981; margin-bottom: 15px;">✓ Key Benefits</h3>
                    <ul style="list-style: none; padding: 0;">
                        ${peptide.benefits.map(benefit => `
                            <li style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #666;">
                                <span style="color: #10b981; margin-right: 10px;">✓</span>${benefit}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                <div>
                    <h3 style="color: #ef4444; margin-bottom: 15px;">⚠ Potential Risks</h3>
                    <ul style="list-style: none; padding: 0;">
                        ${peptide.risks.map(risk => `
                            <li style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #666;">
                                <span style="color: #ef4444; margin-right: 10px;">⚠</span>${risk}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
            
            <div style="margin-bottom: 30px;">
                <h3 style="color: #333; margin-bottom: 15px;">Dosage & Administration</h3>
                <div style="background: #f8fafc; padding: 20px; border-radius: 15px;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <strong>Typical Dose:</strong> ${peptide.dosage.typical}<br>
                            <strong>Frequency:</strong> ${peptide.dosage.frequency}<br>
                            <strong>Duration:</strong> ${peptide.dosage.duration}
                        </div>
                        <div>
                            <strong>Route:</strong> ${peptide.dosage.administration}<br>
                            <strong>Range:</strong> ${peptide.dosage.range}<br>
                            <strong>Half-life:</strong> ${peptide.half_life}
                        </div>
                    </div>
                </div>
            </div>
            
            <div style="margin-bottom: 30px;">
                <h3 style="color: #333; margin-bottom: 15px;">Clinical Evidence</h3>
                <div style="display: grid; gap: 15px;">
                    ${peptide.research.map(study => `
                        <div style="background: ${study.type === 'positive' ? '#f0fdf4' : '#fef2f2'}; padding: 20px; border-radius: 15px; border-left: 4px solid ${study.type === 'positive' ? '#10b981' : '#ef4444'};">
                            <h4 style="color: #333; margin-bottom: 10px;">${study.title}</h4>
                            <p style="color: #666; margin-bottom: 8px;"><strong>Journal:</strong> ${study.journal} (${study.year})</p>
                            <p style="color: #666;">${study.summary}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 15px;">
                <h3 style="color: #333; margin-bottom: 15px;">Technical Information</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <strong>Molecular Formula:</strong> ${peptide.molecular_formula}<br>
                        <strong>Molecular Weight:</strong> ${peptide.molecular_weight}
                    </div>
                    <div>
                        <strong>Storage:</strong> ${peptide.storage}<br>
                        <strong>Category:</strong> ${formatCategory(peptide.category)}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Compare functionality
function updatePeptideSelector() {
    const categorySelect = document.getElementById('category-select');
    const selectedCategory = categorySelect.value;
    
    let availablePeptides = allPeptides;
    if (selectedCategory) {
        availablePeptides = allPeptides.filter(peptide => peptide.category === selectedCategory);
    }
    
    // Update selector slots with available peptides
    const selectorSlots = document.querySelectorAll('.selector-slot');
    selectorSlots.forEach(slot => {
        if (!slot.querySelector('.selected-peptide')) {
            slot.innerHTML = `
                <div class="slot-placeholder">
                    <i class="fas fa-plus"></i>
                    <span>Select Peptide</span>
                </div>
                <div class="peptide-options" style="display: none;">
                    ${availablePeptides.map(peptide => `
                        <div class="peptide-option" onclick="selectPeptideForComparison('${peptide.id}', ${slot.getAttribute('data-slot')})">
                            ${peptide.name}
                        </div>
                    `).join('')}
                </div>
            `;
        }
    });
}

function showPeptideSelector(slot) {
    const options = slot.querySelector('.peptide-options');
    if (options) {
        options.style.display = options.style.display === 'none' ? 'block' : 'none';
    }
}

function selectPeptideForComparison(peptideId, slotNumber) {
    const peptide = allPeptides.find(p => p.id === peptideId);
    if (!peptide) return;

    const slot = document.querySelector(`[data-slot="${slotNumber}"]`);
    if (!slot) return;

    // Update slot with selected peptide
    slot.innerHTML = `
        <div class="selected-peptide">
            <h4 style="margin-bottom: 10px; color: #333;">${peptide.name}</h4>
            <span style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 4px 8px; border-radius: 10px; font-size: 0.8rem;">
                ${formatCategory(peptide.category)}
            </span>
            <button onclick="removePeptideFromComparison(${slotNumber})" style="background: #ef4444; color: white; border: none; padding: 4px 8px; border-radius: 5px; margin-top: 10px; cursor: pointer;">
                Remove
            </button>
        </div>
    `;

    // Add to selected peptides array
    selectedPeptides[slotNumber - 1] = peptide;

    // Update comparison table
    updateComparisonTable();
}

function removePeptideFromComparison(slotNumber) {
    const slot = document.querySelector(`[data-slot="${slotNumber}"]`);
    if (!slot) return;

    // Reset slot
    slot.innerHTML = `
        <div class="slot-placeholder">
            <i class="fas fa-plus"></i>
            <span>Select Peptide ${slotNumber}</span>
        </div>
    `;

    // Remove from selected peptides array
    selectedPeptides[slotNumber - 1] = undefined;

    // Update comparison table
    updateComparisonTable();
}

function updateComparisonTable() {
    const comparisonTable = document.getElementById('comparison-table');
    if (!comparisonTable) return;

    const validPeptides = selectedPeptides.filter(p => p !== undefined);
    
    if (validPeptides.length === 0) {
        comparisonTable.innerHTML = '<p style="text-align: center; color: white; font-size: 1.1rem;">Select peptides to compare them side-by-side</p>';
        return;
    }

    const tableHTML = `
        <div style="overflow-x: auto;">
            <table style="width: 100%; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-radius: 20px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.2);">
                <thead>
                    <tr style="background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
                        <th style="padding: 20px; text-align: left; min-width: 200px;">Property</th>
                        ${validPeptides.map(peptide => `
                            <th style="padding: 20px; text-align: center; min-width: 250px;">${peptide.name}</th>
                        `).join('')}
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #e5e7eb;">
                        <td style="padding: 15px; font-weight: 600; background: #f8fafc;">Category</td>
                        ${validPeptides.map(peptide => `
                            <td style="padding: 15px; text-align: center;">
                                <span style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 4px 8px; border-radius: 10px; font-size: 0.8rem;">
                                    ${formatCategory(peptide.category)}
                                </span>
                            </td>
                        `).join('')}
                    </tr>
                    <tr style="border-bottom: 1px solid #e5e7eb;">
                        <td style="padding: 15px; font-weight: 600; background: #f8fafc;">Description</td>
                        ${validPeptides.map(peptide => `
                            <td style="padding: 15px; text-align: center;">${peptide.description}</td>
                        `).join('')}
                    </tr>
                    <tr style="border-bottom: 1px solid #e5e7eb;">
                        <td style="padding: 15px; font-weight: 600; background: #f8fafc;">Typical Dosage</td>
                        ${validPeptides.map(peptide => `
                            <td style="padding: 15px; text-align: center;">${peptide.dosage.typical}</td>
                        `).join('')}
                    </tr>
                    <tr style="border-bottom: 1px solid #e5e7eb;">
                        <td style="padding: 15px; font-weight: 600; background: #f8fafc;">Frequency</td>
                        ${validPeptides.map(peptide => `
                            <td style="padding: 15px; text-align: center;">${peptide.dosage.frequency}</td>
                        `).join('')}
                    </tr>
                    <tr style="border-bottom: 1px solid #e5e7eb;">
                        <td style="padding: 15px; font-weight: 600; background: #f8fafc;">Duration</td>
                        ${validPeptides.map(peptide => `
                            <td style="padding: 15px; text-align: center;">${peptide.dosage.duration}</td>
                        `).join('')}
                    </tr>
                    <tr style="border-bottom: 1px solid #e5e7eb;">
                        <td style="padding: 15px; font-weight: 600; background: #f8fafc;">Administration</td>
                        ${validPeptides.map(peptide => `
                            <td style="padding: 15px; text-align: center;">${peptide.dosage.administration}</td>
                        `).join('')}
                    </tr>
                    <tr style="border-bottom: 1px solid #e5e7eb;">
                        <td style="padding: 15px; font-weight: 600; background: #f8fafc;">Half-life</td>
                        ${validPeptides.map(peptide => `
                            <td style="padding: 15px; text-align: center;">${peptide.half_life}</td>
                        `).join('')}
                    </tr>
                    <tr style="border-bottom: 1px solid #e5e7eb;">
                        <td style="padding: 15px; font-weight: 600; background: #f8fafc;">Molecular Weight</td>
                        ${validPeptides.map(peptide => `
                            <td style="padding: 15px; text-align: center;">${peptide.molecular_weight}</td>
                        `).join('')}
                    </tr>
                    <tr style="border-bottom: 1px solid #e5e7eb;">
                        <td style="padding: 15px; font-weight: 600; background: #f8fafc;">Key Benefits</td>
                        ${validPeptides.map(peptide => `
                            <td style="padding: 15px; text-align: center;">
                                <ul style="list-style: none; padding: 0; text-align: left;">
                                    ${peptide.benefits.slice(0, 3).map(benefit => `
                                        <li style="padding: 4px 0; color: #666;">✓ ${benefit}</li>
                                    `).join('')}
                                </ul>
                            </td>
                        `).join('')}
                    </tr>
                    <tr style="border-bottom: 1px solid #e5e7eb;">
                        <td style="padding: 15px; font-weight: 600; background: #f8fafc;">Potential Risks</td>
                        ${validPeptides.map(peptide => `
                            <td style="padding: 15px; text-align: center;">
                                <ul style="list-style: none; padding: 0; text-align: left;">
                                    ${peptide.risks.slice(0, 3).map(risk => `
                                        <li style="padding: 4px 0; color: #666;">⚠ ${risk}</li>
                                    `).join('')}
                                </ul>
                            </td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td style="padding: 15px; font-weight: 600; background: #f8fafc;">Storage</td>
                        ${validPeptides.map(peptide => `
                            <td style="padding: 15px; text-align: center;">${peptide.storage}</td>
                        `).join('')}
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    comparisonTable.innerHTML = tableHTML;
}

// Utility functions
function formatCategory(category) {
    const categories = {
        'beauty-health': 'Beauty & Health',
        'gym-aesthetics': 'Gym & Aesthetics',
        'longevity': 'Longevity',
        'medical': 'Medical'
    };
    return categories[category] || category;
}

// Add more peptides to the database (you can expand this significantly)
function addMorePeptides() {
    // This function can be used to dynamically add more peptides
    // For now, we have a comprehensive starting database
    console.log('Peptide database initialized with', allPeptides.length, 'peptides');
}

// Initialize additional peptides
addMorePeptides();
