/**
 * Debug Border Configuration
 * 
 * Toggle this to show/hide debug borders on the website.
 * These borders help visualize section spacing and layout:
 * 
 * - RED borders: Section boundaries
 * - YELLOW boxes: Top padding/spacing above section titles
 * - GREEN boxes: Bottom padding/spacing after section content
 * 
 * Set to `false` before deploying to production.
 */

export const DEBUG_BORDERS_ENABLED = true;

export const BORDER_STYLES = {
  section: DEBUG_BORDERS_ENABLED ? 'border border-red-500' : '',
  topSpacing: DEBUG_BORDERS_ENABLED 
    ? 'h-[7.5rem] border-2 border-yellow-400 bg-yellow-400/20 pointer-events-none absolute top-0 left-0 right-0 z-50' 
    : 'h-0',
  bottomSpacing: DEBUG_BORDERS_ENABLED 
    ? 'h-[3.75rem] border-2 border-green-400 bg-green-400/20 pointer-events-none mt-8' 
    : 'h-0',
};
