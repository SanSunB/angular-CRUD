export interface Passenger {
  name: string;
  id: number;
  checkedIn: boolean | null;
  checkedInDate?: number;
  baggage: string;

}
