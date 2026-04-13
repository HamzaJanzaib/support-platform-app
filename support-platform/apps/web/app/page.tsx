"use client"

import { useQuery } from "convex/react"
import { api } from "@workspace/backend/convex/_generated/api"

function Page() {
  const currentUsers = useQuery(api.users.getNotes)

  if (currentUsers === undefined) {
    return <main className="p-6">Loading users...</main>
  }

  if (currentUsers.length === 0) {
    return <main className="p-6">No users found.</main>
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Users</h1>
      <ul className="mt-4 space-y-3">
        {currentUsers.map((user) => (
          <li key={user._id} className="rounded-lg border p-4">
            <p className="font-medium">User ID: {user.userId}</p>
            <p className="text-sm text-muted-foreground">Title: {user.title}</p>
            <p className="mt-2 text-sm">{user.content}</p>
            {user.summary ? (
              <p className="mt-2 text-sm text-muted-foreground">Summary: {user.summary}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Page
