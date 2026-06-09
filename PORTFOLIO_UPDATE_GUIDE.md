# Portfolio Site List Management

This document provides instructions on how to manage and update the Rural Utility Cost portfolio directory.

## Updating the Portfolio
The portfolio network is managed from a single source of truth:
**File to edit: `/src/data/portfolio-sites.md`**

To add, remove, or modify a subdomain in the ecosystem:
1. Open up `/src/data/portfolio-sites.md`.
2. Edit the markdown table. Make sure to abide by the standard markdown table formatting:
   `| Priority | Name | Subdomain URL | GitHub Repo | Description | Category |`
3. Save the file.
4. The React application will dynamically load the markdown content via Vite, parse it, and update the `/portfolio` page automatically.

## Requirements when adding new entries:
- **Priority**: A numeric indicator. Lower numbers place the site higher in grid listings.
- **Category**: Be consistent with existing categories (e.g., Core, Financial, Analytics, etc.) to keep grouping neat. If you introduce a new category, it will automatically populate as a new group.
- **Description**: Keep it punchy and specific. Focus on the core use case.
- **Status/Retirement**: If a site is retired or deprecated, it is recommended to add `(Deprecated)` into the description or move it to a lower priority, rather than deleting it.

## System Architecture
This implementation relies on a clean, maintainable separation of data and UI:
1. `portfolio-sites.md` holds the raw structure.
2. `src/utils/portfolioParser.ts` parses the markdown syntax directly into JSON variables `PortfolioSite[]` at runtime using Vite's `?raw` import strategy.
3. `src/pages/Portfolio.tsx` maps the JSON over cleanly styled responsive React components under the SEO-optimized `/portfolio` route.
