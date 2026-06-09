export interface PortfolioSite {
  priority: number;
  name: string;
  url: string;
  githubRepo: string;
  description: string;
  category: string;
}

export function parsePortfolioMarkdown(markdown: string): PortfolioSite[] {
  const lines = markdown.split('\n');
  const sites: PortfolioSite[] = [];
  
  // Find the table start
  let inTable = false;
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Check if it's the header separator line
    if (trimmedLine.startsWith('|---') || trimmedLine.startsWith('| --')) {
      inTable = true;
      continue;
    }
    
    // Check if it's a table row
    if (inTable && trimmedLine.startsWith('|')) {
      // Split by pipe and clean up spaces
      const columns = trimmedLine.split('|').map(col => col.trim());
      
      // A standard row will have empty strings at index 0 and length-1 due to outer pipes
      if (columns.length >= 7) {
        const priorityStr = columns[1];
        
        // Skip header row if we accidentally hit it (priority won't be a number)
        if (isNaN(parseInt(priorityStr, 10))) continue;
        
        sites.push({
          priority: parseInt(priorityStr, 10),
          name: columns[2] || '',
          url: columns[3] || '',
          githubRepo: columns[4] === '-' || !columns[4] ? '' : columns[4],
          description: columns[5] || '',
          category: columns[6] || ''
        });
      }
    } else if (inTable && trimmedLine === '') {
      // End of table
      break;
    }
  }
  
  return sites.sort((a, b) => a.priority - b.priority);
}
