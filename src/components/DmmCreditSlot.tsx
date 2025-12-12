import { Card, CardContent } from "@/components/ui/card";

export default function DmmCreditSlot() {
  return (
    <Card className="mt-8 bg-muted/50">
      <CardContent className="pt-6">
        <div className="text-center">
          <p className="text-sm text-foreground mb-2">DMM Web API クレジット</p>
          <div className="bg-background border border-dashed border-border rounded p-4">
            <p className="text-xs text-muted-foreground">
              ※ DMM Web API 指定HTMLをここに貼り付け予定
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

