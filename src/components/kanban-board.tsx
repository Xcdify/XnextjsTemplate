"use client"

import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { PlusIcon, TableIcon, ColumnsIcon } from 'lucide-react'
import { LaneComponent } from './lane'
import { TaskComponent } from './task'
import { TableViewComponent } from './table-view'

type Task = {
  id: string
  content: string
}

type Lane = {
  id: string
  title: string
  tasks: Task[]
}

export function KanbanBoardComponent() {
  const [lanes, setLanes] = useState<Lane[]>([
    { id: '1', title: 'To Do', tasks: [{ id: '1', content: 'Task 1' }] },
    { id: '2', title: 'In Progress', tasks: [] },
    { id: '3', title: 'Done', tasks: [] },
  ])
  const [viewMode, setViewMode] = useState<'lane' | 'table'>('lane')

  const addLane = () => {
    const newLane: Lane = {
      id: String(lanes.length + 1),
      title: `New Lane ${lanes.length + 1}`,
      tasks: [],
    }
    setLanes([...lanes, newLane])
  }

  const addTask = (laneId: string) => {
    const updatedLanes = lanes.map(lane => {
      if (lane.id === laneId) {
        const newTask: Task = {
          id: String(lane.tasks.length + 1),
          content: `New Task ${lane.tasks.length + 1}`,
        }
        return { ...lane, tasks: [...lane.tasks, newTask] }
      }
      return lane
    })
    setLanes(updatedLanes)
  }

  const moveTask = (taskId: string, fromLaneId: string, toLaneId: string) => {
    const updatedLanes = lanes.map(lane => {
      if (lane.id === fromLaneId) {
        return { ...lane, tasks: lane.tasks.filter(task => task.id !== taskId) }
      }
      if (lane.id === toLaneId) {
        const taskToMove = lanes.find(l => l.id === fromLaneId)?.tasks.find(t => t.id === taskId)
        if (taskToMove) {
          return { ...lane, tasks: [...lane.tasks, taskToMove] }
        }
      }
      return lane
    })
    setLanes(updatedLanes)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <Button onClick={addLane}>
            <PlusIcon className="mr-2 h-4 w-4" /> Add Lane
          </Button>
          <div>
            <Button
              variant={viewMode === 'lane' ? 'default' : 'outline'}
              onClick={() => setViewMode('lane')}
              className="mr-2"
            >
              <ColumnsIcon className="mr-2 h-4 w-4" /> Lane View
            </Button>
            <Button
              variant={viewMode === 'table' ? 'default' : 'outline'}
              onClick={() => setViewMode('table')}
            >
              <TableIcon className="mr-2 h-4 w-4" /> Table View
            </Button>
          </div>
        </div>
        {viewMode === 'lane' ? (
          <div className="flex space-x-4 overflow-x-auto">
            {lanes.map(lane => (
              <LaneComponent key={lane.id} lane={lane} addTask={addTask} moveTask={moveTask}>
                {lane.tasks.map(task => (
                  <TaskComponent key={task.id} task={task} laneId={lane.id} />
                ))}
              </LaneComponent>
            ))}
          </div>
        ) : (
          <TableViewComponent lanes={lanes} moveTask={moveTask} />
        )}
      </div>
    </DndProvider>
  )
}