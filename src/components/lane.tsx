'use client'

import React, { useRef } from 'react'
import { useDrop } from 'react-dnd'
import { Button } from '@/src/components/ui/button'
import { PlusIcon } from 'lucide-react'

type LaneProps = {
  lane: {
    id: string
    title: string
  }
  addTask: (laneId: string) => void
  moveTask: (taskId: string, fromLaneId: string, toLaneId: string) => void
  children: React.ReactNode
}

export function LaneComponent({ lane, addTask, moveTask, children }: LaneProps) {
  const dropRef = useRef(null);
  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item: { id: string, laneId: string }) => {
      if (item.laneId !== lane.id) {
        moveTask(item.id, item.laneId, lane.id)
      }
    },
  });

  drop(dropRef);

  return (
    <div ref={dropRef} className="bg-gray-100 p-4 rounded-lg w-64 flex-shrink-0">
      <h2 className="font-bold mb-4">{lane.title}</h2>
      <div className="space-y-2 mb-4">{children}</div>
      <Button onClick={() => addTask(lane.id)} className="w-full">
        <PlusIcon className="mr-2 h-4 w-4" /> Add Task
      </Button>
    </div>
  )
}