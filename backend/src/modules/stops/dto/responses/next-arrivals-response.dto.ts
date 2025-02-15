import { ObjectType, Field } from '@nestjs/graphql';
import { MessageEntityResponse } from 'src/core/dto/message-entity-response.dto';

@ObjectType()
class DataNextArrivalsResponse {
  @Field(() => String)
  line_description: string;

  @Field(() => String)
  flag_description: string;

  @Field(() => String)
  arrival: string;

  @Field(() => String)
  latitude: string;

  @Field(() => String)
  longitude: string;

  @Field(() => String)
  stop_latitude: string;

  @Field(() => String)
  stop_longitude: string;

  @Field(() => String)
  short_flag_description: string;

  @Field(() => String)
  flag_sign_description: string;

  @Field(() => String)
  is_adapted: string;

  @Field(() => String)
  car_identifier: string;

  @Field(() => String)
  driver_identifier: string;

  @Field(() => String)
  schedule_deviation: string;

  @Field(() => String)
  last_gps_date: string;

  @Field(() => String)
  error_message: string;

  @Field(() => String)
  stop_line_code: string;

  @Field(() => String)
  position: string;
}

@ObjectType()
class StopNextArrivalsResponse {
  @Field(() => String)
  description: string;

  @Field(() => String)
  lat: string;

  @Field(() => String)
  lng: string;

  @Field(() => String)
  identificator: string;
}

@ObjectType()
class LineaNextArrivalsResponse {
  @Field(() => String)
  lineDescription: string;

  @Field(() => String)
  code: string;
}

@ObjectType()
export class NextArrivalsResult {
  @Field(() => StopNextArrivalsResponse, { nullable: true })
  stop?: StopNextArrivalsResponse;

  @Field(() => LineaNextArrivalsResponse, { nullable: true })
  line?: LineaNextArrivalsResponse;
  
  @Field(() => [DataNextArrivalsResponse], { nullable: true })
  data?: DataNextArrivalsResponse[]
}


@ObjectType()
export class NextArrivalsResponse extends MessageEntityResponse {
  @Field(() => NextArrivalsResult, { nullable: true })
  result?: NextArrivalsResult;
}
