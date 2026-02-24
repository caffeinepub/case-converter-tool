import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Type, ArrowUp, ArrowDown } from 'lucide-react';

function App() {
  const [text, setText] = useState('');

  const convertToUppercase = () => {
    setText(text.toUpperCase());
  };

  const convertToLowercase = () => {
    setText(text.toLowerCase());
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-10 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
            <Type className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Case Converter</h1>
            <p className="text-xs text-muted-foreground">Transform your text instantly</p>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <Card className="w-full max-w-2xl shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Text Transformation</CardTitle>
            <CardDescription>
              Enter your text below and choose a conversion option
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Textarea
                placeholder="Enter your text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-[200px] resize-none text-base leading-relaxed"
              />
              <p className="text-xs text-muted-foreground">
                {text.length} character{text.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={convertToUppercase}
                size="lg"
                className="flex-1 min-w-[140px] gap-2"
                disabled={!text}
              >
                <ArrowUp className="w-4 h-4" />
                UPPERCASE
              </Button>
              <Button
                onClick={convertToLowercase}
                size="lg"
                variant="secondary"
                className="flex-1 min-w-[140px] gap-2"
                disabled={!text}
              >
                <ArrowDown className="w-4 h-4" />
                lowercase
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="border-t border-border/40 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} · Built with love using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'case-converter'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
