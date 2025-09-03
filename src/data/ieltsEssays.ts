// Import separate data files
import { task1Essays, type IELTSEssay } from './ieltsTask1Essays';
import { task2Essays } from './ieltsTask2Essays';

// Re-export the interface and combined essays
export type { IELTSEssay };
export const ieltsEssays: IELTSEssay[] = [...task2Essays, ...task1Essays];