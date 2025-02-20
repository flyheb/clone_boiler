"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { redirect } from 'next/navigation'

export default function RootPage() {
  redirect('/auth')
}
