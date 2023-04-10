import { api } from "@einzel-repo/core";

export interface IMessage {
    id: number;
    type: string;
    title: string;
    description: string;
}

async function fetchMessage() {
    const res = await api.get<IMessage>("/message/1")
    return res
}

export default {
    fetchMessage
}