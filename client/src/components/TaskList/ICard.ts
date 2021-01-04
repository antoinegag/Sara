export default interface ICard {
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
