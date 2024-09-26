'use client'

import React, { useRef, useEffect } from 'react'
import { useDrag } from 'react-dnd'

type TaskProps = {
  task: {
    id: string
    content: string
  }
  laneId: string
}

export function TaskComponent({ task, laneId }: TaskProps) {
  const [{ isDragging }, drag, dragPreview] = useDrag({
    type: 'TASK',
    item: { id: task.id, laneId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  const previewRef = useRef(null);

  useEffect(() => {
    if (dragPreview) {
      dragPreview(previewRef);
    }
  }, [dragPreview]);

  return (
    <div
      ref={previewRef}
      className={`bg-white p-2 rounded shadow ${isDragging ? 'opacity-50' : ''}`}
    >
      {task.content}
    </div>
  )
}