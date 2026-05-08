# EvolaTec - Nuxt 3 E-Commerce Landing Page

A modular, component-driven Nuxt 3 project with Tailwind CSS for a professional e-commerce landing page.

## Project Setup

The project uses Nuxt 3 with:
- **Tailwind CSS** - Utility-first CSS framework
- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe development (optional)

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
npm run preview
```

### Generate Static Site

```bash
npm run generate
```

## Project Structure

```
components/
├── buttons/
│   └── BaseButton.vue          # Reusable button component
├── cards/
│   ├── FeatureItem.vue         # Feature item with icon
│   ├── PortfolioCard.vue       # Portfolio/showcase card
│   ├── PricingCard.vue         # Pricing tier card
│   └── StatCard.vue            # Statistics card
├── layout/
│   ├── TopNavBar.vue           # Navigation bar
│   └── Footer.vue              # Footer section
└── sections/
    ├── HeroSection.vue         # Hero section with stats
    ├── TrustSection.vue        # Trust/brands section
    ├── PortfolioSection.vue    # Portfolio grid with process
    ├── FeaturesSection.vue     # Features showcase
    ├── PricingSection.vue      # Pricing plans
    └── FAQSection.vue          # FAQ accordion

pages/
└── index.vue                   # Main landing page

assets/
└── css/
    └── main.css               # Tailwind imports & custom styles

tailwind.config.ts             # Tailwind configuration
nuxt.config.ts                 # Nuxt configuration
```

## Component Architecture

### Reusable Components

#### `BaseButton.vue`
Universal button component with variants and sizes.

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline'` (default: 'primary')
- `size`: `'sm' | 'md' | 'lg'` (default: 'md')

#### `PortfolioCard.vue`
Showcase card with image overlay and gradient.

**Props:**
- `image`: Image URL
- `title`: Card title
- `description`: Card description
- `isLarge`: Boolean to span 2 columns

#### `PricingCard.vue`
Pricing tier card with feature list.

**Props:**
- `tier`: Plan name
- `price`: Price string
- `features`: Array of feature strings
- `buttonText`: Button label
- `isHighlighted`: Boolean to highlight plan

#### `StatCard.vue`
Statistics display card.

**Props:**
- `value`: Stat value (e.g., "+340%")
- `label`: Stat label

#### `FeatureItem.vue`
Feature item with Material Icon.

**Props:**
- `icon`: Material icon name
- `title`: Feature title
- `description`: Feature description

### Section Components

All section components accept data as props and are fully configurable:

- `HeroSection` - Hero with background, badge, stats
- `TrustSection` - Company logos/brands
- `PortfolioSection` - Portfolio grid with process steps
- `FeaturesSection` - Features with icon and image
- `PricingSection` - Pricing plans grid
- `FAQSection` - FAQ accordion

### Layout Components

- `TopNavBar` - Fixed navigation with links
- `Footer` - Multi-column footer with newsletter signup

## Styling

Custom Tailwind theme colors and spacing are configured in `tailwind.config.ts`:

### Color Palette
- **Primary**: #002c50 (Deep Blue)
- **Surface**: #f7f9ff (Off-white)
- **Secondary**: #4b607b
- And 40+ semantic color variables

### Spacing Scale
- `stack-sm`: 1rem
- `stack-md`: 2rem
- `stack-lg`: 4rem
- `section-padding`: 8rem
- `gutter`: 2rem

### Custom Utilities
- `.glass-card` - Glassmorphism effect
- `.ambient-shadow` - Soft shadow

## Making Changes

### Adding a New Section

1. Create a new component in `components/sections/`
2. Import it in `pages/index.vue`
3. Add data configuration to the script
4. Use the component with props

### Customizing Colors

Edit `tailwind.config.ts` in the `extend.colors` section.

### Adding Navigation Links

Edit the `navLinks` array in `components/layout/TopNavBar.vue`.

### Updating Pricing Plans

Modify the `pricingPlans` array in `pages/index.vue`.

## Browser Support

Tailwind CSS supports all modern browsers. For older browser support, configure `tailwind.config.ts`.

## Additional Resources

- [Nuxt Documentation](https://nuxt.com)
- [Vue 3 Documentation](https://vuejs.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
