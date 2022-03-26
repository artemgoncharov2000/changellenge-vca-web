import axios from "axios";

export enum RequestMethodEnum {
    GET = 'GET',
    OPTIONS = 'OPTIONS',
    HEAD = 'HEAD',
    PUT = 'PUT',
    POST = 'POST',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

const END_POINT = 'http://178.154.229.231';

export interface FetchResponse<T> {
    status: number;
    data: T;
    reason?: string;
}

export type RequestParams = {
    method: RequestMethodEnum,
    url: string,
    data?: any,
}

export async function doFetch({
    data,
    method,
    url,
    } //@ts-expect-error
    : RequestParams): WrapGeneratorT<FetchResponse> {
    const fullPath = END_POINT + url;

    try {
        // console.log('data: ', JSON.stringify(data))
        let response = await axios({
            url: fullPath,
            method: method,
            data: data,
            timeout: 1000,
            maxRedirects: 3,
        })
        return response['data'];
    } catch (err) {
        throw err;
    }

}