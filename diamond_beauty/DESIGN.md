---
name: Diamond Beauty
colors:
  surface: '#fff8f3'
  surface-dim: '#e5d8ca'
  surface-bright: '#fff8f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff2e3'
  surface-container: '#f9ecde'
  surface-container-high: '#f3e6d8'
  surface-container-highest: '#ede0d3'
  on-surface: '#211b12'
  on-surface-variant: '#444748'
  inverse-surface: '#362f26'
  inverse-on-surface: '#fcefe0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#755b00'
  on-secondary: '#ffffff'
  secondary-container: '#fed255'
  on-secondary-container: '#735a00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#221a0f'
  on-tertiary-container: '#8e8272'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffe08e'
  secondary-fixed-dim: '#ecc246'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#584400'
  tertiary-fixed: '#efe0cd'
  tertiary-fixed-dim: '#d2c4b2'
  on-tertiary-fixed: '#221a0f'
  on-tertiary-fixed-variant: '#4f4538'
  background: '#fff8f3'
  on-background: '#211b12'
  surface-variant: '#ede0d3'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style
The brand personality is rooted in exclusivity, indulgence, and timeless elegance. Targeting a high-discerning clientele, the visual identity must evoke feelings of serenity and high-end sophistication.

The design style is **Luxury Minimalism with Glassmorphic accents**. This approach combines the structural clarity of high-fashion editorial layouts with the modern depth of translucent layers. The interface relies on generous whitespace (breathing room) to signal premium value, ensuring that every element feels intentional and curated. The atmosphere is quiet luxury: confident, hushed, and meticulously polished.

## Colors
The palette is anchored by the interplay of **Warm Beige (#F5E6D3)** and **Matte Black (#111111)**, creating a high-contrast yet soft environment.

- **Primary (Matte Black):** Used for typography, high-impact dividers, and grounding elements.
- **Secondary (Luxury Gold):** Reserved for accents, calls to action, and iconography to symbolize premium service.
- **Background (Warm Beige):** The primary canvas, providing a softer, more organic feel than pure white.
- **Surface (Glass):** Semi-transparent white (#FFFFFF at 40-70% opacity) used for card containers to create the glassmorphism effect.
- **Neutral:** A muted taupe used for secondary text and subtle borders.

## Typography
The typographic scale emphasizes hierarchy through the juxtaposition of a traditional, high-contrast serif and a clean, geometric sans-serif.

- **Headlines:** Use **Playfair Display**. Characterized by its delicate hairlines and strong stems, it should be used for all editorial titles and section headings.
- **Body & Interface:** Use **Montserrat**. Its open forms ensure legibility against textured backgrounds.
- **Captions & Small Labels:** Always use Montserrat with increased letter spacing and uppercase styling to maintain a "boutique" aesthetic even at small scales.

## Layout & Spacing
The layout follows a **fixed-center grid** for desktop to maintain an editorial feel, transitioning to a fluid system for mobile.

- **Grid:** A 12-column grid with wide 24px gutters. Content should often span 6 or 8 columns to leave ample negative space on the periphery.
- **Sectioning:** Large vertical gaps (120px+) separate major service categories to prevent the UI from feeling "crowded."
- **Safe Areas:** On mobile, a minimum 20px side margin is required. On desktop, content is capped at 1280px to ensure line lengths remain readable and premium.

## Elevation & Depth
Depth is achieved through **Glassmorphism and Ambient Shadows** rather than traditional elevation tiers.

- **Glass Containers:** Use a backdrop-filter (blur: 12px) on semi-transparent white surfaces. A 1px solid border in white (opacity 20%) should be applied to define the edges.
- **Shadows:** Use extremely soft, long-range shadows with a hint of gold in the umbra. Example: `0 20px 40px rgba(201, 162, 39, 0.05)`.
- **Layering:** High-end photography should sit on the base layer, with glass cards floating above, partially obscuring the images to create a sense of physical depth.

## Shapes
The design system utilizes **Rounded-XL (1.5rem)** corners for all primary containers and cards to evoke a soft, organic, and welcoming feel. 

Interactive elements like buttons and input fields utilize a slightly tighter **Rounded-LG (1rem)** to maintain a sense of precision. Icons should be thin-stroke (1px or 1.5px) with slightly rounded terminals to match the font geometry.

## Components

### Buttons
- **Primary:** Luxury Gold (#C9A227) background with Matte Black text. On hover, the gold shifts to a slightly brighter metallic tint with a subtle outer glow.
- **Secondary/Ghost:** Matte Black 1px border with transparent background. Hover fills the button with a very faint gold tint (5% opacity).

### Luxury Pricing Tables
Pricing items should be presented as a clean list with "Dot Leaders" connecting the service name to the price. Use Playfair Display for service names and Montserrat for prices.

### Elegant Forms
Inputs should be "Minimalist Underline" style or very light glassmorphic boxes. Labels remain persistent and small above the input. Focus states are indicated by the underline turning Gold.

### Sticky Navigation
A thin, glassmorphic bar at the top of the viewport. The logo is centered, with navigation links split to the left and right. The background blur ensures legibility as the user scrolls over varied content.

### Photography Placeholders
All imagery should have a slight desaturation or warm filter applied to align with the Warm Beige palette. Use "Golden Ratio" aspect ratios (1:1.618) for featured editorial images.