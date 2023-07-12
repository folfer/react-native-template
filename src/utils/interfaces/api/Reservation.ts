export interface AvailableReservationTime {
  reservationTime: string;
  available: boolean;
  canBeReservedUntil: number;
}

export interface AvailableSection {
  id: string;
  name: string;
  availableReservationTimes: AvailableReservationTime[];
}

export interface PartySize {
  partySize: number;
  available: boolean;
  availableSections: AvailableSection[];
}

export interface Availability {
  reservationDay: string;
  available: boolean;
  availablePartySize: number[];
  availableSections: string[];
  partySizes: PartySize[];
}

export interface IReservationAvailable {
  available: boolean;
  availableDays: string[];
  availableSections: IReservationSection[];
  availablePartySize: number[];
  availabilities: Availability[];
}

export interface IReservationSection {
  id: string;
  label: string;
}
