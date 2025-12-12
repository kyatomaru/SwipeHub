import type { Metadata } from "next";
import TermsContent from "./components/TermsContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "利用規約 - SwipeHub",
  description: "SwipeHubの利用規約",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">利用規約</CardTitle>
        </CardHeader>
        <CardContent>
          <TermsContent />
        </CardContent>
      </Card>
    </main>
  );
}

