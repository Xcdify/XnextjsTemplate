'use client'

import React from 'react'
import { useDrag } from 'react-dnd'

type TaskProps = {
  task: {
    id: string
    content: string
  }
  laneId: string
}

export function TaskComponent({ task, laneId }: TaskProps) {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id, laneId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <div
      ref={drag}
      className={`bg-white p-2 rounded shadow ${isDragging ? 'opacity-50' : ''}`}
    >
      {task.content}
    </div>
  )
}