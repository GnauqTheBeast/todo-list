import User from "./users";

interface Comment {
    id: number;
    content: string;
    parentId: number | null;
    userId: number;
    user: User;
    replies?: Comment[];
} 

export default Comment