import {doFetch, RequestMethodEnum} from "./do-fetch";
import {SuggestTypesEnum} from "../../types/suggest";

export const api = {
    getForm: async () => {
      return doFetch({
          url: '/form',
          method: RequestMethodEnum.GET,
      });
    },
    sendForm: async (data: any) => {
        await doFetch({
            data: data,
            url: '/form/send',
            method: RequestMethodEnum.POST,
        })
    },
    getSuggestData: async (suggestType: SuggestTypesEnum, page: number) => {
        return doFetch({
            url: `/${suggestType}`,
            method: RequestMethodEnum.GET,
        });
    }
}