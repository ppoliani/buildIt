import Moment = moment.Moment;

interface ITemp {
    min: Number;
    max: Number;
}

interface IWind {
    speed: Number;
    degree: Number;
}

export interface IEntry {
    date: Moment;
    temp: ITemp;
    humidity: Number;
    wind: IWind;
    icon: string;
}

export interface IWeather {
    city: string;
    entries: Array<IEntry>;
}
