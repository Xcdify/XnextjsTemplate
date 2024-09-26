"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/src/components/ui/table'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

// Sample data for stocks
const stocksData = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 150.25,
    change: 2.5,
    history: [
      { date: '2023-01', price: 130 },
      { date: '2023-02', price: 135 },
      { date: '2023-03', price: 140 },
      { date: '2023-04', price: 145 },
      { date: '2023-05', price: 150 },
    ]
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 2800.75,
    change: -5.25,
    history: [
      { date: '2023-01', price: 2750 },
      { date: '2023-02', price: 2800 },
      { date: '2023-03', price: 2850 },
      { date: '2023-04', price: 2900 },
      { date: '2023-05', price: 2800 },
    ]
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 305.50,
    change: 1.75,
    history: [
      { date: '2023-01', price: 280 },
      { date: '2023-02', price: 290 },
      { date: '2023-03', price: 295 },
      { date: '2023-04', price: 300 },
      { date: '2023-05', price: 305 },
    ]
  }
]

export function StockListingsComponent() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Stock Listings</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Symbol</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Change</TableHead>
              <TableHead>Chart</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stocksData.map((stock) => (
              <TableRow key={stock.symbol}>
                <TableCell className="font-medium">{stock.symbol}</TableCell>
                <TableCell>{stock.name}</TableCell>
                <TableCell>${stock.price.toFixed(2)}</TableCell>
                <TableCell className={stock.change >= 0 ? "text-green-600" : "text-red-600"}>
                  {stock.change >= 0 ? "+" : ""}{stock.change.toFixed(2)}
                </TableCell>
                <TableCell>
                  <ResponsiveContainer width={200} height={60}>
                    <LineChart data={stock.history}>
                      <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} dot={false} />
                      <XAxis dataKey="date" hide={true} />
                      <YAxis hide={true} />
                      <Tooltip />
                    </LineChart>
                  </ResponsiveContainer>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}