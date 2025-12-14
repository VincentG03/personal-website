# Debug Borders Feature

## Overview

The website includes a configurable debug border system to help visualize section spacing and layout during development.

## Visual Indicators

### Red Borders
- **Purpose**: Mark section boundaries
- **Location**: Outer border of each major section (About, Experience, Projects, Societies)
- **Usage**: Helps identify where one section ends and another begins

### Yellow Boxes
- **Purpose**: Visualize top padding/spacing
- **Location**: Top of each content container, directly under section border
- **Height**: 7.5rem (matching the `pt-[7.5rem]` padding)
- **Usage**: Shows the exact spacing above section titles

### Green Boxes
- **Purpose**: Visualize bottom spacing
- **Location**: Bottom of each section's content
- **Height**: 3.75rem (half of top padding)
- **Usage**: Shows the spacing after the last content element

## Configuration

### Location
`/config/debugBorders.ts`

### Toggle Debug Borders

```typescript
// Show debug borders
export const DEBUG_BORDERS_ENABLED = true;

// Hide debug borders (production)
export const DEBUG_BORDERS_ENABLED = false;
```

### Border Styles

The configuration exports a `BORDER_STYLES` object with conditional classes:

```typescript
export const BORDER_STYLES = {
  section: DEBUG_BORDERS_ENABLED ? 'border border-red-500' : '',
  topSpacing: DEBUG_BORDERS_ENABLED 
    ? 'h-[7.5rem] border-2 border-yellow-400 bg-yellow-400/20 pointer-events-none absolute top-0 left-0 right-0 z-50' 
    : 'h-0',
  bottomSpacing: DEBUG_BORDERS_ENABLED 
    ? 'h-[3.75rem] border-2 border-green-400 bg-green-400/20 pointer-events-none mt-8' 
    : 'h-0',
};
```

## Usage in Components

### Current Implementation (Manual)

Currently, the debug borders are hardcoded in each component. For example:

```tsx
// AboutSection.tsx
<section className="... border border-red-500">
  <div className="...">
    <div className="h-[7.5rem] border-2 border-yellow-400 bg-yellow-400/20 ..." />
    {/* Content */}
    <div className="h-[3.75rem] border-2 border-green-400 bg-green-400/20 ..." />
  </div>
</section>
```

### Future Implementation (Recommended)

To use the configuration file, import and use the styles:

```tsx
import { BORDER_STYLES } from '@/config/debugBorders';

<section className={`... ${BORDER_STYLES.section}`}>
  <div className="...">
    <div className={BORDER_STYLES.topSpacing} />
    {/* Content */}
    <div className={BORDER_STYLES.bottomSpacing} />
  </div>
</section>
```

## Before Deployment

**IMPORTANT**: Always disable debug borders before deploying to production:

1. Open `/config/debugBorders.ts`
2. Set `DEBUG_BORDERS_ENABLED = false`
3. Verify borders are not visible in preview
4. Deploy

## Benefits

- **Visual Feedback**: Instantly see spacing and alignment issues
- **Consistent Spacing**: Ensures all sections have uniform padding
- **Debugging**: Quickly identify layout problems during development
- **Flexibility**: Toggle on/off without changing code

## Best Practices

1. **Keep borders enabled during development** for easier layout debugging
2. **Disable before commits** or use git ignore patterns
3. **Document spacing changes** when adjusting border heights
4. **Use colors consistently**: Red (sections), Yellow (top), Green (bottom)
5. **Remove inline hardcoded borders** and migrate to config file for easier management
