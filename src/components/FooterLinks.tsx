import Link from "next/link";

export default function FooterLinks() {
  return (
    <footer className="hidden md:block bg-muted border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link
            href="/terms"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            利用規約
          </Link>
          <Link
            href="/privacy"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            プライバシーポリシー
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </footer>
  );
}

