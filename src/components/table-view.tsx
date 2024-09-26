'use client'

import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/src/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select'

type TableViewProps = {
  lanes: {
    id: string
    title: string
    tasks: {
      id: string
      content: string
    }[]
  }[]
  moveTask: (taskId: string, fromLaneId: string, toLaneId: string) => void
}

export function TableViewComponent({ lanes, moveTask }: TableViewProps) {
  const allTasks = lanes.flatMap(lane => 
    lane.tasks.map(task => ({ ...task, laneId: lane.id, laneTitle: lane.title }))
  )

  const handleLaneChange = (taskId: string, currentLaneId: string, newLaneId: string) => {
    moveTask(taskId, currentLaneId, newLaneId)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Task</TableHead>
          <TableHead>Lane</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allTasks.map(task => (
          <TableRow key={task.id}>
            <TableCell>{task.content}</TableCell>
            <TableCell>
              <Select
                value={task.laneId}
                onValueChange={(newLaneId) => handleLaneChange(task.id, task.laneId, newLaneId)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={task.laneTitle} />
                </SelectTrigger>
                <SelectContent>
                  {lanes.map(lane => (
                    <SelectItem key={lane.id} value={lane.id}>
                      {lane.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}