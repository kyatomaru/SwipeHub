import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface EmptyStateCardProps {
  title: string;
  description: string;
}

export default function EmptyStateCard({
  title,
  description,
}: EmptyStateCardProps) {
  return (
    <Card className="w-full mx-auto text-center border-none">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

