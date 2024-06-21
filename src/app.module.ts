import { Module } from '@nestjs/common';
import { EventsCoreModule } from '../libs/core/src/events/events-core.module';
import { PrismaModule } from '../libs/core/src/prisma/prisma.module';
import { SpotsCoreModule } from '../libs/core/src/spots/spots-core.module';

@Module({
  imports: [EventsCoreModule, PrismaModule, SpotsCoreModule],
})
export class AppModule {}
