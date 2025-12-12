import type { Metadata } from "next";
import ContactContent from "./components/ContactContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "お問い合わせ - SwipeHub",
  description: "SwipeHubのお問い合わせ",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">お問い合わせ</CardTitle>
        </CardHeader>
        <CardContent>
          <ContactContent />
        </CardContent>
      </Card>
    </main>
  );
}

