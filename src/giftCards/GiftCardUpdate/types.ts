import { Dialog } from "@saleor/types";

export enum GiftCardUpdatePageActionParamsEnum {
  SET_BALANCE = "set-balance",
  DELETE = "delete"
}

export type GiftCardUpdatePageUrlQueryParams = Dialog<
  GiftCardUpdatePageActionParamsEnum
>;
