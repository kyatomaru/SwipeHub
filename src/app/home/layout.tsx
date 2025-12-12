import type { Metadata } from "next";
import HomeLayoutWrapper from "@/components/HomeLayoutWrapper";

export const metadata: Metadata = {
  title: "ホーム - SwipeHub",
  description: "成人向け作品の情報を、スワイプ操作で発見しやすくするWebサイト",
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <HomeLayoutWrapper>{children}</HomeLayoutWrapper>;
}
