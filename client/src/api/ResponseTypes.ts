export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface TrelloCard {
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
