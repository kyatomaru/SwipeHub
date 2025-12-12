"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface AgeGateFormProps {
  denyMessage: boolean;
  onAccept: () => void;
  onDeny: () => void;
}

export default function AgeGateForm({
  denyMessage,
  onAccept,
  onDeny,
}: AgeGateFormProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 px-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-center">
            18歳以上のみ利用可能
          </CardTitle>
          <p className="text-center text-muted-foreground leading-relaxed mt-4">
            本サイトは成人向けコンテンツを扱うため、18歳未満の方はご利用できません。
          </p>
        </CardHeader>
        <CardContent>
          {denyMessage && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription className="text-center">
                18歳未満の方はご利用できません
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-3 mb-8">
          <Button onClick={onAccept} variant="default" className="w-full" size="lg">
            はい（18歳以上）
          </Button>
          <Button
            onClick={onDeny}
            variant="secondary"
            className="w-full"
            size="lg"
          >
            いいえ
          </Button>
        </div>

          <div className="border-t border-border pt-6">
            <div className="flex flex-col gap-3 text-sm">
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground text-center transition-colors"
              >
                利用規約
              </Link>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground text-center transition-colors"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground text-center transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

