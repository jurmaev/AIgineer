import { api } from '../axios';
import { useStore } from '../store';

type SendPromptBody = {
  additionalWishes: string;
  celebrationId: string;
  toneId: string;
  styleId: string;
  receiverName: string;
};

type SendPromptResponse = {
  content: string;
};

export function usePostPrompt() {
  const setContent = useStore((store) => store.setContent);
  const setIsLoading = useStore((store) => store.setIsLoading);

  const sendPrompt = async (body: SendPromptBody) => {
    setIsLoading(true);

    const response = await api.post<SendPromptResponse>('/prompt/send', body);

    setContent(response.data.content);
    setIsLoading(false);
  };

  return sendPrompt;
}
