export function Footer() {
    return (
        <footer className="border-t-2 border-primary bg-primary py-12 text-primary-foreground">
            <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
                <div className="text-center md:text-left">
                    <h4 className="mb-2 text-xl font-bold uppercase tracking-widest text-primary-foreground">The Developer Foundry</h4>
                    <p className="text-sm text-primary-foreground/80">© 2025. Built for builders.</p>
                </div>

                <div className="flex gap-6 font-mono text-sm">
                    <a href="#" className="hover:text-accent hover:underline">Twitter</a>
                    <a href="#" className="hover:text-accent hover:underline">LinkedIn</a>
                    <a href="#" className="hover:text-accent hover:underline">GitHub</a>
                </div>
            </div>
        </footer>
    )
}
