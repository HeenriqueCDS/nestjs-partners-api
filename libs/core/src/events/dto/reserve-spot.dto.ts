import { TicketKind } from '@prisma/client';

export class ReserveSpotDTO {
  spots: string[];
  ticket_kind: TicketKind;
  eventId: string;
  email: string;
}
