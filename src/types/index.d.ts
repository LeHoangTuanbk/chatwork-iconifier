type Role = "user" | "system" | "assistant";

type Message = {
  role: Role;
  content: string;
};
