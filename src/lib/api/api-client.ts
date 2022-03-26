import {doFetch, RequestMethodEnum} from "./do-fetch";
import {SuggestTypesEnum} from "../../types/suggest";

const api = {
    getForm: async () => {
      return doFetch({
          url: '/dmt/form',
          method: RequestMethodEnum.GET,
      });
    },
    sendForm: async (sessionId: number, data: any) => {
        await doFetch({
            data: data,
            url: `/dmt/form?sessionId=${sessionId}`,
            method: RequestMethodEnum.POST,
        })
    },
    getSuggestData: async (sessionId: string, suggestType: SuggestTypesEnum, page: number) => {
        return doFetch({
            url: `/dmt/suggest/${suggestType}?sessionId=${sessionId}`,
            method: RequestMethodEnum.GET,
        });
    },
    sendFeedBack: async (sessionId: number, suggestId: number, suggestType: SuggestTypesEnum, reaction: 'READ' | "LIKE") => {
        return doFetch({
            url: `/dmt/suggest/${suggestType}/feedback`,
            method: RequestMethodEnum.POST,
            data: {
                sessionId,
                suggestId,
                reaction,
            },
        });
    },
}

export default api;