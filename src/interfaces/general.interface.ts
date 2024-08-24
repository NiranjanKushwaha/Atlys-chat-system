export interface IPostData {
  posterName: string;
  posterImage: string;
  timeAgo: string;
  content: string;
  icon:string;
  commentsCount: number;
  comments?: IPostData[];
  isCommentsVisible?:boolean;
}