export type ToolCategory =
  | 'Cattle tools'
  | 'Poultry tools'
  | 'Swine tools'
  | 'Sheep / goat tools'
  | 'Herd planning'
  | 'Growth estimation'
  | 'Breeding support'
  | 'Feed needs';

export interface LivestockTool {
  id: string;
  title: string;
  description: string;
  category: ToolCategory;
  primaryOutcome: string;
  href: string;
}
