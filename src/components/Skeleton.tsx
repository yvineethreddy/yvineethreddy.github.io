import React from 'react'
import { cn } from '../utils/helpers'

export const SkeletonCard: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('animate-pulse', className)}>
    <div className="h-40 bg-slate-200 dark:bg-slate-800 rounded-lg mb-4" />
    <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4 mb-2" />
    <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-1/2" />
  </div>
)

export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({ lines = 3, className }) => (
  <div className={cn('space-y-3', className)}>
    {Array.from({ length: lines }).map((_, i) => (
      <div key={i} className={cn('h-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse', i === lines - 1 && 'w-3/4')} />
    ))}
  </div>
)

export const SkeletonAvatar: React.FC<{ size?: number }> = ({ size = 96 }) => (
  <div
    className="rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse"
    style={{ width: size, height: size }}
  />
)
