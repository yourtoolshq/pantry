import type { Handle } from "remix/ui"
import { Document } from "../document.tsx"

export function StoresListPage(handle: Handle) {
  return () => {
    return (
        <Document>
            <main>
                <h1>Stores</h1>
            </main>
        </Document>
    )
  }
}