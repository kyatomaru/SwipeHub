"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaHandPointer, FaHeart, FaFilter, FaMagic, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SimpleHeader from "@/components/SimpleHeader";
import AgeGateForm from "@/features/age-gate/components/AgeGateForm";

export default function LandingPage() {
  const router = useRouter();
  const [isAdult, setIsAdult] = useState<boolean | null>(null);
  const [denyMessage, setDenyMessage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const adultStatus = localStorage.getItem("isAdult") === "true";
      setIsAdult(adultStatus);
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isAdult", "true");
      setIsAdult(true);
      window.dispatchEvent(new Event("localStorageChange"));
    }
  };

  const handleDeny = () => {
    setDenyMessage(true);
  };

  if (isAdult === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">読み込み中...</p>
      </div>
    );
  }

  // 18歳未満または年齢確認が未完了の場合、年齢ゲートを表示
  if (!isAdult) {
    return (
      <div className="min-h-screen bg-muted/50">
        <SimpleHeader />
        <div className="pt-16">
          <AgeGateForm
            denyMessage={denyMessage}
            onAccept={handleAccept}
            onDeny={handleDeny}
          />
        </div>
        {/* フッター */}
        <footer className="bg-muted border-t border-border mt-12">
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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SimpleHeader />
      <main className="pt-16">
        {/* ヒーローセクション */}
        <section className="relative overflow-hidden from-primary/10 via-background to-background py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                成人向け作品を
                <br />
                スワイプで発見
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                SwipeHubで、あなたの好みに合った作品を
                <br className="hidden md:block" />
                直感的なスワイプ操作で見つけましょう
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => router.push("/home")}
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  今すぐ始める
                  <FaArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                  onClick={() => {
                    const element = document.getElementById("features");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  詳しく見る
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 特徴セクション */}
        <section id="features" className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                主な機能
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                SwipeHubの特徴をご紹介します
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                      <FaHandPointer className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      スワイプ操作
                    </h3>
                    <p className="text-muted-foreground">
                      直感的なスワイプ操作で、気になる作品を素早く確認できます。右にスワイプでお気に入り、左にスワイプでスキップ。
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                      <FaHeart className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      パーソナライズされた提案
                    </h3>
                    <p className="text-muted-foreground">
                    あなたの好みに合わせて作品をパーソナライズ。スワイプ履歴から学習し、より適切な作品を提案します。
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                      <FaFilter className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      詳細な絞り込み
                    </h3>
                    <p className="text-muted-foreground">
                      ジャンル、タグ、その他の条件で作品を絞り込んで、あなた好みの作品だけを表示。
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="py-20 md:py-32 from-background to-primary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                さあ、始めましょう
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                今すぐSwipeHubで、あなたの好みに合った作品を発見してください
              </p>
              <Button
                onClick={() => router.push("/home")}
                size="lg"
                className="text-lg px-8 py-6"
              >
                今すぐ始める
                <FaArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* フッター */}
      <footer className="bg-muted border-t border-border mt-12">
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
    </div>
  );
}

