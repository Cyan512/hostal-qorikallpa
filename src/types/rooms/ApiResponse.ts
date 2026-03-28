import { RoomApiResponseItem } from "@/src/types/rooms/RoomApiResponseItem";

export type ApiResponse = {
  success: boolean;
  message: string;
  data: RoomApiResponseItem[];
  timestamp: number;
};