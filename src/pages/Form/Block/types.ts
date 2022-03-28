import {IBlockData} from "../../../types/form";

export interface IBlockProps {
    blockData: IBlockData;
    visible: boolean;
    goNext: () => void;
    goBack: () => void;
    submitForm?: () => void;
    isLast?: boolean;
    activeTabIndex: number;
    updateInitialValues: (sessionId: number, data: {[elemId: number]: string}) => void;
}