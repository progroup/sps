# Overview


## Design Tokens

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development.

- Background Color
- Text Color
- Border Color
- Font
- Font Size
- Opacity
- Line Height
- Spacing
- Radius
- Sizing
- Shadow
- Time
- Media Query
- Z-index

### Initial Variables

```scss
// Colors

$black:        hsl(0, 0%, 4%) !default
$black-bis:    hsl(0, 0%, 7%) !default
$black-ter:    hsl(0, 0%, 14%) !default

$grey-darker:  hsl(0, 0%, 21%) !default
$grey-dark:    hsl(0, 0%, 29%) !default
$grey:         hsl(0, 0%, 48%) !default
$grey-light:   hsl(0, 0%, 71%) !default
$grey-lighter: hsl(0, 0%, 86%) !default

$white-ter:    hsl(0, 0%, 96%) !default
$white-bis:    hsl(0, 0%, 98%) !default
$white:        hsl(0, 0%, 100%) !default

$orange:       hsl(14,  100%, 53%) !default
$yellow:       hsl(48,  100%, 67%) !default
$green:        hsl(141, 71%,  48%) !default
$turquoise:    hsl(171, 100%, 41%) !default
$blue:         hsl(217, 71%,  53%) !default
$purple:       hsl(271, 100%, 71%) !default
$red:          hsl(348, 100%, 61%) !default

// Typography

$family-sans-serif: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !default
$family-monospace: monospace !default
$render-mode: optimizeLegibility !default

$size-1: 3rem !default
$size-2: 2.5rem !default
$size-3: 2rem !default
$size-4: 1.5rem !default
$size-5: 1.25rem !default
$size-6: 1rem !default
$size-7: 0.75rem !default

$weight-light: 300 !default
$weight-normal: 400 !default
$weight-medium: 500 !default
$weight-semibold: 600 !default
$weight-bold: 700 !default

// Responsiveness

// The container horizontal gap, which acts as the offset for breakpoints
$gap: 32px !default
// 960, 1152, and 1344 have been chosen because they are divisible by both 12 and 16
$tablet: 769px !default
// 960px container + 3rem
$desktop: 960px + (2 * $gap) !default
// 1152px container + 3rem
$widescreen: 1152px + (2 * $gap)  !default
// 1344px container + 3rem
$fullhd: 1344px + (2 * $gap)  !default

// Miscellaneous

$easing: ease-out !default
$radius-small: 2px !default
$radius: 3px !default
$radius-large: 5px !default
$speed: 86ms !default
```

### Derived Variables

```scss
$primary: $turquoise !default

$info: $blue !default
$success: $green !default
$warning: $yellow !default
$danger: $red !default

$light: $white-ter !default
$dark: $grey-darker !default

// Invert colors

$orange-invert: findColorInvert($orange) !default
$yellow-invert: findColorInvert($yellow) !default
$green-invert: findColorInvert($green) !default
$turquoise-invert: findColorInvert($turquoise) !default
$blue-invert: findColorInvert($blue) !default
$purple-invert: findColorInvert($purple) !default
$red-invert: findColorInvert($red) !default

$primary-invert: $turquoise-invert !default
$info-invert: $blue-invert !default
$success-invert: $green-invert !default
$warning-invert: $yellow-invert !default
$danger-invert: $red-invert !default
$light-invert: $dark !default
$dark-invert: $light !default

// General colors

$background: $white-ter !default

$border: $grey-lighter !default
$border-hover: $grey-light !default

// Text colors

$text: $grey-dark !default
$text-invert: findColorInvert($text) !default
$text-light: $grey !default
$text-strong: $grey-darker !default

// Code colors

$code: $red !default
$code-background: $background !default

$pre: $text !default
$pre-background: $background !default

// Link colors

$link: $primary !default
$link-invert: $primary-invert !default
$link-visited: $purple !default

$link-hover: $grey-darker !default
$link-hover-border: $grey-light !default

$link-focus: $grey-darker !default
$link-focus-border: $primary !default

$link-active: $grey-darker !default
$link-active-border: $grey-dark !default

// Typography

$family-primary: $family-sans-serif !default
$family-code: $family-monospace !default

$size-small: $size-7 !default
$size-normal: $size-6 !default
$size-medium: $size-5 !default
$size-large: $size-4 !default

// Lists and maps

$colors: ("white": ($white, $black), "black": ($black, $white), "light": ($light, $light-invert), "dark": ($dark, $dark-invert), "primary": ($primary, $primary-invert), "info": ($info, $info-invert), "success": ($success, $success-invert), "warning": ($warning, $warning-invert), "danger": ($danger, $danger-invert)) !default
$shades: ("black-bis": $black-bis, "black-ter": $black-ter, "grey-darker": $grey-darker, "grey-dark": $grey-dark, "grey": $grey, "grey-light": $grey-light, "grey-lighter": $grey-lighter, "white-ter": $white-ter, "white-bis": $white-bis) !default

$sizes: $size-1 $size-2 $size-3 $size-4 $size-5 $size-6 $size-7 !default
```

## Design Engineer

- Deliver engaging experiences using the latest in front-end technologies.
- Create detailed prototypes and web experiences focusing on elevating the end user’s experiences for our web properties.
- Advise and synthesize feedback from research, design, UX and Engineering team members.
- Expand the real-world constraints of engineering to increase design capabilities.
- Identify and prioritize efforts most impactful to design and engineering.
- Build tools and frameworks that can be largely used by the broader design and engineering team.
- Ensure design intent is realized in production.
