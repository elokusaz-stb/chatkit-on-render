import { ChatKit, useChatKit } from "@openai/chatkit-react";

export function MyChat() {
  const { control } = useChatKit({
    api: {
      async getClientSecret() {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/chatkit/session`,
          { method: "POST" }
        );
        const { client_secret } = await res.json();
        return client_secret;
      },
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <ChatKit control={control} className="h-[600px] w-[360px]" />
    </div>
  );
}
