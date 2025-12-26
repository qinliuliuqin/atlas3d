export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.08] py-7">
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap gap-2.5 items-center justify-between text-muted-foreground">
          <div>© {currentYear} Atlas Spatial Intelligence · All rights reserved.</div>
          <div>
            <a href="#" className="hover:text-foreground transition-colors" title="Back to top">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
