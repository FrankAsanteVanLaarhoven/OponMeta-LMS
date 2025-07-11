export interface Companion {
  id: string;
  name: string;
  subject: string;
  topic: string;
  description: string;
  duration: number;
  style: 'casual' | 'formal';
  voice: 'male' | 'female';
  author?: string;
  created_at?: string;
  updated_at?: string;
}

export interface CompanionComponentProps {
  companionId: string;
  subject: string;
  topic: string;
  name: string;
  userName: string;
  userImage: string;
  style: 'casual' | 'formal';
  voice: 'male' | 'female';
}

export interface SavedMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface Message {
  type: string;
  role: string;
  transcript?: string;
  transcriptType?: string;
}

export interface CreateCompanion {
  name: string;
  subject: string;
  topic: string;
  description: string;
  duration: number;
  style: 'casual' | 'formal';
  voice: 'male' | 'female';
}

export interface GetAllCompanions {
  limit?: number;
  page?: number;
  subject?: string;
  topic?: string;
}

export interface SessionHistory {
  id: string;
  companion_id: string;
  user_id: string;
  created_at: string;
  companions?: Companion;
}

export interface Bookmark {
  id: string;
  companion_id: string;
  user_id: string;
  created_at: string;
  companions?: Companion;
}

export interface SearchParams {
  subject?: string;
  topic?: string;
  page?: string;
}

export interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

export interface CompanionCardProps extends Companion {
  color: string;
  isBookmarked?: boolean;
  onBookmarkToggle?: (companionId: string) => void;
}

export interface CompanionFormProps {
  initialData?: Partial<Companion>;
  onSubmit: (data: CreateCompanion) => void;
  isLoading?: boolean;
}

export interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

export interface SubjectFilterProps {
  selectedSubject?: string;
  onSubjectChange?: (subject: string) => void;
  className?: string;
}

export interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
  className?: string;
} 