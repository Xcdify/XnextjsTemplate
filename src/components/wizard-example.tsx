'use client'

import Wizard from "./wizard"

export function WizardExampleComponent() {
  const steps = [
    {
      title: "Personal Information",
      content: (
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
        </div>
      ),
    },
    {
      title: "Address",
      content: (
        <div className="space-y-4">
          <div>
            <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street</label>
            <input type="text" id="street" name="street" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input type="text" id="city" name="city" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
        </div>
      ),
    },
    {
      title: "Confirmation",
      content: (
        <div>
          <p className="text-green-600 font-semibold">Thank you for completing the wizard!</p>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Wizard steps={steps} />
    </div>
  )
}