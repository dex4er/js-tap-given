declare global {
  function Feature (what: string, how: () => any): any
  function Scenario (what: string, how: () => any): any
  function Given (what: string, how: () => any): any
  function When (what: string, how: () => any): any
  function Then (what: string, how: () => any): any
  function And (what: string, how: () => any): any
  function Before (what: string, how: () => any): any
  function Before (how: () => any): any
  function After (what: string, how: () => any): any
  function After (how: () => any): any
  function BeforeEach (how: () => any): any
  function AfterEach (how: () => any): any
}

import * as tap from 'tap'

export function tapGiven (t: typeof tap): void
export default function tapGiven (t: typeof tap): void
