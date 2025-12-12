import SimpleHeader from "@/components/SimpleHeader";
import FooterLinks from "@/components/FooterLinks";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-muted/50">
      <SimpleHeader />
      {children}
      <FooterLinks />
    </div>
  );
}

