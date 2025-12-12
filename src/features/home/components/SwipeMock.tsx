import EmptyStateCard from "@/components/EmptyStateCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaTimes, FaExternalLinkAlt, FaHeart, FaArrowLeft } from "react-icons/fa";
import { IconContext } from 'react-icons'

export default function SwipeMock() {
  return (
    <Card className="w-full h-full flex flex-col">
      <CardContent className="flex-1 flex flex-col py-6">
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <EmptyStateCard
              title="現在コンテンツがありません"
              description="準備中です。しばらくしてから再度お試しください。"
            />
          </div>

          {/* アクションボタン */}
          <div className="flex justify-center items-center gap-4 mt-auto pt-4">
            <IconContext.Provider value={{ size: '100px' }}>
              <Button 
              variant="outline" 
              size="icon" 
              className="h-16 w-16 rounded-full border-gray-300 text-gray-400 hover:bg-gray-950/20"
              >
                <FaArrowLeft size="80px" />
              </Button>
              <Button
                disabled
                variant="outline"
                size="icon"
                className="h-16 w-16 rounded-full border-red-300 text-red-400 hover:bg-red-950/20"
              >
                <FaTimes className="h-16 w-16" />
              </Button>
              <Button
                disabled
                variant="outline"
                size="icon"
                className="h-16 w-16 rounded-full border-blue-300 text-blue-400 hover:bg-blue-950/20"
              >
                <FaExternalLinkAlt className="h-16 w-16" />
              </Button>
              <Button
                disabled
                variant="outline"
                size="icon"
                className="h-16 w-16 rounded-full border-pink-300 text-pink-400 hover:bg-pink-950/20"
              >
                <FaHeart className="h-16 w-16" />
              </Button>
            </IconContext.Provider>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

