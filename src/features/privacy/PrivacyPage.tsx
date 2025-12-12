import type { Metadata } from "next";
import PrivacyContent from "./components/PrivacyContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "プライバシーポリシー - SwipeHub",
  description: "SwipeHubのプライバシーポリシー",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">プライバシーポリシー</CardTitle>
        </CardHeader>
        <CardContent>
          <PrivacyContent />
        </CardContent>
      </Card>
    </main>
  );
}

