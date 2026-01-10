import { User, Award, Users, TrendingUp } from 'lucide-react';

export interface UserType {
    id: string;
    name: string;
    avatar: string; // URL
    jobTitle: string;
}

export interface CurrentUserType extends UserType {
    balance: number;
    level: number;
    levelTitle: string;
    nextLevelProgress: number; // 0-100
}

export interface PostType {
    id: string;
    sender: UserType;
    receiver: UserType;
    message: string;
    tags: string[];
    coins: number;
    timestamp: string;
    likes: number;
    comments: number;
}

export interface LeaderboardEntry {
    rank: number;
    user: UserType;
    coinsEarned: number;
}

export const CURRENT_USER: CurrentUserType = {
    id: 'u1',
    name: 'Alex Johnson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    jobTitle: 'Product Designer',
    balance: 1250,
    level: 5,
    levelTitle: 'Collaborator',
    nextLevelProgress: 75,
};

export const USERS: UserType[] = [
    CURRENT_USER,
    {
        id: 'u2',
        name: 'Laiba Ahmad',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        jobTitle: 'Frontend Dev',
    },
    {
        id: 'u3',
        name: 'Mike Ross',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        jobTitle: 'Backend Dev',
    },
    {
        id: 'u4',
        name: 'Emily Davis',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        jobTitle: 'Marketing Lead',
    }
];

export const POSTS: PostType[] = [
    {
        id: 'p1',
        sender: USERS[1], // Sarah
        receiver: USERS[2], // Mike
        message: 'Huge thanks for debugging that critical API issue late last night! You saved the demo!',
        tags: ['#Teamwork', '#Lifesaver'],
        coins: 50,
        timestamp: '2h ago',
        likes: 12,
        comments: 3,
    },
    {
        id: 'p2',
        sender: USERS[3], // Emily
        receiver: USERS[0], // Alex
        message: 'Love the new design concepts for the dashboard. The gradients are on point! 🎨',
        tags: ['#Innovation', '#Design'],
        coins: 30,
        timestamp: '5h ago',
        likes: 8,
        comments: 1,
    },
    {
        id: 'p3',
        sender: USERS[0], // Alex
        receiver: USERS[1], // Sarah
        message: 'Great job organizing the team offsite. It was super fun!',
        tags: ['#Culture', '#Fun'],
        coins: 20,
        timestamp: '1d ago',
        likes: 15,
        comments: 5,
    }
];

export const LEADERBOARD: LeaderboardEntry[] = [
    { rank: 1, user: USERS[1], coinsEarned: 450 },
    { rank: 2, user: USERS[2], coinsEarned: 320 },
    { rank: 3, user: USERS[0], coinsEarned: 280 },
    { rank: 4, user: USERS[3], coinsEarned: 150 },
    { rank: 5, user: { id: 'u5', name: 'David Kim', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', jobTitle: 'Engineer' }, coinsEarned: 90 },
];
