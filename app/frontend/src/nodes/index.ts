import { type NodeTypes, Edge, MarkerType } from '@xyflow/react';

import { AgentNode } from './components/agent-node';
import { StartNode } from './components/start-node';
import { type AppNode } from './types';

// Types
export * from './types';

export const initialNodes: AppNode[] = [
  {
    id: 'start',
    type: 'start',
    position: { x: 0, y: 0 },
    data: {
      name: 'Input',
      description: 'Start Node',
      status: 'Idle',
    },
  },
];

// TODO (virat) temporary, delete after testing
export const initialEdges: Edge[] = [
  {
    id: 'start-to-warren',
    source: 'start',
    target: 'warren_buffett',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'start-to-charlie',
    source: 'start',
    target: 'charlie_munger',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'warren-to-portfolio',
    source: 'warren_buffett',
    target: 'portfolio_manager',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'charlie-to-portfolio',
    source: 'charlie_munger',
    target: 'portfolio_manager',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

export const nodeTypes = {
  'agent': AgentNode,
  'start': StartNode,
} satisfies NodeTypes;
