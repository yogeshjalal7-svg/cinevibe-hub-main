import { Film, Github, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Film className="h-6 w-6 text-primary" />
            <span className="font-heading font-bold text-foreground">CineVibe</span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Created by Yogesh Singh</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            12th Grade School Project • 2025
          </div>
        </div>
      </div>
    </footer>
  );
}
