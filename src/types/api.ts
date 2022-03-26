import { IBlockData } from "./form";

export interface IFormApi {
    sessionId: number;
    blocks: Array<IBlockData>;
}