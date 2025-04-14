export interface Task {
  _id: string;
  title: string;
  description: string;
  frequency: string;
  pointsReward: number;
  rewardDetails: string;
  type: string;
  actionUrl: string;
  active: boolean;
  target: number;
  socialTaskType?: string;
  referralTaskType?: string;
  createdAt: string;
  updatedAt: string;
}

export interface EarnTaskItem {
  _id: string;
  userId: string;
  taskId: string;
  title: string;
  description: string;
  pointsReward: number;
  rewardDetails: string;
  type: string;
  frequency: string;
  status: string;
  progress: number;
  nextResetTime: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  task: Task;
  id: string;
}

export type EarnTaskListResponse = {
  data: {
    items: EarnTaskItem[];
  };
};
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  active: boolean;
  role: 'user' | 'admin' | string; // Extend as needed
  referralCode: string;
  isTelegramPremium: boolean | null;
  pointsBalance: number;
  timezone: string;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
  transactionCount: number;
  referralCount: number;
  achievementCount: number;
  lotteryEntries: number;
  doublePointsActive: boolean;
  socials: any[]; // Define more specific type if known
}
export interface MeRespone{
      data:{
        data: User
      }
}
