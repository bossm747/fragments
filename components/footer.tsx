import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Innovate Hub Ph. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <Link href="https://innodev.ph" target="_blank" className="text-muted-foreground hover:text-primary">
            Home
          </Link>
          <Link href="https://innodev.ph/about" target="_blank" className="text-muted-foreground hover:text-primary">
            About
          </Link>
          <Link href="https://innodev.ph/contact" target="_blank" className="text-muted-foreground hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
