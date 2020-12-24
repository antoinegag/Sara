import fetch, { RequestInit } from "node-fetch";

const TOKEN = process.env.TRELLO_TOKEN;
const KEY = process.env.TRELLO_KEY;
const TODAY_LIST = process.env.TRELLO_LIST_TODAY;

async function fetchTrelloAPI(
  endpoint: string,
  options?: RequestInit,
  params?: [string]
) {
  return fetch(
    `https://api.trello.com/1/${endpoint}?key=${KEY}&token=${TOKEN}${
      (params && params.length > 0 && params.map((p) => `&${p}`)) || ""
    }`,
    options
  );
}

export async function getTodayCards() {
  const res = await fetchTrelloAPI(`lists/${TODAY_LIST}/cards`);
  const json = await res.json();

  return json as Card[];
}

export async function getCard(id: string) {
  const res = await fetchTrelloAPI(`cards/${id}`);
  const json = await res.json();

  return json as Card;
}

export interface Card {
  id: string;
  checkItemStates: [{ idCheckItem: string; state: string }];
  closed: boolean;
  dateLastActivity: string;
  desc: string;
  dueReminder: number;
  idBoard: string;
  idList: string;
  idShort: number;
  idAttachmentCover: null;
  idLabels: [string];
  name: string;
  dueComplete: boolean;
  due: string;
  shortUrl: string;
  url: "https://trello.com/c/JwRqDx9C/44-sara-v2";
  badges: {
    checkItems: 3;
    checkItemsChecked: 1;
    description: true;
    due: string;
    dueComplete: boolean;
  };
  labels: [
    {
      id: string;
      idBoard: string;
      name: string;
      color: string;
    }
  ];
  idChecklists: [string];
}
